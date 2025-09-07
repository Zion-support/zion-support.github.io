import dynamic from 'next/dynamic';,
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic',

<<<<<<< HEAD
<<<<<<< HEAD
=======

import dynamic from 'next/dynamic';,
>>>>>>> origin/chore/fix-lint-and-merge
import React, { useEffect, useState } from 'react';
import { useWallet  } from '../../hooks/useWallet';
import { fetchDepinActivities, calculateRewards, DepinReward  } from '../../utils/depins';
import { CHAINS } from '../../utils/chains';
<<<<<<< HEAD
const ClientOnlyBridge = null;
=======
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { useEffect, useState } from 'react';
import { useWallet } from '../../hooks/useWallet';

import { useWallet } from '../../hooks/useWallet';
import {
  }
  fetchDepinActivities,
calculateRewards
  DepinReward;
origin/cursor/automate-test-improve-and-merge-code-2533
} from '../../utils/depins';
} from '../../utils/depins';'
import { CHAINS } from '../../utils/chains';
const ClientOnlyBridge = dynamic('
  () => import('../../components/ui/BridgeForm')
  { ssr: false }'
);import { fetchDepinActivities, calculateRewards, DepinReward } from '../../utils/depins';'
import { CHAINS } from '../../utils/chains';
const ClientOnlyBridge = dynamic(
  () => import('../../components/ui/BridgeForm')
  { ssr: false }
);import { fetchDepinActivities, calculateRewards, DepinReward } from '../../utils/depins';
import { CHAINS } from '../../utils/chains';



const ClientOnlyBridge = dynamic(() => import('../../components/ui/BridgeForm'), { ssr: false }),
export default function TokenIntegrationsPage() {;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { account, connect } = useWallet();
  const [region, setRegion] = useState('');
export default function TokenIntegrationsPage() {;
=======

const ClientOnlyBridge = null;
import { useWallet } from '../../hooks/useWallet';
import {
  fetchDepinActivities;
calculateRewards}
DepinReward;}
} from '../../utils/depins';
import { CHAINS } from '../../utils/chains';

const ClientOnlyBridge = dynamic(
  () => import('../../components/ui/BridgeForm')
  { ssr: false}
}
>>>>>>> origin/chore/fix-lint-and-merge

);

export default function TokenIntegrationsPage() {}
  const { account, connect } = useWallet();
<<<<<<< HEAD
  const [region, setRegion] = useState('');
  const [stake, setStake] = useState('');
  const [suggestion, setSuggestion] = useState<any>(null);
  const [rewards, setRewards] = useState<DepinReward[] | null>(null);
  const [depinsSyncing, setDepinsSyncing] = useState(false);
<<<<<<< HEAD
import React, { useEffect, useState } from 'react;
import { useWallet  } from ../../hooks/useWallet';
import { fetchDepinActivities, calculateRewards, DepinReward  } from '../../utils/depins;
import { CHAINS } from ../../utils/chains';
const ClientOnlyBridge = null;
=======
<<<<<<< HEAD
      await connect();
      return

  async function syncDepin() {
    if (!account) {
      await connect();
      return;    }      return
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

} from '../../utils/depins;
} from ../../utils/depins';'
import { CHAINS } from ../../utils/chains;
const ClientOnlyBridge = dynamic('
  () => import('../../components/ui/BridgeForm)
  { ssr: false }
);import { fetchDepinActivities, calculateRewards, DepinReward } from '../../utils/depins';

  const [stake, setStake] = useState(');
  const [suggestion, setSuggestion] = useState<any>(null);
  const [rewards, setRewards] = useState<DepinReward[] | null>(null);
  const [depinsSyncing, setDepinsSyncing] = useState(false);

=======

<<<<<<< HEAD
const [region, setRegion] = useState('');

const [stake, setStake] = useState('');

const [suggestion, setSuggestion] = useState<any    />(null);

const [rewards, setRewards] = useState<DepinReward[] | null    />(null);

const [depinsSyncing, setDepinsSyncing] = useState(false);
>>>>>>> origin/chore/fix-lint-and-merge

  async function syncDepin() {
    if (!account) {
<<<<<<< HEAD
      }
      await connect();
return;
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
    setDepinsSyncing(true);
    const acts = await fetchDepinActivities(account);
    const r = calculateRewards(acts);
    setRewards(r);
<<<<<<< HEAD
import { fetchDepinActivities, calculateRewards, DepinReward } from '../../utils/depins';
import { CHAINS } from '../../utils/chains';
const ClientOnlyBridge = dynamic(() => import('../../components/ui/BridgeForm'), { ssr: false }),
=======
      await connect();}
return;}
    }
    setDepinsSyncing(true);
