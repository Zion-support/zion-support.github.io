import fs from 'fs'
import path from 'path'

const dir = path.join(process.cwd(), 'data')
const file = path.join(dir, 'quotes.json')

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Method not allowed' }))
    return
  }

  try {
    const { name, email, company, service, budget, timeline, requirements } = req.body || {}
    
    if (!name || !email || !service || !requirements) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({
        error: 'Name, email, service, and requirements are required'
      }))
      return
    }

    // Ensure data directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    // Read existing quotes
    let quotes = []
    if (fs.existsSync(file)) {
      try {
        const data = fs.readFileSync(file, 'utf8')
        quotes = JSON.parse(data)
      } catch (error) {
        console.error('Error reading existing quotes:', error)
        quotes = []
      }
    }

    // Create new quote object
    const newQuote = {
      id: Date.now().toString(),
      name,
      email,
      company: company || '',
      service,
      budget: budget || '',
      timeline: timeline || '',
      requirements,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // Add new quote to array
    quotes.push(newQuote)

    // Write back to file
    try {
      fs.writeFileSync(file, JSON.stringify(quotes, null, 2))
      
      res.statusCode = 201
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({
        success: true,
        message: 'Quote request submitted successfully',
        quoteId: newQuote.id
      }))
    } catch (error) {
      console.error('Error writing quotes file:', error)
      res.statusCode = 500
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({
        error: 'Failed to save quote request'
      }))
    }
  } catch (error) {
    console.error('Error processing quote request:', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
      error: 'Internal server error'
    }))
  }
}