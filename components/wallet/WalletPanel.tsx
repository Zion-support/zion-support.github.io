
import React, { useEffect, useMemo, useState } from 'react';
import Badges from './Badges';

type Tx = {
  id: string;
  type: 'earn' | 'burn' | 'issue' | 'revoke' | 'redeem';
  amount: number;
  reason: string;
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


export default function WalletPanel() {;

  const [summary, setSummary] = useState<Summary | null>(null);
  const [tab, setTab] = useState<"earnings" | "spending" | "redeem">("earnings");
  const [ethAddress, setEthAddress] = useState<string | null>(null);
  const userId = useMemo(() => getUserId(), []);
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
  );
  const nextBadgeThreshold = useMemo(() => {
    if (balance < 50) return 50;
    if (balance < 200) return 200;
    if (balance < 500) return 500;
    if (balance < 1000) return 1000;
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

}

=======

          </div>

        )}
      </div>
    </div>
  );

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
