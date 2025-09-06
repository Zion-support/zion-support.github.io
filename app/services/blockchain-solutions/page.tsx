import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'DeFi, NFTs, smart contracts, and Web3 applications with enterprise-grade security. Complete blockchain development from concept to deployment. Starting at $15,000/project.',
  keywords: 'blockchain development, DeFi, NFTs, smart contracts, Web3, cryptocurrency, decentralized applications'
};

export default function BlockchainSolutionsPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Blockchain Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Build the future with cutting-edge blockchain technology. From DeFi protocols to NFT marketplaces, we create secure, scalable, and innovative Web3 solutions that drive real business value.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Blockchain Solutions Consultation"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Blockchain Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive blockchain solutions covering all aspects of Web3 development and deployment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCategoryCard
            icon="🏦"
            title="DeFi Development"
            description="Decentralized finance protocols, DEXs, lending platforms, and yield farming solutions"
            services={[
              "DEX Development",
              "Lending Protocols",
              "Yield Farming",
              "Liquidity Pools",
              "Staking Mechanisms",
              "Governance Tokens"
            ]}
            pricing="From $25,000"
          />
          <ServiceCategoryCard
            icon="🎨"
            title="NFT Platforms"
            description="NFT marketplaces, minting platforms, and digital collectible ecosystems"
            services={[
              "NFT Marketplace",
              "Minting Platform",
              "Metadata Management",
              "Royalty Systems",
              "Auction Mechanisms",
              "Cross-chain NFTs"
            ]}
            pricing="From $15,000"
          />
          <ServiceCategoryCard
            icon="📜"
            title="Smart Contracts"
            description="Secure and audited smart contracts for various blockchain applications"
            services={[
              "Contract Development",
              "Security Auditing",
              "Gas Optimization",
              "Upgradeable Contracts",
              "Multi-signature Wallets",
              "Oracle Integration"
            ]}
            pricing="From $5,000"
          />
          <ServiceCategoryCard
            icon="🌐"
            title="Web3 Applications"
            description="Decentralized applications with user-friendly interfaces and blockchain integration"
            services={[
              "DApp Development",
              "Wallet Integration",
              "Frontend Development",
              "Backend Infrastructure",
              "API Development",
              "User Authentication"
            ]}
            pricing="From $20,000"
          />
          <ServiceCategoryCard
            icon="⛓️"
            title="Cross-Chain Solutions"
            description="Interoperability solutions connecting different blockchain networks"
            services={[
              "Bridge Development",
              "Cross-chain Swaps",
              "Multi-chain Wallets",
              "Interoperability Protocols",
              "Asset Migration",
              "Cross-chain NFTs"
            ]}
            pricing="From $30,000"
          />
          <ServiceCategoryCard
            icon="🔐"
            title="Security & Auditing"
            description="Comprehensive security audits and penetration testing for blockchain applications"
            services={[
              "Smart Contract Audits",
              "Penetration Testing",
              "Security Consulting",
              "Vulnerability Assessment",
              "Compliance Review",
              "Security Monitoring"
            ]}
            pricing="From $10,000"
          />
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Blockchain Development Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for blockchain development projects with no hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            name="MVP"
            price="$15,000"
            period="project"
            description="Perfect for proof of concept and MVP development"
            features={[
              "Basic smart contracts",
              "Simple DApp interface",
              "Basic security audit",
              "Testnet deployment",
              "Documentation",
              "2 weeks support"
            ]}
            cta="Get Started"
            popular={false}
          />
          <PricingCard
            name="Production"
            price="$50,000"
            period="project"
            description="Most popular for production-ready applications"
            features={[
              "Advanced smart contracts",
              "Professional DApp",
              "Comprehensive security audit",
              "Mainnet deployment",
              "Full documentation",
              "1 month support",
              "Performance optimization"
            ]}
            cta="Get Started"
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$150,000"
            period="project"
            description="For complex enterprise blockchain solutions"
            features={[
              "Custom blockchain development",
              "Enterprise DApp suite",
              "Multiple security audits",
              "Multi-chain deployment",
              "White-label solution",
              "3 months support",
              "Custom integrations"
            ]}
            cta="Contact Sales"
            popular={false}
          />
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Blockchain Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with leading blockchain platforms and cutting-edge Web3 technologies.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {[
            { name: "Ethereum", icon: "🔷", category: "Smart Contracts" },
            { name: "Polygon", icon: "💜", category: "Layer 2" },
            { name: "Solana", icon: "☀️", category: "High Performance" },
            { name: "Binance Smart Chain", icon: "🟡", category: "DeFi" },
            { name: "Avalanche", icon: "❄️", category: "Subnets" },
            { name: "Polkadot", icon: "🔴", category: "Interoperability" },
            { name: "Cosmos", icon: "🌌", category: "IBC Protocol" },
            { name: "Arbitrum", icon: "🔵", category: "Optimistic Rollup" },
            { name: "Optimism", icon: "🔴", category: "Layer 2" },
            { name: "IPFS", icon: "📁", category: "Decentralized Storage" },
            { name: "The Graph", icon: "📊", category: "Data Indexing" },
            { name: "Chainlink", icon: "🔗", category: "Oracle Network" }
          ].map((tech, index) => (
            <TechCard key={index} name={tech.name} icon={tech.icon} category={tech.category} />
          ))}
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Blockchain Success Metrics</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our blockchain solutions deliver measurable results in security, performance, and user adoption.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <MetricCard
            number="100%"
            label="Security Audit Pass"
            description="All smart contracts pass security audits"
          />
          <MetricCard
            number="99.9%"
            label="Uptime"
            description="Blockchain application availability"
          />
          <MetricCard
            number="50+"
            label="Projects Delivered"
            description="Successful blockchain projects"
          />
          <MetricCard
            number="$10M+"
            label="TVL Managed"
            description="Total value locked in our solutions"
          />
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Blockchain Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses leverage blockchain technology for real-world applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseStudyCard
            company="DeFi Lending Protocol"
            challenge="Building a secure and efficient lending platform"
            solution="Custom smart contracts with automated liquidation and governance"
            result="$5M TVL, 0 security incidents"
            industry="DeFi"
          />
          <CaseStudyCard
            company="NFT Marketplace"
            challenge="Creating a user-friendly NFT trading platform"
            solution="Full-stack DApp with advanced features and cross-chain support"
            result="10K+ users, $2M+ volume"
            industry="NFTs"
          />
          <CaseStudyCard
            company="Supply Chain Tracking"
            challenge="Transparent and immutable supply chain tracking"
            solution="Blockchain-based tracking system with IoT integration"
            result="100% traceability, 40% efficiency gain"
            industry="Supply Chain"
          />
        </div>
      </section>

      {/* Development Process */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven methodology for successful blockchain project delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep
            step="1"
            title="Discovery & Design"
            description="Understanding requirements and designing the blockchain architecture"
          />
          <ProcessStep
            step="2"
            title="Smart Contract Development"
            description="Writing, testing, and auditing smart contracts for security"
          />
          <ProcessStep
            step="3"
            title="DApp Development"
            description="Building user-friendly interfaces and integrating with blockchain"
          />
          <ProcessStep
            step="4"
            title="Deployment & Support"
            description="Mainnet deployment and ongoing maintenance and support"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-purple-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build the Future with Blockchain?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let our expert team help you create innovative blockchain solutions that drive real business value.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Blockchain Solutions - Free Consultation"
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
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>Email: kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}

