<<<<<<< HEAD
import fs from 'fs'
import path from 'path'
=======
const fs = require('fs')
const path = require('path')
>>>>>>> cursor/fix-errors-and-merge-to-main-f401

// Simple wrapper function to replace withSentry
<<<<<<< HEAD
const withSentry = (handler) => handler
<<<<<<< HEAD
=======
// const withSentry = (handler) => handler
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-f401

const dir = path.join(process.cwd(), 'data')
const file = path.join(dir, 'onsite-requests.json')

<<<<<<< HEAD
export default function handler(req, res) {
=======
// Ensure data directory exists
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true })
}

async function handler(req, res) {
>>>>>>> cursor/fix-errors-and-merge-to-main-f401
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
<<<<<<< HEAD
<<<<<<< HEAD
      address,
      requirements,
      preferredDate: preferredDate || null,
      status: 'pending',
      createdAt: new Date().toISOString()
    }

    requests.push(newRequest)

    // Save updated requests
    fs.writeFileSync(file, JSON.stringify(requests, null, 2))

=======
      service,
      message,
      preferredDate,
      preferredTime
    } = req.body

    // Validate required fields
    if (!name || !email || !phone || !service) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ 
        error: 'Missing required fields: name, email, phone, and service are required' 
      }))
      return
    }

    // Create data directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    // Read existing requests
    let requests = []
    if (fs.existsSync(file)) {
      try {
        const data = fs.readFileSync(file, 'utf8')
        requests = JSON.parse(data)
      } catch (err) {
        console.error('Error reading existing requests:', err)
        requests = []
      }
    }

    // Add new request
    const newRequest = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      company: company || '',
      service,
      message: message || '',
      preferredDate: preferredDate || '',
      preferredTime: preferredTime || '',
      timestamp: new Date().toISOString(),
      status: 'pending'
    }

    requests.push(newRequest)

    // Save updated requests
    fs.writeFileSync(file, JSON.stringify(requests, null, 2))

>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Onsite request submitted successfully',
      requestId: newRequest.id
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-f401
    }))

  } catch (error) {
    console.error('Error processing onsite request:', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
<<<<<<< HEAD
<<<<<<< HEAD
      error: 'Internal server error',
      message: 'Failed to process onsite request'
=======
      error: 'Internal server error' 
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
    }))
  }
}
=======
      error: 'Internal server error',
      message: 'Failed to process request'
    }))
  }
}

module.exports = withSentry(handler)
>>>>>>> cursor/fix-errors-and-merge-to-main-f401
