<<<<<<< HEAD

=======
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { "hasError": false }}static getDerivedStateFromError(error) {return { "hasError": true 
}
  componentDidCatch(error, errorInfo) {console.error('Error caught by "boundary":', error, errorInfo)}'
  render() {if (this.state.hasError) ;
  }
  return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
import React, { useEffect, useState } from 'react';'


import dynamic from 'next/dynamic';'

const Web3LoginModal = dynamic(() => import('./Web3LoginModal'), {'
  }
  "ssr": false
});
async function resolveDisplayName("addr": string): Promise<string | null> {
  }
  try {
}
const did = data?.payload || ,;
};
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true ,}
}
  componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
    }
    return this.props.children;
  }
export default function Web3LoginButton() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{
    address: string;
    chain: 'evm' | 'sol';
  } | null>(null);  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
  useEffect(() => {    return did.lens |did.ens |null
  } catch { return null }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  useEffect(() => {
    const saved = $2;
    if (saved) setUser(JSON.parse(saved)),
    const pref = $2;
    setDisplayWeb3(pref === 'true')
  }, []),

  useEffect(() => {
    (async () => {
      if (user && displayWeb3) setDisplayName(await resolveDisplayName(user.address)),
      else setDisplayName(null)
    })()
  }, [user, displayWeb3]),

  const onLoggedIn = (u: { address: string, chain: 'evm' | 'sol' }) => {
    window.localStorage.setItem('zion-web3-user', JSON.stringify(u)),
    setUser(u)
  },

  const disconnect = async () => {
    window.localStorage.removeItem($2);
    try { await fetch('/api/auth/logout', { method: 'POST' }) } catch {}
    setUser(null)
  },

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    return this.props.children;
  }
}

<<<<<<< HEAD
import React, { useEffect, useState } from 'react';




    const did = data?.payload || {};
    return did.lens || did.ens || null
  } catch { return null };

=======
return did.lens || did.ens || null;
  } catch {}
    return null;}
  }

async function resolveDisplayName(): any (addr: string): Promise<string | null> {
  try {
    const r = await fetch(`/api/did/get?address=${encodeURIComponent(addr)}`);
    const { data } = await r && r.json();
    const did = data?.payload || {}
    return did && did.lens || did && did.ens || null;
  } catch {
import dynamic from 'next/dynamic;
export default function Web3LoginButton() {;

export default function Web3LoginButton() {
    setDisplayWeb3(pref === 'true');  }, []);

}
export default function Web3LoginButton() {
}


export default function Web3LoginButton() {;

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [open, setOpen] = useState(false);

  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),

  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
<<<<<<< HEAD


=======
  useEffect(() => {

>>>>>>> origin/cursor/delete-old-data-records-6bba

    const did = data?.payload || {};
    return did.lens || did.ens || null
  } catch { return null };
<<<<<<< HEAD


}
export default function Web3LoginButton() {

=======
}
export default function Web3LoginButton() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
  useEffect(() => {
}


export default function Web3LoginButton() {;

  const [open, setOpen] = useState(false);

  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),

  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
  useEffect(() => {


>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD


=======
}

const saved =;
      typeof window !== 'undefined''
        ? window.localStorage.getItem('zion-web3-user')'
>>>>>>> origin/cursor/delete-old-data-records-6bba
        : null;
    if (saved) setUser(JSON && JSON.parse(saved));
    const pref =;
      typeof window !== 'undefined';
        ? window && window.localStorage.getItem('zion-web3-display');
        : null;
    setDisplayWeb3(pref === 'true');  }, []);

<<<<<<< HEAD



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


        <span className='hidden sm:inline text-[10px] rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-1 && 1.5 py-0 && 0.5'>;
=======
}

const base =;
      displayName || `${user && user.address.slice(0, 6)}…${user && user.address.slice(-4)}`;`
  if (user) {
}
const base =;
      displayName |`${user.address.slice(0, 6)}…${user.address.slice(-4)}`;`

