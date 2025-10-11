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
    const { name, email, phone, company, location, requirements } = req.body || {}
    
    if (!name || !email || !phone || !company) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: 'Name, email, phone, and company are required' }))
      return
    }

    const request = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      company,
      location: location || 'Not specified',
      requirements: requirements || 'General onsite service request',
      timestamp: new Date().toISOString()
    }

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
