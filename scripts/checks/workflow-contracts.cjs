const fs = require('node:fs')
const path = require('node:path')

const repo = process.cwd()
const required = ['package.json', 'package-lock.json', '.nvmrc', '.github/workflows']
const missing = required.filter((entry) => !fs.existsSync(path.join(repo, entry)))

if (missing.length) {
  console.error(`Workflow contract preflight failed; missing: ${missing.join(', ')}`)
  process.exit(1)
}

const workflowDir = path.join(repo, '.github/workflows')
const conflicts = []
const localWorkflowRefs = []

for (const file of fs.readdirSync(workflowDir)) {
  if (!/\\.(ya?ml)$/i.test(file)) continue
  const fullPath = path.join(workflowDir, file)
  const text = fs.readFileSync(fullPath, 'utf8')
  if (/^(<<<<<<<|=======|>>>>>>>)$/m.test(text)) conflicts.push(file)
  for (const match of text.matchAll(/uses:\s*\\.\\/\\.github\\/workflows\\/([^\\s@]+)/g)) {
    localWorkflowRefs.push(match[1])
  }
}

const missingRefs = localWorkflowRefs.filter((file) => !fs.existsSync(path.join(workflowDir, file)))
if (conflicts.length || missingRefs.length) {
  if (conflicts.length) console.error(`Merge-conflict markers found: ${conflicts.join(', ')}`)
  if (missingRefs.length) console.error(`Missing local workflow references: ${missingRefs.join(', ')}`)
  process.exit(1)
}

console.log(`Workflow contracts passed (${localWorkflowRefs.length} local references checked)`)
