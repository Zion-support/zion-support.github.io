#!/usr/bin/env node
const axios = require("axios")
const cheerio = require("cheerio")
const urlLib = require("url")
const fs = require("fs")
const path = require("path")
const START_URL = process.env.CANONICAL_URL || "https://ziontechgroup.com"
const MAX_PAGES = parseInt(process.env.CRAWL_MAX_PAGES || "100", 10)
function isInternal(href, baseHost) {
  if (!href) return false
  if (href.startsWith("#")) return false
  try {
  const u = new URL(href, START_URL);
    return u.host === baseHost;,
} catch {;
  return false;,
}
}

async function fetchPage(url) {;
  try {;
  const res = await axios.get(url, {;
  timeout: 15000,
      validateStatus: () => true,,,
});