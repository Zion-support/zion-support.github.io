import React, {_useEffect, _useMemo, _useState} from 'react';
import Head from 'next/head';

export default function AccountSettingsPage() {_const [user, _setUser] = useState<{ address: string; chain: 'evm' | 'sol'} | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
  const [ens, setEns] = useState('');
  const [lens, setLens] = useState('');
  const [ceramic, setCeramic] = useState('');
  const [farcaster, setFarcaster] = useState('');
  const [linking, setLinking] = useState(false);
  const [backupCid, setBackupCid] = useState('');
  const [restoreCid, setRestoreCid] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  useEffect__(() => {_const _saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-user') : null;
    if (saved) setUser(JSON.parse(saved));
    const _pref = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-display') : null;
    setDisplayWeb3(pref === 'true');}, []);

  const _saveDisplayPref = (_val: boolean) => {_setDisplayWeb3(val);
    if (typeof window !== 'undefined') window.localStorage.setItem('zion-web3-display', _String(val));};

  const _linkDID = async () => {_if (!user) return;
    setLinking(true);
    setStatus(null);
    try {
      const _nonceRes = await fetch('/api/auth/nonce');
      const { nonce} = await nonceRes.json();
      const _payload = {_ens, _lens, _ceramic, _farcaster, _address: user.address, _chain: user.chain, _nonce, _ts: Date.now()};
      const _msg = `Link Web3 identities to Zion account\n${_JSON.stringify(payload)}`;
      // Sign message with connected wallet if possible (best effort)
      let signature: string | null = null;
      try {_if (user.chain === 'evm' && (window as any).ethereum) {
          const _ethers = await import('ethers');
          const _provider = new ethers.providers.Web3Provider((window as any).ethereum);
          const _signer = provider.getSigner();
          signature = await signer.signMessage(msg);} else if (user.chain === 'sol' && (window as any).solana?.isPhantom) {_const _enc = new TextEncoder().encode(msg);
          const { signature: sig} = await (window as any).solana.signMessage(enc, 'utf8');
          const _bs58 = (await import('bs58')).default;
          signature = bs58.encode(sig);
        }
      } catch {}

      const _res = await fetch('/api/did/link', {_method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_payload, _message: msg, _signature})});
      if (!res.ok) throw new Error('Failed to link DIDs');
      setStatus('Linked successfully');
    } catch (e: unknown) {_setStatus(e?.message || 'Linking failed');} finally {_setLinking(false);}
  };

  const _doBackup = async () => {_setStatus(null);
    try {
      const _profile = {
        user, _preferences: { displayWeb3},
        did: {_ens, _lens, _ceramic, _farcaster},
        resume: {},
        projects: [],
        reviews: []};
      const _res = await fetch('/api/backup/upload', {_method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(profile)});
      const _data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Backup failed');
      setBackupCid(data.cid);
      setStatus('Backup saved to decentralized storage');
    } catch (e: unknown) {_setStatus(e?.message || 'Backup failed');}
  };

  const _doRestore = async () => {_setStatus(null);
    try {
      const _res = await fetch(`/api/backup/restore?cid=${encodeURIComponent(restoreCid || backupCid)}`);
      const _data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Restore failed');
      const {_user: u, _preferences, _did} = data;
      if (u) setUser(u);
      if (preferences) saveDisplayPref(!!preferences.displayWeb3);
      if (did) {_setEns(did.ens || '');
        setLens(did.lens || '');
        setCeramic(did.ceramic || '');
        setFarcaster(did.farcaster || '');}
      setStatus('Profile restored from backup');
    } catch (e: unknown) {_setStatus(e?.message || 'Restore failed');}
  };

  return (_<>
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
              <input type="checkbox" checked={_displayWeb3} onChange={_(e) => saveDisplayPref(e.target.checked)} className="sr-only" />
              <span className="relative inline-block w-10 h-6 bg-gray-300 rounded-full shadow-inner">
                <span className={_`absolute left-0 top-0 w-6 h-6 bg-white rounded-full transition-transform ${displayWeb3 ? 'translate-x-4' : ''}`}></span>
              </span>
            </label>
          </div>
        </section>

        <section className="rounded-xl border p-5">
          <h2 className="font-semibold mb-2">Link Web3 identities</h2>
          <div className="grid grid-cols-1 gap-3">
            <input value={_ens} onChange={_(_e) => setEns(e.target.value)} placeholder="ENS (e.g. vitalik.eth)" className="w-full rounded-md border px-3 py-2" />
            <input value={_lens} onChange={_(_e) => setLens(e.target.value)} placeholder="Lens handle (e.g. alice.lens)" className="w-full rounded-md border px-3 py-2" />
            <input value={_ceramic} onChange={_(_e) => setCeramic(e.target.value)} placeholder="Ceramic DID (did:3:...)" className="w-full rounded-md border px-3 py-2" />
            <input value={_farcaster} onChange={_(_e) => setFarcaster(e.target.value)} placeholder="Farcaster handle (e.g. @alice)" className="w-full rounded-md border px-3 py-2" />
            <button onClick={_linkDID} disabled={_linking} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2">{_linking ? 'Linking…' : 'Link & Verify'}</button>
          </div>
        </section>

        <section className="rounded-xl border p-5">
          <h2 className="font-semibold mb-2">Decentralized Backup</h2>
          <p className="text-sm text-gray-500 mb-3">Back up talent profiles, resume, and project reviews to IPFS/Arweave (via Web3.Storage). Opt-in only.</p>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={_doBackup} className="rounded-md bg-emerald-600 text-white px-4 py-2">Create Backup</button>
            {_backupCid && <span className="text-xs">CID: <code className="bg-gray-100 dark:bg-neutral-800 px-2 py-1 rounded">{backupCid}</code></span>}
          </div>
          <div className="mt-4 flex gap-2">
            <input value={_restoreCid} onChange={_(_e) => setRestoreCid(e.target.value)} placeholder="Enter CID to restore" className="flex-1 rounded-md border px-3 py-2" />
            <button onClick={_doRestore} className="rounded-md border px-4 py-2">Restore profile</button>
          </div>
        </section>

        {_status && <div className="text-sm text-gray-600">{status}</div>}
      </div>
    </>
  );
}