import React, { useEffect, useState } from 'react';
import { connectMetaMask, getAccounts } from '../../utils/wallet';

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export type RedemptionType =
  | 'boost_profile'
  | 'promote_listing'
  | 'premium_support';
<<<<<<< HEAD
=======
=======
export type RedemptionType = 'boost_profile' | 'promote_listing' | 'premium_support';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function UseTokensModal({
  isOpen,
  onClose,
  serviceId,
<<<<<<< HEAD
  defaultType,
}: {
  isOpen: boolean;
  onClose: () => void;
  serviceId?: string;
  defaultType?: RedemptionType;
}) {
  const [account, setAccount] = useState<string | null>(null);
  const [type, setType] = useState<RedemptionType>(
    defaultType ?? 'boost_profile'
  );  const [tokens, setTokens] = useState<number>(100);
=======
  defaultType
}: {
  isOpen: boolean,
  onClose: () => void,
  serviceId?: string,
  defaultType?: RedemptionType
}) {
  const [account, setAccount] = useState<string | null>(null);
<<<<<<< HEAD
  const [type, setType] = useState<RedemptionType>(
    defaultType ?? 'boost_profile'
  );
=======
export type RedemptionType = 'boost_profile' | 'promote_listing' | 'premium_support';

export default function UseTokensModal({
  isOpen;
  onClose;
  serviceId;
  defaultType}: {
  isOpen: boolean,
  onClose: () => void,
  serviceId?: string;
  defaultType?: RedemptionType
}) {
  const [account, setAccount] = useState<string | null>(null);
  const [type, setType] = useState<RedemptionType>(defaultType ?? 'boost_profile');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const [type, setType] = useState<RedemptionType>(defaultType ?? 'boost_profile');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const [tokens, setTokens] = useState<number>(100);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [isSubmitting, setIsSubmitting] = useState(false);
  const usdValue = (tokens * 0.01).toFixed(2);

  useEffect(() => {
    (async () => {
      const accs = await getAccounts();
<<<<<<< HEAD
      if (accs && accs.length > 0) setAccount(accs[0]);
    })();  }, []);

  async function connect() {
    const accs = await connectMetaMask();
    if (accs && accs.length > 0) setAccount(accs[0]);  }
=======
<<<<<<< HEAD
<<<<<<< HEAD
      if (accs && accs.length > 0) setAccount(accs[0]);
    })();
=======
      if (accs && accs.length > 0) setAccount(accs[0])
    })()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      if (accs && accs.length > 0) setAccount(accs[0])
    })()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []);

  async function connect() {
    const accs = await connectMetaMask();
<<<<<<< HEAD
<<<<<<< HEAD
    if (accs && accs.length > 0) setAccount(accs[0]);
=======
    if (accs && accs.length > 0) setAccount(accs[0])
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    if (accs && accs.length > 0) setAccount(accs[0])
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  async function redeem() {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/tokens/redeem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        body: JSON.stringify({ account, amount: tokens, type, serviceId }),
      });
      const data = await res.json();
      if (data?.ok) {
<<<<<<< HEAD
        onClose();      }
=======
        onClose();
=======
        body: JSON.stringify({ account, amount: tokens, type, serviceId })});
      const data = await res.json();
      if (data?.ok) {
        onClose()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        body: JSON.stringify({ account, amount: tokens, type, serviceId })});
      const data = await res.json();
      if (data?.ok) {
        onClose()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isOpen) return null;

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    <div className='fixed inset-0 z-[60] flex items-end sm:items-center justify-center'>
      <div className='absolute inset-0 bg-black/40' onClick={onClose} />
      <div className='relative w-full sm:max-w-md rounded-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-xl m-0 sm:m-4 p-4'>
        <div className='flex items-center justify-between mb-3'>
          <div className='font-semibold'>Use ZION Tokens</div>
          <button
            onClick={onClose}
            className='px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800'
          >
            Close
          </button>
