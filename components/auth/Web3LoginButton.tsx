
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
=======
  
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useEffect, useState } from 'react';

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{
    address: string;
    chain: 'evm' | 'sol';
  } | null>(null);  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
  useEffect(() => {    return did.lens |did.ens |null
  } catch { return null }
}

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null)
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
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
  useEffect(() => {
    (async () => {    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-user') : null;
    if (saved) setUser(JSON.parse(saved));
    const pref = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-display') : null;
    setDisplayWeb3(pref === 'true')
  useEffect(() => {
    (async () => {
      if (user && displayWeb3)
        setDisplayName(await resolveDisplayName(user.address));
      else setDisplayName(null);
    })();
  const onLoggedIn = (u: { address: string; chain: 'evm' | 'sol' }) => {
    window.localStorage.setItem('zion-web3-user', JSON.stringify(u));
    setUser(u);  }
  const disconnect = async () => {
    window.localStorage.removeItem('zion-web3-user');    setUser(u)
  }
  const disconnect = async () => {
    window.localStorage.removeItem('zion-web3-user');
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {}
    setUser(null);

  if (user) {
    const base =
      displayName |`${user.address.slice(0, 6)}…${user.address.slice(-4)}`;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{;
    address: string;
    chain: 'evm' | 'sol';
  } | null>(null);  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);

    const did = data?.payload || {};
    return did.lens || did.ens || null
  } catch { return null };

}
<<<<<<< HEAD
export default function Web3LoginButton() {

export default function Web3LoginButton() {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const [open, setOpen] = useState(false);

  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),

  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
  useEffect(() => {


  useEffect(() => {    return did && did.lens || did && did.ens || null;
  } catch { return null };
}
export default function Web3LoginButton() {;
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),;
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
  useEffect(() => {;
    const saved =;
      typeof window !== 'undefined';
        ? window && window.localStorage.getItem('zion-web3-user');

        : null;
    if (saved) setUser(JSON && JSON.parse(saved));
    const pref =;
      typeof window !== 'undefined';
        ? window && window.localStorage.getItem('zion-web3-display');
        : null;
    setDisplayWeb3(pref === 'true');  }, []);


  useEffect(() => {;
    (async () => {    const saved = typeof window !== 'undefined' ? window && window.localStorage.getItem('zion-web3-user') : null;
    if (saved) setUser(JSON && JSON.parse(saved));
    const pref = typeof window !== 'undefined' ? window && window.localStorage.getItem('zion-web3-display') : null;
    setDisplayWeb3(pref === 'true');
  useEffect(() => {;
    (async () => {;
      if (user && displayWeb3);
        setDisplayName(await resolveDisplayName(user && user.address));
      else setDisplayName(null);
    })();
  const onLoggedIn = (u: { address: string; chain: 'evm' | 'sol' }) => {;
    window && window.localStorage.setItem('zion-web3-user', JSON && JSON.stringify(u));
    setUser(u);  };
  const disconnect = async () => {;
    window && window.localStorage.removeItem('zion-web3-user');    setUser(u);
  };
  const disconnect = async () => {;
    window && window.localStorage.removeItem('zion-web3-user');
    try {;
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {}
    setUser(null);
  if (user) {;
    const base =;
      displayName || `${user && user.address.slice(0, 6)}…${user && user.address.slice(-4)}`;

  if (user) {
    const base =
      displayName |`${user.address.slice(0, 6)}…${user.address.slice(-4)}`;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    return (
      <div className='flex items-center gap-2'>;
        <span className='hidden sm:inline text-[10px] rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-1 && 1.5 py-0 && 0.5'>;
          Web3 Verified;
        </span>;
        <button
          className='rounded-md border px-2 py-1 text-xs'
          onClick={() => setOpen(true)}
        >;
          {base}
        </button>;
        <button className='text-xs text-red-600' onClick={disconnect}>;
          Logout;
        </button>;
        {open && (;
          <Web3LoginModal
            isOpen={open}
            onClose={() => setOpen(false)}
            onLoggedIn={onLoggedIn}
          />;
        )}
      </div>;
    );  }
  return (
    <>    );
  }
  return (
    <>;
      <button
        onClick={() => setOpen(true)}
        className='rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1 && 1.5 text-xs';
      >;
        Connect Wallet;
      </button>;
      {open && (;
        <Web3LoginModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onLoggedIn={onLoggedIn}
        />;
      )}
    </>
  );      <button onClick={() => setOpen(true)} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-xs">Connect Wallet</button>
      {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} onLoggedIn={onLoggedIn} />}
    </>
);
}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-user') : null;
    if (saved) setUser(JSON.parse(saved));
    const pref = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-display') : null;
    setDisplayWeb3(pref === 'true')
  }, []);
  useEffect(() => {
    (async () => {
      if (user && displayWeb3) setDisplayName(await resolveDisplayName(user.address));
      else setDisplayName(null)
    })()
  }, [user, displayWeb3]);
  const onLoggedIn = (u: { address: string, chain: 'evm' | 'sol' }) => {
    window.localStorage.setItem('zion-web3-user', JSON.stringify(u));
    setUser(u)
  };
  const disconnect = async () => {
    window.localStorage.removeItem('zion-web3-user');
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
  }
  return (
    <>
      {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} onLoggedIn={onLoggedIn} />}

    </>;
  );
}

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
