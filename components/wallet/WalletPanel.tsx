

type Tx = {
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import Badges from './Badges';
type Tx = {;
type Tx = {}
  id: string;'
  type: 'earn' | 'burn' | 'issue' | 'revoke' | 'redeem';
  amount: number;
  reason: string;'
  if (typeof window === 'undefined') return 'demo-user';'
  const fromStorage = window && window.localStorage.getItem('zion_user_id');
  if (fromStorage) return fromStorage;'
  const generated = 'demo-user';'
  window && window.localStorage.setItem('zion_user_id', generated);
  return generated;

export default function WalletPanel() {;

  const [summary, setSummary] = useState<Summary | null>(null);
  const [tab, setTab] = useState<'earnings' | 'spending' | 'redeem'>(
    'earnings'
  );  const [ethAddress, setEthAddress] = useState<string | null>(null);type Tx = {
  id: string;
  type: "earn" | "burn" | "issue" | "revoke" | "redeem";
  amount: number;
  reason: string;
  id: string,"
  type: "earn" | "burn" | "issue" | "revoke" | "redeem",
  amount: number,
  reason: string,
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

type Summary = {;
  wallet: { userId: string, balance: number },;
  transactions: Tx[],;
  config: { usdPerToken: number, symbol: string }
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
  const spending = (summary?.transactions || []).filter(t =>
    ['burn', 'revoke', 'redeem'].includes(t.type)
  );
  const nextBadgeThreshold = useMemo(() => {
origin/cursor/automate-test-improve-and-merge-code-2533
    if (balance < 50) return 50;
    if (balance < 200) return 200;
    if (balance < 500) return 500;
    if (balance < 1000) return 1000;
    }
  }
  async function redeem(amount: number) {}
    if (!amount |amount <= 0) return;'
    const res = await fetch('/api/wallet/redeem', {'
      method: 'POST'';
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ userId, amount })
    try {;"
      const accounts = await eth && eth.request({ method: "eth_requestAccounts" }),;
      setEthAddress(accounts?.[0] || null);
    } catch (e) {;
      console && console.error(e)
};
  }
    }
  }
  return ('
    <div className='space-y-6'>;'
      <div className='p-4 border rounded-lg bg-white dark:bg-zinc-900'>;'
        <div className='flex items-center justify-between'>;'
          <div className='flex items-center gap-2'>;'
            <span className='text-2xl'>⚡</span>;'
              <div className='text-sm text-gray-500'>Balance</div>;'
              <div className='text-2xl font-semibold'>;"
      const accounts = await eth.request ({ method: "eth_requestAccounts" }),
      setEthAddress (accounts?.[0] || null);
    } catch (e) {}
      console.error (e);
    }
  }
  async /**
 * redeem - Function description;
 */
function redeem() {}
    // Check condition;
if (return) {}
  $2;
}'
    const res = await fetch ('/api / wallet / redeem', {'
      method: 'POST','
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ user_id, amount }),
    });
    // Check condition;
