import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
<<<<<<< HEAD
<<<<<<< HEAD

const Web3LoginModal = dynamic(() => import('./Web3LoginModal'), {
  ssr: false,
});

=======
const Web3LoginModal = dynamic(() => import('./Web3LoginModal'), { ssr: false }),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const Web3LoginModal = dynamic(() => import('./Web3LoginModal'), { ssr: false }),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
async function resolveDisplayName(addr: string): Promise<string | null> {
  try {
    const r = await fetch(`/api/did/get?address=${encodeURIComponent(addr)}`);
    const { data } = await r.json();
    const did = data?.payload || {};
<<<<<<< HEAD
<<<<<<< HEAD
    return did.lens || did.ens || null;
  } catch {
    return null;
  }

export default function Web3LoginButton() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{
    address: string;
    chain: 'evm' | 'sol';
  } | null>(null);
=======
    return did.lens || did.ens || null
  } catch { return null };
}

export default function Web3LoginButton() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return did.lens || did.ens || null
  } catch { return null };
}

export default function Web3LoginButton() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);

  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
    const saved =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('zion-web3-user')
        : null;
    if (saved) setUser(JSON.parse(saved));
    const pref =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('zion-web3-display')
        : null;
    setDisplayWeb3(pref === 'true');
=======
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-user') : null;
    if (saved) setUser(JSON.parse(saved));
    const pref = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-display') : null;
    setDisplayWeb3(pref === 'true')
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-user') : null;
    if (saved) setUser(JSON.parse(saved));
    const pref = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-display') : null;
    setDisplayWeb3(pref === 'true')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []);

  useEffect(() => {
    (async () => {
<<<<<<< HEAD
<<<<<<< HEAD
      if (user && displayWeb3)
        setDisplayName(await resolveDisplayName(user.address));
      else setDisplayName(null);
    })();
=======
      if (user && displayWeb3) setDisplayName(await resolveDisplayName(user.address));
      else setDisplayName(null)
    })()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [user, displayWeb3]);

  const onLoggedIn = (u: { address: string, chain: 'evm' | 'sol' }) => {
    window.localStorage.setItem('zion-web3-user', JSON.stringify(u));
<<<<<<< HEAD
    setUser(u);
=======
      if (user && displayWeb3) setDisplayName(await resolveDisplayName(user.address));
      else setDisplayName(null)
    })()
  }, [user, displayWeb3]);

  const onLoggedIn = (u: { address: string, chain: 'evm' | 'sol' }) => {
    window.localStorage.setItem('zion-web3-user', JSON.stringify(u));
    setUser(u)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    setUser(u)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const disconnect = async () => {
    window.localStorage.removeItem('zion-web3-user');
<<<<<<< HEAD
<<<<<<< HEAD
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {}
    setUser(null);
=======
    try { await fetch('/api/auth/logout', { method: 'POST' }) } catch {}
    setUser(null)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  if (user) {
    const base = displayName || `${user.address.slice(0, 6)}…${user.address.slice(-4)}`;
    return (
      <div className="flex items-center gap-2">
        <span className="hidden sm:inline text-[10px] rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-1.5 py-0.5">Web3 Verified</span>
        <button className="rounded-md border px-2 py-1 text-xs" onClick={() => setOpen(true)}>{base}</button>
        <button className="text-xs text-red-600" onClick={disconnect}>Logout</button>
        {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} onLoggedIn={onLoggedIn} />}
      </div>
<<<<<<< HEAD
    );
=======
    try { await fetch('/api/auth/logout', { method: 'POST' }) } catch {}
    setUser(null)
  };

  if (user) {
    const base = displayName || `${user.address.slice(0, 6)}…${user.address.slice(-4)}`;
    return (
      <div className="flex items-center gap-2">
        <span className="hidden sm:inline text-[10px] rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-1.5 py-0.5">Web3 Verified</span>
        <button className="rounded-md border px-2 py-1 text-xs" onClick={() => setOpen(true)}>{base}</button>
        <button className="text-xs text-red-600" onClick={disconnect}>Logout</button>
        {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} onLoggedIn={onLoggedIn} />}
      </div>
    )
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    )
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
      <button
        onClick={() => setOpen(true)}
        className='rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-xs'
      >
        Connect Wallet
      </button>
      {open && (
        <Web3LoginModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onLoggedIn={onLoggedIn}
        />
      )}
    </>
  );
=======
      <button onClick={() => setOpen(true)} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-xs">Connect Wallet</button>
      {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} onLoggedIn={onLoggedIn} />}
    </>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <button onClick={() => setOpen(true)} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-xs">Connect Wallet</button>
      {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} onLoggedIn={onLoggedIn} />}
    </>
  );
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
