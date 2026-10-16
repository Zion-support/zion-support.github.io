"use strict";(()=>{const slug="agent-canary-release-lab",names=[["baseline","Measured baseline and success criteria"],["eval","Representative and adversarial evaluations"],["scope","Tool scope and approvals tested"],["flag","Cohort feature flags available"],["telemetry","Safety and tool failure telemetry"],["rollback","Rollback / kill switch rehearsed"],["owner","Named accountable release owner"],["hold","Explicit human release approval"]],spec={"opts":[["change","Change class",["Prompt or model","Tool chain / agent","Production connector"]],["impact","Potential side effects",["Read only","External writes or communications"]]],"nums":[["users","Users in full rollout",1200],["threshold","Error threshold percentage",2]],"checks":[["baseline","Measured baseline and success criteria"],["eval","Representative and adversarial evaluations"],["scope","Tool scope and approvals tested"],["flag","Cohort feature flags available"],["telemetry","Safety and tool failure telemetry"],["rollback","Rollback / kill switch rehearsed"],["owner","Named accountable release owner"],["hold","Explicit human release approval"]],"notes":"Suggested cohort exposures of 1%, 5%, 25% are illustrative only; compare live metrics and stop on failed gates."};const $=id=>typeof document !== "undefined" ? document.getElementById(id) : null;
// Manual evidence only. No checklist result grants authority to operate a system.
function evaluate(input = {}) {
  const raw = input && typeof input === "object" ? input : {};
  const errors = [], scenario = {}, validChoices = {};
  for (const [id, label, options] of spec.opts) {
    const value = raw[id];
    const valid = typeof value === "string" && /^[0-9]$/.test(value) && Number(value) < options.length;
    scenario[id] = valid ? options[Number(value)] : null;
    validChoices[id] = valid;
    if (!valid) errors.push({id, message: label + ": " + "Choose a valid option."});
  }
  const isMcp = slug === "mcp-trust-boundary-studio";
  const notApplicable = [];
  if (isMcp && validChoices.transport && raw.transport === "1") notApplicable.push("tls", "aud", "pkce");
  if (isMcp && validChoices.risk && raw.risk === "0") notApplicable.push("approve");
  const active = names.filter(([id]) => !notApplicable.includes(id));
  const checked = active.filter(([id]) => raw[id] === true).map(([id]) => id);
  const missingControls = active.filter(([id]) => raw[id] !== true).map(([id]) => id);
  let validInputs = Object.values(validChoices).filter(Boolean).length;
  for (const [id, label] of spec.nums || []) {
    const text = typeof raw[id] === "string" ? raw[id].trim() : "";
    const value = Number(text);
    const valid = id === "users"
      ? /^\d{1,9}$/.test(text) && Number.isSafeInteger(value) && value >= 1 && value <= 100000000
      : /^(?:\d{1,3}(?:\.\d)?|\.\d)$/.test(text) && Number.isFinite(value) && value >= 0.1 && value <= 100;
    scenario[id] = valid ? value : null;
    if (valid) validInputs++;
    else errors.push({id, message: label + ": " + (id === "users"
      ? "Enter a whole number from 1 to 100000000."
      : "Enter a percentage from 0.1 to 100 with at most one decimal.")});
  }
  const denominator = active.length + spec.opts.length + (spec.nums || []).length;
  const score = Math.floor((checked.length + validInputs) * 100 / denominator);
  const reviewReady = errors.length === 0 && missingControls.length === 0;
  const cohorts = !isMcp && errors.length === 0
    ? [1, 5, 25].map(percent => ({percent, users: Math.ceil(scenario.users * percent / 100)})) : null;
  return {
    app: slug, schemaVersion: 2, score, reviewReady, authorized: false,
    verification: "SELF_REPORTED_NOT_INDEPENDENTLY_VERIFIED",
    status: reviewReady ? "READY FOR OWNER REVIEW - no action authorized" : "HOLD - incomplete or invalid evidence",
    checked, applicable: active.map(([id]) => id), notApplicable,
    missing: [...new Set([...missingControls, ...errors.map(e => e.id)])], errors, scenario, cohorts
  };
}
function mount(doc) {
  const node = id => doc.getElementById(id);
  const ids = ["lab", "score", "status", "findings", "extra", "notice", "copy", "export",
    ...names.map(([id]) => id), ...spec.opts.map(([id]) => id), ...(spec.nums || []).map(([id]) => id)];
  if (ids.some(id => !node(id))) throw new Error("Incomplete application markup.");
  const form = node("lab");
  function render() {
    const raw = {};
    for (const [id] of names) raw[id] = node(id).checked;
    for (const [id] of [...spec.opts, ...(spec.nums || [])]) raw[id] = node(id).value;
    const result = evaluate(raw);
    node("score").textContent = result.score + " / 100 input completeness (not authorization)";
    node("status").textContent = result.status;
    node("status").className = result.reviewReady ? "review" : "hold";
    node("findings").replaceChildren();
    const lines = result.errors.map(e => e.message);
    for (const id of result.missing.filter(id => names.some(([key]) => key === id))) lines.push("Evidence required: " + names.find(([key]) => key === id)[1]);
    for (const id of result.notApplicable) lines.push("Not applicable to this configuration: " + names.find(([key]) => key === id)[1]);
    if (result.reviewReady) lines.push("All manually selected controls checked; no external assurance performed.");
    for (const text of lines) { const li = doc.createElement("li"); li.textContent = text; node("findings").append(li); }
    for (const [id] of [...spec.opts, ...(spec.nums || [])]) {
      const error = result.errors.find(e => e.id === id);
      node(id).setAttribute("aria-invalid", error ? "true" : "false");
      if (typeof node(id).setCustomValidity === "function") node(id).setCustomValidity(error ? error.message : "");
    }
    for (const [id] of names) {
      const inactive = result.notApplicable.includes(id);
      node(id).disabled = inactive;
      node(id).setAttribute("aria-disabled", String(inactive));
    }
    if (slug === "agent-canary-release-lab") {
      node("extra").textContent = result.cohorts
        ? "Example gated rollout: " + result.cohorts.map(c => c.percent + "% \u2248 " + c.users.toLocaleString("en") + " users").join(" \u2192 ") + ". Halt on adverse safety signals or \u2265" + result.scenario.threshold.toLocaleString("en") + "% error increase; thresholds require owner validation."
        : "No rollout plan: correct the invalid inputs first.";
    } else {
      node("extra").textContent = "Transport and access level determine applicable checks. Local process security still requires owner review.";
    }
    return result;
  }
  form.addEventListener("input", render);
  form.addEventListener("change", render);
  form.addEventListener("submit", event => { event.preventDefault(); render(); });
  form.addEventListener("reset", () => setTimeout(render, 0));
  node("copy").addEventListener("click", async () => {
    const result = render();
    const text = result.app + " | " + result.status + " | " + result.score + "/100 | " + "Missing evidence: " + result.missing.join(", ");
    try { await navigator.clipboard.writeText(text); node("notice").textContent = "Summary copied. No authorization is granted."; }
    catch { node("notice").textContent = "Clipboard unavailable. Use Download JSON."; }
  });
  node("export").addEventListener("click", () => {
    let url;
    try {
      url = URL.createObjectURL(new Blob([JSON.stringify(render(), null, 2)], {type: "application/json"}));
      const a = doc.createElement("a"); a.href = url; a.download = slug + "-assessment.json";
      doc.body.append(a); a.click(); a.remove();
      node("notice").textContent = "Assessment downloaded locally; nothing sent to Zion. Unknown values remain null.";
    } catch { node("notice").textContent = "Download failed. Use Copy summary."; }
    finally { if (url) setTimeout(() => URL.revokeObjectURL(url), 1000); }
  });
  render();
  return {render};
}
if (typeof module !== "undefined" && module.exports) module.exports = {evaluate, mount};
if (typeof document !== "undefined") mount(document);
})();
