import React, {_useCallback, _useEffect, _useState} from 'react';
import dynamic from 'next/dynamic';

const _isClient = typeof window !== 'undefined';

type Web3LoginModalProps = {_isOpen: boolean;
  onClose: () => void;
  onLoggedIn?: (_user: { address: string; chain: 'evm' | 'sol'; displayName?: string}) => void;
};

function ModalInner(_{_isOpen, _onClose, _onLoggedIn}: Web3LoginModalProps) {_const [loading, _setLoading] = useState(false);
  const [error, _setError] = useState<string | null>(null);

  useEffect__(() => {
    if (!isOpen) {
      setError(null);
      setLoading(false);}
  }, [isOpen]);

  const _handleEvmConnect = useCallback(_async () => {_setError(null);
    setLoading(true);
    try {
      const _Web3ModalCtor = (await import('web3modal')).default;
      const _WalletConnectProvider = (await import('@walletconnect/web3-provider')).default;

      const _web3Modal = new Web3ModalCtor({
        cacheProvider: false, _providerOptions: {
          walletconnect: {
            package: WalletConnectProvider, _options: {
              rpc: { 1: 'https://cloudflare-eth.com'}}}}});

      const _provider = await web3Modal.connect();
      const _ethers = await import('ethers');
      const _web3Provider = new ethers.providers.Web3Provider(provider as any);
      const _signer = web3Provider.getSigner();
      const _address = (await signer.getAddress()).toLowerCase();
      const _network = await web3Provider.getNetwork();

      const _nonceRes = await fetch('/api/auth/nonce');
      const {_nonce} = await nonceRes.json();

      const _domain = window.location.host;
      const _origin = window.location.origin;
      const _statement = 'Sign in to Zion with your wallet. No gas required.';
      const _issuedAt = new Date().toISOString();
      const _siweMessage = `${_address} wants you to sign in with your Ethereum account:\n\n${_statement}\n\nURI: ${_origin}\nVersion: 1\nChain ID: ${_network.chainId}\nNonce: ${_nonce}\nIssued At: ${_issuedAt}`;

      const _signature = await signer.signMessage(siweMessage);

      const _verifyRes = await fetch('/api/auth/verify-evm', {_method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_message: siweMessage, _signature, _address, _chainId: network.chainId})});
      if (!verifyRes.ok) throw new Error('Failed to verify signature');

      onLoggedIn?.({_address, _chain: 'evm'});
      onClose();
    } catch (e: unknown) {_setError(e?.message || 'Wallet connection failed');} finally {_setLoading(false);}
  }, [onClose, onLoggedIn]);

  const _handlePhantomConnect = useCallback(_async () => {_setError(null);
    setLoading(true);
    try {
      const _provider = (window as any)?.solana;
      if (!provider || !provider.isPhantom) {
        throw new Error('Phantom not found. Install the Phantom extension');}
      const _resp = await provider.connect();
      const publicKey: string = resp.publicKey.toString();

      const _nonceRes = await fetch('/api/auth/nonce');
      const {_nonce} = await nonceRes.json();

      const _statement = 'Sign in to Zion with your Solana wallet. No gas required.';
      const _message = `Sign-in with Solana\n\n${_statement}\nNonce: ${_nonce}\nAddress: ${_publicKey}\nIssued At: ${_new Date().toISOString()}`;
      const _encodedMessage = new TextEncoder().encode(message);
      const {_signature} = await provider.signMessage(encodedMessage, 'utf8');
      const _bs58 = (await import('bs58')).default;

      const _verifyRes = await fetch('/api/auth/verify-sol', {_method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_message, _signature: bs58.encode(signature), _publicKey})});
      if (!verifyRes.ok) throw new Error('Failed to verify Phantom signature');

      onLoggedIn?.({_address: publicKey, _chain: 'sol'});
      onClose();
    } catch (e: unknown) {_setError(e?.message || 'Phantom connection failed');} finally {_setLoading(false);}
  }, [onClose, onLoggedIn]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-2xl">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Connect your wallet</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">No gas needed. We will verify your ownership with a signed message.</p>
        </div>
        {_error && (
          <div className="mb-3 rounded-md bg-red-50 dark:bg-red-900/30 px-3 py-2 text-sm text-red-700 dark:text-red-300">{error}</div>
        )}
        <div className="space-y-3">
          <button onClick={_handleEvmConnect} disabled={_loading} className="w-full rounded-lg bg-black text-white py-2.5 dark:bg-white dark:text-black">
            {_loading ? 'Connecting…' : 'Connect MetaMask / WalletConnect'}
          </button>
          <button onClick={_handlePhantomConnect} disabled={_loading} className="w-full rounded-lg bg-purple-600 text-white py-2.5">
            {_loading ? 'Connecting…' : 'Connect Phantom (Solana)'}
          </button>
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={_onClose} className="text-sm text-gray-600 dark:text-gray-300">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default function Web3LoginModal(_props: Web3LoginModalProps) {_if (!isClient) return null;
  return <ModalInner {...props} />;
}