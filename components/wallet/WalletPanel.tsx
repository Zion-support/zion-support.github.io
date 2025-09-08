

<<<<<<< HEAD


type Tx = {



=======
import React, { useEffect, useMemo, useState } from "react";"
import Badges from "./Badges";"

type Tx = any;
      refresh()
import React, { useEffect, useMemo, useState } from 'react';'

import Badges from './Badges';'

type Tx = any;
      refresh()type Tx = {type Tx = {"id": string;
  }
  "type": 'earn' | 'burn' | 'issue' | 'revoke' | 'redeem';'
  "amount": number;
  "reason": string;
  if (typeof window = == 'undefined');'
  return 'demo-user';'

type Tx = {
>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: string;
  type: 'earn' | 'burn' | 'issue' | 'revoke' | 'redeem';
  amount: number;
  reason: string;
<<<<<<< HEAD
=======
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
  const [summary, setSummary] = useState<Summary | null>(null);
  const [tab, setTab] = useState<'earnings' | 'spending' | 'redeem'>(
    'earnings'
  );  const [ethAddress, setEthAddress] = useState<string | null>(null);type Tx = {
  id: string
  type: "earn" | "burn" | "issue" | "revoke" | "redeem"
  amount: number
  reason: string
  id: string,"
  type: "earn" | "burn" | "issue" | "revoke" | "redeem",
  amount: number,
  reason: string,
  createdAt: string},
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
function getUserId(): string {
  if (typeof window = $2;
  const fromStorage = window.localStorage.getItem($2);
  if (fromStorage) return fromStorage,
  const generated = $2;
  window.localStorage.setItem($2);
  return generated
>>>>>>> origin/cursor/delete-old-data-records-6bba
  if (typeof window === 'undefined') return 'demo-user';
  const fromStorage = window && window.localStorage.getItem('zion_user_id')if (fromStorage) return fromStorage;
  const generated = 'demo-user';
  );  const [ethAddress, setEthAddress] = useState<string | null>(null);type Tx = {
  id: string
  type: "earn" | "burn" | "issue" | "revoke" | "redeem"
  amount: number
  reason: string
  id: string,
import React, { useEffect, useMemo, useState } from "react";
import Badges from "./Badges";
type Tx = $2;
  type: "earn" | "burn" | "issue" | "revoke" | "redeem",
  amount: number,
  reason: string,
  createdAt: string},
<<<<<<< HEAD

=======
  type: 'earn' | 'burn' | 'issue' | 'revoke' | 'redeem';
  amount: number;
  reason: string;
  if (typeof window = == 'undefined');
  return 'demo-user';

const fromStorage = window && window.localStorage.getItem('zion_user_id')if (fromStorage);
  return fromStorage;
>>>>>>> origin/cursor/delete-old-data-records-6bba

const generated = 'demo-user';

  window && window.localStorage.setItem('zion_user_id', generated);
  return generated;

export default function WalletPanel() {;



<<<<<<< HEAD
  type: earn | "burn" | issue | "revoke" | redeem
  amount: number;
  reason: string;
  id: string,"
  type: "earn | burn" | "issue | revoke" | "redeem,
  amount: number,
  reason: string}


const balance = summary?.wallet.balance ?? 0;


const symbol = summary?.config.symbol ?? 'ZION$';

const earnings = (summary?.transactions |[]).filter(t =>
    ['earn', 'issue'].includes(t.type)
  );


=======
const [ethAddress, setEthAddress] = useState<string | null>(null);

const userId = useMemo(() => getUserId(), []);}
  async function refresh() {}
    const res = await fetch(`/api/wallet?userId=${encodeURIComponent(userId)}`);

const data = await res.json();
setSummary(data);
  }
  useEffect(() => {
}
    refresh();}
  }, []);

