#!/""usr/bin/env"" node;
import { execSync  } from "child_process";
import fs from "fs";
import path from "path";
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(`"🗺️ Starting continuous sitemap runner automation...")

// Get automation interval from environment variable (default: 6 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 21600000; // 6 hours;
async function $1() {

  try {
  console.log(`🗺️ Running sitemap generation at ${new Date().toISOString()})

    // Build the project first;
    console.log(`"🏗️ Building project for sitemap generation...")
    try {
  execSync("npm run build", { stdio: "inherit" })
      console.log("✅ Build completed"`),
} catch (error) {
  console.log(`"⚠️  Build failed but continuing...")
console.log(`🗺️ Starting continuous sitemap runner automation...`)
// Get automation interval from environment variable (default: 6 hours)