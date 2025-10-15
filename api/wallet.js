// API endpoint for wallet operations
import fs from 'fs'
import path from 'path'

const file = path.join(process.cwd(), 'data', 'wallets.json')

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }
  
  try {
    const { address, type } = req.body
    
    if (!address) {
      return res.status(400).json({ error: "Wallet address is required" })
    }
    
    // Read existing wallets
    let wallets = []
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8')
      wallets = JSON.parse(data)
    }
    
    // Check if address already exists
    if (wallets.find(wallet => wallet.address === address)) {
      return res.status(409).json({ error: "Wallet address already registered" })
    }
    
    // Add new wallet
    wallets.push({
      address,
      type: type || 'ethereum',
      registeredAt: new Date().toISOString()
    })
    
    // Save to file
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2))
    
    return res.status(200).json({ message: "Wallet registered successfully" })
  } catch (error) {
    console.error('Wallet registration error:', error)
    return res.status(500).json({ error: "Internal server error" })
  }
}
