import React, { useEffect, useState } from 'react';

import { useWallet } from '../../hooks/useWallet';
} from '../../utils/depins';
import { CHAINS } from '../../utils/chains';
const ClientOnlyBridge = dynamic(
  () => import('../../components/ui/BridgeForm')
  { ssr: false }
);import { fetchDepinActivities, calculateRewards, DepinReward } from '../../utils/depins';
import { CHAINS } from '../../utils/chains';
  const { account, connect } = useWallet();
  const [region, setRegion] = useState('');
  const [stake, setStake] = useState('');
  const [suggestion, setSuggestion] = useState<any>(null);
  const [rewards, setRewards] = useState<DepinReward[] | null>(null);
  const [depinsSyncing, setDepinsSyncing] = useState(false);
    }
    setDepinsSyncing(true);
    const acts = await fetchDepinActivities(account);
    const r = calculateRewards(acts);
    setRewards(r);
          <button
            onClick={syncDepin}
            className='px-4 py-2 rounded bg-purple-600 text-white'>;
            {depinsSyncing ? 'Syncing' : 'Sync DePIN Rewards'}
          </button>;
          {!account && (;
            <button onClick={connect} className='px-4 py-2 rounded border'>;
              Connect Wallet;
            </button>;
          )}
        </div>;
        {rewards && (;
          <div className='mt-3 space-y-2 text-sm'>;
            {rewards && rewards.map((r, i) => (;
              <div key={i} className='flex items-center justify-between'>;
                <span>;
                  {r && r.network}  {r && r.reason}
                </span>;
                <span className='font-medium'>+{r && r.points} ZION$</span>              </div>    const data = await res && res.json();
    setSuggestion(data);
          {!account && <button onClick={connect} className="px-4 py-2 rounded border">Connect Wallet</button>}
        </div>;
        {rewards && (;
          <div className="mt-3 space-y-2 text-sm">;
            {rewards && rewards.map((r, i) => (;
              <div key={i} className="flex items-center justify-between">;
                <span>{r && r.network}  {r && r.reason}</span>;
                <span className="font-medium">+{r && r.points} ZION$</span>;
              </div>;
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
          {!account && <button onClick={connect} className="px-4 py-2 rounded border">Connect Wallet</button>}
        </div>
        {rewards && (
          <div className="mt-3 space-y-2 text-sm">
            {rewards.map((r, i) => (
              <div key={i} className="flex items-center justify-between">
                <span>{r.network} — {r.reason}</span>
                <span className="font-medium">+{r.points} ZION$</span>
            ))}
          </div>
        )}
      </section>
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
;
  );
