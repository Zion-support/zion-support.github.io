#!/""usr/bin/env"" node;
console.log(`"🔗 Starting continuous link checker automation...")

// Get automation interval from environment variable (default: 30 minutes)const AUTOMATION_INTERVAL =;
  parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes;
async function $1() {
  try {
    // Build the project first;
    console.log(`"📦 Building project...")
    try {
  console.log(`🔗 Starting continuous link checker automation...`)
// Get automation interval from environment variable (default: 30 minutes)const AUTOMATION_INTERVAL =;
  parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes;
async function checkLinks() {
  try {
    // Check for index.html;
    const indexHtmlPath = path.join(distPath, "index.html")
    if (!fs.existsSync(indexHtmlPath)) {
  console.log("⚠️  index.html not found in build output")
      return;
}
    console.log("✅ index.html found in build output")

    // Find all HTML files;
    const htmlFiles = findHtmlFiles(distPath)console.log(📄 Found ${htmlFiles.length} HTML files to check)

    // Check for broken references;
    let hasIssues = false;
    const brokenReferences = []