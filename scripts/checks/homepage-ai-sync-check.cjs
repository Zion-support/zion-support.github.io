#!/usr/bin/env node
/**
 * Ensures the commercial homepage still carries live Stripe SKUs and
 * email-proven field offers. package.json script: homepage:ai-sync:check
 */
const fs = require("fs");
const path = require("path");

const htmlPath = path.join(__dirname, "..", "..", "public", "index.html");
if (!fs.existsSync(htmlPath)) {
  console.error("homepage-ai-sync-check: missing public/index.html");
  process.exit(1);
}
const html = fs.readFileSync(htmlPath, "utf8");
const required = [
  "buy.stripe.com",
  "from-the-field",
  "remote-hands-miami",
  "china-dc-engineers",
  "gpu-cloud-latam",
  "voice-ai-latam",
  "brazil-24x7-coverage",
  "success-stories",
  "eVq6oI7JqetS60j9qlcMM17",
  "8x2eVe6Fm71qfATaupcMM1d",
  "bJedRa0hqbBR71t2di4ZR1l",
];
const missing = required.filter((token) => !html.includes(token));
if (missing.length) {
  console.error("homepage-ai-sync-check: missing tokens:", missing.join(", "));
  process.exit(1);
}
console.log("homepage-ai-sync-check: ok");
