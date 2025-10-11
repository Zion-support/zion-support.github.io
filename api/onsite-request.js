const fs = require('fs')
const path = require('path')

// Simple wrapper function to replace withSentry
const withSentry = (handler) => handler

const dir = path.join(process.cwd(), 'data')
const file = path.join(dir, 'onsite-requests.json')

// Ensure data directory exists
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true })
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Method not allowed' }))
    return
  }

  try {
    const {
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      timeline,
      message,
      preferredContact,
      urgency
    } = req.body

    // Validate required fields
    if (!name || !email || !message) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ 
        error: 'Missing required fields: name, email, and message are required' 
      }))
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: 'Invalid email format' }))
      return
    }

    // Create request object
    const request = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || '',
      company: company || '',
      projectType: projectType || 'general',
      budget: budget || 'not-specified',
      timeline: timeline || 'flexible',
      message,
      preferredContact: preferredContact || 'email',
      urgency: urgency || 'normal',
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // Read existing requests
    let requests = []
    if (fs.existsSync(file)) {
      try {
        const data = fs.readFileSync(file, 'utf8')
        requests = JSON.parse(data)
      } catch (error) {
        console.error('Error reading existing requests:', error)
        requests = []
      }
    }

    // Add new request
    requests.push(request)

    // Write back to file
    fs.writeFileSync(file, JSON.stringify(requests, null, 2))

    // Send confirmation email (placeholder)
    console.log('New onsite request received:', {
      id: request.id,
      name: request.name,
      email: request.email,
      company: request.company
    })

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
      success: true,
      message: 'Request submitted successfully',
      requestId: request.id
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

module.exports = withSentry(handler)