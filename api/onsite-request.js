import fs from 'fs'
import path from 'path'

// Simple wrapper function to replace withSentry (unused for now)
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
    const { name, email, company, phone, message, serviceType, preferredDate, location } = req.body

    // Validate required fields
    if (!name || !email || !company || !phone || !message) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: 'Missing required fields' }))
      return
    }

    // Create the request object
    const request = {
      id: Date.now().toString(),
      name,
      email,
      company,
      phone,
      message,
      serviceType: serviceType || 'General Consultation',
      preferredDate: preferredDate || 'Not specified',
      location: location || 'Not specified',
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // Read existing requests
    let requests = []
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8')
      requests = JSON.parse(data)
    }

    // Add new request
    requests.push(request)

    // Write back to file
    fs.writeFileSync(file, JSON.stringify(requests, null, 2))

    // Send response
    res.statusCode = 201
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Onsite request submitted successfully',
      requestId: request.id
    }))

  } catch (error) {
    console.error('Error processing onsite request:', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Internal server error' }))
  }
}