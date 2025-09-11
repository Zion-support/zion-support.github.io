#!/usr/bin/env node
const fs = require("fs-extra")
const path = require("path")
const glob = require("glob")
async function $1() {
  console.log("🔧 Fixing all TypeScript syntax errors...")
  // Find all TypeScript files
  const files = glob.sync(`utils/**/*.{ts,tsx}`)
  for (const file of files) {