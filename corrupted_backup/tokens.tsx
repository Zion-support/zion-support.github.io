import React, { useState, useEffect } from 'react';
import Head from 'next/head';

interface TokenConfig {
  conversionRate: number;
  minPurchase: number;
  maxPurchase: number;
  enabled: boolean;
}

interface Transaction {
  id: string;
  userId: string;
  amount: number;
  tokens: number;
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
  type: 'purchase' | 'refund' | 'bonus';
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
    setSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setConfig(prev => ({ ...prev, ...updates }));
    } catch (error) {
      console.error('Error updating config:', error);
    } finally {
      setSaving(false);
    }
  };

  async function saveConfig() {
    const res = await fetch("/api/admin/tokens/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config)}),
    const data = await res.json(),
    setConfig(data)
  }

  return (
    <EnhancedLayout title="Admin: ZION$">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">
          <h2 className="font-medium mb-3">Issue / Revoke</h2>
          <div className="grid sm:grid-cols-4 gap-2 text-sm">
            <input placeholder="userId" className="border rounded px-2 py-1" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <input type="number" placeholder="amount" className="border rounded px-2 py-1" value={amount} onChange={(e) => setAmount(parseInt(e.target.value || "0"))} />
            <input placeholder="reason" className="border rounded px-2 py-1" value={reason} onChange={(e) => setReason(e.target.value)} />
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded border" onClick={issue}>Issue</button>
              <button className="px-3 py-1 rounded border" onClick={revoke}>Revoke</button>
            </div>
          </div>
        </div>

        <div className="p-4 border rounded bg-white dark:bg-zinc-900">
          <h2 className="font-medium mb-3">Conversion & Rules</h2>
          {config && (
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <label className="w-40">USD per Token</label>
                <input type="number" step="0.01" className="border rounded px-2 py-1" value={config.usdPerToken} onChange={(e) => setConfig({ ...config, usdPerToken: parseFloat(e.target.value || "0") })} />
                <button className="px-3 py-1 rounded border" onClick={saveConfig}>Save</button>
              </div>
              <div className="text-xs text-gray-500">Example: 0.05 means 100 ZION$ = $5 credit.</div>
            </div>

            {/* Conversion Rules */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Conversion Rules</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>1 ZION$ = ${config.conversionRate} USD</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Minimum purchase: ${config.minPurchase}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span>Maximum purchase: ${config.maxPurchase}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>System status: {config.enabled ? 'Active' : 'Disabled'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Transactions Panel */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>

            {loading ? (
              <div className="text-center py-8">Loading transactions...</div>
            ) : transactions.length === 0 ? (
              <div className="text-center py-8 text-gray-500">No transactions found.</div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-auto">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium">User: {transaction.userId}</p>
                        <p className="text-sm text-gray-600">
                          {transaction.type === 'purchase' && `$${transaction.amount} → ${transaction.tokens} tokens`}
                          {transaction.type === 'refund' && `Refund: ${transaction.tokens} tokens`}
                          {transaction.type === 'bonus' && `Bonus: ${transaction.tokens} tokens`}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(transaction.status)}`}>
                          {transaction.status}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getTypeColor(transaction.type)}`}>
                          {transaction.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      {new Date(transaction.createdAt).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  ) 

        <div className="p-4 border rounded bg-white dark:bg-zinc-900">
          <h2 className="font-medium mb-3">Transactions</h2>
          <div className="space-y-2 text-sm max-h-96 overflow-auto">
            {transactions.map((t) => (
              <div key={t.id} className="flex justify-between border rounded p-2">
                <div className="flex gap-2 items-center">
                  <span className={`px-2 py-0.5 rounded text-xs ${["earn","issue"].includes(t.type) ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{t.type}</span>
                  <span className="text-gray-600">{t.userId}</span>
                  <span className="text-gray-500">{t.reason.replaceAll("_"," ")}</span>
                </div>
                <div className="font-medium">{t.type === "earn" || t.type === "issue" ? "+" : "-"}{t.amount} ZION$</div>
              </div>
;
  async function saveConfig() {;
    const res = await fetch("/api/admin/tokens/config", {;
      method: "POST",;
      headers: { "Content-Type": "application/json" },;
      body: JSON.stringify(config)});
    const data = await res.json();
    setConfig(data);
  }
;
  return (;
    <EnhancedLayout title="Admin: ZION$">;
      <div className="max-w-4xl mx-auto space-y-6">;
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">;
          <h2 className="font-medium mb-3">Issue / Revoke</h2>;
          <div className="grid sm:grid-cols-4 gap-2 text-sm">;
            <input placeholder="userId" className="border rounded px-2 py-1" value={userId} onChange={(e) => setUserId(e.target.value)} />;
            <input type="number" placeholder="amount" className="border rounded px-2 py-1" value={amount} onChange={(e) => setAmount(parseInt(e.target.value || "0"))} />;
            <input placeholder="reason" className="border rounded px-2 py-1" value={reason} onChange={(e) => setReason(e.target.value)} />;
            <div className="flex gap-2">;
              <button className="px-3 py-1 rounded border" onClick={issue}>Issue</button>;
              <button className="px-3 py-1 rounded border" onClick={revoke}>Revoke</button>;
            </div>;
          </div>;
        </div>;
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">;
          <h2 className="font-medium mb-3">Conversion & Rules</h2>;
          {config && (;
            <div className="space-y-3 text-sm">;
              <div className="flex items-center gap-2">;
                <label className="w-40">USD per Token</label>;
                <input type="number" step="0.01" className="border rounded px-2 py-1" value={config.usdPerToken} onChange={(e) => setConfig({ ...config, usdPerToken: parseFloat(e.target.value || "0") })} />;
                <button className="px-3 py-1 rounded border" onClick={saveConfig}>Save</button>;
              </div>;
              <div className="text-xs text-gray-500">Example: 0.05 means 100 ZION$ = $5 credit.</div>;
            </div>;
          )}
        </div>;
        <div className="p-4 border rounded bg-white dark:bg-zinc-900">;
          <h2 className="font-medium mb-3">Transactions</h2>;
          <div className="space-y-2 text-sm max-h-96 overflow-auto">;
            {transactions.map((t) => (;
              <div key={t.id} className="flex justify-between border rounded p-2">;
                <div className="flex gap-2 items-center">;
                  <span className={`px-2 py-0.5 rounded text-xs ${["earn","issue"].includes(t.type) ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{t.type}</span>;
                  <span className="text-gray-600">{t.userId}</span>;
                  <span className="text-gray-500">{t.reason.replaceAll("_"," ")}</span>;
                </div>;
                <div className="font-medium">{t.type === "earn" || t.type === "issue" ? "+" : "-"}{t.amount} ZION$</div>;
              </div>;
            ))}
            {transactions.length === 0 && <div className="text-gray-500">No transactions.</div>}
          </div>;
        </div>;
      </div>;
    </EnhancedLayout>;
  );
};

export default AdminTokensPage;
