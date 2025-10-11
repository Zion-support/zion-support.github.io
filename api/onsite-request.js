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
<<<<<<< HEAD
<<<<<<< HEAD
    const request = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...req.body
=======
    const { name, email, phone, company, location, requirements } = req.body || {}
    
    if (!name || !email || !phone || !company) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: 'Name, email, phone, and company are required' }))
=======
    const { name, email, phone, company, message, service } = req.body || {}
    
    if (!name || !email || !phone) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: 'Name, email, and phone are required' }))
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
      return
    }

    const request = {
      id: Date.now().toString(),
      name,
      email,
      phone,
<<<<<<< HEAD
      company,
      location: location || 'Not specified',
      requirements: requirements || 'General onsite service request',
      timestamp: new Date().toISOString()
>>>>>>> cursor/fix-errors-and-merge-to-main-fe05
=======
      company: company || 'Not specified',
      message: message || 'No message provided',
      service: service || 'General inquiry',
      timestamp: new Date().toISOString()
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
    }

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
