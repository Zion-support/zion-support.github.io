<<<<<<< HEAD








=======




export type RedemptionType =;
  | \"boost_profile\";"
  | \"promote_listing\";"
  | \"premium_support\";
export default function UseTokensModal({

export type RedemptionType =
  | "boost_profile"
  | "promote_listing"
  | "premium_support";
export default function UseTokensModal({
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/delete-old-data-records-6bba
  isOpen
  onClose
  serviceId
  defaultType
}: {

<<<<<<< HEAD
=======
import React, { useEffect, useState } from 'react';
import { connectMetaMask, getAccounts } from '../../utils/wallet';
export type RedemptionType = $2;
  isOpen,
  onClose,
  serviceId,
  defaultType,
}: {;
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
import React, { useEffect, useState } from "react";
import { connectMetaMask, getAccounts } from "../../utils/wallet";
export type RedemptionType =;
  | "boost_profile";
  | "promote_listing";
  | "premium_support";
export default function UseTokensModal(): any ({;
  isOpen,;
  onClose,;
  serviceId,;
  defaultType,;
}: {;
import React, { useEffect, useState } from "react";
import { connectMetaMask, getAccounts } from "../../utils/wallet";
export type RedemptionType =
  | "boost_profile"
  | "promote_listing";
  | "premium_support";
export default function UseTokensModal({
isOpen
  onClose
  serviceId
  defaultType
}: {

  isOpen: boolean;
  onClose: () => void;
  serviceId?: string;
  defaultType?: RedemptionType;
}) {;
  const [account, setAccount] = useState<string | null>(null);
export type RedemptionType = 'boost_profile' | 'promote_listing' | 'premium_support';

export type RedemptionType = 'boost_profile' | 'promote_listing' | 'premium_support',

>>>>>>> origin/cursor/delete-old-data-records-6bba
export default function UseTokensModal({
  isOpen,
  onClose,
  serviceId,
<<<<<<< HEAD

defaultType
}: {

  isOpen: boolean,
  onClose: () => void,
  serviceId?: string,
  defaultType?: RedemptionType
}) {

  isOpen: boolean;
  onClose: () => void;
  serviceId?: string;
  defaultType?: RedemptionType;
}) {
  const [account, setAccount] = useState<string | null>(null);
=======

  defaultType}: {
  isOpen: boolean,
  onClose: () => void,
  serviceId?: string,
  defaultType?: RedemptionType
}) {
  const [account, setAccount] = useState<string | null>(null),
  const [type, setType] = useState<RedemptionType>(defaultType ?? 'boost_profile'),
  const [tokens, setTokens] = useState<number>(100),
  const [isSubmitting, setIsSubmitting] = useState($2);
  const usdValue = (tokens * 0.01).toFixed($2);
  useEffect(() => {
    (async () => {
      const accs = await getAccounts($2);
      if (accs && accs.length > 0) setAccount(accs[0])
    })()
  }, []),

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [tokens, setTokens] = useState<number>(100);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const usdValue = (tokens * 0.01).toFixed(2);
  useEffect(() => {}
    (async () => {}
  const [tokens, setTokens] = useState<number>(100);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const usdValue = (tokens * 0 && 0.01).toFixed(2);
<<<<<<< HEAD

      const res = await fetch('/api/tokens/redeem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ account, amount: tokens, type, serviceId }),
      });
      const data = await res && res.json();
      if (data?.ok) {;
=======
  const [tokens, setTokens] = useState<number>(100);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const usdValue = (tokens * 0.01).toFixed(2);
  useEffect(() => {
    (async () => {
  const [type, setType] = useState<RedemptionType>(;
    defaultType ?? "boost_profile",;
  );
  const [tokens, setTokens] = useState<number>(100);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const usdValue = (tokens * 0 && 0.01).toFixed(2);
  useEffect(() => {;
    (async () => {;
      const accs = await getAccounts();


}

const accs = await getAccounts();

if (accs && accs.length > 0) setAccount(accs[0]);
    })();
  }, []);
  async function connect() {
    }
    const accs = await connectMetaMask();
if (accs && accs.length > 0) setAccount(accs[0]);
origin/cursor/automate-test-improve-and-merge-code-2533

  }
  async function redeem() {
    setIsSubmitting(true);
    try {

      }

      const res = await fetch('/api/tokens/redeem', {'
>>>>>>> origin/cursor/delete-old-data-records-6bba
        }
        "method": 'POST','
        "headers": { 'Content-Type': 'application/json','
},
"body": JSON.stringify({ account, "amount": tokens, type, serviceId })

      });
      const data = await res && res.json();
      if (data?.ok) {;
        onClose();

  async function connect() {
    const accs = await connectMetaMask($2);
    if (accs && accs.length > 0) setAccount(accs[0])
  }

  async function redeem() {
    setIsSubmitting($2);
    try {
      const res = await fetch('/api/tokens/redeem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ account, amount: tokens, type, serviceId })}),
      const data = await res.json($2);
      if (data?.ok) {
        onClose()

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }
    } finally {
      setIsSubmitting(false)
    }
  }

<<<<<<< HEAD
=======


  if (!isOpen) return null;
>>>>>>> origin/cursor/delete-old-data-records-6bba



  if (!isOpen) return null;
<<<<<<< HEAD
  return (


=======

  if (!isOpen) return null;
  return (
export default function UseTokensModal({isOpen;
  onClose;
  serviceId;
  defaultType;
}: {isOpen,onClose,serviceId,defaultType;
  isOpen,onClose,serviceId,defaultType;
}: {isOpen: boolean;
  onClose: () => void;
  serviceId?: string;
  defaultType?: RedemptionType;
}) {const [account, setAccount] = useState<string | null>(null)const [tokens, setTokens] = useState<number>(100)const [isSubmitting, setIsSubmitting] = useState(false)const usdValue = (tokens * 0.01).toFixed(2)useEffect(() => {(async () => {const [tokens, setTokens] = useState<number>(100)const [isSubmitting, setIsSubmitting] = useState(false)const usdValue  = (tokens * 0 && 0.01).toFixed(2)useEffect(() => {(async () => {const accs = await getAccounts()}
  async function redeem() {setIsSubmitting(true)try {})if (accs && accs.length > 0) setAccount(accs[0])})()}, [])async function connect() {const accs = await connectMetaMask()if (accs && accs.length > 0) setAccount(accs[0])}
  async function redeem() {setIsSubmitting(true)try {const res = await fetch('/api/tokens/redeem', {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify({ account, amount: tokens, type, serviceId }),})const data = await res && res.json()if (data?.ok) {onClose()}
    } finally {setIsSubmitting(false)}
  }if (!isOpen) return null;
  return (>;
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full sm:max-w-md rounded-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-xl m-0 sm:m-4 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="font-semibold">Use ZION Tokens</div>
          <button onClick={onClose} className="px-2 py-1 rounded hover:bg-gray-100 dark: hover: bg-gray-800">Close</button>
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
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs opacity-70">You can spend tokens to boost visibility, promote listings, or access premium support.</div>
          <button disabled={!account || isSubmitting || tokens <= 0} onClick={redeem} className="enhanced-button enhanced-button-primary disabled:opacity-50">Redeem</button>
        </div>
      </div>
    </div>
  );
  );
}
}

"
>>>>>>> origin/cursor/delete-old-data-records-6bba
            >;
              <option value="boost_profile">Boost profile</option>;
              <option value="promote_listing">Promote listing</option>;
              <option value="premium_support">Get premium support</option>;
            </select>;
          </div>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <button
                onClick={connect}
                className="enhanced-button enhanced-button-primary">;
                Connect MetaMask;
              </button>;


      const res = await fetch('/api/tokens/redeem', {
        method: 'POST'}
  headers: { 'Content-Type': 'application/json'}
},
body: JSON.stringify({ account, amount: tokens, type, serviceId })
      });

const data = await res && res.json();
      if (data?.ok) {;}
        onClose();}
      }
    } finally {;}
      setIsSubmitting(false);}
    }
  }

  if (!isOpen) return null;
  return (

<div className='fixed inset-0 z-[60] flex items-end sm: items-center justify-center'    />
      <div className='absolute inset-0 bg-black/40' onClick={onClose}    />
      <div className='relative w-full sm:max-w-md rounded-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-xl m-0 sm:m-4 p-4'    />
        <div className='flex items-center justify-between mb-3'    />
          <div className='font-semibold'    />Use ZION Tokens</div>
          <button;
onClick={onClos}
}
            className='px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800'    />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

<div className='fixed inset-0 z-[60] flex items-end sm: items-center justify-center' />
      <div className='absolute inset-0 bg-black/40' onClick={onClose} />
      <div className='relative w-full sm:max-w-md rounded-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-xl m-0 sm:m-4 p-4' />
        <div className='flex items-center justify-between mb-3' />
          <div className='font-semibold' />Use ZION Tokens</div>
          <button;
            onClick={onClose}
            className='px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800';
          >;
            Close;
          </button>;
        </div>;
<<<<<<< HEAD

        <div className='text-sm mb-3'    />Conversion rate: 1 ZION = $0.01</div>;
        <div className='space-y-3'    />;
          <div className='text-sm'    />;
            <div className='mb-1'    />Redemption type</div>;
            <select;
              value={type}
              onChange={e =    /> setType(e.target.value as RedemptionType)}
              className='w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-2 py-2'>

              <option value='boost_profile'    />Boost profile</option>;
              <option value='promote_listing'    />Promote listing</option>;
              <option value='premium_support'    />Get premium support</option>;
            </select>;
          </div>;
          <div className='text-sm'    />;
            <div className='mb-1'    />Amount (ZION)</div>;
            <input;
              type='number';
              min={1}
              value={tokens}
              onChange={e =    /> setTokens(parseInt(e.target.value || '0', 10))}
              className='w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-2 py-2';
            />;
            <div className='opacity-70 mt-1'    />Approx. ${usdValue} USD</div>;
          </div>;
          <div className='text-sm'    />;
            <div className='mb-1'    />Wallet</div>;
            {account ? (<div className='rounded border border-green-600 text-green-700 dark:text-green-400 px-2 py-2'    />;}

=======
        <div className='text-sm mb-3>Conversion rate: 1 ZION = $0.01</div>;
        <div className=space-y-3'>;
          <div className='text-sm>;
            <div className=mb-1'>Redemption type</div>;
            <select;
              value={type}
              onChange={e => setType(e.target.value as RedemptionType)}
              className='w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-2 py-2;
            >;
              <option value=boost_profile'>Boost profile</option>;
              <option value='promote_listing>Promote listing</option>;
              <option value=premium_support'>Get premium support</option>;
            </select>;
          </div>;
          <div className='text-sm'>;
            <div className='mb-1'>Amount (ZION)</div>;
              <button;
                onClick={connect}"
                className="enhanced-button enhanced-button-primary">;
                Connect MetaMask;
              </button>;
            <input;
              type='number;
              min={1}
              value={tokens}
              onChange={e => setTokens(parseInt(e.target.value || 0', 10))}
              className='w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-2 py-2;
            />;
            <div className=opacity-70 mt-1'>Approx. ${usdValue} USD</div>;
          </div>;
          <div className='text-sm>;
            <div className=mb-1'>Wallet</div>;
            {account ? (<div className='rounded border border-green-600 text-green-700 dark:text-green-400 px-2 py-2>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                Connected: {account.slice(0, 6)}…{account.slice(-4)}
              </div>;
            ) : (<button;
                onClick={connect}
<<<<<<< HEAD

=======
                className=enhanced-button enhanced-button-primary';
              >;
                Connect MetaMask;
              </button>;
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
        </div>

<div className='mt-4 flex items-center justify-between'>'
          <div className='text-xs opacity-70'>'
            You can spend tokens to boost visibility, promote listings, or,
access premium support.
          </div>
          <button,
disabled={!account |isSubmitting |tokens <= 0}
            onClick={redeem}
            className="enhanced-button enhanced-button-primary "disabled": opacity-50">;"
          <div className="text - sm">;"
            <div className="mb - 1">Amount (ZION)</div>;"
          <div className="text-sm">;"
            <div className="mb-1">Amount (ZION)</div>;"
            <input;
              type="number";"
              min={1}
              value={tokens}
              on_change={(e) => set_tokens (parse_int (e.target.value || "0", 10))}"
              className="w - full rounded border border - gray - 300 "dark":border - gray - 700 bg - transparent px - 2 py - 2";"
            />;
            <div className="opacity - 70 mt - 1">Approx. ${usd_value} USD</div>;"
          </div>;
          <div className="text - sm">;"
            <div className="mb - 1">Wallet</div>;"
            {account ? (<div className="rounded border border - green - 600 text - green - 700 "dark":text - green - 400 px - 2 py - 2">;"
              }
              className="w - full rounded border border - gray - 300 "dark":border - gray - 700 bg - transparent px-2 py-2";"
            />;
            <div className="opacity-70 mt-1">Approx. ${usd_value} USD</div>;"
          </div>;
          <div className="text-sm">;"
            <div className="mb-1">Wallet</div>;"
            {account ? (<div className="rounded border border - green - 600 text - green - 700 "dark":text - green - 400 px-2 py-2">;"
                }
                "Connected": {account.slice (0, 6)}…{account.slice (-4)}
              </div>) : (<button;
                on_click={connect}
                className="enhanced - button enhanced - button - primary";"
                className="enhanced - button enhanced-button-primary">"

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
                className='enhanced-button enhanced-button-primary'    />

                Connect MetaMask;
              </button>;
            )}

          </div>
        </div>

<div className='mt-4 flex items-center justify-between'    />
          <div className='text-xs opacity-70'    />
            You can spend tokens to boost visibility, promote listings, or;
access premium support.
          </div>
          <button;
disabled={!account |isSubmitting |tokens <= 0}
            onClick={redeem}"
            className=\"enhanced-button enhanced-button-primary disabled: opacity-50\"    />;"
          <div className=\"text - sm\"    />;"
            <div className=\"mb - 1\"    />Amount (ZION)</div>;"
          <div className=\"text-sm\"    />;"
            <div className=\"mb-1\"    />Amount (ZION)</div>;
            <input;"
              type=\'number\';
              min={1}
              value={tokens}"
              on_change={(e) =    /> set_tokens (parse_int (e.target.value || \"0\", 10))}"
              className=\'w - full rounded border border - gray - 300 dark:border - gray - 700 bg - transparent px - 2 py - 2\';
            />;"
            <div className=\"opacity - 70 mt - 1\"    />Approx. ${usd_value} USD</div>;
          </div>;"
          <div className=\"text - sm\"    />;"
            <div className=\"mb - 1\"    />Wallet</div>;"
            {account ? (<div className=\"rounded border border - green - 600 text - green - 700 dark:text - green - 400 px - 2 py - 2\"    />;"
              className=\'w - full rounded border border - gray - 300 dark:border - gray - 700 bg - transparent px-2 py-2\';}
            />;}"
            <div className=\"opacity-70 mt-1\"    />Approx. ${usd_value} USD</div>;
          </div>;"
          <div className=\"text-sm\"    />;"
            <div className=\"mb-1\"    />Wallet</div>;"
            {account ? (<div className=\"rounded border border - green - 600 text - green - 700 dark:text - green - 400 px-2 py-2\"    />;}
                Connected: {account.slice (0, 6)}…{account.slice (-4)}
              </div>) : (<button;
                on_click={connect}"
                className=\'enhanced - button enhanced - button - primary\';"
                className=\"enhanced - button enhanced-button-primary\"    />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <div className='text-sm'>
            <div className='mb-1'>Wallet</div>
            {account ? (
              <div className='rounded border border-green-600 text-green-700 dark:text-green-400 px-2 py-2'>
                Connected: {account.slice(0, 6)}…{account.slice(-4)}
              </div>
            ) : (
              <button
                onClick={connect}
                className='enhanced-button enhanced-button-primary'
              >
                Connect MetaMask
              </button>
            )}
          <button
          </div>;
<<<<<<< HEAD


=======
        </div>;
<div className='mt-4 flex items-center justify-between'>;
          <div className='text-xs opacity-70'>;
            You can spend tokens to boost visibility, promote listings, or;
            access premium support.;
          </div>;
          <button;
              <button onClick={connect} className="enhanced-button enhanced-button-primary">Connect MetaMask</button>

            )}

              <button onClick={connect} className="enhanced-button enhanced-button-primary">Connect MetaMask</button>
            )}
          </div>;
        </div>;
        <div className="mt-4 flex items-center justify-between">;
          <div className="text-xs opacity-70">;
            You can spend tokens to boost visibility, promote listings, or;
            access premium support.;
          </div>;
          <button
>>>>>>> origin/cursor/delete-old-data-records-6bba
            disabled={!account |isSubmitting |tokens <= 0}
            onClick={redeem}
            className="enhanced-button enhanced-button-primary disabled: opacity-50">;
          <div className="text - sm">;
            <div className="mb - 1">Amount (ZION)</div>;
          <div className="text-sm">;
            <div className="mb-1">Amount (ZION)</div>;
            <input;
              type="number";
              min={1}
              value={tokens}
              on_change={(e) => set_tokens (parse_int (e.target.value || "0", 10))}
              className="w - full rounded border border - gray - 300 dark:border - gray - 700 bg - transparent px - 2 py - 2";
            />;
            <div className="opacity - 70 mt - 1">Approx. ${usd_value} USD</div>;
          </div>;
          <div className="text - sm">;
            <div className="mb - 1">Wallet</div>;
            {account ? (<div className="rounded border border - green - 600 text - green - 700 dark:text - green - 400 px - 2 py - 2">;
              className="w - full rounded border border - gray - 300 dark:border - gray - 700 bg - transparent px-2 py-2";
            />;
            <div className="opacity-70 mt-1">Approx. ${usd_value} USD</div>;
          </div>;
          <div className="text-sm">;
            <div className="mb-1">Wallet</div>;
            {account ? (<div className="rounded border border - green - 600 text - green - 700 dark:text - green - 400 px-2 py-2">;
                Connected: {account.slice (0, 6)}…{account.slice (-4)}
              </div>) : (
              <button;
                on_click={connect}
                className="enhanced - button enhanced-button-primary";
              >;
                Connect MetaMask;
              </button>)}
          </div>;
        <div className="mt - 4 flex items-center justify-between">;
          <div className="text-xs opacity-70">;
              </div>) : (<button;
                on_click={connect}
                className="enhanced - button enhanced - button - primary";
                className="enhanced - button enhanced-button-primary";
              >;
                Connect MetaMask;
              </button>)}
          </div>;
<<<<<<< HEAD
        </div>;
        <div className="mt - 4 flex items - center justify - between">;
          <div className="text - xs opacity - 70">;
        <div className="mt - 4 flex items-center justify-between">;
          <div className="text-xs opacity-70">;

=======
        <div className="mt - 4 flex items - center justify - between">;"
          <div className="text - xs opacity - 70">;"
        <div className="mt - 4 flex items-center justify-between">;"
          <div className="text-xs opacity-70">;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
            You can spend tokens to boost visibility, promote listings, or;
            access premium support.;
          </div>;
          <button;
            disabled={!account || is_submitting || tokens <= 0}
<<<<<<< HEAD


=======

            on_click={redeem}
            className="enhanced - button enhanced - button - primary disabled: opacity - 50";
            className="enhanced - button enhanced - button-primary disabled: opacity-50";
          >;
            on_click={redeem}
            className="enhanced - button enhanced - button-primary disabled: opacity-50";
          >;
            on_click={redeem}"
            className=\"enhanced - button enhanced - button - primary disabled: opacity - 50\";"
            className=\"enhanced - button enhanced - button-primary disabled: opacity-50\" />

>>>>>>> origin/cursor/delete-old-data-records-6bba
            Redeem;
          </button>;
        </div>;

<<<<<<< HEAD




        <div className="mt-4 flex items-center justify-between">

          <div className="text-xs opacity-70">You can spend tokens to boost visibility, promote listings, or access premium support.</div>
          <button disabled={!account || isSubmitting || tokens <= 0} onClick={redeem} className="enhanced-button enhanced-button-primary disabled: opacity-50">Redeem</button>
        </div>
      </div>
    </div>
=======
        </div>;
      </div>;
"
        <div className="mt-4 flex items-center justify-between">"
          <div className="text-xs opacity-70">You can spend tokens to boost visibility, promote listings, or access premium support.</div>"
            on_click={redeem}"
            className=\'enhanced - button enhanced - button - primary disabled: opacity - 50\';"
            className=\"enhanced - button enhanced - button-primary disabled: opacity-50\"    />

            Redeem;
          </button>;
        </div>;"
      </div>;<div className=\"mt-4 flex items-center justify-between\"    />;"
          <div className=\"text-xs opacity-70\"    />You can spend tokens to boost visibility, promote listings, or access premium support.</div>;"
          <button disabled={!account || isSubmitting || tokens <= 0} onClick={redeem} className=\"enhanced-button enhanced-button-primary disabled: opacity-50\"    />Redeem</button>;
        </div>;
      </div>;
    </div>;
  )}
    </div>)}
}
    </div>)}
  if (!isOpen) return null;



        <div className="mt-4 flex items-center justify-between">
>>>>>>> origin/cursor/delete-old-data-records-6bba

    </div>);
        </div>
      </div>
    </div>
  )

}
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD



=======
  );
);
  );
}
}
"
>>>>>>> origin/cursor/delete-old-data-records-6bba
