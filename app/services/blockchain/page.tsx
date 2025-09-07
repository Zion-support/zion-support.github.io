import React from 'react';
<<<<<<< HEAD
import { Metadata } from 'next';

export const metadata: Metadata = { 
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Comprehensive blockchain development services including smart contracts, DeFi protocols, NFT platforms, and Web3 applications. Enterprise-grade blockchain solutions.'
=======
import Link from 'next/link';

export const metadata = {
  title: 'Blockchain Services | Zion Tech Group',
  description: 'Comprehensive blockchain development services including smart contracts, DeFi protocols, NFT platforms, and enterprise blockchain solutions.',
  keywords: 'blockchain development, smart contracts, DeFi, NFT, Web3, cryptocurrency, enterprise blockchain, dApp development'
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-12 h-12 flex items-center justify-center bg-purple-600 text-white rounded-full text-xl font-bold mb-4">
      {step}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ContactSection: React.FC = () => (
  <section className="py-12 bg-purple-600 rounded-lg text-white text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Build on the Blockchain?</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Let's discuss your blockchain project and how we can help you create innovative Web3 solutions.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="mailto:kleber@ziontechgroup.com?subject=Blockchain Services Inquiry"
        className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Get Free Consultation
      </a>
      <a
        href="tel:+13024640950"
        className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
      >
        Call +1 302 464 0950
      </a>
    </div>
    <div className="mt-8 text-sm">
      <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      <p>📧 kleber@ziontechgroup.com</p>
    </div>
  </section>
);

export default function BlockchainPage() {
  return (
<<<<<<< HEAD
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Blockchain Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
          Enterprise-grade blockchain development services including smart contracts, DeFi protocols, 
          NFT platforms, and Web3 applications. We help businesses leverage blockchain technology for innovation and growth.
        </p>
      </section>

      {/* Blockchain Solutions Showcase */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Blockchain Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlockchainSolution
            title="Smart Contract Development"
            description="Secure and audited smart contracts for various blockchain platforms including Ethereum, Polygon, and BSC"
            features={["Solidity development", "Security auditing", "Gas optimization", "Multi-chain deployment", "Upgradeable contracts"]}
            pricing="$15k-100k"
            icon="📜"
          />
          <BlockchainSolution
            title="DeFi Protocols"
            description="Decentralized finance applications including DEXs, lending platforms, and yield farming protocols"
            features={["AMM development", "Liquidity pools", "Yield farming", "Governance tokens", "Flash loan protection"]}
            pricing="$50k-300k"
            icon="💰"
          />
          <BlockchainSolution
            title="NFT Platforms"
            description="Complete NFT marketplace and collection platforms with minting, trading, and royalty features"
            features={["NFT minting", "Marketplace functionality", "Royalty management", "Metadata storage", "IPFS integration"]}
            pricing="$25k-150k"
            icon="🎨"
          />
          <BlockchainSolution
            title="Web3 Applications"
            description="Decentralized applications (dApps) with wallet integration and blockchain connectivity"
            features={["Wallet integration", "MetaMask support", "Transaction handling", "User authentication", "Frontend development"]}
            pricing="$20k-120k"
            icon="🌐"
          />
          <BlockchainSolution
            title="Token Development"
            description="Custom token creation including ERC-20, ERC-721, ERC-1155, and governance tokens"
            features={["Token standards", "Minting mechanisms", "Burn functions", "Governance features", "Multi-signature wallets"]}
            pricing="$10k-60k"
            icon="🪙"
          />
          <BlockchainSolution
            title="Blockchain Integration"
            description="Integrate blockchain functionality into existing applications and systems"
            features={["API development", "Web3 integration", "Event monitoring", "Transaction management", "Data synchronization"]}
            pricing="$15k-80k"
            icon="🔗"
          />
        </div>
      </section>

      {/* Core Blockchain Services */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Core Blockchain Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlockchainServiceItem 
            title="Smart Contract Development" 
            details={[
              "Solidity, Rust, and Vyper development",
              "Security auditing and testing",
              "Gas optimization techniques",
              "Upgradeable contract patterns",
              "Multi-signature wallet integration",
              "Oracle integration (Chainlink, Band)"
            ]} 
          />
          <BlockchainServiceItem 
            title="DeFi & DApp Development" 
            details={[
              "Decentralized exchange (DEX) development",
              "Lending and borrowing protocols",
              "Yield farming and staking mechanisms",
              "Liquidity pool management",
              "Governance token implementation",
              "Flash loan protection"
            ]} 
          />
          <BlockchainServiceItem 
            title="Blockchain Infrastructure" 
            details={[
              "Node setup and maintenance",
              "Blockchain explorer development",
              "API and SDK creation",
              "Cross-chain bridge development",
              "Layer 2 solutions (Polygon, Arbitrum)",
              "IPFS and decentralized storage"
            ]} 
          />
        </div>
      </section>

      {/* Blockchain Platforms */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Supported Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PlatformCard
            title="Ethereum"
            description="Smart contracts and dApps on the world's leading blockchain"
            icon="🔷"
          />
          <PlatformCard
            title="Polygon"
            description="Layer 2 scaling solution for faster and cheaper transactions"
            icon="🟣"
          />
          <PlatformCard
            title="Binance Smart Chain"
            description="High-performance blockchain with low transaction fees"
            icon="🟡"
          />
          <PlatformCard
            title="Solana"
            description="High-speed blockchain for DeFi and NFT applications"
            icon="🟢"
          />
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlockchainPricingPlan 
            name="Smart Contract Audit" 
            price="$5k–$15k" 
            duration="1–2 weeks"
            features={[
              "Code review and analysis",
              "Security vulnerability assessment",
              "Gas optimization recommendations",
              "Detailed audit report",
              "Remediation guidance"
            ]}
            popular={false}
          />
          <BlockchainPricingPlan 
            name="dApp Development" 
            price="$25k–$100k" 
            duration="6–12 weeks"
            features={[
              "Full dApp development",
              "Smart contract implementation",
              "Frontend development",
              "Testing and deployment",
              "3 months support"
            ]}
            popular={true}
          />
          <BlockchainPricingPlan 
            name="Enterprise Blockchain" 
            price="$100k+" 
            duration="Custom timeline"
            features={[
              "Custom blockchain solution",
              "Private network setup",
              "Integration with existing systems",
              "Security and compliance",
              "Ongoing maintenance"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}

function BlockchainSolution({ title, description, features, pricing, icon }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-sm text-gray-600 space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-bold text-blue-600">{pricing}</div>
    </div>
  );
}

function BlockchainServiceItem({ title, details }: { 
  title: string; 
  details: string[]; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PlatformCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function BlockchainPricingPlan({ name, price, duration, features, popular }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white border-2 rounded-xl p-6 ${popular ? 'border-blue-500 relative' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold text-center block transition-colors ${
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

function ContactCTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center mt-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Build on the Blockchain?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your blockchain project and create a secure, scalable solution. 
        Our team has delivered 50+ successful blockchain projects across various industries.
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
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
=======
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Blockchain Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Build the future of decentralized applications with our comprehensive blockchain development services.
          From smart contracts to DeFi protocols, we help you create secure, scalable Web3 solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Blockchain Services Inquiry"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Get Blockchain Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Blockchain Development Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a proven methodology to deliver secure, scalable, and innovative blockchain solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep
            step={1}
            title="Strategy & Architecture"
            description="Defining your blockchain strategy, selecting the right platform, and designing the architecture."
          />
          <ProcessStep
            step={2}
            title="Development & Testing"
            description="Building smart contracts, dApps, and conducting comprehensive security testing."
          />
          <ProcessStep
            step={3}
            title="Deployment & Maintenance"
            description="Deploying to mainnet, monitoring performance, and providing ongoing support."
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Blockchain Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive blockchain solutions to power your Web3 initiatives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Smart Contract Development"
            description="Secure, audited smart contracts for DeFi, NFTs, and enterprise applications."
            icon="📜"
          />
          <FeatureCard
            title="DeFi Protocol Development"
            description="Building decentralized finance protocols including DEXs, lending platforms, and yield farming."
            icon="💰"
          />
          <FeatureCard
            title="NFT Platform Development"
            description="Creating NFT marketplaces, minting platforms, and digital collectible ecosystems."
            icon="🎨"
          />
          <FeatureCard
            title="dApp Development"
            description="Full-stack decentralized applications with intuitive user interfaces."
            icon="🌐"
          />
          <FeatureCard
            title="Enterprise Blockchain"
            description="Private blockchain solutions for enterprise use cases and supply chain management."
            icon="🏢"
          />
          <FeatureCard
            title="Blockchain Consulting"
            description="Strategic guidance on blockchain adoption, tokenomics, and regulatory compliance."
            icon="💡"
          />
        </div>
      </section>

      <ContactSection />
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
    </div>
  );
}