
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
<<<<<<< HEAD
import dynamic from 'next/dynamic';
<<<<<<< HEAD

=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
const isClient = typeof window !== 'undefined';
<<<<<<< HEAD

type Web3LoginModalProps = {;
  isOpen: boolean;
  onClose: () => void;
  onLoggedIn?: (user: {;
    address: string;
    chain: 'evm' | 'sol';
    displayName?: string;
  }) => void;};const isClient = typeof window !== 'undefined';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
type Web3LoginModalProps = {
  isOpen: boolean
  onClose: () => void
  onLoggedIn?: (user: { address: string, chain: 'evm' | 'sol', displayName?: string }) => void
<<<<<<< HEAD
}
=======
};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
function ModalInner({ isOpen, onClose, onLoggedIn }: Web3LoginModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!isOpen) {
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setError(null);
      setLoading(false);    }      setLoading(false);
<<<<<<< HEAD
=======
=======
      setError(null);
      setLoading(false)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
  }, [isOpen]);
<<<<<<< HEAD
  const handleEvmConnect = useCallback(async () => {
=======

  const handleEvmConnect = useCallback(async () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    setError(null);
    setLoading(true);
    try {;
      const Web3ModalCtor = (await import('web3modal')).default;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      const WalletConnectProvider = (;
        await import('@walletconnect/web3-provider');
      ).default;      const WalletConnectProvider = (await import('@walletconnect/web3-provider')).default;
<<<<<<< HEAD
=======
      const WalletConnectProvider = (await import('@walletconnect/web3-provider')).default;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      const web3Modal = new Web3ModalCtor({
        cacheProvider: false
        providerOptions: {
=======
import dynamic from 'next / dynamic';
;
const is_client = typeof window !== 'undefined';
;
type Web3LoginModalProps = {
  is_open: boolean;
  on_close: () => void;
  onLoggedIn?: (user: {
    address: string;
    chain: 'evm' | 'sol';
    display_name?: string;
  }) => void;}const is_client = typeof window !== 'undefined';
type Web3LoginModalProps = {
  is_open: boolean,
  on_close: () => void,
  onLoggedIn?: (user: { address: string, chain: 'evm' | 'sol', display_name?: string }) => void;
}
;
/**
 * ModalInner - Function description
 */
function ModalInner() {
  const [loading, set_loading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      set_error (null);
      set_loading (false);    }      set_loading (false);
    }
  }, [is_open]);
;
  const handleEvmConnect = useCallback (async () => {
    set_error (null);
    set_loading (true);
    try {
      const Web3ModalCtor = (await import ('web3modal')).default;
      const WalletConnectProvider = (
        await import ('@walletconnect / web3 - provider')).default;      const WalletConnectProvider = (await import ('@walletconnect / web3 - provider')).default;
;
      const web3Modal = new Web3ModalCtor ({
        cache_provider: false,
        provider_options: {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          walletconnect: {
            package: WalletConnectProvider
            options: {
<<<<<<< HEAD
<<<<<<< HEAD
              rpc: { 1: 'https://cloudflare-eth.com' }
            }
          }
        }
      });              rpc: { 1: 'https://cloudflare-eth.com' }}}}})
=======
              rpc: { 1: 'https://cloudflare-eth.com' }}}}}),

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
<<<<<<< HEAD
      const siweMessage = `${address} wants you to sign in with your Ethereum account:\n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: ${network.chainId}\nNonce: ${nonce}\nIssued At: ${issuedAt}`;      const siweMessage = `${address} wants you to sign in with your Ethereum account:\n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: ${network.chainId}\nNonce: ${nonce}\nIssued At: ${issuedAt}`
=======
      const siweMessage = `${address} wants you to sign in with your Ethereum account:\n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: ${network.chainId}\nNonce: ${nonce}\nIssued At: ${issuedAt}`,

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      const signature = await signer.signMessage(siweMessage);
      const verifyRes = await fetch('/api/auth/verify-evm', {
<<<<<<< HEAD
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          message: siweMessage
          signature
          address
          chainId: network.chainId
        })
      });
      if (!verifyRes.ok) throw new Error('Failed to verify signature');