>>>>>>> origin/chore/fix-lint-and-merge

const acts = await fetchDepinActivities(account);

const r = calculateRewards(acts);
    setRewards(r);
<<<<<<< HEAD
    setDepinsSyncing(false)
=======
=======
<<<<<<< HEAD
=======


  }


  async function runOperator() {;
    const res = await fetch('/api/operator/suggest-chain', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ region, stakeUsd: stake }),;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    });



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

setDepinsSyncing(false);
>>>>>>> origin/chore/fix-lint-and-merge
  }
<<<<<<< HEAD
  async function runOperator() {
    const res = await fetch('/api/operator/suggest-chain', {
<<<<<<< HEAD
=======
  return (

<<<<<<< HEAD
  return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ region, stakeUsd: stake })}),
    const data = await res.json();
    setSuggestion(data)
  }
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
<<<<<<< HEAD
=======

<<<<<<< HEAD
;
import dynamic from next/dynamic',import React, { useEffect, useState } from 'react;
import { useWallet   } from ../../hooks/useWallet';
import { fetchDepinActivities, calculateRewards, DepinReward   } from '../../utils/depins;
import { CHAINS  } from ../../utils/chains';
import { useWallet  } from '../../hooks/useWallet;
import { fetchDepinActivities;
  calculateRewards;
  DepinReward;} from ../../utils/depins';
