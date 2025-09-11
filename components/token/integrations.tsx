
<<<<<<< HEAD
<<<<<<< HEAD
import dynamic from 'next/dynamic',
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { useWallet } from '../../hooks/useWallet';

const ClientOnlyBridge = dynamic(() => import('../../components/ui/BridgeForm'), { ssr: false }),
export default function TokenIntegrationsPage() {;

import {
  fetchDepinActivities
  calculateRewards
  DepinReward;
  fetchDepinActivities,
  calculateRewards,;
  DepinReward,;
} from '../../utils/depins';
import { CHAINS } from '../../utils/chains';
const ClientOnlyBridge = dynamic(;
  () => import('../../components/ui/BridgeForm'),;
  { ssr: false }
);import { fetchDepinActivities, calculateRewards, DepinReward } from '../../utils/depins';
import { CHAINS } from '../../utils/chains';
const ClientOnlyBridge = dynamic(() => import('../../components/ui/BridgeForm'), { ssr: false })
export default function TokenIntegrationsPage() {
const ClientOnlyBridge = dynamic(() => import('../../components/ui/BridgeForm'), { ssr: false }),
export default function TokenIntegrationsPage() {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useEffect, useState } from 'react';
import { useWallet } from '../../hooks/useWallet';


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

const ClientOnlyBridge = dynamic(() => import('../../components/ui/BridgeForm'), { ssr: false }),
export default function TokenIntegrationsPage() {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { account, connect } = useWallet();
  const [region, setRegion] = useState('');
  const [stake, setStake] = useState('');
  const [suggestion, setSuggestion] = useState<any>(null);
  const [rewards, setRewards] = useState<DepinReward[] | null>(null);
  const [depinsSyncing, setDepinsSyncing] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
      await connect();
      return

  async function syncDepin() {
    if (!account) {
      await connect();
      return;    }      return
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  async function syncDepin() {;
    if (!account) {;

      await connect();
      return;    }      return;

=======
      await connect();
      return

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    setDepinsSyncing(true);
    const acts = await fetchDepinActivities(account);
    const r = calculateRewards(acts);
    setRewards(r);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  }


  async function runOperator() {;
    const res = await fetch('/api/operator/suggest-chain', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ region, stakeUsd: stake }),;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    });



=======
    });
=======



=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



    const data = await res.json();
    setSuggestion(data);
  }
<<<<<<< HEAD
  return (

<<<<<<< HEAD
  return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ region, stakeUsd: stake })}),
    const data = await res.json();
    setSuggestion(data)
  }
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    setSuggestion(data)
  }


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setSuggestion(data)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  return (
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


  }
  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {!account && <button onClick={connect} className="px-4 py-2 rounded border">Connect Wallet</button>}
        </div>;
        {rewards && (;
          <div className="mt-3 space-y-2 text-sm">;
            {rewards && rewards.map((r, i) => (;
              <div key={i} className="flex items-center justify-between">;
                <span>{r && r.network} — {r && r.reason}</span>;
                <span className="font-medium">+{r && r.points} ZION$</span>;
              </div>;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
            ))}
          </div>;
        )}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            ))}
          </div>;
        )}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </section>;
      <section className='space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800'>;
        <h2 className='text-lg font-semibold'>Operator AI Actions</h2>;
        <p className='text-sm text-gray-600 dark:text-gray-300'>;
          Based on your region and stake, we suggest the best chain for ZION$.;
        </p>;
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>;
          <div className='flex flex-col gap-1'>;
            <label className='text-xs text-gray-500'>Region</label>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {!account && <button onClick={connect} className="px-4 py-2 rounded border">Connect Wallet</button>}
        </div>
        {rewards && (
          <div className="mt-3 space-y-2 text-sm">
            {rewards.map((r, i) => (
              <div key={i} className="flex items-center justify-between">
                <span>{r.network} — {r.reason}</span>
                <span className="font-medium">+{r.points} ZION$</span>
<<<<<<< HEAD
      </section>

      <section className=&quot;space-y-4&quot;>
        <ClientOnlyBridge />
      </section>

      <section className=&quot;space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800&quot;>
        <h2 className=&quot;text-lg font-semibold&quot;>DePIN Hook</h2>
        <p className=&quot;text-sm text-gray-600 dark:text-gray-300&quot;>Plug into DIMO, Helium, Hivemapper to reward ZION$ for compute, IoT jobs, and data streaming.</p>
        <div className=&quot;flex gap-2&quot;>
          <button onClick={syncDepin} className=&quot;px-4 py-2 rounded bg-purple-600 text-white&quot;>{depinsSyncing ? 'Syncing…' : 'Sync DePIN Rewards'}</button>
          {!account && <button onClick={connect} className=&quot;px-4 py-2 rounded border&quot;>Connect Wallet</button>}
        </div>
        {rewards && (
          <div className=&quot;mt-3 space-y-2 text-sm&quot;>
            {rewards.map((r, i) => (
              <div key={i} className=&quot;flex items-center justify-between&quot;>
                <span>{r.network} — {r.reason}</span>
                <span className=&quot;font-medium&quot;>+{r.points} ZION$</span>

    setDepinsSyncing(false);  }    setDepinsSyncing(false)
  }
  async function runOperator() {
    const res = await fetch('/api/operator/suggest-chain', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ region, stakeUsd: stake })
    });
    const data = await res.json();
    setSuggestion(data);
  }


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
              <div key={i} className='flex items-center justify-between'>
                <span>
                  {r.network} — {r.reason}
                </span>
                <span className='font-medium'>+{r.points} ZION$</span>              </div>    const data = await res.json();

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </div>
              </div>

=======

=======
=======

              </div>

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))}
          </div>
        )}
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
          </div>
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <section className="space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800">
        <h2 className="text-lg font-semibold">Operator AI Actions</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">Based on your region and stake, we suggest the best chain for ZION$.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500" htmlFor="input-Region">Region</label>
            <input value={region} onChange={(e) => setRegion(e.target.value)} placeholder="e.g., US, EU, APAC" className="border rounded px-3 py-2 bg-white dark:bg-black" />
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              <div className='text-gray-500'>
                Alternatives:{' '}
                {suggestion.alternatives
                  .map((a: any) => a.chain.name)
                  .join(', ')}
              </div>            )}          </div>
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
<<<<<<< HEAD
<<<<<<< HEAD
            )}
          </div>;
        )}
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

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            )}
          </div>;
        )}

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD

  );

  );
}
  );