<<<<<<< HEAD
=======
=======
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full sm:max-w-md rounded-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-xl m-0 sm:m-4 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="font-semibold">Use ZION Tokens</div>
          <button onClick={onClose} className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Close</button>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </div>

        <div className='text-sm mb-3'>Conversion rate: 1 ZION = $0.01</div>

        <div className='space-y-3'>
          <div className='text-sm'>
            <div className='mb-1'>Redemption type</div>
            <select
              value={type}
              onChange={e => setType(e.target.value as RedemptionType)}
              className='w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-2 py-2'
            >
              <option value='boost_profile'>Boost profile</option>
              <option value='promote_listing'>Promote listing</option>
              <option value='premium_support'>Get premium support</option>
            </select>
          </div>

          <div className='text-sm'>
            <div className='mb-1'>Amount (ZION)</div>
            <input
              type='number'
              min={1}
              value={tokens}
              onChange={e => setTokens(parseInt(e.target.value || '0', 10))}
              className='w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-2 py-2'
            />
            <div className='opacity-70 mt-1'>Approx. ${usdValue} USD</div>
          </div>

          <div className='text-sm'>
            <div className='mb-1'>Wallet</div>
            {account ? (
              <div className='rounded border border-green-600 text-green-700 dark:text-green-400 px-2 py-2'>
                Connected: {account.slice(0, 6)}…{account.slice(-4)}
              </div>
            ) : (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <button
                onClick={connect}
                className='enhanced-button enhanced-button-primary'
              >
                Connect MetaMask
<<<<<<< HEAD
              </button>            )}
          </div>
        </div>

=======
              </button>
=======
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full sm:max-w-md rounded-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-xl m-0 sm:m-4 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="font-semibold">Use ZION Tokens</div>
          <button onClick={onClose} className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Close</button>
        </div>

        <div className="text-sm mb-3">Conversion rate: 1 ZION = $0.01</div>

        <div className="space-y-3">
          <div className="text-sm">
            <div className="mb-1">Redemption type</div>
            <select value={type} onChange={(e) => setType(e.target.value as RedemptionType)} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-2 py-2">
              <option value="boost_profile">Boost profile</option>
              <option value="promote_listing">Promote listing</option>
              <option value="premium_support">Get premium support</option>
            </select>
          </div>

          <div className="text-sm">
            <div className="mb-1">Amount (ZION)</div>
            <input type="number" min={1} value={tokens} onChange={(e) => setTokens(parseInt(e.target.value || '0', 10))} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-2 py-2" />
            <div className="opacity-70 mt-1">Approx. ${usdValue} USD</div>
          </div>

          <div className="text-sm">
            <div className="mb-1">Wallet</div>
            {account ? (
              <div className="rounded border border-green-600 text-green-700 dark:text-green-400 px-2 py-2">Connected: {account.slice(0, 6)}…{account.slice(-4)}</div>
            ) : (
              <button onClick={connect} className="enhanced-button enhanced-button-primary">Connect MetaMask</button>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <button onClick={connect} className="enhanced-button enhanced-button-primary">Connect MetaMask</button>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            )}
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <div className='mt-4 flex items-center justify-between'>
          <div className='text-xs opacity-70'>
            You can spend tokens to boost visibility, promote listings, or
            access premium support.
          </div>
          <button
            disabled={!account || isSubmitting || tokens <= 0}
            onClick={redeem}
            className='enhanced-button enhanced-button-primary disabled:opacity-50'
          >
            Redeem
<<<<<<< HEAD
          </button>        </div>
      </div>
    </div>
  );
}
=======
          </button>
=======
        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs opacity-70">You can spend tokens to boost visibility, promote listings, or access premium support.</div>
          <button disabled={!account || isSubmitting || tokens <= 0} onClick={redeem} className="enhanced-button enhanced-button-primary disabled: opacity-50">Redeem</button>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs opacity-70">You can spend tokens to boost visibility, promote listings, or access premium support.</div>
          <button disabled={!account || isSubmitting || tokens <= 0} onClick={redeem} className="enhanced-button enhanced-button-primary disabled: opacity-50">Redeem</button>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
