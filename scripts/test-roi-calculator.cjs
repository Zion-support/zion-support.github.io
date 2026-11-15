const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { calculate } = require("../public/assets/js/roi-calculator.js");
const root = path.join(__dirname, "..", "public");

test("calculates 52/12 monthly hours and net value with transparent costs", () => {
  const r = calculate({ team: 4, hours: 1, rate: 25, monthly: 100, setup: 600, months: 12 });
  assert.ok(r);
  assert.ok(Math.abs(r.recoveredHours - 52 / 3) < 1e-9);
  assert.ok(Math.abs(r.grossMonthly - 1300 / 3) < 1e-9);
  assert.equal(r.totalCost, 1800);
  assert.ok(Math.abs(r.netValue - 3400) < 1e-9);
  assert.ok(Math.abs(r.roiPercent - 188.88888888888889) < 1e-9);
  assert.ok(Math.abs(r.paybackMonths - 1.8) < 1e-9);
});
test("zero cost has no defined ROI percentage, and nonpositive benefit has no payback", () => {
  assert.equal(calculate({ team: 1, hours: 1, rate: 1, monthly: 0, setup: 0, months: 1 }).roiPercent, null);
  assert.equal(calculate({ team: 1, hours: 1, rate: 1, monthly: 1000, setup: 50, months: 12 }).paybackMonths, null);
});
test("rejects missing, negative, noninteger team, invalid months and extreme inputs", () => {
  const baseline = { team: 4, hours: 1, rate: 25, monthly: 100, setup: 600, months: 12 };
  for (const over of [{team: ""}, {team: -1}, {team: 1.5}, {hours: 0}, {rate: "abc"}, {months: 121}, {months: 1.5}, {setup: Infinity}]) {
    assert.equal(calculate({ ...baseline, ...over }), null);
  }
});
test("all five localized pages are substantive, reciprocal and use shared assets", () => {
  const langs = ["en", "pt", "es", "fr", "de"];
  const routes = langs.map(l => l === "en" ? "/roi-calc/" : "/" + l + "/roi-calc/");
  for (const lang of langs) {
    const file = path.join(root, lang === "en" ? "roi-calc" : lang + "/roi-calc", "index.html");
    const html = fs.readFileSync(file, "utf8");
    assert.ok(html.length > 3000, file);
    assert.doesNotMatch(html, /Coming soon|<title>Stub/i);
    assert.match(html, /id="roiForm"/);
    assert.match(html, /assets\/js\/roi-calculator\.js/);
    assert.match(html, /assets\/css\/roi-calculator\.css/);
    assert.match(html, /rel="canonical"/);
    assert.match(html, /data-months-unit=/);
    assert.match(html, /<details>/);
    assert.match(html, /href="\\/discovery\\/"/);
    assert.match(html, /class="panel conversion"/);
    for (const link of routes) assert.ok(html.includes("https://ziontechgroup.com" + link), file + " missing " + link);
    assert.equal((html.match(/rel="alternate" hreflang=/g) || []).length, 6);
  }
});
