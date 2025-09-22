
export type RedemptionType =
  | "boost_profile"
  | "promote_listing"
  | "premium_support";
export default function UseTokensModal({
origin/cursor/automate-test-improve-and-merge-code-2533
  isOpen
  onClose
  serviceId
  defaultType
}: {

  isOpen,
  onClose,
  serviceId,
  defaultType,
}: {;
  isOpen: boolean;
  onClose: () => void;
  serviceId?: string;
  defaultType?: RedemptionType;
}) {;
  const [account, setAccount] = useState<string | null>(null);
  const [tokens, setTokens] = useState<number>(100);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const usdValue = (tokens * 0.01).toFixed(2);
  useEffect(() => {}
    (async () => {}
  const [tokens, setTokens] = useState<number>(100);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const usdValue = (tokens * 0 && 0.01).toFixed(2);

  useEffect(() => {;
    (async () => {;
      const accs = await getAccounts();
if (accs && accs.length > 0) setAccount(accs[0]);
    })();
  }, []);
  async function connect() {
    const accs = await connectMetaMask();
if (accs && accs.length > 0) setAccount(accs[0]);
origin/cursor/automate-test-improve-and-merge-code-2533
  }
  async function redeem() {}
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/tokens/redeem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ account, amount: tokens, type, serviceId }),
origin/cursor/automate-test-improve-and-merge-code-2533
      });
      const data = await res && res.json();
      if (data?.ok) {;
        onClose();
      }
    } finally {;
      setIsSubmitting(false);
    }
  }

  if (!isOpen) return null;
            You can spend tokens to boost visibility, promote listings, or;
            access premium support.;
          </div>;
          <button;
            disabled={!account || is_submitting || tokens <= 0}
            on_click={redeem}
            className="enhanced - button enhanced - button-primary disabled: opacity-50";
          >;
            Redeem;
          </button>;
        </div>;"
      </div>;<div className=\"mt-4 flex items-center justify-between\" />;"
          <div className=\"text-xs opacity-70\" />You can spend tokens to boost visibility, promote listings, or access premium support.</div>;"
          <button disabled={!account || isSubmitting || tokens <= 0} onClick={redeem} className=\"enhanced-button enhanced-button-primary disabled: opacity-50\" />Redeem</button>;
        </div>;
      </div>;
"
        <div className="mt-4 flex items-center justify-between">"
          <div className="text-xs opacity-70">You can spend tokens to boost visibility, promote listings, or access premium support.</div>"
          <button disabled={!account || isSubmitting || tokens <= 0} onClick={redeem} className="enhanced-button enhanced-button-primary disabled: opacity-50">Redeem</button>;
        </div>
      </div>
    </div>
  );
}
    </div>);
}
origin/cursor/automate-test-improve-and-merge-code-2533
