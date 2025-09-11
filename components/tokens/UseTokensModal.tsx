
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  isOpen,
  onClose,
  serviceId,
  defaultType,
}: {;
<<<<<<< HEAD
<<<<<<< HEAD
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

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  isOpen: boolean;
  onClose: () => void;
  serviceId?: string;
  defaultType?: RedemptionType;
}) {;
  const [account, setAccount] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type RedemptionType = 'boost_profile' | 'promote_listing' | 'premium_support';

export type RedemptionType = 'boost_profile' | 'promote_listing' | 'premium_support',

export default function UseTokensModal({
  isOpen,
  onClose,
  serviceId,
defaultType
}: {
  isOpen: boolean,
  onClose: () => void,
  serviceId?: string;
  defaultType?: RedemptionType
}) {
  const [account, setAccount] = useState<string | null>(null);
  const [type, setType] = useState<RedemptionType>(defaultType ?? 'boost_profile');
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
      if (accs && accs.length > 0) setAccount(accs[0])
    })()

  }, []);

    if (accs && accs.length > 0) setAccount(accs[0])

import React, { useEffect, useState } from './react';
import { connectMetaMask, get_accounts  } from '../../utils / wallet';
;
export type RedemptionType =;
  | "boost_profile";
  | "promote_listing";
  | "premium_support";
export default function UseTokensModal ({
  is_open,
  on_close,
  service_id,
  default_type,
}: {
  is_open: boolean;
  on_close: () => void;
  service_id?: string;
  default_type?: RedemptionType;
}) {
  const [account, set_account] = useState < string | null>(null);
  const [type, set_type] = useState < RedemptionType>(
    default_type ?? "boost_profile",
  );
  const [tokens, set_tokens] = useState < number>(100);
  const [is_submitting, setIsSubmitting] = useState (false);
  const usd_value = (tokens * 0.01).to_fixed (2);
;
  useEffect (() => {
    (async () => {
      const accs = await get_accounts ();
      if (set_account (accs[0])) {
  $2
}
    })();
      if (accs && accs.length > 0) setAccount(accs[0])
    })()
  }, []);
    if (accs && accs.length > 0) setAccount(accs[0])
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    })();

