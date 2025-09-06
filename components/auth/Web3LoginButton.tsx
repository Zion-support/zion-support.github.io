import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Web3LoginModal = dynamic(() => import('./Web3LoginModal'), {
  ssr: false,
});const Web3LoginModal = dynamic(() => import('./Web3LoginModal'), { ssr: false }),
async function resolveDisplayName(addr: string): Promise<string | null> {
  try {

    const r = null;

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
    );  }

  return (
    <>    )
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
  );      <button onClick={() => setOpen(true)} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-xs">Connect Wallet</button>
      {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} onLoggedIn={onLoggedIn} />}
    </>
);
}
