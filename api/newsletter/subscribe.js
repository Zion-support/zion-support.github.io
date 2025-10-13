const isValidEmail = (email) => {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Method not allowed' }))
    return
  }

  const { email, name } = req.body
  
  if (!email || !isValidEmail(email)) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Valid email is required' }))
const { email } = req.body
  if (!email) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Email is required' }))
    return
  }

  if (!isValidEmail(email)) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Invalid email format' }))
    return
  }

  try {
    // Here you would typically save to a database
    console.log('Newsletter subscription:', { email, name })
    
    console.log('Newsletter subscription:', email)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    }))
  } catch (error) {
    console.error('Error processing newsletter subscription:', error)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Failed to process subscription' }))
    console.error('Newsletter subscription error:', error)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      error: 'Failed to subscribe to newsletter',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }))
  }
}
}