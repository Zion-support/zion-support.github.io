import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';

export default function AccountSettingsPage() {
  const [user, setUser] = useState<{
    address: string;
    chain: 'evm' | 'sol';
<<<<<<< HEAD
  } | null>(null);  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
=======
  } | null>(null);
export default function AccountSettingsPage() {
  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),
export default function AccountSettingsPage() {
  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),
ursor/integrate-build-improve-and-re-verify-b76c
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [ens, setEns] = useState('');
  const [lens, setLens] = useState('');
  const [ceramic, setCeramic] = useState('');
  const [farcaster, setFarcaster] = useState('');
  const [linking, setLinking] = useState(false);
  const [backupCid, setBackupCid] = useState('');
  const [restoreCid, setRestoreCid] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const saved =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('zion-web3-user')
        : null;
    if (saved) setUser(JSON.parse(saved));
    const pref =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('zion-web3-display')
        : null;
<<<<<<< HEAD
    setDisplayWeb3(pref === 'true');  }, []);
=======
    setDisplayWeb3(pref === 'true');
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-user') : null;
    if (saved) setUser(JSON.parse(saved));
    const pref = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-display') : null;
    setDisplayWeb3(pref === 'true')
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-user') : null;
    if (saved) setUser(JSON.parse(saved));
    const pref = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-display') : null;
    setDisplayWeb3(pref === 'true')
ursor/integrate-build-improve-and-re-verify-b76c
  }, []);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const saveDisplayPref = (val: boolean) => {
    setDisplayWeb3(val);
    if (typeof window !== 'undefined')
<<<<<<< HEAD
      window.localStorage.setItem('zion-web3-display', String(val));  };
=======
      window.localStorage.setItem('zion-web3-display', String(val));
    if (typeof window !== 'undefined') window.localStorage.setItem('zion-web3-display', String(val))
    if (typeof window !== 'undefined') window.localStorage.setItem('zion-web3-display', String(val))
ursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const linkDID = async () => {
    if (!user) return;
    setLinking(true);
    setStatus(null);
    try {
      const nonceRes = await fetch('/api/auth/nonce');
      const { nonce } = await nonceRes.json();
      const payload = {
        ens,
        lens,
        ceramic,
        farcaster,
        address: user.address,
        chain: user.chain,
        nonce,
        ts: Date.now(),
      };
<<<<<<< HEAD
=======
      const payload = { ens, lens, ceramic, farcaster, address: user.address, chain: user.chain, nonce, ts: Date.now() },
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      const msg = `Link Web3 identities to Zion account\n${JSON.stringify(payload)}`;
      // Sign message with connected wallet if possible (best effort)
      let signature: string | null = null;
      try {
        if (user.chain === 'evm' && (window as any).ethereum) {
          const ethers = await import('ethers');
          const provider = new ethers.providers.Web3Provider(
            (window as any).ethereum
          );
          const signer = provider.getSigner();
          signature = await signer.signMessage(msg);
        } else if (user.chain === 'sol' && (window as any).solana?.isPhantom) {
          const enc = new TextEncoder().encode(msg);
          const { signature: sig } = await (window as any).solana.signMessage(
            enc,
            'utf8'
          );
          const bs58 = (await import('bs58')).default;
<<<<<<< HEAD
          signature = bs58.encode(sig);        }
=======
          signature = bs58.encode(sig);
      const payload = { ens, lens, ceramic, farcaster, address: user.address, chain: user.chain, nonce, ts: Date.now() },
      const msg = `Link Web3 identities to Zion account\n${JSON.stringify(payload)}`;
      // Sign message with connected wallet if possible (best effort)
      let signature: string | null = null,
      try {
        if (user.chain === 'evm' && (window as any).ethereum) {
          const ethers = await import('ethers');
          const provider = new ethers.providers.Web3Provider((window as any).ethereum);
          const signer = provider.getSigner();
          signature = await signer.signMessage(msg)
        } else if (user.chain === 'sol' && (window as any).solana?.isPhantom) {
          const enc = new TextEncoder().encode(msg);
          const { signature: sig } = await (window as any).solana.signMessage(enc, 'utf8');
          const bs58 = (await import('bs58')).default;
          signature = bs58.encode(sig)
          signature = bs58.encode(sig)
ursor/integrate-build-improve-and-re-verify-b76c
        }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      } catch {}

      const res = await fetch('/api/did/link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ payload, message: msg, signature }),
      });
<<<<<<< HEAD
=======
        body: JSON.stringify({ payload, message: msg, signature })});
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      if (!res.ok) throw new Error('Failed to link DIDs');
      setStatus('Linked successfully');
    } catch (e: any) {
      setStatus(e?.message || 'Linking failed');
    } finally {
<<<<<<< HEAD
      setLinking(false);    }