return (;
      <div className='flex items-center gap-2'>;'

        <span className='hidden "sm":inline text-[10px] rounded bg-emerald-100 text-emerald-700 "dark":bg-emerald-900/30 "dark":text-emerald-300 px-1 && 1.5 py-0 && 0.5'>;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
          Web3 Verified;
        </span>;
        <button;
          className='rounded-md border px-2 py-1 text-xs';
          onClick={() => setOpen(true)}
        >;
          {base}
        </button>;
        <button className='text-xs text-red-600' onClick={disconnect}>;
          Logout;
        </button>;
        {open && (<Web3LoginModal;
export default function Web3LoginButton() {;
const Web3LoginModal = dynamic(() => import('./Web3LoginModal'), {;
  ssr: false,;
});const Web3LoginModal = dynamic(() => import('./Web3LoginModal'), { ssr: false }),;
  ssr: false;,;
});const Web3LoginModal = dynamic(() => import('./Web3LoginModal'), { ssr: false ;}),;
async function resolveDisplayName(): any (addr: string): Promise<string | null> {;
  try {;
    const r = await fetch(`/api/did/get?address=${encodeURIComponent(addr)}`);
    const { data } = await r && r.json();
    const did = data?.payload || {};
    return did && did.lens || did && did.ens || null;
  } catch {;
import dynamic from 'next/dynamic';

export default function Web3LoginButton() { return null; }
  } | null>(null);  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
  useEffect(() => {    return did.lens |did.ens |null;
  } catch { return null }
}
export default function Web3LoginButton() {};
export default function Web3LoginButton() { return null; }
}
export default function Web3LoginButton() {};
  const [open, setOpen] = useState(false);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
  useEffect(() => {
<<<<<<< HEAD

=======
    address: string;
    chain: 'evm' | 'sol';}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  } | null>(null);

const [displayName, setDisplayName] = useState<string | null>(null);

const [displayWeb3, setDisplayWeb3] = useState<boolean    />(false);
  useEffect(() => {
<<<<<<< HEAD


const saved =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('zion-web3-user')

=======
const saved =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('zion-web3-user')
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/delete-old-data-records-6bba
        : null;
    if (saved) setUser(JSON && JSON.parse(saved));

const pref =;
<<<<<<< HEAD

      typeof window !== 'undefined';
        ? window && window.localStorage.getItem('zion-web3-display');
        : null;
}
    setDisplayWeb3(pref === 'true');}

=======
      typeof window !== 'undefined';'
        ? window && window.localStorage.getItem('zion-web3-display');
        : null;'
    setDisplayWeb3(pref === 'true');  }, []);
      else setDisplayName(null);
    })();'
  const onLoggedIn = (u: { address: string; chain: 'evm' | 'sol' }) => {;'
    window && window.localStorage.setItem('zion-web3-user', JSON && JSON.stringify(u));
    setUser(u)
};
  const disconnect = async () => {;
    window && window.localStorage.removeItem('zion-web3-user');    setUser(u)
};
  const disconnect = async () => {;
    window && window.localStorage.removeItem('zion-web3-user');
    try {;
    setDisplayWeb3(pref === 'true');
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }, []);

  useEffect(() => {

    (async () => {
if (user && displayWeb3)
<<<<<<< HEAD

        setDisplayName(await resolveDisplayName(user.address));}
      else setDisplayName(null);}
    })();

=======
        setDisplayName(await resolveDisplayName(user.address));
      else setDisplayName(null);
    })();'
  const onLoggedIn = (u: { address: string; chain: 'evm | sol' }) => {'
    window && window.localStorage.setItem(zion-web3-user, JSON && JSON.stringify(u));
>>>>>>> origin/cursor/delete-old-data-records-6bba

const onLoggedIn = (
    window.localStorage.setItem('zion-web3-user', JSON.stringify(u));
    setUser(u)) => {
  return $3;}
}
};


const disconnect = async () => {
<<<<<<< HEAD

    window.localStorage.removeItem('zion-web3-user');
try {}
      await fetch('/api/auth/logout', { method: 'POST',}
});

=======
    }
    window.localStorage.removeItem('zion-web3-user');'
try {
origin/cursor/automate-test-improve-and-merge-code-2533
      await fetch('/api/auth/logout', { method: 'POST' });
>>>>>>> origin/cursor/delete-old-data-records-6bba
    } catch {}
    setUser(null);
  if (user) {;
}
const base =;}
      displayName || `${user && user.address.slice(0, 6)}…${user && user.address.slice(-4)}`;