=======
              rpc: { 1: 'https://cloudflare - eth.com' },
            },
          },
        },
      });              rpc: { 1: 'https://cloudflare - eth.com' }}}}}),
      const provider = await web3Modal.connect ();
      const ethers = await import ('ethers');
      const web3Provider = new ethers.providers.Web3Provider (provider as any);
      const signer = web3Provider.get_signer ();
      const address = (await signer.get_address ()).toLowerCase ();
      const network = await web3Provider.get_network ();
;
      const nonce_res = await fetch ('/api / auth / nonce');
      const { nonce } = await nonce_res.json ();
;
      const domain = window.location.host;
      const origin = window.location.origin;
      const statement = 'Sign in to Zion with your wallet. No gas required.';
      const issued_at = new Date ().toISOString ();
      const siwe_message = `${address} wants you to sign in with your Ethereum account:\n\n${statement}\n\nURI: ${origin}\n_version: 1\n_chain ID: ${network.chain_id}\n_nonce: ${nonce}\n_issued At: ${issued_at}`;      const siwe_message = `${address} wants you to sign in with your Ethereum account:\n\n${statement}\n\nURI: ${origin}\n_version: 1\n_chain ID: ${network.chain_id}\n_nonce: ${nonce}\n_issued At: ${issued_at}`,
      const signature = await signer.sign_message (siwe_message);
;
      const verify_res = await fetch ('/api / auth / verify - evm', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          message: siwe_message,
          signature,
          address,
          chain_id: network.chain_id,
        }),
      });
      if (throw new Error ('Failed to verify signature')) {
  $2
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      onLoggedIn?.({ address, chain: 'evm' });
      on_close ();
    } catch (e: any) {
<<<<<<< HEAD
      console.error(e);
      setError(e?.message |'Wallet connection failed');
    } finally {
      setLoading(false);    }      if (!verifyRes.ok) throw new Error('Failed to verify signature');
      onLoggedIn?.({ address, chain: 'evm' })
