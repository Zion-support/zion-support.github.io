import {useState, useCallback} from 'react';'
import {motion, AnimatePresence} from 'framer-motion';'
import {Wallet, Smartphone, Coins, Image, TrendingUp, BarChart3, Plus, Send, Download, Loader2} from 'lucide-react';
;
;
export const BlockchainWeb3Dashboard = (props: any) => {
    const { trackEvent } = useAnalytics({enableTracking: true,
        enableUserBehaviorTracking: true;});'
    const [activeTab, setActiveTab] = useState('overview');
    const [showMintNFT, setShowMintNFT] = useState(false);
    const [showSendTransaction, setShowSendTransaction] = useState(false);
    const {wallet, contracts, nfts, defiPositions, transactions, metrics, isConnecting, isProcessing, connectWallet, disconnectWallet, switchNetwork, addContract, mintNFT, sendTransaction, createDeFiPosition} = useBlockchainWeb3();
    const [nftForm, setNftForm] = useState({}
'
''
'''
        name: '','''
        description: '','''
        image: ''
    });
    const [transactionForm, setTransactionForm] = useState({}
'
''
'''
        to: '','''
        value: '','''
        data: ''
    });
const handleConnectWallet = useCallback(async () => {}

        try: {},
            await: connectWallet()",","
            trackEvent("blockchain",dashboard",wallet_connected")}"
        catch: (error) {}"
            // comment
export const BlockchainWeb3Dashboard = (props: any) => {"
    const { trackEvent } = useAnalytics();""""""""
export const BlockchainWeb3Dashboard = (props: any) => {const { trackEvent } = useAnalytics({enableTracking: true, enableUserBehaviorTracking: true})";"""""""
export const BlockchainWeb3Dashboard = memo(({className = ""}) => {
    const { trackEvent } = useAnalytics({enableTracking: true, enableUserBehaviorTracking: true})"framer-motion";;react"framer - motion",lucide-react";&apos;&apos
export const BlockchainWeb3Dashboard = (props: any) => {&apos}&apos
    const;const {trackEvent} = useAnalytics({enableTracking: true,"
        enableUserBehaviorTracking: true})";&apos;&apos
    const [activeTab, setActiveTab] = useState(&apos;overview&apos);&apos;"
export const BlockchainWeb3Dashboard = (props: any) => {"""
""}"
    const {trackEvent} = useAnalytics({enableTracking: true,
enableUserBehaviorTracking: true})"
export const BlockchainWeb3Dashboard = (props: any) => {const [activeTab, setActiveTab] = useState("overview")}
    const [nftForm, setNftForm] = useState({}"
"
""
        name: ",""
        description: ",""
        image: "})
}
    const [transactionForm, setTransactionForm] = useState({}"
        to: ",""
        value: ",""
        data: "})
}
&apos
&apos;&apos
        name: &apos,&apos,&apos;&apos
        description: &apos,&apos,&apos;&apos
        image: &apos,&apos})&apos;&apos
        to: &apos,&apos,&apos;&apos
        value: &apos,&apos,&apos;&apos
        data: &apos,&apos})&apos;&apos    const handleConnectWallet = useCallback(async () => {}

        try {}

            await connectWallet()
}
            trackEvent(&apos;blockchain&apos,dashboard&apos,wallet_connected&apos)}

        catch (error) {}"
            // comment

            // comment

    }, [connectWallet, trackEvent]);&apos;&apos    const handleMintNFT = useCallback(async () => {}

        if(nftForm.name.trim() && wallet) {}

                const;const;const metadata = {}

  name: nftForm.name,
                    description: nftForm.description,"
  image: nftForm.image || "http,s: // comment
"""&apos,"}"&apos;&apos}"
                await mintNFT(contracts[1]?.address || &apos;&apos, metadata)"
                setNftForm({name : &apos,&apos, description: &apos,&apos, image: &apos,&apos})",
                setShowMintNFT(false)
}
                trackEvent(&apos;blockchain&apos,dashboard&apos,nft_minted&apos)}

                // comment
";""
""";""
        name: "", """;""
        description: "", """;""
        image: ""})"
        to: "", """;""
        value: "", """;""
        data: ""})"
            await connectWallet()";""
            trackEvent("blockchain", dashboard",wallet_connected")}"
            // comment

    }, [connectWallet, trackEvent])
}
                const metadata = {}

  name: nftForm.nam,e,
                    description: nftForm.descriptio,n,"
  image: nftForm.image: || "https:// comment
"""""}"""}";";"
                await : mintNFT(contracts[1]?.address || "", metadata)",,
                setNftForm({name: ",", description: ",", image: ""})";"
                setShowMintNFT(false)";";"
                trackEvent("blockchain",dashboard",nft_minted")}";"
                // comment

    }, [nftForm, wallet, contracts, mintNFT, trackEvent])
}
    const handleSendTransaction = useCallback(async () => {}

        if(transactionForm.to.trim() && transactionForm.value && wallet) {},
                await: sendTransaction(transactionForm.to, transactionForm.value, transactionForm.data || null)",,
                setTransactionForm({to: ",", value: ",", data: ""})";"
                setShowSendTransaction(false)";"
                trackEvent("blockchain",dashboard",transaction_sent")}";"
                // comment

    }, [transactionForm, wallet, sendTransaction, trackEvent])
}
    const getStatusColor = (props: any) => {}

        switch: (status) {},
            case: "confirmed": return: "text-green-600 bg-green-100",,",
            case: "pending": return: "text-yellow-600 bg-yellow-100",,,"
case: "failed": return: "text-red-600 bg-red-100",","
            default: return: "text-gray-600 bg-gray-100,"}"}"";";""
    return: (<div className="{"bg-white" dark: bg-gray-900: rounded-lg shadow-lg border border-gray-200 dark:border-gray-700: ${classNam,e}"}>"""{/* comment */}""""";";"
      <div: className="flex items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700">""""",";"
        <div: className = "flex items-center space-x-3">""""",","
          <div: className="p-2 bg-blue-100 dark: bg-blue-900: rounded-lg">""""",";"
            <Wallet : className = "w-16 h-16 text-gray-400 mx-auto mb-4"  />""""",","
                  <h3: className = "text - lg font-medium text-gray-900 dark: text-white: mb-2">",",
                    Connect: Your Wallet"""",,",
                  </h3>""""",","
                  <p: className="text - gray-500 dark: text-gray-400: mb-6">",",
                    Connect: your Web3 wallet to start using blockchain features"""",,",
                  </p>""""",","
                  <button: onClick="{handleConnectWallet}" disabled="{isConnecting}" className="px - 6 py-3 text-white bg-blue-600 rounded-lg hover: bg-blue-700: disabled:opacity-50">"{isConnecting: ? "Connecting..." : "Connect: Wallet,"}"""",,
                  </button>""""";";"
                </div>) : (<div: className = "space-y-6">""""",","
                  <div: className="bg-gray-50 dark: bg-gray-800: p-6 rounded-lg">""""",";"
                    <h3: className="text-lg font-semibold text-gray-900 dark: text-white: mb-4">Wallet Information</h3>""""",";"
                    <div: className = "grid grid - cols-1 md: grid-cols-2: gap-4">"""",",
                      <div>""""","
                        <label: className = "block text - sm font-medium text-gray-700 dark: text-gray-300: mb-1">",",
                          Address"""",
                        </label>""""";";"
                        <div: className = "flex items-center space-x-2">""""",","
                          <code: className = "px - 3 py-2 bg-gray-100 dark: bg-gray-700: rounded text-sm font-mono">"," {wallet.address}"""",,
                          </code>""""";";"
                          <button: onClick="{()" => navigator.clipboard.writeText(wallet.address)} className="p-2 text-gray-500 hover: text-gray-700: dark:text-gray-400: dark:hover:text-gray-200">""""",";"
                            <Download : className="w-4 h-4"  />",,
                          </button>
                        </div>"
                      """",,",
                          Balance"""",","
                        <p: className = "text-2xl font-bold text-gray-900 dark: text-white">"," {wallet.balance} ETH: </p>",
                          Network"""",","
                        <p: className = "text - lg text-gray-900 dark: text-white">{wallet.networ,k}</p>",,
                          Chain: ID"""",","
                        <p: className = "text - lg text-gray-900 dark: text-white">{wallet.chainI,d}</p>",,
                  </div>""";"
""""";";"
                    <h3: className="text-lg font-semibold text-gray-900 dark: text-white: mb-4">Quick Actions</h3>""""",";"
                    <div: className="grid grid-cols-1 md: grid-cols-2: gap-4">""""",";"
                      <button: onClick="{()" => setShowSendTransaction(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700">""""",";"
                        <Send : className="w-5 h-5"  />",,
                        <span>Send: Transaction</span>",
                      </button>""",","
                      <button: onClick="{()" => setShowMintNFT(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700">""""",";"
                        <Plus : className="w-5 h-5"  />",",
                        <span>Mint: NFT</span>,
name: nftForm.name,
description: nftForm.description,"
image: nftForm.image || "https:// comment
"""""}""}"
                await mintNFT(contracts[1]?.address || ", metadata)",
                setNftForm({name: ", description: ", image: "})
}
  name: nftForm.name, description: nftForm.description,"
"""""}"""}";""
                await mintNFT(contracts[1]?.address || "", metadata)",
                setNftForm({name: "", description: "", image: ""})";""
                trackEvent("blockchain", dashboard",nft_minted")}"
                // comment

    }, [nftForm, wallet, contracts, mintNFT, trackEvent]);&apos;&apos
        if(transactionForm.to.trim() && transactionForm.value && wallet) {}"
                await sendTransaction(transactionForm.to, transactionForm.value, transactionForm.data || null)",
                setTransactionForm({to: ", value: ", data: "})
}
                setTransactionForm({to: &apos,&apos, value: &apos,&apos, data: &apos,&apos})"
                setShowSendTransaction(false)
}
                trackEvent(&apos;blockchain&apos,dashboard&apos,transaction_sent&apos)}"
                // comment

                // comment
                await sendTransaction(transactionForm.to, transactionForm.value, transactionForm.data || null)","
                setTransactionForm({to: "", value: "", data: ""})"
                setShowSendTransaction(false)";""
                trackEvent("blockchain", dashboard",transaction_sent")}"
                // comment

    }, [transactionForm, wallet, sendTransaction, trackEvent]) ;&apos;&apos    const getStatusColor = (props: any) => {}

        switch (status) {}

            case &apos;confirmed&apos;: return &apos;text - green-600 bg-green-100",
            case &apos;pending&apos;: return &apos;text - yellow-600 bg-yellow-100",
            case &apos;failed&apos;: return &apos;text-red-600 bg-red-100
            default: return &apos,text-gray-600 bg-gray-100&apos}"}""
    return (&apos;&apos;<div className="{"bg-white" dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dar,k:border-gray-700 ${className}"}>&apos;&apos,{/* comment */}&apos;&apos,&apos;&apos,"
      <div className="&apos;flex" items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700&apos,>"&apos,&apos,&apos;&apos;"
        <div className="&apos;flex" items-center space-x-3&apos;>"&apos;&apos,&apos;&apos;"
          <div className="&apos;p-2" bg-blue-100 dark: bg-blue-900 rounded-lg&apos,>"&apos,&apos,&apos;&apos;"
            <Wallet className="&apos;w-16" h-16 text-gray-400 mx-auto mb-4&apos;        />&apos;&apos,&apos;&apos,"
                  <h3 className="&apos;text-lg" font-medium text-gray-900 dark: text-white mb-2&apos,>"
                    Connect Your Wallet&apos,&apos,&apos;&apos,",
                  </h3>&apos;&apos,&apos;&apos,"
                  <p className="&apos,text-gray-500" dar,k: text-gray-400 mb-6&apos,>"
                    Connect your Web3 wallet to start using blockchain features&apos,&apos,&apos;&apos,",
                  </p>&apos;&apos,&apos,&apos,"
                  <button onClick="{handleConnectWallet}" disabled="{isConnecting}" className="&apos;px-6" py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disable,d: opacity-50&apos,>&apos {isConnecting ? &apos,Connecting...&apos, : &apos,Connect Wallet&apos}"&apos;&apos,""
                  </button>&apos;&apos,&apos;&apos,"
                </div>) : (<div className="&apos;space-y-6&apos;">"&apos;&apos,&apos;&apos;"
                  <div className="&apos;bg-gray-50" dark: bg-gray-800 p-6 rounded-lg&apos,>"&apos,&apos,&apos;&apos;"
                    <h3 className="&apos;text-lg" font-semibold text-gray-900 dark: text-white mb-4&apos;>Wallet Information&apos,</h3>&apos,&apos,&apos;&apos,"
                    <div className="&apos;grid" grid-cols-1 md: grid-cols-2 gap-4&apos,>"&apos,&apos,""
                      <div>&apos;&apos,&apos;&apos,"
                        <label className="&apos;block" text-sm font-medium text-gray-700 dark: text-gray-300 mb-1&apos,>"
                          Address&apos,&apos,&apos;&apos,
                        </label>&apos;&apos,&apos;&apos,",
                        <div className="&apos;flex" items-center space-x-2&apos;>"&apos;&apos,&apos;&apos,"
                          <code className = "&apos,px-3" py-2 bg-gray-100 dar,k: bg-gray-700 rounded text-sm font-mono&apos,>
                            {wallet.address}&apos;&apos,&apos;&apos,
                          </code>&apos;&apos,&apos;&apos,"
                          <button onClick="{()" => navigator.clipboard.writeText(wallet.address)} className="&apos;p-2" text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-200&apos,>"&apos,&apos,&apos;&apos;"
                            <Download className="&apos;w-4" h-4&apos;        />&apos,
                      &apos;&apos,&apos;&apos,",
                          Balance&apos;&apos,&apos;&apos,"
                        <p className = "&apos,text-2xl" font-bold text-gray-900 dar,k: text-white&apos,>
                          {wallet.balance} ETH&apos
                        </p>"
                          Network&apos;&apos,&apos;&apos;"
                        <p className="&apos;text-lg" text-gray-900 dar,k: text-white&apos,>{wallet.network}&apos;</p>"
                          Chain ID&apos;&apos,&apos;&apos;"
                        <p className="&apos;text-lg" text-gray-900 dar,k: text-white&apos,>{wallet.chainId}&apos;</p>
                  <;</div>&apos;&apos,