const balance = summary?.wallet.balance ?? 0;

  async function refresh() {
    const res = $2;
    const data = await res.json($2);
    setSummary(data)
  }

  useEffect(() => {
    refresh()
  }, []),

  const balance = $2;
  const symbol = $2;
  const earnings = (summary?.transactions || []).filter((t) =>
    ["earn", "issue"].includes(t.type)
  ),
  const spending = (summary?.transactions || []).filter((t) =>
    ["burn", "revoke", "redeem"].includes(t.type)
  ),

  const nextBadgeThreshold = $2;
    if (balance < 200) return 200,
    if (balance < 500) return 500,
    if (balance < 1000) return 1000,
    return balance
  }, [balance]),

  const progress = Math.min(100, Math.floor((balance / nextBadgeThreshold) * 100)),

  async function connectWallet() {
    if (typeof window = $2;
    const eth = $2;
    if (!eth) {
      alert($2);
      return
    }
    try {
      const accounts = await eth.request($2);
      setEthAddress(accounts?.[0] || null)
    } catch (e) {
      console.error(e)
import React, { useEffect, useMemo, useState } from "react";
import Badges from "./Badges";
type Tx = {
  created_at: string;
}
;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: string,
  type: "earn" | "burn" | "issue" | "revoke" | "redeem",
  amount: number,
  reason: string,
<<<<<<< HEAD





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export default function WalletPanel() {;
  const [summary, setSummary] = useState<Summary | null>(null);
  const [tab, setTab] = useState<'earnings' | 'spending' | 'redeem'>(;
    'earnings';
  );  const [ethAddress, setEthAddress] = useState<string | null>(null);type Tx = {;
  id: string,;
  type: "earn" | "burn" | "issue" | "revoke" | "redeem",;
  amount: number,;
  reason: string,;
  createdAt: string
};
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
type Summary = {;
  wallet: { userId: string, balance: number },;
  transactions: Tx[],;
  config: { usdPerToken: number, symbol: string }
<<<<<<< HEAD

};
function getUserId(): any (): string {;

=======
};"
  if (typeof window === "undefined") return "demo-user";
  const [summary, setSummary] = useState<Summary | null>(null);"
  const [tab, setTab] = useState<"earnings" | "spending" | "redeem">("earnings");
  const [ethAddress, setEthAddress] = useState<string | null>(null);
  const userId = useMemo(() => getUserId(), []);
    refresh()
  }, []);
  const balance = summary?.wallet.balance ?? 0;"
  const symbol = summary?.config.symbol ?? "ZION$";
  const earnings = (summary?.transactions |[]).filter((t) =>"
    ["earn", "issue"].includes(t.type)
  );
  const spending = (summary?.transactions |[]).filter((t) =>"
    ["burn", "revoke", "redeem"].includes(t.type)
  );
  const [ethAddress, setEthAddress] = useState<string | null>(null);
  const userId = useMemo(() => getUserId(), []);
  if (typeof window === "undefined") return "demo-user";
  const fromStorage = window && window.localStorage.getItem("zion_user_id");
  if (fromStorage) return fromStorage;
  const generated = "demo-user";
  window && window.localStorage.setItem("zion_user_id", generated);
  return generated;
  window && window.localStorage.setItem('zion_user_id', generated);'
  return generated;
export default function WalletPanel() {;

}
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
  if (typeof window === "undefined") return "demo-user";
  const fromStorage = window.localStorage.getItem("zion_user_id");
  if (fromStorage) return fromStorage;
  const generated = "demo-user";
  window.localStorage.setItem("zion_user_id", generated);
  return generated
}
export default function WalletPanel() {

export default function WalletPanel() {;
  const [summary, setSummary] = useState<Summary | null>(null);
  const [tab, setTab] = useState<"earnings" | "spending" | "redeem">("earnings");
  const [ethAddress, setEthAddress] = useState<string | null>(null);
  const userId = useMemo(() => getUserId(), []);
const userId = useMemo(() => getUserId(), []);
>>>>>>> origin/cursor/delete-old-data-records-6bba
  async function refresh() {
    const res = await fetch(`/api/wallet?userId=${encodeURIComponent(userId)}`);
    const data = await res.json();
setSummary(data);
  }
<<<<<<< HEAD


  useEffect(() => {
    refresh();
  }, []);
  const balance = summary?.wallet.balance ?? 0;
  const symbol = summary?.config.symbol ?? 'ZION$';
  const earnings = (summary?.transactions |[]).filter(t =>
    ['earn', 'issue'].includes(t.type)
  );

  const spending = (summary?.transactions |[]).filter((t) =>
    ["burn", "revoke", "redeem"].includes(t.type)

    if (balance < 50) return 50;

    if (balance < 200) return 200;
    if (balance < 500) return 500;
    if (balance < 1000) return 1000;


    }
    try {const accounts = await eth.request({ method: 'eth_requestAccounts' })setEthAddress(accounts?.[0] |null)} catch (e) {console.error(e)}
 
}
  async function redeem() {if (!amount || amount <= 0);

=======

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
>>>>>>> origin/cursor/delete-old-data-records-6bba

    };
  }
  async function redeem(amount: number) {
    if (!amount || amount <= 0) return;
<<<<<<< HEAD



=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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




  return (      refresh();


=======
  return (      refresh();
>>>>>>> origin/cursor/delete-old-data-records-6bba
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




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                {balance} {symbol}
              </div>;
            </div>;
          </div>;

<<<<<<< HEAD
      alert(`Redeemed ${amount} ${symbol} for $${data.usd} credit.`);
      refresh();
    }
  }
  return (
<div className=space-y-6>
      <div className='p-4 border rounded-lg bg-white dark:bg-zinc-900'>
        <div className=flex items-center justify-between>
          <div className='flex items-center gap-2'>
            <span className=text-2xl>⚡</span>
              <div className='text-sm text-gray-500'>Balance</div>
              <div className=text-2xl font-semibold>
                {balance} {symbol}
              </div>
            </div>
          </div>
          <button
          <button;
            onClick={connectWallet}
            className='px-3 py-1 text-sm rounded border' />






  return (
    <div className=space-y-6>
=======

  return (
    <div className="space-y-6">
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="p-4 border rounded-lg bg-white dark:bg-zinc-900">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <div>
              <div className="text-sm text-gray-500">Balance</div>
              <div className="text-2xl font-semibold">{balance} {symbol}</div>
            </div>
          <button onClick={connectWallet} className="px-3 py-1 text-sm rounded border">
            {ethAddress ? `Connected: ${ethAddress.slice(0,6)}...${ethAddress.slice(-4)}` : "Connect Wallet"}
          </button>

<<<<<<< HEAD

=======
            Earnings;
          </button>;
          <button'
            onClick={() => setTab('spending')}'`
            className={`px-3 py-1 rounded border ${tab === 'spending' ? 'bg-gray-100' : ''}`}
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
            ))}
            {(tab === 'earnings' ? earnings : spending).length === 0 && (;
                  <span;
            ))}'
            {(tab === 'earnings' ? earnings : spending).length === 0 && (;'
              <div className='text-sm text-gray-500'>No transactions yet.</div>;
            )}
          </div>;
        )}'
        {tab === 'redeem' && (;'
          <div className='space-y-3 text-sm'>;'
            <div className='text-gray-600'>;
              Convert your {symbol} into credits.;
            </div>;'
            <div className='text-gray-600'>;
              Rate: 1 {symbol} = $;'
              {summary?.config && config.usdPerToken?.toFixed(2) ?? '0 && 0.00'}
            </div>;'
            <div className='flex gap-2 items-center'>;
              <button'
                className='px-3 py-1 rounded border'
                onClick={() => redeem(100)}
              >;
                Redeem 100;
              </button>;

                onClick={() => redeem(250)}
          <button;
            onClick={connectWallet}
            className='px-3 py-1 text-sm rounded border'    />

            {ethAddress;}
              ? `Connected: ${ethAddress.slice(0, 6)}...${ethAddress.slice(-4)}`;
              : 'Connect Wallet'}
          </button>;
        </div>;
        <div className='mt-4'    />;
          <div className='h-2 bg-gray-200 rounded'    />;
            <div;
              className='h-2 bg-yellow-400 rounded';
              style={{ width: `${progress}%` 
}
               />;
          </div>;
          <div className='mt-2 text-xs text-gray-500'    />;
            Next badge at {nextBadgeThreshold} {symbol}

          </div>
        </div>
        <div className='mt-4'    />
          <Badges balance={balance}    />
        </div>
      </div>

<div className='p-4 border rounded-lg bg-white dark: bg-zinc-900'    />
        <div className='flex gap-3 mb-4 text-sm'    />
          <button;
onClick={() =    /> setTab('earnings')}
            className={`px-3 py-1 rounded border ${tab === 'earnings' ? 'bg-gray-100' : ''}
}>

            Earnings;
          </button>;
          <button;
            onClick={() =    /> setTab('spending')}
            className={`px-3 py-1 rounded border ${tab === 'spending' ? 'bg-gray-100' : ''}`}>

            Spending;
          </button>;
          <button;
            onClick={() =    /> setTab('redeem')}
            className={`px-3 py-1 rounded border ${tab === 'redeem' ? 'bg-gray-100' : ''}`}>

            Redeem;
          </button>;
        {tab !== 'redeem' && (<div className='space-y-2'    />;}
            {(tab === 'earnings' ? earnings : spending).map(t => (<div;}
                key={t && t.id}
                className='flex justify-between text-sm border rounded p-2'    />;
                <div className='flex gap-2 items-center'    />;
                  <span;
            ))}
            {(tab === 'earnings' ? earnings : spending).length === 0 && (<div className='text-sm text-gray-500'    />No transactions yet.</div>;}
            )}
          </div>;
        )}
        {tab === 'redeem' && (<div className='space-y-3 text-sm'    />;}
            <div className='text-gray-600'    />;}
              Convert your {symbol} into credits.;
            </div>;
            <div className='text-gray-600'    />;
              Rate: 1 {symbo}
} = $;
              {summary?.config && config.usdPerToken?.toFixed(2) ?? '0 && 0.00'}
            </div>;
            <div className='flex gap-2 items-center'    />;
              <button;
                className='px-3 py-1 rounded border';
                onClick={() =    /> redeem(100)}
              >;
                Redeem 100;
              </button>;
              <button;
                className='px-3 py-1 rounded border';
                onClick={() =    /> redeem(250)}
>>>>>>> origin/cursor/delete-old-data-records-6bba
              >;
                Redeem 250;
              </button>;

<<<<<<< HEAD


          <button;
            on_click={connect_wallet}
            className=px - 3 py - 1 text - sm rounded border';
          >;
            {eth_address;`
              ? `Connected: ${eth_address.slice (0, 6)}...${eth_address.slice (-4)}`;'
              : Connect Wallet}
          </button>;
        </div>;'
        <div className='mt - 4>;
          <div className='h - 2 bg - gray - 200 rounded'>;
            <div;
              className=h - 2 bg - yellow - 400 rounded';`
              style={{ width: `${progress}%` }}
            />;
          </div>;'
          <div className=mt - 2 text - xs text - gray - 500>;
            Next badge at {nextBadgeThreshold} {symbol}
          </div>;
        </div>;'
        <div className='mt - 4>          <Badges balance={balance} />;
        </div>;
      </div>;
        <div className="mt-4">;
          <Badges balance={balance} />;
        </div>;
      </div>;'
      <div className='p - 4 border rounded - lg bg - white dark:bg - zinc - 900'>;'
        <div className='flex gap - 3 mb - 4 text - sm'>;
          <button;'
            on_click={() => set_tab ('earnings')}'`
            className={`px - 3 py - 1 rounded border ${tab === 'earnings' ? 'bg - gray - 100' : ''}`}
          >;
            Earnings;
          </button>;
          <button;'
            on_click={() => set_tab ('spending')}'`
            className={`px - 3 py - 1 rounded border ${tab === 'spending' ? 'bg - gray - 100' : ''}`}
          >;
            Spending;
          </button>;
          <button;'
            on_click={() => set_tab ('redeem')}'`
            className={`px - 3 py - 1 rounded border ${tab === 'redeem' ? 'bg - gray - 100' : ''}`}
          >;
            Redeem;
          </button>;'
        {tab !== 'redeem' && ('
          <div className='space - y-2'>;'
            {(tab === 'earnings' ? earnings : spending).map (t => (
              <div;
                key={t.id}'
                className='flex justify - between text - sm border rounded p - 2';
              >;'
                <div className='flex gap - 2 items - center'>;
                  <span;'`
                    className={`px - 2 py - 0.5 rounded text - xs ${t.type === 'earn' || t.type === 'issue' ? 'bg - green - 100 text - green - 700' : 'bg - red - 100 text - red - 700'}`}
                  >;
                    {t.type}
                  </span>;'
                  <span className='text - gray - 600'>;'
                    {t.reason.split ('_').join (' ')}
                  </span>;
                </div>;'
                <div className='font - medium'>;'
                  {t.type === 'earn' || t.type === 'issue' ? '+' : '-'}
                  {t.amount} {symbol}
                </div>;
              </div>))}'
            {(tab === 'earnings' ? earnings : spending).length === 0 && ('
              <div className='text - sm text - gray - 500'>No transactions yet.</div>)}
          </div>)}'
        {tab === 'redeem' && ('
          <div className='space - y-3 text - sm'>;'
            <div className='text - gray - 600'>;
              Convert your {symbol} into credits.;
            </div>;'
            <div className='text - gray - 600'>;
              Rate: 1 {symbol} = $;'
              {summary?.config.usdPerToken?.to_fixed (2) ?? '0.00'}
            </div>;'
            <div className='flex gap - 2 items - center'>;
              <button;'
                className='px - 3 py - 1 rounded border';
                on_click={() => redeem (100)}
              >;
                Redeem 100;
              </button>;
              <button;'
                className='px - 3 py - 1 rounded border';
                on_click={() => redeem (250)}
              >;
                Redeem 250;
              </button>;
              <button;'
                className='px - 3 py - 1 rounded border';
                on_click={() => redeem (500)}
              >;
                Redeem 500;
              </button>;
            </div>;
    } catch (e) {}
      console.error(e)
    }
  }
}
              <button;
                className='px-3 py-1 rounded border';
                onClick={() => redeem(500)}<button;
          <button;
              <button;
                className='px-3 py-1 rounded border';
                onClick={() => redeem(500)}<button;
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
        <div className="mt-4">;
          <Badges balance={balance} />;
        </div>;
      </div>;
      <div className='p - 4 border rounded - lg bg - white dark:bg - zinc - 900'>;
        <div className=flex gap - 3 mb - 4 text - sm'>;
          <button;'
            on_click={() => set_tab (earnings)}'`
            className={`px - 3 py - 1 rounded border ${tab === 'earnings ? bg - gray - 100' : '}`}
          >;
            Earnings;
          </button>;
          <button;
            on_click={() => set_tab ('spending')}`
            className={`px - 3 py - 1 rounded border ${tab === spending' ? 'bg - gray - 100 : '}`}
          >;
            Spending;
          </button>;
          <button;'
            on_click={() => set_tab (redeem)}'`
            className={`px - 3 py - 1 rounded border ${tab === 'redeem ? bg - gray - 100' : '}`}
          >;
            Redeem;
          </button>;
        {tab !== 'redeem' && (
          <div className=space - y-2'>;'
            {(tab === earnings ? earnings : spending).map (t => (
              <div;
                key={t.id}'
                className='flex justify - between text - sm border rounded p - 2;
              >;
                <div className='flex gap - 2 items - center'>;
                  <span;`
                    className={`px - 2 py - 0.5 rounded text - xs ${t.type === earn' || t.type === 'issue ? bg - green - 100 text - green - 700' : 'bg - red - 100 text - red - 700}`}
                  >;
                    {t.type}
                  </span>;
                  <span className='text - gray - 600'>;
                    {t.reason.split (_').join (' )}
                  </span>;
                </div>;
                <div className='font - medium'>;
                  {t.type === earn' || t.type === 'issue ? +' : '-}
                  {t.amount} {symbol}
                </div>;
              </div>))}
            {(tab === 'earnings' ? earnings : spending).length === 0 && (
              <div className=text - sm text - gray - 500'>No transactions yet.</div>)}
          </div>)}'
        {tab === redeem && ('
          <div className='space - y-3 text - sm>;
            <div className='text - gray - 600'>;
              Convert your {symbol} into credits.;
            </div>;
            <div className=text - gray - 600'>;
              Rate: 1 {symbol} = $;'
              {summary?.config.usdPerToken?.to_fixed (2) ?? 0.00}
            </div>;'
            <div className='flex gap - 2 items - center>;

              <button;
                className=px-3 py-1 rounded border';
                onClick={() => redeem(500)}<button;
          <button;
              <button;
                className='px-3 py-1 rounded border;
                onClick={() => redeem(500)}<button;
            on_click={connect_wallet}
            className=px - 3 py - 1 text - sm rounded border';
          >;
            {eth_address;
              ? `Connected: ${eth_address.slice (0, 6)}...${eth_address.slice (-4)}`;
              : 'Connect Wallet}
          </button>;
        </div>;
        <div className=mt - 4'>;
          <div className='h - 2 bg - gray - 200 rounded>;
            <div;
              className=h - 2 bg - yellow - 400 rounded';
              style={{ width: `${progress}%` }}
            />;
          </div>;
          <div className='mt - 2 text - xs text - gray - 500>;
            Next badge at {nextBadgeThreshold} {symbol}
          </div>;
        </div>;
        <div className=mt - 4'>          <Badges balance={balance} />;
        </div>;
      </div>;
        <div className="mt-4">;
          <Badges balance={balance} />;
        </div>;
      </div>;
      <div className='p - 4 border rounded - lg bg - white dark:bg - zinc - 900>;
        <div className=flex gap - 3 mb - 4 text - sm'>;
          <button;
            on_click={() => set_tab ('earnings)}
            className={`px - 3 py - 1 rounded border ${tab === earnings' ? 'bg - gray - 100 : '}`}
          >;
            Earnings;
          </button>;
          <button;
            on_click={() => set_tab ('spending)}
            className={`px - 3 py - 1 rounded border ${tab === spending' ? 'bg - gray - 100 : '}`}
          >;
            Spending;
          </button>;
          <button;
            on_click={() => set_tab ('redeem)}
            className={`px - 3 py - 1 rounded border ${tab === redeem' ? 'bg - gray - 100 : '}`}
          >;
            Redeem;
          </button>;
        {tab !== 'redeem && (<div className=space - y-2'>;
            {(tab === 'earnings ? earnings : spending).map (t => (<div;
                key={t.id}
                className=flex justify - between text - sm border rounded p - 2';
              >;
                <div className='flex gap - 2 items - center>;
                  <span;
                    className={`px - 2 py - 0.5 rounded text - xs ${t.type === earn' || t.type === 'issue ? bg - green - 100 text - green - 700' : 'bg - red - 100 text - red - 700}`}
                  >;
                    {t.type}
                  </span>;
                  <span className=text - gray - 600'>;
                    {t.reason.split ('_).join ( ')}
                  </span>;
                </div>;
                <div className='font - medium>;
                  {t.type === earn' || t.type === 'issue ? +' : '-}
                  {t.amount} {symbol}
                </div>;
              </div>))}
            {(tab === earnings' ? earnings : spending).length === 0 && (<div className='text - sm text - gray - 500>No transactions yet.</div>)}
          </div>)}
        {tab === redeem' && (<div className='space - y-3 text - sm>;
            <div className=text - gray - 600'>;
              Convert your {symbol} into credits.;
            </div>;
            <div className='text - gray - 600>;
              Rate: 1 {symbol} = $;
              {summary?.config.usdPerToken?.to_fixed (2) ?? 0.00'}
            </div>;
            <div className='flex gap - 2 items - center>;
              <button;
                className=px - 3 py - 1 rounded border';
                on_click={() => redeem (100)}
              >;
                Redeem 100;
              </button>;
              <button;
                className='px - 3 py - 1 rounded border;
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



=======
                onClick={() => redeem(500)}

    } catch (e) {console.error(e)}
  }
})}
            <div className='text - xs text - gray - 500'>;
              Coming soon: Redeem for branded perks and courses.;
            </div>          </div>            <div className="text - xs text-gray-500">Coming soon: Redeem for branded perks and courses.</div>;
          </div>)}
      </div>;
    </div>)}>;
                Redeem 500;
              </button>;
            </div>;
            <div className='text-xs text-gray-500'>;
              Coming soon: Redeem for branded perks and courses.;
            </div>;



  );
}'
            <div className='text - xs text - gray - 500'>;
              Coming soon: Redeem for branded perks and courses.;
            </div>          </div>            <div className="text - xs text-gray-500">Coming soon: Redeem for branded perks and courses.</div>;
          </div>)}
      </div>;
    </div>);
}

              >
                Redeem 500;
              </button>
            </div>
            <div className='text-xs text-gray-500'    />
              Coming soon: Redeem for branded perks and courses.
            </div>

            <div className='text-xs text-gray-500'>'
              Coming "soon": Redeem for branded perks and courses.
            </div>
origin/cursor/automate-test-improve-and-merge-code-2533
          </div>

        
}
      </div>

);
}

}

)}})}
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

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
      </div>;
    </div>;
  );


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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>
            <div className="text-xs text-gray-500">Coming soon: Redeem for branded perks and courses.</div>
          </div>
        )}
      </div>
  )
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

            <div className='text - xs text - gray - 500'>;
              Coming soon: Redeem for branded perks and courses.;
            </div>          </div>            <div className="text - xs text - gray - 500">Coming soon: Redeem for branded perks and courses.</div>;
          </div>)}
      </div>;
    </div>);
}





<<<<<<< HEAD
=======
        )}
      </div>
    </div>
  );
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba


