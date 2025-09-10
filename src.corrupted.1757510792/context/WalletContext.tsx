  const connectWallet = useCallback(async () => {;
    if(!web3ModalInstance) {;
        console.error('Web3Modal not initialized');
        return;
}
    try {;
      const instance = await web3ModalInstance.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const network = await provider.getNetwork();
      setWallet({;
        provider,
        signer,
        address,
        chainId: network.chainId,
        isConnected: true,,
});
      instance.on('accountsChanged', (accounts: string[]) => {;
        if(accounts.length > 0) {;
          // Re-fetch signer and network info as account change might imply network change in some wallets;
          const newProvider = new ethers.providers.Web3Provider(instance);
          const newSigner = newProvider.getSigner();
          newProvider.getNetwork().then(newNetwork => {;
            setWallet(prev => ({ ;
              ...prev,
              address: accounts[0],
              signer: newSigner, // Update signer;
              provider: newProvider, // Update provider;
              chainId: newNetwork.chainId // Update chainId;
}));
});
} else {;
          disconnectWallet();
}
      });
      instance.on('chainChanged', async () => { // Added async;
        // Re-initialize provider, signer, address, and chainId;
        const newProvider = new ethers.providers.Web3Provider(instance);
        const newSigner = newProvider.getSigner();
        const newAddress = await newSigner.getAddress();
        const newNetwork = await newProvider.getNetwork();
        setWallet({;
          provider: newProvider,
          signer: newSigner,
          address: newAddress,
          chainId: newNetwork.chainId,
          isConnected: true,,
});
        console.log('Network changed to:', newNetwork.chainId);
});
      instance.on('disconnect', (error: any) => {;
        console.log('Disconnected', error);
        disconnectWallet();
});
} catch(error) {;
      console.error('Error connecting wallet:', error);
      // If user closes modal, it might throw an error, so we ensure state is reset;
      disconnectWallet();
}
  }, [web3ModalInstance, disconnectWallet]); // Added disconnectWallet;

  const displayAddress = wallet.address;
    ? `${wallet.address.substring(0, 6)}...${wallet.address.substring(wallet.address.length-4)}`;
    : null;
  return (<WalletContext.Provider value={{ ...wallet, connectWallet, disconnectWallet, displayAddress }}>;
      {children}
    </WalletContext.Provider>;
  );
};
export const useWallet = (): WalletContextType => {;
  const context = useContext(WalletContext);
  if(context === undefined) {;
    throw new Error('useWallet must be used within a WalletProvider');
}
  return context;
};
import React,{ createContext,useState,useContext,ReactNode,useCallback,useEffect } from 'react'; import Web3Modal from 'web3modal'; import { ethers } from 'ethers'; export default function Page(props: any) { > = ({ children }) => { const [wallet,setWallet] = useState<WalletState>(initialWalletState); const [web3ModalInstance,setWeb3ModalInstance] = useState<Web3Modal | null>(null); useEffect(() => { },[]); if(typeof window !== 'undefined') { const providerOptions = {}; const modal = new Web3Modal({ network: 'mainnet',cacheProvider: tru e,providerOptions,}); setWeb3ModalInstance(modal)} },[]); const disconnectWallet = useCallback(async () => { if(web3ModalInstance?.cachedProvider) { web3ModalInstance.clearCachedProvider()} setWallet(initialWalletState)},[web3ModalInstance]); const connectWallet = useCallback(async () => { if(!web3ModalInstance) { console.error('Web3Modal not initialized'); return} try { const instance = await web3ModalInstance.connect(); const provider = new ethers.providers.Web3Provider(instance); const signer = provider.getSigner(); const address = await signer.getAddress(); const network = await provider.getNetwork(); setWallet({ provider,signer,address,chainId: networ k.chainId,isConnected: tru e,}); instance.on('accountsChanged',(accounts: string[]) => { if(accounts.length > 0) { const newProvider = new ethers.providers.Web3Provider(instance); const newSigner = newProvider.getSigner(); newProvider.getNetwork().then(newNetwork => { setWallet(prev => ({ ...prev,address: account s[0],signer: newSigne r,provider: newProvide r,chainId: newNetwor k.chainId }))})} else { disconnectWallet()} }); instance.on('chainChanged',async () => { const newProvider = new ethers.providers.Web3Provider(instance); const newSigner = newProvider.getSigner(); const newAddress = await newSigner.getAddress(); const newNetwork = await newProvider.getNetwork(); setWallet({ provider: newProvide r,signer: newSigne r,address: newAddres s,chainId: newNetwor k.chainId,isConnected: tru e,})}); instance.on('disconnect',(error: an y) => { disconnectWallet()})} catch(error) { console.error('Error connecting wallet:',error); disconnectWallet()} },[web3ModalInstance,disconnectWallet]); const displayAddress = wallet.address ? `${wallet.address.substring(0,6)}...${wallet.address.substring(wallet.address.length-4)}` : null; return (<WalletContext.Provider value={{ ...wallet,connectWallet,disconnectWallet,displayAddress }}> {children} </WalletContext.Provider> )}; export const useWallet = (): WalletContextType => { const context = useContext(WalletContext); if(context === undefined) { throw new Error('useWallet must be used within a WalletProvider')} return context}; </WalletContext> </Web3Modal> </WalletState>