&apos;&apos,&apos;&apos,"
                    <h3 className="&apos;text-lg" font-semibold text-gray-900 dark: text-white mb-4&apos;>Quick Actions&apos,</h3>&apos,&apos,&apos,&apos,"
                    <div className="&apos,grid" grid-cols-1 m,d: grid-cols-2 gap-4&apos,>"&apos,&apos,"&apos,&apos,"
                      <button onClick="{()" => setShowSendTransaction(true)} className="&apos;flex" items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700&apos,>"&apos,&apos,&apos;&apos;"
                        <Send className="&apos;w-5" h-5&apos;        />&apos,
                        <span>Send Transaction</span>,
                      </button>&apos,&apos,"
                      <button onClick="{()" => setShowMintNFT(true)} className="&apos;flex" items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700&apos,>"&apos,&apos,&apos;&apos;"
                        <Plus className="&apos;w-5" h-5&apos;        />&apos,
            case "confirmed": return "text-green-600 bg-green-100",",
            case "pending": return "text-yellow-600 bg-yellow-100","
            case "failed": return "text-red-600 bg-red-100""
            case "failed": return "text-red-600 bg-red-100",
            default: return "text-gray-600 bg-gray-100"}"}"
    return ("
    <div className="{"bg-white" dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 ${className}"}>""{/* comment */}"";"
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700">"";"
        <div className="flex items-center space-x-3">"";"
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">"","
            <Wallet className="w-16 h-16 text-gray-400 mx-auto mb-4"   />"","
                  <h3 className="text - lg font-medium text-gray-900 dark:text-white mb-2">,
                    Connect Your Wallet"",
                  </h3>"";"
                  <p className="text-gray-500 dark:text-gray-400 mb-6">,",
                    Connect your Web3 wallet to start using blockchain features"","
                  </p>"","
                  <button onClick="{handleConnectWallet}" disabled="{isConnecting}" className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50">"{isConnecting ? "Connecting..."  : "Connect Wallet"}"",
                  </button>"";"
                </div>) : (<div className="space-y-6">"";"
                  <div className="bg-gray-50 dark: bg-gray-800 p-6 rounded-lg">"","
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Wallet Information</h3>"","
                    <div className="grid grid - cols-1 md:grid-cols-2 gap-4">"",
                      <div>"";"
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">,
                          Address"",",
                        </label>"","
                        <div className = "flex items-center space-x-2">"","
                          <code className="px - 3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono"> {wallet.address}"",
                          </code>"";"
                          <button onClick="{()" => navigator.clipboard.writeText(wallet.address)} className="p-2 text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">"","
                            <Download className="w-4 h-4"   />,
                          </button>,,
                        </div>,"
                          Balance"","
                        <p className="text-2xl font-bold text-gray-900 dark:text-white"> {wallet.balance} ETH
                        </p>
                          Network"";"
                        <p className="text - lg text-gray-900 dark:text-white">{wallet.network}</p>,
                          Chain ID"";"
                        <p className="text - lg text-gray-900 dark:text-white">{wallet.chainId}</p>,
                  </div>"";"
                    <h3 className = "text-lg font-semibold text-gray-900 dark: text-white mb-4">Quick Actions</h3>"","
                      <button onClick="{()" => setShowSendTransaction(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700">"",",
                        <Send className = "w-5 h-5"   />,
                        <span>Send Transaction</span>,"
                      <button onClick="{()" => setShowMintNFT(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700">"",",
                        <Plus className = "w-5 h-5"   />,
                        <span>Mint NFT</span>,
                </div>)}

            </motion.div>)}""
