export const metadata = { 
<<<<<<< HEAD
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Comprehensive blockchain development services including DeFi, NFTs, smart contracts, and Web3 applications.'
=======
  title: 'Blockchain Services | Zion Tech Group',
  description: 'Comprehensive blockchain development services including smart contracts, DeFi protocols, NFT platforms, and enterprise blockchain solutions.',
  keywords: 'blockchain development, smart contracts, DeFi, NFT, Web3, cryptocurrency, enterprise blockchain, dApp development'
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
};

export default function BlockchainPage() {
  return (
<<<<<<< HEAD
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Blockchain Solutions</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Build the future of decentralized applications with our comprehensive blockchain development services. 
          From smart contracts to DeFi protocols, we deliver secure and scalable Web3 solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Item 
          title="Smart Contracts" 
          details={[
            "Solidity development",
            "Security auditing",
            "Gas optimization",
            "Multi-chain deployment",
            "Upgradeable contracts",
            "Testing & verification"
          ]} 
        />
        <Item 
          title="DeFi Protocols" 
          details={[
            "DEX development",
            "Yield farming",
            "Liquidity pools",
            "Token economics",
            "Governance systems",
            "Risk management"
          ]} 
        />
        <Item 
          title="Web3 Applications" 
          details={[
            "Wallet integration",
            "NFT marketplaces",
            "DAO platforms",
            "Cross-chain bridges",
            "Oracle integration",
            "User experience design"
          ]} 
        />
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Blockchain Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="DeFi Platform"
            description="Complete decentralized finance platform with trading, lending, and staking"
            price="Starting at $50k"
            features={["DEX integration", "Liquidity pools", "Yield farming", "Governance token"]
          />
          <ServiceCard
            title="NFT Marketplace"
            description="Multi-chain NFT marketplace with minting, trading, and auction features"
            price="Starting at $35k"
            features={["Multi-chain support", "Royalty system", "Auction mechanism", "Creator tools"]
          />
          <ServiceCard
            title="Smart Contract Audit"
            description="Comprehensive security audit and testing for smart contracts"
            price="Starting at $8k"
            features={["Code review", "Vulnerability assessment", "Gas optimization", "Test coverage"]
          />
          <ServiceCard
            title="Token Development"
            description="Custom token creation with advanced features and tokenomics"
            price="Starting at $12k"
            features={["ERC-20/721/1155", "Tokenomics design", "Vesting contracts", "Multi-signature"]
          />
          <ServiceCard
            title="DAO Platform"
            description="Decentralized autonomous organization platform with governance"
            price="Starting at $25k"
            features={["Proposal system", "Voting mechanism", "Treasury management", "Member management"]
          />
          <ServiceCard
            title="Cross-Chain Bridge"
            description="Secure bridge for transferring assets between different blockchains"
            price="Starting at $40k"
            features={["Multi-chain support", "Security protocols", "Liquidity pools", "Monitoring system"]
          />
        </div>
      </div>

      <Pricing />
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard({ title, description, price, features }: { 
  title: string; 
  description: string; 
  price: string; 
  features: string[] 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
=======
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

function BlockchainServiceCard({ title, description, features, price, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-2xl font-bold text-blue-600 mb-2">{price}</div>
        <div className="text-sm text-gray-500">Starting price</div>
      </div>
      <ul className="text-gray-600 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
    </div>
  );
}

<<<<<<< HEAD
function Pricing() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Blockchain Development Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Smart Contract" 
          price="$8k–$20k" 
          duration="2–4 weeks"
          features={[
            "Contract development",
            "Security testing",
            "Gas optimization",
            "Documentation",
            "Deployment support",
            "Basic audit"
          ]} 
        />
        <Plan 
          name="DApp Development" 
          price="$25k–$60k" 
          duration="6–12 weeks"
          features={[
            "Full-stack DApp",
            "Frontend development",
            "Backend integration",
            "Wallet connectivity",
            "Testing & deployment",
            "User documentation"
          ]} 
        />
        <Plan 
          name="DeFi Protocol" 
          price="$50k+" 
          duration="12+ weeks"
          features={[
            "Complex protocol design",
            "Security audit",
            "Tokenomics design",
            "Governance system",
            "Multi-chain support",
            "Ongoing maintenance"
          ]} 
        />
      </div>
      
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">
          Ready to build on the blockchain? Let's discuss your Web3 project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
=======
function BlockchainProcessStep({ step, title, description }: { 
  step: string; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function BlockchainTechStack({ title, technologies }: { 
  title: string; 
  technologies: string[]; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {tech}
          </span>
        ))}
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
      </div>
    </div>
  );
}

<<<<<<< HEAD
function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[] 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-sm text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            {feature}
          </li>
        ))}
      </ul>
=======
function BlockchainUseCase({ title, description, examples, icon }: { 
  title: string; 
  description: string; 
  examples: string[]; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {examples.map((example) => (
          <li key={example} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {example}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BlockchainBenefitCard({ title, description, icon }: { 
  title: string; 
  description: string; 
  icon: string; 
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Pricing() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blockchain Service Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Smart Contract" 
          price="$8k–$25k" 
          features={["2–4 weeks", "Contract development", "Security audit", "Testing", "Deployment"]} 
          popular={false}
        />
        <Plan 
          name="dApp Development" 
          price="$15k–$50k" 
          features={["6–12 weeks", "Full dApp", "Frontend + Backend", "Web3 integration", "User testing"]} 
          popular={true}
        />
        <Plan 
          name="DeFi Protocol" 
          price="$25k–$100k" 
          features={["12–24 weeks", "Complex protocol", "Tokenomics", "Governance", "Audit & launch"]} 
          popular={false}
        />
      </div>
    </section>
  );
}

function Plan({ name, price, features, popular }: { 
  name: string; 
  price: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <div className={`border rounded-xl p-8 relative ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-3">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function CTASection() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Build the Future with Blockchain?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your blockchain project and create a secure, scalable solution that leverages 
        the power of decentralized technology. Our team of blockchain experts is ready to help you innovate.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">
        <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
      </div>
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
    </div>
  );
}