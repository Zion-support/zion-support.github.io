import React from "react";

export const metadata = {
  title: "Blockchain Solutions | Zion Tech Group",
  description:
    "DeFi, NFTs, smart contracts, and Web3 applications with enterprise-grade security. Build the future of finance with our blockchain expertise.",
  keywords:
    "blockchain development, DeFi, NFTs, smart contracts, Web3, cryptocurrency, dApps, tokenization",
};

interface BlockchainServiceProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  benefits: string[];
  icon: string;
  href: string;
}

function BlockchainService({
  title,
  description,
  price,
  features,
  benefits,
  icon,
  href,
}: BlockchainServiceProps) {
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
        <h4 className="text-sm font-semibold text-gray-900 mb-2">
          Key Features:
        </h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
        <div className="flex flex-wrap gap-1">
          {benefits.map((benefit, index) => (
            <span
              key={index}
              className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded"
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function BlockchainSolutionsPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Blockchain Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          DeFi, NFTs, smart contracts, and Web3 applications with
          enterprise-grade security. Build the future of finance with our
          blockchain expertise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Blockchain Solutions Consultation"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Blockchain Services Grid */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Blockchain Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive blockchain solutions for modern businesses and
            innovative projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlockchainService
            title="DeFi Protocol Development"
            description="Decentralized finance protocols including DEXs, lending platforms, and yield farming solutions"
            price="Starting at $50,000"
            features={[
              "DEX development",
              "Lending protocols",
              "Yield farming",
              "Liquidity pools",
              "Governance tokens",
            ]}
            benefits={[
              "Decentralization",
              "Transparency",
              "Accessibility",
              "Innovation",
            ]}
            icon="🏦"
            href="/services/defi-protocols"
          />
          <BlockchainService
            title="NFT Marketplace"
            description="Complete NFT marketplace development with minting, trading, and auction capabilities"
            price="Starting at $25,000"
            features={[
              "NFT minting",
              "Marketplace trading",
              "Auction system",
              "Royalty management",
              "Multi-chain support",
            ]}
            benefits={[
              "Digital Ownership",
              "Creator Economy",
              "New Revenue",
              "Community Building",
            ]}
            icon="🎨"
            href="/services/nft-marketplace"
          />
          <BlockchainService
            title="Smart Contract Development"
            description="Secure smart contracts for various use cases including tokens, governance, and automation"
            price="Starting at $15,000"
            features={[
              "Token contracts",
              "Governance systems",
              "Automation protocols",
              "Security audits",
              "Gas optimization",
            ]}
            benefits={["Automation", "Trust", "Efficiency", "Cost Reduction"]}
            icon="📜"
            href="/services/smart-contracts"
          />
          <BlockchainService
            title="Web3 Applications"
            description="Decentralized applications (dApps) with wallet integration and blockchain connectivity"
            price="Starting at $30,000"
            features={[
              "Wallet integration",
              "Blockchain connectivity",
              "User authentication",
              "Transaction management",
              "Real-time updates",
            ]}
            benefits={[
              "User Control",
              "Interoperability",
              "Innovation",
              "Future-Proof",
            ]}
            icon="🌐"
            href="/services/web3-applications"
          />
          <BlockchainService
            title="Token Development"
            description="Custom token creation including utility tokens, security tokens, and stablecoins"
            price="Starting at $10,000"
            features={[
              "ERC-20/721/1155 tokens",
              "Security tokens",
              "Stablecoins",
              "Token economics",
              "Compliance features",
            ]}
            benefits={["Digital Assets", "Liquidity", "Utility", "Investment"]}
            icon="🪙"
            href="/services/token-development"
          />
          <BlockchainService
            title="Blockchain Consulting"
            description="Strategic blockchain consulting and implementation guidance for enterprise adoption"
            price="Starting at $5,000"
            features={[
              "Strategy development",
              "Technology selection",
              "Implementation planning",
              "Compliance guidance",
              "Training & support",
            ]}
            benefits={[
              "Expert Guidance",
              "Risk Mitigation",
              "Cost Optimization",
              "Innovation",
            ]}
            icon="💼"
            href="/services/blockchain-consulting"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build the Future with Blockchain?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how blockchain technology can transform your business
          and create new opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Blockchain Project Inquiry"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Blockchain Journey
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>Email: kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}
