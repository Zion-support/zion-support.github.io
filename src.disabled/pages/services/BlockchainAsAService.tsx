
  Ethereum & EVM', description: 'Full Ethereum compatibility with smart contract deployment and DeFi integration., icon: Network, features: [
  Smart contracts,DeFi protocols,NFT standards,Layer 2 scaling'] }, { title: 'Polygon & Sidechains, description:;
  'High-performance sidechains with low fees and fast transaction processing.', icon: Zap, features: [
  Low transaction fees,Fast confirmations,EVM compatibility,Cross-chain bridges'] }, { title: 'Solana, description:;
  'High-throughput blockchain with sub-second finality and low costs.', icon: Activity, features: [
  High TPS,Low fees,Fast finality,Rust development'] }, { title: 'Custom Blockchains, description:;
  'Build custom blockchain networks tailored to your specific use case.', icon: Server, features: [
  Custom consensus,Tailored features,Private networks,Full control'] } ]  const useCases = [
  { title: 'Supply Chain Management, description:;
  'Transparent and immutable supply chain tracking with real-time visibility.', icon: Network, roi:,
  40% cost reduction' }, { title: 'Digital Identity, description:;
  'Self-sovereign identity solutions with privacy-preserving verification.', icon: Key, roi:,
  60% faster verification' }, { title: 'Asset Tokenization, description:;
  'Fractional ownership of real-world assets through blockchain tokens.', icon: Wallet, roi:,
  300% liquidity increase' }, { title: 'Cross-Border Payments, description:;
  'Fast and cost-effective international payments with blockchain technology.', icon: Globe, roi:,
  80% cost reduction' } ]  const integrations = [
  { name: 'Web3.js, description:',
  JavaScript library for Ethereum blockchain interaction' }, { name: 'Hardhat, description:',
  Development environment for Ethereum smart contracts' }, { name: 'Truffle, description:',
  Development framework for Ethereum dApps' }, { name: 'OpenZeppelin, description:',
  Library for secure smart contract development' }, { name: 'IPFS, description:',
  Decentralized storage for blockchain applications' }, { name: 'Chainlink, description:',
  Decentralized oracle network for smart contracts' } ]  const pricingTiers = [
  { name: 'Starter, price:',
  $299/month', description: 'Perfect for developers and small projects, features: [


  Professional' ?;
  'border-2 border-green-400 bg-gradient-to-br from-green-500/10 to-emerald-600/10 relative';: 'border-white/10 bg-white/5 }`}>' {tier.name ===,
  Professional' && ('' <div className='absolute -top-4 left-1/2 transform -translate-x-1/2>' <span className='bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold'>Most Popular</span> </div>' )} <h3 className='text-2xl font-bold mb-4'>{tier.name}</h3>'' <div className='text-4xl font-bold text-green-300 mb-6'>{tier.price}</div>'' <p className='text-slate-300 mb-6'>{tier.description}</p>'' <ul className='space-y-3 mb-8> {tier.features.map((feature, idx) => ('' <li key={idx} className='flex items-center gap-3>' <CheckCircle className='h-5 w-5 text-green-400 flex-shrink-0' />' <span className='text-slate-200'>{feature}</span> </li> ))} </ul> <Link to={tier.name ==='
  'Enterprise' ?;
  '/contact': '/contact} className={`w-full rounded-lg py-3 text-center font-semibold transition-all ${ tier.name ===,`
  Enterprise' ?;
  'border border-green-400 text-green-300 hover: bg-green-400 hover:text-white' :;



