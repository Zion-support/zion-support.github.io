import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { ZION_TOKEN_NETWORK_ID } from '@/config/governanceConfig';
import {
  createAppKit,
  useAppKit,
  useAppKitAccount,
  useAppKitNetwork,
  useAppKitProvider,
  useAppKitEvents,
} from '@reown/appkit/react';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { mainnet, polygon, goerli, optimism, arbitrum, base } from '@reown/appkit/networks'; // Import necessary chain objects

export default function Page() {
> = ({ children }) => {
  const [wallet, setWallet] = useState<WalletState>(initialWalletState);
  const appKit = useAppKit(); // Hook to interact with AppKit
  const { address } = useAppKitAccount();
  const { chainId } = useAppKitNetwork();
  const { walletProvider } = useAppKitProvider("eip155");

  const updateWalletState = useCallback(async () => {
    // Use address, chainId, walletProvider from hooks
    if (appKit?.getState().isConnected && address) {
      // const currentAddress = appKit.getAddress(); // Replaced by hook
      // const currentChainId = appKit.getChainId(); // Replaced by hook
      // const currentProvider = appKit.getWalletProvider(); // Replaced by hook

      if (address && chainId && walletProvider) {
        const ethersProvider = new ethers.BrowserProvider(walletProvider);
        const ethersSigner = await ethersProvider.getSigner();
        setWallet({
          provider: ethersProvider,
          signer: ethersSigner,
          address: address, // from hook
          chainId: Number(chainId), // from hook, ensure chainId is a number
          isConnected: true,
        });
      } else {
        setWallet(initialWalletState);
      }
    } else {
      setWallet(initialWalletState);
    }
  }, [appKit, address, chainId, walletProvider]); // Add hook values to dependency array

  // Subscribe to AppKit events
  useAppKitEvents({
    onChainChanged: updateWalletState,
    onAccountChanged: updateWalletState,
    onProviderChanged: updateWalletState, // Or a more specific handler if needed
    onDisconnect: () => { // Handle disconnect event specifically
      setWallet(initialWalletState);
    },
    // onConnect: updateWalletState, // Could also trigger updateWalletState on connect
  });

  useEffect(() => {
    // Initial state update on component mount if already connected
    // The useAppKitEvents will handle subsequent changes.
    if (appKit?.getState().isConnected) {
      updateWalletState();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appKit]); // updateWalletState is not needed here due to useAppKitEvents handling changes

  // connectWallet, disconnectWallet, displayAddress, and return statement remain the same
  // Ensure appKit from useAppKit() is used for open() and disconnect()
  // The appKitInstance in context is for modal etc.


  const connectWallet = useCallback(async () => {
    if (appKit) {
      try {
        await appKit.open(); // Opens the modal
        // State update will be handled by the subscription
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
        console.error('AppKit not initialized');
    }
  }, [appKit]);

  const disconnectWallet = useCallback(async () => {
    if(web3ModalInstance?.cachedProvider) {
        web3ModalInstance.clearCachedProvider();
    }
    setWallet(initialWalletState);
  }, [web3ModalInstance]); // Removed wallet.provider, setWallet is stable

  const connectWallet = useCallback(async () => {
    if(!web3ModalInstance) {
        console.error('Web3Modal not initialized');
        return;
    }
    try {
      const instance = await web3ModalInstance.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const network = await provider.getNetwork();

      setWallet({
        provider,
        signer,
        address,
        chainId: network.chainId,
        isConnected: true,
      });

      instance.on('accountsChanged', (accounts: string[]) => {
        if(accounts.length > 0) {
          // Re-fetch signer and network info as account change might imply network change in some wallets
          const newProvider = new ethers.providers.Web3Provider(instance);
          const newSigner = newProvider.getSigner();
          newProvider.getNetwork().then(newNetwork => {
            setWallet(prev => ({ 
              ...prev, 
              address: accounts[0],
              signer: newSigner, // Update signer
              provider: newProvider, // Update provider
              chainId: newNetwork.chainId // Update chainId
            }));
          });
        } else {
          disconnectWallet();
        }
      });

      instance.on('chainChanged', async () => { // Added async
        // Re-initialize provider, signer, address, and chainId
        const newProvider = new ethers.providers.Web3Provider(instance);
        const newSigner = newProvider.getSigner();
        const newAddress = await newSigner.getAddress();
        const newNetwork = await newProvider.getNetwork();
        setWallet({
          provider: newProvider,
          signer: newSigner,
          address: newAddress,
          chainId: newNetwork.chainId,
          isConnected: true,
        });
        console.log('Network changed to:', newNetwork.chainId);
      });

      instance.on('disconnect', (error: any) => {
        console.log('Disconnected', error);
        disconnectWallet();
      });

    } catch(error) {
      console.error('Error connecting wallet:', error);
      // If user closes modal, it might throw an error, so we ensure state is reset
      disconnectWallet();
    }
  }, [web3ModalInstance, disconnectWallet]); // Added disconnectWallet

  const displayAddress = wallet.address
    ? `${wallet.address.substring(0, 6)}...${wallet.address.substring(wallet.address.length-4)}`
    : null;

  return (<WalletContext.Provider value={{ ...wallet, connectWallet, disconnectWallet, displayAddress }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if(context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
