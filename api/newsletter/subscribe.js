/// Fixed regex
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$// Fixed regex
  return emailRegex.test(email);
};
export default async function handler(req, res) {
  if (req.method !== 'POST'
    res.setHeader('Content-Type', '
    res.end(JSON.stringify({ error: 'Method not allowed'
      res.setHeader('Content-Type', '
      res.end(JSON.stringify({ error: 'Email is required'
      res.setHeader('Content-Type', '
      res.end(JSON.stringify({ error: 'Invalid email format'
    console.log('Newsletter subscription:'
    res.setHeader('Content-Type', '
    res.end(JSON.stringify({ success: true, message: 'Successfully subscribed to newsletter'
    res.setHeader('Content-Type', '
      message: 'Successfully subscribed to newsletter'
    console.error('Newsletter subscription error:'
    res.setHeader('Content-Type', '
      error: 'Failed to subscribe to newsletter'
      details: process.env.NODE_ENV === 'development'