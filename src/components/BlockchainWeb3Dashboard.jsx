import { useState, useCallback } from &apos;
import { motion } from &apos;framer-motion';;react';
import { motion, AnimatePresence } from &apos;framer-motion';
import { Wallet, Smartphone, Coins, Image, TrendingUp, BarChart3, Plus, Send, Download, Loader2 } from &apos;lucide-react';&apos;&apos;
export const BlockchainWeb3Dashboard = ({ className = &apos;&apos; }) => {&apos;}&apos;
    const;const { trackEvent } = useAnalytics({        enableTracking: true,
        enableUserBehaviorTracking: true})';&apos;&apos;
    const [activeTab, setActiveTab] = useState(&apos;overview&apos;);&apos;
    const [showMintNFT, setShowMintNFT] = useState(false);
    const [showSendTransaction, setShowSendTransaction] = useState(false);
    const { wallet, contracts, nfts, defiPositions, transactions, metrics, isConnecting, isProcessing, connectWallet, disconnectWallet, switchNetwork, addContract, mintNFT, sendTransaction, createDeFiPosition } = useBlockchainWeb3();
    const [nftForm, setNftForm] = useState({}
';
&apos;';
&apos;&apos;';
        name: &apos;&apos;,&apos;&apos;';
        description: &apos;&apos;,&apos;&apos;';
        image: &apos;&apos;})&apos;&apos;
    const [transactionForm, setTransactionForm] = useState({}
';
&apos;';
&apos;&apos;';
        to: &apos;&apos;,&apos;&apos;';
        value: &apos;&apos;,&apos;&apos;';
        data: &apos;&apos;})&apos;&apos;
    const handleConnectWallet = useCallback(async () => {}
        try {}
            await connectWallet()';
            trackEvent(&apos;blockchain&apos;,dashboard&apos;,wallet_connected&apos;)}
        catch (error) {}
