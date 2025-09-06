import React, { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const isClient = $2;
type Web3LoginModalProps = $2;
  onClose: () => void,
  onLoggedIn?: (user: { address: string, chain: 'evm' | 'sol', displayName?: string }) => void
},

function ModalInner({ isOpen, onClose, onLoggedIn }: Web3LoginModalProps) {
  const [loading, setLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),

  useEffect(() => {
    if (!isOpen) {
      setError($2);
      setLoading(false)
    }
  }, [isOpen]),

  const handleEvmConnect = useCallback(async () => {
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
    <div className = $2;
  return <ModalInner {...props} />
}