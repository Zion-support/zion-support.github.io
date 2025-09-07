<<<<<<< HEAD
<<<<<<< HEAD
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
    }
    return this.props.children;
  }
    return this.props.children
import React, { useCallback, useEffect, useState } from 'react'
}'
import React, { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const isClient = typeof window !== 'undefined';
type Web3LoginModalProps = {
  isOpen: boolean,
  onClose: () => void,
  onLoggedIn?: (user: { address: string, chain: 'evm' | 'sol', displayName?: string }) => void
};


function ModalInner() {
  }
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    }

    if (!isOpen) {
      setError(null);
    }
    return this.props.children;
  }

    return this.props.children
import React, { useCallback, useEffect, useState } from react'
}'
import React, { useCallback, useEffect, useState } from react;
import dynamic from 'next/dynamic';
const isClient = typeof window !== undefined;

}
    setError(null)
    setLoading(true)
    try {'
      const Web3ModalCtor = (await import('web3modal)).default
      const ethers = await import(ethers')
      const web3Provider = new ethers.providers.Web3Provider(provider as any)
      const signer = web3Provider.getSigner()
      const address = (await signer.getAddress()).toLowerCase()
      const network = await web3Provider.getNetwork();'
      const nonceRes = await fetch(/api/auth/nonce)
      const { nonce } = await nonceRes.json()
      const domain = window.location.host
      const origin = window.location.origin;'
      const statement = 'Sign in to Zion with your wallet. No gas required.
      const issuedAt = new Date().toISOString()
      onClose()
    } catch (e: any) {}
      console.error(e);
      setError(e?.message |'Wallet connection failed')
    } finally {}
      setLoading(false)
    }
  }, [isOpen]);

  const handleEvmConnect = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const Web3ModalCtor = (await import(web3modal)).default;
      const WalletConnectProvider = (await import('@walletconnect/web3-provider')).default;

      const web3Modal = new Web3ModalCtor({
        cacheProvider: false,
        providerOptions: {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              rpc: { 1: https://cloudflare-eth.com }}}}}),

      const provider = await web3Modal.connect();

origin/cursor/automate-test-improve-and-merge-code-2533
=======

class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) ;}
  return <div    />Something went wrong.</div>;}
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
    return this.props.children;
  }
}
import React, { useCallback, useEffect, useState } from 'react';
<<<<<<< HEAD
import dynamic from 'next/dynamic';
const isClient = typeof window !== 'undefined';

type Web3LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onLoggedIn?: (user: {
    address: string;
    chain: 'evm' | 'sol';
    displayName?: string;
  }) => void;};const isClient = typeof window !== 'undefined';
=======


import dynamic from 'next/dynamic';

const isClient = typeof window !== 'undefined';
<<<<<<< HEAD
  }) => void;
};


>>>>>>> origin/chore/fix-lint-and-merge
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
type Web3LoginModalProps = {
  isOpen: boolean
  onClose: () => void
  onLoggedIn?: (user: { address: string, chain: 'evm' | 'sol', displayName?: string }) => void
<<<<<<< HEAD
}
=======

};


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
function ModalInner({ isOpen, onClose, onLoggedIn }: Web3LoginModalProps) {
  const [loading, setLoading] = useState(false);

const [error, setError] = useState<string | null>(null);
  useEffect(() => {

    if (!isOpen) {
<<<<<<< HEAD
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
=======

<<<<<<< HEAD
      setError(null);}
setLoading(false);}
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

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
  }, [isOpen]);
