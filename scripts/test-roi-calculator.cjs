const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const calculatorModule = { exports: {} };
// This repo treats .js as ESM, while the browser uses a classic <script>.
// Execute the exact shipping source in a DOM-free CommonJS-shaped VM instead.
vm.runInNewContext(
  fs.readFileSync(path.join(__dirname, "../public/assets/js/roi-calculator.js"), "utf8"),
  { module: calculatorModule, document: undefined },
  { filename: "roi-calculator.js", timeout: 3000 }
);
const { calculate, formatScenarioSummary } = calculatorModule.exports;
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
    for (const attr of ["data-summary-title", "data-summary-disclaimer", "data-copied", "data-manual"]) assert.ok(html.includes(attr + "="));
    for (const id of ["roiSummary", "roiCopySummary", "roiCopyStatus"]) assert.ok(html.includes('id="' + id + '"'));
    assert.match(html, /id="roiCopyStatus" role="status" aria-live="polite"/);
    assert.match(html, /id="roiSummary" rows="12" readonly/);
    for(const attr of ["data-error-prefix","data-roi-na","data-payback-na","data-payback-beyond"]) assert.ok(html.includes(attr+"="));
    assert.match(html, /href="#team"/);
    assert.match(html, /class="panel conversion"/);
    assert.match(html, /<details>/);
    const nav = {en:"Languages",pt:"Idiomas",es:"Idiomas",fr:"Langues",de:"Sprachen"}[lang];
    assert.ok(html.includes('aria-label="'+nav+'"'));
    assert.ok(html.includes('href="/discovery/"'));
    for(const name of ["monthly","setup","months"]) {
      const input=html.match(new RegExp('<input\\b[^>]*\\bname="'+name+'"[^>]*>'));
      assert.ok(input && /\brequired\b/.test(input[0]),lang+" "+name);
    }
    assert.match(html, /<details>/);
    assert.ok(html.includes('href="/discovery/"'));
    assert.match(html, /class="panel conversion"/);
    for (const link of routes) assert.ok(html.includes("https://ziontechgroup.com" + link), file + " missing " + link);
    assert.equal((html.match(/rel="alternate" hreflang=/g) || []).length, 6);
  }
});

const baseline={team:4,hours:1,rate:25,monthly:100,setup:600,months:12};
const near=(x,y)=>assert.ok(Math.abs(x-y)<1e-8, x+" != "+y);
test("high costs, insufficient benefit and horizons",()=>{
for(const [input,cost,net,roi,payback] of [
  [{...baseline,months:1},700,-266.66666666666663,-38.09523809523809,1.8],
  [{...baseline,months:24},3000,7400,246.66666666666666,1.8],
  [{...baseline,months:120},12600,39400,312.6984126984127,1.8],
  [{...baseline,monthly:1000},12600,-7400,-58.73015873015873,null],
  [{team:1,hours:0.1,rate:1,monthly:10,setup:100,months:12},220,-214.8,-97.63636363636364,null]
]) {
const r=calculate(input);assert.equal(r.totalCost,cost);near(r.netValue,net);near(r.roiPercent,roi);
if(payback===null)assert.equal(r.paybackMonths,null);else near(r.paybackMonths,payback);
}});
test("reject HTML-out-of-range and malformed inputs",()=>{
for(const over of [{hours:0.05},{rate:0.001},{team:1.5},{team:false},{monthly:-1},{months:0},{hours:" "},{rate:"0x10"}])
assert.equal(calculate({...baseline,...over}),null,JSON.stringify(over));
});
test("zero-denominator and numeric overflow do not display Infinity",()=>{
const free=calculate({...baseline,monthly:0,setup:0});assert.equal(free.roiPercent,null);
const tiny=calculate({...baseline,monthly:0,setup:1e-308});assert.equal(tiny.roiPercent,null);
});

const scenarioOptions={
 locale:"en",currency:"USD",title:"Illustrative Zion ROI",
 disclaimer:"Capacity value is not verified cash savings. No FX conversion.",
 currencyLabel:"Currency",fieldLabels:["Team","Hours/week","Hourly cost","Monthly cost","Setup","Horizon"],
 metricLabels:["Recovered hours","Gross capacity","Total costs","Net scenario","ROI","Setup payback"],
 roiNa:"Undefined",paybackNa:"Not reached",paybackBeyond:"beyond horizon",monthsUnit:"months"
};
test("scenario summary includes modeled inputs, outputs and disclaimer",()=>{
 const summary=formatScenarioSummary(baseline,calculate(baseline),scenarioOptions);
 assert.match(summary,/ROI: 188\.89%/);
 assert.match(summary,/Total costs: \$1,800\.00/);
 assert.match(summary,/Net scenario: \$3,400\.00/);
 assert.match(summary,/Currency: USD/);
 assert.match(summary,/not verified cash savings/);
 assert.doesNotMatch(summary,/https?:\/\//);
});
test("scenario summary handles payback beyond horizon and undefined ROI",()=>{
 const short={...baseline,months:1};
 assert.match(formatScenarioSummary(short,calculate(short),scenarioOptions),/1\.8 months \(beyond horizon\)/);
 const free={...baseline,monthly:0,setup:0};
 assert.match(formatScenarioSummary(free,calculate(free),scenarioOptions),/ROI: Undefined/);
});
test("currency switch in summary does not convert underlying values",()=>{
 const result=calculate(baseline);
 const a=formatScenarioSummary(baseline,result,scenarioOptions);
 const b=formatScenarioSummary(baseline,result,{...scenarioOptions,currency:"BRL",locale:"pt-BR"});
 assert.match(a,/\$3,400\.00/);
 assert.match(b,/3\.400,00/);
 assert.equal(result.netValue,3400);
});
test("invalid summary options are rejected",()=>{
 assert.equal(formatScenarioSummary(null,calculate(baseline),scenarioOptions),null);
 assert.equal(formatScenarioSummary(baseline,calculate(baseline),{...scenarioOptions,currency:"ABC"}),null);
 assert.equal(formatScenarioSummary(baseline,calculate(baseline),{...scenarioOptions,fieldLabels:[]}),null);
});
