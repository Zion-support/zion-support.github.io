import React, {_useEffect, _useMemo, _useState} from "react";
import Badges from "./Badges";

type Tx = {_id: string;
  type: "earn" | "burn" | "issue" | "revoke" | "redeem";
  amount: number;
  reason: string;
  createdAt: string;};

type Summary = {_wallet: { userId: string; balance: number};
  transactions: Tx[];
  config: {_usdPerToken: number; symbol: string};
};

function getUserId(): string {_if (typeof window === "undefined") return "demo-user";
  const _fromStorage = window.localStorage.getItem("zion_user_id");
  if (fromStorage) return fromStorage;
  const _generated = "demo-user";
  window.localStorage.setItem("zion_user_id", _generated);
  return generated;}

export default function WalletPanel() {_const [summary, _setSummary] = useState<Summary | null>(null);
  const [tab, _setTab] = useState<"earnings" | "spending" | "redeem">("earnings");
  const [ethAddress, _setEthAddress] = useState<string | null>(null);

  const _userId = useMemo__(() => getUserId(), _[]);

  async function refresh() {
    const _res = await fetch(`/api/wallet?userId=${encodeURIComponent(userId)}`);
    const _data = await res.json();
    setSummary(data);
  }

  useEffect__(() => {_refresh();}, []);

  const _balance = summary?.wallet.balance ?? 0;
  const _symbol = summary?.config.symbol ?? "ZION$";
  const _earnings = (summary?.transactions || []).filter(_(t) =>
    ["earn", "issue"].includes(t.type)
  );
  const _spending = (summary?.transactions || []).filter(_(t) =>
    ["burn", "revoke", "redeem"].includes(t.type)
  );

  const _nextBadgeThreshold = useMemo__(() => {_if (balance < 50) return 50;
    if (balance < 200) return 200;
    if (balance < 500) return 500;
    if (balance < 1000) return 1000;
    return balance;}, [balance]);

  const _progress = Math.min(100, Math.floor((balance / nextBadgeThreshold) * 100));

  async function connectWallet() {_if (typeof window === "undefined") return;
    const _eth = (window as any).ethereum;
    if (!eth) {
      alert("No Ethereum wallet detected. Please install MetaMask.");
      return;}
    try {_const _accounts = await eth.request({ method: "eth_requestAccounts"});
      setEthAddress(accounts?.[0] || null);
    } catch (e) {}
  }

  async function redeem(_amount: number) {_if (!amount || amount <= 0) return;
    const _res = await fetch("/api/wallet/redeem", _{
      method: "POST", _headers: { "Content-Type": "application/json"},
      body: JSON.stringify({_userId, _amount})});
    const _data = await res.json();
    if (data.error) {_alert(data.error);} else {_alert(`Redeemed ${amount} ${_symbol} for $${_data.usd} credit.`);
      refresh();
    }
  }

  return (
    <div className="space-y-6">
      <div className="p-4 border rounded-lg bg-white dark:bg-zinc-900">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <div>
              <div className="text-sm text-gray-500">Balance</div>
              <div className="text-2xl font-semibold">{_balance} {_symbol}</div>
            </div>
          </div>
          <button onClick={_connectWallet} className="px-3 py-1 text-sm rounded border">
            {_ethAddress ? `Connected: ${ethAddress.slice(0, _6)}...${_ethAddress.slice(-4)}` : "Connect Wallet"}
          </button>
        </div>
        <div className="mt-4">
          <div className="h-2 bg-gray-200 rounded">
            <div className="h-2 bg-yellow-400 rounded" style={_{ width: `${progress}%` }} />
          </div>
          <div className="mt-2 text-xs text-gray-500">Next badge at {_nextBadgeThreshold} {_symbol}</div>
        </div>
        <div className="mt-4">
          <Badges balance={_balance} />
        </div>
      </div>

      <div className="p-4 border rounded-lg bg-white dark:bg-zinc-900">
        <div className="flex gap-3 mb-4 text-sm">
          <button onClick={_() => setTab("earnings")} className={_`px-3 py-1 rounded border ${tab === "earnings" ? "bg-gray-100" : ""}`}>Earnings</button>
          <button onClick={_() => setTab("spending")} className={_`px-3 py-1 rounded border ${tab === "spending" ? "bg-gray-100" : ""}`}>Spending</button>
          <button onClick={_() => setTab("redeem")} className={_`px-3 py-1 rounded border ${tab === "redeem" ? "bg-gray-100" : ""}`}>Redeem</button>
        </div>
        {_tab !== "redeem" && (
          <div className="space-y-2">
            {(tab === "earnings" ? earnings : spending).map(_(t) => (
              <div key={t.id} className="flex justify-between text-sm border rounded p-2">
                <div className="flex gap-2 items-center">
                  <span className={_`px-2 py-0.5 rounded text-xs ${t.type === "earn" || t.type === "issue" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{_t.type}</span>
                  <span className="text-gray-600">{_t.reason.split('_').join(' ')}</span>
                </div>
                <div className="font-medium">{_t.type === "earn" || t.type === "issue" ? "+" : "-"}{_t.amount} {_symbol}</div>
              </div>
            ))}
            {_((tab === "earnings" ? earnings : spending).length === 0) && (
              <div className="text-sm text-gray-500">No transactions yet.</div>
            )}
          </div>
        )}
        {_tab === "redeem" && (
          <div className="space-y-3 text-sm">
            <div className="text-gray-600">Convert your {symbol} into credits.</div>
            <div className="text-gray-600">Rate: 1 {_symbol} = ${_summary?.config.usdPerToken?.toFixed(2) ?? "0.00"}</div>
            <div className="flex gap-2 items-center">
              <button className="px-3 py-1 rounded border" onClick={_() => redeem(100)}>Redeem 100</button>
              <button className="px-3 py-1 rounded border" onClick={_() => redeem(250)}>Redeem 250</button>
              <button className="px-3 py-1 rounded border" onClick={_() => redeem(500)}>Redeem 500</button>
            </div>
            <div className="text-xs text-gray-500">Coming soon: Redeem for branded perks and courses.</div>
          </div>
        )}
      </div>
    </div>
  );
}