<<<<<<< HEAD
  const handleEvmConnect = useCallback(async () => {
origin/cursor/automate-test-improve-and-merge-code-2533
    setError(null);
    setLoading(true);
    try {;'
      const Web3ModalCtor = (await import('web3modal')).default;
=======

<<<<<<< HEAD
const handleEvmConnect = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {;
=======

  const handleEvmConnect = useCallback(async () => {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setError(null);
    setLoading(true);
    try {;
      const Web3ModalCtor = (await import('web3modal')).default;
<<<<<<< HEAD
      const WalletConnectProvider = (await import('@walletconnect/web3-provider')).default;
      const web3Modal = new Web3ModalCtor({
        cacheProvider: false
        providerOptions: {
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
          walletconnect: {
            package: WalletConnectProvider
            options: {
              rpc: { 1: 'https://cloudflare-eth.com' }}}}}),
      setError(null);
      setLoading(false);    }      setLoading(false)
    }
  }, [isOpen]);
  const handleEvmConnect = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const Web3ModalCtor = (await import('web3modal')).default;
      const WalletConnectProvider = (
        await import('@walletconnect/web3-provider')
      ).default;      const WalletConnectProvider = (await import('@walletconnect/web3-provider')).default;
      const web3Modal = new Web3ModalCtor({
        cacheProvider: false
        providerOptions: {
          walletconnect: {
            package: WalletConnectProvider
            options: {
              rpc: { 1: 'https://cloudflare-eth.com' }
            }
          }
        }
      });              rpc: { 1: 'https://cloudflare-eth.com' }}}}})
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const Web3ModalCtor = (await import('web3modal')).default;

>>>>>>> origin/chore/fix-lint-and-merge
const WalletConnectProvider = (
        await import('@walletconnect/web3-provider')
      ).default;

const web3Modal = new Web3ModalCtor({
        cacheProvider: false;
providerOptions: {
          walletconnect: {
            package: WalletConnectProvider;
options: {}
rpc: { 1: 'https://cloudflare-eth.com'}
}
            }
          }
        }
      });

<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      const provider = await web3Modal.connect();
      const ethers = await import('ethers');
      const web3Provider = new ethers.providers.Web3Provider(provider as any);
      const signer = web3Provider.getSigner();
      const address = (await signer.getAddress()).toLowerCase();
      const network = await web3Provider.getNetwork();
<<<<<<< HEAD
      const ethers = await import(ethers');
      const web3Provider = new ethers.providers.Web3Provider(provider as any);
      const signer = web3Provider.getSigner();
      const address = (await signer.getAddress()).toLowerCase();
=======
      const nonceRes = await fetch('/api/auth/nonce');
      const { nonce } = await nonceRes.json();
      const domain = window.location.host;
      const origin = window.location.origin;
      const statement = 'Sign in to Zion with your wallet. No gas required.';
      const issuedAt = new Date().toISOString();
<<<<<<< HEAD
      onLoggedIn?.({ address, chain: 'evm' });
      on_close ();
    } catch (e: any) {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

=======
const provider = await web3Modal.connect();

const ethers = await import('ethers');
>>>>>>> origin/chore/fix-lint-and-merge

const web3Provider = new ethers.providers.Web3Provider(provider as any);

const signer = web3Provider.getSigner();

const address = (await signer.getAddress()).toLowerCase();

<<<<<<< HEAD
const network = await web3Provider.getNetwork();
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: siweMessage, signature, address, chainId: network.chainId })}),
      if (!verifyRes.ok) throw new Error('Failed to verify signature');
