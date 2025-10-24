import fs from 'fs'
import path from 'path'
const dir = $2;
  const newSubscriber = {
    id: Date.now().toString()
    email
    nam,
  e: name || '',
    status: 'active'
    subscribedA,
  t: new Date().toISOString()}
  try {
    subscribers.push(newSubscriber)
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2))
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
      success: true,
    message: 'Successfully subscribed to newsletter' }))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error:', error)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Failed to save subscription' }))
  }
}