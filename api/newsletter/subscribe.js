
const isValidEmail = ($2) => {
  $3
};
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Method not allowed' }))
    return
  }
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
    // eslint-disable-next-line no-console
    console.log('Newsletter subscription:', email)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
      success: true,
    message: 'Successfully subscribed to newsletter' }))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Newsletter subscription error:', error)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
      error: 'Failed to subscribe to newsletter',
    details: process.env.NODE_ENV === 'development' ? error.message : undefined}))
  }
}