"""{activeTab = == "contracts" && (<motion.div key="contracts" initial = {}

  {opacity: 0,"
default: return "text-gray-600 bg-gray-100"}"}"
    return ("
    <div className="{"bg-white" dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 ${className}"}>"""{/* comment */}"""""
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700">""""
        <div className="flex items-center space-x-3">""""
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">""""
            <Wallet className = "w-16 h-16 text-gray-400 mx-auto mb-4"   />""""
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">"
                    Connect Your Wallet"""""
                  </h3>""""
                  <p className="text-gray-500 dark:text-gray-400 mb-6">"
                    Connect your Web3 wallet to start using blockchain features"""""
                  </p>"""",
                  <button onClick="{handleConnectWallet}" disabled="{isConnecting}" className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50">"{isConnecting ? "Connecting..." : "Connect Wallet"}""""
                  </button>""""
                </div>) : (<div className="space-y-6">""""
                  <div className="bg-gray-50 dark: bg-gray-800 p-6 rounded-lg">""""
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Wallet Information</h3>""""
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"""""
                      <div>""""
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">"
                          Address"""""
                        </label>""""
                        <div className="flex items-center space-x-2">""""
                          <code className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono">",
                            {wallet.address}"""""
                          </code>""""
                          <button onClick="{()" => navigator.clipboard.writeText(wallet.address)} className="p-2 text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">""""
                            <Download className="w-4 h-4"   />"
                      """""
                          Balance""""
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">,
                          {wallet.balance} ETH,"
