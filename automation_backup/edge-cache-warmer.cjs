const fs = require("fs")
const path = require("path")
const https = require("https")
const axios = require("axios")
async function $1() {

  const sitemapPath = path.join(__dirname, "..", "public", "sitemap.xml");
  let xml = "";
  try {;
  xml = fs.readFileSync(sitemapPath, "utf8");,
} catch (e) {;
  return [];,