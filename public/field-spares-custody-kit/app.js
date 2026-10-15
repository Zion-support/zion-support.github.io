"use strict";
// Local planning only. Self-reported evidence can never authorize dispatch.
(function () {
  const APP = "field-spares-custody-kit";
  const CHECKS = {
    scope: "Final written scope and site",
    engineer: "Named engineer and qualifications",
    serial: "Old/new serial mapping",
    custody: "Chain-of-custody receipt",
    terms: "All-in costs and exclusions",
    client: "Client written acceptance",
    po: "Applicable PO / work order",
    zion: "Separate Zion written authorization"
  };
  const REFS = {ticket: "Work order reference", asset: "Original asset serial", part: "Replacement part serial"};
  const COSTS = {base: "Supplier base cost", travel: "Travel / parking", freight: "Freight", tax: "Taxes / duties"};
  const CHOICES = {
    movement: ["Local depot", "Imported part", "Already onsite"],
    sla: ["Planned visit", "Four-hour target", "Next business day"]
  };
  const MAX_COMPONENT_CENTS = 10000000000;

  function parseMoney(raw) {
    if (typeof raw !== "string") return null;
    const text = raw.trim();
    if (!/^\d{1,9}(?:\.\d{1,2})?$/.test(text)) return null;
    const [whole, fraction = ""] = text.split(".");
    const cents = Number(whole) * 100 + Number(fraction.padEnd(2, "0"));
    return Number.isSafeInteger(cents) && cents <= MAX_COMPONENT_CENTS ? cents : null;
  }

  function evaluate(input = {}) {
    const source = input && typeof input === "object" ? input : {};
    const errors = [];
    const scenario = {};
    const checked = Object.keys(CHECKS).filter(id => source[id] === true);
    const missingControls = Object.keys(CHECKS).filter(id => source[id] !== true);
    let completed = checked.length;
    for (const [id, label] of Object.entries(REFS)) {
      const value = typeof source[id] === "string" ? source[id].trim() : "";
      const valid = value.length > 0 && value.length <= 120;
      scenario[id] = valid ? value : null;
      if (valid) completed++;
      else errors.push({id, message: label + " must contain 1-120 characters."});
    }
    for (const [id, options] of Object.entries(CHOICES)) {
      const valid = typeof source[id] === "string" && /^[0-2]$/.test(source[id]);
      scenario[id] = valid ? options[Number(source[id])] : null;
      if (valid) completed++;
      else errors.push({id, message: "Choose a valid " + id + " option."});
    }
    let totalCents = 0;
    let costsValid = true;
    for (const [id, label] of Object.entries(COSTS)) {
      const cents = parseMoney(source[id]);
      scenario[id] = cents === null ? null : cents / 100;
      if (cents === null) {
        costsValid = false;
        errors.push({id, message: label + ": enter 0 to 100000000 with at most two decimals; blank means unknown."});
      } else {
        completed++;
        totalCents += cents;
      }
    }
    const positiveTotal = costsValid && totalCents > 0;
    if (positiveTotal) completed++;
    else if (costsValid) errors.push({id: "base", message: "Total cost is zero. Obtain a documented cost basis; this tool cannot clear a zero-cost quote."});
    // 18 checks: 8 declarations + 3 references + 2 choices + 4 costs + positive total.
    const score = Math.floor(completed / 18 * 100);
    const reviewReady = errors.length === 0 && missingControls.length === 0;
    // Integer-cent arithmetic rounds the 40% floor UP, never below the policy.
    const minimumSellCents = positiveTotal ? Math.floor((totalCents * 140 + 99) / 100) : null;
    const financial = positiveTotal ? {
      allInCents: totalCents,
      minimumSellCents,
      allIn: totalCents / 100,
      minimumSell: minimumSellCents / 100,
      markupMultiplier: 1.4,
      currency: "UNSPECIFIED_VERIFY_BEFORE_QUOTING",
      assumptionsUnverified: true
    } : null;
    return {
      app: APP, schemaVersion: 2, score,
      status: reviewReady ? "READY FOR OWNER REVIEW - not a dispatch release" : "HOLD - incomplete or invalid evidence",
      reviewReady, authorized: false, verification: "SELF_REPORTED_NOT_INDEPENDENTLY_VERIFIED",
      checked, missing: [...new Set([...missingControls, ...errors.map(e => e.id)])],
      errors, scenario, financial
    };
  }

  function mount(doc) {
    const $ = id => doc.getElementById(id);
    const form = $("lab");
    const required = ["lab", "score", "status", "findings", "extra", "notice", "copy", "export",
      ...Object.keys(CHECKS), ...Object.keys(REFS), ...Object.keys(COSTS), ...Object.keys(CHOICES)];
    if (required.some(id => !$(id))) throw new Error("Incomplete Field Spares application markup.");
    for (const id of Object.keys(COSTS)) {
      const el = $(id);
      el.step = "0.01"; el.min = "0"; el.max = "100000000"; el.required = true;
      el.defaultValue = ""; el.value = ""; el.placeholder = "Unknown - enter an amount or explicit 0";
    }
    for (const id of Object.keys(REFS)) { $(id).required = true; $(id).maxLength = 120; }
    for (const id of Object.keys(CHECKS)) $(id).required = true;

    function render() {
      const input = {};
      for (const id of Object.keys(CHECKS)) input[id] = $(id).checked;
      for (const id of [...Object.keys(REFS), ...Object.keys(COSTS), ...Object.keys(CHOICES)]) input[id] = $(id).value;
      const result = evaluate(input);
      $("score").textContent = result.score + " / 100 input completeness (not authorization)";
      $("status").textContent = result.status;
      $("status").className = result.reviewReady ? "review" : "hold";
      $("findings").replaceChildren();
      const messages = result.errors.map(e => e.message);
      for (const id of result.missing.filter(id => Object.hasOwn(CHECKS, id))) messages.push("Evidence required: " + CHECKS[id] + ".");
      if (!messages.length) messages.push("All inputs and declarations are complete. An accountable owner must verify documents, currency and tax treatment. No action is authorized by this tool.");
      for (const message of messages) { const li = doc.createElement("li"); li.textContent = message; $("findings").append(li); }
      for (const id of [...Object.keys(REFS), ...Object.keys(COSTS), ...Object.keys(CHOICES)]) {
        const error = result.errors.find(e => e.id === id);
        $(id).setAttribute("aria-invalid", error ? "true" : "false");
        if (typeof $(id).setCustomValidity === "function") $(id).setCustomValidity(error ? error.message : "");
      }
      const f = result.financial;
      $("extra").textContent = f
        ? "Unverified cost inputs: " + f.allIn.toFixed(2) + "; illustrative 1.40x minimum: " + f.minimumSell.toFixed(2) + ". Use one verified currency. Include each tax/cost once. Not a quotation or release."
        : "No price floor available. Enter all four costs (explicit 0 where applicable) with a positive total. Unknown or invalid costs are never converted to zero.";
      return result;
    }
    form.addEventListener("input", render);
    form.addEventListener("change", render);
    form.addEventListener("submit", event => { event.preventDefault(); render(); });
    form.addEventListener("reset", () => setTimeout(render, 0));
    $("copy").addEventListener("click", async () => {
      const result = render();
      const text = result.app + " | " + result.status + " | input completeness: " + result.score + "/100 | missing: " + result.missing.join(", ") + " | authorized: false";
      try { await navigator.clipboard.writeText(text); $("notice").textContent = "Summary copied. No authorization is granted."; }
      catch { $("notice").textContent = "Clipboard unavailable. Use Download JSON."; }
    });
    $("export").addEventListener("click", () => {
      let url;
      try {
        url = URL.createObjectURL(new Blob([JSON.stringify(render(), null, 2)], {type: "application/json"}));
        const a = doc.createElement("a"); a.href = url; a.download = APP + "-assessment.json";
        doc.body.append(a); a.click(); a.remove();
        $("notice").textContent = "Assessment downloaded locally; nothing sent to Zion. Unknown values remain null.";
      } catch { $("notice").textContent = "Download failed. Use Copy summary."; }
      finally { if (url) setTimeout(() => URL.revokeObjectURL(url), 1000); }
    });
    render();
    return {render};
  }
  if (typeof module !== "undefined" && module.exports) module.exports = {evaluate, parseMoney, mount};
  if (typeof document !== "undefined") mount(document);
})();
