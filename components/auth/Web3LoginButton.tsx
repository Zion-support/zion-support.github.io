
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
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


=======


export default function Web3LoginButton() {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{;
    address: string;
    chain: 'evm' | 'sol';
  } | null>(null);  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
export default function Web3LoginButton() {
=======
  useEffect(() => {    return did.lens |did.ens |null
  } catch { return null }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

=======

    </>
  );      <button onClick={() => setOpen(true)} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-xs">Connect Wallet</button>
      {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} onLoggedIn={onLoggedIn} />}
    </>
);
}

}
}
}
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
    </>;
  );      <button onClick={() => setOpen(true)} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1 && 1.5 text-xs">Connect Wallet</button>;

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
      <button onClick={() => setOpen(true)} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-xs">Connect Wallet</button>

      {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} onLoggedIn={onLoggedIn} />}

    </>;
  );
}

=======
import dynamic from 'next / dynamic';
;
const Web3LoginModal = dynamic (() => import ('./Web3LoginModal'), {
  ssr: false,
});const Web3LoginModal = dynamic (() => import ('./Web3LoginModal'), { ssr: false }),
async function resolveDisplayName (addr: string): Promise < string | null> {
  try {
    const r = await fetch (`/api / did / get?address=${encodeURIComponent (addr)}`);
    const { data } = await r.json ();
    const did = data?.payload || {}
    return did.lens || did.ens || null;
  } catch {
    return null;
  }
export default /**
 * Web3LoginButton - Function description
 */
function Web3LoginButton() {
  const [open, set_open] = useState (false);
  const [user, set_user] = useState<{
    address: string;
    chain: 'evm' | 'sol';
  } | null>(null);  const [display_name, setDisplayName] = useState < string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState < boolean>(false);
;
  useEffect (() => {    return did.lens || did.ens || null;
  } catch { return null }
}
export default /**
 * Web3LoginButton - Function description
 */
function Web3LoginButton() {
  const [open, set_open] = useState (false);
  const [user, set_user] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),
  const [display_name, setDisplayName] = useState < string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState < boolean>(false);
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
  useEffect (() => {
    (async () => {    const saved = typeof window !== 'undefined' ? window.local_storage.get_item ('zion - web3 - user') : null;
    if (set_user (JSON.parse (saved))) {
  $2
}
    const pref = typeof window !== 'undefined' ? window.local_storage.get_item ('zion - web3 - display') : null;
    setDisplayWeb3 (pref === 'true');
  useEffect (() => {
    (async () => {
      if (
        setDisplayName (await resolveDisplayName (user.address))) {
  $2
}
      else setDisplayName (null);
    })();
;
  const onLoggedIn = (u: { address: string; chain: 'evm' | 'sol' }) =>: any {
    window.local_storage.set_item ('zion - web3 - user', JSON.stringify (u));
    set_user (u);  }
;
  const disconnect = async () => {
    window.local_storage.remove_item ('zion - web3 - user');    set_user (u);
  }
;
  const disconnect = async () => {
    window.local_storage.remove_item ('zion - web3 - user');
    try {
      await fetch ('/api / auth / logout', { method: 'POST' });
    } catch {}
    set_user (null);
;
  // Check condition
if ( {) {
  $2
}
    const base =;
      display_name || `${user.address.slice (0, 6)}…${user.address.slice (-4)}`;
    return (
      <div className='flex items - center gap - 2'>;
        <span className='hidden sm:inline text-[10px] rounded bg - emerald - 100 text - emerald - 700 dark:bg - emerald - 900 / 30 dark:text - emerald - 300 px - 1.5 py - 0.5'>;
          Web3 Verified;
        </span>;
        <button;
          className='rounded - md border px - 2 py - 1 text - xs';
          on_click={() => set_open (true)}
        >;
          {base}
        </button>;
        <button className='text - xs text - red - 600' on_click={disconnect}>;
          Logout;
        </button>;
        {open && (
          <Web3LoginModal;
            is_open={open}
            on_close={() => set_open (false)}
            onLoggedIn={onLoggedIn}
          />)}
      </div>);  }
  return (
    <>    );
  }
  return (
    <>;
      <button;
        on_click={() => set_open (true)}
        className='rounded - md bg - black text - white dark:bg - white dark:text - black px - 3 py - 1.5 text - xs';
      >;
        Connect Wallet;
      </button>;
      {open && (
        <Web3LoginModal;
          is_open={open}
          on_close={() => set_open (false)}
          onLoggedIn={onLoggedIn}
        />)}
    </>);      <button on_click={() => set_open (true)} className="rounded - md bg - black text - white dark:bg - white dark:text - black px - 3 py - 1.5 text - xs">Connect Wallet</button>;
      {open && <Web3LoginModal is_open={open} on_close={() => set_open (false)} onLoggedIn={onLoggedIn} />}
    </>);
      </div>
    )
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className=&quot;rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-xs&quot;>Connect Wallet</button>
      {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} onLoggedIn={onLoggedIn} />}
    </>
  )

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