=======
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: siweMessage, signature, address, chainId: network.chainId })}),
      if (!verifyRes.ok) throw new Error('Failed to verify signature');

      onLoggedIn?.({ address, chain: 'evm' }),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      onClose()
    } catch (e: any) {
      console.error(e);
      setError(e?.message |'Wallet connection failed')
    } finally {
      setLoading(false)
<<<<<<< HEAD
    }
  }, [onClose, onLoggedIn]);
  const handlePhantomConnect = useCallback(async () => {
=======

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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
  }, [onClose, onLoggedIn]);

  const handlePhantomConnect = useCallback(async () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    setError(null);
    setLoading(true);
    try {;
      const provider = (window as any)?.solana;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
      if (!provider |!provider.isPhantom) {
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      if (!provider || !provider && provider.isPhantom) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        throw new Error('Phantom not found. Install the Phantom extension');
      }
      const resp = await provider && provider.connect();
      const publicKey: string = resp && resp.publicKey.toString();
      const nonceRes = await fetch('/api/auth/nonce');
<<<<<<< HEAD
      const { nonce } = await nonceRes && nonceRes.json();
=======
<<<<<<< HEAD
      const { nonce } = await nonceRes.json();
      const statement =
=======
      const { nonce } = await nonceRes && nonceRes.json();
=======
      if (!provider || !provider.isPhantom) {
        throw new Error('Phantom not found. Install the Phantom extension')
      }
      const resp = await provider.connect();
      const publicKey: string = resp.publicKey.toString(),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

      const statement =;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`;      const encodedMessage = new TextEncoder().encode(message);        throw new Error('Phantom not found. Install the Phantom extension');
      }
<<<<<<< HEAD
      const resp = await provider.connect();
      const publicKey: string = resp.publicKey.toString()
      const nonceRes = await fetch('/api/auth/nonce');
      const { nonce } = await nonceRes.json();
<<<<<<< HEAD
      const statement =
        'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`;      const statement = 'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`
=======
      const resp = await provider && provider.connect();
      const publicKey: string = resp && resp.publicKey.toString(),;
      const nonceRes = await fetch('/api/auth/nonce');
      const { nonce } = await nonceRes && nonceRes.json();

      const statement =;
        'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`;      const statement = 'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`,;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      const encodedMessage = new TextEncoder().encode(message);
      const { signature } = await provider && provider.signMessage(encodedMessage, 'utf8');
      const bs58 = (await import('bs58')).default;
<<<<<<< HEAD
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
=======

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

      onLoggedIn?.({ address: publicKey, chain: 'sol' }),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      onClose()
    } catch (e: any) {
      console.error(e);
      setError(e?.message |'Phantom connection failed')
    } finally {
      setLoading(false)
<<<<<<< HEAD
=======

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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
  }, [onClose, onLoggedIn]);
  if (!isOpen) return null;
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60'>;
      <div className='w-full max-w-md rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-2xl'>;
        <div className='mb-4'>;
          <h2 className='text-lg font-semibold'>Connect your wallet</h2>;
          <p className='text-sm text-gray-500 dark:text-gray-400'>;
            No gas needed. We will verify your ownership with a signed message.;
          </p>;
        </div>;
        {error && (;
          <div className='mb-3 rounded-md bg-red-50 dark:bg-red-900/30 px-3 py-2 text-sm text-red-700 dark:text-red-300'>;
            {error}
          </div>;
        )}
        <div className='space-y-3'>;
          <button
            onClick={handleEvmConnect}
            disabled={loading}
            className='w-full rounded-lg bg-black text-white py-2 && 2.5 dark:bg-white dark:text-black'>;
            {loading ? 'Connecting…' : 'Connect MetaMask / WalletConnect'}
          </button>;
          <button
            onClick={handlePhantomConnect}
            disabled={loading}
            className='w-full rounded-lg bg-purple-600 text-white py-2 && 2.5'>;
            {loading ? 'Connecting…' : 'Connect Phantom (Solana)'}
          </button>;
        </div>;
        <div className='mt-4 flex justify-end'>;
          <button
            onClick={onClose}
            className='text-sm text-gray-600 dark:text-gray-300'>;
=======
      console.error (e);
      set_error (e?.message || 'Wallet connection failed');
    } finally {
      set_loading (false);    }      if (throw new Error ('Failed to verify signature')) {
  $2
}
      onLoggedIn?.({ address, chain: 'evm' }),
      on_close ();
    } catch (e: any) {
      console.error (e);
      set_error (e?.message || 'Wallet connection failed');
    } finally {
      set_loading (false);
    }
  }, [on_close, onLoggedIn]);
;
  const handlePhantomConnect = useCallback (async () => {
    set_error (null);
    set_loading (true);
    try {
      const provider = (window as any)?.solana;
      // Check condition
if ( {) {
  $2
}
        throw new Error ('Phantom not found. Install the Phantom extension');
      }
      const resp = await provider.connect ();
      const public_key: string = resp.public_key.to_string ();
      const nonce_res = await fetch ('/api / auth / nonce');
      const { nonce } = await nonce_res.json ();
;
      const statement =;
        'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign - in with Solana\n\n${statement}\n_nonce: ${nonce}\n_address: ${public_key}\n_issued At: ${new Date ().toISOString ()}`;      const encoded_message = new TextEncoder ().encode (message);        throw new Error ('Phantom not found. Install the Phantom extension');
      }
      const resp = await provider.connect ();
      const public_key: string = resp.public_key.to_string (),
      const nonce_res = await fetch ('/api / auth / nonce');
      const { nonce } = await nonce_res.json ();
;
      const statement =;
        'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign - in with Solana\n\n${statement}\n_nonce: ${nonce}\n_address: ${public_key}\n_issued At: ${new Date ().toISOString ()}`;      const statement = 'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign - in with Solana\n\n${statement}\n_nonce: ${nonce}\n_address: ${public_key}\n_issued At: ${new Date ().toISOString ()}`,
      const encoded_message = new TextEncoder ().encode (message);
      const { signature } = await provider.sign_message (encoded_message, 'utf8');
      const bs58 = (await import ('bs58')).default;
;
      const verify_res = await fetch ('/api / auth / verify - sol', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          message,
          signature: bs58.encode (signature),
          public_key,
        }),
      });
      if (throw new Error ('Failed to verify Phantom signature')) {
  $2
}
      onLoggedIn?.({ address: public_key, chain: 'sol' });
      on_close ();
    } catch (e: any) {
      console.error (e);
      set_error (e?.message || 'Phantom connection failed');
    } finally {
      set_loading (false);    }      if (throw new Error ('Failed to verify Phantom signature')) {
  $2
}
      onLoggedIn?.({ address: public_key, chain: 'sol' }),
      on_close ();
    } catch (e: any) {
      console.error (e);
      set_error (e?.message || 'Phantom connection failed');
    } finally {
      set_loading (false);
    }
  }, [on_close, onLoggedIn]);
;
  // Check condition
if (return null) {
  $2
}
  return (
    <div className='fixed inset - 0 z - 50 flex items - center justify - center bg - black / 60'>;
      <div className='w - full max - w-md rounded - xl bg - white dark:bg - neutral - 900 p - 6 shadow - 2xl'>;
        <div className='mb - 4'>;
          <h2 className='text - lg font - semibold'>Connect your wallet</h2>;
          <p className='text - sm text - gray - 500 dark:text - gray - 400'>;
            No gas needed. We will verify your ownership with a signed message.;
          </p>;
        </div>;
        {error && (
          <div className='mb - 3 rounded - md bg - red - 50 dark:bg - red - 900 / 30 px - 3 py - 2 text - sm text - red - 700 dark:text - red - 300'>;
            {error}
          </div>)}
        <div className='space - y-3'>;
          <button;
            on_click={handleEvmConnect}
            disabled={loading}
            className='w - full rounded - lg bg - black text - white py - 2.5 dark:bg - white dark:text - black';
          >;
            {loading ? 'Connecting…' : 'Connect MetaMask / WalletConnect'}
          </button>;
          <button;
            on_click={handlePhantomConnect}
            disabled={loading}
            className='w - full rounded - lg bg - purple - 600 text - white py - 2.5';
          >;
            {loading ? 'Connecting…' : 'Connect Phantom (Solana)'}
          </button>;
        </div>;
        <div className='mt - 4 flex justify - end'>;
          <button;
            on_click={on_close}
            className='text - sm text - gray - 600 dark:text - gray - 300';
          >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            Cancel;
          </button>;
        </div>;
      </div>;
<<<<<<< HEAD
    </div>;
  );
<<<<<<< HEAD

export default function Web3LoginModal(): any (props: Web3LoginModalProps) {;
=======
<<<<<<< HEAD
export default function Web3LoginModal(props: Web3LoginModalProps) {
=======
=======
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-xl bg-white dark: bg-neutral-900 p-6 shadow-2xl">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Connect your wallet</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">No gas needed. We will verify your ownership with a signed message.</p>
        </div>
=======
    </div>);
;
export default /**
 * Web3LoginModal - Function description
 */
function Web3LoginModal() {
  // Check condition
if (return null) {
  $2
}
  return <ModalInner {...props} />;        </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        {error && (
          <div className="mb - 3 rounded - md bg - red - 50 dark:bg - red - 900 / 30 px - 3 py - 2 text - sm text - red - 700 dark:text - red - 300">{error}</div>)}
        <div className="space - y-3">;
          <button on_click={handleEvmConnect} disabled={loading} className="w - full rounded - lg bg - black text - white py - 2.5 dark:bg - white dark:text - black">;
            {loading ? 'Connecting…' : 'Connect MetaMask / WalletConnect'}
          </button>;
          <button on_click={handlePhantomConnect} disabled={loading} className="w - full rounded - lg bg - purple - 600 text - white py - 2.5">;
            {loading ? 'Connecting…' : 'Connect Phantom (Solana)'}
          </button>;
        </div>;
        <div className="mt - 4 flex justify - end">;
          <button on_click={on_close} className="text - sm text - gray - 600 dark: text - gray - 300">Cancel</button>;
        </div>;
      </div>;
    </div>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

export default function Web3LoginModal(): any (props: Web3LoginModalProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
<<<<<<< HEAD
export default function Web3LoginModal(props: Web3LoginModalProps) {
  if (!isClient) return null;

  return <ModalInner {...props} />
}
<<<<<<< HEAD
=======

export default function Web3LoginModal(): any (props: Web3LoginModalProps) {;
  if (!isClient) return null;
  return <ModalInner {...props} />;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
export default /**
 * Web3LoginModal - Function description
 */
function Web3LoginModal() {
  // Check condition
if (return null) {
  $2
}
  return <ModalInner {...props} />;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