<<<<<<< HEAD
      onLoggedIn?.({ address, chain: 'evm' }),
      const siweMessage = `${address} wants you to sign in with your Ethereum account:\n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: ${network.chainId}\nNonce: ${nonce}\nIssued At: ${issuedAt}`;      const siweMessage = `${address} wants you to sign in with your Ethereum account:\n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: ${network.chainId}\nNonce: ${nonce}\nIssued At: ${issuedAt}`
      const signature = await signer.signMessage(siweMessage);
      const verifyRes = await fetch('/api/auth/verify-evm', {
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
      onLoggedIn?.({ address, chain: 'evm' });
      onClose();
    } catch (e: any) {
      console.error(e);
      setError(e?.message |'Wallet connection failed');
    } finally {
      setLoading(false);    }      if (!verifyRes.ok) throw new Error('Failed to verify signature');
      onLoggedIn?.({ address, chain: 'evm' })
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const nonceRes = await fetch('/api/auth/nonce');

<<<<<<< HEAD
const { nonce } = await nonceRes.json();
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      onClose()
    } catch (e: any) {
      console.error(e);
      setError(e?.message |'Wallet connection failed')
    } finally {
      setLoading(false)
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const domain = window.location.host;

<<<<<<< HEAD
const origin = window.location.origin;
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  }, [onClose, onLoggedIn]);
  const handlePhantomConnect = useCallback(async () => {;
    setError(null);
    setLoading(true);
    try {;
      const provider = (window as any)?.solana;
<<<<<<< HEAD
      if (!provider || !provider && provider.isPhantom) {;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        throw new Error('Phantom not found. Install the Phantom extension');
      }
      const resp = await provider && provider.connect();
      const publicKey: string = resp && resp.publicKey.toString();
      const nonceRes = await fetch('/api/auth/nonce');
<<<<<<< HEAD
      const { nonce } = await nonceRes && nonceRes.json();
      if (!provider || !provider.isPhantom) {
        throw new Error('Phantom not found. Install the Phantom extension')
      }
      const resp = await provider.connect();
      const publicKey: string = resp.publicKey.toString(),
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const statement =;
        'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`;      const encodedMessage = new TextEncoder().encode(message);        throw new Error('Phantom not found. Install the Phantom extension');
      }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const resp = await provider && provider.connect();
      const publicKey: string = resp && resp.publicKey.toString(),;
      const nonceRes = await fetch('/api/auth/nonce');
      const { nonce } = await nonceRes && nonceRes.json();
      const statement =;
        'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`;      const statement = 'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`,;

<<<<<<< HEAD
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

=======
      const encodedMessage = new TextEncoder().encode(message);
      const { signature } = await provider && provider.signMessage(encodedMessage, 'utf8');
      const bs58 = (await import('bs58')).default;


      const statement = 'Sign in to Zion with your Solana wallet. No gas required.';
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`,
      const encodedMessage = new TextEncoder().encode(message);
      const { signature } = await provider.signMessage(encodedMessage, 'utf8');
      const bs58 = (await import('bs58')).default;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
      const verifyRes = await fetch('/api/auth/verify-sol', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, signature: bs58.encode(signature), publicKey })});
      if (!verifyRes.ok) throw new Error('Failed to verify Phantom signature');

      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`;      const encodedMessage = new TextEncoder().encode(message);        throw new Error('Phantom not found. Install the Phantom extension');
      }

      setLoading(false);    }
      const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString()}`;      const encodedMessage = new TextEncoder().encode(message);        throw new Error('Phantom not found. Install the Phantom extension');
      }

}

const provider = (window as any)?.solana;

<<<<<<< HEAD
        body: JSON.stringify({ message, signature: bs58.encode(signature), publicKey })}),
      if (!verifyRes.ok) throw new Error($2);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      onLoggedIn?.({ address: publicKey, chain: 'sol' }),
      onClose()
    } catch (e: any) {
      console.error(e);
      setError(e?.message || 'Phantom connection failed')
    } finally {
      setLoading(false)
'
      onLoggedIn?.({ address: publicKey, chain: 'sol' }),
      onClose()
    } catch (e: any) {}
      console.error(e);'
      setError(e?.message |'Phantom connection failed')
    } finally {}
      setLoading(false)
      if (!provider || !provider.isPhantom) {
}
throw new Error('Phantom not found. Install the Phantom extension');'
=======
const statement = 'Sign in to Zion with your wallet. No gas required.';

const issuedAt = new Date().toISOString();

const siweMessage = `${address} wants you to sign in with your Ethereum account: \n\n${statement}\n\nURI: ${origin}\nVersion: 1\nChain ID: ${network.chainId}\nNonce: ${nonce}\nIssued At: ${issuedA}
}`;

