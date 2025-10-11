import fs from 'fs'
import path from 'path'

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
    const { name, email, phone, company, address, requirements, preferredDate } = req.body || {}
    
    if (!name || !email || !phone || !company || !address || !requirements) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ 
        error: 'Name, email, phone, company, address, and requirements are required' 
      }))
      return
    }

    // Ensure data directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
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
    const newRequest = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      company,
      address,
      requirements,
      preferredDate: preferredDate || null,
      status: 'pending',
      createdAt: new Date().toISOString()
    }

    requests.push(newRequest)

    // Save updated requests
    fs.writeFileSync(file, JSON.stringify(requests, null, 2))

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Onsite request submitted successfully',
      requestId: newRequest.id
    }))

  } catch (error) {
    console.error('Error processing onsite request:', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      error: 'Internal server error',
      message: 'Failed to process onsite request'
    }))
  }
}
