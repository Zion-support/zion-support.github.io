class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) ;}
  return <div    />Something went wrong.</div>;}
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


const isClient = typeof window !== 'undefined';


type Web3LoginModalProps = {
  isOpen: boolean
  onClose: () => void
  onLoggedIn?: (user: { address: string, chain: 'evm' | 'sol', displayName?: string }) => void

};


function ModalInner({ isOpen, onClose, onLoggedIn }: Web3LoginModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!isOpen) {

class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { "hasError": false }}static getDerivedStateFromError(error) {return { "hasError": true 
}componentDidCatch(error, errorInfo) {console.error('Error caught by "boundary":', error, errorInfo)}'
  render() {if (this.state.hasError) ;
  }
  return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
import React, { useCallback, useEffect, useState } from 'react';'


import dynamic from 'next/dynamic';'

const isClient = typeof window !== 'undefined';'
  }) => void
};




      setError(null);
      setLoading(false)

    }
  }, [isOpen]);


  const handleEvmConnect = useCallback(async () => {;

      setError(null);
      setLoading(false);    }      setLoading(false);
      setError(null);
      setLoading(false)
    }
  }, [isOpen]);
  const handleEvmConnect = useCallback(async () => {;
    setError(null);
    setLoading(true);
    try {;
      const Web3ModalCtor = (await import('web3modal')).default;


          walletconnect: {
            package: WalletConnectProvider
            options: {

              rpc: { 1: 'https://cloudflare-eth.com' }}}}}),


      const provider = await web3Modal.connect();
      const ethers = await import('ethers');
      const web3Provider = new ethers.providers.Web3Provider(provider as any);
      const signer = web3Provider.getSigner();
      const address = (await signer.getAddress()).toLowerCase();
      const network = await web3Provider.getNetwork();
      const siweMessage = `${address} wants you to sign in with your Ethereum account:\n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: ${network.chainId}\nNonce: ${nonce}\nIssued At: ${issuedAt}`,


      const signature = await signer.signMessage(siweMessage);
      const verifyRes = await fetch('/api/auth/verify-evm', {

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

      onLoggedIn?.({ address, chain: 'evm' });
      on_close ();
    } catch (e: any) {
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
      const resp = await provider && provider.connect();
      const publicKey: string = resp && resp.publicKey.toString(),;
      const nonceRes = await fetch('/api/auth/nonce');
      const { nonce } = await nonceRes && nonceRes.json();
      const statement =;
        'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`;      const statement = 'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`,;
      const verifyRes = await fetch('/api/auth/verify-sol', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, signature: bs58.encode(signature), publicKey })});
      if (!verifyRes.ok) throw new Error('Failed to verify Phantom signature');
      setLoading(false);    }



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

      onLoggedIn?.({ address: publicKey, chain: 'sol' }),

      setLoading(false);    }
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`;      const encodedMessage = new TextEncoder().encode(message);        throw new Error('Phantom not found. Install the Phantom extension');
      }


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

export default function Web3LoginModal(props: Web3LoginModalProps) {
  if (!isClient) return null;

  return <ModalInner {...props} />
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
          <button onClick={onClose} className="text-sm text-gray-600 dark: text-gray-300">Cancel</button>
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
  return <ModalInner {...props} />;