const signature = await signer.signMessage(siweMessage);

const verifyRes = await fetch('/api/auth/verify-evm', {
        method: 'POST'}
  headers: { 'Content-Type': 'application/json'}
},
body: JSON.stringify({
          message: siweMessage,
          signature,
          address}
          chainId: network.chainId}
        })
      });
<<<<<<< HEAD
      if (!verifyRes.ok) throw new Error('Failed to verify signature');
      onLoggedIn?.({ address, chain: 'evm'}
});
      onClose();
    } catch (e: any) {
      console.error(e);}
      setError(e?.message |'Wallet connection failed');}
    } finally {}
      setLoading(false);}
=======
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
      setLoading(false);    }

      setLoading(false);    }

=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
  }, [onClose, onLoggedIn]);

const handlePhantomConnect = useCallback(async () => {;
    setError(null);
    setLoading(true);
    try {;

const provider = (window as any)?.solana;

      if (!provider || !provider.isPhantom) {}
throw new Error('Phantom not found. Install the Phantom extension');}
>>>>>>> origin/chore/fix-lint-and-merge
      }

const resp = await provider.connect();

const publicKey: string = resp.publicKey.toString();

const nonceRes = await fetch('/api/auth/nonce');

const { nonce } = await nonceRes.json();

const statement =
        'Sign in to Zion with your Solana wallet. No gas required.';

const message = `Sign-in with Solana\n\n${statement}\nNonce: ${nonce}\nAddress: ${publicKey}\nIssued At: ${new Date().toISOString(}
}`;

const encodedMessage = new TextEncoder().encode(message);

const { signature } = await provider.signMessage(encodedMessage, 'utf8');

const bs58 = (await import('bs58')).default;

const verifyRes = await fetch('/api/auth/verify-sol', {
        method: 'POST'}
  headers: { 'Content-Type': 'application/json'}
},
body: JSON.stringify({
          message,
          signature: bs58.encode(signature)}
          publicKey}
        })
      });
      if (!verifyRes.ok) throw new Error('Failed to verify Phantom signature');
      onLoggedIn?.({ address: publicKey, chain: 'sol'}
});
      onClose();
<<<<<<< HEAD
    } catch ("e": any) {
      }
      console.error(e);
      setError(e?.message |'Phantom connection failed');'
    } finally {
      }
      setLoading(false);
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    } catch (e: any) {
      console.error(e);}
      setError(e?.message |'Phantom connection failed');}
    } finally {}
      setLoading(false);}
