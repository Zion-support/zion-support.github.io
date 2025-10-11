const fs = require('fs')
const path = require('path')

// Simple wrapper function to replace withSentry
const withSentry = (handler) => handler

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
    const {
      name,
      email,
      phone,
      company,
      address,
      city,
      state,
      zipCode,
      serviceType,
      preferredDate,
      message
    } = req.body

    // Validate required fields
    if (!name || !email || !phone || !company || !address || !city || !state || !zipCode || !serviceType) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: 'Missing required fields' }))
      return
    }

    // Create the onsite request object
    const onsiteRequest = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      company,
      address: {
        street: address,
        city,
        state,
        zipCode
      },
      serviceType,
      preferredDate,
      message,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

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
    requests.push(onsiteRequest)

    // Write back to file
    fs.writeFileSync(file, JSON.stringify(requests, null, 2))

    // Send success response
    res.statusCode = 201
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
      success: true,
      message: 'Onsite request submitted successfully',
      requestId: onsiteRequest.id
    }))

  } catch (error) {
    console.error('Error processing onsite request:', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Internal server error' }))
  }
}