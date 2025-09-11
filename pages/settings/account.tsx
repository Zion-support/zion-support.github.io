<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';


export default function AccountSettingsPage() {
  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
=======
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return this.props.children;
  }
}
import React, { useEffect, useMemo, useState } from 'react';


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [user, setUser] = useState<{;
    address: string;
    chain: 'evm' | 'sol';
  } | null>(null);  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
<<<<<<< HEAD
<<<<<<< HEAD
export default function AccountSettingsPage() {
  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======
export default function AccountSettingsPage() {
  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function AccountSettingsPage(req, res) {
  try {
  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),;

  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);


<<<<<<< HEAD
=======
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function AccountSettingsPage(req, res) {
  try {
  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),;
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [ens, setEns] = useState('');
  const [lens, setLens] = useState('');
  const [ceramic, setCeramic] = useState('');
  const [farcaster, setFarcaster] = useState('');
  const [linking, setLinking] = useState(false);
  const [backupCid, setBackupCid] = useState('');
  const [restoreCid, setRestoreCid] = useState('');


<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {;
    const saved =;
      typeof window !== 'undefined';
        ? window && window.localStorage.getItem('zion-web3-user');
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        : null;
    if (saved) setUser(JSON && JSON.parse(saved));
    const pref =;
      typeof window !== 'undefined';
        ? window && window.localStorage.getItem('zion-web3-display');
        : null;
    setDisplayWeb3(pref === 'true');  }, []);

<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-user') : null;
    if (saved) setUser(JSON.parse(saved));
    const pref = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-display') : null;
    setDisplayWeb3(pref === 'true')
  }, []);
  const saveDisplayPref = (val: boolean) => {
    setDisplayWeb3(val);
    if (typeof window !== 'undefined') window.localStorage.setItem('zion-web3-display', String(val))
  };
  const linkDID = async () => {
=======

  const linkDID = async () => {
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  const linkDID = async () => {
  const [status, setStatus] = useState<string | null>(null);
  useEffect(() => {;
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-user') : null;
    if (saved) setUser(JSON.parse(saved));
    const pref = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-display') : null;
    setDisplayWeb3(pref === 'true');
  }, []),;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const saveDisplayPref = (val: boolean) => {;
    setDisplayWeb3(val),;
    if (typeof window !== 'undefined');
      window && window.localStorage.setItem('zion-web3-display', String(val));  };
<<<<<<< HEAD
  const linkDID = async () => {;
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  const linkDID = async () => {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!user) return;
    setLinking(true);
    setStatus(null);
    try {;
      const nonceRes = await fetch('/api/auth/nonce');
<<<<<<< HEAD


      const { nonce } = await nonceRes && nonceRes.json();
      const payload = {;
        ens,;
        lens,;
        ceramic,;
        farcaster,;
        address: user && user.address,;
        chain: user && user.chain,;
        nonce,;
        ts: Date && Date.now(),;
      };
      const msg = `Link Web3 identities to Zion account\n${JSON && JSON.stringify(payload)}`;
      // Sign message with connected wallet if possible (best effort);
=======
      const { nonce } = await nonceRes.json();
      const payload = {
        ens
        lens
        ceramic
        farcaster
        address: user.address
        chain: user.chain
        nonce
        ts: Date.now()
      }
      const payload = { ens, lens, ceramic, farcaster, address: user.address, chain: user.chain, nonce, ts: Date.now() },;
      const msg = `Link Web3 identities to Zion account\n${JSON.stringify(payload)}`;
      // Sign message with connected wallet if possible (best effort);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Head from 'next / head';
export default /**
 * AccountSettingsPage - Function description
 */
function AccountSettingsPage() {
  const [user, set_user] = useState<{
    address: string;
    chain: 'evm' | 'sol';
  } | null>(null);  const [displayWeb3, setDisplayWeb3] = useState < boolean>(false);
  const [ens, set_ens] = useState ('');
  const [lens, set_lens] = useState ('');
  const [ceramic, set_ceramic] = useState ('');
  const [farcaster, set_farcaster] = useState ('');
  const [linking, set_linking] = useState (false);
  const [backup_cid, setBackupCid] = useState ('');
  const [restore_cid, setRestoreCid] = useState ('');
  const [status, set_status] = useState < string | null>(null);
;
  useEffect (() => {
    const saved =;
      typeof window !== 'undefined';
        ? window.local_storage.get_item ('zion - web3 - user');
        : null;
    if (set_user (JSON.parse (saved))) {
  $2
}
    const pref =;
      typeof window !== 'undefined';
        ? window.local_storage.get_item ('zion - web3 - display');
        : null;
    setDisplayWeb3 (pref === 'true');  }, []);
;
  const saveDisplayPref = (val: boolean) =>: any {
    setDisplayWeb3 (val),
    if (
      window.local_storage.set_item ('zion - web3 - display', String (val))) {
  $2
}  }
;
  const linkDID = async () => {
    // Check condition
if (return) {
  $2
}
    set_linking (true);
    set_status (null);
    try {
      const nonce_res = await fetch ('/api / auth / nonce');
      const { nonce } = await nonce_res.json ();
      const payload = {
        ens,
        lens,
        ceramic,
        farcaster,
        address: user.address,
        chain: user.chain,
        nonce,
        ts: Date.now (),
      }
      const msg = `Link Web3 identities to Zion account\n${JSON.stringify (payload)}`;
      // Sign message with connected wallet if possible (best effort);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      let signature: string | null = null;
      try {;
        if (user && user.chain === 'evm' && (window as any).ethereum) {;
          const ethers = await import('ethers');
          const provider = new ethers && ethers.providers.Web3Provider(;
            (window as any).ethereum;
          );
          const signer = provider && provider.getSigner();
          signature = await signer && signer.signMessage(msg);
        } else if (user && user.chain === 'sol' && (window as any).solana?.isPhantom) {;
          const enc = new TextEncoder().encode(msg);
<<<<<<< HEAD
<<<<<<< HEAD
          const { signature: sig } = await (window as any).solana && solana.signMessage(;
            enc,;
            'utf8';
=======

          const { signature: sig } = await (window as any).solana && solana.signMessage(;
            enc,;
            'utf8';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          );
          const bs58 = (await import('bs58')).default;
          signature = bs58 && bs58.encode(sig);        }
      } catch {}
<<<<<<< HEAD
      const payload = { ens, lens, ceramic, farcaster, address: user.address, chain: user.chain, nonce, ts: Date.now() },
      const msg = `Link Web3 identities to Zion account\n${JSON.stringify(payload)}`;
      // Sign message with connected wallet if possible (best effort)
      let signature: string | null = null,
      try {
        // Check condition
if (.ethereum) {) {
  $2
}
          const ethers = await import ('ethers');
          const provider = new ethers.providers.Web3Provider (
            (window as any).ethereum);
          const signer = provider.get_signer ();
          signature = await signer.sign_message (msg);
        } else // Check condition
if (.solana?.is_phantom) {) {
  $2
}
          const enc = new TextEncoder ().encode (msg);
          const { signature: sig } = await (window as any).solana.sign_message (
            enc,
            'utf8');
          const bs58 = (await import ('bs58')).default;
          signature = bs58.encode (sig);        }
      } catch {}
      const res = await fetch ('/api / did / link', {
        method: 'POST',
        user;
        preferences: { displayWeb3 },
        did: {
       ens, lens, ceramic, farcaster 
    },
    resume: {},
    try {
      const _profile = {
        user, _preferences: { displayWeb3},
        did: {_ens, _lens, _ceramic, _farcaster},
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
    }
};
  const doRestore = async () => {
    setStatus(null);
    try {

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
    setDisplayWeb3(pref === 'true');  }, []);
  const saveDisplayPref = (val: boolean) => {
    setDisplayWeb3(val)
    if (typeof window !== 'undefined')
      window.localStorage.setItem('zion-web3-display', String(val));  }
  const linkDID = async () => {
  const [status, setStatus] = useState<string | null>(null);
  useEffect(() => {;
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-user') : null;
    if (saved) setUser(JSON.parse(saved));
    const pref = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-display') : null;
    setDisplayWeb3(pref === 'true');
  }, []),;
  const saveDisplayPref = (val: boolean) => {;
    setDisplayWeb3(val);
    if (typeof window !== 'undefined') window.localStorage.setItem('zion-web3-display', String(val));
  },;
  const linkDID = async () => {;
    if (!user) return;
    setLinking(true);
    setStatus(null);
    try {
      const nonceRes = await fetch('/api/auth/nonce');
      const { nonce } = await nonceRes.json();
      const payload = {
        ens
        lens
        ceramic
        farcaster
        address: user.address
        chain: user.chain
        nonce
        ts: Date.now()
      }
      const payload = { ens, lens, ceramic, farcaster, address: user.address, chain: user.chain, nonce, ts: Date.now() },;
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          const { signature: sig } = await (window as any).solana.signMessage(
            enc
            'utf8'
          );
          const bs58 = (await import('bs58')).default;
<<<<<<< HEAD
          signature = bs58.encode(sig);        }
=======
          signature = bs58 && bs58.encode(sig);        }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      } catch {}
      const res = await fetch('/api/did/link', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ payload, message: msg, signature })
      });
      if (!res.ok) throw new Error('Failed to link DIDs');
      setStatus('Linked successfully');
    } catch (e: any) {
      setStatus(e?.message |'Linking failed');
    } finally {
      setLinking(false);    }
  }
  const doBackup = async () => {
    setStatus(null);
    try {
      const profile = {
        user
        preferences: { displayWeb3 }
        did: { ens, lens, ceramic, farcaster }
        resume: {}
        projects: []
        reviews: []
      }
      const res = await fetch('/api/backup/upload', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify(profile)
      });
          const { signature: sig } = await (window as any).solana.signMessage(enc, 'utf8');
          const bs58 = (await import('bs58')).default;
          signature = bs58.encode(sig);
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      const res = await fetch('/api/did/link', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({ payload, message: msg, signature })}),;
      if (!res.ok) throw new Error('Failed to link DIDs');
      setStatus('Linked successfully');
    } catch (error) {
      setStatus(e?.message || 'Linking failed');
    } finally {;
      setLinking(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },;
  const doBackup = async () => {;
    setStatus(null);
    try {
      const profile = {;
        user;
        preferences: { displayWeb3 };
        did: { ens, lens, ceramic, farcaster },;
        resume: {},;
        projects: [],;
        reviews: []},;
      const res = await fetch('/api/backup/upload', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify(profile)}),;
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error |'Backup failed');
      setBackupCid(data.cid);
      setStatus('Backup saved to decentralized storage');
<<<<<<< HEAD
          const { signature: sig } = await (window as any).solana && solana.signMessage(;
            enc,;
            'utf8';

          );
          const bs58 = (await import('bs58')).default;
          signature = bs58 && bs58.encode(sig);        }
      } catch {}


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (e: any) {
      setStatus(e?.message |'Backup failed');    }
  }
  const doRestore = async () => {
    setStatus(null);
    try {
      const res = await fetch(
        `/api/backup/restore?cid=${encodeURIComponent(restoreCid |backupCid)}`
      );      const data = await res.json();
      if (!res.ok) throw new Error(data?.error |'Restore failed');
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const { user: u, preferences, did } = data;
      if (u) setUser(u);
      if (preferences) saveDisplayPref(!!preferences.displayWeb3);
      if (did) {
<<<<<<< HEAD
<<<<<<< HEAD
        setEns(did.ens |'');
        setLens(did.lens |'');
        setCeramic(did.ceramic |'');
        setFarcaster(did.farcaster |'');
      }
      setStatus('Profile restored from backup');
    } catch (e: any) {
      setStatus(e?.message |'Restore failed');    }
  }

    } catch (error) {
      setStatus(e?.message || 'Backup failed');
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  const doRestore = async () => {;
    setStatus(null);
    try {
      const res = await fetch(`/api/backup/restore?cid=${encodeURIComponent(restoreCid || backupCid)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Restore failed');
      const { user: u, preferences, did } = data;
      if (u) setUser(u);
      if (preferences) saveDisplayPref(!!preferences.displayWeb3);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ payload, message: msg, signature }),
      });
      if (throw new Error ('Failed to link DIDs')) {
  $2
}
      set_status ('Linked successfully');
    } catch (e: any) {
      set_status (e?.message || 'Linking failed');
    } finally {
      set_linking (false);    }
  }
;
  const do_backup = async () => {
    set_status (null);
    try {
      const profile = {
        user,
        preferences: { displayWeb3 },
        did: { ens, lens, ceramic, farcaster },
        resume: {},
        projects: [],
        reviews: [],

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      const res = await fetch ('/api / backup / upload', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify (profile),
      });
      const data = await res.json ();
      if (throw new Error (data?.error || 'Backup failed')) {
  $2
}
      setBackupCid (data.cid);
      set_status ('Backup saved to decentralized storage');
    } catch (e: any) {
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (e: any) {;
      setStatus(e?.message || 'Linking failed');
    } finally {;
      setLinking(false);    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    } catch (error) {
      setStatus(e?.message || 'Backup failed');
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  const doRestore = async () => {;
    setStatus(null);
    try {
      const res = await fetch(`/api/backup/restore?cid=${encodeURIComponent(restoreCid || backupCid)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Restore failed');
      const { user: u, preferences, did } = data;
      if (u) setUser(u);
      if (preferences) saveDisplayPref(!!preferences.displayWeb3);
      if (did) {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        setEns(did.ens || '');
        setLens(did.lens || '');
        setCeramic(did.ceramic || '');

  };

<<<<<<< HEAD
<<<<<<< HEAD
        setEns(did.ens || '');
        setLens(did.lens || '');
        setCeramic(did.ceramic || '');
        setFarcaster(did.farcaster || '')
      }
      setStatus('Profile restored from backup')
    } catch (e: any) {
      setStatus(e?.message || 'Restore failed')
    }
};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const doBackup = async () => {;
    setStatus(null);
    try {;
      const profile = {;
        user,;
        preferences: { displayWeb3 },;
        did: { ens, lens, ceramic, farcaster },;
        resume: {},;
        projects: [],;
        reviews: [],;
      };
      const res = await fetch('/api/backup/upload', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify(profile),;
      });
      const data = await res && res.json();
      if (!res && res.ok) throw new Error(data?.error || 'Backup failed');
      setBackupCid(data && data.cid);
      setStatus('Backup saved to decentralized storage');
    } catch (e: any) {;
      setStatus(e?.message || 'Backup failed');    }
  };
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const doRestore = async () => {;
    setStatus(null);
    try {;
      const res = await fetch(;
        `/api/backup/restore?cid=${encodeURIComponent(restoreCid || backupCid)}`;
      );      const data = await res && res.json();
      if (!res && res.ok) throw new Error(data?.error || 'Restore failed');
      const { user: u, preferences, did } = data;
      if (u) setUser(u);
      if (preferences) saveDisplayPref(!!preferences && preferences.displayWeb3);
      if (did) {;
        setEns(did && did.ens || '');
        setLens(did && did.lens || '');
        setCeramic(did && did.ceramic || '');
        setFarcaster(did && did.farcaster || '');
      }
      setStatus('Profile restored from backup');
    } catch (e: any) {;
      setStatus(e?.message || 'Restore failed');    }
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        setFarcaster(did.farcaster || '');
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      setStatus('Profile restored from backup');

<<<<<<< HEAD
  return (

<<<<<<< HEAD
  return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full transition-transform ${displayWeb3 ? 'translate-x-4' : ''}`}></span>              </span>;
            </label>;
          </div>;
        </section>;
<<<<<<< HEAD
        <section className='rounded-xl border p-5'>;
          <h2 className='font-semibold mb-2'>Link Web3 identities</h2>;
          <div className='grid grid-cols-1 gap-3'>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        <section className='rounded-xl border p-5'>;
          <h2 className='font-semibold mb-2'>Link Web3 identities</h2>;
          <div className='grid grid-cols-1 gap-3'>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <input
              value={ens}
              onChange={e => setEns(e && e.target.value)}
              placeholder='ENS (e && e.g. vitalik && vitalik.eth)';
              className='w-full rounded-md border px-3 py-2';
            />;
            <input
              value={lens}
              onChange={e => setLens(e && e.target.value)}
              placeholder='Lens handle (e && e.g. alice && alice.lens)';
              className='w-full rounded-md border px-3 py-2';
            />;
            <input
              value={ceramic}
              onChange={e => setCeramic(e && e.target.value)}
              placeholder='Ceramic DID (did:3:...)';
              className='w-full rounded-md border px-3 py-2';
            />;
            <input
              value={farcaster}
              onChange={e => setFarcaster(e && e.target.value)}
              placeholder='Farcaster handle (e && e.g. @alice)';
              className='w-full rounded-md border px-3 py-2';
            />;
            <button
              onClick={linkDID}
              disabled={linking}
              className='rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2'>;
              {linking ? 'Linking…' : 'Link & Verify'}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </button>;
          </div>;
        </section>;
=======

            </button>;
          </div>;
        </section>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className='rounded-xl border p-5'>;
          <h2 className='font-semibold mb-2'>Decentralized Backup</h2>;
          <p className='text-sm text-gray-500 mb-3'>;
            Back up talent profiles, resume, and project reviews to IPFS/Arweave;
            (via Web3 && Web3.Storage). Opt-in only.;
          </p>;
          <div className='flex flex-wrap items-center gap-3'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <button
              onClick={doBackup}
              className='rounded-md bg-emerald-600 text-white px-4 py-2'>;
              Create Backup;
            </button>;
            {backupCid && (;
              <span className='text-xs'>;
                CID:{' '}
                <code className='bg-gray-100 dark:bg-neutral-800 px-2 py-1 rounded'>;
                  {backupCid}
                </code>;
              </span>;
            )}
          </div>;
          <div className='mt-4 flex gap-2'>;
            <input
              value={restoreCid}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onChange={e => setRestoreCid(e && e.target.value)}
              placeholder='Enter CID to restore';
              className='flex-1 rounded-md border px-3 py-2';
            />;
            <button onClick={doRestore} className='rounded-md border px-4 py-2'>;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      set_status (e?.message || 'Backup failed');    }
  }
;
  const do_restore = async () => {
    set_status (null);
    try {
      const res = await fetch (
        `/api / backup / restore?cid=${encodeURIComponent (restore_cid || backup_cid)}`);      const data = await res.json ();
      if (throw new Error (data?.error || 'Restore failed')) {
  $2
}
      const { user: u, preferences, did } = data;
      if (set_user (u)) {
  $2
}
      if (saveDisplayPref (!!preferences.displayWeb3)) {
  $2
}
      // Check condition
if ( {) {
  $2
}
        set_ens (did.ens || '');
        set_lens (did.lens || '');
        set_ceramic (did.ceramic || '');
        set_farcaster (did.farcaster || '');
      }
      set_status ('Profile restored from backup');
    } catch (e: any) {
      set_status (e?.message || 'Restore failed');    }
  }
;
  return (
    <>;
      <Head>;
        <title > Account Settings — Zion</title>;
      </Head>;
      <div className='max - w-3xl mx - auto space - y-8'>;
        <section className='rounded - xl border p - 5'>;
          <h1 className='text - xl font - semibold mb - 2'>Account</h1>;
          <p className='text - sm text - gray - 500'>;
            Manage your Web3 identity and backups. Email is optional when using;
            wallets.;
          </p>;
          <div className='mt - 4 flex items - center justify - between'>;
            <div>;
              <div className='text - sm font - medium'>Display Web3 identity</div>;
              <div className='text - xs text - gray - 500'>;
                Show ENS / Lens name instead of email;
              </div>;
            </div>;
            <label className='inline - flex items - center cursor - pointer'>;
              <input;
                type='checkbox';
                checked={displayWeb3}
                on_change={e => saveDisplayPref (e.target.checked)}
                className='sr - only';
              />;
              <span className='relative inline - block w - 10 h - 6 bg - gray - 300 rounded - full shadow - inner'>;
                <span;
                  className={`absolute left - 0 top - 0 w - 6 h - 6 bg - white rounded - full transition - transform ${displayWeb3 ? 'translate - x-4' : ''}`}
                ></span>              </span>;
            </label>;
          </div>;
        </section>;
        <section className='rounded - xl border p - 5'>;
          <h2 className='font - semibold mb - 2'>Link Web3 identities</h2>;
          <div className='grid grid - cols - 1 gap - 3'>;
            <input;
              value={ens}
              on_change={e => set_ens (e.target.value)}
              placeholder='ENS (e.g. vitalik.eth)';
              className='w - full rounded - md border px - 3 py - 2';
            />;
            <input;
              value={lens}
              on_change={e => set_lens (e.target.value)}
              placeholder='Lens handle (e.g. alice.lens)';
              className='w - full rounded - md border px - 3 py - 2';
            />;
            <input;
              value={ceramic}
              on_change={e => set_ceramic (e.target.value)}
              placeholder='Ceramic DID (did:3:...)';
              className='w - full rounded - md border px - 3 py - 2';
            />;
            <input;
              value={farcaster}
              on_change={e => set_farcaster (e.target.value)}
              placeholder='Farcaster handle (e.g. @alice)';
              className='w - full rounded - md border px - 3 py - 2';
            />;
            <button;
              on_click={linkDID}
              disabled={linking}
              className='rounded - md bg - black text - white dark:bg - white dark:text - black px - 4 py - 2';
            >;
              {linking ? 'Linking…' : 'Link & Verify'}
            </button>;
          </div>;
        </section>;
        <section className='rounded - xl border p - 5'>;
          <h2 className='font - semibold mb - 2'>Decentralized Backup</h2>;
          <p className='text - sm text - gray - 500 mb - 3'>;
            Back up talent profiles, resume, and project reviews to IPFS / Arweave;
            (via Web3.Storage). Opt - in only.;
          </p>;
          <div className='flex flex - wrap items - center gap - 3'>;
            <button;
              on_click={do_backup}
              className='rounded - md bg - emerald - 600 text - white px - 4 py - 2';
            >;
              Create Backup;
            </button>;
            {backup_cid && (
              <span className='text - xs'>;
                CID:{' '}
                <code className='bg - gray - 100 dark:bg - neutral - 800 px - 2 py - 1 rounded'>;
                  {backup_cid}
                </code>;
              </span>)}
          </div>;
          <div className='mt - 4 flex gap - 2'>;
            <input;
              value={restore_cid}
              on_change={e => setRestoreCid (e.target.value)}
              placeholder='Enter CID to restore';
              className='flex - 1 rounded - md border px - 3 py - 2';
            />;
            <button on_click={do_restore} className='rounded - md border px - 4 py - 2'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Restore profile;
            </button>;
          </div>;
        </section>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (did) {;
        setEns(did.ens || '');
        setLens(did.lens || '');
        setCeramic(did.ceramic || '');
        setFarcaster(did.farcaster || '');
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      setStatus('Profile restored from backup');
    } catch (e: any) {
      setStatus(e?.message || 'Restore failed');    }
  };

    } catch (error) {
      setStatus(e?.message || 'Restore failed');
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },
  return (
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className="rounded-xl border p-5">
          <h2 className="font-semibold mb-2">Decentralized Backup</h2>
          <p className="text-sm text-gray-500 mb-3">Back up talent profiles, resume, and project reviews to IPFS/Arweave (via Web3.Storage). Opt-in only.</p>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={doBackup} className="rounded-md bg-emerald-600 text-white px-4 py-2">Create Backup</button>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {backupCid && <span className="text-xs">CID: <code className="bg-gray-100 dark:bg-neutral-800 px-2 py-1 rounded">{backupCid}</code></span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>
          <div className="mt-4 flex gap-2">
            <input value={restoreCid} onChange={(e) => setRestoreCid(e.target.value)} placeholder="Enter CID to restore" className="flex-1 rounded-md border px-3 py-2" />
            <button onClick={doRestore} className="rounded-md border px-4 py-2">Restore profile</button>
          </div>
        </section>



}

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {status && <div className="text-sm text-gray-600">{status}</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
        {status && <div className="text-sm text-gray-600">{status}</div>}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>
    </>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {status && <div className='text - sm text - gray - 600'>{status}</div>}
      </div>;
    </>);
;

<<<<<<< HEAD
<<<<<<< HEAD

        {status && <div className='text-sm text-gray-600'>{status}</div>}
      </div>
    </>
);

}
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
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