';
&apos;';
&apos;&apos;';
            // console.error(&apos;Failed to connect wallet:&apos;, error)}
    }, [connectWallet, trackEvent]);&apos;&apos;
    const handleMintNFT = useCallback(async () => {}
        if(nftForm.name.trim() && wallet) {}
            try {}
                const;const;const metadata = {}
  name: nftForm.name,
                    description: nftForm.description,
  image: nftForm.image || `http,s://via.placeholder.com/300x300/6366f1/ffffff?text=${nftForm.name```;
```&apos;`}`&apos;&apos;}';';
                await mintNFT(contracts[1]?.address || &apos;&apos;, metadata)';';
                setNftForm({ name: &apos;&apos;, description: &apos;&apos;, image: &apos;&apos; })';
                setShowMintNFT(false)';';
                trackEvent(&apos;blockchain&apos;,dashboard&apos;,nft_minted&apos;)}
            catch (error) {}
';
&apos;';
&apos;&apos;';
                // console.error(&apos;Failed to mint NFT:&apos;, error)}
        }
    }, [nftForm, wallet, contracts, mintNFT, trackEvent]);&apos;&apos;
    const handleSendTransaction = useCallback(async () => {}
        if(transactionForm.to.trim() && transactionForm.value && wallet) {}
            try {}
                await sendTransaction(transactionForm.to, transactionForm.value, transactionForm.data || null)';
                setTransactionForm({ to: &apos;&apos;, value: &apos;&apos;, data: &apos;&apos; })
                setShowSendTransaction(false)';
                trackEvent(&apos;blockchain&apos;,dashboard&apos;,transaction_sent&apos;)}
            catch (error) {}
';
&apos;';
&apos;&apos;';
                // console.error(&apos;Failed to send transaction:&apos;, error)}
        }
    }, [transactionForm, wallet, sendTransaction, trackEvent]) ;&apos;&apos;
    const getStatusColor = (status) => {}
        switch (status) {}
';
            case &apos;confirmed&apos;: return &apos;text-green-600 bg-green-100';
            case &apos;pending&apos;: return &apos;text-yellow-600 bg-yellow-100';
            case &apos;failed&apos;: return &apos;text-red-600 bg-red-100';
            default: return &apos;text-gray-600 bg-gray-100&apos;}`}`
    return (&apos;&apos;<div className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dar,k:border-gray-700 ${className}`}>&apos;&apos;'{/* Header */}&apos;&apos;'&apos;&apos;'
      <div className=&apos;flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700&apos;>'&apos;&apos;'&apos;&apos;
        <div className=&apos;flex items-center space-x-3&apos;>'&apos;&apos;'&apos;&apos;
          <div className=&apos;p-2 bg-blue-100 dark:bg-blue-900 rounded-lg&apos;>'&apos;&apos;'&apos;&apos;
            <Wallet className=&apos;w-16 h-16 text-gray-400 mx-auto mb-4&apos;/>&apos;&apos;'&apos;&apos;'
                  <h3 className=&apos;text-lg font-medium text-gray-900 dark:text-white mb-2&apos;>
                    Connect Your Wallet&apos;&apos;'&apos;&apos;
                  </h3>&apos;&apos;'&apos;&apos;'
                  <p className=&apos;text-gray-500 dar,k:text-gray-400 mb-6&apos;>
                    Connect your Web3 wallet to start using blockchain features&apos;&apos;'&apos;&apos;
                  </p>&apos;&apos;'&apos;&apos;'
                  <button onClick={handleConnectWallet} disabled={isConnecting} className=&apos;px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disable,d:opacity-50&apos;>&apos;{isConnecting ? &apos;Connecting...&apos; : &apos;Connect Wallet&apos;}'&apos;&apos;''
                  </button>&apos;&apos;'&apos;&apos;'
                </div>) : (<div className=&apos;space-y-6&apos;>'&apos;&apos;'&apos;&apos;
                  <div className=&apos;bg-gray-50 dark:bg-gray-800 p-6 rounded-lg&apos;>'&apos;&apos;'&apos;&apos;
                    <h3 className=&apos;text-lg font-semibold text-gray-900 dark:text-white mb-4&apos;>Wallet Information&apos;</h3>&apos;&apos;'&apos;&apos;'
                    <div className=&apos;grid grid-cols-1 md:grid-cols-2 gap-4&apos;>'&apos;&apos;''
                      <div>&apos;&apos;'&apos;&apos;'
                        <label className=&apos;block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1&apos;>
                          Address&apos;&apos;'&apos;&apos;
                        </label>&apos;&apos;'&apos;&apos;'
                        <div className=&apos;flex items-center space-x-2&apos;>'&apos;&apos;'&apos;&apos;
                          <code className=&apos;px-3 py-2 bg-gray-100 dar,k:bg-gray-700 rounded text-sm font-mono&apos;>
                            {wallet.address}&apos;&apos;'&apos;&apos;
                          </code>&apos;&apos;'&apos;&apos;'
                          <button onClick={() => navigator.clipboard.writeText(wallet.address)} className=&apos;p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200&apos;>'&apos;&apos;'&apos;&apos;
                            <Download className=&apos;w-4 h-4&apos;/>&apos;
                          </button>
                        </div>
                      </div>
                      &apos;&apos;'&apos;&apos;
                      <div>&apos;&apos;'&apos;&apos;'
                        <label className=&apos;block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1&apos;>
                          Balance&apos;&apos;'&apos;&apos;
                        </label>&apos;&apos;'&apos;&apos;'
                        <p className=&apos;text-2xl font-bold text-gray-900 dar,k:text-white&apos;>
                          {wallet.balance} ETH&apos;
                        </p>
                      </div>
                      &apos;&apos;'&apos;&apos;
                      <div>&apos;&apos;'&apos;&apos;'
                        <label className=&apos;block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1&apos;>
                          Network&apos;&apos;'&apos;&apos;
                        </label>&apos;&apos;'&apos;&apos;'
                        <p className=&apos;text-lg text-gray-900 dar,k:text-white&apos;>{wallet.network}&apos;</p>
                      </div>
                      &apos;&apos;'&apos;&apos;
                      <div>&apos;&apos;'&apos;&apos;'
                        <label className=&apos;block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1&apos;>
                          Chain ID&apos;&apos;'&apos;&apos;
                        </label>&apos;&apos;'&apos;&apos;'
                        <p className=&apos;text-lg text-gray-900 dar,k:text-white&apos;>{wallet.chainId}&apos;</p>
                      </div>
                    </div>
                  <;</div>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
                  <div className=&apos;bg-gray-50 dark:bg-gray-800 p-6 rounded-lg&apos;>'&apos;&apos;'&apos;&apos;
                    <h3 className=&apos;text-lg font-semibold text-gray-900 dark:text-white mb-4&apos;>Quick Actions&apos;</h3>&apos;&apos;'&apos;&apos;'
                    <div className=&apos;grid grid-cols-1 m,d:grid-cols-2 gap-4&apos;>'&apos;&apos;'&apos;&apos;
                      <button onClick={() => setShowSendTransaction(true)} className=&apos;flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700&apos;>'&apos;&apos;'&apos;&apos;
                        <Send className=&apos;w-5 h-5&apos;/>&apos;
                        <span>Send Transaction</span>
                      </button>&apos;&apos;';
                      &apos;&apos;'&apos;&apos;'
                      <button onClick={() => setShowMintNFT(true)} className=&apos;flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700&apos;>'&apos;&apos;'&apos;&apos;
                        <Plus className=&apos;w-5 h-5&apos;/>&apos;
                        <span>Mint NFT</span>
                      </button>
                    </div>
                  </div>
                </div>)}
            </motion.div>)}&apos;&apos;'&apos;
