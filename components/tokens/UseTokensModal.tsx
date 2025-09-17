
export type RedemptionType = 'boost_profile' | 'promote_listing' | 'premium_support';

export default function UseTokensModal({
  isOpen,
  onClose,
  serviceId,
  isOpen: boolean;
  onClose: () => void;
  serviceId?: string;
  defaultType?: RedemptionType;
}) {
  const usdValue = (tokens * 0.01).toFixed(2);

  useEffect(() => {
    (async () => {
      const accs = await getAccounts();
      if (accs && accs.length > 0) setAccount(accs[0]);
    })();

  async function connect() {
    const accs = await connectMetaMask();
    if (accs && accs.length > 0) setAccount(accs[0]);
  }

  async function redeem() {
    setIsSubmitting(true);
    try {
      const data = await res.json();
      if (data?.ok) {
        onClose();
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isOpen) return null;

  return (
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
            <div className="opacity-70 mt-1">Approx. ${usdValue} USD</div>
          </div>

          <div className="text-sm">
            <div className="mb-1">Wallet</div>
            {account ? (
            ) : (
              <button onClick={connect} className="enhanced-button enhanced-button-primary">Connect MetaMask</button>
            )}
          </div>
        </div>

          <button disabled={!account || isSubmitting || tokens <= 0} onClick={redeem} className="enhanced-button enhanced-button-primary disabled:opacity-50">Redeem</button>
        </div>
      </div>
    </div>
  );
}