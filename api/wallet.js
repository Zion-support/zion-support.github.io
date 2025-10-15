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

    // Add new wallet
    wallets.push({
      address,
      type: type || 'ethereum',
      addedAt: new Date().toISOString()
    })

    // Write back to file
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2))

    res.status(200).json({ message: "Wallet added successfully" })
  } catch (error) {
    console.error('Wallet error:', error)
    res.status(500).json({ error: "Internal server error" })
  }
}