const ClientOnlyBridge = dynamic(() => import('../../components/ui/BridgeForm){ ssr: false })import { fetchDepinActivities, calculateRewards, DepinReward  } from ../../utils/depins';
const ClientOnlyBridge = dynamic(() => import('../../components/ui/BridgeForm), { ssr: false }),export default function TokenIntegrationsPage() {)export default function TokenIntegrationsPage() {const { account, connect } = useWallet()const [region, setRegion] = useState(')const [stake, setStake] = useState(')const [suggestion, setSuggestion] = useState<any>(null)const [rewards, setRewards] = useState<DepinReward[] | null>(null)const [depinsSyncing, setDepinsSyncing]  = useState(false)async function syncDepin() {if (!account) {await connect()return;}
    setDepinsSyncing(true)const acts = await fetchDepinActivities(account)const r = calculateRewards(acts)setRewards(r)setDepinsSyncing(false)}
  async function runOperator() {const res = await fetch(/api/operator/suggest-chain', {method: 'POST,headers: { Content-Type': 'application/json },body: JSON.stringify({ region, stakeUsd: stake })})const data = await res.json()setSuggestion(data)}const data = await res.json()setSuggestion(data)}const data = await res && res.json()setSuggestion(data)}
  return (<button;
            onClick={syncDepin}
            className=px-4 py-2 rounded bg-purple-600 text-white'>;
            {depinsSyncing ? 'Syncing… : Sync DePIN Rewards'}
          </button>;
          {!account && (<button onClick={connect} className='px-4 py-2 rounded border'>;
body: JSON.stringify({ region, stakeUsd: stake }),
    });
origin/cursor/automate-test-improve-and-merge-code-2533
    const data = await res.json();
    setSuggestion(data);

=======
      method: 'POST'}
  headers: { 'Content-Type': 'application/json'}
},
body: JSON.stringify({ region, stakeUsd: stake}
})
    });
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {!account && <button onClick={connect} className="px-4 py-2 rounded border">Connect Wallet</button>}
        </div>;
        {rewards && (;
          <div className="mt-3 space-y-2 text-sm">;
            {rewards && rewards.map((r, i) => (;
              <div key={i} className="flex items-center justify-between">;
                <span>{r && r.network} — {r && r.reason}</span>;
                <span className="font-medium">+{r && r.points} ZION$</span>;
              </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const data = await res.json();
    setSuggestion(data);
  }

const data = await res.json();
    setSuggestion(data);
>>>>>>> origin/chore/fix-lint-and-merge
  }

<<<<<<< HEAD
const data = await res && res.json();
    setSuggestion(data);
  }
  return (
          <button;
<<<<<<< HEAD
            onClick={syncDepin}'
            className='px-4 py-2 rounded bg-purple-600 text-white'>;'
            {depinsSyncing ? 'Syncing…' : 'Sync DePIN Rewards'}
          </button>;
          {!account && (;'
            <button onClick={connect} className='px-4 py-2 rounded border'>;
              Connect Wallet;
            </button>;
    <div className="space-y-8>
      <section className=space-y-2">
        <h1 className="text-2xl font-bold>ZION$ Integrations</h1>
        <p className=text-gray-600 dark:text-gray-300">Omnichain transfers via LayerZero and DePIN rewards.</p>
      </section>

      <section className="space-y-4>
        <ClientOnlyBridge />
      </section>

      <section className="space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800">
        <h2 className="text-lg font-semibold">DePIN Hook</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">Plug into DIMO, Helium, Hivemapper to reward ZION$ for compute, IoT jobs, and data streaming.</p>
        <div className="flex gap-2">
          <button onClick={syncDepin} className="px-4 py-2 rounded bg-purple-600 text-white">{depinsSyncing ? 'Syncing…' : 'Sync DePIN Rewards'}</button>
=======

            ))}
          </div>;
        )}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {!account && <button onClick={connect} className="px-4 py-2 rounded border">Connect Wallet</button>}
        </div>
        {rewards && (
          <div className="mt-3 space-y-2 text-sm">
            {rewards.map((r, i) => (
          )}


    setSuggestion(data)
        </div>;
        {rewards && (;'
          <div className='mt-3 space-y-2 text-sm'>;
            {rewards && rewards.map((r, i) => (;'
              <div key={i} className='flex items-center justify-between'>;
                <span>;
          {!account && <button onClick={connect} className="px-4 py-2 rounded border">Connect Wallet</button>}
        </div>;
        {rewards && (;"
          <div className="mt-3 space-y-2 text-sm">;
            {rewards && rewards.map((r, i) => (;"
              <div key={i} className="flex items-center justify-between">;
                <span>{r && r.network} — {r && r.reason}</span>;"
                <span className="font-medium">+{r && r.points} ZION$</span>;
              </div>;
            <input;
              value={region}
              onChange={e => setRegion(e && e.target.value)}'
              placeholder='e && e.g., US, EU, APAC';'
              className='border rounded px-3 py-2 bg-white dark:bg-black';
            />;
          </div>;'
          <div className='flex flex-col gap-1'>;'
            <label className='text-xs text-gray-500'>Stake (USD)</label>;
            <input;
              value={stake}
              onChange={e => setStake(e && e.target.value)}'
              placeholder='e && e.g., 1000';'
              className='border rounded px-3 py-2 bg-white dark:bg-black';
            />;
          </div>;'
          <div className='flex items-end'>;
            <button;
              onClick={runOperator}'
              className='w-full px-4 py-2 rounded bg-indigo-600 text-white'>;
              className='w-full px-4 py-2 rounded bg-indigo-600 text-white'>;
=======
onClick={syncDepin}
            className='px-4 py-2 rounded bg-purple-600 text-white'    />;
            {depinsSyncing ? 'Syncing…' : 'Sync DePIN Rewards'}
          </button>;
          {!account && (<button onClick={connect} className='px-4 py-2 rounded border'    />;
              Connect Wallet;
            </button>;

          )}

        </div>
        {rewards && (
          <div className='mt-3 space-y-2 text-sm'    />}
            {rewards.map((r, i) => (}
              <div key={i} className='flex items-center justify-between'    />
                <span    />
                  {r.network} — {r.reason}
                </span>
                <span className='font-medium'    />+{r.points} ZION$</span>
    setSuggestion(data)
        </div>;
        {rewards && (;
          <div className='mt-3 space-y-2 text-sm'    />;}
            {rewards && rewards.map((r, i) => (;}
              <div key={i} className='flex items-center justify-between'    />;

                <span    />;
          {!account && <button onClick={connect} className=\"px-4 py-2 rounded border\"    />Connect Wallet</button>}
        </div>;"
        {rewards && (<div className=\"mt-3 space-y-2 text-sm\"    />;}"
            {rewards && rewards.map((r, i) => (<div key={i} className=\"flex items-center justify-between\"    />;
                <span    />{r && r.network} — {r && r.reason}</span>;"
                <span className=\"font-medium\"    />+{r && r.points} ZION$</span>;
              </div>;
            <input;
              value={region}
              onChange={e =    /> setRegion(e && e.target.value)}
              placeholder='e && e.g., US, EU, APAC';
              className='border rounded px-3 py-2 bg-white dark:bg-black';
            />;
          </div>;
          <div className='flex flex-col gap-1'    />;
            <label className='text-xs text-gray-500'    />Stake (USD)</label>;
            <input;
              value={stake}
              onChange={e =    /> setStake(e && e.target.value)}
              placeholder='e && e.g., 1000';
              className='border rounded px-3 py-2 bg-white dark:bg-black';
            />;
          </div>;
          <div className='flex items-end'    />;
            <button;
              onClick={runOperator}
              className='w-full px-4 py-2 rounded bg-indigo-600 text-white'    />;
>>>>>>> origin/chore/fix-lint-and-merge
              Suggest Chain;
            </button>;
          </div>;
        </div>;
<<<<<<< HEAD
        {suggestion && (<div className='text-sm mt-2'>;
            <div>;
              <span className='text-gray-500'>"Recommendation": </span>{' '}'
              <b>{suggestion && suggestion.recommendation?.chain?.nam
}</b>;
            </div>;
            {suggestion && suggestion.alternatives && (<div className='text-gray-500'>;'
                }
                "Alternatives": {' ,'
}
                {suggestion && suggestion.alternatives;
                  .map(("a": any) => a && a.chain.name).join(', ')}'
              </div>            )}          </div>;
          <div className="flex flex-col gap-1">;"
            <label className="text-xs text-gray-500" htmlFor="input-Stake (USD)">Stake (USD)</label>;"
            <input value={stake} onChange={(e) => setStake(e && e.target.value)} placeholder="e && e.g., 1000" className="border rounded px-3 py-2 bg-white "dark":bg-black" />;"
          </div>;
          <div className="flex items-end"><button onClick={runOperator} className="w-full px-4 py-2 rounded bg-indigo-600 text-white">Suggest Chain</button></div>;"
        </div>;
        {suggestion && (<div className="text-sm mt-2">;"
            <div>;
              <span className="text-gray-500">"Recommendation": </span> <b>{suggestion && suggestion.recommendation?.chain?.nam,"
}</b>;
            </div>;
            {suggestion && suggestion.alternatives && (<div className="text-gray-500">"Alternatives": {suggestion && suggestion.alternatives.map(("a": any) => a && a.chain.name).join(', ')}</div>;'
  return (<div className="space-y-8">;"
      <section className="space-y-2">;"
        <h1 className="text-2xl font-bold">ZION$ Integrations</h1>;"
        <p className="text-gray-600 "dark":text-gray-300">Omnichain transfers via LayerZero and DePIN rewards.</p>;"
      </section>;
      <section className="space-y-4">;"
        <ClientOnlyBridge />;
      </section>;
      <section className="space-y-3 p-4 border rounded border-gray-200 "dark":border-gray-800">;"
        <h2 className="text-lg font-semibold">DePIN Hook</h2>;"
        <p className="text-sm text-gray-600 "dark":text-gray-300">Plug into DIMO, Helium, Hivemapper to reward ZION$ for compute, IoT jobs, and data streaming.</p>;"
        <div className="flex gap-2">;"
          <button onClick={syncDepin} className="px-4 py-2 rounded bg-purple-600 text-white">{depinsSyncing ? 'Syncing…' : 'Sync DePIN Rewards'}</button>;'
          {!account && <button onClick={connect} className="px-4 py-2 rounded border">Connect Wallet</button>}"
        </div>;
        {rewards && (<div className="mt-3 space-y-2 text-sm">;"
            {rewards.map((r, i) => (<div key={i} className="flex items-center justify-between">;"
                <span>{r.network} — {r.reason}</span>;
                <span className="font-medium">+{r.points} ZION$</span>;"
            ))}
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
<<<<<<< HEAD
        {suggestion && (;'
          <div className='text-sm mt-2'>;
            <div>;'
              <span className='text-gray-500'>Recommendation:</span>{' '}
              <b>{suggestion && suggestion.recommendation?.chain?.name}</b>;
            </div>;
            {suggestion && suggestion.alternatives && (;'
              <div className='text-gray-500'>;'
                Alternatives:{' '}
                {suggestion && suggestion.alternatives;
                  .map((a: any) => a && a.chain.name);'
                  .join(', ')}
              </div>            )}          </div>;"
          <div className="flex flex-col gap-1">;"
            <label className="text-xs text-gray-500" htmlFor="input-Stake (USD)">Stake (USD)</label>;"
            <input value={stake} onChange={(e) => setStake(e && e.target.value)} placeholder="e && e.g., 1000" className="border rounded px-3 py-2 bg-white dark:bg-black" />;
          </div>;"
          <div className="flex items-end"><button onClick={runOperator} className="w-full px-4 py-2 rounded bg-indigo-600 text-white">Suggest Chain</button></div>;
        </div>;
        {suggestion && (;"
          <div className="text-sm mt-2">;
            <div>;"
              <span className="text-gray-500">Recommendation:</span> <b>{suggestion && suggestion.recommendation?.chain?.name}</b>;
            </div>;
            {suggestion && suggestion.alternatives && (;'"
              <div className="text-gray-500">Alternatives: {suggestion && suggestion.alternatives.map((a: any) => a && a.chain.name).join(', ')}</div>;
  return ("
    <div className="space-y-8">"
      <section className="space-y-2">"
        <h1 className="text-2xl font-bold">ZION$ Integrations</h1>"
        <p className="text-gray-600 dark:text-gray-300">Omnichain transfers via LayerZero and DePIN rewards.</p>
      </section>"
      <section className="space-y-4">
        <ClientOnlyBridge />
      </section>"
      <section className="space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800">"
        <h2 className="text-lg font-semibold">DePIN Hook</h2>"
        <p className="text-sm text-gray-600 dark:text-gray-300">Plug into DIMO, Helium, Hivemapper to reward ZION$ for compute, IoT jobs, and data streaming.</p>"
        <div className="flex gap-2">'"
          <button onClick={syncDepin} className="px-4 py-2 rounded bg-purple-600 text-white">{depinsSyncing ? 'Syncing…' : 'Sync DePIN Rewards'}</button>"
          {!account && <button onClick={connect} className="px-4 py-2 rounded border">Connect Wallet</button>}
        </div>
        {rewards && ("
          <div className="mt-3 space-y-2 text-sm">
            {rewards.map((r, i) => ("
              <div key={i} className="flex items-center justify-between">
                <span>{r.network} — {r.reason}</span>"
                <span className="font-medium">+{r.points} ZION$</span>
=======
        {suggestion && (<div className='text-sm mt-2'    />;}
            <div    />;}
              <span className='text-gray-500'    />Recommendation: </span>{' '}
              <b    />{suggestion && suggestion.recommendation?.chain?.nam}
}</b>;
            </div>;
            {suggestion && suggestion.alternatives && (<div className='text-gray-500'    />;}
                Alternatives: {' }
}
                {suggestion && suggestion.alternatives;}
                  .map((a: any) => a && a.chain.name).join(', ')}
              </div>            )}          </div>;"
          <div className=\"flex flex-col gap-1\"    />;"
            <label className=\"text-xs text-gray-500\" htmlFor=\"input-Stake (USD)\"    />Stake (USD)</label>;"
            <input value={stake} onChange={(e) =    /> setStake(e && e.target.value)} placeholder=\"e && e.g., 1000\" className=\"border rounded px-3 py-2 bg-white dark:bg-black\" />;
          </div>;"
          <div className=\"flex items-end\"    /><button onClick={runOperator} className=\"w-full px-4 py-2 rounded bg-indigo-600 text-white\"    />Suggest Chain</button></div>;
        </div>;"
        {suggestion && (<div className=\"text-sm mt-2\"    />;
            <div    />;}"
              <span className=\"text-gray-500\"    />Recommendation: </span> <b    />{suggestion && suggestion.recommendation?.chain?.nam}
}</b>;
            </div>;"
            {suggestion && suggestion.alternatives && (<div className=\"text-gray-500\"    />Alternatives: {suggestion && suggestion.alternatives.map((a: any) => a && a.chain.name).join(', ')}</div>;"
  return (<div className=\"space-y-8\"    />;"
      <section className=\"space-y-2\"    />;"
        <h1 className=\"text-2xl font-bold\"    />ZION$ Integrations</h1>;"
        <p className=\"text-gray-600 dark:text-gray-300\"    />Omnichain transfers via LayerZero and DePIN rewards.</p>;
      </section>;"
      <section className=\"space-y-4\"    />;
        <ClientOnlyBridge    />;
      </section>;"
      <section className=\"space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800\"    />;"
        <h2 className=\"text-lg font-semibold\"    />DePIN Hook</h2>;"
        <p className=\"text-sm text-gray-600 dark:text-gray-300\"    />Plug into DIMO, Helium, Hivemapper to reward ZION$ for compute, IoT jobs, and data streaming.</p>;"
        <div className=\"flex gap-2\"    />;"
          <button onClick={syncDepin} className=\"px-4 py-2 rounded bg-purple-600 text-white\"    />{depinsSyncing ? 'Syncing…' : 'Sync DePIN Rewards'}</button>;"
          {!account && <button onClick={connect} className=\"px-4 py-2 rounded border\"    />Connect Wallet</button>}
        </div>;"
        {rewards && (<div className=\"mt-3 space-y-2 text-sm\"    />;}"
            {rewards.map((r, i) => (<div key={i} className=\"flex items-center justify-between\"    />;
                <span    />{r.network} — {r.reason}</span>;"
                <span className=\"font-medium\"    />+{r.points} ZION$</span>;
>>>>>>> origin/chore/fix-lint-and-merge
            ))}

          </div>
        )}
<<<<<<< HEAD
      </section>"
          <div className="flex flex-col gap-1">"
            <label className="text-xs text-gray-500" htmlFor="input-Stake (USD)">Stake (USD)</label>"
            <input value={stake} onChange={(e) => setStake(e.target.value)} placeholder="e.g., 1000" className="border rounded px-3 py-2 bg-white dark:bg-black" />
          </div>"
          <div className="flex items-end"><button onClick={runOperator} className="w-full px-4 py-2 rounded bg-indigo-600 text-white">Suggest Chain</button></div>
        </div>
        {suggestion && ("
          <div className="text-sm mt-2">
            <div>"
              <span className="text-gray-500">Recommendation:</span> <b>{suggestion.recommendation?.chain?.name}</b>
            </div>
            {suggestion.alternatives && ('"
              <div className="text-gray-500">Alternatives: {suggestion.alternatives.map((a: any) => a.chain.name).join(', ')}</div>
=======
              </div>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            ))}
          </div>
        )}

            <input value={stake} onChange={(e) => setStake(e.target.value)} placeholder=e.g., 1000" className="border rounded px-3 py-2 bg-white dark:bg-black />
          </div>
          <div className="flex items-end"><button onClick={runOperator} className=w-full px-4 py-2 rounded bg-indigo-600 text-white>Suggest Chain</button></div>
        </div>
        {suggestion && ("
          <div className="text-sm mt-2>



=======
      </section>
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

<<<<<<< HEAD

<section className='space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800'    />
        <h2 className='text-lg font-semibold'    />Operator AI Actions</h2>
        <p className='text-sm text-gray-600 dark:text-gray-300'    />
          Based on your region and stake, we suggest the best chain for ZION$.
        </p>
        <div className='grid grid-cols-1 md: grid-cols-3 gap-3'    />
          <div className='flex flex-col gap-1'    />
            <label className='text-xs text-gray-500'    />Region</label>
            <input;
>>>>>>> origin/chore/fix-lint-and-merge
value={region}
              onChange={e =    /> setRegion(e.target.value}
}
<<<<<<< HEAD

          </div>
          <div className=flex items-end"><button onClick={runOperator} className="w-full px-4 py-2 rounded bg-indigo-600 text-white>Suggest Chain</button></div>
=======
      <section className="space-y-3 p-4 border rounded border-gray-200 dark:border-gray-800">
        <h2 className="text-lg font-semibold">Operator AI Actions</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">Based on your region and stake, we suggest the best chain for ZION$.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500" htmlFor="input-Region">Region</label>
            <input value={region} onChange={(e) => setRegion(e.target.value)} placeholder="e.g., US, EU, APAC" className="border rounded px-3 py-2 bg-white dark:bg-black" />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        </div>
        {suggestion && (
          <div className="text-sm mt-2">
            <div>
              <span className='text-gray-500'>"Recommendation":</span>{' '}'
              <b>{suggestion.recommendation?.chain?.name}</b>
            </div>
            {suggestion.alternatives && (
              <div className="text-gray-500">Alternatives: {suggestion.alternatives.map((a: any) => a.chain.name).join(', ')}</div>
<<<<<<< HEAD
'
import dynamic from 'next / dynamic';'
import React, { useEffect, useState } from 'react';'
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

  );

  );
}
  );
;
  );
=======

=======

  );

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import dynamic from 'next / dynamic';
import React, { useEffect, useState } from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { use_wallet } from '../../hooks / use_wallet';
import {}
  fetchDepinActivities,
  calculate_rewards,
  DepinReward,';
} from '../../utils / depins';'
import { CHAINS } from '../../utils / chains';
;
const ClientOnlyBridge = dynamic ('
  () => import ('../../components / ui / BridgeForm'),
  { ssr: false }';
);import { fetchDepinActivities, calculate_rewards, DepinReward } from '../../utils / depins';'
import { CHAINS } from '../../utils / chains';'
const ClientOnlyBridge = dynamic (() => import ('../../components / ui / BridgeForm'), { ssr: false }),
export default /**;
 * TokenIntegrationsPage - Function description;
 */
function TokenIntegrationsPage() {}
  const { account, connect } = use_wallet ();'
  const [region, set_region] = useState ();'
  const [stake, set_stake] = useState (');
  const [suggestion, set_suggestion] = useState < any>(null);
  const [rewards, set_rewards] = useState < DepinReward[] | null>(null);
  const [depins_syncing, setDepinsSyncing] = useState (false);
  async /**
 * sync_depin - Function description;
 */
function sync_depin() {}
    // Check condition;
if ( {) {}
  $2;
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
 * run_operator - Function description;
 */
function run_operator() { return null; }
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ region, stake_usd: stake }),
    });
    const data = await res.json ();
    set_suggestion (data);
  }
  return (
    <div className='space - y-8'>;
      <section className=space - y-2'>;'
        <h1 className=text - 2xl font - bold>ZION$ Integrations</h1>;'
        <p className='text - gray - 600 dark:text - gray - 300>;
          Omnichain transfers via LayerZero and DePIN rewards.;
        </p>;
      </section>;
      <section className='space - y-4'>;
        <ClientOnlyBridge />;
      </section>;
      <section className=space - y-3 p - 4 border rounded border - gray - 200 dark:border - gray - 800'>;'
        <h2 className=text - lg font - semibold>DePIN Hook</h2>;'
        <p className='text - sm text - gray - 600 dark:text - gray - 300>;
          Plug into DIMO, Helium, Hivemapper to reward ZION$ for compute, IoT;
          jobs, and data streaming.;
        </p>;
        <div className='flex gap - 2'>;
          <button;
            on_click={sync_depin}
            className=px - 4 py - 2 rounded bg - purple - 600 text - white';
          >;'
            {depins_syncing ? Syncing… : 'Sync DePIN Rewards'}
          </button>;
          {!account && (
            <button on_click={connect} className=px - 4 py - 2 rounded border'>;
              Connect Wallet;
            </button>)}
        </div>;
        {rewards && ('
          <div className=mt - 3 space - y-2 text - sm>;
            {rewards.map ((r, i) => ('
              <div key={i} className='flex items - center justify - between>;
                <span>;
                  {r.network} — {r.reason}
                </span>;
                <span className='font - medium'>+{r.points} ZION$</span>              </div>    const data = await res.json ();
    set_suggestion (data);
  }
  return (
    <div className="space - y-8">;
      <section className=space - y-2">;"
        <h1 className=text - 2xl font - bold>ZION$ Integrations</h1>;"
        <p className="text - gray - 600 dark:text - gray - 300>Omnichain transfers via LayerZero and DePIN rewards.</p>;
      </section>;
      <section className="space - y-4">;
        <ClientOnlyBridge />;
      </section>;"
      <section className="space - y-3 p - 4 border rounded border - gray - 200 dark:border - gray - 800">;"
        <h2 className="text - lg font - semibold">DePIN Hook</h2>;"
        <p className="text - sm text - gray - 600 dark:text - gray - 300">Plug into DIMO, Helium, Hivemapper to reward ZION$ for compute, IoT jobs, and data streaming.</p>;"
        <div className="flex gap - 2">;'"
          <button on_click={sync_depin} className="px - 4 py - 2 rounded bg - purple - 600 text - white">{depins_syncing ? 'Syncing…' : 'Sync DePIN Rewards'}</button>;"
          {!account && <button on_click={connect} className="px - 4 py - 2 rounded border">Connect Wallet</button>}
        </div>;
        {rewards && ("
          <div className="mt - 3 space - y-2 text - sm>;
            {rewards.map ((r, i) => (
              <div key={i} className="flex items - center justify - between">;
                <span>{r.network} — {r.reason}</span>;
                <span className=font - medium">+{r.points} ZION$</span>;
              </div>))}
          </div>)}
      </section>;
      <section className=space - y-3 p - 4 border rounded border - gray - 200 dark:border - gray - 800'>;'
        <h2 className=text - lg font - semibold>Operator AI Actions</h2>;'
        <p className='text - sm text - gray - 600 dark:text - gray - 300>;
          Based on your region and stake, we suggest the best chain for ZION$.;
        </p>;
        <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 3'>;
          <div className=flex flex - col gap - 1'>;'
            <label className=text - xs text - gray - 500>Region</label>;
            <input;
              value={region}
              on_change={e => set_region (e.target.value)}'
              placeholder='e.g., US, EU, APAC;
              className='border rounded px - 3 py - 2 bg - white dark:bg - black';
            />;
          </div>;
          <div className=flex flex - col gap - 1'>;'
            <label className=text - xs text - gray - 500>Stake (USD)</label>;
            <input;
              value={stake}
              on_change={e => set_stake (e.target.value)}'
              placeholder='e.g., 1000;
              className='border rounded px - 3 py - 2 bg - white dark:bg - black';
            />;
          </div>;
          <div className=flex items - end'>;
            <button;
              on_click={run_operator}'
              className=w - full px - 4 py - 2 rounded bg - indigo - 600 text - white;
            >;
              Suggest Chain;
            </button>;
          </div>;
        </div>;
        {suggestion && ('
          <div className='text - sm mt - 2'>;
            <div>;'
              <span className='text - gray - 500'>Recommendation:</span>{' '}
              <b>{suggestion.recommendation?.chain?.name}</b>;
            </div>;
            {suggestion.alternatives && ('
              <div className='text - gray - 500'>;'
                Alternatives:{' '}
                {suggestion.alternatives;
                  .map ((array: any) => a.chain.name);
                  .join (', ')}
              </div>            )}          </div>;"
          <div className=flex flex - col gap - 1>;"
            <label className="text - xs text - gray - 500 html_for=input - Stake (USD)">Stake (USD)</label>;"
            <input value={stake} on_change={(e) => set_stake (e.target.value)} placeholder=e.g., 1000 className="border rounded px - 3 py - 2 bg - white dark:bg - black" />;
          </div>;
          <div className=flex items - end"><button on_click={run_operator} className="w - full px - 4 py - 2 rounded bg - indigo - 600 text - white>Suggest Chain</button></div>;
        </div>;
        {suggestion && (
          <div className="text - sm mt - 2">;
            <div>;"
              <span className="text - gray - 500">Recommendation:</span> <b>{suggestion.recommendation?.chain?.name}</b>;
            </div>;
            {suggestion.alternatives && ('"
              <div className="text - gray - 500">Alternatives: {suggestion.alternatives.map ((array: any) => a.chain.name).join (', ')}</div>)}
          </div>)}
      </section>;
      <section className=space - y-2 text - xs text - gray - 500'>;
        <div > Security</div>;'
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
        <ul className=list - disc ml - 5 space - y-1">;
          <li > Onchain tx logs (client + API echo)</li>;
          <li > Rate limits (client + API token bucket)</li>;
          <li > Burn - and - mint model via LayerZero OFT (requires token addresses configured)</li>;
        </ul>;
      </section>;
    </div>);
            )}
          </div>;
          </div>
        )}
      </section>


          <li>Onchain tx logs (client + API echo)</li>
          <li>Rate limits (client + API token bucket)</li>
          <li>
            Burn-and-mint model via LayerZero OFT (requires token addresses,
=======
              placeholder='e.g., US, EU, APAC'
              className='border rounded px-3 py-2 bg-white dark: bg-black'
            />
          </div>
          <div className='flex flex-col gap-1'    />
            <label className='text-xs text-gray-500'    />Stake (USD)</label>
            <input;
value={stake}
              onChange={e =    /> setStake(e.target.value}
}
<<<<<<< HEAD
              placeholder='e.g., 1000'
              className='border rounded px-3 py-2 bg-white dark: bg-black'
            />
          </div>
          <div className='flex items-end'    />
            <button;
onClick={runOperator}
              className='w-full px-4 py-2 rounded bg-indigo-600 text-white'
                />
              Suggest Chain;
            </button>
          </div>
        </div>
        {suggestion && (
          <div className='text-sm mt-2'    />}
            <div    />}
              <span className='text-gray-500'    />Recommendation:</span>{' '}
              <b    />{suggestion.recommendation?.chain?.name}</b>
            </div>
            {suggestion.alternatives && (
              <div className='text-gray-500'    />}
                Alternatives:{' }
}
                {suggestion.alternatives}
                  .map((a: any) => a.chain.name)}
                  .join(', ')}
              </div>
            )}
          </div>;
        )}

      </section>

<section className='space-y-2 text-xs text-gray-500'    />
        <div    />Security</div>
        <ul className='list-disc ml-5 space-y-1'    />
          <li    />Onchain tx logs (client + API echo)</li>
          <li    />Rate limits (client + API token bucket)</li>
          <li    />
            Burn-and-mint model via LayerZero OFT (requires token addresses;
>>>>>>> origin/chore/fix-lint-and-merge
configured)
          </li>
        </ul>
      </section>
    </div>
<<<<<<< HEAD
  )
}
    </div>)</section>;
<section className='space-y-2 text-xs text-gray-500'>;
        <div>Security</div>;
        <ul className='list-disc ml-5 space-y-1'>;
          <li>Onchain tx logs (client + API echo)</li>;
          <li>Rate limits (client + API token bucket)</li>;
          <li>Burn-and-mint model via LayerZero OFT (requires token addresses;
            configured)</li>;
        </ul>;
      </section>;
    </div>;
    </div>);
}
  )}

"
=======
>>>>>>> origin/chore/fix-lint-and-merge
  );
}
<<<<<<< HEAD
'"
  );
origin/cursor/automate-test-improve-and-merge-code-2533
}

=======

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