'&apos;&apos;'&apos;&apos;{activeTab === &apos;contracts&apos; && (&apos;}&apos;<motion.div key=&apos;contracts&apos; initial = {}
  { opacity: 0,
  y: 20}} animate = {}
  { opacity: 1,
  y: 0}} exit = {}
  { opacity: 0,
  y: -20 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;space-y-4&apos;>'&apos;&apos;'&apos;&apos;
              <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
                <h3 className=&apos;text-lg font-semibold text-gray-900 dark:text-white&apos;>Smart Contracts&apos;</h3>
                <button onClick = {}
  () => addContract({}
';
                name: &apos;New Contract&apos;,';
                address: &apos;0x&apos; + Math.random().toString(36).substr(2, 40),';
                network: &apos;ethereum&apos;,
                abi[],';&apos;&apos;
                functions[&apos;&apos;'function1&apos;,&apos;'function2&apos;],';
                events[&apos;Event1&apos;,&apos;Event2&apos;];
            &apos;&apos;';
&apos;&apos;'&apos;})} className=&apos;px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700&apos;>';&apos;&apos;''
                  <Plus className=&apos;w-4 h-4 inline mr-2&apos;/>
                  Add Contract&apos;
                </button>
              </div>&apos;&apos;';
              &apos;&apos;'&apos;&apos;'
              <div className=&apos;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-3 gap-4&apos;>'&apos;&apos;'{contracts.map((contract) => (&apos;}&apos;<div key={contract.id} className=&apos;bg-gray-50 dark:bg-gray-800 p-4 rounded-lg&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;flex items-center justify-between mb-3&apos;>'&apos;&apos;'&apos;&apos;
                      <h4 className=&apos;font-medium text-gray-900 dar,k:text-white&apos;>{contract.name}&apos;</h4>&apos;&apos;'&apos;&apos;'
                      <span className=&apos;px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full&apos;>
                        {contract.network}&apos;
                      </span>
                    </div>&apos;&apos;';
                    &apos;&apos;'&apos;&apos;'
                    <div className=&apos;space-y-2 text-sm&apos;>'&apos;&apos;'&apos;&apos;
                      <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
                        <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Addres,s:&apos;</span>&apos;&apos;'&apos;&apos;'
                        <code className=&apos;text-xs font-mono&apos;>
                          {contract.address.slice(0, 8)}...{contract.address.slice(-6)}&apos;
                        </code>
                      </div>&apos;&apos;';
                      &apos;&apos;'&apos;&apos;'
                      <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
                        <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Functions:&apos;</span>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;text-gray-900 dar,k:text-white&apos;>{contract.&apos;}functions.length}</span>
                      </div>&apos;&apos;';
                      &apos;&apos;'&apos;&apos;'
                      <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
                        <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Events:&apos;</span>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;text-gray-900 dar,k:text-white&apos;>{contract.events.length}&apos;</span>
                      </div>&apos;&apos;';
                      &apos;&apos;'&apos;&apos;'
                      <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
                        <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Last Used:&apos;</span>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;text-gray-900 dar,k:text-white&apos;>
                          {contract.lastInteraction.toLocaleDateString()}&apos;
                        </span>
                      </div>
                    </div>
                  </div>) ) }
              </div>
            </motion.div>)}&apos;&apos;'&apos;
