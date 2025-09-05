import React, { useEffect, useState } from 'react',
import { connectMetaMask, getAccounts } from '../../utils/wallet',

export type RedemptionType = 'boost_profile' | 'promote_listing' | 'premium_support',

export default function UseTokensModal({
  isOpen,
  onClose,
  serviceId,
  defaultType}: {
  isOpen: boolean,
  onClose: () => void,
  serviceId?: string,
  defaultType?: RedemptionType
}) {
  const [account, setAccount] = useState<string | null>(null),
  const [type, setType] = useState<RedemptionType>(defaultType ?? 'boost_profile'),
  const [tokens, setTokens] = useState<number>(100),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const usdValue = (tokens * 0.01).toFixed(2),

  useEffect(() => {
    (async () => {
      const accs = await getAccounts(),
      if (accs && accs.length > 0) setAccount(accs[0])
    })()
  }, []),

  async function connect() {
    const accs = await connectMetaMask(),
    if (accs && accs.length > 0) setAccount(accs[0])
  }

  async function redeem() {
    setIsSubmitting(true),
    try {
      const res = await fetch('/api/tokens/redeem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ account, amount: tokens, type, serviceId })}),
      const data = await res.json(),
      if (data?.ok) {
        onClose()
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null,

  return (
    <div className=&quot;fixed inset-0 z-[60] flex items-end sm:items-center justify-center&quot;>
      <div className=&quot;absolute inset-0 bg-black/40&quot; onClick={onClose} />
      <div className=&quot;relative w-full sm:max-w-md rounded-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-xl m-0 sm:m-4 p-4&quot;>
        <div className=&quot;flex items-center justify-between mb-3&quot;>
          <div className=&quot;font-semibold&quot;>Use ZION Tokens</div>
          <button onClick={onClose} className=&quot;px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800&quot;>Close</button>
        </div>

        <div className=&quot;text-sm mb-3&quot;>Conversion rate: 1 ZION = $0.01</div>

        <div className=&quot;space-y-3&quot;>
          <div className=&quot;text-sm&quot;>
            <div className=&quot;mb-1&quot;>Redemption type</div>
            <select value={type} onChange={(e) => setType(e.target.value as RedemptionType)} className=&quot;w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-2 py-2&quot;>
              <option value=&quot;boost_profile&quot;>Boost profile</option>
              <option value=&quot;promote_listing&quot;>Promote listing</option>
              <option value=&quot;premium_support&quot;>Get premium support</option>
            </select>
          </div>

          <div className=&quot;text-sm&quot;>
            <div className=&quot;mb-1&quot;>Amount (ZION)</div>
            <input type=&quot;number&quot; min={1} value={tokens} onChange={(e) => setTokens(parseInt(e.target.value || '0', 10))} className=&quot;w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-2 py-2&quot; />
            <div className=&quot;opacity-70 mt-1&quot;>Approx. ${usdValue} USD</div>
          </div>

          <div className=&quot;text-sm&quot;>
            <div className=&quot;mb-1&quot;>Wallet</div>
            {account ? (
              <div className=&quot;rounded border border-green-600 text-green-700 dark:text-green-400 px-2 py-2&quot;>Connected: {account.slice(0, 6)}…{account.slice(-4)}</div>
            ) : (
              <button onClick={connect} className=&quot;enhanced-button enhanced-button-primary&quot;>Connect MetaMask</button>
            )}
          </div>
        </div>

<<<<<<< HEAD
        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs opacity-70">You can spend tokens to boost visibility, promote listings, or access premium support.</div>
          <button disabled={!account || isSubmitting || tokens <= 0} onClick={redeem} className="enhanced-button enhanced-button-primary disabled: opacity-50">Redeem</button>
=======
        <div className=&quot;mt-4 flex items-center justify-between&quot;>
          <div className=&quot;text-xs opacity-70&quot;>You can spend tokens to boost visibility, promote listings, or access premium support.</div>
          <button disabled={!account || isSubmitting || tokens <= 0} onClick={redeem} className=&quot;enhanced-button enhanced-button-primary disabled:opacity-50&quot;>Redeem</button>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        </div>
      </div>
    </div>
  )
}