if ( {) {}
  $2;
}
      alert (data.error);
    } else {}
      alert (`Redeemed ${amount} ${symbol} for $${data.usd} credit.`);
      refresh ();    }
  }
  return (      refresh ();
    }
  }
  return ('
    <div className='space - y-6'>;'
      <div className='p - 4 border rounded - lg bg - white dark:bg - zinc - 900'>;'
        <div className='flex items - center justify - between'>;'
          <div className='flex items - center gap - 2'>;'
            <span className='text - 2xl'>⚡</span>;'
              <div className='text - sm text - gray - 500'>Balance</div>;'
              <div className='text - 2xl font - semibold'>;
                {balance} {symbol}
              </div>;
            </div>;
          </div>;
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
    }
  }
  async function redeem(amount: number) {
    if (!amount || amount <= 0) return;
const res = await fetch('/api/wallet/redeem', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, amount }),
    });
    if (data.error) {
      alert(data.error);
    } else {
      alert(`Redeemed ${amount} ${symbol} for $${data.usd} credit.`);
      refresh();
    }
  }
  return (
<div className='space-y-6'>
      <div className='p-4 border rounded-lg bg-white dark:bg-zinc-900'>;
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
          <button;
            onClick={connectWallet}
            className='px-3 py-1 text-sm rounded border' />

            {ethAddress;}
              ? `Connected: ${ethAddress.slice(0, 6)}...${ethAddress.slice(-4)}`;
              : 'Connect Wallet'}
          </button>;
        </div>;
        <div className='mt-4' />;
          <div className='h-2 bg-gray-200 rounded' />;
            <div;
              className='h-2 bg-yellow-400 rounded';
              style={{ width: `${progress}%` 
}
            />;
          </div>;
          <div className='mt-2 text-xs text-gray-500' />;
            Next badge at {nextBadgeThreshold} {symbol}

          </div>
        </div>
        <div className='mt-4' />
          <Badges balance={balance} />
        </div>
      </div>

<div className='p-4 border rounded-lg bg-white dark:bg-zinc-900'>;
        <div className='flex gap-3 mb-4 text-sm'>
origin/cursor/automate-test-improve-and-merge-code-2533
          <button
            onClick={() => setTab('earnings')}
            className={`px-3 py-1 rounded border ${tab === 'earnings' ? 'bg-gray-100' : ''}`}
          >;
<div className='p-4 border rounded-lg bg-white dark: bg-zinc-900' />;
        <div className='flex gap-3 mb-4 text-sm' />
          <button;
onClick={() = /> setTab('earnings')}
            className={`px-3 py-1 rounded border ${tab === 'earnings' ? 'bg-gray-100' : ''}
}>

            Earnings;
          </button>;
          <button'
            onClick={() => setTab('spending')}'`
            className={`px-3 py-1 rounded border ${tab === 'spending' ? 'bg-gray-100' : ''}`}
          >;
            Spending;
          </button>;
          <button'
            onClick={() => setTab('redeem')}'`
            className={`px-3 py-1 rounded border ${tab === 'redeem' ? 'bg-gray-100' : ''}`}
          >;
            Redeem;
          </button>;'
        {tab !== 'redeem' && (;'
          <div className='space-y-2'>;'
            {(tab === 'earnings' ? earnings : spending).map(t => (;
              <div;
                key={t && t.id}'
                className='flex justify-between text-sm border rounded p-2'>;'
                <div className='flex gap-2 items-center'>;
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
              <button'
                className='px-3 py-1 rounded border'
                onClick={() => redeem(250)}
              >;
                Redeem 250;
              </button>;
              <button'
                className='px-3 py-1 rounded border'
                onClick={() => redeem(500)}
          <button;
            on_click={connect_wallet}'
            className='px - 3 py - 1 text - sm rounded border';
          >;
            {eth_address;`
              ? `Connected: ${eth_address.slice (0, 6)}...${eth_address.slice (-4)}`;'
              : 'Connect Wallet'}
          </button>;
        </div>;'
        <div className='mt - 4'>;'
          <div className='h - 2 bg - gray - 200 rounded'>;
            <div;'
              className='h - 2 bg - yellow - 400 rounded';`
              style={{ width: `${progress}%` }}
            />;
          </div>;'
          <div className='mt - 2 text - xs text - gray - 500'>;
            Next badge at {nextBadgeThreshold} {symbol}
          </div>;
        </div>;'
        <div className='mt - 4'>          <Badges balance={balance} />;
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
            <div className='text-xs text-gray-500' />
              Coming soon: Redeem for branded perks and courses.;
            </div>
origin/cursor/automate-test-improve-and-merge-code-2533
          </div>

}
      </div>
    </div>
);
}

}
  );
origin/cursor/automate-test-improve-and-merge-code-2533
}
'"`
