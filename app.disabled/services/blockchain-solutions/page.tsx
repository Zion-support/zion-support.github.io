export const metadata = {
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Comprehensive blockchain solutions for modern businesses.',
  keywords: 'blockchain-solutions, services, business, technology'
}
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Blockchain Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive blockchain solutions for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored blockchain-solutions solutions designed for your specific business requirements.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Professional solutions</li>
              <li>• 24/7 support</li>
              <li>• Scalable architecture</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your blockchain-solutions solutions run smoothly.
            </p>

export default function BlockchainSolutionsPage() { 
  return ( 
    <div className="animate-fade-in">
      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Blockchain Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlockchainServiceCard
            title="DeFi Protocol Development"
            description="Decentralized finance protocols with yield farming, liquidity pools, and automated market makers"
            features={["Smart contract development", "Yield farming mechanisms", "Liquidity pool management", "Governance tokens", "Security auditing"]}
            price="$25k–$100k"
            icon="🏦"
          />
          <BlockchainServiceCard
            title="NFT Marketplace & Collections"
            description="Complete NFT platforms with minting, trading, and marketplace functionality"
            features={["NFT minting contracts", "Marketplace development", "Royalty management", "Metadata optimization", "IPFS integration"]}
            price="$15k–$60k"
            icon="🎨"
          />
          <BlockchainServiceCard
            title="Web3 Applications"
            description="Decentralized applications with wallet integration and blockchain connectivity"
            features={["Wallet integration", "Smart contract interaction", "Token management", "User authentication", "Transaction handling"]}
            price="$20k–$80k"
            icon="🌐"
          />
          <BlockchainServiceCard
            title="Smart Contract Auditing"
            description="Comprehensive security auditing and optimization of smart contracts"
            features={["Security vulnerability analysis", "Gas optimization", "Code review", "Test coverage", "Compliance checking"]}
            price="$5k–$25k"
            icon="🔍"
          />
          <BlockchainServiceCard
            title="Token Development & ICO"
            description="Custom token creation and initial coin offering management"
            features={["ERC-20/ERC-721 tokens", "Tokenomics design", "ICO platform", "Vesting mechanisms", "Distribution management"]}
            price="$10k–$40k"
            icon="🪙"
          />
          <BlockchainServiceCard
            title="Cross-Chain Solutions"
            description="Interoperability solutions for multi-blockchain connectivity"
            features={["Bridge development", "Cross-chain swaps", "Multi-chain wallets", "Interoperability protocols", "Asset migration"]}
            price="$30k–$120k"
            icon="🔗"
          />
          <BlockchainServiceCard
            title="DAO Development & Governance"
            description="Decentralized autonomous organization platforms with governance mechanisms"
            features={["Governance token design", "Voting mechanisms", "Treasury management", "Proposal systems", "Member management", "Transparency tools"]}
            price="$20k–$80k"
            icon="🗳️"
          />
          <BlockchainServiceCard
            title="Metaverse & Virtual Worlds"
            description="Blockchain-powered virtual worlds and metaverse platforms"
            features={["Virtual land NFTs", "Avatar systems", "In-world economies", "Social features", "Gaming mechanics", "VR/AR integration"]}
            price="$40k–$150k"
            icon="🌍"
          />
          <BlockchainServiceCard
            title="Blockchain Gaming & Play-to-Earn"
            description="Gaming platforms with blockchain integration and tokenized rewards"
            features={["Game development", "NFT integration", "Token economics", "Marketplace features", "Guild systems", "Tournament management"]}
            price="$30k–$120k"
            icon="🎮"
          />
          <BlockchainServiceCard
            title="Supply Chain & Traceability"
            description="Blockchain solutions for supply chain transparency and product traceability"
            features={["Product tracking", "Quality verification", "Authenticity proof", "Compliance reporting", "Stakeholder management", "IoT integration"]}
            price="$25k–$90k"
            icon="📦"
          />
          <BlockchainServiceCard
            title="Identity & KYC Solutions"
            description="Decentralized identity management and KYC/AML compliance systems"
            features={["Digital identity", "KYC verification", "Privacy protection", "Compliance reporting", "Cross-platform integration", "Biometric authentication"]}
            price="$20k–$70k"
            icon="🆔"
          />
          <BlockchainServiceCard
            title="Real Estate Tokenization"
            description="Property tokenization and fractional ownership platforms"
            features={["Property tokenization", "Fractional ownership", "Rental income distribution", "Property management", "Legal compliance", "Marketplace integration"]}
            price="$35k–$100k"
            icon="🏠"
          />
          <BlockchainServiceCard
            title="Carbon Credit & ESG Trading"
            description="Blockchain platforms for carbon credit trading and ESG compliance"
            features={["Carbon credit tokenization", "ESG reporting", "Trading mechanisms", "Verification systems", "Compliance tracking", "Impact measurement"]}
            price="$30k–$80k"
            icon="🌱"
          />
          <BlockchainServiceCard
            title="Insurance & Risk Management"
            description="Decentralized insurance protocols and risk management solutions"
            features={["Smart insurance contracts", "Risk assessment", "Claims processing", "Payout automation", "Reinsurance protocols", "Parametric insurance"]}
            price="$25k–$90k"
            icon="🛡️"
          />
          <BlockchainServiceCard
            title="Healthcare Data Management"
            description="Secure healthcare data sharing and patient record management"
            features={["Patient data privacy", "Interoperability", "Consent management", "Data sharing protocols", "Compliance frameworks", "AI integration"]}
            price="$40k–$120k"
            icon="🏥"
          />
          <BlockchainServiceCard
            title="Energy Trading & Grid Management"
            description="Peer-to-peer energy trading and smart grid management systems"
            features={["Energy tokenization", "P2P trading", "Smart contracts", "Grid optimization", "Renewable energy tracking", "Billing automation"]}
            price="$35k–$100k"
            icon="⚡"
          />
          <BlockchainServiceCard
            title="Voting & Governance Systems"
            description="Secure and transparent voting systems for organizations and governments"
            features={["Secure voting", "Identity verification", "Result transparency", "Audit trails", "Multi-level governance", "Mobile integration"]}
            price="$20k–$60k"
            icon="🗳️"
          />
          <BlockchainServiceCard
            title="Intellectual Property & Patents"
            description="IP protection and patent management on blockchain"
            features={["IP registration", "Patent tracking", "Royalty distribution", "Dispute resolution", "Licensing management", "Prior art verification"]}
            price="$25k–$70k"
            icon="💡"
          />
          <BlockchainServiceCard
            title="Gaming Assets & Marketplaces"
            description="Cross-game asset trading and gaming NFT marketplaces"
            features={["Asset interoperability", "Cross-game trading", "Rarity systems", "Marketplace features", "Guild management", "Tournament rewards"]}
            price="$20k–$80k"
            icon="🎯"
          />
          <BlockchainServiceCard
            title="Decentralized Storage Solutions"
            description="Distributed storage networks and file sharing protocols"
            features={["Distributed storage", "File encryption", "Access control", "Redundancy management", "Cost optimization", "API integration"]}
            price="$15k–$50k"
            icon="💾"
          />
          <BlockchainServiceCard
            title="Prediction Markets & Oracles"
            description="Decentralized prediction markets and oracle data feeds"
            features={["Market creation", "Oracle integration", "Liquidity management", "Dispute resolution", "Data verification", "API services"]}
            price="$25k–$80k"
            icon="🔮"
          />
          <BlockchainServiceCard
            title="Social Media & Content Platforms"
            description="Decentralized social media and content monetization platforms"
            features={["Content monetization", "Creator rewards", "Community governance", "Censorship resistance", "Data ownership", "Token economics"]}
            price="$30k–$100k"
            icon="📱"
          />
          <BlockchainServiceCard
            title="Lending & Borrowing Protocols"
            description="Decentralized lending platforms with automated risk management"
            features={["Collateral management", "Interest rate algorithms", "Liquidation mechanisms", "Risk assessment", "Governance tokens", "Multi-asset support"]}
            price="$25k–$90k"
            icon="💰"
          />
          <BlockchainServiceCard
            title="Stablecoin Development"
            description="Custom stablecoin creation with price stability mechanisms"
            features={["Price stability", "Collateral management", "Governance systems", "Audit compliance", "Multi-chain deployment", "Integration APIs"]}
            price="$20k–$60k"
            icon="💎"
          />
          <BlockchainServiceCard
            title="Blockchain Analytics & Monitoring"
            description="Comprehensive blockchain data analysis and monitoring tools"
            features={["Transaction analysis", "Address tracking", "Risk scoring", "Compliance monitoring", "Real-time alerts", "Custom dashboards"]}
            price="$15k–$50k"
            icon="📊"
          />
        </div>

        {/* Core Blockchain Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Blockchain Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlockchainServiceCard 
              title="Smart Contract Development" 
              description="Secure, audited smart contracts for various blockchain platforms"
              features={["Solidity development", "Security audits", "Gas optimization", "Multi-chain support"]}
              price="Starting at $15k"
              icon="📜"
            />
            <BlockchainServiceCard 
              title="DeFi Protocols" 
              description="Decentralized finance applications and yield farming platforms"
              features={["DEX development", "Lending protocols", "Yield farming", "Liquidity pools"]}
              price="Starting at $25k"
              icon="💰"
            />
            <BlockchainServiceCard 
              title="NFT Marketplaces" 
              description="Complete NFT platforms with minting, trading, and auction features"
              features={["NFT minting", "Marketplace UI", "Royalty system", "Metadata management"]}
              price="Starting at $20k"
              icon="🎨"
            />
            <BlockchainServiceCard 
              title="Web3 Applications" 
              description="Decentralized applications with wallet integration and blockchain connectivity"
              features={["Wallet integration", "MetaMask support", "IPFS storage", "User authentication"]}
              price="Starting at $18k"
              icon="🌐"
            />
            <BlockchainServiceCard 
              title="Token Development" 
              description="Custom token creation and tokenomics design"
              features={["ERC-20/ERC-721", "Tokenomics design", "Vesting contracts", "Multi-signature wallets"]}
              price="Starting at $12k"
              icon="🪙"
            />
            <BlockchainServiceCard 
              title="Blockchain Integration" 
              description="Integrate blockchain functionality into existing applications"
              features={["API development", "Node management", "Transaction handling", "Event monitoring"]}
              price="Starting at $10k"
              icon="🔗"
            />

          </div>
        </div>
      </div>
    </div>
  );
}