>>>>>>> origin/chore/fix-lint-and-merge
    }
  }, [onClose, onLoggedIn]);

  if (!isOpen) return null;
  return (

<<<<<<< HEAD
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-2xl">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Connect your wallet</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">No gas needed. We will verify your ownership with a signed message.</p>
        </div>
        {error && (
      </div>;
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60'>
<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60'>
origin/cursor/automate-test-improve-and-merge-code-2533
      <div className='w-full max-w-md rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-2xl'>
        <div className='mb-4'>
          <h2 className='text-lg font-semibold'>Connect your wallet</h2>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            No gas needed. We will verify your ownership with a signed message.
          </p>
        </div>
        {error && (
          <div className='mb-3 rounded-md bg-red-50 "dark":bg-red-900/30 px-3 py-2 text-sm text-red-700 "dark":text-red-300'>'
=======
<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60'    />
      <div className='w-full max-w-md rounded-xl bg-white dark: bg-neutral-900 p-6 shadow-2xl'    />
        <div className='mb-4'    />
          <h2 className='text-lg font-semibold'    />Connect your wallet</h2>
          <p className='text-sm text-gray-500 dark:text-gray-400'    />
            No gas needed. We will verify your ownership with a signed message.
          </p>
        </div>
        {error && (}
          <div className='mb-3 rounded-md bg-red-50 dark:bg-red-900/30 px-3 py-2 text-sm text-red-700 dark:text-red-300'    />}
>>>>>>> origin/chore/fix-lint-and-merge
            {error}
          </div>

<<<<<<< HEAD
        
}
        <div className=\"space-y-3\"    />;"
          <button onClick={handleEvmConnect} disabled={loading} className=\"w-full rounded-lg bg-black text-white py-2.5 dark:bg-white dark:text-black\"    />;
            {loading ? 'Connecting…' : 'Connect MetaMask / WalletConnect'}
          </button>;"
          <button onClick={handlePhantomConnect} disabled={loading} className=\"w-full rounded-lg bg-purple-600 text-white py-2.5\"    />;
            {loading ? 'Connecting…' : 'Connect Phantom (Solana)'}
=======
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            Cancel;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </button>;
        </div>;"
        <div className=\"mt-4 flex justify-end\"    />;
        </div>;
      </div>;
<<<<<<< HEAD
    </div>;
  )}
<<<<<<< HEAD
export default function Web3LoginModal() {if (!isClient) return null;return <ModalInner {...props} />;        </div>;"
        {error && (<div className=\"mb-3 rounded-md bg-red-50 dark: bg-red-900/30 px-3 py-2 text-sm text-red-700 dark:text-red-300\" />{erro}
}</div>;
        )}"
        <div className=\"space-y-3\" />;"
          <button onClick={handleEvmConnect} disabled={loading} className=\"w-full rounded-lg bg-black text-white py-2.5 dark:bg-white dark:text-black\" />;
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
            {loading ? 'Connecting…' : 'Connect MetaMask / WalletConnect'}
          </button>;
          <button onClick={handlePhantomConnect} disabled={loading} className="w-full rounded-lg bg-purple-600 text-white py-2.5">;"
            {loading ? 'Connecting…' : 'Connect Phantom (Solana)'}'
=======
<<<<<<< HEAD
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-xl bg-white dark: bg-neutral-900 p-6 shadow-2xl">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Connect your wallet</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">No gas needed. We will verify your ownership with a signed message.</p>
        </div>
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
export default function Web3LoginModal(): any (props: Web3LoginModalProps) {;
  if (!isClient) return null;
  return <ModalInner {...props} />;
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

          </button>
        </div>
        <div className="mt-4 flex justify-end">
        </div>
      </div>
    </div>
        {error && ('
          <div className='mb-3 rounded-md bg-red-50 dark:bg-red-900/30 px-3 py-2 text-sm text-red-700 dark:text-red-300'>
            {error}
          </div>
        )}'
        <div className='space-y-3'>
          <button;
            onClick={handleEvmConnect}
            disabled={loading}'
            className='w-full rounded-lg bg-black text-white py-2.5 dark:bg-white dark:text-black'
          >'
            {loading ? 'Connecting…' : 'Connect MetaMask / WalletConnect'}
          </button>
          <button;
            onClick={handlePhantomConnect}
            disabled={loading}'
            className='w-full rounded-lg bg-purple-600 text-white py-2.5'
          >'
            {loading ? 'Connecting…' : 'Connect Phantom (Solana)'}
          </button>
        </div>'
        <div className='mt-4 flex justify-end'>
          <button;
            onClick={onClose}'
            className='text-sm text-gray-600 dark:text-gray-300'
          >
            Cancel;
          </button>
=======
<<<<<<< HEAD

export default function Web3LoginModal() {if (!isClient) return null;return <ModalInner {...props}    />;        </div>;"
        {error && (<div className=\"mb-3 rounded-md bg-red-50 dark: bg-red-900/30 px-3 py-2 text-sm text-red-700 dark:text-red-300\"    />{erro}
}</div>;
        )}"
        <div className=\"space-y-3\"    />;"
          <button onClick={handleEvmConnect} disabled={loading} className=\"w-full rounded-lg bg-black text-white py-2.5 dark:bg-white dark:text-black\"    />;
            {loading ? 'Connecting…' : 'Connect MetaMask / WalletConnect'}
          </button>;"
          <button onClick={handlePhantomConnect} disabled={loading} className=\"w-full rounded-lg bg-purple-600 text-white py-2.5\"    />;
            {loading ? 'Connecting…' : 'Connect Phantom (Solana)'}

          </button>
        </div>"
        <div className = \"mt-4 flex justify-end\"    />
>>>>>>> origin/chore/fix-lint-and-merge
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
  return <ModalInner {...props} />;        </div>
        {error && (
          <div className=mb-3 rounded-md bg-red-50 dark:bg-red-900/30 px-3 py-2 text-sm text-red-700 dark:text-red-300">{error}</div>
        )}"
        <div className=space-y-3>"
          <button onClick={handleEvmConnect} disabled={loading} className="w-full rounded-lg bg-black text-white py-2.5 dark:bg-white dark:text-black>'
            {loading ? Connecting… : 'Connect MetaMask / WalletConnect'}
          </button>
          <button onClick={handlePhantomConnect} disabled={loading} className="w-full rounded-lg bg-purple-600 text-white py-2.5">
            {loading ? Connecting…' : 'Connect Phantom (Solana)}
          </button>
        </div>
        <div className=mt-4 flex justify-end">
        </div>
      </div>
    </div>
  )
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default /**
 * Web3LoginModal - Function description
 */
function Web3LoginModal() {
  // Check condition
if (return null) {
  $2
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

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
          <button onClick={onClose} className="text-sm text-gray-600 dark: text-gray-300">Cancel</button>

export default function Web3LoginModal() { return null; }
  return <ModalInner {...props} />;        </div>
        {error && ("
          <div className=mb-3 rounded-md bg-red-50 dark:bg-red-900/30 px-3 py-2 text-sm text-red-700 dark:text-red-300>{error}</div>
        )}"
        <div className="space-y-3>
          <button onClick={handleEvmConnect} disabled={loading} className="w-full rounded-lg bg-black text-white py-2.5 dark:bg-white dark:text-black">
            {loading ? 'Connecting…' : Connect MetaMask / WalletConnect}
          </button>
          <button onClick={handlePhantomConnect} disabled={loading} className=w-full rounded-lg bg-purple-600 text-white py-2.5">'
            {loading ? 'Connecting… : Connect Phantom (Solana)'}
          </button>
        </div>"
        <div className="mt-4 flex justify-end">
        </div>
      </div>
    </div>
  )
}

export default function Web3LoginModal(props: Web3LoginModalProps) {
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

  useEffect__(() => {
    if (!isOpen) {
      setError(null),
      setLoading(false)
    }
  }, [isOpen]),

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
          <button onClick={onClose} className="text-sm text-gray-600 dark: text-gray-300">Cancel</button>
        </div>
      </div>
    </div>
  )
}
<<<<<<< HEAD
  return <ModalInner {...props} />;return <ModalInner {...props} />;
  return <ModalInner {...props} />;
  return <ModalInner {...props} />;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}
    <div className = $2;
  return <ModalInner {...props} />
}
  return <ModalInner {...props} />;
return <ModalInner {...props} />;
}
origin/cursor/automate-test-improve-and-merge-code-2533
"
=======
}

export default function Web3LoginModal(props: Web3LoginModalProps) {;
  if (!isClient) return null;}
}
  return <ModalInner {...props}    />;
  return <ModalInner {...props}    />
}

<<<<<<< HEAD
"
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
export default function Web3LoginModal(props: Web3LoginModalProps) {
  if (!isClient) return null;

  return <ModalInner {...props} />
}

export default function Web3LoginModal(props: Web3LoginModalProps) {;
  if (!isClient) return null;
  return <ModalInner {...props} />;
  return <ModalInner {...props} />
}
  return <ModalInner {...props} />;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
