<<<<<<< HEAD
import React from 'react';
=======
import { useState, useCallback } from 'react';

import { Wallet, Smartphone, Coins, Image, TrendingUp, BarChart3, Plus, Send, Download, Loader2 } from 'lucide-react';
import { useBlockchainWeb3 } from '../hooks/useBlockchainWeb3';
import { useAnalytics } from '../hooks/useAnalytics';
export const BlockchainWeb3Dashboard = ({ className = '' }) => {
    const { trackEvent } = useAnalytics({
        enableTracking: true,
        enableUserBehaviorTracking: true
    });
    const [activeTab, setActiveTab] = useState('overview');
    const [showMintNFT, setShowMintNFT] = useState(false);
    const [showSendTransaction, setShowSendTransaction] = useState(false);
    const { wallet, contracts, nfts, defiPositions, transactions, metrics, isConnecting, isProcessing, connectWallet, disconnectWallet, switchNetwork, addContract, mintNFT, sendTransaction, createDeFiPosition } = useBlockchainWeb3();
    const [nftForm, setNftForm] = useState({
        name: '',
        description: '',
        image: ''
    });
    const [transactionForm, setTransactionForm] = useState({
        to: '',
        value: '',
        data: ''
    });
    const handleConnectWallet = useCallback(async () => {
        try {
            await connectWallet();
            trackEvent('blockchain', 'dashboard', 'wallet_connected');
        }
        catch (error) {
            console.error('Failed to connect wallet:', error);
        }
    }, [connectWallet, trackEvent]);
    const handleMintNFT = useCallback(async () => {
        if (nftForm.name.trim() && wallet) {
            try {
                const metadata = {
                    name: nftForm.name,
                    description: nftForm.description,
                    image: nftForm.image || `https://via.placeholder.com/300x300/6366f1/ffffff?text=${nftForm.name}`
                };
                await mintNFT(contracts[1]?.address || '', metadata);
                setNftForm({ name: '', description: '', image: '' });
                setShowMintNFT(false);
                trackEvent('blockchain', 'dashboard', 'nft_minted');
            }
            catch (error) {
                console.error('Failed to mint NFT:', error);
            }
        }
    }, [nftForm, wallet, contracts, mintNFT, trackEvent]);
    const handleSendTransaction = useCallback(async () => {
        if (transactionForm.to.trim() && transactionForm.value && wallet) {
            try {
                await sendTransaction(transactionForm.to, transactionForm.value, transactionForm.data || undefined);
                setTransactionForm({ to: '', value: '', data: '' });
                setShowSendTransaction(false);
                trackEvent('blockchain', 'dashboard', 'transaction_sent');
            }
            catch (error) {
                console.error('Failed to send transaction:', error);
            }
        }
    }, [transactionForm, wallet, sendTransaction, trackEvent]);
    const getStatusColor = (status) => {
        switch (status) {
            case 'confirmed': return 'text-green-600 bg-green-100';
            case 'pending': return 'text-yellow-600 bg-yellow-100';
            case 'failed': return 'text-red-600 bg-red-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };
    return (<div className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <Wallet className="w-6 h-6 text-blue-600 dark:text-blue-400"/>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Blockchain & Web3
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Wallet, Smart Contracts, NFTs & DeFi
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {!wallet ? (<button onClick={handleConnectWallet} disabled={isConnecting} className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50">
              {isConnecting ? (<Loader2 className="w-4 h-4 animate-spin"/>) : (<Wallet className="w-4 h-4"/>)}
              <span>Connect Wallet</span>
            </button>) : (<button onClick={disconnectWallet} className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <Wallet className="w-4 h-4"/>
              <span>Disconnect</span>
            </button>)}
        </div>
      </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const BlockchainWeb3Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">BlockchainWeb3Dashboard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default BlockchainWeb3Dashboard;