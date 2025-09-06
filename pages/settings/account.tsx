import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';

export default function AccountSettingsPage(req, res) {
  try {
  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),;

  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);

  const [ens, setEns] = useState('');
  const [lens, setLens] = useState('');
  const [ceramic, setCeramic] = useState('');
  const [farcaster, setFarcaster] = useState('');
  const [linking, setLinking] = useState(false);
  const [backupCid, setBackupCid] = useState('');
  const [restoreCid, setRestoreCid] = useState('');

    if (!user) return;
    setLinking(true);
    setStatus(null);
    try {
      const nonceRes = await fetch('/api/auth/nonce');
      const { nonce } = await nonceRes.json();

      const msg = `Link Web3 identities to Zion account\n${JSON.stringify(payload)}`;
      // Sign message with connected wallet if possible (best effort);
      let signature: string | null = null;
      try {
        if (user.chain === 'evm' && (window as any).ethereum) {;
          const ethers = await import('ethers');
          const provider = new ethers.providers.Web3Provider((window as any).ethereum);
          const signer = provider.getSigner();
          signature = await signer.signMessage(msg);
        } else if (user.chain === 'sol' && (window as any).solana?.isPhantom) {;
          const enc = new TextEncoder().encode(msg);

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error |'Backup failed');
      setBackupCid(data.cid);
      setStatus('Backup saved to decentralized storage');

    } catch (error) {
      setStatus(e?.message || 'Restore failed');
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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

          </div>
          <div className="mt-4 flex gap-2">
            <input value={restoreCid} onChange={(e) => setRestoreCid(e.target.value)} placeholder="Enter CID to restore" className="flex-1 rounded-md border px-3 py-2" />
            <button onClick={doRestore} className="rounded-md border px-4 py-2">Restore profile</button>
          </div>
        </section>

        {status && <div className="text-sm text-gray-600">{status}</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </div>
    </>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

