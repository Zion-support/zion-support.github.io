import React, { useState, useEffect } from 'react'
import Head from 'next/head'
interface TokenConfig {
  conversionRate: number
  minPurchase: number
  maxPurchase: number
  enabled: boolean
}

interface Transaction {
  id: string
  userId: string
  amount: number
  tokens: number
  status: 'pending' | 'completed' | 'failed'
  createdAt: string
  type: 'purchase' | 'refund' | 'bonus'
}

const mockTransactions: Transaction[] = [
  {
    id: '1',
    userId: 'user123',
    amount: 100,
    tokens: 1000,
    status: 'completed',
    createdAt: '2025-01-15T10:00:00Z',
    type: 'purchase'
  },
  {
    id: '2',
    userId: 'user456',
    amount: 50,
    tokens: 500,
    status: 'pending',
    createdAt: '2025-01-15T09:30:00Z',
    type: 'purchase'
  },
  {
    id: '3',
    userId: 'user789',
    amount: 0,
    tokens: 100,
    status: 'completed',
    createdAt: '2025-01-14T15:00:00Z',
    type: 'bonus'
  }
]
const AdminTokensPage: React.FC = () => {
  const [config, setConfig] = useState<TokenConfig>({
    conversionRate: 0.05,
    minPurchase: 10,
    maxPurchase: 1000,
    enabled: true
  })
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setTransactions(mockTransactions)
      setLoading(false)
    }, 1000)
  }, [])
  const handleConfigUpdate = async (updates: Partial<TokenConfig>) => {
    setSaving(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setConfig(prev => ({ ...prev, ...updates }))
    } catch (error) {
      console.error('Error updating config:', error)
    } finally {
      setSaving(false)
    }
  }
  const handleIssueTokens = async () => {
    if (config.conversionRate <= 0) {
      alert('Conversion rate must be greater than 0')
      return
    }
    await handleConfigUpdate(config)
  }
  const handleRevokeTokens = async () => {
    await handleConfigUpdate({ enabled: false })
  }
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'failed': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'purchase': return 'bg-blue-100 text-blue-800'
      case 'refund': return 'bg-red-100 text-red-800'
      case 'bonus': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }
  const totalTokensIssued = transactions
    .filter(t => t.status === 'completed')
    .reduce((sum, t) => sum + t.tokens, 0)
  const totalRevenue = transactions
    .filter(t => t.status === 'completed' && t.type === 'purchase')
    .reduce((sum, t) => sum + t.amount, 0)
  return (
    <EnhancedLayout title="Admin: ZION$">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">
          <h2 className="font-medium mb-3">Issue / Revoke</h2>
          <div className="grid sm:grid-cols-4 gap-2 text-sm">
            <input placeholder="userId" className="border rounded px-2 py-1" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <input type="number" placeholder="amount" className="border rounded px-2 py-1" value={amount} onChange={(e) => setAmount(parseInt(e.target.value |"0"))} />
            <input placeholder="reason" className="border rounded px-2 py-1" value={reason} onChange={(e) => setReason(e.target.value)} />
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded border" onClick={issue}>Issue</button>
              <button className="px-3 py-1 rounded border" onClick={revoke}>Revoke</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default AdminTokensPage