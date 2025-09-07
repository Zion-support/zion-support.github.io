import React from 'react';
import Link from 'next/link';

export const metadata = { 
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Comprehensive blockchain development services including DeFi, NFTs, smart contracts, and Web3 applications.'
};

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
}

function ServiceCard({ title, description, price, features }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-lg font-bold text-blue-600 mb-3">{price}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface ItemProps {
  title: string;
  details: string[];
}

function Item({ title, details }: ItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BlockchainPage() {
  return (
    <main className="min-h-screen bg-gray-50">
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
              description="Decentralized autonomous organization with governance and voting mechanisms"
              price="Starting at $25k"
              features={["Governance tokens", "Voting systems", "Treasury management", "Proposal mechanisms"]}
            />
            <ServiceCard
              title="Cross-Chain Bridge"
              description="Secure bridge for transferring assets between different blockchain networks"
              price="Starting at $40k"
              features={["Multi-chain support", "Secure transfers", "Liquidity pools", "Governance"]}
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Build on Blockchain?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your blockchain project and how we can help you build the future of Web3.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}