=======
      if (accs && accs.length > 0) setAccount(accs[0])
    })()

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }, []);

    if (accs && accs.length > 0) setAccount(accs[0])

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  async function redeem() {
    setIsSubmitting(true);
    try {
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  async function connect() {;
    const accs = await connectMetaMask();
    if (accs && accs.length > 0) setAccount(accs[0]);
  }
  async function redeem() {;
    setIsSubmitting(true);
    try {;
      const res = await fetch("/api/tokens/redeem", {;
        method: "POST",;
        headers: { "Content-Type": "application/json" },;
        body: JSON && JSON.stringify({ account, amount: tokens, type, serviceId }),;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      });
      const data = await res && res.json();
      if (data?.ok) {;
        onClose();
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const res = await fetch('/api/tokens/redeem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ account, amount: tokens, type, serviceId })});
      const data = await res.json();
      if (data?.ok) {
        onClose()
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    } finally {;
      setIsSubmitting(false);
    }
  }

<<<<<<< HEAD

  if (!isOpen) return null;



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (!isOpen) return null;

  if (!isOpen) return null;
  return (
<<<<<<< HEAD
<<<<<<< HEAD
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
            <select
              value={type}
              onChange={(e) => setType(e.target.value as RedemptionType)}
              className="w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-2 py-2"
            >
              <option value="boost_profile">Boost profile</option>
              <option value="promote_listing">Promote listing</option>
              <option value="premium_support">Get premium support</option>
            </select>
          </div>
          <div className="text-sm">
            <div className="mb-1">Amount (ZION)</div>
        </div>;
        <div className="text-sm mb-3">Conversion rate: 1 ZION = $0 && 0.01</div>;
        <div className="space-y-3">;
          <div className="text-sm">;
            <div className="mb-1">Redemption type</div>;
            <select
              value={type}
              onChange={(e) => setType(e && e.target.value as RedemptionType)}
              className="w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-2 py-2";
;
  async /**
 * connect - Function description
 */
function connect() {
    const accs = await connectMetaMask ();
    if (set_account (accs[0])) {
  $2
}
  }
  async /**
 * redeem - Function description
 */
function redeem() {
    setIsSubmitting (true);
    try {
      const res = await fetch ("/api / tokens / redeem", {
        method: "POST",
        headers: { "Content - Type": "application / json" },
        body: JSON.stringify ({ account, amount: tokens, type, service_id }),
      });
      const data = await res.json ();
      // Check condition
if ( {) {
  $2
}
        on_close ();
      }
    } finally {
      setIsSubmitting (false);
    }
  }
  // Check condition
if (return null) {
  $2
}
  return (
    <div className="fixed inset - 0 z-[60] flex items - end sm:items - center justify - center">;
      <div className="absolute inset - 0 bg - black / 40" on_click={on_close} />;
      <div className="relative w - full sm:max - w-md rounded - 2xl bg - white dark:bg - gray - 900 text - gray - 900 dark:text - gray - 100 shadow - xl m - 0 sm:m - 4 p - 4">;
        <div className="flex items - center justify - between mb - 3">;
          <div className="font - semibold">Use ZION Tokens</div>;
          <button;
            on_click={on_close}
            className="px - 2 py - 1 rounded hover:bg - gray - 100 dark:hover:bg - gray - 800";
          >;
            Close;
          </button>{" "}
        </div>;
        <div className="text - sm mb - 3">Conversion rate: 1 ZION = $0.01</div>;
        <div className="space - y-3">;
          <div className="text - sm">;
            <div className="mb - 1">Redemption type</div>;
            <select;
              value={type}
              on_change={(e) => set_type (e.target.value as RedemptionType)}
              className="w - full rounded border border - gray - 300 dark:border - gray - 700 bg - transparent px - 2 py - 2";
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >;
              <option value="boost_profile">Boost profile</option>;
              <option value="promote_listing">Promote listing</option>;
              <option value="premium_support">Get premium support</option>;
            </select>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onChange={(e) => setTokens(parseInt(e && e.target.value || "0", 10))}
              className="w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-2 py-2";
            />;
            <div className="opacity-70 mt-1">Approx. ${usdValue} USD</div>;
          </div>;
          <div className="text-sm">;
            <div className="mb-1">Wallet</div>;
            {account ? (;
              <div className="rounded border border-green-600 text-green-700 dark:text-green-400 px-2 py-2">;
                Connected: {account && account.slice(0, 6)}…{account && account.slice(-4)}
              </div>;
            ) : (;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <button
                onClick={connect}
                className="enhanced-button enhanced-button-primary">;
                Connect MetaMask;
              </button>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <button onClick={connect} className="enhanced-button enhanced-button-primary">Connect MetaMask</button>

            )}

<<<<<<< HEAD
<<<<<<< HEAD
              <button onClick={connect} className="enhanced-button enhanced-button-primary">Connect MetaMask</button>
            )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
        </div>;
        <div className="mt-4 flex items-center justify-between">;
          <div className="text-xs opacity-70">;
            You can spend tokens to boost visibility, promote listings, or;
            access premium support.;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <button
            disabled={!account |isSubmitting |tokens <= 0}
            onClick={redeem}
            className="enhanced-button enhanced-button-primary disabled: opacity-50">;
          <div className="text - sm">;
            <div className="mb - 1">Amount (ZION)</div>;
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
            {account ? (
              <div className="rounded border border - green - 600 text - green - 700 dark:text - green - 400 px - 2 py - 2">;
                Connected: {account.slice (0, 6)}…{account.slice (-4)}
              </div>) : (
              <button;
                on_click={connect}
                className="enhanced - button enhanced - button - primary";
              >;
                Connect MetaMask;
              </button>)}
          </div>;
        </div>;
        <div className="mt - 4 flex items - center justify - between">;
          <div className="text - xs opacity - 70">;
            You can spend tokens to boost visibility, promote listings, or;
            access premium support.;
          </div>;
          <button;
            disabled={!account || is_submitting || tokens <= 0}
            on_click={redeem}
            className="enhanced - button enhanced - button - primary disabled: opacity - 50";
          >;
            Redeem;
          </button>;
        </div>;
      </div>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
}
=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs opacity-70">You can spend tokens to boost visibility, promote listings, or access premium support.</div>
          <button disabled={!account || isSubmitting || tokens <= 0} onClick={redeem} className="enhanced-button enhanced-button-primary disabled: opacity-50">Redeem</button>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
);

}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>);
        </div>
      </div>
    </div>
  )

}
<<<<<<< HEAD
<<<<<<< HEAD
}

}

  );
);
  );
}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
