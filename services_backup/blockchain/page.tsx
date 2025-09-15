import Link from 'next/link';

export const metadata = { 
title: 'Blockchain Services | Zion Tech Group',
  description: 'Comprehensive blockchain development services including smart contracts, DeFi protocols, NFT platforms, and enterprise blockchain solutions.',
  keywords: 'blockchain development, smart contracts, DeFi, NFT, Web3, cryptocurrency, enterprise blockchain, dApp development'
};

export default function BlockchainPage() {
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
    <div className="animate-fade-in">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Blockchain Solutions</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl">
          Build the future with blockchain technology. From smart contracts to DeFi applications, 
          we create secure, scalable blockchain solutions that drive innovation and value.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <BlockchainServiceCard
            title="Smart Contract Development"
            description="Secure, audited smart contracts for DeFi, NFTs, and enterprise applications"
            features={["Solidity development", "Security auditing", "Gas optimization", "Testing frameworks"]}
            price="$15k-$50k"
            timeline="3-8 weeks"
            icon="📜"
          />
          <BlockchainServiceCard
            title="DeFi Platform Development"
            description="Decentralized finance applications including DEXs, lending protocols, and yield farming"
            features={["DEX development", "Liquidity pools", "Yield farming", "Governance tokens"]}
            price="$30k-$100k"
            timeline="6-16 weeks"
            icon="🏦"
          />
          <BlockchainServiceCard
            title="NFT Marketplace & Platform"
            description="Complete NFT marketplace with minting, trading, and royalty management"
            features={["NFT minting", "Marketplace UI", "Royalty system", "Metadata management"]}
            price="$25k-$80k"
            timeline="4-12 weeks"
            icon="🎨"
          />
          <BlockchainServiceCard
            title="Enterprise Blockchain Solutions"
            description="Private blockchain networks and enterprise-grade distributed ledger solutions"
            features={["Private networks", "Consensus mechanisms", "Enterprise integration", "Compliance"]}
            price="$40k-$150k"
            timeline="8-20 weeks"
            icon="🏢"
          />
          <BlockchainServiceCard
            title="Web3 Integration & APIs"
            description="Connect traditional applications with blockchain networks and Web3 protocols"
            features={["Web3 APIs", "Wallet integration", "Transaction management", "Event monitoring"]}
            price="$12k-$35k"
            timeline="2-6 weeks"
            icon="🔗"
          />
          <BlockchainServiceCard
            title="Token Economics & Launch"
            description="Token design, launch strategy, and community building for successful token projects"
            features={["Tokenomics design", "Launch strategy", "Community building", "Marketing support"]}
            price="$20k-$60k"
            timeline="4-10 weeks"
            icon="🚀"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Blockchain Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BlockchainTechCard
            title="Ethereum Ecosystem"
            technologies={["Solidity", "Web3.js", "Ethers.js", "Hardhat", "Truffle"]}
            description="Leading smart contract platform"
          />
          <BlockchainTechCard
            title="Layer 2 Solutions"
            technologies={["Polygon", "Arbitrum", "Optimism", "zkSync", "StarkNet"]}
            description="Scalable blockchain solutions"
          />
          <BlockchainTechCard
            title="Alternative Chains"
            technologies={["Solana", "BSC", "Avalanche", "Cardano", "Polkadot"]}
            description="Multi-chain development"
          />
          <BlockchainTechCard
            title="Enterprise Solutions"
            technologies={["Hyperledger", "Quorum", "Corda", "Ethereum Enterprise"]}
            description="Enterprise blockchain platforms"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Blockchain Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UseCaseCard
            category="Financial Services"
            useCases={["Decentralized exchanges", "Lending protocols", "Stablecoins", "Cross-border payments"]}
            icon="💳"
          />
          <UseCaseCard
            category="Supply Chain"
            useCases={["Product tracking", "Authenticity verification", "Smart contracts", "Transparency"]}
            icon="📦"
          />
          <UseCaseCard
            category="Digital Identity"
            useCases={["Self-sovereign identity", "KYC/AML", "Credential verification", "Privacy protection"]}
            icon="🆔"
          />
          <UseCaseCard
            category="Gaming & NFTs"
            useCases={["Play-to-earn games", "NFT marketplaces", "Virtual worlds", "Digital collectibles"]}
            icon="🎮"
          />
          <UseCaseCard
            category="Real Estate"
            useCases={["Property tokenization", "Fractional ownership", "Smart contracts", "Automated transactions"]}
            icon="🏠"
          />
          <UseCaseCard
            category="Healthcare"
            useCases={["Medical records", "Drug traceability", "Clinical trials", "Data privacy"]}
            icon="🏥"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing & Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlockchainPricingCard
            name="Smart Contract Audit"
            price="$5k–$15k"
            duration="1–3 weeks"
            features={[
              "Code review",
              "Security analysis",
              "Gas optimization",
              "Test coverage",
              "Audit report"
            ]}
            recommended={false}
          />
          <BlockchainPricingCard
            name="DApp Development"
            price="$25k–$75k"
            duration="4–12 weeks"
            features={[
              "Smart contracts",
              "Frontend development",
              "Backend integration",
              "Testing & deployment",
              "Documentation"
            ]}
            recommended={true}
          />
          <BlockchainPricingCard
            name="Enterprise Blockchain"
            price="$50k+"
            duration="8+ weeks"
            features={[
              "Custom blockchain",
              "Enterprise integration",
              "Security & compliance",
              "Training & support",
              "Ongoing maintenance"
            ]}
            recommended={false}
          />
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Ready to Build on Blockchain?</h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Let's discuss your blockchain vision and create a solution that leverages the power of 
          decentralized technology to drive innovation and value.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors text-center"
          >
            Email Us
          </a>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            📍 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
}

function BlockchainTechCard({ title, technologies, description }: {
  title: string;
  technologies: string[];
  description: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

    </div>
  );
}

function UseCaseCard({ category, useCases, icon }: {
  category: string;
  useCases: string[];
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-3">{category}</h3>
      <ul className="space-y-2">
        {useCases.map((useCase, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-orange-500 mr-2">•</span> {useCase}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BlockchainPricingCard({ name, price, duration, features, recommended }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended: boolean;
}) {
  return (
    <div className={`border rounded-xl p-8 relative ${recommended ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-white'}`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-orange-600 mb-2">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
        recommended 
          ? 'bg-orange-600 text-white hover:bg-orange-700' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}>
        Get Started
      </button>
    </div>
  );
}