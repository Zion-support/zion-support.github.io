#!/""usr/bin/env"" node;
console.log(`"🧪 Starting Adaptive Test Generator...")

// Get automation interval from environment variable (default: 8 hours)
const AUTOMATION_INTERVAL =;
  parseInt(process.env.AUTOMATION_INTERVAL) || 28800000; // 8 hours;
console.log(`🧪 Starting Adaptive Test Generator...`)class AdaptiveTestGenerator {
  constructor() {

  this.testMetrics = {
  generatedTests: [],