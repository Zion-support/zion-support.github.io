<div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Blockchain Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
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

function BlockchainServiceCard({ title, description, features, price, icon }: { 

  price: string;

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

          </li>
        ))}
      </ul>
      </div>
  ); 

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

function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;

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
  )