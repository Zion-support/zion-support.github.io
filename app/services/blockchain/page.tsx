export const metadata = { 
<<<<<<< HEAD
  title: 'Blockchain Services | Zion Tech Group',
  description: 'Comprehensive blockchain solutions including smart contracts, DeFi protocols, NFT platforms, and Web3 applications. Build the future of decentralized technology.'
}; 

export default function BlockchainPage() { 
  return ( 
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Blockchain Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive blockchain solutions including smart contracts, DeFi protocols, NFT platforms, 
            and Web3 applications. Build the future of decentralized technology.
          </p>
        </div>

        {/* Blockchain Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <BlockchainServiceCategory
            title="Smart Contracts"
            icon="📜"
            description="Secure and audited smart contract development"
            services={[
              "Ethereum smart contracts",
              "Solidity development",
              "Smart contract auditing",
              "Gas optimization",
              "Upgradeable contracts",
              "Multi-signature wallets"
            ]}
          />
          <BlockchainServiceCategory
            title="DeFi Protocols"
            icon="🏦"
            description="Decentralized finance solutions and protocols"
            services={[
              "DEX development",
              "Yield farming protocols",
              "Lending platforms",
              "Staking mechanisms",
              "Liquidity pools",
              "Cross-chain bridges"
            ]}
          />
          <BlockchainServiceCategory
            title="Web3 Applications"
            icon="🌐"
            description="User-friendly Web3 interfaces and dApps"
            services={[
              "dApp frontend development",
              "Wallet integration",
              "NFT marketplaces",
              "DAO governance",
              "Token economics",
              "User onboarding"
            ]}
          />
        </div>

        {/* Real Blockchain Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Blockchain Solutions We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlockchainSolution
              title="NFT Marketplace"
              description="Complete NFT trading platform with advanced features"
              features={[
                "ERC-721/ERC-1155 support",
                "Auction mechanisms",
                "Royalty management",
                "IPFS integration",
                "Mobile app"
              ]}
              price="$25k - $60k"
              timeline="8-16 weeks"
              useCase="Art, gaming, collectibles"
            />
            <BlockchainSolution
              title="DeFi Yield Farming"
              description="Automated yield optimization protocol"
              features={[
                "Multi-strategy farming",
                "Risk management",
                "Governance tokens",
                "Liquidity mining",
                "Analytics dashboard"
              ]}
              price="$30k - $80k"
              timeline="10-20 weeks"
              useCase="DeFi, investment, trading"
            />
            <BlockchainSolution
              title="DAO Governance Platform"
              description="Decentralized autonomous organization tools"
              features={[
                "Proposal creation",
                "Voting mechanisms",
                "Treasury management",
                "Member onboarding",
                "Governance analytics"
              ]}
              price="$20k - $50k"
              timeline="6-12 weeks"
              useCase="Community, governance, organizations"
            />
            <BlockchainSolution
              title="Cross-Chain Bridge"
              description="Secure asset transfer between blockchains"
              features={[
                "Multi-chain support",
                "Atomic swaps",
                "Liquidity pools",
                "Security audits",
                "Real-time monitoring"
              ]}
              price="$40k - $100k"
              timeline="12-24 weeks"
              useCase="Interoperability, DeFi, trading"
            />
            <BlockchainSolution
              title="Token Launch Platform"
              description="Complete token creation and launch solution"
              features={[
                "Token generation",
                "Vesting schedules",
                "Launchpad integration",
                "KYC/AML compliance",
                "Marketing tools"
              ]}
              price="$15k - $35k"
              timeline="4-8 weeks"
              useCase="Startups, ICOs, tokenization"
            />
            <BlockchainSolution
              title="Supply Chain Tracking"
              description="Transparent supply chain on blockchain"
              features={[
                "Product traceability",
                "Quality verification",
                "Smart contracts",
                "IoT integration",
                "Consumer app"
              ]}
              price="$35k - $75k"
              timeline="10-18 weeks"
              useCase="Manufacturing, food, luxury goods"
            />
          </div>
        </div>

        {/* Blockchain Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Blockchain Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BlockchainTechnology
              category="Blockchains"
              technologies={["Ethereum", "Polygon", "BSC", "Solana", "Avalanche"]}
            />
            <BlockchainTechnology
              category="Languages"
              technologies={["Solidity", "Rust", "Go", "JavaScript", "Python"]}
            />
            <BlockchainTechnology
              category="Frameworks"
              technologies={["Hardhat", "Truffle", "Foundry", "Web3.js", "Ethers.js"]}
            />
            <BlockchainTechnology
              category="Infrastructure"
              technologies={["IPFS", "The Graph", "Alchemy", "Infura", "Moralis"]}
            />
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Blockchain Development Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlockchainPricingPlan
              name="Smart Contract Development"
              price="$10k - $30k"
              duration="4-8 weeks"
              features={[
                "Custom smart contract",
                "Security audit",
                "Gas optimization",
                "Testing suite",
                "Documentation",
                "Deployment support"
              ]}
              popular={false}
            />
            <BlockchainPricingPlan
              name="dApp Development"
              price="$25k - $75k"
              duration="8-16 weeks"
              features={[
                "Full-stack dApp",
                "Frontend & backend",
                "Wallet integration",
                "Smart contracts",
                "Testing & deployment",
                "User documentation"
              ]}
              popular={true}
            />
            <BlockchainPricingPlan
              name="DeFi Protocol"
              price="$50k+"
              duration="12+ weeks"
              features={[
                "Complex DeFi protocol",
                "Security audits",
                "Economic modeling",
                "Governance system",
                "Multi-chain support",
                "Ongoing maintenance"
              ]}
              popular={false}
            />
          </div>
        </div>

        {/* Security & Auditing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Security & Auditing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SecurityService
              title="Smart Contract Audit"
              description="Comprehensive security analysis of smart contracts"
              price="$5k - $15k"
              timeline="2-4 weeks"
              features={["Code review", "Vulnerability assessment", "Gas analysis", "Test coverage", "Audit report"]}
            />
            <SecurityService
              title="Penetration Testing"
              description="Simulated attacks to identify vulnerabilities"
              price="$8k - $20k"
              timeline="3-6 weeks"
              features={["Attack simulation", "Vulnerability scanning", "Social engineering", "Physical security", "Report & remediation"]}
            />
            <SecurityService
              title="Security Consulting"
              description="Ongoing security guidance and best practices"
              price="$2k - $5k/month"
              timeline="Ongoing"
              features={["Security reviews", "Best practices", "Incident response", "Training", "Compliance guidance"]}
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Build on Blockchain?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your blockchain project and create a secure, scalable solution that leverages the power of decentralized technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm">
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlockchainServiceCategory({ title, icon, description, services }: {
  title: string;
  icon: string;
  description: string;
  services: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-orange-500 mr-2">•</span>
            {service}
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </li>
        ))}
      </ul>
    </div>
  );
}

<<<<<<< HEAD
function BlockchainSolution({ title, description, features, price, timeline, useCase }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
  useCase: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
          {useCase}
        </span>
      </div>
      <ul className="space-y-1 mb-4">
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
<<<<<<< HEAD
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div>
          <div className="font-bold text-orange-600">{price}</div>
          <div className="text-sm text-gray-500">{timeline}</div>
        </div>
        <a
          href="tel:+13024640950"
          className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors"
        >
          Get Quote
        </a>
      </div>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </div>
  );
}

<<<<<<< HEAD
function BlockchainTechnology({ category, technologies }: { category: string; technologies: string[] }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <h3 className="font-bold text-gray-900 mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>
    </div>
  );
}

<<<<<<< HEAD
function BlockchainPricingPlan({ name, price, duration, features, popular }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-lg border-2 ${popular ? 'border-orange-500' : 'border-gray-200'} relative`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-orange-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {feature}
          </li>
        ))}
      </ul>
<<<<<<< HEAD
      <a
        href="tel:+13024640950"
        className={`w-full mt-6 py-3 rounded-lg font-semibold text-center block transition-colors ${
          popular 
            ? 'bg-orange-600 text-white hover:bg-orange-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function SecurityService({ title, description, price, timeline, features }: {
  title: string;
  description: string;
  price: string;
  timeline: string;
  features: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div>
          <div className="font-bold text-orange-600">{price}</div>
          <div className="text-sm text-gray-500">{timeline}</div>
        </div>
        <a
          href="tel:+13024640950"
          className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors"
        >
          Get Quote
        </a>
      </div>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </div>
  );
}