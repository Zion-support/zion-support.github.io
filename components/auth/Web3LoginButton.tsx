import React, {_useEffect, _useState} from 'react';
import dynamic from 'next/dynamic';

const _Web3LoginModal = dynamic__(() => import('./Web3LoginModal'), {_ssr: false});

async function resolveDisplayName(_addr: string): Promise<string | null> {_try {
    const _r = await fetch(`/api/did/get?address=${encodeURIComponent(addr)}`);
    const {_data} = await r.json();
    const _did = data?.payload || {};
    return did.lens || did.ens || null;
  } catch {_return null;}
}

export default function Web3LoginButton() {_const [open, _setOpen] = useState(false);
  const [user, _setUser] = useState<{ address: string; chain: 'evm' | 'sol'} | null>(null);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);

  useEffect__(() => {_const _saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-user') : null;
    if (saved) setUser(JSON.parse(saved));
    const _pref = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-display') : null;
    setDisplayWeb3(pref === 'true');}, []);

  useEffect__(() => {_(_async () => {
      if (user && displayWeb3) setDisplayName(await resolveDisplayName(user.address));
      else setDisplayName(null);})();
  }, [user, displayWeb3]);

  const _onLoggedIn = (_u: {_address: string; chain: 'evm' | 'sol'}) => {_window.localStorage.setItem('zion-web3-user', _JSON.stringify(u));
    setUser(u);};

  const _disconnect = async () => {_window.localStorage.removeItem('zion-web3-user');
    try { await fetch('/api/auth/logout', _{ method: 'POST'}); } catch {}
    setUser(null);
  };

  if (user) {_const _base = displayName || `${user.address.slice(0, _6)}…${_user.address.slice(-4)}`;
    return (_<div className="flex items-center gap-2">
        <span className="hidden sm:inline text-[10px] rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-1.5 py-0.5">Web3 Verified</span>
        <button className="rounded-md border px-2 py-1 text-xs" onClick={_() => setOpen(true)}>{_base}</button>
        <button className="text-xs text-red-600" onClick={_disconnect}>Logout</button>
        {_open && <Web3LoginModal isOpen={open} onClose={_() => setOpen(false)} onLoggedIn={_onLoggedIn} />}
      </div>
    );
  }

  return (_<>
      <button onClick={_() => setOpen(true)} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-xs">Connect Wallet</button>
      {_open && <Web3LoginModal isOpen={open} onClose={_() => setOpen(false)} onLoggedIn={_onLoggedIn} />}
    </>
  );
}