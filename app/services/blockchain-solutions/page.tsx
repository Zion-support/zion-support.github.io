export const metadata = { 
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Comprehensive blockchain development including DeFi, NFTs, smart contracts, and Web3 applications. Build the future of decentralized technology.'
};

export default function BlockchainSolutionsPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Blockchain Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Comprehensive blockchain development including DeFi, NFTs, smart contracts, and Web3 applications. 
          Build the future of decentralized technology with our expert team.
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Blockchain Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlockchainServiceCard
            title="DeFi Protocol Development"
            description="Decentralized finance protocols with yield farming, liquidity pools, and automated market makers"
            features={["Smart contract development", "Yield farming mechanisms", "Liquidity pool management", "Governance tokens", "Security auditing"]}
            price="$25k–$100k"
            icon="🏦"
          />
          <BlockchainServiceCard
            title="NFT Marketplace & Collections"
            description="Complete NFT platforms with minting, trading, and marketplace functionality"
            features={["NFT minting contracts", "Marketplace development", "Royalty management", "Metadata optimization", "IPFS integration"]}
            price="$15k–$60k"
            icon="🎨"
          />
          <BlockchainServiceCard
            title="Web3 Applications"
            description="Decentralized applications with wallet integration and blockchain connectivity"
            features={["Wallet integration", "Smart contract interaction", "Token management", "User authentication", "Transaction handling"]}
            price="$20k–$80k"
            icon="🌐"
          />
          <BlockchainServiceCard
            title="Smart Contract Auditing"
            description="Comprehensive security auditing and optimization of smart contracts"
            features={["Security vulnerability analysis", "Gas optimization", "Code review", "Test coverage", "Compliance checking"]}
            price="$5k–$25k"
            icon="🔍"
          />
          <BlockchainServiceCard
            title="Token Development & ICO"
            description="Custom token creation and initial coin offering management"
            features={["ERC-20/ERC-721 tokens", "Tokenomics design", "ICO platform", "Vesting mechanisms", "Distribution management"]}
            price="$10k–$40k"
            icon="🪙"
          />
          <BlockchainServiceCard
            title="Cross-Chain Solutions"
            description="Interoperability solutions for multi-blockchain connectivity"
            features={["Bridge development", "Cross-chain swaps", "Multi-chain wallets", "Interoperability protocols", "Asset migration"]}
            price="$30k–$120k"
            icon="🔗"
          />
          <BlockchainServiceCard
            title="DAO Development & Governance"
            description="Decentralized autonomous organization platforms with governance mechanisms"
            features={["Governance token design", "Voting mechanisms", "Treasury management", "Proposal systems", "Member management", "Transparency tools"]}
            price="$20k–$80k"
            icon="🗳️"
          />
          <BlockchainServiceCard
            title="Metaverse & Virtual Worlds"
            description="Blockchain-powered virtual worlds and metaverse platforms"
            features={["Virtual land NFTs", "Avatar systems", "In-world economies", "Social features", "Gaming mechanics", "VR/AR integration"]}
            price="$40k–$150k"
            icon="🌍"
          />
          <BlockchainServiceCard
            title="Blockchain Gaming & Play-to-Earn"
            description="Gaming platforms with blockchain integration and tokenized rewards"
            features={["Game development", "NFT integration", "Token economics", "Marketplace features", "Guild systems", "Tournament management"]}
            price="$30k–$120k"
            icon="🎮"
          />
          <BlockchainServiceCard
            title="Supply Chain & Traceability"
            description="Blockchain solutions for supply chain transparency and product traceability"
            features={["Product tracking", "Quality verification", "Authenticity proof", "Compliance reporting", "Stakeholder management", "IoT integration"]}
            price="$25k–$90k"
            icon="📦"
          />
          <BlockchainServiceCard
            title="Identity & KYC Solutions"
            description="Decentralized identity management and KYC/AML compliance systems"
            features={["Digital identity", "KYC verification", "Privacy protection", "Compliance reporting", "Cross-platform integration", "Biometric authentication"]}
            price="$20k–$70k"
            icon="🆔"
          />
          <BlockchainServiceCard
            title="Real Estate Tokenization"
            description="Property tokenization and fractional ownership platforms"
            features={["Property tokenization", "Fractional ownership", "Rental income distribution", "Property management", "Legal compliance", "Marketplace integration"]}
            price="$35k–$100k"
            icon="🏠"
          />
          <BlockchainServiceCard
            title="Carbon Credit & ESG Trading"
            description="Blockchain platforms for carbon credit trading and ESG compliance"
            features={["Carbon credit tokenization", "ESG reporting", "Trading mechanisms", "Verification systems", "Compliance tracking", "Impact measurement"]}
            price="$30k–$80k"
            icon="🌱"
          />
          <BlockchainServiceCard
            title="Insurance & Risk Management"
            description="Decentralized insurance protocols and risk management solutions"
            features={["Smart insurance contracts", "Risk assessment", "Claims processing", "Payout automation", "Reinsurance protocols", "Parametric insurance"]}
            price="$25k–$90k"
            icon="🛡️"
          />
          <BlockchainServiceCard
            title="Healthcare Data Management"
            description="Secure healthcare data sharing and patient record management"
            features={["Patient data privacy", "Interoperability", "Consent management", "Data sharing protocols", "Compliance frameworks", "AI integration"]}
            price="$40k–$120k"
            icon="🏥"
          />
          <BlockchainServiceCard
            title="Energy Trading & Grid Management"
            description="Peer-to-peer energy trading and smart grid management systems"
            features={["Energy tokenization", "P2P trading", "Smart contracts", "Grid optimization", "Renewable energy tracking", "Billing automation"]}
            price="$35k–$100k"
            icon="⚡"
          />
          <BlockchainServiceCard
            title="Voting & Governance Systems"
            description="Secure and transparent voting systems for organizations and governments"
            features={["Secure voting", "Identity verification", "Result transparency", "Audit trails", "Multi-level governance", "Mobile integration"]}
            price="$20k–$60k"
            icon="🗳️"
          />
          <BlockchainServiceCard
            title="Intellectual Property & Patents"
            description="IP protection and patent management on blockchain"
            features={["IP registration", "Patent tracking", "Royalty distribution", "Dispute resolution", "Licensing management", "Prior art verification"]}
            price="$25k–$70k"
            icon="💡"
          />
          <BlockchainServiceCard
            title="Gaming Assets & Marketplaces"
            description="Cross-game asset trading and gaming NFT marketplaces"
            features={["Asset interoperability", "Cross-game trading", "Rarity systems", "Marketplace features", "Guild management", "Tournament rewards"]}
            price="$20k–$80k"
            icon="🎯"
          />
          <BlockchainServiceCard
            title="Decentralized Storage Solutions"
            description="Distributed storage networks and file sharing protocols"
            features={["Distributed storage", "File encryption", "Access control", "Redundancy management", "Cost optimization", "API integration"]}
            price="$15k–$50k"
            icon="💾"
          />
          <BlockchainServiceCard
            title="Prediction Markets & Oracles"
            description="Decentralized prediction markets and oracle data feeds"
            features={["Market creation", "Oracle integration", "Liquidity management", "Dispute resolution", "Data verification", "API services"]}
            price="$25k–$80k"
            icon="🔮"
          />
          <BlockchainServiceCard
            title="Social Media & Content Platforms"
            description="Decentralized social media and content monetization platforms"
            features={["Content monetization", "Creator rewards", "Community governance", "Censorship resistance", "Data ownership", "Token economics"]}
            price="$30k–$100k"
            icon="📱"
          />
          <BlockchainServiceCard
            title="Lending & Borrowing Protocols"
            description="Decentralized lending platforms with automated risk management"
            features={["Collateral management", "Interest rate algorithms", "Liquidation mechanisms", "Risk assessment", "Governance tokens", "Multi-asset support"]}
            price="$25k–$90k"
            icon="💰"
          />
          <BlockchainServiceCard
            title="Stablecoin Development"
            description="Custom stablecoin creation with price stability mechanisms"
            features={["Price stability", "Collateral management", "Governance systems", "Audit compliance", "Multi-chain deployment", "Integration APIs"]}
            price="$20k–$60k"
            icon="💎"
          />
          <BlockchainServiceCard
            title="Blockchain Analytics & Monitoring"
            description="Comprehensive blockchain data analysis and monitoring tools"
            features={["Transaction analysis", "Address tracking", "Risk scoring", "Compliance monitoring", "Real-time alerts", "Custom dashboards"]}
            price="$15k–$50k"
            icon="📊"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Blockchain Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Item 
            title="Smart Contracts" 
            details={[
              "Solidity, Rust, and Vyper development",
              "Ethereum, Polygon, and BSC deployment",
              "Gas optimization and efficiency",
              "Upgradeable contract patterns",
              "Multi-signature wallet integration",
              "Oracle integration and data feeds"
            ]} 
          />
          <Item 
            title="DeFi & DApps" 
            details={[
              "Decentralized exchange (DEX) development",
              "Lending and borrowing protocols",
              "Yield farming and staking mechanisms",
              "Automated market makers (AMM)",
              "Governance and voting systems",
              "Liquidity mining programs"
            ]} 
          />
          <Item 
            title="Security & Compliance" 
            details={[
              "Smart contract security auditing",
              "Penetration testing and vulnerability assessment",
              "Regulatory compliance consulting",
              "KYC/AML integration",
              "Risk management frameworks",
              "Insurance and coverage solutions"
            ]} 
          />
        </div>
      </section>

      <Pricing />
      <ContactSection />
    </div>
  );
}

