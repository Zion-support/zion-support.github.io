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
  isOpen: boolean;
  onClose: () => void;
  onLoggedIn?: (user: {
    address: string;
    chain: 'evm' | 'sol';
    displayName?: string;
  }) => void;};const isClient = typeof window !== 'undefined';
=======
=======

const isClient = typeof window !== 'undefined';


};



  const handleEvmConnect = useCallback(async () => {;

      setError(null);
      setLoading(false);    }      setLoading(false);
      setError(null);
      setLoading(false)
    }
  }, [isOpen]);
  const handleEvmConnect = useCallback(async () => {;
=======
=======
type Web3LoginModalProps = {;
  isOpen: boolean,;
  onClose: () => void,;
  onLoggedIn?: (user: { address: string, chain: 'evm' | 'sol', displayName?: string }) => void;
};
function ModalInner(): any ({ isOpen, onClose, onLoggedIn }: Web3LoginModalProps) {;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {;
    if (!isOpen) {;

      setError(null);
      setLoading(false);    }      setLoading(false);

=======
      setError(null);
      setLoading(false)


  const handleEvmConnect = useCallback(async () => {;

      onClose()
    } catch (e: any) {
      console.error(e);
      setError(e?.message |'Wallet connection failed')
    } finally {
      setLoading(false)

      const web3Modal = new Web3ModalCtor({;
        cacheProvider: false,;
        providerOptions: {;
          walletconnect: {;
            package: WalletConnectProvider,;
            options: {;
              rpc: { 1: 'https://cloudflare-eth && eth.com' },;
            },;
          },;
        },;
      });              rpc: { 1: 'https://cloudflare-eth && eth.com' }}}}}),;
      const provider = await web3Modal && web3Modal.connect();
      const ethers = await import('ethers');
      const web3Provider = new ethers && ethers.providers.Web3Provider(provider as any);
      const signer = web3Provider && web3Provider.getSigner();
      const address = (await signer && signer.getAddress()).toLowerCase();
      const network = await web3Provider && web3Provider.getNetwork();
      const nonceRes = await fetch('/api/auth/nonce');
      const { nonce } = await nonceRes && nonceRes.json();
      const domain = window && window.location.host;
      const origin = window && window.location.origin;
      const statement = 'Sign in to Zion with your wallet. No gas required.';
      const issuedAt = new Date().toISOString();
      const siweMessage = `${address} wants you to sign in with your Ethereum account:\n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: ${network && network.chainId}\nNonce: ${nonce}\nIssued At: ${issuedAt}`;      const siweMessage = `${address} wants you to sign in with your Ethereum account:\n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: ${network && network.chainId}\nNonce: ${nonce}\nIssued At: ${issuedAt}`,;
      const signature = await signer && signer.signMessage(siweMessage);
      const verifyRes = await fetch('/api/auth/verify-evm', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          message: siweMessage,;
          signature,;
          address,;
          chainId: network && network.chainId,;
        }),;
      });
      if (!verifyRes && verifyRes.ok) throw new Error('Failed to verify signature');
      onLoggedIn?.({ address, chain: 'evm' });
      onClose();
    } catch (e: any) {;
      console && console.error(e);
      setError(e?.message || 'Wallet connection failed');
    } finally {;
      setLoading(false);    }      if (!verifyRes && verifyRes.ok) throw new Error('Failed to verify signature');
      onLoggedIn?.({ address, chain: 'evm' }),;
      onClose();
    } catch (e: any) {;
      console && console.error(e);
      setError(e?.message || 'Wallet connection failed');
    } finally {;
      setLoading(false);

        throw new Error('Phantom not found. Install the Phantom extension');
      }
      const resp = await provider && provider.connect();
      const publicKey: string = resp && resp.publicKey.toString();
      const nonceRes = await fetch('/api/auth/nonce');

