export const metadata = { 
  title: 'Blockchain Solutions | Zion Tech Group',
<<<<<<< HEAD
  description: 'Comprehensive blockchain development services including DeFi, NFTs, smart contracts, and Web3 applications.'
=======
  description: 'Comprehensive blockchain development services including smart contracts, DeFi protocols, NFT platforms, and Web3 applications. Enterprise-grade blockchain solutions.'
>>>>>>> cb8cfb4fb3d771dc157162ef9d8670f2dbe493da
};

export default function BlockchainPage() {
  return (
<<<<<<< HEAD
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
            description="Decentralized autonomous organization platform with governance"
            price="Starting at $25k"
            features={["Proposal system", "Voting mechanism", "Treasury management", "Member management"]}
          />
          <ServiceCard
            title="Cross-Chain Bridge"
            description="Secure bridge for transferring assets between different blockchains"
            price="Starting at $40k"
            features={["Multi-chain support", "Security protocols", "Liquidity pools", "Monitoring system"]}
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
          </li>
        ))}
=======
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Blockchain Solutions
        </h1>
        <p className=\"text-xl text-gray-600 mb-8 max-w-3xl mx-auto\" />
          Build the future of decentralized applications with our comprehensive blockchain development services. 
          From smart contracts to DeFi protocols, we help you create secure, scalable Web3 solutions.
        </p>
        <div className=\"flex flex-col sm:flex-row gap-4 justify-center\" />
          <a href=\"mailto:kleber@ziontechgroup.com?subject=Blockchain Services Inquiry\"
            className=\"bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors\"
           />
            Start Your Blockchain Project;
          </a>
          <a href=\"tel:+13024640950\"
            className=\"border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors\"
           />
            Call +1 302 464 0950;
          </a>
        </div>
      </section>
    </div>
  );
}

function BlockchainUseCase({ title, description, examples,
  icon }: {
  title: string,
  description: string,
  examples: string[];}
  icon: string;},,
  }) {
  return (}
    <div className=\"bg-white border border-gray-200 rounded-xl p-6\" />}
      <div className=\"text-3xl mb-4\" />{icon}</div>
      <h3 className=\"text-lg font-semibold text-gray-900 mb-2\" />{title}</h3>
      <p className=\"text-gray-600 mb-4\" />{description}</p>
      <ul className=\"space-y-1\" />
        {examples.map((example,,,
  index) => (}
          <li key={index}
            className=\"text-sm text-gray-500\" />• {example</li>
        ))
>>>>>>> cb8cfb4fb3d771dc157162ef9d8670f2dbe493da
      </ul>
    </div>
  );
}

<<<<<<< HEAD
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
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
=======
function BlockchainBenefitCard({ title, description,
  icon }: {
  title: string,
  description: string;}
  icon: string;},,
  }) {
  return (}
    <div className=\"text-center\" />}
      <div className=\"text-4xl mb-4\" />{icon}</div>
      <h3 className=\"text-lg font-semibold text-gray-900 mb-2\" />{title}</h3>
      <p className=\"text-gray-600\" />{description}</p>
>>>>>>> cb8cfb4fb3d771dc157162ef9d8670f2dbe493da
    </div>
  );
}