function BlockchainServiceCard({ title, description, features, price, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
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

function Pricing() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Blockchain Development Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Smart Contract Development" 
          price="$10k–$30k" 
          duration="4–8 weeks"
          features={[
            "Custom smart contract development",
            "Security testing and auditing",
            "Gas optimization",
            "Deployment and verification",
            "Documentation and testing",
            "Integration support"
          ]} 
        />
        <Plan 
          name="DeFi Protocol" 
          price="$50k–$150k" 
          duration="12–20 weeks"
          features={[
            "Complete DeFi protocol development",
            "Frontend and backend integration",
            "Security auditing and testing",
            "Tokenomics design and implementation",
            "Governance system development",
            "Launch and marketing support"
          ]} 
        />
        <Plan 
          name="Enterprise Blockchain" 
          price="$100k+" 
          duration="20+ weeks"
          features={[
            "Custom blockchain solutions",
            "Enterprise integration",
            "Compliance and regulatory support",
            "Multi-chain interoperability",
            "Dedicated development team",
            "Ongoing maintenance and support"
          ]} 
        />
      </div>
    </section>
  );
}

function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
      >
        Get Started
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Build on the Blockchain?
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss your blockchain vision and create innovative decentralized solutions. 
          Our blockchain experts have delivered 50+ successful Web3 projects.
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
        <div className="mt-8 text-sm text-gray-500">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </section>
  );
}