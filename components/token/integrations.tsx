<<<<<<< HEAD
import dynamic from 'next/dynamic',
=======

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
import dynamic from 'next/dynamic';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import React, { useEffect, useState } from 'react';

import { useWallet } from '../../hooks/useWallet';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  fetchDepinActivities
  calculateRewards
  DepinReward;
} from '../../utils/depins';
import { CHAINS } from '../../utils/chains';
const ClientOnlyBridge = dynamic(
  () => import('../../components/ui/BridgeForm')
  { ssr: false }
);import { fetchDepinActivities, calculateRewards, DepinReward } from '../../utils/depins';
import { CHAINS } from '../../utils/chains';
const ClientOnlyBridge = dynamic(() => import('../../components/ui/BridgeForm'), { ssr: false })
export default function TokenIntegrationsPage() {
=======
import {;
  fetchDepinActivities,;
  calculateRewards,;
  DepinReward,;
} from '../../utils/depins';
import { CHAINS } from '../../utils/chains';

const ClientOnlyBridge = dynamic(;
  () => import('../../components/ui/BridgeForm'),;
  { ssr: false }
);import { fetchDepinActivities, calculateRewards, DepinReward } from '../../utils/depins';
import { CHAINS } from '../../utils/chains';
const ClientOnlyBridge = dynamic(() => import('../../components/ui/BridgeForm'), { ssr: false }),;
export default function TokenIntegrationsPage() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import { fetchDepinActivities, calculateRewards, DepinReward } from '../../utils/depins';
import { CHAINS } from '../../utils/chains';
const ClientOnlyBridge = dynamic(() => import('../../components/ui/BridgeForm'), { ssr: false }),
export default function TokenIntegrationsPage() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const { account, connect } = useWallet();
  const [region, setRegion] = useState('');
  const [stake, setStake] = useState('');
  const [suggestion, setSuggestion] = useState<any>(null);
  const [rewards, setRewards] = useState<DepinReward[] | null>(null);
  const [depinsSyncing, setDepinsSyncing] = useState(false);
<<<<<<< HEAD
  async function syncDepin() {
    if (!account) {
<<<<<<< HEAD
=======

  async function syncDepin() {;
    if (!account) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      await connect();
      return;    }      return;
=======
      await connect();
      return
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
    setDepinsSyncing(true);
    const acts = await fetchDepinActivities(account);
    const r = calculateRewards(acts);
    setRewards(r);
<<<<<<< HEAD
    setDepinsSyncing(false);  }    setDepinsSyncing(false);
=======
    setDepinsSyncing(false)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  }
<<<<<<< HEAD
  async function runOperator() {
    const res = await fetch('/api/operator/suggest-chain', {
<<<<<<< HEAD
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ region, stakeUsd: stake })
=======

  async function runOperator() {;
    const res = await fetch('/api/operator/suggest-chain', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ region, stakeUsd: stake }),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    const data = await res && res.json();
    setSuggestion(data);
  }
  return (
<<<<<<< HEAD
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
=======
    <div className='space-y-8'>;
      <section className='space-y-2'>;
        <h1 className='text-2xl font-bold'>ZION$ Integrations</h1>;
        <p className='text-gray-600 dark:text-gray-300'>;
          Omnichain transfers via LayerZero and DePIN rewards.;
        </p>;
      </section>;

      <section className='space-y-4'>;
        <ClientOnlyBridge />;
      </section>;

      <section className='space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800'>;
        <h2 className='text-lg font-semibold'>DePIN Hook</h2>;
        <p className='text-sm text-gray-600 dark:text-gray-300'>;
          Plug into DIMO, Helium, Hivemapper to reward ZION$ for compute, IoT;
          jobs, and data streaming.;
        </p>;
        <div className='flex gap-2'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <button
            onClick={syncDepin}
            className='px-4 py-2 rounded bg-purple-600 text-white'>;
            {depinsSyncing ? 'Syncing…' : 'Sync DePIN Rewards'}
          </button>;
          {!account && (;
            <button onClick={connect} className='px-4 py-2 rounded border'>;
              Connect Wallet;
            </button>;
          )}
<<<<<<< HEAD
        </div>
        {rewards && (
          <div className='mt-3 space-y-2 text-sm'>
            {rewards.map((r, i) => (
              <div key={i} className='flex items-center justify-between'>
                <span>
                  {r.network} — {r.reason}
                </span>
                <span className='font-medium'>+{r.points} ZION$</span>              </div>    const data = await res.json();
=======
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ region, stakeUsd: stake })}),
    const data = await res.json();
    setSuggestion(data)
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

    setSuggestion(data)
=======
        </div>;
        {rewards && (;
          <div className='mt-3 space-y-2 text-sm'>;
            {rewards && rewards.map((r, i) => (;
              <div key={i} className='flex items-center justify-between'>;
                <span>;
                  {r && r.network} — {r && r.reason}
                </span>;
                <span className='font-medium'>+{r && r.points} ZION$</span>              </div>    const data = await res && res.json();
    setSuggestion(data);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  return (
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
    <div className="space-y-8">;
      <section className="space-y-2">;
        <h1 className="text-2xl font-bold">ZION$ Integrations</h1>;
        <p className="text-gray-600 dark:text-gray-300">Omnichain transfers via LayerZero and DePIN rewards.</p>;
      </section>;

      <section className="space-y-4">;
        <ClientOnlyBridge />;
      </section>;

      <section className="space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800">;
        <h2 className="text-lg font-semibold">DePIN Hook</h2>;
        <p className="text-sm text-gray-600 dark:text-gray-300">Plug into DIMO, Helium, Hivemapper to reward ZION$ for compute, IoT jobs, and data streaming.</p>;
        <div className="flex gap-2">;
          <button onClick={syncDepin} className="px-4 py-2 rounded bg-purple-600 text-white">{depinsSyncing ? 'Syncing…' : 'Sync DePIN Rewards'}</button>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          {!account && <button onClick={connect} className="px-4 py-2 rounded border">Connect Wallet</button>}
        </div>;
        {rewards && (;
          <div className="mt-3 space-y-2 text-sm">;
            {rewards && rewards.map((r, i) => (;
              <div key={i} className="flex items-center justify-between">;
                <span>{r && r.network} — {r && r.reason}</span>;
                <span className="font-medium">+{r && r.points} ZION$</span>;
              </div>;
            ))}
          </div>;
        )}
<<<<<<< HEAD
      </section>
      <section className='space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800'>
        <h2 className='text-lg font-semibold'>Operator AI Actions</h2>
        <p className='text-sm text-gray-600 dark:text-gray-300'>
          Based on your region and stake, we suggest the best chain for ZION$.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
          <div className='flex flex-col gap-1'>
            <label className='text-xs text-gray-500'>Region</label>
=======
      </section>;

      <section className='space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800'>;
        <h2 className='text-lg font-semibold'>Operator AI Actions</h2>;
        <p className='text-sm text-gray-600 dark:text-gray-300'>;
          Based on your region and stake, we suggest the best chain for ZION$.;
        </p>;
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>;
          <div className='flex flex-col gap-1'>;
            <label className='text-xs text-gray-500'>Region</label>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <input
              value={region}
              onChange={e => setRegion(e && e.target.value)}
              placeholder='e && e.g., US, EU, APAC';
              className='border rounded px-3 py-2 bg-white dark:bg-black';
            />;
          </div>;
          <div className='flex flex-col gap-1'>;
            <label className='text-xs text-gray-500'>Stake (USD)</label>;
            <input
              value={stake}
              onChange={e => setStake(e && e.target.value)}
              placeholder='e && e.g., 1000';
              className='border rounded px-3 py-2 bg-white dark:bg-black';
            />;
          </div>;
          <div className='flex items-end'>;
            <button
              onClick={runOperator}
              className='w-full px-4 py-2 rounded bg-indigo-600 text-white'>;
              Suggest Chain;
            </button>;
          </div>;
        </div>;
        {suggestion && (;
          <div className='text-sm mt-2'>;
            <div>;
              <span className='text-gray-500'>Recommendation:</span>{' '}
              <b>{suggestion && suggestion.recommendation?.chain?.name}</b>;
            </div>;
            {suggestion && suggestion.alternatives && (;
              <div className='text-gray-500'>;
                Alternatives:{' '}
                {suggestion && suggestion.alternatives;
                  .map((a: any) => a && a.chain.name);
                  .join(', ')}
              </div>            )}          </div>;
          <div className="flex flex-col gap-1">;
            <label className="text-xs text-gray-500" htmlFor="input-Stake (USD)">Stake (USD)</label>;
            <input value={stake} onChange={(e) => setStake(e && e.target.value)} placeholder="e && e.g., 1000" className="border rounded px-3 py-2 bg-white dark:bg-black" />;
          </div>;
          <div className="flex items-end"><button onClick={runOperator} className="w-full px-4 py-2 rounded bg-indigo-600 text-white">Suggest Chain</button></div>;
        </div>;
        {suggestion && (;
          <div className="text-sm mt-2">;
            <div>;
              <span className="text-gray-500">Recommendation:</span> <b>{suggestion && suggestion.recommendation?.chain?.name}</b>;
            </div>;
            {suggestion && suggestion.alternatives && (;
              <div className="text-gray-500">Alternatives: {suggestion && suggestion.alternatives.map((a: any) => a && a.chain.name).join(', ')}</div>;
=======
          {!account && <button onClick={connect} className="px-4 py-2 rounded border">Connect Wallet</button>}
        </div>
        {rewards && (
          <div className="mt-3 space-y-2 text-sm">
            {rewards.map((r, i) => (
              <div key={i} className="flex items-center justify-between">
                <span>{r.network} — {r.reason}</span>
                <span className="font-medium">+{r.points} ZION$</span>
              </div>
            ))}
          </div>
        )}
      </section>

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            )}
          </div>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
      </section>
      <section className='space-y-2 text-xs text-gray-500'>
        <div>Security</div>
        <ul className='list-disc ml-5 space-y-1'>
          <li>Onchain tx logs (client + API echo)</li>
          <li>Rate limits (client + API token bucket)</li>
          <li>
            Burn-and-mint model via LayerZero OFT (requires token addresses
            configured)
          </li>        </ul>
      </section>
    </div>
=======
      </section>;

      <section className='space-y-2 text-xs text-gray-500'>;
        <div>Security</div>;
        <ul className='list-disc ml-5 space-y-1'>;
          <li>Onchain tx logs (client + API echo)</li>;
          <li>Rate limits (client + API token bucket)</li>;
          <li>;
            Burn-and-mint model via LayerZero OFT (requires token addresses;
            configured);
          </li>        </ul>;
      </section>;
    </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
}        <div>Security</div>;
        <ul className="list-disc ml-5 space-y-1">;
          <li>Onchain tx logs (client + API echo)</li>;
          <li>Rate limits (client + API token bucket)</li>;
          <li>Burn-and-mint model via LayerZero OFT (requires token addresses configured)</li>;
        </ul>;
      </section>;
    </div>;
  );
}
=======
      </section>

      <section className="space-y-2 text-xs text-gray-500">
        <div>Security</div>
        <ul className="list-disc ml-5 space-y-1">
          <li>Onchain tx logs (client + API echo)</li>
          <li>Rate limits (client + API token bucket)</li>
          <li>Burn-and-mint model via LayerZero OFT (requires token addresses configured)</li>
        </ul>
      </section>
    </div>
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
