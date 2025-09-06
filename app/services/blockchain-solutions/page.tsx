import React from 'react';

export const metadata = {
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'DeFi, NFTs, smart contracts, and Web3 applications with enterprise-grade security. Build the future of finance with our blockchain expertise.',
  keywords: 'blockchain development, DeFi, NFTs, smart contracts, Web3, cryptocurrency, dApps, tokenization'
};

interface BlockchainServiceProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: string;
  href: string;
}

function BlockchainServiceCard({ title, description, features, price, icon, href }: BlockchainServiceProps) {
  return (
    <a
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4">{icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="text-lg font-bold text-blue-600">{price}</div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export default function BlockchainSolutionsPage() {
  const services = [
    {
      title: "DeFi Protocol Development",
      description: "Decentralized finance protocols with yield farming, liquidity pools, and automated market makers",
      features: [
        "Smart contract development",
        "Yield farming mechanisms", 
        "Liquidity pool management",
        "Governance tokens",
        "Security auditing"
      ],
      price: "$25k–$100k",
      icon: "🏦",
      href: "/contact"
    },
    {
      title: "NFT Marketplace",
      description: "Complete NFT marketplace solutions with minting, trading, and auction capabilities",
      features: [
        "NFT minting contracts",
        "Marketplace functionality",
        "Auction mechanisms",
        "Royalty management",
        "Metadata storage"
      ],
      price: "$15k–$50k",
      icon: "🎨",
      href: "/contact"
    },
    {
      title: "Smart Contract Development",
      description: "Custom smart contracts for various use cases with comprehensive testing and auditing",
      features: [
        "Custom contract logic",
        "Gas optimization",
        "Security testing",
        "Upgradeable contracts",
        "Documentation"
      ],
      price: "$10k–$40k",
      icon: "📜",
      href: "/contact"
    },
    {
      title: "Token Development",
      description: "ERC-20, ERC-721, and ERC-1155 token development with full ecosystem support",
      features: [
        "Token standards compliance",
        "Custom tokenomics",
        "Vesting mechanisms",
        "Multi-signature wallets",
        "Token distribution"
      ],
      price: "$5k–$20k",
      icon: "🪙",
      href: "/contact"
    },
    {
      title: "Web3 Integration",
      description: "Integrate Web3 functionality into existing applications and websites",
      features: [
        "Wallet integration",
        "MetaMask support",
        "Transaction handling",
        "Event listening",
        "Error handling"
      ],
      price: "$8k–$25k",
      icon: "🌐",
      href: "/contact"
    },
    {
      title: "Blockchain Consulting",
      description: "Strategic blockchain consulting and architecture design for enterprise solutions",
      features: [
        "Architecture design",
        "Technology selection",
        "Security assessment",
        "Implementation planning",
        "Team training"
      ],
      price: "$5k–$15k",
      icon: "💡",
      href: "/contact"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Blockchain Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DeFi, NFTs, smart contracts, and Web3 applications with enterprise-grade security. 
            Build the future of finance with our blockchain expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <BlockchainServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Build on Blockchain?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss your blockchain project and bring your vision to life
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}