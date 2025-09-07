import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Comprehensive blockchain development, DeFi solutions, NFT platforms, and Web3 integration for secure and decentralized applications.',
  keywords: 'blockchain solutions, DeFi development, NFT platforms, Web3 integration, smart contracts, decentralized applications'
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
    <h2 className="text-3xl font-bold mb-4">Ready to Build the Future of Web3?</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Let's discuss your blockchain project and how we can help you create innovative decentralized solutions.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="mailto:kleber@ziontechgroup.com?subject=Blockchain Solutions Inquiry"
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

export default function BlockchainSolutionsPage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Blockchain Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Unlock the power of decentralization with our expert blockchain development services.
          From secure smart contracts to innovative Web3 applications, we build the future of digital trust.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Blockchain Solutions Inquiry"
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
            title="Web3 Integration"
            description="Integrating Web3 features into existing applications and platforms."
            icon="🔗"
          />
        </div>
      </section>

      <ContactSection />
    </div>
  );
}