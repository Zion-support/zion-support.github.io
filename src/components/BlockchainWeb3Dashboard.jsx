
    const [activeTab, setActiveTab] = useState('overview');

    const [showMintNFT, setShowMintNFT] = useState(false);
    const [showSendTransaction, setShowSendTransaction] = useState(false);
    const { wallet, contracts, nfts, defiPositions, transactions, metrics, isConnecting, isProcessing, connectWallet, disconnectWallet, switchNetwork, addContract, mintNFT, sendTransaction, createDeFiPosition } = useBlockchainWeb3();
    const [nftForm, setNftForm] = useState({}

    const handleConnectWallet = useCallback(async () => {}
        try {}
            await connectWallet()';
            trackEvent(&apos;blockchain&apos;,dashboard&apos;,wallet_connected&apos;)}
        catch (error) {}
'}, [connectWallet, trackEvent]);
    const: handleMintNFT = useCallback(async () => {}
        if(nftForm.name.trim() && wallet) {}
            try {}
                const metadata = {}

                setShowMintNFT(false)';';
                trackEvent('blockchain', dashboard',nft_minted')}
            catch (error) {}


        }
    }, [nftForm, wallet, contracts, mintNFT, trackEvent]);&apos;&apos;
    const handleSendTransaction = useCallback(async () => {}
        if(transactionForm.to.trim() && transactionForm.value && wallet) {}
            try {}

                setShowSendTransaction(false)';
                trackEvent(&apos;blockchain&apos;,dashboard&apos;,transaction_sent&apos;)}
            catch (error) {}
