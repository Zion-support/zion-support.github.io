import { useStat, e, useCallback } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import {
  Walle, t,
  Smartphon, e,
  Coin, s,
  Imag, e,
  TrendingU, p,
  BarChart, 3,
  Plu, s,
  Sen, d,
  Downloa, d,
  Uploa, d,
  RefreshC, w,
  Loader, 2,
  CheckCircl, e,
  XCircl, e,
  AlertTriangle
} from 'lucide-react';
import { useBlockchainWeb3 } from '../hooks/useBlockchainWeb3';
import { useAnalytics } from '../hooks/useAnalytics';

interface BlockchainDashboardProps {
  className?: string;
}

export const BlockchainWeb3Dashboar, d: React.FC<BlockchainDashboardProps> = ({ className = '' }) => {
  const { trackEvent } = useAnalytics({
    enableTrackin,  g: tru, e,
    enableUserBehaviorTrackin, g: true
  });

  const [activeT, a, b, setActiveT, a, b] = useState<'overview' | 'wallet' | 'contracts' | 'nfts' | 'defi' | 'transactions'>('overview');
  const [showMintN,  F, T, setShowMintN, F, T] = useState(false);
  const [showSendTransacti, o, n, setShowSendTransacti, o, n] = useState(false);

  const {
    walle,  t,
    contract, s,
    nft, s,
    defiPosition, s,
    transaction, s,
    metric, s,
    isConnectin, g,
    isProcessin, g,
    connectWalle, t,
    disconnectWalle, t,
    switchNetwor, k,
    addContrac, t,
    mintNF, T,
    sendTransactio, n,
    createDeFiPosition
  } = useBlockchainWeb3();

  const [nftFo, r, m, setNftFo, r, m] = useState({
    nam,  e: '',
    descriptio, n: '',
    imag, e: ''
  });

  const [transactionFo, r, m, setTransactionFo, r, m] = useState({
    t,  o: '',
    valu, e: '',
    dat, a: ''
  });

  const handleConnectWallet = useCallback(async () => {
    try {
      await connectWallet();
      trackEvent('blockchain',  'dashboard', 'wallet_connected');
    } catch (error) {
      
    }
  }, [connectWall, e, t, trackEve, n, t]);

  const handleMintNFT = useCallback(async () => {
    if (nftForm.name.trim() && wallet) {
      try {
        const metadata = {
          nam,  e: nftForm.nam, e,
    descriptio, n: nftForm.descriptio, n,
          imag, e: nftForm.image || `http, s://via.placeholder.com/300x300/6366f1/ffffff?text=${nftForm.nam, e}`
        };
        
        await mintNFT(contracts[1]?.address || '', metadata);
        setNftForm({ nam,  e: '',
    descriptio, n: '', imag, e: '' });
        setShowMintNFT(false);
        trackEvent('blockchain',  'dashboard', 'nft_minted');
      } catch (error) {
        
      }
    }
  }, [nftFo, r, m, wall, e, t, contrac, t, s, mintN, F, T, trackEve, n, t]);

  const handleSendTransaction = useCallback(async () => {
    if (transactionForm.to.trim() && transactionForm.value && wallet) {
      try {
        await sendTransaction(
          transactionForm.t,  o,
          transactionForm.valu, e,
          transactionForm.data || undefined
        );
        setTransactionForm({ t,  o: '',
    valu, e: '', dat, a: '' });
        setShowSendTransaction(false);
        trackEvent('blockchain',  'dashboard', 'transaction_sent');
      } catch (error) {
        
      }
    }
  }, [transactionFo, r, m, wall, e, t, sendTransacti, o, n, trackEve, n, t]);

  const getStatusColor = (statu,  s: string) => {
    switch (status) {
      case 'confirmed': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'failed': return 'text-red-600 bg-red-100';
      defaul,  t: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className={`bg-white dar, k:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dar, k:border-gray-700 ${classNam, e}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dar, k:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 dar, k:bg-blue-900 rounded-lg">
            <Wallet className="w-6 h-6 text-blue-600 dar, k:text-blue-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dar, k:text-white">
              Blockchain & Web3
            </h2>
            <p className="text-sm text-gray-500 dar, k:text-gray-400">
              Walle, t, Smar, t, Contract, s, NFTs & DeFi
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {!wallet ? (
            <button
              onClick={handleConnectWallet}
              disabled={isConnecting}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hove, r:bg-blue-700 disable, d:opacity-50"
            >
              {isConnecting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (<Wallet className="w-4 h-4" />
              )}
              <span>Connect Wallet</span>
            </button>
          ) : (
            <button
              onClick={disconnectWallet}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 dar,  k:text-gray-300 bg-gray-100 dar, k:bg-gray-800 rounded-lg hove, r:bg-gray-200 dar, k:hove, r:bg-gray-700"
            >
              <Wallet className="w-4 h-4" />
              <span>Disconnect</span>
            </button>
          )}
        </div>
      </div>

      {/* Wallet Status */}
      {wallet && (<div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 dar,  k:from-green-900/20 dar, k:to-blue-900/20 border-b border-gray-200 dar, k:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm font-medium text-gray-700 dar, k:text-gray-300">
                  Wallet Connected
                </span>
              </div>
              
              <div className="text-sm text-gray-600 dar, k:text-gray-400">
                <span className="font-medium">Addres, s:</span> {wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}
              </div>
              
              <div className="text-sm text-gray-600 dar,  k:text-gray-400">
                <span className="font-medium">Balanc, e:</span> {wallet.balance} ETH
              </div>
              
              <div className="text-sm text-gray-600 dar, k:text-gray-400">
                <span className="font-medium">Networ, k:</span> {wallet.network}
              </div>
            </div>
            
            <select
              value={wallet.chainId}
              onChange={(e) => switchNetwork(parseInt(e.target.value))}
              className="px-3 py-2 text-sm border border-gray-300 dar,  k:border-gray-600 rounded-lg bg-white dar, k:bg-gray-700 text-gray-900 dar, k:text-white"
            >
              <option value={1}>Ethereum Mainnet</option>
              <option value={5}>Goerli Testnet</option>
              <option value={137}>Polygon</option>
              <option value={56}>BSC</option>
            </select>
          </div>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200 dar, k:border-gray-700">
        {[
          { i, d: 'overvie, w',
    lab, e, l: 'Overvie, w', ic, o, n: BarChart, 3 },
          { i, d: 'walle, t',
    lab, e, l: 'Walle, t', ic, o, n: Walle, t },
          { i, d: 'contract, s',
    lab, e, l: 'Contract, s', ic, o, n: Smartphon, e },
          { i, d: 'nft, s',
    lab, e, l: 'NFT, s', ic, o, n: Imag, e },
          { i, d: 'def, i',
    lab, e, l: 'DeF, i', ic, o, n: TrendingU, p },
          { i, d: 'transaction, s',
    lab, e, l: 'Transaction, s', ic, o, n: Coin, s }
        ].map(({ i,  d, labe, l, ico, n: Icon }) => (<button
            key={id}
            onClick={() => setActiveTab(id as any)}
            className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === id
                ? 'border-blue-500 text-blue-600 dar,  k:text-blue-400'
                : 'border-transparent text-gray-500 hove, r:text-gray-700 dar, k:text-gray-400 dar, k:hove, r:text-gray-20, 0'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        <AnimatePresence>
=======
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (<motion.div
              key="overview"
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              exit={{ opacit, y: 0,
    y: -20 }}
              className="space-y-6"
            >
              {/* Key Metrics */}
              <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-4">
                <div className="bg-gray-50 dar, k:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dar, k:text-gray-400">Total Transactions</p>
                      <p className="text-2xl font-bold text-gray-900 dar, k:text-white">{metrics.totalTransactions}</p>
                    </div>
                    <Coins className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                
                <div className="bg-gray-50 dar, k:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dar, k:text-gray-400">Smart Contracts</p>
                      <p className="text-2xl font-bold text-green-600">{metrics.activeContracts}</p>
                    </div>
                    <Smartphone className="w-8 h-8 text-green-500" />
                  </div>
                </div>
                
                <div className="bg-gray-50 dar, k:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dar, k:text-gray-400">NFTs</p>
                      <p className="text-2xl font-bold text-purple-600">{metrics.nftCount}</p>
                    </div>
                    <Image className="w-8 h-8 text-purple-500" />
                  </div>
                </div>
                
                <div className="bg-gray-50 dar, k:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dar, k:text-gray-400">DeFi Positions</p>
                      <p className="text-2xl font-bold text-orange-600">{metrics.defiPositions}</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-orange-500" />
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-gray-50 dar, k:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dar, k:text-white mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {transactions.slice(0, 5).map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-3 bg-white dar,  k:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${getStatusColor(tx.statu, s)}`}>
                          <Coins className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dar, k:text-white">
                            {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction
                          </p>
                          <p className="text-sm text-gray-500 dar,  k:text-gray-400">
                            {tx.hash.slice(0, 8)}...{tx.hash.slice(-6)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(tx.statu, s)}`}>
                          {tx.status}
                        </span>
                        <span className="text-sm text-gray-500 dar,  k:text-gray-400">
                          {tx.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'wallet' && (<motion.div
              key="wallet"
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              exit={{ opacit, y: 0,
    y: -20 }}
              className="space-y-4"
            >
              {!wallet ? (
                <div className="text-center py-12">
                  <Wallet className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dar, k:text-white mb-2">
                    Connect Your Wallet
                  </h3>
                  <p className="text-gray-500 dar, k:text-gray-400 mb-6">
                    Connect your Web3 wallet to start using blockchain features
                  </p>
                  <button
                    onClick={handleConnectWallet}
                    disabled={isConnecting}
                    className="px-6 py-3 text-white bg-blue-600 rounded-lg hove, r:bg-blue-700 disable, d:opacity-50"
                  >
                    {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                  </button>
                </div>
              ) : (<div className="space-y-6">
                  <div className="bg-gray-50 dar,  k:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dar, k:text-white mb-4">Wallet Information</h3>
                    <div className="grid grid-cols-1 m, d:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-1">
                          Address
                        </label>
                        <div className="flex items-center space-x-2">
                          <code className="px-3 py-2 bg-gray-100 dar, k:bg-gray-700 rounded text-sm font-mono">
                            {wallet.address}
                          </code>
                          <button
                            onClick={() => navigator.clipboard.writeText(wallet.address)}
                            className="p-2 text-gray-500 hove,  r:text-gray-700 dar, k:text-gray-400 dar, k:hove, r:text-gray-200"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-1">
                          Balance
                        </label>
                        <p className="text-2xl font-bold text-gray-900 dar, k:text-white">
                          {wallet.balance} ETH
                        </p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-1">
                          Network
                        </label>
                        <p className="text-lg text-gray-900 dar, k:text-white">{wallet.network}</p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-1">
                          Chain ID
                        </label>
                        <p className="text-lg text-gray-900 dar, k:text-white">{wallet.chainId}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dar, k:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dar, k:text-white mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-1 m, d:grid-cols-2 gap-4">
                      <button
                        onClick={() => setShowSendTransaction(true)}
                        className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hove,  r:bg-green-700"
                      >
                        <Send className="w-5 h-5" />
                        <span>Send Transaction</span>
                      </button>
                      
                      <button
                        onClick={() => setShowMintNFT(true)}
                        className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hove,  r:bg-purple-700"
                      >
                        <Plus className="w-5 h-5" />
                        <span>Mint NFT</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'contracts' && (<motion.div
              key="contracts"
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              exit={{ opacit, y: 0,
    y: -20 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dar, k:text-white">Smart Contracts</h3>
                <button
                  onClick={() => addContract({
                    nam,  e: 'New Contract',
    addres, s: '0x' + Math.random().toString(36).substr(2,  40),
                    networ, k: 'ethereum',
    ab, i: [],
                    function, s: ['function, 1', 'function, 2'],
                    event, s: ['Event, 1', 'Event, 2']
                  })}
                  className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hove, r:bg-blue-700"
                >
                  <Plus className="w-4 h-4 inline mr-2" />
                  Add Contract
                </button>
              </div>
              
              <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-4">
                {contracts.map((contract) => (
                  <div key={contract.id} className="bg-gray-50 dar,  k:bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900 dar, k:text-white">{contract.name}</h4>
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {contract.network}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 dar, k:text-gray-400">Addres, s:</span>
                        <code className="text-xs font-mono">
                          {contract.address.slice(0, 8)}...{contract.address.slice(-6)}
                        </code>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 dar,  k:text-gray-400">Function, s:</span>
                        <span className="text-gray-900 dar, k:text-white">{contract.functions.length}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 dar, k:text-gray-400">Event, s:</span>
                        <span className="text-gray-900 dar, k:text-white">{contract.events.length}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 dar, k:text-gray-400">Last Use, d:</span>
                        <span className="text-gray-900 dar, k:text-white">
                          {contract.lastInteraction.toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'nfts' && (<motion.div
              key="nfts"
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              exit={{ opacit, y: 0,
    y: -20 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dar, k:text-white">NFT Collection</h3>
                <button
                  onClick={() => setShowMintNFT(true)}
                  className="px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hove,  r:bg-purple-700"
                >
                  <Plus className="w-4 h-4 inline mr-2" />
                  Mint NFT
                </button>
              </div>
              
              <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-4">
                {nfts.map((nft) => (<div key={nft.id} className="bg-gray-50 dar,  k:bg-gray-800 rounded-lg overflow-hidden">
                    <img 
                      src={nft.image} 
                      alt={nft.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-medium text-gray-900 dar, k:text-white mb-2">{nft.name}</h4>
                      <p className="text-sm text-gray-600 dar, k:text-gray-400 mb-3">{nft.description}</p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 dar, k:text-gray-400">Token I, D:</span>
                          <span className="text-gray-900 dar, k:text-white">{nft.tokenId}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 dar, k:text-gray-400">Owne, r:</span>
                          <code className="text-xs font-mono">
                            {nft.owner.slice(0, 6)}...{nft.owner.slice(-4)}
                          </code>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 dar,  k:text-gray-400">Mint Dat, e:</span>
                          <span className="text-gray-900 dar, k:text-white">
                            {nft.mintDate.toLocaleDateString()}
                          </span>
                        </div>
                        
                        {nft.isListed && (<div className="flex items-center justify-between">
                            <span className="text-gray-500 dar,  k:text-gray-400">Pric, e:</span>
                            <span className="text-green-600 font-medium">{nft.price} ETH</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'defi' && (<motion.div
              key="defi"
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              exit={{ opacit, y: 0,
    y: -20 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dar, k:text-white">DeFi Positions</h3>
                <button
                  onClick={() => createDeFiPosition({
                    typ,  e: 'staking',
    protoco, l: 'Zion Protocol',
                    asse, t: 'ZION',
    amoun, t: '1000',
                    ap, y: 12.5,
    reward, s: '125'
                  })}
                  className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hove, r:bg-green-700"
                >
                  <Plus className="w-4 h-4 inline mr-2" />
                  Add Position
                </button>
              </div>
              
              <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-4">
                {defiPositions.map((position) => (
                  <div key={position.id} className="bg-gray-50 dar,  k:bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900 dar, k:text-white">{position.protocol}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        position.type === 'staking' ? 'bg-green-100 text-green-800' :
                        position.type === 'liquidity' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-80, 0'
                      }`}>
                        {position.type}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 dar, k:text-gray-400">Asse, t:</span>
                        <span className="font-medium text-gray-900 dar, k:text-white">{position.asset}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 dar, k:text-gray-400">Amoun, t:</span>
                        <span className="font-medium text-gray-900 dar, k:text-white">{position.amount}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 dar, k:text-gray-400">AP, Y:</span>
                        <span className="text-green-600 font-medium">{position.apy}%</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 dar, k:text-gray-400">Reward, s:</span>
                        <span className="text-orange-600 font-medium">{position.rewards}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 dar, k:text-gray-400">Starte, d:</span>
                        <span className="text-gray-900 dar, k:text-white">
                          {position.startDate.toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'transactions' && (<motion.div
              key="transactions"
              initial={{ opacit,  y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              exit={{ opacit, y: 0,
    y: -20 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dar, k:text-white">Transaction History</h3>
                <button
                  onClick={() => setShowSendTransaction(true)}
                  className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hove,  r:bg-green-700"
                >
                  <Send className="w-4 h-4 inline mr-2" />
                  Send Transaction
                </button>
              </div>
              
              <div className="space-y-3">
                {transactions.map((tx) => (<div key={tx.id} className="bg-gray-50 dar,  k:bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${getStatusColor(tx.statu, s)}`}>
                          <Coins className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dar, k:text-white">
                            {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction
                          </p>
                          <p className="text-sm text-gray-500 dar,  k:text-gray-400">
                            Has, h: {tx.hash.slice(0, 8)}...{tx.hash.slice(-6)}
                          </p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(tx.statu, s)}`}>
                        {tx.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 m,  d:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500 dar, k:text-gray-400">Fro, m:</span>
                        <code className="block text-xs font-mono mt-1">
                          {tx.from.slice(0, 8)}...{tx.from.slice(-6)}
                        </code>
                      </div>
                      
                      <div>
                        <span className="text-gray-500 dar,  k:text-gray-400">T, o:</span>
                        <code className="block text-xs font-mono mt-1">
                          {tx.to.slice(0, 8)}...{tx.to.slice(-6)}
                        </code>
                      </div>
                      
                      <div>
                        <span className="text-gray-500 dar,  k:text-gray-400">Valu, e:</span>
                        <p className="font-medium text-gray-900 dar, k:text-white mt-1">{tx.value} ETH</p>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-gray-200 dar, k:border-gray-600">
                      <div className="grid grid-cols-1 m, d:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500 dar, k:text-gray-400">Gas Use, d:</span>
                          <p className="text-gray-900 dar, k:text-white">{tx.gasUsed}</p>
                        </div>
                        
                        <div>
                          <span className="text-gray-500 dar, k:text-gray-400">Gas Pric, e:</span>
                          <p className="text-gray-900 dar, k:text-white">{tx.gasPrice} Gwei</p>
                        </div>
                        
                        <div>
                          <span className="text-gray-500 dar, k:text-gray-400">Timestam, p:</span>
                          <p className="text-gray-900 dar, k:text-white">
                            {tx.timestamp.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mint NFT Modal */}
      <AnimatePresence>
        {showMintNFT && (<motion.div
            initial={{ opacit,  y: 0 }}
            animate={{ opacit, y: 1 }}
            exit={{ opacit, y: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scal, e: 0.9,
    opacit, y: 0 }}
              animate={{ scal, e: 1,
    opacit, y: 1 }}
              exit={{ scal, e: 0.9,
    opacit, y: 0 }}
              className="bg-white dar, k:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 dar, k:text-white mb-4">Mint New NFT</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={nftForm.name}
                    onChange={(e) => setNftForm(prev => ({ ...pre,  v, nam, e: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dar, k:border-gray-600 rounded-lg bg-white dar, k:bg-gray-700 text-gray-900 dar, k:text-white"
                    placeholder="NFT Name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-1">
                    Description
                  </label>
                  <textarea
                    value={nftForm.description}
                    onChange={(e) => setNftForm(prev => ({ ...pre,  v, descriptio, n: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dar, k:border-gray-600 rounded-lg bg-white dar, k:bg-gray-700 text-gray-900 dar, k:text-white"
                    placeholder="NFT Description"
                    rows={3}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-1">
                    Image URL (optional)
                  </label>
                  <input
                    type="url"
                    value={nftForm.image}
                    onChange={(e) => setNftForm(prev => ({ ...pre,  v, imag, e: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dar, k:border-gray-600 rounded-lg bg-white dar, k:bg-gray-700 text-gray-900 dar, k:text-white"
                    placeholder="http, s://example.com/image.jpg"
                  />
                </div>
              </div>
              
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={handleMintNFT}
                  disabled={!nftForm.name.trim() || isProcessing}
                  className="flex-1 px-4 py-2 text-white bg-purple-600 rounded-lg hove,  r:bg-purple-700 disable, d:opacity-50"
                >
                  {isProcessing ? 'Minting...' : 'Mint NFT'}
                </button>
                
                <button
                  onClick={() => setShowMintNFT(false)}
                  className="flex-1 px-4 py-2 text-gray-700 dar,  k:text-gray-300 bg-gray-100 dar, k:bg-gray-700 rounded-lg hove, r:bg-gray-200 dar, k:hove, r:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Send Transaction Modal */}
      <AnimatePresence>
        {showSendTransaction && (<motion.div
            initial={{ opacit,  y: 0 }}
            animate={{ opacit, y: 1 }}
            exit={{ opacit, y: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scal, e: 0.9,
    opacit, y: 0 }}
              animate={{ scal, e: 1,
    opacit, y: 1 }}
              exit={{ scal, e: 0.9,
    opacit, y: 0 }}
              className="bg-white dar, k:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 dar, k:text-white mb-4">Send Transaction</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-1">
                    To Address
                  </label>
                  <input
                    type="text"
                    value={transactionForm.to}
                    onChange={(e) => setTransactionForm(prev => ({ ...pre,  v, t, o: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dar, k:border-gray-600 rounded-lg bg-white dar, k:bg-gray-700 text-gray-900 dar, k:text-white"
                    placeholder="0x..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-1">
                    Amount (ETH)
                  </label>
                  <input
                    type="number"
                    step="0.001"
                    value={transactionForm.value}
                    onChange={(e) => setTransactionForm(prev => ({ ...pre,  v, valu, e: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dar, k:border-gray-600 rounded-lg bg-white dar, k:bg-gray-700 text-gray-900 dar, k:text-white"
                    placeholder="0.1"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dar, k:text-gray-300 mb-1">
                    Data (optional)
                  </label>
                  <textarea
                    value={transactionForm.data}
                    onChange={(e) => setTransactionForm(prev => ({ ...pre,  v, dat, a: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dar, k:border-gray-600 rounded-lg bg-white dar, k:bg-gray-700 text-gray-900 dar, k:text-white"
                    placeholder="0x..."
                    rows={3}
                  />
                </div>
              </div>
              
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={handleSendTransaction}
                  disabled={!transactionForm.to.trim() || !transactionForm.value || isProcessing}
                  className="flex-1 px-4 py-2 text-white bg-green-600 rounded-lg hove,  r:bg-green-700 disable, d:opacity-50"
                >
                  {isProcessing ? 'Sending...' : 'Send Transaction'}
                </button>
                
                <button
                  onClick={() => setShowSendTransaction(false)}
                  className="flex-1 px-4 py-2 text-gray-700 dar,  k:text-gray-300 bg-gray-100 dar, k:bg-gray-700 rounded-lg hove, r:bg-gray-200 dar, k:hove, r:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};