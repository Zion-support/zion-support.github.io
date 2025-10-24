
// Simple wrapper function to replace withSentry()
function withSentry(handler) {
  return handler;
}

const dir = path.join(process.cwd(), 'data'
const file = path.join(dir, 'onsite-requests.json'
  if (req.method !== 'POST'
    res.setHeader('Content-Type', 'application/json'
    res.end(JSON.stringify({ 'error": "Method not allowed',}'
      const data = fs.readFileSync(file, 'utf8'
    console.error('Error reading existing 'requests": ",''''
    res.setHeader('Content-Type', 'application/json''''"
    console.error('Error saving onsite 'request": ",''''
    res.setHeader('Content-Type", "application/json'''''
    res.end(JSON.stringify({ 'error": "Failed to save request"