export const metadata = {
  title: 'Blockchain Services | Zion Tech Group',
  description: 'Decentralized applications, smart contracts, and blockchain solutions.',
};

function ServiceCard({ title, description, price, features }: { 
  title: string; 
  description: string; 
  price: string; 
  features: string[] 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-blue-600 font-semibold mb-4">{price}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600">• {feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default function BlockchainPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blockchain Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Decentralized applications, smart contracts, and blockchain solutions 
            that leverage the power of distributed ledger technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
            price="Starting at $15k"
            features={["ERC-20/721/1155", "Custom tokenomics", "Staking mechanisms", "Governance features"]}
          />
        </div>

        <div className="text-center">
          <a 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}