=======
      setLinking(false);
        body: JSON.stringify({ payload, message: msg, signature })});
      if (!res.ok) throw new Error('Failed to link DIDs');
      setStatus('Linked successfully')
    } catch (e: any) {
      setStatus(e?.message || 'Linking failed')
    } finally {
      setLinking(false)
      setLinking(false)
ursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  const doBackup = async () => {
    setStatus(null);
    try {
      const profile = {
        user,
<<<<<<< HEAD
=======
        user;
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        preferences: { displayWeb3 },
        did: { ens, lens, ceramic, farcaster },
        resume: {},
        projects: [],
        reviews: [],
      };
      const res = await fetch('/api/backup/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Backup failed');
      setBackupCid(data.cid);
      setStatus('Backup saved to decentralized storage');
    } catch (e: any) {
<<<<<<< HEAD
      setStatus(e?.message || 'Backup failed');    }
=======
      setStatus(e?.message || 'Backup failed');
        user;
        preferences: { displayWeb3 },
        did: {
       ens, lens, ceramic, farcaster 
    },
    resume: {},
        projects: [],
        reviews: []},
      const res = await fetch('/api/backup/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile)}),
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Backup failed');
      setBackupCid(data.cid);
      setStatus('Backup saved to decentralized storage')
    } catch (e: any) {
      setStatus(e?.message || 'Backup failed')
      setStatus(e?.message || 'Backup failed')
ursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  const doRestore = async () => {
    setStatus(null);
    try {
      const res = await fetch(
        `/api/backup/restore?cid=${encodeURIComponent(restoreCid || backupCid)}`
<<<<<<< HEAD
      );      const data = await res.json();
=======
      );
      const res = await fetch(`/api/backup/restore?cid=${encodeURIComponent(restoreCid || backupCid)}`);
      const res = await fetch(`/api/backup/restore?cid=${encodeURIComponent(restoreCid || backupCid)}`);
ursor/integrate-build-improve-and-re-verify-b76c
      const data = await res.json();
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      if (!res.ok) throw new Error(data?.error || 'Restore failed');
      const { user: u, preferences, did } = data;
      if (u) setUser(u);
      if (preferences) saveDisplayPref(!!preferences.displayWeb3);
      if (did) {
        setEns(did.ens || '');
        setLens(did.lens || '');
        setCeramic(did.ceramic || '');
        setFarcaster(did.farcaster || '');
<<<<<<< HEAD
=======
        setFarcaster(did.farcaster || '')
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      }
      setStatus('Profile restored from backup');
    } catch (e: any) {
<<<<<<< HEAD
      setStatus(e?.message || 'Restore failed');    }
=======
      setStatus(e?.message || 'Restore failed');
        setFarcaster(did.farcaster || '')
      }
      setStatus('Profile restored from backup')
    } catch (e: any) {
      setStatus(e?.message || 'Restore failed')
      setStatus(e?.message || 'Restore failed')
ursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  return (
    <>
      <Head>
        <title>Account Settings — Zion</title>
      </Head>
      <div className='max-w-3xl mx-auto space-y-8'>
        <section className='rounded-xl border p-5'>
          <h1 className='text-xl font-semibold mb-2'>Account</h1>
          <p className='text-sm text-gray-500'>
            Manage your Web3 identity and backups. Email is optional when using
            wallets.
          </p>
          <div className='mt-4 flex items-center justify-between'>
<<<<<<< HEAD
=======
      <div className="max-w-3xl mx-auto space-y-8">
        <section className="rounded-xl border p-5">
          <h1 className="text-xl font-semibold mb-2">Account</h1>
          <p className="text-sm text-gray-500">Manage your Web3 identity and backups. Email is optional when using wallets.</p>
          <div className="mt-4 flex items-center justify-between">
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <div>
              <div className='text-sm font-medium'>Display Web3 identity</div>
              <div className='text-xs text-gray-500'>
                Show ENS/Lens name instead of email
              </div>
            </div>
            <label className='inline-flex items-center cursor-pointer'>
              <input
                type='checkbox'
                checked={displayWeb3}
                onChange={e => saveDisplayPref(e.target.checked)}
                className='sr-only'
              />
              <span className='relative inline-block w-10 h-6 bg-gray-300 rounded-full shadow-inner'>
                <span
                  className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full transition-transform ${displayWeb3 ? 'translate-x-4' : ''}`}
<<<<<<< HEAD
                ></span>              </span>
=======
                ></span>
      <div className="max-w-3xl mx-auto space-y-8">
        <section className="rounded-xl border p-5">
          <h1 className="text-xl font-semibold mb-2">Account</h1>
          <p className="text-sm text-gray-500">Manage your Web3 identity and backups. Email is optional when using wallets.</p>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Display Web3 identity</div>
              <div className="text-xs text-gray-500">Show ENS/Lens name instead of email</div>
            </div>
ursor/integrate-build-improve-and-re-verify-b76c
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={displayWeb3} onChange={(e) => saveDisplayPref(e.target.checked)} className="sr-only" />
              <span className="relative inline-block w-10 h-6 bg-gray-300 rounded-full shadow-inner">
                <span className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full transition-transform ${displayWeb3 ? 'translate-x-4' : ''}`}></span>
ursor/integrate-build-improve-and-re-verify-b76c
              </span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </label>
          </div>
        </section>

        <section className='rounded-xl border p-5'>
          <h2 className='font-semibold mb-2'>Link Web3 identities</h2>
          <div className='grid grid-cols-1 gap-3'>
            <input
              value={ens}
              onChange={e => setEns(e.target.value)}
              placeholder='ENS (e.g. vitalik.eth)'
              className='w-full rounded-md border px-3 py-2'
            />
            <input
              value={lens}
              onChange={e => setLens(e.target.value)}
              placeholder='Lens handle (e.g. alice.lens)'
              className='w-full rounded-md border px-3 py-2'
            />
            <input
              value={ceramic}
              onChange={e => setCeramic(e.target.value)}
              placeholder='Ceramic DID (did:3:...)'
              className='w-full rounded-md border px-3 py-2'
            />
            <input
              value={farcaster}
              onChange={e => setFarcaster(e.target.value)}
              placeholder='Farcaster handle (e.g. @alice)'
              className='w-full rounded-md border px-3 py-2'
            />
            <button
              onClick={linkDID}
              disabled={linking}
              className='rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2'
            >
              {linking ? 'Linking…' : 'Link & Verify'}
            </button>
<<<<<<< HEAD
=======
        <section className="rounded-xl border p-5">
          <h2 className="font-semibold mb-2">Link Web3 identities</h2>
          <div className="grid grid-cols-1 gap-3">
            <input value={ens} onChange={(e) => setEns(e.target.value)} placeholder="ENS (e.g. vitalik.eth)" className="w-full rounded-md border px-3 py-2" />
            <input value={lens} onChange={(e) => setLens(e.target.value)} placeholder="Lens handle (e.g. alice.lens)" className="w-full rounded-md border px-3 py-2" />
            <input value={ceramic} onChange={(e) => setCeramic(e.target.value)} placeholder="Ceramic DID (did:3:...)" className="w-full rounded-md border px-3 py-2" />
            <input value={farcaster} onChange={(e) => setFarcaster(e.target.value)} placeholder="Farcaster handle (e.g. @alice)" className="w-full rounded-md border px-3 py-2" />
            <button onClick={linkDID} disabled={linking} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2">{linking ? 'Linking…' : 'Link & Verify'}</button>
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </div>
        </section>

        <section className='rounded-xl border p-5'>
          <h2 className='font-semibold mb-2'>Decentralized Backup</h2>
          <p className='text-sm text-gray-500 mb-3'>
            Back up talent profiles, resume, and project reviews to IPFS/Arweave
            (via Web3.Storage). Opt-in only.
          </p>
          <div className='flex flex-wrap items-center gap-3'>
            <button
              onClick={doBackup}
              className='rounded-md bg-emerald-600 text-white px-4 py-2'
            >
              Create Backup
            </button>
            {backupCid && (
              <span className='text-xs'>
                CID:{' '}
                <code className='bg-gray-100 dark:bg-neutral-800 px-2 py-1 rounded'>
                  {backupCid}
                </code>
              </span>
            )}
          </div>
          <div className='mt-4 flex gap-2'>
            <input
              value={restoreCid}
              onChange={e => setRestoreCid(e.target.value)}
              placeholder='Enter CID to restore'
              className='flex-1 rounded-md border px-3 py-2'
            />
            <button onClick={doRestore} className='rounded-md border px-4 py-2'>
              Restore profile
            </button>
          </div>
        </section>

        {status && <div className='text-sm text-gray-600'>{status}</div>}
      </div>
    </>
<<<<<<< HEAD
  );
=======
  );
        <section className="rounded-xl border p-5">
          <h2 className="font-semibold mb-2">Link Web3 identities</h2>
          <div className="grid grid-cols-1 gap-3">
            <input value={ens} onChange={(e) => setEns(e.target.value)} placeholder="ENS (e.g. vitalik.eth)" className="w-full rounded-md border px-3 py-2" />
            <input value={lens} onChange={(e) => setLens(e.target.value)} placeholder="Lens handle (e.g. alice.lens)" className="w-full rounded-md border px-3 py-2" />
            <input value={ceramic} onChange={(e) => setCeramic(e.target.value)} placeholder="Ceramic DID (did:3:...)" className="w-full rounded-md border px-3 py-2" />
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
  )
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