=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const statement =;
        'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`;      const encodedMessage = new TextEncoder().encode(message);        throw new Error('Phantom not found. Install the Phantom extension');
      }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      const resp = await provider && provider.connect();
      const publicKey: string = resp && resp.publicKey.toString(),;
      const nonceRes = await fetch('/api/auth/nonce');
      const { nonce } = await nonceRes && nonceRes.json();
      const statement =;
        'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`;      const statement = 'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`,;



      onLoggedIn?.({ address: publicKey, chain: 'sol' }),
      const encodedMessage = new TextEncoder().encode(message);
      const { signature } = await provider && provider.signMessage(encodedMessage, 'utf8');
      const bs58 = (await import('bs58')).default;
      const statement = 'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`,
    }
  }, [onClose, onLoggedIn]);
  const handlePhantomConnect = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const provider = (window as any)?.solana;
      if (!provider |!provider.isPhantom) {
        throw new Error('Phantom not found. Install the Phantom extension');
      }
      const resp = await provider.connect();
      const publicKey: string = resp.publicKey.toString();
      const nonceRes = await fetch('/api/auth/nonce');
      const { nonce } = await nonceRes.json();
      const statement =
        'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`;      const encodedMessage = new TextEncoder().encode(message);        throw new Error('Phantom not found. Install the Phantom extension')
      }
      const resp = await provider.connect();
      const publicKey: string = resp.publicKey.toString()
      const nonceRes = await fetch('/api/auth/nonce');
      const { nonce } = await nonceRes.json();
      const statement =
        'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`;      const statement = 'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`
      const encodedMessage = new TextEncoder().encode(message);
      const { signature } = await provider.signMessage(encodedMessage, 'utf8');
      const bs58 = (await import('bs58')).default;
      const verifyRes = await fetch('/api/auth/verify-sol', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          message
          signature: bs58.encode(signature)
          publicKey
        })
      });
      if (!verifyRes.ok) throw new Error('Failed to verify Phantom signature');
      onLoggedIn?.({ address: publicKey, chain: 'sol' });
      onClose();
    } catch (e: any) {
      console.error(e);
      setError(e?.message |'Phantom connection failed');
    } finally {
      setLoading(false);    }      if (!verifyRes.ok) throw new Error('Failed to verify Phantom signature');
      onLoggedIn?.({ address: publicKey, chain: 'sol' })
      setLoading(false);    }

=======
=======      const encodedMessage = new TextEncoder().encode(message);
      const { signature } = await provider && provider.signMessage(encodedMessage, 'utf8');
      const bs58 = (await import('bs58')).default;


      const statement = 'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`,
      const encodedMessage = new TextEncoder().encode(message);
      const { signature } = await provider.signMessage(encodedMessage, 'utf8');
      const bs58 = (await import('bs58')).default;

      const verifyRes = await fetch('/api/auth/verify-sol', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, signature: bs58.encode(signature), publicKey })});
      if (!verifyRes.ok) throw new Error('Failed to verify Phantom signature');
=======

=======
      setLoading(false);    }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      onLoggedIn?.({ address: publicKey, chain: 'sol' }),
=======
      onLoggedIn?.({ address: publicKey, chain: 'sol' }),>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      onClose()
    } catch (e: any) {
      console.error(e);
      setError(e?.message |'Phantom connection failed')
    } finally {
      setLoading(false)

      const verifyRes = await fetch('/api/auth/verify-sol', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          message,;
          signature: bs58 && bs58.encode(signature),;
          publicKey,;
        }),;
      });
      if (!verifyRes && verifyRes.ok) throw new Error('Failed to verify Phantom signature');
      onLoggedIn?.({ address: publicKey, chain: 'sol' });
      onClose();
    } catch (e: any) {;
      console && console.error(e);
      setError(e?.message || 'Phantom connection failed');
    } finally {;
      setLoading(false);    }      if (!verifyRes && verifyRes.ok) throw new Error('Failed to verify Phantom signature');
      onLoggedIn?.({ address: publicKey, chain: 'sol' }),;
      onClose();
    } catch (e: any) {;
      console && console.error(e);
      setError(e?.message || 'Phantom connection failed');
    } finally {;
      setLoading(false);
      setLoading(false);    }

