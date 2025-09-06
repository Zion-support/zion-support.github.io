import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
<<<<<<< HEAD
const Web3LoginModal = dynamic(() => import('./Web3LoginModal'), {
  ssr: false
});const Web3LoginModal = dynamic(() => import('./Web3LoginModal'), { ssr: false })
=======

const Web3LoginModal = dynamic(() => import('./Web3LoginModal'), {
  ssr: false,
});

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
async function resolveDisplayName(addr: string): Promise<string | null> {
  try {

    const r = await fetch(`/api/did/get?address=${encodeURIComponent(addr)}`);
    const { data } = await r.json();
<<<<<<< HEAD
    const did = data?.payload |{}
    return did.lens |did.ens |null;
  } catch {
    return null;
  }
<<<<<<< HEAD
=======
    const did = data?.payload || {};
    return did.lens || did.ens || null;
  } catch {
    return null;
  }
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default function Web3LoginButton() {
=======

export default function Web3LoginButton() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{
    address: string;
    chain: 'evm' | 'sol';
<<<<<<< HEAD
  } | null>(null);  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
  useEffect(() => {    return did.lens |did.ens |null
  } catch { return null }
}
<<<<<<< HEAD
export default function Web3LoginButton() {
=======

export default function Web3LoginButton() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null)
=======
  } | null>(null);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
    setDisplayWeb3(pref === 'true');  }, []);
  useEffect(() => {
    (async () => {    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-user') : null;
    if (saved) setUser(JSON.parse(saved));
    const pref = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-display') : null;
    setDisplayWeb3(pref === 'true')
=======
    setDisplayWeb3(pref === 'true');
  }, []);

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  useEffect(() => {
    (async () => {
      if (user && displayWeb3)
        setDisplayName(await resolveDisplayName(user.address));
      else setDisplayName(null);
    })();
  const onLoggedIn = (u: { address: string; chain: 'evm' | 'sol' }) => {
    window.localStorage.setItem('zion-web3-user', JSON.stringify(u));
<<<<<<< HEAD
    setUser(u);  }
  const disconnect = async () => {
    window.localStorage.removeItem('zion-web3-user');    setUser(u)
  }
=======
    setUser(u);
  };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const disconnect = async () => {
    window.localStorage.removeItem('zion-web3-user');
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {}
    setUser(null);
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (user) {
    const base =
      displayName |`${user.address.slice(0, 6)}…${user.address.slice(-4)}`;

<<<<<<< HEAD
    return (
      <div className='flex items-center gap-2'>
        <span className='hidden sm:inline text-[10px] rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-1.5 py-0.5'>
          Web3 Verified
        </span>
        <button
          className='rounded-md border px-2 py-1 text-xs'
          onClick={() => setOpen(true)}
        >
          {base}
        </button>
        <button className='text-xs text-red-600' onClick={disconnect}>
          Logout
        </button>
        {open && (
          <Web3LoginModal
            isOpen={open}
            onClose={() => setOpen(false)}
            onLoggedIn={onLoggedIn}
          />
        )}
      </div>
<<<<<<< HEAD
    );  }
  return (
    <>    )
=======
    );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  }
  return (
    <>
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
<<<<<<< HEAD
  );      <button onClick={() => setOpen(true)} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-xs">Connect Wallet</button>
      {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} onLoggedIn={onLoggedIn} />}
    </>
);
}
<<<<<<< HEAD
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
=======

}
}
}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  }

  return (
    <>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
