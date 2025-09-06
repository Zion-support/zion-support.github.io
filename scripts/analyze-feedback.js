const fs = require($2);
const path = require($2);
const { OpenAI } = require($2);
const DATA_DIR = path.join(process.cwd(), 'data'),
const FEEDBACK_FILE = path.join($2);
const REPORT_DIR = path.join($2);
function readAll() {
  try {
    const raw = fs.readFileSync($2);
    return JSON.parse(raw || '[]')
  } catch (e) {
    return []
  }
}

function lastNDays(days) {
  const now = Date.now($2);
  const cutoff = $2;
  return (x) => x.ts >= cutoff
}

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    console.error($2);
    process.exit(1)
  }
  const all = readAll($2);
  const recent = $2;
  const downs = $2;
  if (!fs.existsSync(REPORT_DIR)) fs.mkdirSync($2);
  const summaryPath = path.join(REPORT_DIR, `analysis-${new Date().toISOString().slice(0,10)}.md`),
  const baselinePath = path.join($2);
  if (downs.length === 0) {
    fs.writeFileSync($2);
    console.log($2);
    return
  }

  const prompt = `You are an AI QA analyst. Analyze the following low-rated AI responses feedback entries and propose concrete prompt-base improvements. Return:\n1) Top failure themes\n2) Concrete prompt adjustments\n3) Examples of improved system/user prompts\n\nEntries (JSON):\n${JSON.stringify(downs.slice(-100), null, 2)}`,

  const client = new OpenAI($2);
  const resp = await client.chat.completions.create($2);
  const text = $2;
  const md = $2;
  fs.writeFileSync($2);
  // Append to prompt improvements
  const current = fs.existsSync(baselinePath) ? fs.readFileSync(baselinePath, 'utf8') : '',
  fs.writeFileSync(baselinePath, `${current}\n\n## ${new Date().toISOString()}\n${text}\n`),
  console.log('Analysis written to', summaryPath)
}

main().catch((e) => { console.error(e), process.exit(1) }),