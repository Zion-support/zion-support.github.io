const required = String(process.env.REQUIRED_SECRETS || '')
  .split(/[\s,]+/)
  .map((name) => name.trim())
  .filter(Boolean)

const missing = required.filter((name) => !process.env[name])

if (missing.length > 0) {
  console.error(`Secret preflight failed; missing: ${missing.join(', ')}`)
  process.exit(1)
}

console.log(required.length ? `Secret preflight passed (${required.length} checked)` : 'Secret preflight passed (no secrets required)')