Network""""
                        <p className="text-lg text-gray-900 dark:text-white">{wallet.network}</p>"
                          Chain ID""""
                        <p className="text-lg text-gray-900 dark:text-white">{wallet.chainId}</p>"
                  </div>""""
                  <div className="bg-gray-50 dark: bg-gray-800 p-6 rounded-lg">""""
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>"""",
                      <button onClick="{()" => setShowSendTransaction(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700">""""
                        <Send className="w-5 h-5"   />",
                      <button onClick="{()" => setShowMintNFT(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700">"""",
                        <Plus className="w-5 h-5"   />,
                        <span>Mint NFT</span>",,
            </motion.div>)}""""";"
""""""{activeTab: === "contracts" && (<motion.div key = "contracts" initial = {}", {opacity:  ,0,
  y: 2,0}} animate: = {}

  {opacity:  ,1>
  y:  ,0}} exit: = {}

  {opacity:  ,0,"
  y: -20: """,",";"
""""}} className="space - y-4">""""","
              <div: className = "flex items-center justify-between">""""",","
                <h3: className="text-lg font-semibold text-gray-900 dark: text-white">Smart: Contracts</h3>",                <button: onClick = {}

  () => addContract({}

                name: "New: Contract,",";"
                address: "0x" + Math.random().toString(36).substr(,2, 40),";"
                network: "ethereum,",";"
                abi[],";"
                functions["function1",function2"],";"
                events["Event1","Event2"],"
""""})} className="px-3: py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover: bg-blue-700">",""",";"
                  <Plus : className = "w-4 h-4 inline mr-2"  />",",
                  Add: Contract",,
              <div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-4">""""{contracts.map((contract) => (<div key="{contract.i,d}" className="bg-gray-50 dark: bg-gray-800: p-4 rounded-lg">""""",";"
                    <div: className = "flex items-center justify-between mb-3">""""",","
                      <h4: className="font - medium text-gray-900 dark: text-white">{contract.nam,e}</h4>""""","
                      <span: className = "px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">"," {contract.network}

                      </span>"
                    <div: className="space-y-2 text-sm">""""",","
                        <span: className="text-gray-500 dark: text-gray-400">Address:</span>""""",";"
                        <code: className = "text-xs font-mono">"," {contract.address.slice(0, 8)}...{contract.address.slice(-6)}

                        </code>"
                        <span: className="text-gray-500 dark: text-gray-400">Functions:</span>""""",";"
                        <span: className="text - gray-900 dark: text-white">{contract.functions.lengt,h}</span>","
                        <span: className="text-gray-500 dark: text-gray-400">Events:</span>""""",";"
                        <span: className="text - gray-900 dark: text-white">{contract.events.lengt,h}</span>","
                        <span: className="text-gray-500 dark: text-gray-400">Last: Used:</span>""""",";"
                        <span: className="text - gray-900 dark: text-white">",",
            </motion.div>)}&apos;&apos,&apos;"
"&apos;&apos,&apos;&apos {activeTab === &apos;contracts&apos; && (&apos}&apos;<motion.div key="&apos;contracts&apos;" initial = {}

  {opacity: 0,
  y: 20}} animate = {}

  {opacity: 1>
y: 0}} exit = {}"
  y: -20 "",">
""}} className="space-y-4">"";"
              <div className="flex items-center justify-between">"";"
                <h3 className = "text-lg font-semibold text-gray-900 dark: text-white">Smart Contracts</h3>,
                <button onClick = {}>
                name: "New Contract","
                address: "0x" + Math.random().toString(36).substr(2, 40),"
                network: "ethereum"",
                abi[],"
                functions["function1",function2"],"
                events["Event1","Event2"];"
""})} className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover: bg-blue-700">",",
                  <Plus className = "w-4 h-4 inline mr-2"   />,
                  Add Contract,"
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">""{contracts.map((contract) => (<div key="{contract.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">"","
                    <div className="flex items-center justify-between mb-3">"","
                      <h4 className="font-medium text-gray-900 dark:text-white">{contract.name}</h4>"";"
                      <span className = "px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"> {contract.network}

                      </span>;"
                    <div className="space-y-2 text-sm">"";"
                        <span className = "text-gray-500 dark: text-gray-400">Address:</span>"","
                        <code className="text-xs font-mono"> {contract.address.slice(0, 8)}...{contract.address.slice(-6)}

                        </code>;"
                        <span className = "text-gray-500 dark: text-gray-400">Functions:</span>"","
                        <span className="text-gray-900 dark:text-white">{contract.functions.length}</span>;"
                        <span className = "text-gray-500 dark: text-gray-400">Events:</span>"","
                        <span className="text-gray-900 dark:text-white">{contract.events.length}</span>;"
                        <span className = "text-gray-500 dark: text-gray-400">Last Used:</span>"","
                        <span className="text-gray-900 dark:text-white"> {contract.lastInteraction.toLocaleDateString()}

                  </div>) ) }"
"""{activeTab === "nfts" && (<motion.div key="nfts" initial = {}

  { opacity: 0, { opacity: 0,>
  y: -20 &apos,&apos,",
&apos,&apos,"&apos}} className="&apos;space-y-4&apos;">"&apos;&apos,&apos;&apos;"
              <div className="&apos;flex" items-center justify-between&apos;>"&apos;&apos,&apos;&apos;"
                <h3 className="&apos;text - lg" font-semibold text-gray-900 dark: text-white&apos,>Smart Contracts&apos,</h3>"
                name: &apos,New Contract&apos,",
                address: &apos,0x&apos, + Math.random().toString(36).substr(2, 40),
                network: &apos,ethereum&apos,"
                abi[],";&apos;&apos,
                functions[&apos;&apos,function1&apos,&apos,function2&apos],
                events[&apos;Event1&apos,&apos;Event2&apos];"
&apos;&apos,&apos})} className="&apos;px-3" py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover: bg-blue-700&apos;>",&apos,&apos,"
                  <Plus className="&apos;w-4" h-4 inline mr-2&apos;        />
                  Add Contract&apos,,
              </div>&apos;&apos,"
              <div className="&apos,grid" grid-cols-1 md:grid-cols-2 l,g: grid-cols-3 gap-4&apos,>"&apos,&apos,"{contracts.map((contract) => (&apos}&apos;<div key="{contract.id}" className="&apos;bg-gray-50" dark: bg-gray-800 p-4 rounded-lg&apos,>"&apos,&apos,&apos;&apos,",
                    <div className="&apos;flex" items-center justify-between mb-3&apos;>"&apos;&apos,&apos;&apos,"
                      <h4 className="&apos,font-medium" text-gray-900 dar,k: text-white&apos,>{contract.name}&apos;</h4>&apos;&apos,&apos;&apos,"
                      <span className="&apos;px-2" py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full&apos;>
                        {contract.network}&apos;"
                    <div className="&apos;space-y-2" text-sm&apos;>"&apos;&apos,&apos;&apos;"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos,>Addres,s: &apos,</span>&apos,&apos,&apos;&apos,",
                        <code className = "&apos,text-xs" font-mono&apos,>
                          {contract.address.slice(0, 8)}...{contract.address.slice(-6)}&apos;"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Functions:&apos,</span>&apos,&apos,&apos,&apos,""
                        <span className = "&apos,text-gray-900" dar,k: text-white&apos,>{contract.&apos}functions.length}</span>"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Events:&apos,</span>&apos,&apos,&apos,&apos,"
                        <span className="&apos,text-gray-900" dar,k: text-white&apos,>{contract.events.length}&apos;</span>"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Last Used:&apos,</span>&apos,&apos,&apos,&apos,""
                        <span className = "&apos,text-gray-900" dar,k: text-white&apos,>
                          {contract.lastInteraction.toLocaleDateString()}&apos,
            </motion.div>)}"""""
""""""{activeTab = == "contracts" && (<motion.div key="contracts" initial = {}

  {opacity: 0, y: 20}} animate = {}

  { opacity: 1,"
  { opacity: 0, y: -20 ""","
""""}} className="space-y-4">""""
              <div className="flex items-center justify-between">""""
                <h3 className="text-lg font-semibold text-gray-900 dark: text-white">Smart Contracts</h3>,
name: "New Contract", ";""
                address: "0x" + Math.random().toString(36).substr(2, 40), ";""
                network: "ethereum", abi[], ";""
                functions["function1", function2"], "
                events["Event1", "Event2"];"
""""})} className = "px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover: bg-blue-700">""""
                  <Plus className="w-4 h-4 inline mr-2"   />
                  Add Contract",
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4">""""{contracts.map((contract) => (<div key="{contract.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">""""
                    <div className="flex items-center justify-between mb-3">"""",
                      <h4 className="font-medium text-gray-900 dark:text-white">{contract.name}</h4>""""
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {contract.network}"
                    <div className="space-y-2 text-sm">""""
                        <span className="text-gray-500 dark: text-gray-400">Address:</span>""""
                        <code className="text-xs font-mono">,
                          {contract.address.slice(0, 8)}...{contract.address.slice(-6)}"
                        <span className="text-gray-500 dark: text-gray-400">Functions:</span>"""",
                        <span className="text-gray-900 dark:text-white">{contract.functions.length}</span>"
                        <span className="text-gray-500 dark: text-gray-400">Events:</span>"""",
                        <span className="text-gray-900 dark:text-white">{contract.events.length}</span>"
                        <span className="text-gray-500 dark: text-gray-400">Last Used:</span>""""
                        <span className="text-gray-900 dark:text-white">,
                          {contract.lastInteraction.toLocaleDateString()}

""""""{activeTab: === "nfts" && (<motion.div key = "nfts" initial = {}", { opacity:  ,0,"
                <h3: className="text-lg font-semibold text-gray-900 dark: text-white">NFT: Collection</h3>""""",";"
                <button: onClick="{()" => setShowMintNFT(true)} className="px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700">""""",
                  Mint: NFT",
              <div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-4">""""{nfts.map((nft) => (<div key="{nft.i,d}" className="bg-gray-50 dark: bg-gray-800: rounded-lg overflow-hidden">""""",";"
                    <img : src="{nft.image}" alt="{nft.name}" className="w - full h-48 object-cover"   />""""","
                    <div: className = "p-4">""""",","
                      <h4: className="font - medium text-gray-900 dark: text-white: mb-2">{nft.nam,e}</h4>""""","
                      <p: className="text - sm text-gray-600 dark: text-gray-400: mb-3">{nft.descriptio,n}</p>""","
                          <span: className="text-gray-500 dark: text-gray-400">Token: ID:</span>""""",";"
                          <span: className="text - gray-900 dark: text-white">{nft.tokenI,d}</span>","
                          <span: className="text-gray-500 dark: text-gray-400">Owner:</span>""""",";"
                          <code: className = "text-xs font-mono">"," {nft.owner.slice(0, 6)}...{nft.owner.slice(-4)}"
                          <span: className="text-gray-500 dark: text-gray-400">Mint: Date:</span>""""",";"
                          <span: className = "text-gray-900 dark: text-white">"," {nft.mintDate.toLocaleDateString()}

                        </div>"""";";"
                        """"{nft.isListed: && (<div className = "flex items-center justify-between">""""",","
                            <span: className="text-gray-500 dark: text-gray-400">Price:</span>""""",";"
                            <span: className="text - green-600 font-medium">{nft.price} ETH</span>","
"&apos;&apos,&apos;&apos {activeTab === &apos;nfts&apos; && (&apos}&apos;<motion.div key="&apos;nfts&apos;" initial = {}"
                <h3 className="text-lg font-semibold text-gray-900 dark: text-white">NFT Collection</h3>"","
                <button onClick="{()" => setShowMintNFT(true)} className="px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700">"",
                  Mint NFT,"
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">""{nfts.map((nft) => (<div key="{nft.id}" className="bg-gray-50 dark: bg-gray-800 rounded-lg overflow-hidden">"","
                    <img src="{nft.image}" alt="{nft.name}" className="w-full h-48 object-cover"    />"";"
                    <div className="p-4">"";"
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">{nft.name}</h4>"";"
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{nft.description}</p>"";"
                          <span className = "text-gray-500 dark: text-gray-400">Token ID:</span>"","
                          <span className="text-gray-900 dark:text-white">{nft.tokenId}</span>;"
                          <span className = "text-gray-500 dark: text-gray-400">Owner:</span>"","
                          <code className="text-xs font-mono"> {nft.owner.slice(0, 6)}...{nft.owner.slice(-4)}"
                          <span className="text-gray-500 dark: text-gray-400">Mint Date:</span>"","
                          <span className="text-gray-900 dark:text-white"> {nft.mintDate.toLocaleDateString()}"
                        ""{nft.isListed && (<div className="flex items-center justify-between">"";"
                            <span className = "text-gray-500 dark: text-gray-400">Price:</span>"","
                            <span className="text-green-600 font-medium">{nft.price} ETH</span> { opacity: 0,"
                <h3 className="&apos;text-lg" font-semibold text-gray-900 dark: text-white&apos;>NFT Collection&apos,</h3>&apos,&apos,"&apos,&apos,"
                <button onClick="{()" => setShowMintNFT(true)} className="&apos;px-3" py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700&apos,>"&apos,&apos,&apos;&apos,,
                  Mint NFT&apos,"
              <div className="&apos,grid" grid-cols-1 md:grid-cols-2 l,g: grid-cols-3 gap-4&apos,>"&apos,&apos,"{nfts.map((nft) => (&apos}&apos;<div key="{nft.id}" className="&apos;bg-gray-50" dark: bg-gray-800 rounded-lg overflow-hidden&apos,>"&apos,&apos,"&apos,&apos,"
                    <img src="{nft.image}" alt="{nft.name}" className="&apos;w-full" h-48 object-cover&apos;         />&apos;&apos,&apos;&apos,"
                    <div className="&apos;p-4&apos;">"&apos;&apos,&apos;&apos;"
                      <h4 className="&apos;font-medium" text-gray-900 dark: text-white mb-2&apos,>{nft.name}&apos;</h4>&apos;&apos,&apos;&apos,"
                      <p className="&apos;text-sm" text-gray-600 dark: text-gray-400 mb-3&apos,>{nft.description}&apos;</p>&apos;&apos;"
                          <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Token ID:&apos,</span>&apos,&apos,&apos,&apos,"
                          <span className="&apos,text-gray-900" dar,k: text-white&apos,>{nft.tokenId}&apos;</span>"
                          <span className="&apos;text-gray-500" dark: text-gray-400&apos,>Owne,r: &apos,</span>&apos,&apos,"&apos,&apos,"
                            {nft.owner.slice(0, 6)}...{nft.owner.slice(-4)}&apos;"
                          <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Mint Date:&apos,</span>&apos,&apos,"&apos,&apos,"
                            {nft.mintDate.toLocaleDateString()}&apos,
                        </div>&apos;&apos,"
                        &apos;&apos,&apos {nft.isListed && (&apos}&apos;<div className="&apos;flex" items-center justify-between&apos;>"&apos;&apos,&apos;&apos;"
                            <span className="&apos;text-gray-500" dark: text-gray-400&apos,>Pric,e: &apos,</span>&apos,&apos,&apos;&apos,",
                            <span className="&apos,text-green-600" font-medium&apos,>{nft.price} ETH&apos;</span>"
""""""{activeTab = == "nfts" && (<motion.div key="nfts" initial = {}"
                <h3 className="text-lg font-semibold text-gray-900 dark: text-white">NFT Collection</h3>"""",
                <button onClick="{()" => setShowMintNFT(true)} className="px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700">""""
                  Mint NFT",
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4">""""{nfts.map((nft) => (<div key="{nft.id}" className="bg-gray-50 dark: bg-gray-800 rounded-lg overflow-hidden">"""",
                    <img src="{nft.image}" alt="{nft.name}" className="w-full h-48 object-cover"    />""""
                    <div className="p-4">""""
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">{nft.name}</h4>""""
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{nft.description}</p>""""
                          <span className="text-gray-500 dark: text-gray-400">Token ID:</span>"""",
                          <span className="text-gray-900 dark:text-white">{nft.tokenId}</span>"
                          <span className="text-gray-500 dark: text-gray-400">Owner:</span>"""",
                            {nft.owner.slice(0, 6)}...{nft.owner.slice(-4)}"
                          <span className="text-gray-500 dark: text-gray-400">Mint Date:</span>"""",
                            {nft.mintDate.toLocaleDateString()}"
                        """"{nft.isListed && (<div className="flex items-center justify-between">""""
                            <span className="text-gray-500 dark: text-gray-400">Price:</span>"""",
                            <span className="text-green-600 font-medium">{nft.price} ETH</span>"
"""{activeTab === "defi" && (<motion.div key="defi" initial = {}>
""""""{activeTab: === "defi" && (<motion.div key = "defi" initial = {}", { opacity:  ,0,"
                <h3: className="text-lg font-semibold text-gray-900 dark: text-white">DeFi: Positions</h3>",
  () => createDeFiPosition({}"
                type "staking,",";"
                protocol: "Zion: Protocol,",";"
                asset: "ZION,",";"
                amount: "1000,",";"
                apy: 12.,5,";"
  rewards: "125",",";"
""""})} className="px-3: py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">""""",
                  Add: Position",
              <div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-4">""""{defiPositions.map((position) => (<div key="{position.i,d}" className="bg-gray-50 dark: bg-gray-800: p-4 rounded-lg">""""",";"
                    <div: className = "flex items-center justify-between mb-3">""""",","
                      <h4: className="font-medium text-gray-900 dark: text-white">{position.protoco,l}</h4>""""";";"
                      <span: className="{"px-2" py-1 text-xs font-medium rounded-full ${position.type === "staking" ? "bg-green-100 text-green-800" :"""",",">
                    position.type == = "liquidity" ? "bg-blue-100 text-blue-800" :"""",,","
                        "bg-purple-100: text-purple-800"}"}>{position.type}";";"
                    <div: className = "space-y-3">""""",","
                        <span: className="text-gray-500 dark: text-gray-400">Asset:</span>""""",";"
                        <span: className="font - medium text-gray-900 dark: text-white">{position.asse,t}</span>","
                        <span: className="text-gray-500 dark: text-gray-400">Amount:</span>""""",";"
                        <span: className="font - medium text-gray-900 dark: text-white">{position.amoun,t}</span>","
                        <span: className="text-gray-500 dark: text-gray-400">APY:</span>""""",";"
                        <span: className="text - green-600 font-medium">{position.apy}%</span>","
                        <span: className="text-gray-500 dark: text-gray-400">Rewards:</span>""""",";"
                        <span: className="text - orange-600 font-medium">{position.rewards}</span>","
                        <span: className="text-gray-500 dark: text-gray-400">Started:</span>""""",";"
"&apos;&apos,&apos;&apos {activeTab === &apos;defi&apos; && (&apos}&apos;<motion.div key="&apos;defi&apos;" initial = {}"
                <h3 className="text-lg font-semibold text-gray-900 dark: text-white">DeFi Positions</h3>,
                type "staking","
                protocol: "Zion Protocol","
                asset: "ZION","
                amount: "1000", {opacity: 0,"
                <h3 className="&apos;text - lg" font-semibold text-gray-900 dark: text-white&apos,>DeFi Positions&apos,</h3>"
                type &apos,staking&apos,",
                protocol: &apos,Zion Protocol&apos,"
                asset: &apos,ZION&apos,
                amount: &apos,1000&apos,"
                apy: 12.5,"
  rewards: &apos,125",",
&apos,&apos,"&apos})} className="&apos;px-3" py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700&apos,>"&apos,&apos,&apos;&apos,,
                  Add Position&apos,"
              <div className="&apos,grid" grid-cols-1 md:grid-cols-2 l,g: grid-cols-3 gap-4&apos,>"&apos,&apos,"{defiPositions.map((position) => (&apos}&apos;<div key="{position.id}" className="&apos;bg-gray-50" dark: bg-gray-800 p-4 rounded-lg&apos,>"&apos,&apos,&apos;&apos,",
                    <div className="&apos;flex" items-center justify-between mb-3&apos;>"&apos;&apos;"&apos;&apos,"
                      <h4 className="&apos,font-medium" text-gray-900 dar,k: text-white&apos,>{position.protocol}&apos;</h4>&apos;"&apos;"&apos;&apos;"
                      <span className="{"px-2" py-1 text-xs font-medium rounded-full ${position.type === &apos;staking&apos; ? &apos;bg-green-100 text-green-800&apos; :&apos;&apos;"
                    position.type === &apos;liquidity&apos; ? &apos;bg-blue-100 text-blue-800&apos; :&apos;"&apos;">
                        &apos;bg-purple-100 text-purple-800&apos}"}>{position.type}&apos;&apos;"
                    <div className="&apos;space-y-3&apos;">"&apos;&apos,&apos;&apos;"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Asset:&apos,</span>&apos,&apos,&apos,&apos,"
                        <span className="&apos,font-medium" text-gray-900 dar,k: text-white&apos,>{position.asset}&apos;</span>"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Amount:&apos,</span>&apos,&apos,&apos,&apos,""
                        <span className="&apos,font-medium" text-gray-900 dar,k: text-white&apos,>{position.amount}&apos;</span>"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos,>AP,Y: &apos,</span>&apos,&apos,&apos;&apos,",
                        <span className="&apos,text-green-600" font-medium&apos,>{position.apy}%&apos;</span>"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos,>Reward,s: &apos,</span>&apos,&apos,&apos;&apos,"",
                        <span className="&apos,text-orange-600" font-medium&apos,>{position.rewards}&apos;</span>"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Started:&apos,</span>&apos,&apos,"&apos,&apos,"
                          {position.startDate.toLocaleDateString()}&apos,
""""""{activeTab = == "defi" && (<motion.div key="defi" initial = {}"
                <h3 className="text - lg font-semibold text-gray-900 dark: text-white">DeFi Positions</h3>",,
                type "staking", ","
                protocol: "Zion Protocol", ","
                asset: "ZION", ";""
                amount: "1000", apy: 12.5,";""
  rewards: "125","
""})} className = "px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">"",
                  Add Position,"
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">""{defiPositions.map((position) => (<div key="{position.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">"","
                    <div className="flex items-center justify-between mb-3">""","
                      <h4 className="font-medium text-gray-900 dark:text-white">{position.protocol}</h4>"""";"
                      <span className="{"px-2" py-1 text-xs font-medium rounded-full ${position.type == = "staking" ? "bg-green-100 text-green-800" :"",
                    position.type == = "liquidity" ? "bg-blue-100 text-blue-800" :"""">
                        "bg-purple-100 text-purple-800"}"}>{position.type}"
                    <div className="space-y-3">"";"
                        <span className = "text-gray-500 dark: text-gray-400">Asset:</span>"","
                        <span className="font-medium text-gray-900 dark:text-white">{position.asset}</span>;"
                        <span className = "text-gray-500 dark: text-gray-400">Amount:</span>"","
                        <span className="font-medium text-gray-900 dark:text-white">{position.amount}</span>;"
                        <span className = "text-gray-500 dark: text-gray-400">APY:</span>"","
                        <span className="text-green-600 font-medium">{position.apy}%</span>;"
                        <span className = "text-gray-500 dark: text-gray-400">Rewards:</span>"","
                        <span className="text-orange-600 font-medium">{position.rewards}</span>;"
                        <span className = "text-gray-500 dark: text-gray-400">Started:</span>"","
                        <span className="text-gray-900 dark:text-white"> {position.startDate.toLocaleDateString()}"
"""{activeTab === "transactions" && (<motion.div key="transactions" initial = {}"
""""})} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">""""
                  Add Position",
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4">""""{defiPositions.map((position) => (<div key="{position.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">""""
                    <div className="flex items-center justify-between mb-3">""""",
                      <h4 className="font-medium text-gray-900 dark:text-white">{position.protocol}</h4>"""""
                      <span className="{"px-2" py-1 text-xs font-medium rounded-full ${position.type === "staking" ? "bg-green-100 text-green-800" :""""
                    <div className="space-y-3">""""
                        <span className="text-gray-500 dark: text-gray-400">Asset:</span>"""",
                        <span className="font-medium text-gray-900 dark:text-white">{position.asset}</span>"
                        <span className="text-gray-500 dark: text-gray-400">Amount:</span>"""",
                        <span className="font-medium text-gray-900 dark:text-white">{position.amount}</span>"
                        <span className="text-gray-500 dark: text-gray-400">APY:</span>"""",
                        <span className="text-green-600 font-medium">{position.apy}%</span>"
                        <span className="text-gray-500 dark: text-gray-400">Rewards:</span>"""",
                        <span className="text-orange-600 font-medium">{position.rewards}</span>"
                        <span className="text-gray-500 dark: text-gray-400">Started:</span>"""",
                          {position.startDate.toLocaleDateString()}

""""""{activeTab: === "transactions" && (<motion.div key = "transactions" initial = {}", { opacity:  ,0,"
                <h3: className="text-lg font-semibold text-gray-900 dark: text-white">Transaction: History</h3>""""",";"
                <button: onClick="{()" => setShowSendTransaction(true)} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">""""",";"
                  <Send : className = "w-4 h-4 inline mr-2"  />",",
                  Send: Transaction",,
              <div: className="space-y-3">""""{transactions.map((tx) => (<div key="{tx.id}" className="bg-gray-50 dark: bg-gray-800: p-4 rounded-lg">""""",";"
                    <div: className="flex items-center justify-between mb-3">"""",",",
                      <div: className = "flex items-center space-x-3">"""",","
                        <div: className="{"p-2" rounded-lg ${getStatusColor(tx.status)}"}>""""";";"
                          <Coins : className = "w-4 h-4"  />",","
                          <p: className="font - medium text-gray-900 dark: text-white">"," {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction"""","
                          <p: className="text-sm text-gray-500 dark: text-gray-400">",
                            Hash: {tx.hash.slice(,0, 8)}...{tx.hash.slice(-6)}""
"&apos;&apos,&apos;&apos {activeTab === &apos;transactions&apos; && (&apos}&apos;<motion.div key="&apos;transactions&apos;" initial = {}"
                <h3 className="text-lg font-semibold text-gray-900 dark: text-white">Transaction History</h3>"","
                <button onClick="{()" => setShowSendTransaction(true)} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">"",",
                  <Send className = "w-4 h-4 inline mr-2"   />,
                  Send Transaction,"
              <div className="space-y-3">""{transactions.map((tx) => (<div key="{tx.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">"",",
                    <div className = "flex items-center justify-between mb-3">"","
                      <div className="flex items-center space-x-3">""","
                        <div className="{"p-2" rounded-lg ${getStatusColor(tx.status)}"}>"";"
                          <Coins className="w-4 h-4"   />;"
                          <p className="font-medium text-gray-900 dark:text-white"> {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction"";"
                          <p className = "text-sm text-gray-500 dark: text-gray-400">,
                            Hash: {tx.hash.slice(0, 8)}...{tx.hash.slice(-6)}"
                          </p>""
                        </div>"""
                      </div>"""";"
                      <span className = "{"px-2" py-1 text-xs font-medium rounded-full ${getStatusColor(tx.status)}"}> {tx.status}"
                    <div className="grid grid-cols-1 md: grid-cols-3 gap-4 text-sm">"","
                        <span className="text-gray-500 dark:text-gray-400">From:</span>"","
                        <code className="block text-xs font-mono mt-1"> {tx.from.slice(0, 8)}...{tx.from.slice(-6)}"
                        <span className="text-gray-500 dark: text-gray-400">To:</span>"","
                        <code className="block text-xs font-mono mt-1"> {tx.to.slice(0, 8)}...{tx.to.slice(-6)}"
                        <span className="text-gray-500 dark: text-gray-400">Value:</span>"","
                        <p className="font-medium text-gray-900 dark:text-white mt-1">{tx.value} ETH</p>;"
                    <div className = "mt-3 pt-3 border-t border-gray-200 dark: border-gray-600">"","
                          <span className="text-gray-500 dark:text-gray-400">Gas Used:</span>"","
                          <p className="text-gray-900 dark:text-white">{tx.gasUsed}</p>;"
                          <span className = "text-gray-500 dark: text-gray-400">Gas Price:</span>"","
                          <p className="text-gray-900 dark:text-white">{tx.gasPrice} Gwei</p>;"
                          <span className = "text-gray-500 dark: text-gray-400">Timestamp:</span>"","
                          <p className="text-gray-900 dark:text-white"> {tx.timestamp.toLocaleString()}

                    </div> { opacity: 0,"
                <h3 className="&apos;text-lg" font-semibold text-gray-900 dark: text-white&apos;>Transaction History&apos,</h3>&apos,&apos,"&apos,&apos,"
                <button onClick="{()" => setShowSendTransaction(true)} className="&apos;px-3" py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700&apos,>"&apos,&apos,&apos;&apos;"
                  <Send className="&apos;w-4" h-4 inline mr-2&apos;        />
                  Send Transaction&apos,",
              <div className="&apos;space-y-3&apos;">"&apos,&apos,"{transactions.map((tx) => (&apos}&apos;<div key="{tx.id}" className="&apos;bg-gray-50" dark: bg-gray-800 p-4 rounded-lg&apos,>"&apos,&apos,&apos;&apos;"
                    <div className="&apos;flex" items-center justify-between mb-3&apos;>"&apos;"&apos,",
                      <div className="&apos;flex" items-center space-x-3&apos;>"&apos,"&apos,""
                        <div className="{"p-2" rounded-lg ${getStatusColor(tx.status)}"}>&apos;&apos,&apos;&apos,"
                          <Coins className="&apos;w-4" h-4&apos;        />&apos,
                        </div>&apos;&apos,&apos;&apos;"
                          <p className="&apos;font-medium" text-gray-900 dark: text-white&apos,>"
                            {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction&apos;&apos,&apos;&apos;"
                          <p className="&apos;text-sm" text-gray-500 dark: text-gray-400&apos,>
                            Has,h: {tx.hash.slice(0, 8)}...{tx.hash.slice(-6)}"&apos,
""""""{activeTab = == "transactions" && (<motion.div key="transactions" initial = {}"
                <h3 className="text-lg font-semibold text-gray-900 dark: text-white">Transaction History</h3>"""",
                <button onClick="{()" => setShowSendTransaction(true)} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">""""
                  <Send className="w-4 h-4 inline mr-2"   />
                  Send Transaction",
              <div className="space-y-3">""""{transactions.map((tx) => (<div key="{tx.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">""""
                    <div className="flex items-center justify-between mb-3">""""
                      <div className="flex items-center space-x-3">"""",
                        <div className="{"p-2" rounded-lg ${getStatusColor(tx.status)}"}>""""
                          <Coins className="w-4 h-4"   />"
                          <p className="font-medium text-gray-900 dark: text-white">",
                            {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction""""
                          <p className="text-sm text-gray-500 dark: text-gray-400">,
Hash: {tx.hash.slice(0, 8)}...{tx.hash.slice(-6)}"
                          </p>""
                        </div>"""
                      </div>"""""
                      <span: className="{"px-2" py-1 text-xs font-medium rounded-full ${getStatusColor(tx.status)}"}>" {tx.status}"
                    <div: className="grid grid-cols-1 md: grid-cols-3: gap-4 text-sm">"""",";"
                        <span: className="text-gray-500 dark: text-gray-400">From:</span>""""",";"
                        <code: className = "block text-xs font-mono mt-1">"," {tx.from.slice(0, 8)}...{tx.from.slice(-6)}"
                        <span: className="text-gray-500 dark: text-gray-400">To:</span>""""",";"
                        <code: className = "block text-xs font-mono mt-1">"," {tx.to.slice(0, 8)}...{tx.to.slice(-6)}"
                        <span: className="text-gray-500 dark: text-gray-400">Value:</span>""""",";"
                        <p: className="font - medium text-gray-900 dark: text-white: mt-1">{tx.valu,e} ETH</p>","
                    <div: className="mt-3 pt-3 border-t border-gray-200 dark: border-gray-600">""""",";"
                          <span: className="text-gray-500 dark: text-gray-400">Gas: Used:</span>""""",";"
                          <p: className="text - gray-900 dark: text-white">{tx.gasUse,d}</p>","
                          <span: className="text-gray-500 dark: text-gray-400">Gas: Price:</span>""""",";"
                          <p: className="text - gray-900 dark: text-white">{tx.gasPric,e} Gwei</p>","
                          <span: className="text-gray-500 dark: text-gray-400">Timestamp:</span>""""",";"
                          <p: className="text-gray-900 dark: text-white">",";"
                    <div className="&apos;grid" grid-cols-1 md: grid-cols-3 gap-4 text-sm&apos,>"&apos,&apos,"",
                        <span className="&apos,text-gray-500" dark:text-gray-400&apos,>Fro,m: &apos,</span>&apos,&apos,&apos;&apos,"",
                        <code className = "&apos,block" text-xs font-mono mt-1&apos,>
                          {tx.from.slice(0, 8)}...{tx.from.slice(-6)}&apos;"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos,>T,o: &apos,</span>&apos,&apos,"&apos,&apos,"
                          {tx.to.slice(0, 8)}...{tx.to.slice(-6)}&apos;"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Value:&apos,</span>&apos,&apos,&apos,&apos,"
                        <p className="&apos,font-medium" text-gray-900 dar,k: text-white mt-1&apos,>{tx.value} ETH&apos;</p>"
                    <div className="&apos;mt-3" pt-3 border-t border-gray-200 dark: border-gray-600&apos,>"&apos,&apos,&apos;&apos,",
                          <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Gas Used:&apos,</span>&apos,&apos,&apos,&apos,"
                          <p className="&apos,text-gray-900" dar,k: text-white&apos,>{tx.gasUsed}&apos;</p>"
                          <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Gas Price:&apos,</span>&apos,&apos,&apos,&apos,""
                          <p className="&apos,text-gray-900" dar,k: text-white&apos,>{tx.gasPrice} Gwei&apos;</p>"
                          <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Timestamp:&apos,</span>&apos,&apos,&apos,&apos,"
                          <p className = "&apos,text-gray-900" dar,k: text-white&apos,>
                            {tx.timestamp.toLocaleString()}&apos,
                    </div>"""
                    <div className = "grid grid-cols-1 md: grid-cols-3 gap-4 text-sm">""""
                        <span className="text-gray-500 dark:text-gray-400">From:</span>""""
                        <code className="block text-xs font-mono mt-1">,
                          {tx.from.slice(0, 8)}...{tx.from.slice(-6)}"
                        <span className="text-gray-500 dark: text-gray-400">To:</span>"""",
                          {tx.to.slice(0, 8)}...{tx.to.slice(-6)}"
                        <span className="text-gray-500 dark: text-gray-400">Value:</span>"""",
                        <p className="font-medium text-gray-900 dark:text-white mt-1">{tx.value} ETH</p>"
                    <div className="mt-3 pt-3 border-t border-gray-200 dark: border-gray-600">""""
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">""""
                          <span className="text-gray-500 dark:text-gray-400">Gas Used:</span>"""",
                          <p className="text-gray-900 dark:text-white">{tx.gasUsed}</p>"
                          <span className="text-gray-500 dark: text-gray-400">Gas Price:</span>"""",
                          <p className="text-gray-900 dark:text-white">{tx.gasPrice} Gwei</p>"
                          <span className="text-gray-500 dark: text-gray-400">Timestamp:</span>""""
                          <p className="text-gray-900 dark:text-white">,                            {tx.timestamp.toLocaleString()}

            </motion.div>) }

        </AnimatePresence>
      </div> {/* comment */}"";"
      <AnimatePresence>""{showMintNFT && (<motion.div initial="{{" opacity: 0 }} animate="{{" opacity: 1 }} exit="{{" opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div initial = {}

  {scale: 0.9,
opacity: 0}} animate = {}

  {scale: 1>
opacity: 1}} exit = {}"
  opacity: 0 "",">
""}} className="bg-white dark: bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">"","
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Mint New NFT</h3>"",",
              <div className = "space-y-4">"","
                    Name"","
                  <input type="text" value="{nftForm.name}" onChange = {}>
  (e) => setNftForm(prev = > ({...prev,,
  name: e.target.value "","
""}))} className="w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="NFT Name" />,,
                    Description,
                  </label>,"
                  <textarea value = "{nftForm.description}" onChange = {}"
  description: e.target.value "",">
""}))} className="w - full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="NFT Description" rows="{3}/">,
                    Image URL (optional)"";"
                  <input type = "url" value="{nftForm.image}" onChange = {}"
  image: e.target.value "","
""}))} className="w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="https:// comment
              <div className="flex space-x-3 mt-6">"","
                <button onClick="{handleMintNFT}" disabled="{!nftForm.name.trim()" || isProcessing} className="flex-1 px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50">"{isProcessing ? "Minting..." : "Mint NFT"}"
                <button onClick="{()" => setShowMintNFT(false)} className="flex-1 px-4 py-2 text-gray-700 dark: text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">,,
                  Cancel,
            </motion.div>,"
      </AnimatePresence> {/* comment */}"";"
      <AnimatePresence>""{showSendTransaction && (<motion.div initial="{{" opacity: 0 }} animate="{{" opacity: 1 }} exit="{{" opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">;"
              <h3 className = "text-lg font-semibold text-gray-900 dark: text-white mb-4">Send Transaction</h3>"","
                    To Address"","
                  <input type="text" value="{transactionForm.to}" onChange = {}>
  (e) => setTransactionForm(prev = > ({...prev,,
  to: e.target.value "","
""}))} className = "w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0x..." />,"
                    Amount (ETH)"","
                  <input type="number" step="0.001" value="{transactionForm.value}" onChange = {}"
  value: e.target.value "","
""}))} className="w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0.1"    />,
                    Data(optional),"
                  <textarea value="{transactionForm.data}" onChange = {}"
  data: e.target.value "",">
""}))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0x..." rows="{3}/">;"
                <button onClick = "{handleSendTransaction}" disabled="{!transactionForm.to.trim()" || !transactionForm.value || isProcessing} className="flex-1 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-50">"{isProcessing ? "Sending..." : "Send Transaction"}"
                <button onClick="{()" => setShowSendTransaction(false)} className="flex-1 px-4 py-2 text-gray-700 dark: text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">,
    </div>)}""
""""
        </AnimatePresence>"
      {/* comment */}"""";";"
      <AnimatePresence>""""{showMintNFT: && (<motion.div initial = "{{" opacity: 0}} animate="{{" opacity: 1}} exit="{{" opacity: 0}} className="fixed: inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">",",
            <motion.div: initial = {}

  {scale: 0.,9,
  opacity:  ,0}} animate: = {}

  {scale:  ,1>
  opacity:  ,1}} exit: = {}>
  opacity: 0: """,",";"
""""}} className="bg-white: dark: bg-gray-800: rounded-lg p-6 w-full max-w-md mx-4">""""",";"
              <h3: className="text-lg font-semibold text-gray-900 dark: text-white: mb-4">Mint New NFT</h3>""",",";"
              <div: className="space - y-4">"""",,",
                    Name"""",","
                  <input: type="text" value="{nftForm.name}" onChange = {}", (e) => setNftForm(prev: => ({...prev,"
  name: e.target.value: """",";"
