export const metadata = { 
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Comprehensive blockchain development services including DeFi, NFTs, smart contracts, and Web3 applications.'
};

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
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
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

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
            features={["DEX integration", "Liquidity pools", "Yield farming", "Governance token"]}
          />
          <ServiceCard
            title="NFT Marketplace"
            description="Multi-chain NFT marketplace with minting, trading, and auction features"
            price="Starting at $35k"
            features={["Multi-chain support", "Royalty system", "Auction mechanism", "Creator tools"]}
          />
          <ServiceCard
            title="Smart Contract Audit"
            description="Comprehensive security audit and testing for smart contracts"
            price="Starting at $8k"
            features={["Code review", "Vulnerability assessment", "Gas optimization", "Test coverage"]}
          />
          <ServiceCard
            title="Token Development"
            description="Custom token creation with advanced features and tokenomics"
            price="Starting at $12k"
            features={["ERC-20/721/1155", "Tokenomics design", "Vesting contracts", "Multi-signature"]}
          />
          <ServiceCard
            title="DAO Platform"
            description="Decentralized autonomous organization with governance and voting"
            price="Starting at $25k"
            features={["Governance tokens", "Voting mechanisms", "Proposal system", "Treasury management"]}
          />
          <ServiceCard
            title="Cross-chain Bridge"
            description="Secure bridge for transferring assets between different blockchains"
            price="Starting at $40k"
            features={["Multi-chain support", "Secure transfers", "Liquidity pools", "Governance"]}
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Build on the Blockchain?</h2>
        <p className="text-xl mb-6 text-blue-100">
          Let our blockchain experts help you create secure, scalable, and innovative Web3 solutions.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Start Your Project
        </button>
      </div>
    </section>
  );
}