function ServiceCategoryCard({ icon, title, description, services, pricing }: {
  icon: string;
  title: string;
  description: string;
  services: string[];
  pricing: string;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {services.map((service, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
            {service}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-purple-600">{pricing}</div>
    </div>
  );
}

function PricingCard({ name, price, period, description, features, cta, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}) {
  return (
    <div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white'} shadow-lg`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-purple-600 mb-2">
          {price}
          <span className="text-lg text-gray-500 font-normal">/{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=Blockchain Solutions - {name} Plan"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

function TechCard({ name, icon, category }: {
  name: string;
  icon: string;
  category: string;
}) {
  return (
    <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-xs text-gray-600">{category}</p>
    </div>
  );
}

function MetricCard({ number, label, description }: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl font-bold text-purple-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}

function CaseStudyCard({ company, challenge, solution, result, industry }: {
  company: string;
  challenge: string;
  solution: string;
  result: string;
  industry: string;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
          <span className="text-purple-600 font-bold text-lg">{company.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{company}</h4>
          <p className="text-sm text-gray-600">{industry}</p>
        </div>
      </div>
      <div className="space-y-3">
        <div>
          <h5 className="font-semibold text-gray-900 mb-1">Challenge:</h5>
          <p className="text-sm text-gray-600">{challenge}</p>
        </div>
        <div>
          <h5 className="font-semibold text-gray-900 mb-1">Solution:</h5>
          <p className="text-sm text-gray-600">{solution}</p>
        </div>
        <div>
          <h5 className="font-semibold text-gray-900 mb-1">Result:</h5>
          <p className="text-sm text-purple-600 font-semibold">{result}</p>
        </div>
      </div>
    </div>
  );
}

function ProcessStep({ step, title, description }: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}