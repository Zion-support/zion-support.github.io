const fs = require('fs'
const path = require('path'
const { OpenAI } = require('openai'
const DATA_DIR = path.join(process.cwd(), 'data'
const FEEDBACK_FILE = path.join(DATA_DIR, 'feedback_logs.json'
const REPORT_DIR = path.join(DATA_DIR, 'reportsfeedback'
    const raw = fs.readFileSync(FEEDBACK_FILE, 'utf8'
    return JSON.parse(raw || '[]'
    console.error('Missing OPENAI_API_KEY'
  const downs = recent.filter(r) => r.rating = = 'down'
  const baselinePath = path.join(REPORT_DIR, 'prompt-improvements.md'
    fs.writeFileSync(summaryPath, '# Weekly Feedback Analysis\n\nNo thumbs-down feedback this week.'
    // // //
  // // //