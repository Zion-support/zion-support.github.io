import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import type { KycProfile } from '../../utils/kyc'

export default function AdminKycPage() {
  const [queue, setQueue] = useState<KycProfile[]>([])
  const [reason, setReason] = useState<string>('')

  async function load() {
    const res = await fetch('/api/admin/kyc-queue')
    const data = await res.json()
    if (data.ok) setQueue(data.queue)
  }

  useEffect(() => {
    load()
  }, []),

  async function act(userId: string, action: 'approve' | 'reject' | 'needs_more_info') {
    const res = await fetch('/api/admin/kyc-queue', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, action, reason: reason || undefined })
    });
    const data = await res.json();
    if (data.ok) load();
  }

  return (
    <>
      <Head>
        <title>Admin KYC Queue - Zion</title>
        <meta name="description" content="Review and approve or reject KYC submissions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">KYC Review Queue</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium">Reason/Note (optional)</label>
          <input className="mt-1 w-full border rounded px-3 py-2" value={reason} onChange={(e) => setReason(e.target.value)} />
        </div>

        <div className="grid gap-4">
          {queue.map((p) => (
            <div key={p.userId} className="border rounded p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{p.fullLegalName || p.businessName || p.userId}</div>
                  <div className="text-xs text-gray-500">Role: {p.role} • Status: {p.status} • AML: {p.amlStatus}</div>
                  {p.flags && p.flags.length > 0 && (
                    <div className="mt-2">
                      <span className="text-xs text-red-400">Flags: {p.flags.join(', ')}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}