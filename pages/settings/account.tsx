import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';

export default function AccountSettingsPage() {
  const [user, setUser] = useState<{ address: string; chain: 'evm' | 'sol' } | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
  const [ens, setEns] = useState('');
  const [lens, setLens] = useState('');
  const [ceramic, setCeramic] = useState('');
  const [farcaster, setFarcaster] = useState('');
  const [linking, setLinking] = useState(false);
  const [backupCid, setBackupCid] = useState('');
  const [restoreCid, setRestoreCid] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-user') : null;
    if (saved) setUser(JSON.parse(saved));
    const pref = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-display') : null;
    setDisplayWeb3(pref === 'true');
  }, []);

  const saveDisplayPref = (val: boolean) => {
    setDisplayWeb3(val);
    if (typeof window !== 'undefined') window.localStorage.setItem('zion-web3-display', String(val));
  };

  const linkDID = async () => {
    if (!user) return;
    setLinking(true);
    setStatus(null);
    try {
      const nonceRes = await fetch('/api/auth/nonce');
      const { nonce } = await nonceRes.json();
      const payload = { ens, lens, ceramic, farcaster, address: user.address, chain: user.chain, nonce, ts: Date.now() };
      const msg = `Link Web3 identities to Zion account\n${JSON.stringify(payload)}`;
      // Sign message with connected wallet if possible (best effort)
      let signature: string | null = null;
      try {
        if (user.chain === 'evm' && (window as any).ethereum) {
          const ethers = await import('ethers');
          const provider = new ethers.providers.Web3Provider((window as any).ethereum);
          const signer = provider.getSigner();
          signature = await signer.signMessage(msg);
        } else if (user.chain === 'sol' && (window as any).solana?.isPhantom) {
          const enc = new TextEncoder().encode(msg);
          const { signature: sig } = await (window as any).solana.signMessage(enc, 'utf8');
          const bs58 = (await import('bs58')).default;
          signature = bs58.encode(sig);
        }
      } catch {}

      const res = await fetch('/api/did/link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ payload, message: msg, signature })});
      if (!res.ok) throw new Error('Failed to link DIDs');
      setStatus('Linked successfully');
    } catch (e: any) {
      setStatus(e?.message || 'Linking failed');
    } finally {
      setLinking(false);
    }
  };

  const doBackup = async () => {
    setStatus(null);
    try {
      const profile = {
        user,
        preferences: { displayWeb3 },
        did: { ens, lens, ceramic, farcaster },
        resume: {},
        projects: [],
        reviews: []};
      const res = await fetch('/api/backup/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile)});
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Backup failed');
      setBackupCid(data.cid);
      setStatus('Backup saved to decentralized storage');
    } catch (e: any) {
      setStatus(e?.message || 'Backup failed');
    }
  };

  const doRestore = async () => {
    setStatus(null);
    try {
      const res = await fetch(`/api/backup/restore?cid=${encodeURIComponent(restoreCid || backupCid)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Restore failed');
      const { user: u, preferences, did } = data;
      if (u) setUser(u);
      if (preferences) saveDisplayPref(!!preferences.displayWeb3);
      if (did) {
        setEns(did.ens || '');
        setLens(did.lens || '');
        setCeramic(did.ceramic || '');
        setFarcaster(did.farcaster || '');
      }
      setStatus('Profile restored from backup');
    } catch (e: any) {
      setStatus(e?.message || 'Restore failed');
    }
  };

  return (
    <>
      <Head>
        <title>Account Settings — Zion</title>
      </Head>
      <div className=&quot;max-w-3xl mx-auto space-y-8&quot;>
        <section className=&quot;rounded-xl border p-5&quot;>
          <h1 className=&quot;text-xl font-semibold mb-2&quot;>Account</h1>
          <p className=&quot;text-sm text-gray-500&quot;>Manage your Web3 identity and backups. Email is optional when using wallets.</p>
          <div className=&quot;mt-4 flex items-center justify-between&quot;>
            <div>
              <div className=&quot;text-sm font-medium&quot;>Display Web3 identity</div>
              <div className=&quot;text-xs text-gray-500&quot;>Show ENS/Lens name instead of email</div>
            </div>
            <label className=&quot;inline-flex items-center cursor-pointer&quot;>
              <input type=&quot;checkbox&quot; checked={displayWeb3} onChange={(e) => saveDisplayPref(e.target.checked)} className=&quot;sr-only&quot; />
              <span className=&quot;relative inline-block w-10 h-6 bg-gray-300 rounded-full shadow-inner&quot;>
                <span className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full transition-transform ${displayWeb3 ? 'translate-x-4' : ''}`}></span>
              </span>
            </label>
          </div>
        </section>

        <section className=&quot;rounded-xl border p-5&quot;>
          <h2 className=&quot;font-semibold mb-2&quot;>Link Web3 identities</h2>
          <div className=&quot;grid grid-cols-1 gap-3&quot;>
            <input value={ens} onChange={(e) => setEns(e.target.value)} placeholder=&quot;ENS (e.g. vitalik.eth)&quot; className=&quot;w-full rounded-md border px-3 py-2&quot; />
            <input value={lens} onChange={(e) => setLens(e.target.value)} placeholder=&quot;Lens handle (e.g. alice.lens)&quot; className=&quot;w-full rounded-md border px-3 py-2&quot; />
            <input value={ceramic} onChange={(e) => setCeramic(e.target.value)} placeholder=&quot;Ceramic DID (did:3:...)&quot; className=&quot;w-full rounded-md border px-3 py-2&quot; />
            <input value={farcaster} onChange={(e) => setFarcaster(e.target.value)} placeholder=&quot;Farcaster handle (e.g. @alice)&quot; className=&quot;w-full rounded-md border px-3 py-2&quot; />
            <button onClick={linkDID} disabled={linking} className=&quot;rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2&quot;>{linking ? 'Linking…' : 'Link & Verify'}</button>
          </div>
        </section>

        <section className=&quot;rounded-xl border p-5&quot;>
          <h2 className=&quot;font-semibold mb-2&quot;>Decentralized Backup</h2>
          <p className=&quot;text-sm text-gray-500 mb-3&quot;>Back up talent profiles, resume, and project reviews to IPFS/Arweave (via Web3.Storage). Opt-in only.</p>
          <div className=&quot;flex flex-wrap items-center gap-3&quot;>
            <button onClick={doBackup} className=&quot;rounded-md bg-emerald-600 text-white px-4 py-2&quot;>Create Backup</button>
            {backupCid && <span className=&quot;text-xs&quot;>CID: <code className=&quot;bg-gray-100 dark:bg-neutral-800 px-2 py-1 rounded&quot;>{backupCid}</code></span>}
          </div>
          <div className=&quot;mt-4 flex gap-2&quot;>
            <input value={restoreCid} onChange={(e) => setRestoreCid(e.target.value)} placeholder=&quot;Enter CID to restore&quot; className=&quot;flex-1 rounded-md border px-3 py-2&quot; />
            <button onClick={doRestore} className=&quot;rounded-md border px-4 py-2&quot;>Restore profile</button>
          </div>
        </section>

        {status && <div className=&quot;text-sm text-gray-600&quot;>{status}</div>}
      </div>
    </>
  );
}