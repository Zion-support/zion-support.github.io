export const metadata = { 
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Comprehensive blockchain development services including DeFi, NFTs, smart contracts, and Web3 applications.'
}; 

export default function BlockchainSolutionsPage() { 
  return ( 
    <div className="animate-fade-in">
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

        {/* Core Blockchain Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Blockchain Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlockchainServiceCard 
              title="Smart Contract Development" 
              description="Secure, audited smart contracts for various blockchain platforms"
              features={["Solidity development", "Security audits", "Gas optimization", "Multi-chain support"]}
              price="Starting at $15k"
              icon="📜"
            />
            <BlockchainServiceCard 
              title="DeFi Protocols" 
              description="Decentralized finance applications and yield farming platforms"
              features={["DEX development", "Lending protocols", "Yield farming", "Liquidity pools"]}
              price="Starting at $25k"
              icon="💰"
            />
            <BlockchainServiceCard 
              title="NFT Marketplaces" 
              description="Complete NFT platforms with minting, trading, and auction features"
              features={["NFT minting", "Marketplace UI", "Royalty system", "Metadata management"]}
              price="Starting at $20k"
              icon="🎨"
            />
            <BlockchainServiceCard 
              title="Web3 Applications" 
              description="Decentralized applications with wallet integration and blockchain connectivity"
              features={["Wallet integration", "MetaMask support", "IPFS storage", "User authentication"]}
              price="Starting at $18k"
              icon="🌐"
            />
            <BlockchainServiceCard 
              title="Token Development" 
              description="Custom token creation and tokenomics design"
              features={["ERC-20/ERC-721", "Tokenomics design", "Vesting contracts", "Multi-signature wallets"]}
              price="Starting at $12k"
              icon="🪙"
            />
            <BlockchainServiceCard 
              title="Blockchain Integration" 
              description="Integrate blockchain functionality into existing applications"
              features={["API development", "Node management", "Transaction handling", "Event monitoring"]}
              price="Starting at $10k"
              icon="🔗"
            />
          </div>
        </div>

        {/* Specialized Blockchain Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specialized Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SpecializedBlockchainCard 
              title="Enterprise Blockchain" 
              description="Private blockchain solutions for enterprise use cases and supply chain management"
              features={["Hyperledger Fabric", "Consortium networks", "Supply chain tracking", "Data privacy"]}
              price="$50k - $200k"
              icon="🏢"
            />
            <SpecializedBlockchainCard 
              title="Gaming & Metaverse" 
              description="Blockchain gaming platforms and virtual world applications"
              features={["Play-to-earn games", "Virtual assets", "Cross-game compatibility", "VR integration"]}
              price="$40k - $150k"
              icon="🎮"
            />
            <SpecializedBlockchainCard 
              title="Identity & Authentication" 
              description="Decentralized identity solutions and KYC/AML compliance"
              features={["DID protocols", "Zero-knowledge proofs", "KYC integration", "Privacy preservation"]}
              price="$35k - $120k"
              icon="🆔"
            />
            <SpecializedBlockchainCard 
              title="Cross-Chain Solutions" 
              description="Interoperability solutions and cross-chain bridge development"
              features={["Bridge protocols", "Cross-chain swaps", "Asset migration", "Multi-chain DApps"]}
              price="$60k - $250k"
              icon="🌉"
            />
          </div>
        </div>

        {/* Technical Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TechStackCard 
              title="Blockchain Platforms" 
              details={["Ethereum", "Polygon", "BSC", "Solana", "Avalanche", "Arbitrum"]} 
            />
            <TechStackCard 
              title="Development Tools" 
              details={["Solidity", "Web3.js", "Ethers.js", "Hardhat", "Truffle", "OpenZeppelin"]} 
            />
            <TechStackCard 
              title="Infrastructure" 
              details={["Node.js", "IPFS", "The Graph", "Alchemy", "Infura", "AWS/GCP"]} 
            />
          </div>
        </div>

        <Pricing />
        <ContactSection />
      </section>
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
    <div className="border border-gray-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-200 bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-orange-600">{price}</div>
    </div>
  ); 
} 

          </li>
        ))}
      </ul>
    </div>
  ); 
} 

function Pricing() { 
  return ( 
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blockchain Service Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
        />
        <Plan 
          name="Enterprise Solution" 
          price="$100k+" 
          duration="Custom timeline"
          features={["Custom blockchain", "Integration", "Compliance", "Ongoing support"]} 
        />
      </div>
    </div>
  ); 
} 

function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
}) { 
  return ( 
    <div className="border border-gray-200 rounded-xl p-8 bg-white hover:border-orange-300 hover:shadow-lg transition-all duration-200">
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-orange-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="mt-6 block w-full bg-orange-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  ); 
} 

function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-purple-50 border border-orange-200 rounded-xl p-8 text-center">
      <h3 className="text-3xl font-bold text-gray-900 mb-4">
        Ready to Build on the Blockchain?
      </h3>
      <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
        Let's discuss your blockchain project and create innovative solutions that leverage 
        the power of decentralized technology. Our team has built 30+ successful blockchain projects.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-lg"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors text-lg"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-500">
        <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
}