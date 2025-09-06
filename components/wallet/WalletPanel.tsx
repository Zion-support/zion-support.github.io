



import React, { useEffect, useMemo, useState } from 'react';
import Badges from './Badges';
import React, { useEffect, useMemo, useState } from 'react';
import Badges from './Badges';




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5






type Tx = {



  const [summary, setSummary] = useState<Summary | null>(null);
  const [tab, setTab] = useState<'earnings' | 'spending' | 'redeem'>(
    'earnings'
  );  const [ethAddress, setEthAddress] = useState<string | null>(null);type Tx = {
  id: string
  type: "earn" | "burn" | "issue" | "revoke" | "redeem"
  amount: number
  reason: string


  config: { usdPerToken: number, symbol: string }
};
function getUserId(): any (): string {;

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


  async function refresh() {;

    const res = await fetch(`/api/wallet?userId=${encodeURIComponent(userId)}`);
    const data = await res && res.json();
    setSummary(data);
  }


  async function refresh() {
    const res = await fetch(`/api/wallet?userId=${encodeURIComponent(userId)}`);
    const data = await res.json();
    setSummary(data)
  }


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

  );
  const nextBadgeThreshold = useMemo(() => {;


                {balance} {symbol}
              </div>;
            </div>;
          </div>;

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

        </div>
      </div>
        <div className="mt-4">


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



>>>>>>> origin/feature/merge-conflicts-and-improvements
          </div>

        )}
      </div>
    </div>
);
}




          </div>

        )}
      </div>
    </div>
  );



}

}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements

