export const metadata = {
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Advanced blockchain solutions for secure transactions.',
  keywords: 'blockchain, services, business, technology'
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
            Advanced blockchain solutions for secure transactions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored blockchain solutions designed for your specific business requirements.
            </p>
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
              Round-the-clock support to ensure your blockchain solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  title: 'Blockchain Solutions - Zion Tech Group',
  description: 'Advanced blockchain solutions and services for modern businesses.',

};

export default function ServicePage() {
  return (
<div className="animate-fade-in">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Blockchain Services
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Build the future of decentralized applications with our comprehensive blockchain development services. 
          From smart contracts to DeFi protocols, we help you create secure, scalable Web3 solutions.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Blockchain Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlockchainServiceCard
            title="Smart Contract Development"
            description="Secure, audited smart contracts for various blockchain platforms"
            features={["Solidity development", "Security auditing", "Gas optimization", "Multi-chain support", "Upgradeable contracts"]}
            price="$8,000-25,000"
            icon="📜"
          />
          <BlockchainServiceCard
            title="DeFi Protocol Development"
            description="Decentralized finance protocols including DEXs, lending, and yield farming"
            features={["AMM protocols", "Lending platforms", "Yield farming", "Liquidity mining", "Governance tokens"]}
            price="$25,000-100,000"
            icon="💰"
          />
          <BlockchainServiceCard
            title="NFT Marketplace & Platform"
            description="Complete NFT ecosystems with minting, trading, and marketplace functionality"
            features={["NFT minting", "Marketplace development", "Royalty systems", "Metadata management", "IPFS integration"]}
            price="$15,000-50,000"
            icon="🎨"
          />
          <BlockchainServiceCard
            title="dApp Development"
            description="Decentralized applications with Web3 integration and user-friendly interfaces"
            features={["Frontend development", "Web3 integration", "Wallet connectivity", "User authentication", "Transaction management"]}
            price="$12,000-40,000"
            icon="🌐"
          />
          <BlockchainServiceCard
            title="Enterprise Blockchain"
            description="Private and consortium blockchain solutions for enterprise use cases"
            features={["Hyperledger Fabric", "Ethereum Enterprise", "Consortium setup", "Permission management", "Integration APIs"]}
            price="$20,000-75,000"
            icon="🏢"
          />
          <BlockchainServiceCard
            title="Token Development & ICO"
            description="Custom token creation and initial coin offering development"
            features={["ERC-20/721/1155 tokens", "ICO platform", "Tokenomics design", "Vesting contracts", "Compliance tools"]}
            price="$10,000-30,000"
            icon="🪙"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blockchain Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BlockchainProcessStep
            step="1"
            title="Concept & Design"
            description="Define tokenomics, architecture, and technical specifications"
          />
          <BlockchainProcessStep
            step="2"
            title="Smart Contract Development"
            description="Write, test, and optimize smart contracts for security and efficiency"
          />
          <BlockchainProcessStep
            step="3"
            title="Frontend & Integration"
            description="Build user interfaces and integrate with blockchain networks"
          />
          <BlockchainProcessStep
            step="4"
            title="Testing & Deployment"
            description="Comprehensive testing, auditing, and mainnet deployment"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blockchain Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlockchainTechStack
            title="Blockchain Platforms"
            technologies={["Ethereum", "Polygon", "Binance Smart Chain", "Solana", "Avalanche"]}
          />
          <BlockchainTechStack
            title="Development Tools"
            technologies={["Hardhat", "Truffle", "Remix", "OpenZeppelin", "Web3.js"]}
          />
          <BlockchainTechStack
            title="Frontend & Web3"
            technologies={["React", "Next.js", "Web3.js", "Ethers.js", "MetaMask"]}
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blockchain Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlockchainUseCase
            title="Supply Chain"
            description="Transparent and traceable supply chain management"
            examples={["Product tracking", "Authenticity verification", "Quality assurance", "Compliance reporting"]}
            icon="📦"
          />
          <BlockchainUseCase
            title="Digital Identity"
            description="Self-sovereign identity and credential management"
            examples={["KYC/AML compliance", "Credential verification", "Privacy protection", "Cross-platform identity"]}
            icon="🆔"
          />
          <BlockchainUseCase
            title="Gaming & Metaverse"
            description="Play-to-earn games and virtual world economies"
            examples={["Game assets", "Virtual land", "In-game currencies", "Player rewards"]}
            icon="🎮"
          />
          <BlockchainUseCase
            title="Real Estate"
            description="Property tokenization and fractional ownership"
            examples={["Property tokens", "Fractional ownership", "Rental income", "Property trading"]}
            icon="🏠"
          />
          <BlockchainUseCase
            title="Healthcare"
            description="Secure patient data and medical record management"
            examples={["Patient records", "Drug traceability", "Clinical trials", "Insurance claims"]}
            icon="🏥"
          />
          <BlockchainUseCase
            title="Finance"
            description="Decentralized financial services and products"
            examples={["Cross-border payments", "Microfinance", "Insurance", "Credit scoring"]}
            icon="💳"
          />
        </div>
      </section>

      <Pricing />
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Blockchain Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlockchainBenefitCard
            title="Security First"
            description="Comprehensive security audits and best practices for smart contracts"
            icon="🔒"
          />
          <BlockchainBenefitCard
            title="Multi-Chain Expertise"
            description="Experience across multiple blockchain platforms and networks"
            icon="⛓️"
          />
          <BlockchainBenefitCard
            title="Gas Optimization"
            description="Efficient smart contracts that minimize transaction costs"
            icon="⚡"
          />
          <BlockchainBenefitCard
            title="Regulatory Compliance"
            description="Understanding of regulatory requirements and compliance frameworks"
            icon="📋"
          />
          <BlockchainBenefitCard
            title="User Experience"
            description="Intuitive interfaces that make Web3 accessible to everyone"
            icon="👥"
          />
          <BlockchainBenefitCard
            title="Ongoing Support"
            description="Continuous maintenance and updates for your blockchain solutions"
            icon="🛠️"
          />
        </div>
      </section>

      <CTASection />
    </div>
  );
}

title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Comprehensive blockchain development services including smart contracts, DeFi applications, NFT platforms, and enterprise blockchain solutions.'

};

export default function BlockchainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Blockchain Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional page solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
              Get Started
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link href="/services" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors">
              View All Services
            </Link>

          </div>
        </div>
      </div>
    </div>
  );

}