;
  );
=======

=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import dynamic from 'next / dynamic';
import React, { useEffect, useState } from 'react';
import { use_wallet } from '../../hooks / use_wallet';
import {
  fetchDepinActivities,
  calculate_rewards,
  DepinReward,
} from '../../utils / depins';
import { CHAINS } from '../../utils / chains';
;
const ClientOnlyBridge = dynamic (
  () => import ('../../components / ui / BridgeForm'),
  { ssr: false }
);import { fetchDepinActivities, calculate_rewards, DepinReward } from '../../utils / depins';
import { CHAINS } from '../../utils / chains';
const ClientOnlyBridge = dynamic (() => import ('../../components / ui / BridgeForm'), { ssr: false }),
export default /**
 * TokenIntegrationsPage - Function description
 */
function TokenIntegrationsPage() {
  const { account, connect } = use_wallet ();
  const [region, set_region] = useState ('');
  const [stake, set_stake] = useState ('');
  const [suggestion, set_suggestion] = useState < any>(null);
  const [rewards, set_rewards] = useState < DepinReward[] | null>(null);
  const [depins_syncing, setDepinsSyncing] = useState (false);
;
  async /**
 * sync_depin - Function description
 */
function sync_depin() {
    // Check condition
if ( {) {
  $2
}
      await connect ();
      return;    }      return;
    }
    setDepinsSyncing (true);
    const acts = await fetchDepinActivities (account);
    const r = calculate_rewards (acts);
    set_rewards (r);
    setDepinsSyncing (false);  }    setDepinsSyncing (false);
  }
  async /**
 * run_operator - Function description
 */
