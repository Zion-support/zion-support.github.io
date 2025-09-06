import React, { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
<<<<<<< HEAD

const isClient = typeof window !== 'undefined';

type Web3LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onLoggedIn?: (user: {
    address: string;
    chain: 'evm' | 'sol';
    displayName?: string;
  }) => void;
=======
const isClient = typeof window !== 'undefined';
type Web3LoginModalProps = {
  isOpen: boolean,
  onClose: () => void,
  onLoggedIn?: (user: { address: string, chain: 'evm' | 'sol', displayName?: string }) => void
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
};

function ModalInner({ isOpen, onClose, onLoggedIn }: Web3LoginModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setError(null);
<<<<<<< HEAD
      setLoading(false);
=======
      setLoading(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }
  }, [isOpen]);

  const handleEvmConnect = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const Web3ModalCtor = (await import('web3modal')).default;
<<<<<<< HEAD
      const WalletConnectProvider = (
        await import('@walletconnect/web3-provider')
      ).default;
=======
      const WalletConnectProvider = (await import('@walletconnect/web3-provider')).default;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

      const web3Modal = new Web3ModalCtor({
        cacheProvider: false,
        providerOptions: {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
<<<<<<< HEAD
              rpc: { 1: 'https://cloudflare-eth.com' },
            },
          },
        },
      });
=======
              rpc: { 1: 'https://cloudflare-eth.com' }}}}}),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

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
      const siweMessage = `${address} wants you to sign in with your Ethereum account:\n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: ${network.chainId}\nNonce: ${nonce}\nIssued At: ${issuedAt}`;
=======
      const siweMessage = `${address} wants you to sign in with your Ethereum account:\n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: ${network.chainId}\nNonce: ${nonce}\nIssued At: ${issuedAt}`,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

      const signature = await signer.signMessage(siweMessage);

      const verifyRes = await fetch('/api/auth/verify-evm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
        body: JSON.stringify({
          message: siweMessage,
          signature,
          address,
          chainId: network.chainId,
        }),
      });
      if (!verifyRes.ok) throw new Error('Failed to verify signature');

      onLoggedIn?.({ address, chain: 'evm' });
      onClose();
    } catch (e: any) {
      console.error(e);
      setError(e?.message || 'Wallet connection failed');
    } finally {
      setLoading(false);
=======
        body: JSON.stringify({ message: siweMessage, signature, address, chainId: network.chainId })}),
      if (!verifyRes.ok) throw new Error('Failed to verify signature');

      onLoggedIn?.({ address, chain: 'evm' }),
      onClose()
    } catch (e: any) {
      console.error(e);
      setError(e?.message || 'Wallet connection failed')
    } finally {
      setLoading(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }
  }, [onClose, onLoggedIn]);

  const handlePhantomConnect = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const provider = (window as any)?.solana;
      if (!provider || !provider.isPhantom) {
<<<<<<< HEAD
        throw new Error('Phantom not found. Install the Phantom extension');
      }
      const resp = await provider.connect();
      const publicKey: string = resp.publicKey.toString();
=======
        throw new Error('Phantom not found. Install the Phantom extension')
      }
      const resp = await provider.connect();
      const publicKey: string = resp.publicKey.toString(),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

      const nonceRes = await fetch('/api/auth/nonce');
      const { nonce } = await nonceRes.json();

<<<<<<< HEAD
      const statement =
        'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`;
=======
      const statement = 'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      const encodedMessage = new TextEncoder().encode(message);
      const { signature } = await provider.signMessage(encodedMessage, 'utf8');
      const bs58 = (await import('bs58')).default;

      const verifyRes = await fetch('/api/auth/verify-sol', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
        body: JSON.stringify({
          message,
          signature: bs58.encode(signature),
          publicKey,
        }),
      });
      if (!verifyRes.ok) throw new Error('Failed to verify Phantom signature');

      onLoggedIn?.({ address: publicKey, chain: 'sol' });
      onClose();
    } catch (e: any) {
      console.error(e);
      setError(e?.message || 'Phantom connection failed');
    } finally {
      setLoading(false);
=======
        body: JSON.stringify({ message, signature: bs58.encode(signature), publicKey })});
      if (!verifyRes.ok) throw new Error('Failed to verify Phantom signature');

      onLoggedIn?.({ address: publicKey, chain: 'sol' }),
      onClose()
    } catch (e: any) {
      console.error(e);
      setError(e?.message || 'Phantom connection failed')
    } finally {
      setLoading(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }
  }, [onClose, onLoggedIn]);

  if (!isOpen) return null;

  return (
<<<<<<< HEAD
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60'>
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

export default function Web3LoginModal(props: Web3LoginModalProps) {
  if (!isClient) return null;
  return <ModalInner {...props} />;
=======
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-xl bg-white dark: bg-neutral-900 p-6 shadow-2xl">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Connect your wallet</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">No gas needed. We will verify your ownership with a signed message.</p>
        </div>
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
          <button onClick={onClose} className="text-sm text-gray-600 dark: text-gray-300">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default function Web3LoginModal(props: Web3LoginModalProps) {
  if (!isClient) return null;
  return <ModalInner {...props} />
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