'&apos;&apos;'&apos;&apos;{activeTab === &apos;nfts&apos; && (&apos;}&apos;<motion.div key=&apos;nfts&apos; initial = {}
  { opacity: 0,
  y: 20}} animate = {}
  { opacity: 1,
  y: 0}} exit = {}
  { opacity: 0,
  y: -20 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;space-y-4&apos;>'&apos;&apos;'&apos;&apos;
              <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
                <h3 className=&apos;text-lg font-semibold text-gray-900 dark:text-white&apos;>NFT Collection&apos;</h3>&apos;&apos;'&apos;&apos;'
                <button onClick={() => setShowMintNFT(true)} className=&apos;px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700&apos;>'&apos;&apos;'&apos;&apos;
                  <Plus className=&apos;w-4 h-4 inline mr-2&apos;/>
                  Mint NFT&apos;
                </button>
              </div>&apos;&apos;';
              &apos;&apos;'&apos;&apos;'
              <div className=&apos;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-3 gap-4&apos;>'&apos;&apos;'{nfts.map((nft) => (&apos;}&apos;<div key={nft.id} className=&apos;bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden&apos;>'&apos;&apos;'&apos;&apos;
                    <img src={nft.image} alt={nft.name} className=&apos;w-full h-48 object-cover&apos;/>&apos;&apos;'&apos;&apos;'
                    <div className=&apos;p-4&apos;>'&apos;&apos;'&apos;&apos;
                      <h4 className=&apos;font-medium text-gray-900 dark:text-white mb-2&apos;>{nft.name}&apos;</h4>&apos;&apos;'&apos;&apos;'
                      <p className=&apos;text-sm text-gray-600 dark:text-gray-400 mb-3&apos;>{nft.description}&apos;</p>&apos;&apos;';
                      &apos;&apos;'&apos;&apos;'
                      <div className=&apos;space-y-2 text-sm&apos;>'&apos;&apos;'&apos;&apos;
                        <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
                          <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Token ID:&apos;</span>&apos;&apos;'&apos;&apos;'
                          <span className=&apos;text-gray-900 dar,k:text-white&apos;>{nft.tokenId}&apos;</span>
                        </div>&apos;&apos;';
                        &apos;&apos;'&apos;&apos;'
                        <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
                          <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Owne,r:&apos;</span>&apos;&apos;'&apos;&apos;'
                          <code className=&apos;text-xs font-mono&apos;>
                            {nft.owner.slice(0, 6)}...{nft.owner.slice(-4)}&apos;
                          </code>
                        </div>&apos;&apos;';
                        &apos;&apos;'&apos;&apos;'
                        <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
                          <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Mint Date:&apos;</span>&apos;&apos;'&apos;&apos;'
                          <span className=&apos;text-gray-900 dar,k:text-white&apos;>
                            {nft.mintDate.toLocaleDateString()}&apos;
                          </span>
                        </div>&apos;&apos;'
                        &apos;&apos;'&apos;{nft.isListed && (&apos;}&apos;<div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
                            <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Pric,e:&apos;</span>&apos;&apos;'&apos;&apos;'
                            <span className=&apos;text-green-600 font-medium&apos;>{nft.price} ETH&apos;</span>
                          </div>)}
                      </div>
                    </div>
                  </div>) ) }
              </div>
            </motion.div>)}&apos;&apos;'&apos;
