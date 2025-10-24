import fs from 'fs'
import path from 'path'
const dir = $2;
    type
    nam,
  e: name || '',
    userId: userId || ''
    statu,
  s: 'active',
    createdAt: new Date().toISOString()}
  try {
    wallets.push(newWallet)
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2))
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
      success: true,
    message: 'Wallet added successfully' }))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error:', error)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Failed to save wallet' }))
  }
}