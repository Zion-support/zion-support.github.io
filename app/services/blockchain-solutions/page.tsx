
export const metadata = {
  title: "Blockchain Solutions | Zion Tech Group",
  description: "Comprehensive blockchain development, DeFi solutions, NFT platforms, and Web3 integration for secure and decentralized applications.",
};

export default function BlockchainSolutionsPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Blockchain Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Unlock the power of decentralization with our expert blockchain development services. From secure smart contracts to innovative Web3 applications, we build the future of digital trust.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Offerings</h2>
          <div className="space-y-4">
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Zion for Blockchain?</h2>
          <div className="space-y-6">
            <BenefitCard
              icon="🔒"
              title="Bank-Grade Security"
              description="Our solutions are built with the highest security standards, including rigorous smart contract audits and penetration testing."
            />
            <BenefitCard
              icon="⚡"
              title="Scalable & Efficient"
              description="We design blockchain solutions that are highly scalable, ensuring fast transaction processing and low costs."
            />
            <BenefitCard
              icon="💡"
              title="Innovation & Expertise"
              description="Leverage our deep expertise in blockchain technology to build innovative and future-proof decentralized applications."
            />
            <BenefitCard
              icon="🤝"
              title="End-to-End Support"
              description="From concept to deployment and ongoing maintenance, we provide comprehensive support for your blockchain journey."
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Blockchain Development Process</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We follow a structured approach to ensure successful delivery of your blockchain project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep
            step="1"
            title="Discovery & Strategy"
            description="Define project scope, blockchain platform, and tokenomics (if applicable)."
          />
          <ProcessStep
            step="2"
            title="Development & Audit"
            description="Build smart contracts and dApps, followed by thorough security audits."
          />
          <ProcessStep
            step="3"
            title="Deployment & Support"
            description="Launch your solution and provide ongoing monitoring and maintenance."
          />
        </div>
      </div>

      <CTA />
    </div>
  );
}

function FeatureItem({ icon, title, description, benefits }: { icon: string; title: string; description: string; benefits: string[] }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProcessStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Build Your Decentralized Future?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Contact us today for a free consultation and let&apos;s explore how blockchain can transform your business.
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
    </div>
  );
}