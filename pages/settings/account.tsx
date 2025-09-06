import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
export default function AccountSettingsPage() {
  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false),
  const [ens, setEns] = useState($2);
  const [lens, setLens] = useState($2);
  const [ceramic, setCeramic] = useState($2);
  const [farcaster, setFarcaster] = useState($2);
  const [linking, setLinking] = useState($2);
  const [backupCid, setBackupCid] = useState($2);
  const [restoreCid, setRestoreCid] = useState($2);
  const [status, setStatus] = useState<string | null>(null),

  useEffect(() => {
    const saved = $2;
    if (saved) setUser(JSON.parse(saved)),
    const pref = $2;
    setDisplayWeb3(pref === 'true')
  }, []),

  const saveDisplayPref = (val: boolean) => {
    setDisplayWeb3($2);
    if (typeof window !== 'undefined') window.localStorage.setItem('zion-web3-display', String(val))
  },

  const linkDID = $2;
    setLinking($2);
    setStatus($2);
    try {
      const nonceRes = await fetch($2);
      const { nonce } = await nonceRes.json($2);
      const payload = { ens, lens, ceramic, farcaster, address: user.address, chain: user.chain, nonce, ts: Date.now() },
      const msg = $2;
      // Sign message with connected wallet if possible (best effort)
      let signature: string | null = $2;
      try {
        if (user.chain === 'evm' && (window as any).ethereum) {
          const ethers = await import($2);
          const provider = $2;
          const signer = provider.getSigner($2);
          signature = await signer.signMessage(msg)
        } else if (user.chain === 'sol' && (window as any).solana?.isPhantom) {
          const enc = new TextEncoder().encode($2);
          const { signature: sig} = await (window as any).solana.signMessage($2);
          const bs58 = $2;
          signature = bs58.encode(sig)
        }
      } catch {}

      const res = await fetch('/api/did/link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ payload, message: msg, signature })}),
      if (!res.ok) throw new Error($2);
      setStatus('Linked successfully')
    } catch (e: any) {
      setStatus(e?.message || 'Linking failed')
    } finally {
      setLinking(false)
    }
  },

  const doBackup = async () => {
    setStatus($2);
    try {
      const profile = $2;
        preferences: { displayWeb3 },
        did: { ens, lens, ceramic, farcaster },
        resume: {},
        projects: [],
        reviews: []},
      const res = await fetch('/api/backup/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile)}),
      const data = await res.json($2);
      if (!res.ok) throw new Error($2);
      setBackupCid($2);
      setStatus('Backup saved to decentralized storage')
    } catch (e: any) {
      setStatus(e?.message || 'Backup failed')
    }
  },

  const doRestore = async () => {
    setStatus($2);
    try {
      const res = $2;
      const data = await res.json($2);
      if (!res.ok) throw new Error($2);
      const { user: u, preferences, did } = data,
      if (u) setUser($2);
      if (preferences) saveDisplayPref($2);
      if (did) {
        setEns($2);
        setLens($2);
        setCeramic($2);
        setFarcaster(did.farcaster || '')
      }
      setStatus('Profile restored from backup')
    } catch (e: any) {
      setStatus(e?.message || 'Restore failed')
    }
  },

  return (
    <>
      <Head>
        <title>Account Settings — Zion</title>
      </Head>
      <div className="max-w-3xl mx-auto space-y-8">
        <section className="rounded-xl border p-5">
          <h1 className="text-xl font-semibold mb-2">Account</h1>
          <p className="text-sm text-gray-500">Manage your Web3 identity and backups. Email is optional when using wallets.</p>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Display Web3 identity</div>
              <div className="text-xs text-gray-500">Show ENS/Lens name instead of email</div>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={displayWeb3} onChange={(e) => saveDisplayPref(e.target.checked)} className="sr-only" />
              <span className="relative inline-block w-10 h-6 bg-gray-300 rounded-full shadow-inner">
                <span className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full transition-transform ${displayWeb3 ? 'translate-x-4' : ''}`}></span>
              </span>
            </label>
          </div>
        </section>

        <section className="rounded-xl border p-5">
          <h2 className="font-semibold mb-2">Link Web3 identities</h2>
          <div className="grid grid-cols-1 gap-3">
            <input value={ens} onChange={(e) => setEns(e.target.value)} placeholder="ENS (e.g. vitalik.eth)" className="w-full rounded-md border px-3 py-2" />
            <input value={lens} onChange={(e) => setLens(e.target.value)} placeholder="Lens handle (e.g. alice.lens)" className="w-full rounded-md border px-3 py-2" />
            <input value={ceramic} onChange={(e) => setCeramic(e.target.value)} placeholder="Ceramic DID (did: 3: ...)" className="w-full rounded-md border px-3 py-2" />
            <input value={farcaster} onChange={(e) => setFarcaster(e.target.value)} placeholder="Farcaster handle (e.g. @alice)" className="w-full rounded-md border px-3 py-2" />
            <button onClick={linkDID} disabled={linking} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2">{linking ? 'Linking…' : 'Link & Verify'}</button>
          </div>
        </section>

        <section className="rounded-xl border p-5">
          <h2 className="font-semibold mb-2">Decentralized Backup</h2>
          <p className="text-sm text-gray-500 mb-3">Back up talent profiles, resume, and project reviews to IPFS/Arweave (via Web3.Storage). Opt-in only.</p>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={doBackup} className="rounded-md bg-emerald-600 text-white px-4 py-2">Create Backup</button>
            {backupCid && <span className="text-xs">CID: <code className="bg-gray-100 dark:bg-neutral-800 px-2 py-1 rounded">{backupCid}</code></span>}
          </div>
          <div className="mt-4 flex gap-2">
            <input value={restoreCid} onChange={(e) => setRestoreCid(e.target.value)} placeholder="Enter CID to restore" className="flex-1 rounded-md border px-3 py-2" />
            <button onClick={doRestore} className="rounded-md border px-4 py-2">Restore profile</button>
          </div>
        </section>

        {status && <div className="text-sm text-gray-600">{status}</div>}
      </div>
    </>
  )
}