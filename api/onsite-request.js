const fs = require('fs')
const path = require('path')

// Simple wrapper function to replace withSentry (currently unused)
// const withSentry = (handler) => handler

const dir = path.join(process.cwd(), 'data')
const file = path.join(dir, 'onsite-requests.json')

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Method not allowed' }))
    return
  }

  try {
    // Ensure data directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    // Read existing requests
    let requests = []
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8')
      requests = JSON.parse(data)
    }

    // Add new request
    const newRequest = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...req.body
    }

    requests.push(newRequest)

    // Write back to file
    fs.writeFileSync(file, JSON.stringify(requests, null, 2))

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      success: true, 
      id: newRequest.id,
      message: 'Request submitted successfully' 
    }))
  } catch (error) {
    console.error('Error processing onsite request:', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      error: 'Internal server error',
      message: 'Failed to process request' 
    }))
  }
}