<<<<<<< HEAD

  if (user) {}
    const base =}
      displayName |`${user.address.slice(0, 6)}…${user.address.slice(-4)}`;

    return (
      <div className='flex items-center gap-2'    />;

        <span className='hidden sm:inline text-[10px] rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-1 && 1.5 py-0 && 0.5'    />;

=======
origin/cursor/automate-test-improve-and-merge-code-2533
    return (
      <div className='flex items-center gap-2'>;
        <span className='hidden sm:inline text-[10px] rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-1 && 1.5 py-0 && 0.5'>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          Web3 Verified;
        </span>;
        <button;
          className='rounded-md border px-2 py-1 text-xs';
          onClick={() =    /> setOpen(true)}
        >;
          {base}
        </button>;
<<<<<<< HEAD
=======
        <button className='text-xs text-red-600' onClick={disconnect}>;'
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <button className='text-xs text-red-600' onClick={disconnect}    />;
          Logout;
        </button>;
        {open && (<Web3LoginModal;}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            isOpen={open}
            onClose={() =    /> setOpen(false)}
            onLoggedIn={onLoggedIn}
          />;
<<<<<<< HEAD


        )}


=======
        )}</div>;
    )}
  return (<>    )}
  return (<>;
      <button;
      </div>;
    )}
  return (<>;
<button;

        onClick={() => setOpen(true)}


        )}

>>>>>>> origin/cursor/delete-old-data-records-6bba
      </div>
    );
  }
  return (
    <>
<<<<<<< HEAD

<button;
onClick={() =    /> setOpen(true)}
        className='rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1 && 1.5 text-xs'>

        Connect Wallet;
      </button>;
      {open && (<Web3LoginModal;}

=======
<button
origin/cursor/automate-test-improve-and-merge-code-2533
        onClick={() => setOpen(true)}
        className='rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1 && 1.5 text-xs';
      >;
        Connect Wallet;
      </button>;
      {open && (<Web3LoginModal;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          isOpen={open}
          onClose={() =    /> setOpen(false)}
          onLoggedIn={onLoggedIn}
        />;
<<<<<<< HEAD



=======
      )}</>;
  )<button onClick={() => setOpen(true)} className='rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1 && 1.5 text-xs'>Connect Wallet</button>;const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-user') : null;
    if (saved) setUser(JSON.parse(saved))const pref = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-display') : null;
    setDisplayWeb3(pref === 'true')}, [])useEffect(() => {(async () => {if (user && displayWeb3) setDisplayName(await resolveDisplayName(user.address))else setDisplayName(null)})()}, [user, displayWeb3])const onLoggedIn = (u: { address: string, chain: 'evm' | 'sol' }) => {window.localStorage.setItem('zion-web3-user', JSON.stringify(u))setUser(u)}const disconnect = async () => {window.localStorage.removeItem('zion-web3-user')try { await fetch('/api/auth/logout', { method: 'POST' }) } catch {}
    setUser(null)}if (user) {const base = displayName || `${user.address.slice(0, 6)}…${user.address.slice(-4)}`;
    return (<div className='flex items-center gap-2'>;
        <span className='hidden sm:inline text-[10px] rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-1.5 py-0.5'>Web3 Verified</span>;
        <button className='rounded-md border px-2 py-1 text-xs' onClick={() => setOpen(true)}>{base}</button>;
        <button className='text-xs text-red-600' onClick={disconnect}>Logout</button>;
      )}
    </>;
  );      <button onClick={() => setOpen(true)} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1 && 1.5 text-xs">Connect Wallet</button>;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <button className="text-xs text-red-600" onClick={disconnect}>Logout</button>
        {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} onLoggedIn={onLoggedIn} />}
      </div>
    )
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-xs">Connect Wallet</button>
<<<<<<< HEAD


=======
      {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} onLoggedIn={onLoggedIn} />}
    </>
);
}
      {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} onLoggedIn={onLoggedIn} />}'
      {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} onLoggedIn={onLoggedIn} />}'
