import React, { useEffect, useMemo, useState } from 'react';
import Badges from './Badges';

type Tx = {
  id: string;
  type: 'earn' | 'burn' | 'issue' | 'revoke' | 'redeem';
  amount: number;
  reason: string;
  createdAt: string;
};

type Summary = {
  wallet: { userId: string; balance: number };
  transactions: Tx[];
  config: { usdPerToken: number; symbol: string };
};

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
  );  const [ethAddress, setEthAddress] = useState<string | null>(null);

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
  const earnings = (summary?.transactions || []).filter(t =>
    ['earn', 'issue'].includes(t.type)
  );
  const spending = (summary?.transactions || []).filter(t =>
    ['burn', 'revoke', 'redeem'].includes(t.type)  );

  );

  const nextBadgeThreshold = useMemo(() => {
    if (balance < 50) return 50;
    if (balance < 200) return 200;
    if (balance < 500) return 500;
    if (balance < 1000) return 1000;
    return balance;

  }, [balance]);

  const progress = Math.min(
    100,
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
      setEthAddress(accounts?.[0] || null);
    } catch (e) {
      console.error(e);
    }  }

  async function redeem(amount: number) {
    if (!amount || amount <= 0) return;

  }

  async function redeem(amount: number) {
    if (!amount || amount <= 0) return;

    }
  }

  return (

          <Badges balance={balance} />
        </div>
      </div>

          </div>

        )}
      </div>
    </div>
  );
}