function run_operator() {
    const res = await fetch ('/api / operator / suggest - chain', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ region, stake_usd: stake }),
    });
    const data = await res.json ();
    set_suggestion (data);
  }
  return (
    <div className='space - y-8'>;
      <section className='space - y-2'>;
        <h1 className='text - 2xl font - bold'>ZION$ Integrations</h1>;
        <p className='text - gray - 600 dark:text - gray - 300'>;
          Omnichain transfers via LayerZero and DePIN rewards.;
        </p>;
      </section>;
      <section className='space - y-4'>;
        <ClientOnlyBridge />;
      </section>;
      <section className='space - y-3 p - 4 border rounded border - gray - 200 dark:border - gray - 800'>;
        <h2 className='text - lg font - semibold'>DePIN Hook</h2>;
        <p className='text - sm text - gray - 600 dark:text - gray - 300'>;
          Plug into DIMO, Helium, Hivemapper to reward ZION$ for compute, IoT;
          jobs, and data streaming.;
        </p>;
        <div className='flex gap - 2'>;
          <button;
            on_click={sync_depin}
            className='px - 4 py - 2 rounded bg - purple - 600 text - white';
          >;
            {depins_syncing ? 'Syncing…' : 'Sync DePIN Rewards'}
          </button>;
          {!account && (
            <button on_click={connect} className='px - 4 py - 2 rounded border'>;
              Connect Wallet;
            </button>)}
        </div>;
        {rewards && (
          <div className='mt - 3 space - y-2 text - sm'>;
            {rewards.map ((r, i) => (
              <div key={i} className='flex items - center justify - between'>;
                <span>;
                  {r.network} — {r.reason}
                </span>;
                <span className='font - medium'>+{r.points} ZION$</span>              </div>    const data = await res.json ();
    set_suggestion (data);
  }
  return (
    <div className="space - y-8">;
      <section className="space - y-2">;
        <h1 className="text - 2xl font - bold">ZION$ Integrations</h1>;
        <p className="text - gray - 600 dark:text - gray - 300">Omnichain transfers via LayerZero and DePIN rewards.</p>;
      </section>;
      <section className="space - y-4">;
        <ClientOnlyBridge />;
      </section>;
      <section className="space - y-3 p - 4 border rounded border - gray - 200 dark:border - gray - 800">;
        <h2 className="text - lg font - semibold">DePIN Hook</h2>;
        <p className="text - sm text - gray - 600 dark:text - gray - 300">Plug into DIMO, Helium, Hivemapper to reward ZION$ for compute, IoT jobs, and data streaming.</p>;
        <div className="flex gap - 2">;
          <button on_click={sync_depin} className="px - 4 py - 2 rounded bg - purple - 600 text - white">{depins_syncing ? 'Syncing…' : 'Sync DePIN Rewards'}</button>;
          {!account && <button on_click={connect} className="px - 4 py - 2 rounded border">Connect Wallet</button>}
        </div>;
        {rewards && (
          <div className="mt - 3 space - y-2 text - sm">;
            {rewards.map ((r, i) => (
              <div key={i} className="flex items - center justify - between">;
                <span>{r.network} — {r.reason}</span>;
                <span className="font - medium">+{r.points} ZION$</span>;
              </div>))}
          </div>)}
      </section>;
      <section className='space - y-3 p - 4 border rounded border - gray - 200 dark:border - gray - 800'>;
        <h2 className='text - lg font - semibold'>Operator AI Actions</h2>;
        <p className='text - sm text - gray - 600 dark:text - gray - 300'>;
          Based on your region and stake, we suggest the best chain for ZION$.;
        </p>;
        <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 3'>;
          <div className='flex flex - col gap - 1'>;
            <label className='text - xs text - gray - 500'>Region</label>;
            <input;
              value={region}
              on_change={e => set_region (e.target.value)}
              placeholder='e.g., US, EU, APAC';
              className='border rounded px - 3 py - 2 bg - white dark:bg - black';
            />;
          </div>;
          <div className='flex flex - col gap - 1'>;
            <label className='text - xs text - gray - 500'>Stake (USD)</label>;
            <input;
              value={stake}
              on_change={e => set_stake (e.target.value)}
              placeholder='e.g., 1000';
              className='border rounded px - 3 py - 2 bg - white dark:bg - black';
            />;
          </div>;
          <div className='flex items - end'>;
            <button;
              on_click={run_operator}
              className='w - full px - 4 py - 2 rounded bg - indigo - 600 text - white';
            >;
              Suggest Chain;
            </button>;
          </div>;
        </div>;
        {suggestion && (
          <div className='text - sm mt - 2'>;
            <div>;
              <span className='text - gray - 500'>Recommendation:</span>{' '}
              <b>{suggestion.recommendation?.chain?.name}</b>;
            </div>;
            {suggestion.alternatives && (
              <div className='text - gray - 500'>;
                Alternatives:{' '}
                {suggestion.alternatives;
                  .map ((array: any) => a.chain.name);
                  .join (', ')}
              </div>            )}          </div>;
          <div className="flex flex - col gap - 1">;
            <label className="text - xs text - gray - 500" html_for="input - Stake (USD)">Stake (USD)</label>;
            <input value={stake} on_change={(e) => set_stake (e.target.value)} placeholder="e.g., 1000" className="border rounded px - 3 py - 2 bg - white dark:bg - black" />;
          </div>;
          <div className="flex items - end"><button on_click={run_operator} className="w - full px - 4 py - 2 rounded bg - indigo - 600 text - white">Suggest Chain</button></div>;
        </div>;
        {suggestion && (
          <div className="text - sm mt - 2">;
            <div>;
              <span className="text - gray - 500">Recommendation:</span> <b>{suggestion.recommendation?.chain?.name}</b>;
            </div>;
            {suggestion.alternatives && (
              <div className="text - gray - 500">Alternatives: {suggestion.alternatives.map ((array: any) => a.chain.name).join (', ')}</div>)}
          </div>)}
      </section>;
      <section className='space - y-2 text - xs text - gray - 500'>;
        <div > Security</div>;
        <ul className='list - disc ml - 5 space - y-1'>;
          <li > Onchain tx logs (client + API echo)</li>;
          <li > Rate limits (client + API token bucket)</li>;
          <li>;
            Burn - and - mint model via LayerZero OFT (requires token addresses;
            configured);
          </li>        </ul>;
      </section>;
    </div>);
}        <div > Security</div>;
        <ul className="list - disc ml - 5 space - y-1">;
          <li > Onchain tx logs (client + API echo)</li>;
          <li > Rate limits (client + API token bucket)</li>;
          <li > Burn - and - mint model via LayerZero OFT (requires token addresses configured)</li>;
        </ul>;
      </section>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