function Pricing() {
  return (
<<<<<<< HEAD
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
      </div>
=======
    <div className=\"bg-white rounded-2xl p-8 mb-16\" />
      <h2 className=\"text-3xl font-bold text-gray-900 text-center mb-8\" />Blockchain Development Pricing</h2>
      <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\" />
        <PricingCard name=\"Smart Contract\"
          price=\"$8,000\"
          period=\"project\"}
          description=\"Basic smart contract development and deployment\"}
          features={[\"Single contract\", \"Basic testing\", \"Deployment\"}
            \"Documentation\"
            \"1 month support\"]
          popular={false}
        />
        <PricingCard name=\"dApp Development\"
          price=\"$25,000\"
          period=\"project\"
          description=\"Complete decentralized application with frontend\"
          features={[\"Smart contracts\", \"Frontend development\", \"Web3 integration\"}
            \"Testing & auditing\"
            \"3 months support\"]
          popular={true}
        />
        <PricingCard name=\"Enterprise Solution\"
          price=\"Custom\"
          period=\"\"
          description=\"Custom blockchain solutions for enterprise needs\"
          features={[\"Custom development\", \"Multi-chain support\", \"Enterprise integration\"}
            \"Dedicated team\"
            \"Ongoing support\"]
          popular={false}
        />
      </div>
>>>>>>> cb8cfb4fb3d771dc157162ef9d8670f2dbe493da
    </div>
  );
}

<<<<<<< HEAD
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
            {feature}
          </li>
        ))}
      </ul>
=======
function PricingCard({ name, price, period, description, features,
  popular }: {
  name: string;
  price: string;
  period: string,
  description: string,
  features: string[];}
  popular: boolean;},,
  }) {}
  return (}
    <div className={`relative border-2 rounded-xl p-8 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`} />
      {popular && (
        <div className=\"absolute -top-4 left-1/2 transform -translate-x-1/2\" />
          <span className=\"bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold\" />Most Popular</span>}
        </div>}
      )}
      <h3 className=\"text-2xl font-bold text-gray-900 mb-2\" />{name}</h3>
      <p className=\"text-gray-600 mb-4\" />{description}</p>
      <div className=\"mb-6\" />
        <span className=\"text-4xl font-bold text-gray-900\" />{price}</span>
        {period && <span className=\"text-gray-600\" />/{period}</span>}
      </div>
      <ul className=\"space-y-3 mb-8\" />
        {features.map((feature, index) => (}
          <li key={index className=\"flex items-center\" />
            <svg className=\"w-5 h-5 text-green-500 mr-3 flex-shrink-0\" fill=\"currentColor\" viewBox=\"0 0 20 20\" />
              <path fillRule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clipRule=\"evenodd\" / />
            </svg>
            <span className=\"text-gray-700\" />{feature}</span>
          </li>
        ))}
      </ul>
      <a href=\"tel:+13024640950\"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700' }
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}
        }`}
       />
        Get Started;
      </a>
    </div>
  );
}

function CTASection() {
  return (
    <div className=\"bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-center\" />
      <h2 className=\"text-3xl font-bold text-white mb-4\" />Ready to Build on Blockchain?</h2>
      <p className=\"text-xl text-blue-100 mb-8 max-w-3xl mx-auto\" />
        Let&apos;s discuss your blockchain project and create a custom solution that drives innovation and value.
      </p>
      <div className=\"flex flex-col sm:flex-row gap-4 justify-center\" />
        <a href=\"tel:+13024640950\"
          className=\"bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg\"
         />
          Call +1 302 464 0950;
        </a>
        <a href=\"mailto:kleber@ziontechgroup.com\"
          className=\"border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg\"
         />
          Email Us;
        </a>
      </div>
      <div className=\"mt-6 text-sm text-blue-100\" />
        <p />📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p />📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
    <div className=\"space-y-16\" />
      <section className=\"text-center py-16 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg\" />
        <h1 className=\"text-4xl md:text-6xl font-bold text-gray-900 mb-6\" />
          Blockchain Services;
        </h1>
        <p className=\"text-xl text-gray-600 mb-8 max-w-3xl mx-auto\" />
          Build the future of decentralized applications with our comprehensive blockchain development services. 
          From smart contracts to DeFi protocols, we help you create secure, scalable Web3 solutions.
        </p>
        <div className=\"flex flex-col sm:flex-row gap-4 justify-center\" />
          <a href=\"mailto:kleber@ziontechgroup.com?subject=Blockchain Services Inquiry\"
            className=\"bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors\"
           />
            Start Your Blockchain Project;
          </a>
          <a href=\"tel:+13024640950\"
            className=\"border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors\"
           />
            Call +1 302 464 0950;
          </a>
        </div>
      </section>
    </div>}
  );}
}
      </div>
>>>>>>> cb8cfb4fb3d771dc157162ef9d8670f2dbe493da
    </div>
  );
}