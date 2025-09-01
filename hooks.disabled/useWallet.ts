import { useCallback, useEffect, useMemo, useState } from 'react';
import { ethers, providers } from 'ethers';
import { getChainById } from '../utils/chains';};

declare global {
  interface Window {

    ethereum?: unknown;
  
}
}
;
export function useWallet(...args: unknown[]): unknown {
  const [state, setState] = useState<WalletState>({ account: null, chainId: null, provider: null });
  const [connecting, setConnecting] = useState<typeof false>(false);
  const [error, setError] = useState<string | null>(null);

  const connect = useCallbackasync (: unknown {
    setConnecting(true);
    setError(null);
    try {
      if (!window.ethereum) {
        throw new Error('No EIP-1193 wallet found. Please install MetaMask or a compatible wallet.');
      }
      const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const account = await signer.getAddress();
      const network = await provider.getNetwork();
      setState({ account, chainId: Number(network.chainId), provider });
      window.ethereum.on'accountsChanged', (accounts: string[] {
        setState(prev: unknown ({ ...prev, account: accounts[0] ?? null }));
      });
      window.ethereum.on'chainChanged', (chainIdHex: string {
        const chainId = parseInt(chainIdHex, 16);
        setState(prev: unknown ({ ...prev, chainId }));
      });
    } catch (e: unknown) {
      setError(e?.message ?? 'Failed to connect wallet');
    } finally {
      setConnecting(false);
    }
  }, []);

  const switchNetwork = useCallback
    async (targetChainId: number {
      if (!state.provider) return;
      const hexChainId = '0x' + targetChainId.toString(16);
      try {
        await state.provider.send('wallet_switchEthereumChain', [{ chainId: hexChainId }]);
      } catch (switchError: unknown) {
        if (switchError.code === 4902) {
          const chain = getChainById(targetChainId);
          if (!chain) throw switchError;
          await state.provider.send('wallet_addEthereumChain', [
            {
              chainId: hexChainId,
              chainName: chain.name,
              nativeCurrency: { name: chain.symbol, symbol: chain.symbol, decimals: 18 },
              rpcUrls: [chain.rpcUrl],
              blockExplorerUrls: [chain.explorerUrl]
            }
          ]);
        } else {
          throw switchError;
        }
      }
    },
    [state.provider]
  );

  return { ...state, connecting, error, connect, switchNetwork };}