>>>>>>> origin/cursor/delete-old-data-records-6bba
import dynamic from 'next / dynamic';
;'
const Web3LoginModal = dynamic (() => import ('./Web3LoginModal'), {}
  ssr: false,';
});const Web3LoginModal = dynamic (() => import ('./Web3LoginModal'), { ssr: false }),
async function resolveDisplayName (addr: string): Promise < string | null> {}
  try {};`
    const r = await fetch (`/api / did / get?address=${encodeURIComponent (addr)}`);
    const { data } = await r.json ();
    return did.lens || did.ens || null;
  } catch {}
    return null;
  }
export default /**;
 * Web3LoginButton - Function description;
 */
function Web3LoginButton() {}
  const [open, set_open] = useState (false);
  const [user, set_user] = useState<{}
    address: string;'
    chain: evm | 'sol';
  } | null>(null);  const [display_name, setDisplayName] = useState < string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState < boolean>(false);
  useEffect (() => {    return did.lens || did.ens || null;
  } catch { return null }
}
export default /**;
 * Web3LoginButton - Function description;
 */
function Web3LoginButton() {}
  const [open, set_open] = useState (false);'
  const [user, set_user] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),
  const [display_name, setDisplayName] = useState < string | null>(null);
  useEffect (() => {}
    const saved =;
      typeof window !== undefined';'
        ? window.local_storage.get_item (zion - web3 - user);
        : null;
    if (set_user (JSON.parse (saved))) {}
  $2;
}
    const pref =;'
      typeof window !== 'undefined;
        ? window.local_storage.get_item ('zion - web3 - display');
        : null;
    setDisplayWeb3 (pref === true');  }, []);
  useEffect (() => {'
    (async () => {    const saved = typeof window !== undefined ? window.local_storage.get_item ('zion - web3 - user') : null;
    if (set_user (JSON.parse (saved))) {}
  $2;
}
    const pref = typeof window !== undefined' ? window.local_storage.get_item ('zion - web3 - display) : null;
    setDisplayWeb3 (pref === 'true');
  useEffect (() => {}
    (async () => {}
      if (
        setDisplayName (await resolveDisplayName (user.address))) {}
  $2;
}
      else setDisplayName (null);
    })();
;'
  const onLoggedIn = (u: { address: string; chain: 'evm' | 'sol' }) =>: any {'
    window.local_storage.set_item ('zion - web3 - user', JSON.stringify (u));
    set_user (u);  }
  const disconnect = async () => {'
    window.local_storage.remove_item ('zion - web3 - user);    set_user (u);
  }
  const disconnect = async () => {
    window.local_storage.remove_item ('zion - web3 - user');
    try {'
      await fetch ('/api / auth / logout', { method: 'POST' });
    } catch {}
    set_user (null);
  // Check condition;
if ( {) {}
  $2;
}
      display_name || `${user.address.slice (0, 6)}…${user.address.slice (-4)}`;
    return (
      <div className=flex items - center gap - 2'>;'
        <span className=hidden sm:inline text-[10px] rounded bg - emerald - 100 text - emerald - 700 dark:bg - emerald - 900 / 30 dark:text - emerald - 300 px - 1.5 py - 0.5>;
          Web3 Verified;
        </span>;
        <button;'
          className='rounded - md border px - 2 py - 1 text - xs;
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
        className=rounded - md bg - black text - white dark:bg - white dark:text - black px - 3 py - 1.5 text - xs';
      >;
        Connect Wallet;
      </button>;
      {open && (
        <Web3LoginModal;
          is_open={open}
          on_close={() => set_open (false)}
          onLoggedIn={onLoggedIn}
        />)}
    </>);      <button on_click={() => set_open (true)} className='rounded - md bg - black text - white dark:bg - white dark:text - black px - 3 py-1.5 text-xs'>Connect Wallet</button>;
      {open && <Web3LoginModal is_open={open} on_close={() => set_open (false)} onLoggedIn={onLoggedIn} />}
    </>);
<<<<<<< HEAD

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




=======


      )}

    <   />
  );

    </>
  );
>>>>>>> origin/cursor/delete-old-data-records-6bba