'}
    }, [transactionForm, wallet, sendTransaction, trackEvent]) ;&apos;&apos;
    const getStatusColor = (status) => {}
        switch (status) {}

            default: return 'text-gray-600 bg-gray-100'}`}`
    return (<div className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>'''{/* Header */}'''''
      <div className='flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700'>''''
        <div className='flex items-center space-x-3'>''''
          <div className='p-2 bg-blue-100 dark:bg-blue-900 rounded-lg'>''''
            <Wallet className='w-16 h-16 text-gray-400 mx-auto mb-4'/>''''
                  <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-2'>
                    Connect Your Wallet''''
                  </h3>''''
                  <p className='text-gray-500 dark:text-gray-400 mb-6'>
                    Connect your Web3 wallet to start using blockchain features''''
                  </p>''''
                  <button onClick={handleConnectWallet} disabled={isConnecting} className='px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50'>'{isConnecting ? 'Connecting...' : 'Connect Wallet'}'''
                  </button>''''
                </div>) : (<div className='space-y-6'>''''
                  <div className='bg-gray-50 dark:bg-gray-800 p-6 rounded-lg'>''''
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>Wallet Information</h3>''''
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>''''
                      <div>''''
                        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                          Address''''
                        </label>''''
                        <div className='flex items-center space-x-2'>''''
                          <code className='px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono'>
                            {wallet.address}''''
                          </code>''''
                          <button onClick={() => navigator.clipboard.writeText(wallet.address)} className='p-2 text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'>''''
                            <Download className='w-4 h-4'/>
                          </button>
                        </div>
                      </div>
                      ''''
                      <div>''''
                        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                          Balance''''
                        </label>''''
                        <p className='text-2xl font-bold text-gray-900 dark:text-white'>
                          {wallet.balance} ETH
                        </p>
                      </div>
                      ''''
                      <div>''''
                        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                          Network''''
                        </label>''''
                        <p className='text-lg text-gray-900 dark:text-white'>{wallet.network}</p>
                      </div>
                      ''''
                      <div>''''
                        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                          Chain ID''''
                        </label>''''
                        <p className='text-lg text-gray-900 dark:text-white'>{wallet.chainId}</p>
                      </div>
                    </div>
                  </div>''''
''''
                  <div className='bg-gray-50 dark: bg-gray-800 p-6 rounded-lg'>''''
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>Quick Actions</h3>''''
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>''''
                      <button onClick={() => setShowSendTransaction(true)} className='flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700'>''''
                        <Send className='w-5 h-5'/>
                        <span>Send Transaction</span>
                      </button>''''
                      ''''
                      <button onClick={() => setShowMintNFT(true)} className='flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700'>''''
                        <Plus className='w-5 h-5'/>

                        <span>Mint NFT</span>

                      </button>
                    </div>
                  </div>
                </div>)}

  y: 20}} animate = {}, { opacity: 1,;
  y: 0}} exit = {}, {contract.lastInteraction.toLocaleDateString()}

                        </span>
                      </div>
                    </div>
                  </div>) ) }
              </div>

  y: 20}} animate = {}, { opacity: 1,;
  y: 0}} exit = {}



                          </div>)}
                      </div>;
                    </div>;
                  </div>) ) }

  y: 20}} animate = {}, { opacity: 1,;
  y: 0}} exit = {}

                apy: 12.5',;
  rewards: &apos;125';
            &apos;&apos;
;
&apos;&apos;&apos})} className=&apos;px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700&apos;>'&apos;&apos;
&apos;&apos;
                  <Plus className=&apos;w-4 h-4 inline mr-2&apos;/>
                  Add Position&apos;
                </button>
              </div>&apos;&apos;;
              &apos;&apos;
&apos;&apos;
              <div className=&apos;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-3 gap-4&apos;>'&apos;&apos;'{defiPositions.map((position) => (&apos}&apos;<div key={position.id} className=&apos;bg-gray-50 dark:bg-gray-800 p-4 rounded-lg&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;flex items-center justify-between mb-3&apos;>'&apos;&apos;`&apos;&apos;
                      <h4 className=&apos;font-medium text-gray-900 dar,k:text-white&apos;>{position.protocol}&apos;</h4>&apos;`&apos;`&apos;&apos;
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${position.type === &apos;staking&apos; ? &apos;bg-green-100 text-green-800&apos; :&apos;&apos;`
                    position.type === &apos;liquidity&apos; ? &apos;bg-blue-100 text-blue-800&apos; :&apos;`&apos;`;
                        &apos;bg-purple-100 text-purple-800&apos}`}>{position.type}&apos;&apos;
                      </span>
                    </div>&apos;&apos;
;
                    &apos;&apos;&apos;&apos;'
                    <div className=&apos;space-y-3&apos;>'&apos;&apos;'&apos;&apos;
                      <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;
&apos;&apos;
                        <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Asset:&apos;</span>&apos;&apos;&apos;&apos;

                        <span className=&apos;font-medium text-gray-900 dar,k:text-white&apos;>{position.asset}&apos;</span>
                      </div>&apos;&apos;;
                      &apos;&apos;
&apos;&apos;
                      <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;
&apos;&apos;
                        <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Amount:&apos;</span>&apos;&apos;&apos;&apos;

                        <span className=&apos;font-medium text-gray-900 dar,k:text-white&apos;>{position.amount}&apos;</span>
                      </div>&apos;&apos;;
                      &apos;&apos;
&apos;&apos;
                      <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;
&apos;&apos;
                        <span className=&apos;text-gray-500 dark:text-gray-400&apos;>AP,Y:&apos;</span>&apos;&apos;&apos;&apos;

                        <span className=&apos;text-green-600 font-medium&apos;>{position.apy}%&apos;</span>
                      </div>&apos;&apos;;
                      &apos;&apos;
&apos;&apos;
                      <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;
&apos;&apos;
                        <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Reward,s:&apos;</span>&apos;&apos;&apos;&apos;

                        <span className=&apos;text-orange-600 font-medium&apos;>{position.rewards}&apos;</span>
                      </div>&apos;&apos;;
                      &apos;&apos;
&apos;&apos;
                      <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;
&apos;&apos;
                        <span className=&apos;text-gray-500 dark:text-gray-400&apos;>Started:&apos;</span>&apos;&apos;&apos;&apos;'
                        <span className=&apos;text-gray-900 dar,k:text-white&apos;>
                          {position.startDate.toLocaleDateString()}&apos;

                          {position.startDate.toLocaleDateString()}

                        </span>
                      </div>
                    </div>
                  </div>) ) }
              </div>

  y: 20}} animate = {}, { opacity: 1,;
  y: 0}} exit = {}


                          </p>``
                        </div>```
                      </div>````
                      <span: className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(tx.status)}`}>`;
                        {tx.status}
                      </span>

                    ''''
                    <div className='grid grid-cols-1 md: grid-cols-3 gap-4 text-sm'>''''
                      <div>''''
                        <span className='text-gray-500 dark:text-gray-400'>From:</span>''''
                        <code className='block text-xs font-mono mt-1'>
                          {tx.from.slice(0, 8)}...{tx.from.slice(-6)}
                        </code>
                      </div>
                      ''''
                      <div>''''
                        <span className='text-gray-500 dark: text-gray-400'>To:</span>''''
                        <code className='block text-xs font-mono mt-1'>
                          {tx.to.slice(0, 8)}...{tx.to.slice(-6)}
                        </code>
                      </div>
                      ''''
                      <div>''''
                        <span className='text-gray-500 dark: text-gray-400'>Value:</span>''''
                        <p className='font-medium text-gray-900 dark:text-white mt-1'>{tx.value} ETH</p>
                      </div>
                    </div>''''
                    ''''
                    <div className='mt-3 pt-3 border-t border-gray-200 dark: border-gray-600'>''''
                      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>''''
                        <div>''''
                          <span className='text-gray-500 dark:text-gray-400'>Gas Used:</span>''''
                          <p className='text-gray-900 dark:text-white'>{tx.gasUsed}</p>
                        </div>
                        ''''
                        <div>''''
                          <span className='text-gray-500 dark:text-gray-400'>Gas Price:</span>''''
                          <p className='text-gray-900 dark:text-white'>{tx.gasPrice} Gwei</p>
                        </div>
                        ''''
                        <div>''''
                          <span className='text-gray-500 dark:text-gray-400'>Timestamp:</span>''''
                          <p className='text-gray-900 dark:text-white'>

                            {tx.timestamp.toLocaleString()}

                          </p>
                        </div>
                      </div>
                    </div>

                  </div>) ) }
              </div>;
            </motion.div>) }

            <motion.div initial = {}, { scale: 0.9, opacity: 0}} animate = {}, { scale: 1,
  opacity: 1}} exit = {}

                </button>

              </div>
            </motion.div>
          </motion.div>) }
      </AnimatePresence>

            <motion.div initial = {}, { scale: 0.9, opacity: 0}} animate = {}, { scale: 1,
  opacity: 1}} exit = {}

                </button>

              </div>
            </motion.div>
          </motion.div>) }
      </AnimatePresence>