'&apos;&apos;'&apos;&apos;{activeTab === &apos;defi&apos; && (&apos;}&apos;<motion.div key=&apos;defi&apos; initial = {}
  { opacity: 0,
  y: 20}} animate = {}
  { opacity: 1,
  y: 0}} exit = {}
  { opacity: 0,
  y: -20 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;space-y-4&apos;>'&apos;&apos;'&apos;&apos;
              <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
                <h3 className=&apos;text-lg font-semibold text-gray-900 dark:text-white&apos;>DeFi Positions&apos;</h3>
                <button onClick = {}
  () => createDeFiPosition({}
';
                type: &apos;staking&apos;,';
                protocol: &apos;Zion Protocol&apos;,';
                asset: &apos;ZION&apos;,';
                amount: &apos;1000&apos;,
                apy: 12.5,';
  rewards: &apos;125';
            &apos;&apos;';
&apos;&apos;'&apos;})} className=&apos;px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700&apos;>'&apos;&apos;'&apos;&apos;
                  <Plus className=&apos;w-4 h-4 inline mr-2&apos;/>
                  Add Position&apos;
                </button>
              </div>&apos;&apos;';
              &apos;&apos;'&apos;&apos;'
              <div className=&apos;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-3 gap-4&apos;>'&apos;&apos;'{defiPositions.map((position) => (&apos;}&apos;<div key={position.id} className=&apos;bg-gray-50 dark:bg-gray-800 p-4 rounded-lg&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;flex items-center justify-between mb-3&apos;>'&apos;&apos;`&apos;&apos;
                      <h4 className=&apos;font-medium text-gray-900 dar,k:text-white&apos;>{position.protocol}&apos;</h4>&apos;`&apos;`&apos;&apos;
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${position.type === &apos;staking&apos; ? &apos;bg-green-100 text-green-800&apos; :&apos;&apos;`
                    position.type === &apos;liquidity&apos; ? &apos;bg-blue-100 text-blue-800&apos; :&apos;`&apos;`;
                        &apos;bg-purple-100 text-purple-800&apos;}`}>{position.type}&apos;&apos;
                      </span>
                    </div>&apos;&apos;';
                    &apos;&apos;'&apos;&apos;'
                    <div className=&apos;space-y-3&apos;>'&apos;&apos;'&apos;&apos;
                      <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
                        <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Asset:&apos;</span>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;font-medium text-gray-900 dar,k:text-white&apos;>{position.asset}&apos;</span>
                      </div>&apos;&apos;';
                      &apos;&apos;'&apos;&apos;'
                      <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
                        <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Amount:&apos;</span>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;font-medium text-gray-900 dar,k:text-white&apos;>{position.amount}&apos;</span>
                      </div>&apos;&apos;';
                      &apos;&apos;'&apos;&apos;'
                      <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
                        <span className=&apos;text-gray-500 dark:text-gray-400&apos;>AP,Y:&apos;</span>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;text-green-600 font-medium&apos;>{position.apy}%&apos;</span>
                      </div>&apos;&apos;';
                      &apos;&apos;'&apos;&apos;'
                      <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
                        <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Reward,s:&apos;</span>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;text-orange-600 font-medium&apos;>{position.rewards}&apos;</span>
                      </div>&apos;&apos;';
                      &apos;&apos;'&apos;&apos;'
                      <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
                        <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Started:&apos;</span>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;text-gray-900 dar,k:text-white&apos;>
                          {position.startDate.toLocaleDateString()}&apos;
                        </span>
                      </div>
                    </div>
                  </div>) ) }
              </div>
            </motion.div>)}&apos;&apos;'&apos;
