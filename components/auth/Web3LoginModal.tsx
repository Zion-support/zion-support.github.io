<<<<<<< HEAD
import React, { useCallback, useEffect, useState } from 'react';
=======
<<<<<<< HEAD
<<<<<<< HEAD

class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
    }
    return this.props.children;
  }
=======
useEffect ( () => {
  if (!isOpen) {
  const web3Modal = new Web3ModalCtor ({
  cacheProvider: false, providerOptions: {
  walletconnect: {
  if (!isOpen) return null
return (<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" > <div className="w-full max-w-md rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-2xl" > <div className="mb-4" > <h2 className="text-lg font-semibold" >Connect your wallet</h2> <p className="text-sm text-gray-500 dark:text-gray-400" >No gas needed. We will verify your ownership with a signed message.</p> </div> </button> </div> 
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
    return this.props.children
import React, { useCallback, useEffect, useState } from 'react'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
type Web3LoginModalProps = {
  isOpen: boolean
  onClose: () => void
  onLoggedIn?: (user: { address: string, chain: 'evm' | 'sol', displayName?: string }) => void
import dynamic from 'next/dynamic';
const isClient = $2;
type Web3LoginModalProps = $2;
  onClose: () => void,
  onLoggedIn?: (user: { address: string, chain: 'evm' | 'sol', displayName?: string }) => void
},

<<<<<<< HEAD
function ModalInner({ isOpen, onClose, onLoggedIn }: Web3LoginModalProps) {
  const [loading, setLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),

  useEffect(() => {
    if (!isOpen) {

      setError(null);
setLoading(false);
      setError($2);
=======
import dynamic from 'next/dynamic'
const isClient = typeof window !== 'undefined'
  }) => void
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
}
    setError(null)
    setLoading(true)
    try {;'
      const Web3ModalCtor = (await import('web3modal')).default
      const ethers = await import('ethers')
      const web3Provider = new ethers.providers.Web3Provider(provider as any)
      const signer = web3Provider.getSigner()
      const address = (await signer.getAddress()).toLowerCase()
      const network = await web3Provider.getNetwork();'
      const nonceRes = await fetch('/api/auth/nonce')
      const { nonce } = await nonceRes.json()
      const domain = window.location.host
      const origin = window.location.origin;'
      const statement = 'Sign in to Zion with your wallet. No gas required.'
      const issuedAt = new Date().toISOString()
      onClose()
    } catch (e: any) {}
      console.error(e);'
      setError(e?.message |'Wallet connection failed')
    } finally {}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      setLoading(false)
    }
  }, [isOpen]),

  const handleEvmConnect = useCallback(async () => {

    setError(null);
    setLoading(true);
    try {;
      const Web3ModalCtor = (await import('web3modal')).default;

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
    setError($2);
    setLoading($2);
    try {
      const Web3ModalCtor = $2;
      const WalletConnectProvider = $2;
      const web3Modal = new Web3ModalCtor($2);
      const provider = await web3Modal.connect($2);
      const ethers = await import($2);
      const web3Provider = new ethers.providers.Web3Provider($2);
      const signer = web3Provider.getSigner($2);
      const address = (await signer.getAddress()).toLowerCase($2);
      const network = await web3Provider.getNetwork($2);
      const nonceRes = await fetch($2);
      const { nonce } = await nonceRes.json($2);
      const domain = $2;
      const origin = $2;
      const statement = $2;
      const issuedAt = new Date().toISOString($2);
      const siweMessage = $2;
      const signature = await signer.signMessage($2);
      const verifyRes = await fetch('/api/auth/verify-evm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: siweMessage, signature, address, chainId: network.chainId })}),
      if (!verifyRes.ok) throw new Error($2);
      onLoggedIn?.({ address, chain: 'evm' }),
      onClose()
    } catch (e: any) {
      console.error($2);
      setError(e?.message || 'Wallet connection failed')
    } finally {
      setLoading(false)
    }
  }, [onClose, onLoggedIn]),

  const handlePhantomConnect = useCallback(async () => {
    setError($2);
    setLoading($2);
    try {
      const provider = $2;
      if (!provider || !provider.isPhantom) {
        throw new Error('Phantom not found. Install the Phantom extension')
      }
      const resp = await provider.connect($2);
      const publicKey: string = resp.publicKey.toString($2);
      const nonceRes = await fetch($2);
      const { nonce } = await nonceRes.json($2);
      const statement = $2;
      const message = $2;
      const encodedMessage = new TextEncoder().encode($2);
      const { signature } = await provider.signMessage($2);
      const bs58 = $2;
      const verifyRes = await fetch('/api/auth/verify-sol', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        throw new Error('Phantom not found. Install the Phantom extension');
      }
      const resp = await provider && provider.connect();
      const publicKey: string = resp && resp.publicKey.toString();
      const nonceRes = await fetch('/api/auth/nonce');
      const statement =;
        'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`;      const encodedMessage = new TextEncoder().encode(message);        throw new Error('Phantom not found. Install the Phantom extension');
      }

      setLoading(false);    }

        body: JSON.stringify({ message, signature: bs58.encode(signature), publicKey })}),
      if (!verifyRes.ok) throw new Error($2);
      onLoggedIn?.({ address: publicKey, chain: 'sol' }),
      onClose()
    } catch (e: any) {
      console.error($2);
      setError(e?.message || 'Phantom connection failed')
    } finally {
      setLoading(false)
    }
  }, [onClose, onLoggedIn]),

  if (!isOpen) return null,

  return (

            Cancel;
          </button>;
        </div>;
      </div>;
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
<<<<<<< HEAD
type Web3LoginModalProps = {isOpen: boolean;
  onClose: () => void;
  onLoggedIn?: (user: { address: string, chain: 'evm' | 'sol', displayName?: string }) => void;
import dynamic from 'next/dynamic';
const isClient = typeof window !== 'undefined';
  }) => void;
}function ModalInner() {const [loading, setLoading] = useState(false)const [error, setError] = useState<string | null>(null)useEffect(() => {if (!isOpen) {setError(null)setLoading(false)}
  }, [isOpen])const handleEvmConnect = useCallback(async () => {setError(null)setLoading(true)try {const Web3ModalCtor  = (await import('web3modal')).default;const WalletConnectProvider = (await import('@walletconnect/web3-provider')).default;const web3Modal = new Web3ModalCtor({cacheProvider: false;
        providerOptions: {walletconnect: {package: WalletConnectProvider;
            options: {rpc: { 1: 'https://cloudflare-eth.com' },},},},})const provider = await web3Modal.connect()const ethers = await import('ethers')const web3Provider = new ethers.providers.Web3Provider(provider as any)const signer = web3Provider.getSigner()const address = (await signer.getAddress()).toLowerCase()const network = await web3Provider.getNetwork()const nonceRes = await fetch('/api/auth/nonce')const { nonce } = await nonceRes.json()const domain = window.location.host;
      const origin = window.location.origin;
      const statement = 'Sign in to Zion with your wallet. No gas required.';
      const issuedAt  = new Date().toISOString()onClose()} catch (e: any) {console.error(e)setError(e?.message |'Wallet connection failed')} finally {setLoading(false)const siweMessage  = `${address} wants you to sign in with your Ethereum account:\n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: ${network.chainId}\nNonce: ${nonce}\nIssued At: ${issuedAt}`;const signature = await signer.signMessage(siweMessage)const verifyRes = await fetch('/api/auth/verify-evm', {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify({message: siweMessage,signature,address,chainId: network.chainId,}),})if (!verifyRes.ok) throw new Error('Failed to verify signature')onLoggedIn?.({ address, chain: 'evm' })onClose()} catch (e: any) {console.error(e)setError(e?.message |'Wallet connection failed')} finally {setLoading(false)}
  }, [onClose, onLoggedIn])const handlePhantomConnect = useCallback(async () => {setError(null)setLoading(true)try {const provider  = (window as any)?.solana;throw new Error('Phantom not found. Install the Phantom extension')}
      const resp = await provider && provider.connect()const publicKey: string = resp && resp.publicKey.toString()const nonceRes = await fetch('/api/auth/nonce')const statement =;
        'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`;      const encodedMessage = new TextEncoder().encode(message)throw new Error('Phantom not found. Install the Phantom extension')}setLoading(false)}onLoggedIn?.({ address: publicKey, chain: 'sol' }),onClose()} catch (e: any) {console.error(e)setError(e?.message |'Phantom connection failed')} finally {setLoading(false)if (!provider || !provider.isPhantom) {throw new Error('Phantom not found. Install the Phantom extension')}
      const resp = await provider.connect()const publicKey: string  = resp.publicKey.toString()const nonceRes = await fetch('/api/auth/nonce')const { nonce }  = await nonceRes.json()const statement =;
        'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`;
      const encodedMessage = new TextEncoder().encode(message)const { signature } = await provider.signMessage(encodedMessage, 'utf8')const bs58 = (await import('bs58')).default;
      const verifyRes = await fetch('/api/auth/verify-sol', {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify({message,signature: bs58.encode(signature),publicKey,}),})if (!verifyRes.ok) throw new Error('Failed to verify Phantom signature')onLoggedIn?.({ address: publicKey, chain: 'sol' })onClose()} catch (e: any) {console.error(e)setError(e?.message |'Phantom connection failed')} finally {setLoading(false)}
  }, [onClose, onLoggedIn])if (!isOpen) return null;
  return (Cancel;
          </button>;
        </div>;
      </div>;
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60'>;
<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60'>;
      <div className='w-full max-w-md rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-2xl'>;
        <div className='mb-4'>;
          <h2 className='text-lg font-semibold'>Connect your wallet</h2>;
          <p className='text-sm text-gray-500 dark:text-gray-400'>;
            No gas needed. We will verify your ownership with a signed message.;
          </p>;
        </div>;
        {error && (<div className='mb-3 rounded-md bg-red-50 dark:bg-red-900/30 px-3 py-2 text-sm text-red-700 dark:text-red-300'>;
            {error}
          </div>;
        )}
        <div className='space-y-3'>;
          <button;
            onClick={handleEvmConnect}
            disabled={loading}
            className='w-full rounded-lg bg-black text-white py-2.5 dark:bg-white dark:text-black';
          >;
            {loading ? 'Connecting…' : 'Connect MetaMask / WalletConnect'}
          </button>;
          <button;
            onClick={handlePhantomConnect}
            disabled={loading}
            className='w-full rounded-lg bg-purple-600 text-white py-2.5';
          >;
            {loading ? 'Connecting…' : 'Connect Phantom (Solana)'}
          </button>;
        </div>;
        <div className='mt-4 flex justify-end'>;
          <button;
            onClick={onClose}
            className='text-sm text-gray-600 dark:text-gray-300';
          >;
            Cancel;
          </button>;
        </div>;
      </div>;
    </div>;
  )return <ModalInner {...props} />;        </div>;
        {error && (<div className="mb-3 rounded-md bg-red-50 dark:bg-red-900/30 px-3 py-2 text-sm text-red-700 dark:text-red-300">{error}</div>;
        )}
        <div className="space-y-3">;
          <button onClick={handleEvmConnect} disabled={loading} className="w-full rounded-lg bg-black text-white py-2.5 dark:bg-white dark:text-black">;
            {loading ? 'Connecting…' : 'Connect MetaMask / WalletConnect'}
          </button>;
          <button onClick={handlePhantomConnect} disabled={loading} className="w-full rounded-lg bg-purple-600 text-white py-2.5">;
            {loading ? 'Connecting…' : 'Connect Phantom (Solana)'}
          </button>;
        </div>;
        <div className="mt-4 flex justify-end">;
        </div>;
      </div>;
    </div>;
  )}export default function Web3LoginModal() {if (!isClient) return null;return <ModalInner {...props} />;        </div>;
        {error && (<div className="mb-3 rounded-md bg-red-50 dark:bg-red-900/30 px-3 py-2 text-sm text-red-700 dark:text-red-300">{error}</div>;
        )}
        <div className="space-y-3">;
          <button onClick={handleEvmConnect} disabled={loading} className="w-full rounded-lg bg-black text-white py-2.5 dark:bg-white dark:text-black">;
=======

        <div className=\"space-y-3\"    />;"
          <button onClick={handleEvmConnect} disabled={loading} className=\"w-full rounded-lg bg-black text-white py-2.5 dark:bg-white dark:text-black\"    />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
            {loading ? 'Connecting…' : 'Connect MetaMask / WalletConnect'}
          </button>;
          <button onClick={handlePhantomConnect} disabled={loading} className="w-full rounded-lg bg-purple-600 text-white py-2.5">;
            {loading ? 'Connecting…' : 'Connect Phantom (Solana)'}
          </button>
<<<<<<< HEAD
        </div>
        <div className="mt-4 flex justify-end">
=======
        </div>;"
        <div className=\"mt-4 flex justify-end\"    />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
        </div>
      </div>
    </div>
  )
}

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
        </div>
      </div>
    </div>
  )
}

export default function Web3LoginModal(props: Web3LoginModalProps) {;
  if (!isClient) return null;
  return <ModalInner {...props} />;
  return <ModalInner {...props} />
}
          </button>;
        </div>;
        <div className="mt-4 flex justify-end">;
        </div>;
      </div>;
    </div>;
  )}export default function Web3LoginModal() {if (!isClient) return null;
  return <ModalInner {...props} />;
  return <ModalInner {...props} />;
}
  return <ModalInner {...props} />;return <ModalInner {...props} />;
  return <ModalInner {...props} />;
  return <ModalInner {...props} />;

}
    <div className = $2;
  return <ModalInner {...props} />
}
