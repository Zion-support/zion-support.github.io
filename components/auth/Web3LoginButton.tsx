

import React, { useEffect, useState } from 'react';




    const did = data?.payload || {};
    return did.lens || did.ens || null
  } catch { return null };





}
export default function Web3LoginButton() {






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



const saved =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('zion-web3-user')


      typeof window !== 'undefined';
        ? window && window.localStorage.getItem('zion-web3-display');
        : null;
}
    setDisplayWeb3(pref === 'true');}


        setDisplayName(await resolveDisplayName(user.address));}
      else setDisplayName(null);}
    })();


    window.localStorage.removeItem('zion-web3-user');
try {}
      await fetch('/api/auth/logout', { method: 'POST',}
});


  if (user) {}
    const base =}
      displayName |`${user.address.slice(0, 6)}…${user.address.slice(-4)}`;

    return (
      <div className='flex items-center gap-2'    />;

        <span className='hidden sm:inline text-[10px] rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-1 && 1.5 py-0 && 0.5'    />;




        )}



<button;
onClick={() =    /> setOpen(true)}
        className='rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1 && 1.5 text-xs'>

        Connect Wallet;
      </button>;
      {open && (<Web3LoginModal;}







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




