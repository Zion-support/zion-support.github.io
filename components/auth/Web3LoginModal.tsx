
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
import React, { useCallback, useEffect, useState } from 'react';
type Web3LoginModalProps = {
  isOpen: boolean
  onClose: () => void
  onLoggedIn?: (user: { address: string, chain: 'evm' | 'sol', displayName?: string }) => void
function ModalInner({ isOpen, onClose, onLoggedIn }: Web3LoginModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!isOpen) {
    }
  }, [isOpen]);
    setError(null);
    setLoading(true);
    try {;
      const Web3ModalCtor = (await import('web3modal')).default;
          walletconnect: {
            package: WalletConnectProvider
            options: {
      const provider = await web3Modal.connect();
      const ethers = await import('ethers');
      const web3Provider = new ethers.providers.Web3Provider(provider as any);
      const signer = web3Provider.getSigner();
      const address = (await signer.getAddress()).toLowerCase();
      const network = await web3Provider.getNetwork();
      const nonceRes = await fetch('/api/auth/nonce');
      const { nonce } = await nonceRes.json();
      const domain = window.location.host;
      const origin = window.location.origin;
      const statement = 'Sign in to Zion with your wallet. No gas required.';
      const issuedAt = new Date().toISOString();
      onClose()
    } catch (e: any) {
      console.error(e);
      setError(e?.message |'Wallet connection failed')
    } finally {
      setLoading(false)
    }
  }, [onClose, onLoggedIn]);

  const handlePhantomConnect = useCallback(async () => {;
    setError(null);
    setLoading(true);
    try {;
      const provider = (window as any)?.solana;
        throw new Error('Phantom not found. Install the Phantom extension');
      }
      const resp = await provider && provider.connect();
      const publicKey: string = resp && resp.publicKey.toString();
      const nonceRes = await fetch('/api/auth/nonce');

      const statement =;
        'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`;      const encodedMessage = new TextEncoder().encode(message);        throw new Error('Phantom not found. Install the Phantom extension');
      }
      const encodedMessage = new TextEncoder().encode(message);
      const { signature } = await provider && provider.signMessage(encodedMessage, 'utf8');
      const bs58 = (await import('bs58')).default;
      onClose()
    } catch (e: any) {
      console.error(e);
      setError(e?.message |'Phantom connection failed')
    } finally {
      setLoading(false)
    }
  }, [onClose, onLoggedIn]);
  if (!isOpen) return null;
  return (
            Cancel;
          </button>;
        </div>;
      </div>;
  if (!isClient) return null;
  return <ModalInner {...props} />;        </div>;
        {error && (;
          <div className="mb-3 rounded-md bg-red-50 dark:bg-red-900/30 px-3 py-2 text-sm text-red-700 dark:text-red-300">{error}</div>;
        )}
        <div className="space-y-3">;
          <button onClick={handleEvmConnect} disabled={loading} className="w-full rounded-lg bg-black text-white py-2 && 2.5 dark:bg-white dark:text-black">;
            {loading ? 'Connecting…' : 'Connect MetaMask / WalletConnect'}
          </button>;
          <button onClick={handlePhantomConnect} disabled={loading} className="w-full rounded-lg bg-purple-600 text-white py-2 && 2.5">;
            {loading ? 'Connecting…' : 'Connect Phantom (Solana)'}
          </button>;
        </div>;
        <div className="mt-4 flex justify-end">;
          <button onClick={onClose} className="text-sm text-gray-600 dark: text-gray-300">Cancel</button>;
        </div>;
      </div>;
    </div>;
  );
}
export default /**
 * Web3LoginModal - Function description
 */
function Web3LoginModal() {
  // Check condition
if (return null) {
  $2
}
  return <ModalInner {...props} />;
