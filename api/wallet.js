// API endpoint for wallet operations
import fs from 'fs'
import path from 'path'

const file = path.join(process.cwd(), 'data', 'wallets.json')

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }
  
  try {
    const { address, balance } = req.body
    
    if (!address) {
      return res.status(400).json({ error: "Wallet address is required" })
    }
    
    // Read existing wallets
    let wallets = []
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8')
      wallets = JSON.parse(data)
    }
    
    // Add or update wallet
    const existingIndex = wallets.findIndex(wallet => wallet.address === address)
    if (existingIndex >= 0) {
      wallets[existingIndex] = { address, balance: balance || 0, updatedAt: new Date().toISOString() }
    } else {
      wallets.push({ address, balance: balance || 0, createdAt: new Date().toISOString() })
    }
    
    // Write back to file
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2))
    
    return res.status(200).json({ message: "Wallet updated successfully" })
  } catch (error) {
    console.error('Wallet error:', error)
    return res.status(500).json({ error: "Internal server error" })
  }
}
