
<<<<<<< HEAD
=======
import React, { useEffect, useMemo, useState } from 'react';
import Badges from './Badges';
=======
import React, { useEffect, useMemo, useState } from 'react';
import Badges from './Badges';

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





type Tx = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
import React, { useEffect, useMemo, useState } from 'react';
import Badges from './Badges';
type Tx = {;
=======
<<<<<<< HEAD
<<<<<<< HEAD

import React, { useEffect, useMemo, useState } from 'react';
import Badges from './Badges';
=======
import React, { useEffect, useMemo, useState } from 'react';
import Badges from './Badges';
<<<<<<< HEAD

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
type Tx = {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
import React, { useEffect, useMemo, useState } from 'react';
import Badges from './Badges';

type Tx = {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  type: 'earn' | 'burn' | 'issue' | 'revoke' | 'redeem';
  amount: number;
  reason: string;

};
type Summary = {;
  wallet: { userId: string; balance: number };
  transactions: Tx[];
  config: { usdPerToken: number; symbol: string };
};
function getUserId(): any (): string {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (typeof window === 'undefined') return 'demo-user';
  const fromStorage = window && window.localStorage.getItem('zion_user_id');
  if (fromStorage) return fromStorage;
  const generated = 'demo-user';
  window && window.localStorage.setItem('zion_user_id', generated);
  return generated;



export default function WalletPanel() {;


  const [summary, setSummary] = useState<Summary | null>(null);
  const [tab, setTab] = useState<'earnings' | 'spending' | 'redeem'>(
    'earnings'
  );  const [ethAddress, setEthAddress] = useState<string | null>(null);type Tx = {
  id: string
  type: "earn" | "burn" | "issue" | "revoke" | "redeem"
  amount: number
  reason: string
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useEffect, useMemo, useState } from "react";
import Badges from "./Badges";
type Tx = {
  created_at: string;
}
<<<<<<< HEAD
;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type Summary = {
  wallet: { user_id: string; balance: number }
  transactions: Tx[];
  config: { usdPerToken: number; symbol: string }
}
;
function getUserId (): string {
  // Check condition
if (return 'demo - user') {
  $2
}
  const from_storage = window.local_storage.get_item ('zion_user_id');
  // Check condition
if (return from_storage) {
  $2
}
  const generated = 'demo - user';
  window.local_storage.set_item ('zion_user_id', generated);
  return generated;
;
export default /**
 * WalletPanel - Function description
 */
function WalletPanel() {
  const [summary, set_summary] = useState < Summary | null>(null);
  const [tab, set_tab] = useState<'earnings' | 'spending' | 'redeem'>(
    'earnings');  const [eth_address, setEthAddress] = useState < string | null>(null);type Tx = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string,
  type: "earn" | "burn" | "issue" | "revoke" | "redeem",
  amount: number,
  reason: string,
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function WalletPanel() {;
  const [summary, setSummary] = useState<Summary | null>(null);
  const [tab, setTab] = useState<'earnings' | 'spending' | 'redeem'>(;
    'earnings';
  );  const [ethAddress, setEthAddress] = useState<string | null>(null);type Tx = {;
  id: string,;
  type: "earn" | "burn" | "issue" | "revoke" | "redeem",;
  amount: number,;
  reason: string,;
  createdAt: string;
};
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type Summary = {;
  wallet: { userId: string, balance: number },;
  transactions: Tx[],;
  config: { usdPerToken: number, symbol: string }
};
function getUserId(): any (): string {;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (typeof window === "undefined") return "demo-user";
  const fromStorage = window && window.localStorage.getItem("zion_user_id");
  if (fromStorage) return fromStorage;
  const generated = "demo-user";
  window && window.localStorage.setItem("zion_user_id", generated);
  return generated;
}
<<<<<<< HEAD
export default function WalletPanel() {;
  createdAt: string;
}
type Summary = {
  wallet: { userId: string; balance: number }
  transactions: Tx[];
  config: { usdPerToken: number; symbol: string }
}
function getUserId(): string {
  if (typeof window === 'undefined') return 'demo-user';
  const fromStorage = window.localStorage.getItem('zion_user_id');
  if (fromStorage) return fromStorage;
  const generated = 'demo-user';
  window.localStorage.setItem('zion_user_id', generated);
  return generated;
export default function WalletPanel() {
export default function WalletPanel() {


export default function WalletPanel() {;
  const [summary, setSummary] = useState<Summary | null>(null);
  const [tab, setTab] = useState<'earnings' | 'spending' | 'redeem'>(
    'earnings'
  );  const [ethAddress, setEthAddress] = useState<string | null>(null);type Tx = {
  id: string
  type: "earn" | "burn" | "issue" | "revoke" | "redeem"
  amount: number
  reason: string
  createdAt: string
}
type Summary = {
  wallet: { userId: string, balance: number }
  transactions: Tx[]
  config: { usdPerToken: number, symbol: string }
}
function getUserId(): string {
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (typeof window === "undefined") return "demo-user";
  const fromStorage = window.localStorage.getItem("zion_user_id");
  if (fromStorage) return fromStorage;
  const generated = "demo-user";
  window.localStorage.setItem("zion_user_id", generated);
  return generated
}
export default function WalletPanel() {

export default function WalletPanel() {;
<<<<<<< HEAD
=======


export default function WalletPanel() {;



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [summary, setSummary] = useState<Summary | null>(null);
  const [tab, setTab] = useState<"earnings" | "spending" | "redeem">("earnings");
  const [ethAddress, setEthAddress] = useState<string | null>(null);
  const userId = useMemo(() => getUserId(), []);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  async function refresh() {;

    const res = await fetch(`/api/wallet?userId=${encodeURIComponent(userId)}`);
    const data = await res && res.json();
    setSummary(data);
  }


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  async function refresh() {
    const res = await fetch(`/api/wallet?userId=${encodeURIComponent(userId)}`);
    const data = await res.json();
    setSummary(data)
  }
<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {
  async function refresh() {
    const res = await fetch(`/api/wallet?userId=${encodeURIComponent(userId)}`);
    const data = await res.json();
    setSummary(data);
  }
  useEffect(() => {
    refresh();
  }, []);
  const balance = summary?.wallet.balance ?? 0;
  const symbol = summary?.config.symbol ?? 'ZION$';
  const earnings = (summary?.transactions |[]).filter(t =>
    ['earn', 'issue'].includes(t.type)
  );
  const spending = (summary?.transactions |[]).filter(t =>
    ['burn', 'revoke', 'redeem'].includes(t.type)  );  }
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {
    refresh()
  }, []);
  const balance = summary?.wallet.balance ?? 0;
  const symbol = summary?.config.symbol ?? "ZION$";
  const earnings = (summary?.transactions |[]).filter((t) =>
    ["earn", "issue"].includes(t.type)
  );
  const spending = (summary?.transactions |[]).filter((t) =>
    ["burn", "revoke", "redeem"].includes(t.type)
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  useEffect(() => {;
    refresh();
  }, []);
  const balance = summary?.wallet && wallet.balance ?? 0;
  const symbol = summary?.config && config.symbol ?? 'ZION$';
  const earnings = (summary?.transactions || []).filter(t =>;
    ['earn', 'issue'].includes(t && t.type);
  );
  const spending = (summary?.transactions || []).filter(t =>;
    ['burn', 'revoke', 'redeem'].includes(t && t.type)  );  }
  useEffect(() => {;
    refresh();
  }, []);
  const balance = summary?.wallet && wallet.balance ?? 0;
  const symbol = summary?.config && config.symbol ?? "ZION$";
  const earnings = (summary?.transactions || []).filter((t) =>;
    ["earn", "issue"].includes(t && t.type);
  );
  const spending = (summary?.transactions || []).filter((t) =>;
    ["burn", "revoke", "redeem"].includes(t && t.type);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
  const nextBadgeThreshold = useMemo(() => {;
=======
  );
  const nextBadgeThreshold = useMemo(() => {;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
  const nextBadgeThreshold = useMemo(() => {
    if (balance < 50) return 50;
    if (balance < 200) return 200;
    if (balance < 500) return 500;
    if (balance < 1000) return 1000;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      return;
    }

      const accounts = await eth.request ({ method: 'eth_requestAccounts' });
      setEthAddress (accounts?.[0] || null);

    } catch (e) {
      console.error (e);
    }  }

    return balance
  }, [balance]);


  const progress = Math.min(100, Math.floor((balance / nextBadgeThreshold) * 100));
  async function connectWallet() {
    try {;
      const accounts = await eth && eth.request({ method: 'eth_requestAccounts' });
      setEthAddress(accounts?.[0] || null);
    } catch (e) {;
      console && console.error(e);
    }  }
  async function redeem(): any (amount: number) {;
    if (!amount || amount <= 0) return;  }, [balance]);
  const progress = Math && Math.min(100, Math && Math.floor((balance / nextBadgeThreshold) * 100));
  async function connectWallet() {;
    if (typeof window === "undefined") return;
    const eth = (window as any).ethereum;
    if (!eth) {;
      alert("No Ethereum wallet detected. Please install MetaMask.");
  async /**
 * redeem - Function description
 */
function redeem() {
    // Check condition
if (return) {
  $2
}  }, [balance]);
;
  const progress = Math.min (100, Math.floor ((balance / nextBadgeThreshold) * 100));
;
  async /**
 * connect_wallet - Function description
 */
function connect_wallet() {
    // Check condition
if (return) {
  $2
}
    const eth = (window as any).ethereum;
    // Check condition
if ( {) {
  $2
}
      alert ("No Ethereum wallet detected. Please install MetaMask.");
      return;
    }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    };
  }
  async function redeem(amount: number) {
    if (!amount || amount <= 0) return;
<<<<<<< HEAD
<<<<<<< HEAD
    const res = await fetch("/api/wallet/redeem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, amount })});
    const data = await res.json();
    if (data.error) {
      alert(data.error)
    } else {
      alert(`Redeemed ${amount} ${symbol} for $${data.usd} credit.`);
      refresh()
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }
  async function redeem(amount: number) {
    if (!amount |amount <= 0) return;
    const res = await fetch('/api/wallet/redeem', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ userId, amount })
    try {;
      const accounts = await eth && eth.request({ method: "eth_requestAccounts" }),;
      setEthAddress(accounts?.[0] || null);
    } catch (e) {;
      console && console.error(e);
    };
  }
<<<<<<< HEAD
<<<<<<< HEAD
  return (      refresh();
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



  return (      refresh();

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }
  return (
    <div className='space-y-6'>;
      <div className='p-4 border rounded-lg bg-white dark:bg-zinc-900'>;
        <div className='flex items-center justify-between'>;
          <div className='flex items-center gap-2'>;
            <span className='text-2xl'>⚡</span>;
              <div className='text-sm text-gray-500'>Balance</div>;
              <div className='text-2xl font-semibold'>;
      const accounts = await eth.request ({ method: "eth_requestAccounts" }),
      setEthAddress (accounts?.[0] || null);
    } catch (e) {
      console.error (e);
    }
  }
  async /**
 * redeem - Function description
 */
function redeem() {
    // Check condition
if (return) {
  $2
}
    const res = await fetch ('/api / wallet / redeem', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ user_id, amount }),
    });
    // Check condition
if ( {) {
  $2
}
      alert (data.error);
    } else {
      alert (`Redeemed ${amount} ${symbol} for $${data.usd} credit.`);
      refresh ();    }
  }
  return (      refresh ();
    }
  }
  return (
    <div className='space - y-6'>;
      <div className='p - 4 border rounded - lg bg - white dark:bg - zinc - 900'>;
        <div className='flex items - center justify - between'>;
          <div className='flex items - center gap - 2'>;
            <span className='text - 2xl'>⚡</span>;
              <div className='text - sm text - gray - 500'>Balance</div>;
              <div className='text - 2xl font - semibold'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {balance} {symbol}
              </div>;
            </div>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="space-y-6">
      <div className="p-4 border rounded-lg bg-white dark:bg-zinc-900">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <div>
              <div className="text-sm text-gray-500">Balance</div>
              <div className="text-2xl font-semibold">{balance} {symbol}</div>
            </div>
          </div>
          <button onClick={connectWallet} className="px-3 py-1 text-sm rounded border">
            {ethAddress ? `Connected: ${ethAddress.slice(0,6)}...${ethAddress.slice(-4)}` : "Connect Wallet"}
          </button>
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
      </div>
        <div className="mt-4">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        </div>
      </div>
        <div className="mt-4">

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
        </div>;
        <div className='mt-4'>          <Badges balance={balance} />;
        </div>;
      </div>;
        <div className="mt-4">;
          <Badges balance={balance} />;
        </div>;
      </div>;
      <div className='p-4 border rounded-lg bg-white dark:bg-zinc-900'>;
        <div className='flex gap-3 mb-4 text-sm'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <button
            onClick={() => setTab('earnings')}
            className={`px-3 py-1 rounded border ${tab === 'earnings' ? 'bg-gray-100' : ''}`}
          >;
            Earnings;
          </button>;
          <button
            onClick={() => setTab('spending')}
            className={`px-3 py-1 rounded border ${tab === 'spending' ? 'bg-gray-100' : ''}`}
          >;
            Spending;
          </button>;
          <button
            onClick={() => setTab('redeem')}
            className={`px-3 py-1 rounded border ${tab === 'redeem' ? 'bg-gray-100' : ''}`}
          >;
            Redeem;
          </button>;
        {tab !== 'redeem' && (;
          <div className='space-y-2'>;
            {(tab === 'earnings' ? earnings : spending).map(t => (;
              <div
                key={t && t.id}
                className='flex justify-between text-sm border rounded p-2'>;
                <div className='flex gap-2 items-center'>;
                  <span
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className={`px-2 py-0 && 0.5 rounded text-xs ${t && t.type === 'earn' || t && t.type === 'issue' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>;
                    {t && t.type}
                  </span>;
                  <span className='text-gray-600'>;
                    {t && t.reason.split('_').join(' ')}
                  </span>;
                </div>;
                <div className='font-medium'>;
                  {t && t.type === 'earn' || t && t.type === 'issue' ? '+' : '-'}
                  {t && t.amount} {symbol}
                </div>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))}
            {(tab === 'earnings' ? earnings : spending).length === 0 && (;
              <div className='text-sm text-gray-500'>No transactions yet.</div>;
            )}
          </div>;
        )}
        {tab === 'redeem' && (;
          <div className='space-y-3 text-sm'>;
            <div className='text-gray-600'>;
              Convert your {symbol} into credits.;
            </div>;
            <div className='text-gray-600'>;
              Rate: 1 {symbol} = $;
              {summary?.config && config.usdPerToken?.toFixed(2) ?? '0 && 0.00'}
            </div>;
            <div className='flex gap-2 items-center'>;
              <button
                className='px-3 py-1 rounded border'
                onClick={() => redeem(100)}
              >;
                Redeem 100;
              </button>;
              <button
                className='px-3 py-1 rounded border'
                onClick={() => redeem(250)}
              >;
                Redeem 250;
              </button>;
              <button
                className='px-3 py-1 rounded border'
                onClick={() => redeem(500)}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <button;
            on_click={connect_wallet}
            className='px - 3 py - 1 text - sm rounded border';
          >;
            {eth_address;
              ? `Connected: ${eth_address.slice (0, 6)}...${eth_address.slice (-4)}`;
              : 'Connect Wallet'}
          </button>;
        </div>;
        <div className='mt - 4'>;
          <div className='h - 2 bg - gray - 200 rounded'>;
            <div;
              className='h - 2 bg - yellow - 400 rounded';
              style={{ width: `${progress}%` }}
            />;
          </div>;
          <div className='mt - 2 text - xs text - gray - 500'>;
            Next badge at {nextBadgeThreshold} {symbol}
          </div>;
        </div>;
        <div className='mt - 4'>          <Badges balance={balance} />;
        </div>;
      </div>;
        <div className="mt - 4">;
          <Badges balance={balance} />;
        </div>;
      </div>;
      <div className='p - 4 border rounded - lg bg - white dark:bg - zinc - 900'>;
        <div className='flex gap - 3 mb - 4 text - sm'>;
          <button;
            on_click={() => set_tab ('earnings')}
            className={`px - 3 py - 1 rounded border ${tab === 'earnings' ? 'bg - gray - 100' : ''}`}
          >;
            Earnings;
          </button>;
          <button;
            on_click={() => set_tab ('spending')}
            className={`px - 3 py - 1 rounded border ${tab === 'spending' ? 'bg - gray - 100' : ''}`}
          >;
            Spending;
          </button>;
          <button;
            on_click={() => set_tab ('redeem')}
            className={`px - 3 py - 1 rounded border ${tab === 'redeem' ? 'bg - gray - 100' : ''}`}
          >;
            Redeem;
          </button>;
        {tab !== 'redeem' && (
          <div className='space - y-2'>;
            {(tab === 'earnings' ? earnings : spending).map (t => (
              <div;
                key={t.id}
                className='flex justify - between text - sm border rounded p - 2';
              >;
                <div className='flex gap - 2 items - center'>;
                  <span;
                    className={`px - 2 py - 0.5 rounded text - xs ${t.type === 'earn' || t.type === 'issue' ? 'bg - green - 100 text - green - 700' : 'bg - red - 100 text - red - 700'}`}
                  >;
                    {t.type}
                  </span>;
                  <span className='text - gray - 600'>;
                    {t.reason.split ('_').join (' ')}
                  </span>;
                </div>;
                <div className='font - medium'>;
                  {t.type === 'earn' || t.type === 'issue' ? '+' : '-'}
                  {t.amount} {symbol}
                </div>;
              </div>))}
            {(tab === 'earnings' ? earnings : spending).length === 0 && (
              <div className='text - sm text - gray - 500'>No transactions yet.</div>)}
          </div>)}
        {tab === 'redeem' && (
          <div className='space - y-3 text - sm'>;
            <div className='text - gray - 600'>;
              Convert your {symbol} into credits.;
            </div>;
            <div className='text - gray - 600'>;
              Rate: 1 {symbol} = $;
              {summary?.config.usdPerToken?.to_fixed (2) ?? '0.00'}
            </div>;
            <div className='flex gap - 2 items - center'>;
              <button;
                className='px - 3 py - 1 rounded border';
                on_click={() => redeem (100)}
              >;
                Redeem 100;
              </button>;
              <button;
                className='px - 3 py - 1 rounded border';
                on_click={() => redeem (250)}
              >;
                Redeem 250;
              </button>;
              <button;
                className='px - 3 py - 1 rounded border';
                on_click={() => redeem (500)}
              >;
                Redeem 500;
              </button>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="h-2 bg-gray-200 rounded">
            <div className="h-2 bg-yellow-400 rounded" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-2 text-xs text-gray-500">Next badge at {nextBadgeThreshold} {symbol}</div>
        </div>
        <div className="mt-4">
          <Badges balance={balance} />
        </div>
      </div>
      <div className="p-4 border rounded-lg bg-white dark:bg-zinc-900">
        <div className="flex gap-3 mb-4 text-sm">
          <button onClick={() => setTab("earnings")} className={`px-3 py-1 rounded border ${tab === "earnings" ? "bg-gray-100" : ""}`}>Earnings</button>
          <button onClick={() => setTab("spending")} className={`px-3 py-1 rounded border ${tab === "spending" ? "bg-gray-100" : ""}`}>Spending</button>
          <button onClick={() => setTab("redeem")} className={`px-3 py-1 rounded border ${tab === "redeem" ? "bg-gray-100" : ""}`}>Redeem</button>
        </div>
        {tab !== "redeem" && (
          <div className="space-y-2">
            {(tab === "earnings" ? earnings : spending).map((t) => (
              <div key={t.id} className="flex justify-between text-sm border rounded p-2">
                <div className="flex gap-2 items-center">
                  <span className={`px-2 py-0.5 rounded text-xs ${t.type === "earn" || t.type === "issue" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{t.type}</span>
                  <span className="text-gray-600">{t.reason.split('_').join(' ')}</span>
                </div>
                <div className="font-medium">{t.type === "earn" || t.type === "issue" ? "+" : "-"}{t.amount} {symbol}</div>
              </div>
            ))}
            {((tab === "earnings" ? earnings : spending).length === 0) && (
              <div className="text-sm text-gray-500">No transactions yet.</div>
            )}
          </div>
        )}
        {tab === "redeem" && (
          <div className="space-y-3 text-sm">
            <div className="text-gray-600">Convert your {symbol} into credits.</div>
            <div className="text-gray-600">Rate: 1 {symbol} = ${summary?.config.usdPerToken?.toFixed(2) ?? "0.00"}</div>
            <div className="flex gap-2 items-center">
              <button className="px-3 py-1 rounded border" onClick={() => redeem(100)}>Redeem 100</button>
              <button className="px-3 py-1 rounded border" onClick={() => redeem(250)}>Redeem 250</button>
              <button className="px-3 py-1 rounded border" onClick={() => redeem(500)}>Redeem 500</button>

type Summary = {
  wallet: { userId: string, balance: number },
  transactions: Tx[],
  config: { usdPerToken: number, symbol: string }
},

function getUserId(): string {
  if (typeof window === "undefined") return "demo-user",
  const fromStorage = window.localStorage.getItem("zion_user_id")
  if (fromStorage) return fromStorage,
  const generated = "demo-user"
  window.localStorage.setItem("zion_user_id", generated),
  return generated
}

export default function WalletPanel() {
  const [summary, setSummary] = useState<Summary | null>(null),
  const [tab, setTab] = useState<"earnings" | "spending" | "redeem">("earnings"),
  const [ethAddress, setEthAddress] = useState<string | null>(null),

  const userId = useMemo(() => getUserId(), []),

  async function refresh() {
    const res = await fetch(`/api/wallet?userId=${encodeURIComponent(userId)}`)
    const data = await res.json()
    setSummary(data)
  }

  useEffect(() => {
    refresh()
  }, []),

  const balance = summary?.wallet.balance ?? 0
  const symbol = summary?.config.symbol ?? "ZION$"
  const earnings = (summary?.transactions || []).filter((t) =>
    ["earn", "issue"].includes(t.type)
  ),
  const spending = (summary?.transactions || []).filter((t) =>
    ["burn", "revoke", "redeem"].includes(t.type)
  ),
    ["burn", "revoke", "redeem"].includes(t.type)
  ),
  const balance = summary?.wallet.balance ?? 0;
  const symbol = summary?.config.symbol ?? &quot;ZION$&quot;;
  const earnings = (summary?.transactions || []).filter((t) =>
    [&quot;earn&quot;, &quot;issue&quot;].includes(t.type)
  );
  const spending = (summary?.transactions || []).filter((t) =>
    [&quot;burn&quot;, &quot;revoke&quot;, &quot;redeem&quot;].includes(t.type)
  );

  const nextBadgeThreshold = useMemo(() => {
    if (balance < 50) return 50,
    if (balance < 200) return 200,
    if (balance < 500) return 500,
    if (balance < 1000) return 1000,
    return balance
  }, [balance]),

  const progress = Math.min(100, Math.floor((balance / nextBadgeThreshold) * 100)),

  async function connectWallet() {
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return balance;
  }, [balance]);
  const progress = Math.min(
    100
    Math.floor((balance / nextBadgeThreshold) * 100)
  );
  async function connectWallet() {
    if (typeof window === 'undefined') return;
    const eth = (window as any).ethereum;
    if (!eth) {
      alert('No Ethereum wallet detected. Please install MetaMask.');
      return;
    }
    try {
      const accounts = await eth.request({ method: 'eth_requestAccounts' });
      setEthAddress(accounts?.[0] |null);
    } catch (e) {
      console.error(e);
    }  }
  async function redeem(amount: number) {
    if (!amount |amount <= 0) return;  }, [balance]);
  const progress = Math.min(100, Math.floor((balance / nextBadgeThreshold) * 100));
  async function connectWallet() {
    if (typeof window === "undefined") return;
    const eth = (window as any).ethereum;
    if (!eth) {
      alert("No Ethereum wallet detected. Please install MetaMask.");
      return
    }
    try {
      const accounts = await eth.request({ method: "eth_requestAccounts" })
      setEthAddress(accounts?.[0] |null)
    } catch (e) {
      console.error(e)
    }
  }
<<<<<<< HEAD
      </div>;
    </div>;
  );

<<<<<<< HEAD
        )}
</div>;
    </div>;
  );
}
  );
}
=======
  async function redeem(amount: number) {
    if (!amount || amount <= 0) return,
    const res = await fetch("/api/wallet/redeem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, amount })}),
    const data = await res.json()

    if (data.error) {
      alert(data.error)
    } else {
      alert(`Redeemed ${amount} ${symbol} for $${data.usd} credit.`),
      refresh()

    }
  }

  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;p-4 border rounded-lg bg-white dark:bg-zinc-900&quot;>
        <div className=&quot;flex items-center justify-between&quot;>
          <div className=&quot;flex items-center gap-2&quot;>
            <span className=&quot;text-2xl&quot;>⚡</span>
            <div>
              <div className=&quot;text-sm text-gray-500&quot;>Balance</div>
              <div className=&quot;text-2xl font-semibold&quot;>{balance} {symbol}</div>
            </div>
          </div>
          <button onClick={connectWallet} className=&quot;px-3 py-1 text-sm rounded border&quot;>
            {ethAddress ? `Connected: ${ethAddress.slice(0,6)}...${ethAddress.slice(-4)}` : &quot;Connect Wallet&quot;}
          </button>
        </div>
        <div className=&quot;mt-4&quot;>
          <div className=&quot;h-2 bg-gray-200 rounded&quot;>
            <div className=&quot;h-2 bg-yellow-400 rounded&quot; style={{ width: `${progress}%` }} />
          </div>
          <div className=&quot;mt-2 text-xs text-gray-500&quot;>Next badge at {nextBadgeThreshold} {symbol}</div>
        </div>
        <div className=&quot;mt-4&quot;>
          <Badges balance={balance} />
        </div>
      </div>

      <div className=&quot;p-4 border rounded-lg bg-white dark:bg-zinc-900&quot;>
        <div className=&quot;flex gap-3 mb-4 text-sm&quot;>
          <button onClick={() => setTab(&quot;earnings&quot;)} className={`px-3 py-1 rounded border ${tab === &quot;earnings&quot; ? &quot;bg-gray-100&quot; : "&quot;}`}>Earnings</button>
          <button onClick={() => setTab(&quot;spending")} className={`px-3 py-1 rounded border ${tab === "spending&quot; ? &quot;bg-gray-100&quot; : "&quot;}`}>Spending</button>
          <button onClick={() => setTab(&quot;redeem&quot;)} className={`px-3 py-1 rounded border ${tab === &quot;redeem&quot; ? &quot;bg-gray-100&quot; : "&quot;}`}>Redeem</button>
        </div>
        {tab !== &quot;redeem" && (
          <div className="space-y-2&quot;>
            {(tab === &quot;earnings" ? earnings : spending).map((t) => (
              <div key={t.id} className="flex justify-between text-sm border rounded p-2">
                <div className="flex gap-2 items-center">
                  <span className={`px-2 py-0.5 rounded text-xs ${t.type === "earn&quot; || t.type === &quot;issue&quot; ? &quot;bg-green-100 text-green-700&quot; : &quot;bg-red-100 text-red-700"}`}>{t.type}</span>
                  <span className="text-gray-600">{t.reason.split('_').join(' ')}</span>
                </div>
                <div className="font-medium&quot;>{t.type === &quot;earn&quot; || t.type === &quot;issue&quot; ? &quot;+&quot; : &quot;-&quot;}{t.amount} {symbol}</div>
              </div>
            ))}
            {((tab === &quot;earnings" ? earnings : spending).length === 0) && (
              <div className="text-sm text-gray-500&quot;>No transactions yet.</div>
            )}
          </div>
        )}
        {tab === &quot;redeem" && (
          <div className="space-y-3 text-sm">
            <div className="text-gray-600">Convert your {symbol} into credits.</div>
            <div className="text-gray-600&quot;>Rate: 1 {symbol} = ${summary?.config.usdPerToken?.toFixed(2) ?? &quot;0.00"}</div>
            <div className="flex gap-2 items-center">
              <button className="px-3 py-1 rounded border" onClick={_() => redeem(100)}>Redeem 100</button>
              <button className="px-3 py-1 rounded border" onClick={_() => redeem(250)}>Redeem 250</button>
              <button className="px-3 py-1 rounded border" onClick={_() => redeem(500)}>Redeem 500</button>

            </div>
            <div className="text-xs text-gray-500">Coming soon: Redeem for branded perks and courses.</div>
          </div>

        )}


}


=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      </div>;
    </div>;
  );

  );
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className='text - xs text - gray - 500'>;
              Coming soon: Redeem for branded perks and courses.;
            </div>          </div>            <div className="text - xs text - gray - 500">Coming soon: Redeem for branded perks and courses.</div>;
          </div>)}
      </div>;
    </div>);
}
<<<<<<< HEAD

}

  async function redeem(amount: number) {
    if (!amount |amount <= 0) return;
    const res = await fetch('/api/wallet/redeem', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ userId, amount })
    });
    if (data.error) {
      alert(data.error);
    } else {
      alert(`Redeemed ${amount} ${symbol} for $${data.usd} credit.`);
      refresh();    }
  }
  return (      refresh()

    }
  }
  return (
    <div className='space-y-6'>
      <div className='p-4 border rounded-lg bg-white dark:bg-zinc-900'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <span className='text-2xl'>⚡</span>
              <div className='text-sm text-gray-500'>Balance</div>
              <div className='text-2xl font-semibold'>
                {balance} {symbol}
              </div>
            </div>
          </div>
          <button
            onClick={connectWallet}
            className='px-3 py-1 text-sm rounded border'
          >
            {ethAddress
              ? `Connected: ${ethAddress.slice(0, 6)}...${ethAddress.slice(-4)}`
              : 'Connect Wallet'}
          </button>
        </div>
        <div className='mt-4'>
          <div className='h-2 bg-gray-200 rounded'>
            <div
              className='h-2 bg-yellow-400 rounded'
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className='mt-2 text-xs text-gray-500'>
            Next badge at {nextBadgeThreshold} {symbol}
          </div>
        </div>
        <div className='mt-4'>          <Badges balance={balance} />
        </div>
      </div>
        <div className="mt-4">
          <Badges balance={balance} />
        </div>
      </div>
      <div className='p-4 border rounded-lg bg-white dark:bg-zinc-900'>
        <div className='flex gap-3 mb-4 text-sm'>
          <button
            onClick={() => setTab('earnings')}
            className={`px-3 py-1 rounded border ${tab === 'earnings' ? 'bg-gray-100' : ''}`}
          >
            Earnings
          </button>
          <button
            onClick={() => setTab('spending')}
            className={`px-3 py-1 rounded border ${tab === 'spending' ? 'bg-gray-100' : ''}`}
          >
            Spending
          </button>
          <button
            onClick={() => setTab('redeem')}
            className={`px-3 py-1 rounded border ${tab === 'redeem' ? 'bg-gray-100' : ''}`}
          >
            Redeem
          </button>
        {tab !== 'redeem' && (
          <div className='space-y-2'>
            {(tab === 'earnings' ? earnings : spending).map(t => (
              <div
                key={t.id}
                className='flex justify-between text-sm border rounded p-2'
              >
                <div className='flex gap-2 items-center'>
                  <span
                    className={`px-2 py-0.5 rounded text-xs ${t.type === 'earn' |t.type === 'issue' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                  >
                    {t.type}
                  </span>
                  <span className='text-gray-600'>
                    {t.reason.split('_').join(' ')}
                  </span>
                </div>
                <div className='font-medium'>
                  {t.type === 'earn' |t.type === 'issue' ? '+' : '-'}
                  {t.amount} {symbol}
                </div>
              </div>
            ))}
            {(tab === 'earnings' ? earnings : spending).length === 0 && (
              <div className='text-sm text-gray-500'>No transactions yet.</div>
            )}
          </div>
        )}
        {tab === 'redeem' && (
          <div className='space-y-3 text-sm'>
            <div className='text-gray-600'>
              Convert your {symbol} into credits.
            </div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className='text-gray-600'>
              Rate: 1 {symbol} = $
              {summary?.config.usdPerToken?.toFixed(2) ?? '0.00'}
            </div>
            <div className='flex gap-2 items-center'>
              <button
                className='px-3 py-1 rounded border'
                onClick={() => redeem(100)}
              >
                Redeem 100
              </button>
              <button
                className='px-3 py-1 rounded border'
                onClick={() => redeem(250)}
              >
                Redeem 250
              </button>
              <button
                className='px-3 py-1 rounded border'
                onClick={() => redeem(500)}
              >
                Redeem 500
              </button>
            </div>
            <div className='text-xs text-gray-500'>
              Coming soon: Redeem for branded perks and courses.
            </div>          </div>            <div className="text-xs text-gray-500">Coming soon: Redeem for branded perks and courses.</div>
          </div>
        )}
<<<<<<< HEAD
      </div>
    </div>
);
}

=======


}


=======
}

=======
            <div className='text - xs text - gray - 500'>;
              Coming soon: Redeem for branded perks and courses.;
            </div>          </div>            <div className="text - xs text - gray - 500">Coming soon: Redeem for branded perks and courses.</div>;
          </div>)}
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>

        )}
      </div>
    </div>
<<<<<<< HEAD
  );
}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
);
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
