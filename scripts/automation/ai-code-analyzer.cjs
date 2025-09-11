console.log(`"🤖 Starting AI Code Analyzer...")

// Get automation interval from environment variable (default: 4 hours)
const AUTOMATION_INTERVAL =;
  parseInt(process.env.AUTOMATION_INTERVAL) || 14400000; // 4 hours;