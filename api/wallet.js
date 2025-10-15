// API endpoint for wallet operations
import fs from 'fs'
import path from 'path'

const file = path.join(process.cwd(), 'data', 'wallets.json')

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { action, walletData } = req.body

    if (!action) {
      return res.status(400).json({ error: "Action is required" })
    }

    // Read existing wallets
    let wallets = []
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8')
      wallets = JSON.parse(data)
    }

    switch (action) {
      case 'create':
        if (!walletData || !walletData.address) {
          return res.status(400).json({ error: "Wallet address is required" })
        }
        wallets.push({
          ...walletData,
          createdAt: new Date().toISOString()
        })
        break
      
      case 'update':
        if (!walletData || !walletData.id) {
          return res.status(400).json({ error: "Wallet ID is required for update" })
        }
        const index = wallets.findIndex(w => w.id === walletData.id)
        if (index === -1) {
          return res.status(404).json({ error: "Wallet not found" })
        }
        wallets[index] = { ...wallets[index], ...walletData, updatedAt: new Date().toISOString() }
        break
      
      case 'delete':
        if (!walletData || !walletData.id) {
          return res.status(400).json({ error: "Wallet ID is required for deletion" })
        }
        wallets = wallets.filter(w => w.id !== walletData.id)
        break
      
      default:
        return res.status(400).json({ error: "Invalid action" })
    }

    // Write back to file
    fs.writeFileSync(file, JSON.stringify(wallets, null, 2))

    return res.status(200).json({ message: "Wallet operation successful", wallets })
  } catch (error) {
    console.error('Wallet operation error:', error)
    return res.status(500).json({ error: "Internal server error" })
  }
}
