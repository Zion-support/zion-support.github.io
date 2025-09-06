import React, { useCallback, useEffect, useState } from 'react';
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
            package: WalletConnectProvider,
            options: {
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
            Cancel;
          </button>;
        </div>;
      </div>;
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