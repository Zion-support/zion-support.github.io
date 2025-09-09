import { useState, useEffect } from 'react';

interface WalletState {
  isConnected: boolean;
  address: string | null;
  balance: string | null;
  chainId: number | null;
}

export const useWallet = () => {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    address: null,
    balance: null,
    chainId: null,
  });

  const connect = async () => {
    try {
      // Mock wallet connection
      setWalletState({
        isConnected: true,
        address: '0x1234567890123456789012345678901234567890',
        balance: '1.5',
        chainId: 1,
      });
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const disconnect = () => {
    setWalletState({
      isConnected: false,
      address: null,
      balance: null,
      chainId: null,
    });
  };

  return {
    ...walletState,
    connect,
    disconnect,
  };
};