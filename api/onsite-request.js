import fs from 'fs'
import path from 'path'

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
    const { name, email, phone, company, message, preferredDate, serviceType } = req.body || {}
    
    if (!name || !email || !phone) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: 'Name, email, and phone are required' }))
      return
    }

    // Process the onsite request data
    const requestData = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      company: company || 'Not specified',
      message: message || 'No message provided',
      preferredDate: preferredDate || 'Not specified',
      serviceType: serviceType || 'General consultation',
      timestamp: new Date().toISOString()
    }
    
    // Here you would typically save the request data to a database
    // For now, we'll just log it
    console.log('Onsite request received:', requestData)

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Onsite request submitted successfully',
      requestId: Date.now().toString()
    }))

  } catch (error) {
    console.error('Error processing onsite request:', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Internal server error' }))
  }
}
