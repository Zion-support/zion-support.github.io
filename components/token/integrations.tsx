import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { useWallet } from '../../hooks/useWallet';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  fetchDepinActivities,
  calculateRewards,
  DepinReward,;
} from '../../utils/depins';
import { CHAINS } from '../../utils/chains';

const ClientOnlyBridge = dynamic(
  () => import('../../components/ui/BridgeForm'),
  { ssr: false }
);
<<<<<<< HEAD
=======

=======
import { fetchDepinActivities, calculateRewards, DepinReward } from '../../utils/depins';
import { CHAINS } from '../../utils/chains';
const ClientOnlyBridge = dynamic(() => import('../../components/ui/BridgeForm'), { ssr: false }),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { fetchDepinActivities, calculateRewards, DepinReward } from '../../utils/depins';
import { CHAINS } from '../../utils/chains';
const ClientOnlyBridge = dynamic(() => import('../../components/ui/BridgeForm'), { ssr: false }),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function TokenIntegrationsPage() {
  const { account, connect } = useWallet();
  const [region, setRegion] = useState('');
  const [stake, setStake] = useState('');
  const [suggestion, setSuggestion] = useState<any>(null);
  const [rewards, setRewards] = useState<DepinReward[] | null>(null);
  const [depinsSyncing, setDepinsSyncing] = useState(false);

  async function syncDepin() {
    if (!account) {
      await connect();
<<<<<<< HEAD
      return;    }
=======
<<<<<<< HEAD
<<<<<<< HEAD
      return;
=======
      return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    setDepinsSyncing(true);
    const acts = await fetchDepinActivities(account);
    const r = calculateRewards(acts);
    setRewards(r);
<<<<<<< HEAD
    setDepinsSyncing(false);  }
=======
<<<<<<< HEAD
<<<<<<< HEAD
    setDepinsSyncing(false);
=======
    setDepinsSyncing(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    setDepinsSyncing(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  async function runOperator() {
    const res = await fetch('/api/operator/suggest-chain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
      body: JSON.stringify({ region, stakeUsd: stake }),
    });
=======
<<<<<<< HEAD
<<<<<<< HEAD
      body: JSON.stringify({ region, stakeUsd: stake }),
    });
=======
      body: JSON.stringify({ region, stakeUsd: stake })}),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const data = await res.json();
    setSuggestion(data);
  }

  return (
    <div className='space-y-8'>
      <section className='space-y-2'>
        <h1 className='text-2xl font-bold'>ZION$ Integrations</h1>
        <p className='text-gray-600 dark:text-gray-300'>
          Omnichain transfers via LayerZero and DePIN rewards.
        </p>
      </section>

      <section className='space-y-4'>
        <ClientOnlyBridge />
      </section>

      <section className='space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800'>
        <h2 className='text-lg font-semibold'>DePIN Hook</h2>
        <p className='text-sm text-gray-600 dark:text-gray-300'>
          Plug into DIMO, Helium, Hivemapper to reward ZION$ for compute, IoT
          jobs, and data streaming.
        </p>
        <div className='flex gap-2'>
          <button
            onClick={syncDepin}
            className='px-4 py-2 rounded bg-purple-600 text-white'
          >
            {depinsSyncing ? 'Syncing…' : 'Sync DePIN Rewards'}
          </button>
          {!account && (
            <button onClick={connect} className='px-4 py-2 rounded border'>
              Connect Wallet
            </button>
          )}
        </div>
        {rewards && (
          <div className='mt-3 space-y-2 text-sm'>
            {rewards.map((r, i) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <div key={i} className='flex items-center justify-between'>
                <span>
                  {r.network} — {r.reason}
                </span>
<<<<<<< HEAD
                <span className='font-medium'>+{r.points} ZION$</span>              </div>
=======
                <span className='font-medium'>+{r.points} ZION$</span>
=======
      body: JSON.stringify({ region, stakeUsd: stake })}),
    const data = await res.json();
    setSuggestion(data)
  }

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-2xl font-bold">ZION$ Integrations</h1>
        <p className="text-gray-600 dark:text-gray-300">Omnichain transfers via LayerZero and DePIN rewards.</p>
      </section>

      <section className="space-y-4">
        <ClientOnlyBridge />
      </section>

      <section className="space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800">
        <h2 className="text-lg font-semibold">DePIN Hook</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">Plug into DIMO, Helium, Hivemapper to reward ZION$ for compute, IoT jobs, and data streaming.</p>
        <div className="flex gap-2">
          <button onClick={syncDepin} className="px-4 py-2 rounded bg-purple-600 text-white">{depinsSyncing ? 'Syncing…' : 'Sync DePIN Rewards'}</button>
          {!account && <button onClick={connect} className="px-4 py-2 rounded border">Connect Wallet</button>}
        </div>
        {rewards && (
          <div className="mt-3 space-y-2 text-sm">
            {rewards.map((r, i) => (
              <div key={i} className="flex items-center justify-between">
                <span>{r.network} — {r.reason}</span>
                <span className="font-medium">+{r.points} ZION$</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div key={i} className="flex items-center justify-between">
                <span>{r.network} — {r.reason}</span>
                <span className="font-medium">+{r.points} ZION$</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            ))}
          </div>
        )}
      </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <section className='space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800'>
        <h2 className='text-lg font-semibold'>Operator AI Actions</h2>
        <p className='text-sm text-gray-600 dark:text-gray-300'>
          Based on your region and stake, we suggest the best chain for ZION$.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
          <div className='flex flex-col gap-1'>
            <label className='text-xs text-gray-500'>Region</label>
            <input
              value={region}
              onChange={e => setRegion(e.target.value)}
              placeholder='e.g., US, EU, APAC'
              className='border rounded px-3 py-2 bg-white dark:bg-black'
            />
<<<<<<< HEAD
=======
=======
      <section className="space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800">
        <h2 className="text-lg font-semibold">Operator AI Actions</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">Based on your region and stake, we suggest the best chain for ZION$.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500" htmlFor="input-Region">Region</label>
            <input value={region} onChange={(e) => setRegion(e.target.value)} placeholder="e.g., US, EU, APAC" className="border rounded px-3 py-2 bg-white dark:bg-black" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-xs text-gray-500'>Stake (USD)</label>
            <input
              value={stake}
              onChange={e => setStake(e.target.value)}
              placeholder='e.g., 1000'
              className='border rounded px-3 py-2 bg-white dark:bg-black'
            />
          </div>
          <div className='flex items-end'>
            <button
              onClick={runOperator}
              className='w-full px-4 py-2 rounded bg-indigo-600 text-white'
            >
              Suggest Chain
            </button>
          </div>
        </div>
        {suggestion && (
          <div className='text-sm mt-2'>
            <div>
              <span className='text-gray-500'>Recommendation:</span>{' '}
              <b>{suggestion.recommendation?.chain?.name}</b>
            </div>
            {suggestion.alternatives && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <div className='text-gray-500'>
                Alternatives:{' '}
                {suggestion.alternatives
                  .map((a: any) => a.chain.name)
                  .join(', ')}
<<<<<<< HEAD
              </div>            )}
=======
              </div>
=======
      <section className="space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800">
        <h2 className="text-lg font-semibold">Operator AI Actions</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">Based on your region and stake, we suggest the best chain for ZION$.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500" htmlFor="input-Region">Region</label>
            <input value={region} onChange={(e) => setRegion(e.target.value)} placeholder="e.g., US, EU, APAC" className="border rounded px-3 py-2 bg-white dark:bg-black" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500" htmlFor="input-Stake (USD)">Stake (USD)</label>
            <input value={stake} onChange={(e) => setStake(e.target.value)} placeholder="e.g., 1000" className="border rounded px-3 py-2 bg-white dark:bg-black" />
          </div>
          <div className="flex items-end"><button onClick={runOperator} className="w-full px-4 py-2 rounded bg-indigo-600 text-white">Suggest Chain</button></div>
        </div>
        {suggestion && (
          <div className="text-sm mt-2">
            <div>
              <span className="text-gray-500">Recommendation:</span> <b>{suggestion.recommendation?.chain?.name}</b>
            </div>
            {suggestion.alternatives && (
              <div className="text-gray-500">Alternatives: {suggestion.alternatives.map((a: any) => a.chain.name).join(', ')}</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="text-gray-500">Alternatives: {suggestion.alternatives.map((a: any) => a.chain.name).join(', ')}</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            )}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </div>
        )}
      </section>

<<<<<<< HEAD
      <section className='space-y-2 text-xs text-gray-500'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='space-y-2 text-xs text-gray-500'>
=======
      <section className="space-y-2 text-xs text-gray-500">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <div>Security</div>
        <ul className='list-disc ml-5 space-y-1'>
          <li>Onchain tx logs (client + API echo)</li>
          <li>Rate limits (client + API token bucket)</li>
<<<<<<< HEAD
          <li>
            Burn-and-mint model via LayerZero OFT (requires token addresses
            configured)
          </li>        </ul>
      </section>
    </div>
  );
}
=======
<<<<<<< HEAD
          <li>
            Burn-and-mint model via LayerZero OFT (requires token addresses
            configured)
          </li>
=======
      <section className="space-y-2 text-xs text-gray-500">
        <div>Security</div>
        <ul className="list-disc ml-5 space-y-1">
          <li>Onchain tx logs (client + API echo)</li>
          <li>Rate limits (client + API token bucket)</li>
          <li>Burn-and-mint model via LayerZero OFT (requires token addresses configured)</li>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <li>Burn-and-mint model via LayerZero OFT (requires token addresses configured)</li>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </ul>
      </section>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
