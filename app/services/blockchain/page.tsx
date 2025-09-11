export const metadata = { 
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Comprehensive blockchain development services including DeFi, NFTs, smart contracts, and Web3 applications.'
};

export default function BlockchainPage() {
  return (
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
    </div>
  );
}

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
      </div>
    </div>
  );
}

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
    </div>
  );
}