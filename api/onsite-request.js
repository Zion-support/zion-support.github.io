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
    const { name, email, phone, company, message, service } = req.body || {}
    
    if (!name || !email || !phone || !message) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: 'Name, email, phone, and message are required' }))
      return
    }

    const request = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      company: company || 'Not specified',
      message,
      service: service || 'General inquiry',
      timestamp: new Date().toISOString()
    }

    // Here you would typically save to a database
    console.log('New onsite request:', request)

    res.statusCode = 200
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
