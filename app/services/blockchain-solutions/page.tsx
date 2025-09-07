import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blockchain Solutions - Decentralized Technology Services | Zion Tech Group',
  description: 'Unlock the power of decentralization with our expert blockchain development services. From secure smart contracts to innovative Web3 applications.',
  keywords: 'blockchain development, smart contracts, DeFi, NFT marketplaces, Web3 applications, cross-chain interoperability',
};

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

function FeatureItem({ icon, title, description, benefits }: FeatureItemProps) {
  return (
    <div className="flex items-start space-x-4 mb-6">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-3">{description}</p>
        <ul className="space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-sm text-gray-400 flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function BlockchainSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Blockchain Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock the power of decentralization with our expert blockchain development services. 
            From secure smart contracts to innovative Web3 applications, we build the future of digital trust.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Key Offerings</h2>
            <div className="space-y-6">
              <FeatureItem
                icon="✍️"
                title="Smart Contract Development"
                description="Design, develop, and audit secure and efficient smart contracts for various blockchain platforms (Ethereum, Solana, Polygon, etc.)."
                benefits={["Automated agreements", "Enhanced security", "Reduced intermediaries", "Customizable logic"]}
              />
              <FeatureItem
                icon="💰"
                title="Decentralized Finance (DeFi)"
                description="Build and deploy DeFi protocols including lending platforms, decentralized exchanges (DEX), yield farming, and liquidity pools."
                benefits={["Financial inclusivity", "Transparency", "High liquidity", "Permissionless access"]}
              />
              <FeatureItem
                icon="🖼️"
                title="NFT Marketplaces & Solutions"
                description="Create custom NFT marketplaces, generative art platforms, and tokenization solutions for digital assets."
                benefits={["Unique digital ownership", "Creator monetization", "Immutable records", "New revenue streams"]}
              />
              <FeatureItem
                icon="🌐"
                title="Web3 Application Development"
                description="Develop dApps (decentralized applications) that leverage blockchain technology for enhanced user control and data privacy."
                benefits={["User-centric design", "Data privacy", "Censorship resistance", "Community governance"]}
              />
              <FeatureItem
                icon="🔗"
                title="Cross-Chain Interoperability"
                description="Implement solutions that enable seamless asset and data transfer between different blockchain networks."
                benefits={["Increased liquidity", "Wider reach", "Enhanced functionality", "Future-proof architecture"]}
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Why Choose Our Blockchain Solutions?</h2>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300">Our blockchain developers have extensive experience across multiple platforms and protocols.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Security First</h3>
                <p className="text-gray-300">We prioritize security in every aspect of our blockchain development process.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Scalable Solutions</h3>
                <p className="text-gray-300">Build for the future with scalable and maintainable blockchain applications.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">End-to-End Support</h3>
                <p className="text-gray-300">From concept to deployment and beyond, we provide comprehensive support.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Consultation</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$200<span className="text-lg text-gray-300">/hour</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Blockchain strategy</li>
                <li>Technology assessment</li>
                <li>Architecture planning</li>
                <li>Security review</li>
                <li>Implementation roadmap</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center border-2 border-blue-500">
              <h3 className="text-2xl font-bold text-white mb-4">Development</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$15,000<span className="text-lg text-gray-300">/project</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Smart contract development</li>
                <li>dApp development</li>
                <li>Testing & auditing</li>
                <li>Deployment support</li>
                <li>Documentation</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Most Popular
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">Custom<span className="text-lg text-gray-300"> pricing</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Custom blockchain solutions</li>
                <li>Multi-chain integration</li>
                <li>Advanced security features</li>
                <li>24/7 support</li>
                <li>White-label solutions</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Build the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our blockchain experts help you create innovative solutions that leverage the power of decentralized technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Start Your Project
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </div>
  );
}