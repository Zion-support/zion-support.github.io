import fs from 'fs'
import path from 'path'
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd

// Simple wrapper function to replace withSentry
const withSentry = (handler) => handler

=======

// Simple wrapper function to replace withSentry (unused for now)
// const withSentry = (handler) => handler

>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
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
<<<<<<< HEAD
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Onsite request submitted successfully',
<<<<<<< HEAD
      requestId: newRequest.id
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
      requestId: request.id
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
    }))

  } catch (error) {
    console.error('Error processing onsite request:', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
<<<<<<< HEAD
    res.end(JSON.stringify({ 
      error: 'Internal server error',
      message: 'Failed to process onsite request'
    }))
  }
}
<<<<<<< HEAD
      error: 'Internal server error',
      message: 'Failed to process request'
    }))
  }
}

module.exports = withSentry(handler)
=======
    res.end(JSON.stringify({ error: 'Internal server error' }))
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