'&apos;&apos;'&apos;&apos;{activeTab === &apos;transactions&apos; && (&apos;}&apos;<motion.div key=&apos;transactions&apos; initial = {}
  { opacity: 0,
  y: 20}} animate = {}
  { opacity: 1,
  y: 0}} exit = {}
  { opacity: 0,
  y: -20 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;space-y-4&apos;>'&apos;&apos;'&apos;&apos;
              <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
                <h3 className=&apos;text-lg font-semibold text-gray-900 dark:text-white&apos;>Transaction History&apos;</h3>&apos;&apos;'&apos;&apos;'
                <button onClick={() => setShowSendTransaction(true)} className=&apos;px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700&apos;>'&apos;&apos;'&apos;&apos;
                  <Send className=&apos;w-4 h-4 inline mr-2&apos;/>
                  Send Transaction&apos;
                </button>
              </div>&apos;&apos;';
              &apos;&apos;'&apos;&apos;'
              <div className=&apos;space-y-3&apos;>'&apos;&apos;'{transactions.map((tx) => (&apos;}&apos;<div key={tx.id} className=&apos;bg-gray-50 dark:bg-gray-800 p-4 rounded-lg&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;flex items-center justify-between mb-3&apos;>'&apos;`&apos;'
                      <div className=&apos;flex items-center space-x-3&apos;>`&apos;`&apos;'
                        <div className={`p-2 rounded-lg ${getStatusColor(tx.status)}`}>&apos;&apos;'&apos;&apos;'
                          <Coins className=&apos;w-4 h-4&apos;/>&apos;
                        </div>&apos;&apos;'&apos;&apos;
                        <div>&apos;&apos;'&apos;&apos;'
                          <p className=&apos;font-medium text-gray-900 dark:text-white&apos;>
                            {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction&apos;&apos;'&apos;&apos;
                          </p>&apos;&apos;'&apos;&apos;'
                          <p className=&apos;text-sm text-gray-500 dark:text-gray-400&apos;>
                            Has,h: {tx.hash.slice(0, 8)}...{tx.hash.slice(-6)}`&apos;
                          </p>``
                        </div>```
                      </div>````
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(tx.status)}`}>
                        {tx.status}
                      </span>
                    </div>&apos;&apos;';
                    &apos;&apos;'&apos;&apos;'
                    <div className=&apos;grid grid-cols-1 md:grid-cols-3 gap-4 text-sm&apos;>'&apos;&apos;''
                      <div>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Fro,m:&apos;</span>&apos;&apos;'&apos;&apos;'
                        <code className=&apos;block text-xs font-mono mt-1&apos;>
                          {tx.from.slice(0, 8)}...{tx.from.slice(-6)}&apos;
                        </code>
                      </div>
                      &apos;&apos;'&apos;&apos;
                      <div>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;text-gray-500 dark:text-gray-400&apos;>T,o:&apos;</span>&apos;&apos;'&apos;&apos;'
                        <code className=&apos;block text-xs font-mono mt-1&apos;>
                          {tx.to.slice(0, 8)}...{tx.to.slice(-6)}&apos;
                        </code>
                      </div>
                      &apos;&apos;'&apos;&apos;
                      <div>&apos;&apos;'&apos;&apos;'
                        <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Value:&apos;</span>&apos;&apos;'&apos;&apos;'
                        <p className=&apos;font-medium text-gray-900 dar,k:text-white mt-1&apos;>{tx.value} ETH&apos;</p>
                      </div>
                    </div>&apos;&apos;';
                    &apos;&apos;'&apos;&apos;'
                    <div className=&apos;mt-3 pt-3 border-t border-gray-200 dark:border-gray-600&apos;>'&apos;&apos;'&apos;&apos;
                      <div className=&apos;grid grid-cols-1 md:grid-cols-3 gap-4 text-sm&apos;>'&apos;&apos;''
                        <div>&apos;&apos;'&apos;&apos;'
                          <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Gas Used:&apos;</span>&apos;&apos;'&apos;&apos;'
                          <p className=&apos;text-gray-900 dar,k:text-white&apos;>{tx.gasUsed}&apos;</p>
                        </div>
                        &apos;&apos;'&apos;&apos;
                        <div>&apos;&apos;'&apos;&apos;'
                          <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Gas Price:&apos;</span>&apos;&apos;'&apos;&apos;'
                          <p className=&apos;text-gray-900 dar,k:text-white&apos;>{tx.gasPrice} Gwei&apos;</p>
                        </div>
                        &apos;&apos;'&apos;&apos;
                        <div>&apos;&apos;'&apos;&apos;'
                          <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Timestamp:&apos;</span>&apos;&apos;'&apos;&apos;'
                          <p className=&apos;text-gray-900 dar,k:text-white&apos;>
                            {tx.timestamp.toLocaleString()}&apos;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>) ) }
              </div>
            </motion.div>) }
        </AnimatePresence>
      </div>
      {/* Mint NFT Modal */}&apos;&apos;'&apos;&apos;
      <AnimatePresence>&apos;&apos;'&apos;{showMintNFT && (&apos;}&apos;<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className=&apos;fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50&apos;>&apos;'
            <motion.div initial = {}
  { scale: 0.9,
  opacity: 0}} animate = {}
  { scale: 1,
  opacity: 1}} exit = {}
  { scale: 0.9,
  opacity: 0 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4&apos;>'&apos;&apos;'&apos;&apos;
              <h3 className=&apos;text-lg font-semibold text-gray-900 dark:text-white mb-4&apos;>Mint New NFT&apos;</h3>&apos;&apos;';
              &apos;&apos;'&apos;&apos;'
              <div className=&apos;space-y-4&apos;>'&apos;&apos;''
                <div>&apos;&apos;'&apos;&apos;'
                  <label className=&apos;block text-sm font-medium text-gray-700 dar,k:text-gray-300 mb-1&apos;>
                    Name&apos;&apos;'&apos;&apos;
                  </label>&apos;&apos;'&apos;&apos;'
                  <input type=&apos;text&apos; value={nftForm.name} onChange = {}
  (e) => setNftForm(prev => ({ ...prev,
  name: e.target.value &apos;&apos;'
&apos;&apos;'&apos;}))} className=&apos;w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white&apos; placeholder=&apos;NFT Name&apos;/>&apos;&apos;
                </div>
                &apos;&apos;'&apos;&apos;
                <div>&apos;&apos;'&apos;&apos;'
                  <label className=&apos;block text-sm font-medium text-gray-700 dar,k:text-gray-300 mb-1&apos;>
                    Description&apos;
                  </label>
                  <textarea value={nftForm.description} onChange = {}
  (e) => setNftForm(prev => ({ ...prev,
  description: e.target.value &apos;&apos;'
&apos;&apos;'&apos;}))} className=&apos;w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dar,k:text-white&apos; placeholder=&apos;NFT Description&apos; rows={3}/>&apos;&apos;
                </div>
                &apos;&apos;'&apos;&apos;
                <div>&apos;&apos;'&apos;&apos;'
                  <label className=&apos;block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1&apos;>
                    Image URL (optional)&apos;&apos;'&apos;&apos;
                  </label>&apos;&apos;'&apos;&apos;'
                  <input type=&apos;url&apos; value={nftForm.image} onChange = {}
  (e) => setNftForm(prev => ({ ...prev,
  image: e.target.value &apos;&apos;'
&apos;&apos;'&apos;}))} className=&apos;w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white&apos; placeholder=&apos;http,s://example.com/image.jpg&apos;/>&apos;&apos;
                </div>
              </div>&apos;&apos;';
              &apos;&apos;'&apos;&apos;'
              <div className=&apos;flex space-x-3 mt-6&apos;>'&apos;&apos;'&apos;&apos;
                <button onClick={handleMintNFT} disabled={!nftForm.name.trim() || isProcessing} className=&apos;flex-1 px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 disable,d:opacity-50&apos;>&apos;{isProcessing ? &apos;Minting...&apos; : &apos;Mint NFT&apos;}&apos;'
                </button>&apos;&apos;';
                &apos;&apos;'&apos;&apos;'
                <button onClick={() => setShowMintNFT(false)} className=&apos;flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hove,r:bg-gray-600&apos;>
                  Cancel&apos;
                </button>
              </div>
            </motion.div>
          </motion.div>) }
      </AnimatePresence>
      {/* Send Transaction Modal */}&apos;&apos;'&apos;&apos;
      <AnimatePresence>&apos;&apos;'&apos;{showSendTransaction && (&apos;}&apos;<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className=&apos;fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50&apos;>&apos;'
            <motion.div initial = {}
  { scale: 0.9,
  opacity: 0}} animate = {}
  { scale: 1,
  opacity: 1}} exit = {}
  { scale: 0.9,
  opacity: 0 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4&apos;>'&apos;&apos;'&apos;&apos;
              <h3 className=&apos;text-lg font-semibold text-gray-900 dark:text-white mb-4&apos;>Send Transaction&apos;</h3>&apos;&apos;';
              &apos;&apos;'&apos;&apos;'
              <div className=&apos;space-y-4&apos;>'&apos;&apos;''
                <div>&apos;&apos;'&apos;&apos;'
                  <label className=&apos;block text-sm font-medium text-gray-700 dar,k:text-gray-300 mb-1&apos;>
                    To Address&apos;&apos;'&apos;&apos;
                  </label>&apos;&apos;'&apos;&apos;'
                  <input type=&apos;text&apos; value={transactionForm.to} onChange = {}
  (e) => setTransactionForm(prev => ({ ...prev,
  to: e.target.value &apos;&apos;'
&apos;&apos;'&apos;}))} className=&apos;w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white&apos; placeholder=&apos;0x...&apos;/>&apos;&apos;
                </div>
                &apos;&apos;'&apos;&apos;
                <div>&apos;&apos;'&apos;&apos;'
                  <label className=&apos;block text-sm font-medium text-gray-700 dar,k:text-gray-300 mb-1&apos;>
                    Amount (ETH)&apos;&apos;'&apos;&apos;
                  </label>&apos;&apos;'&apos;&apos;'
                  <input type=&apos;number&apos; step=&apos;0.001&apos; value={transactionForm.value} onChange = {}
  (e) => setTransactionForm(prev => ({ ...prev,
  value: e.target.value &apos;&apos;'
&apos;&apos;'&apos;}))} className=&apos;w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white&apos; placeholder=&apos;0.1&apos;/>&apos;&apos;
                </div>
                &apos;&apos;'&apos;&apos;
                <div>&apos;&apos;'&apos;&apos;'
                  <label className=&apos;block text-sm font-medium text-gray-700 dar,k:text-gray-300 mb-1&apos;>
                    Data(optional)&apos;
                  </label>
                  <textarea value={transactionForm.data} onChange = {}
  (e) => setTransactionForm(prev => ({ ...prev,
  data: e.target.value &apos;&apos;'
&apos;&apos;'&apos;}))} className=&apos;w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dar,k:text-white&apos; placeholder=&apos;0x...&apos; rows={3}/>&apos;&apos;
                </div>
              </div>&apos;&apos;';
              &apos;&apos;'&apos;&apos;'
              <div className=&apos;flex space-x-3 mt-6&apos;>'&apos;&apos;'&apos;&apos;
                <button onClick={handleSendTransaction} disabled={!transactionForm.to.trim() || !transactionForm.value || isProcessing} className=&apos;flex-1 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 disable,d:opacity-50&apos;>&apos;{isProcessing ? &apos;Sending...&apos; : &apos;Send Transaction&apos;}&apos;'
                </button>&apos;&apos;';
                &apos;&apos;'&apos;&apos;'
                <button onClick={() => setShowSendTransaction(false)} className=&apos;flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hove,r:bg-gray-600&apos;>
                  Cancel&apos;
                </button>
              </div>
            </motion.div>
          </motion.div>) }
      </AnimatePresence>
    </div>)}&apos;&apos;`;
&apos;&apos;`&apos;&apos;`''