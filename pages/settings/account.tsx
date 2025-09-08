import React from 'react';
import Head from 'next/head';
  return (
    <>
      <Head>
        <title>Account Settings — Zion</title>
      </Head>
      <div className='max-w-3xl mx-auto space-y-8'>
        <section className='rounded-xl border p-5'>
          <h1 className='text-xl font-semibold mb-2'>Account</h1>
          <p className='text-sm text-gray-500'>
            Manage your Web3 identity and backups. Email is optional when using
            wallets.
          </p>
          <div className='mt-4 flex items-center justify-between'>
            <div>
              <div className='text-sm font-medium'>Display Web3 identity</div>
              <div className='text-xs text-gray-500'>
                Show ENS/Lens name instead of email
              </div>
            </div>
            <label className='inline-flex items-center cursor-pointer'>
              <input
                type='checkbox'
                checked={displayWeb3}
                onChange={e => saveDisplayPref(e.target.checked)}
                className='sr-only'
              />
              <span className='relative inline-block w-10 h-6 bg-gray-300 rounded-full shadow-inner'>
                <span
                  className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full transition-transform ${displayWeb3 ? 'translate-x-4' : ''}`}
                ></span>              </span>
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
              className='rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2'>{linking ? 'Linking…' : 'Link & Verify'}
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
          </div>
          <div className='mt-4 flex gap-2'>
            <input
              value={restoreCid}
              onChange={e => setRestoreCid(e.target.value)}
              placeholder='Enter CID to restore'
              className='flex-1 rounded-md border px-3 py-2'
            />
            <button onClick={doRestore} className='rounded-md border px-4 py-2'>
              Restore profile
            </button>
          </div>
        </section>
        {status && <div className='text-sm text-gray-600'>{status}</div>}
      </div>
    </>
);