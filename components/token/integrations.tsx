import dynamic from 'next/dynamic',
import React, { useEffect, useState } from 'react',
import { useWallet } from '../../hooks/useWallet',
import { fetchDepinActivities, calculateRewards, DepinReward } from '../../utils/depins',
import { CHAINS } from '../../utils/chains',
const ClientOnlyBridge = dynamic(() => import('../../components/ui/BridgeForm'), { ssr: false }),

export default function TokenIntegrationsPage() {
  const { account, connect } = useWallet(),
  const [region, setRegion] = useState(''),
  const [stake, setStake] = useState(''),
  const [suggestion, setSuggestion] = useState<any>(null),
  const [rewards, setRewards] = useState<DepinReward[] | null>(null),
  const [depinsSyncing, setDepinsSyncing] = useState(false),

  async function syncDepin() {
    if (!account) {
      await connect(),
      return
    }
    setDepinsSyncing(true),
    const acts = await fetchDepinActivities(account),
    const r = calculateRewards(acts),
    setRewards(r),
    setDepinsSyncing(false)
  }

  async function runOperator() {
    const res = await fetch('/api/operator/suggest-chain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ region, stakeUsd: stake })}),
    const data = await res.json(),
    setSuggestion(data)
  }

  return (
    <div className=&quot;space-y-8&quot;>
      <section className=&quot;space-y-2&quot;>
        <h1 className=&quot;text-2xl font-bold&quot;>ZION$ Integrations</h1>
        <p className=&quot;text-gray-600 dark:text-gray-300&quot;>Omnichain transfers via LayerZero and DePIN rewards.</p>      </section>

      <section className=&quot;space-y-4&quot;>
        <ClientOnlyBridge />
      </section>

      <section className=&quot;space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800&quot;>
        <h2 className=&quot;text-lg font-semibold&quot;>DePIN Hook</h2>
        <p className=&quot;text-sm text-gray-600 dark:text-gray-300&quot;>Plug into DIMO, Helium, Hivemapper to reward ZION$ for compute, IoT jobs, and data streaming.</p>
        <div className=&quot;flex gap-2&quot;>
          <button onClick={syncDepin} className=&quot;px-4 py-2 rounded bg-purple-600 text-white&quot;>{depinsSyncing ? 'Syncing…' : 'Sync DePIN Rewards'}</button>
          {!account && <button onClick={connect} className=&quot;px-4 py-2 rounded border&quot;>Connect Wallet</button>}
        </div>
        {rewards && (
          <div className=&quot;mt-3 space-y-2 text-sm&quot;>
            {rewards.map((r, i) => (
              <div key={i} className=&quot;flex items-center justify-between&quot;>
                <span>{r.network} — {r.reason}</span>
                <span className=&quot;font-medium&quot;>+{r.points} ZION$</span>              </div>
            ))}
          </div>
        )}
      </section>

      <section className=&quot;space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800&quot;>
        <h2 className=&quot;text-lg font-semibold&quot;>Operator AI Actions</h2>
        <p className=&quot;text-sm text-gray-600 dark:text-gray-300&quot;>Based on your region and stake, we suggest the best chain for ZION$.</p>
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-3&quot;>
          <div className=&quot;flex flex-col gap-1&quot;>
            <label className=&quot;text-xs text-gray-500&quot;>Region</label>
            <input value={region} onChange={(e) => setRegion(e.target.value)} placeholder=&quot;e.g., US, EU, APAC&quot; className=&quot;border rounded px-3 py-2 bg-white dark:bg-black&quot; />
          </div>
          <div className=&quot;flex flex-col gap-1&quot;>
            <label className=&quot;text-xs text-gray-500&quot;>Stake (USD)</label>
            <input value={stake} onChange={(e) => setStake(e.target.value)} placeholder=&quot;e.g., 1000&quot; className=&quot;border rounded px-3 py-2 bg-white dark:bg-black&quot; />
          </div>
          <div className=&quot;flex items-end&quot;><button onClick={runOperator} className=&quot;w-full px-4 py-2 rounded bg-indigo-600 text-white&quot;>Suggest Chain</button></div>
        </div>
        {suggestion && (
          <div className=&quot;text-sm mt-2&quot;>            <div>
              <span className=&quot;text-gray-500&quot;>Recommendation:</span> <b>{suggestion.recommendation?.chain?.name}</b>
            </div>
            {suggestion.alternatives && (
              <div className=&quot;text-gray-500&quot;>Alternatives: {suggestion.alternatives.map((a: any) => a.chain.name).join(', ')}</div>            )}
          </div>
        )}
      </section>

      <section className=&quot;space-y-2 text-xs text-gray-500&quot;>
        <div>Security</div>
        <ul className=&quot;list-disc ml-5 space-y-1&quot;>
          <li>Onchain tx logs (client + API echo)</li>
          <li>Rate limits (client + API token bucket)</li>
          <li>Burn-and-mint model via LayerZero OFT (requires token addresses configured)</li>
        </ul>
      </section>
    </div>
  )
}