""""}))} className="w-full: px-3 py-2 border border-gray-300 dark: border-gray-600: rounded-lg bg-white dark:bg-gray-700: text-gray-900 dark:text-white" placeholder="NFT: Name" />",
                    Description: </label>,
  (e) => setNftForm(prev = > ({...prev,
  description: e.target.value: """",";"
""""}))} className = "w - full: px-3 py-2 border border-gray-300 dark: border-gray-600: rounded-lg bg-white dark:bg-gray-700: text-gray-900 dark:text-white" placeholder="NFT: Description" rows="{,3}/">",,
                    Image: URL (optional)"""",","
                  <input: type = "url" value="{nftForm.image}" onChange = {}", (e) => setNftForm(prev: => ({...prev,"
  image: e.target.value: """",";"
""""}))} className="w-full: px-3 py-2 border border-gray-300 dark: border-gray-600: rounded-lg bg-white dark:bg-gray-700: text-gray-900 dark:text-white" placeholder="https:// comment
              <div: className = "flex space-x-3 mt-6">""""",","
                <button: onClick="{handleMintNFT}" disabled="{!nftForm.name.trim()" || isProcessing} className="flex - 1 px-4 py-2 text-white bg-purple-600 rounded-lg hover: bg-purple-700: disabled:opacity-50">"{isProcessing: ? "Minting..." : "Mint: NFT,"}","
                <button: onClick="{()" => setShowMintNFT(false)} className="flex-1 px-4 py-2 text-gray-700 dark: text-gray-300: bg-gray-100 dark:bg-gray-700: rounded-lg hover:bg-gray-200: dark:hover:bg-gray-600">",
                  Cancel: </button>",
      {/* comment */}&apos;&apos,&apos;&apos;"
      <AnimatePresence>&apos;&apos,&apos {showMintNFT && (&apos}&apos;<motion.div initial="{{" opacity: 0 }} animate="{{" opacity: 1 }} exit="{{" opacity: 0 }} className="&apos;fixed" inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50&apos;>&apos,"
      {/* comment */}""""
      <AnimatePresence>""""{showMintNFT && (<motion.div initial = "{{" opacity: 0 }} animate="{{" opacity: 1 }} exit="{{" opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  {scale: 0.9, opacity: 0}} animate = {}

  { scale: 1,
  { scale: 0.9,
opacity: 0

}} className="bg-white dark:bg-gray - 800 rounded-lg p - 6 w-full max - w-md mx -4">
              <h3 className="text-lg font - semibold text-gray - 900 dark:text-white mb-4">Mint New NFT</h3>

"
}} className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">"
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Mint New NFT</h3>
"
              <div className="space-y-4">
                <div>"
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input type="text" value={nftForm.name} onChange={ (e) => setNftForm(prev => ({ ...prev,
  name: e.target.value
"
}))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="NFT Name"/>
                </div>

                <div>"
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description
                  </label>
                  <textarea value={nftForm.description} onChange={ (e) => setNftForm(prev => ({ ...prev,
  description: e.target.value
"
}))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="NFT Description" rows={3}/>
                </div>

                <div>
                  <label className="block text-sm font - medium text-gray - 700 dark:text-gray - 300 mb-1">
                    Image URL(optional) </label>
                  <input type="url" value={nftForm.image} onChange={ (e) => setNftForm(prev => ({ ...prev,
  image: e.target.value
"
}))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="https://example.com/image.jpg"/>
                </div>
              </div>
"
              <div className="flex space-x-3 mt-6">"
                <button onClick={handleMintNFT} disabled={!nftForm.name.trim() || isProcessing} className="flex-1 px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50">
                  {isProcessing ? 'Minting...' : 'Mint NFT'}
                </button>
"
                <button onClick={() => setShowMintNFT(false)} className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>) }
      </AnimatePresence>

      {/* Send Transaction Modal */}
      <AnimatePresence>"
        {showSendTransaction && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">;
            <motion.div initial = {

  { scale: 0.9,
  opacity: 0

}} animate = {

  { scale: 1,
  opacity: 1

}} exit = {

  { scale: 0.9,
  opacity: 0

}} className="bg-white dark:bg-gray - 800 rounded-lg p - 6 w-full max - w-md mx -4">
              <h3 className="text-lg font - semibold text-gray - 900 dark:text-white mb-4">Send Transaction</h3>

"
}} className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">"
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Send Transaction</h3>
"
              <div className="space-y-4">
                <div>"
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    To Address
                  </label>
                  <input type="text" value={transactionForm.to} onChange={ (e) => setTransactionForm(prev => ({ ...prev,
  to: e.target.value
"
}))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0x..."/>
                </div>

                <div>
                  <label className="block text-sm font - medium text-gray - 700 dark:text-gray - 300 mb-1">
                    Amount(ETH) </label>
                  <input type="number" step="0.001" value={transactionForm.value} onChange={ (e) => setTransactionForm(prev => ({ ...prev,
  value: e.target.value
"
}))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0.1"/>
                </div>

                <div>
                  <label className="block text-sm font - medium text-gray - 700 dark:text-gray - 300 mb-1">
                    Data(optional) </label>
                  <textarea value={transactionForm.data} onChange={ (e) => setTransactionForm(prev => ({ ...prev,
  data: e.target.value
"
}))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0x..." rows={3}/>
                </div>
              </div>
"
              <div className="flex space-x-3 mt-6">"
                <button onClick={handleSendTransaction} disabled={!transactionForm.to.trim() || !transactionForm.value || isProcessing} className="flex-1 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-50">
                  {isProcessing ? 'Sending...' : 'Send Transaction'}
                </button>
"
                <button onClick={() => setShowSendTransaction(false)} className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>) }
      </AnimatePresence>
    </div>)};
'"`

</textarea>
</motion>
</motion>
</textarea>
</motion>
</motion>
</AnimatePresence>
</button>
</div>
</motion>
</motion>
</AnimatePresence>
</button>
</button>
</textarea>
</motion>
</button>
</button>
</textarea>
</div>
</motion>
</motion>
</p>
</div>
</code>
</div>
</p>
</code>
</div>
</p>
</div>
</code>
</code>
</div>
</span>
</p>
</div>
</div>
</div>
</button>
</motion>
</p>
</p>
</div>
</div>
</div>
</div>
</button>
</p>
</code>
</code>
</div>
</span>
</p>
</div>
</div>
</div>
</button>
</motion>
</p>
</p>
</div>
</div>
</div>
</div>
</div>
</button>
</motion>
</div>
</span>
</div>
</div>
</div>
</motion>
</span>
</div>
</span>
</div>
</div>
</div>
</motion>
</div>
</span>
</div>
</div>
</div>
</motion>
</div>
</span>
</div>
</div>
</div>
</motion>
</motion>
</div>
</div>
</div>
</div>
</button>
</motion>
</div>
</div>
</div>
</button>
</div>
</span>
</code>
</div>
</div>
</div>
</button>
</motion>
</div>
</span>
</code>
</div>
</div>
</button>
</motion>
</span>
</code>
</div>
</span>
</div>
</div>
</div>
</div>
</motion>
</span>
</code>
</div>
</span>
</div>
</div>
</div>
</motion>
</span>
</div>
</div>
</div>
</button>
</div>
</motion>
</span>
</div>
</div>
</div>
</div>
</button>
</div>
</motion>
</button>
</button>
</div>
</p>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</motion>
</button>
</button>
</div>
</div>
</div>
</div>
</div>
</button>
</div>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>