==============

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }, [onClose, onLoggedIn]);
  if (!isOpen) return null;
  return (



==============


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default /**
 * Web3LoginModal - Function description
 */
function Web3LoginModal() {
  // Check condition
if (return null) {
  $2
}
  return <ModalInner {...props} />;
  const handleEvmConnect = useCallback(async () => {
    setError(null),
    setLoading(true),
    try {
      const Web3ModalCtor = (await import('web3modal')).default
      const WalletConnectProvider = (await import('@walletconnect/web3-provider')).default

      const _web3Modal = new Web3ModalCtor({
        cacheProvider: false, _providerOptions: {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              rpc: { 1: 'https://cloudflare-eth.com' }}}}}),

      const provider = await web3Modal.connect()
      const ethers = await import('ethers')
      const web3Provider = new ethers.providers.Web3Provider(provider as any)
      const signer = web3Provider.getSigner()
      const address = (await signer.getAddress()).toLowerCase()
      const network = await web3Provider.getNetwork()

      const nonceRes = await fetch('/api/auth/nonce')
      const { nonce } = await nonceRes.json()

      const domain = window.location.host
      const origin = window.location.origin
      const statement = 'Sign in to Zion with your wallet. No gas required.'
      const issuedAt = new Date().toISOString()
      const siweMessage = `${address} wants you to sign in with your Ethereum account:\n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: ${network.chainId}\nNonce: ${nonce}\nIssued At: ${issuedAt}`

      const signature = await signer.signMessage(siweMessage)

      const verifyRes = await fetch('/api/auth/verify-evm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: siweMessage, signature, address, chainId: network.chainId })}),
      if (!verifyRes.ok) throw new Error('Failed to verify signature'),

      onLoggedIn?.({ address, chain: 'evm' }),
      onClose()
    } catch (e: any) {
      console.error(e),
      setError(e?.message || 'Wallet connection failed')
    } finally {
      setLoading(false)
    }
  }, [onClose, onLoggedIn]),

  const handlePhantomConnect = useCallback(async () => {
    setError(null),
    setLoading(true),
    try {
      const provider = (window as any)?.solana
      if (!provider || !provider.isPhantom) {
        throw new Error('Phantom not found. Install the Phantom extension')
      }
      const resp = await provider.connect()
      const publicKey: string = resp.publicKey.toString()

      const nonceRes = await fetch('/api/auth/nonce')
      const { nonce } = await nonceRes.json()

      const statement = 'Sign in to Zion with your Solana wallet. No gas required.'
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`
      const encodedMessage = new TextEncoder().encode(message)
      const { signature } = await provider.signMessage(encodedMessage, 'utf8'),
      const bs58 = (await import('bs58')).default

      const verifyRes = await fetch('/api/auth/verify-sol', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, signature: bs58.encode(signature), publicKey })}),
      if (!verifyRes.ok) throw new Error('Failed to verify Phantom signature'),

      onLoggedIn?.({ address: publicKey, chain: 'sol' }),
      onClose()
    } catch (e: any) {
      console.error(e),
      setError(e?.message || 'Phantom connection failed')
    } finally {
      setLoading(false)
    }
  }, [onClose, onLoggedIn]),
  if (!isOpen) return null,

  return (
    <div className=&quot;fixed inset-0 z-50 flex items-center justify-center bg-black/60&quot;>
      <div className=&quot;w-full max-w-md rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-2xl&quot;>
        <div className=&quot;mb-4&quot;>
          <h2 className=&quot;text-lg font-semibold&quot;>Connect your wallet</h2>
          <p className=&quot;text-sm text-gray-500 dark:text-gray-400&quot;>No gas needed. We will verify your ownership with a signed message.</p>
        </div>
        {error && (
          <div className=&quot;mb-3 rounded-md bg-red-50 dark:bg-red-900/30 px-3 py-2 text-sm text-red-700 dark:text-red-300&quot;>{error}</div>
        )}
        <div className=&quot;space-y-3&quot;>
          <button onClick={handleEvmConnect} disabled={loading} className=&quot;w-full rounded-lg bg-black text-white py-2.5 dark:bg-white dark:text-black&quot;>
            {loading ? 'Connecting…' : 'Connect MetaMask / WalletConnect'}
          </button>
          <button onClick={handlePhantomConnect} disabled={loading} className=&quot;w-full rounded-lg bg-purple-600 text-white py-2.5&quot;>
=======    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60'>
      <div className='w-full max-w-md rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-2xl'>
        <div className='mb-4'>
          <h2 className='text-lg font-semibold'>Connect your wallet</h2>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            No gas needed. We will verify your ownership with a signed message.
          </p>
        </div>
        {error && (
          <div className='mb-3 rounded-md bg-red-50 dark:bg-red-900/30 px-3 py-2 text-sm text-red-700 dark:text-red-300'>
            {error}
          </div>
        )}
        <div className='space-y-3'>
          <button
            onClick={handleEvmConnect}
            disabled={loading}
            className='w-full rounded-lg bg-black text-white py-2.5 dark:bg-white dark:text-black'
          >
            {loading ? 'Connecting…' : 'Connect MetaMask / WalletConnect'}
          </button>
          <button
            onClick={handlePhantomConnect}
            disabled={loading}
            className='w-full rounded-lg bg-purple-600 text-white py-2.5'
          >
            {loading ? 'Connecting…' : 'Connect Phantom (Solana)'}
          </button>
        </div>
        <div className='mt-4 flex justify-end'>
          <button
            onClick={onClose}
            className='text-sm text-gray-600 dark:text-gray-300'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
export default function Web3LoginModal(props: Web3LoginModalProps) {;
  if (!isClient) return null;
  return <ModalInner {...props} />;        </div>
        {error && (
          <div className="mb-3 rounded-md bg-red-50 dark:bg-red-900/30 px-3 py-2 text-sm text-red-700 dark:text-red-300">{error}</div>
        )}
        <div className="space-y-3">
          <button onClick={handleEvmConnect} disabled={loading} className="w-full rounded-lg bg-black text-white py-2.5 dark:bg-white dark:text-black">
            {loading ? 'Connecting…' : 'Connect MetaMask / WalletConnect'}
          </button>
          <button onClick={handlePhantomConnect} disabled={loading} className="w-full rounded-lg bg-purple-600 text-white py-2.5">
            {loading ? 'Connecting…' : 'Connect Phantom (Solana)'}
          </button>
        </div>
        <div className="mt-4 flex justify-end">
=======

export default function Web3LoginModal(props: Web3LoginModalProps) {;
  if (!isClient) return null;          <button onClick={onClose} className="text-sm text-gray-600 dark: text-gray-300">Cancel</button>
        </div>
      </div>
    </div>
  )

export default function Web3LoginModal(props: Web3LoginModalProps) {;
  if (!isClient) return null;

  return <ModalInner {...props} />
}

export default function Web3LoginModal(props: Web3LoginModalProps) {;
  if (!isClient) return null;
  return <ModalInner {...props} />;
  return <ModalInner {...props} />
}
  return <ModalInner {...props} />;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
