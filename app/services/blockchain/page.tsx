<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
import { Metadata } from 'next';
import React from 'react';

<<<<<<< HEAD
export const metadata: Metadata = { 
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';


export const metadata = { 
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
=======
export const metadata: Metadata = {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-6c29
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  title: 'Blockchain Services | Zion Tech Group',
  description:
    'Comprehensive blockchain development services including smart contracts, DeFi protocols, NFT platforms, and enterprise blockchain solutions.',
  keywords:
    'blockchain development, smart contracts, DeFi, NFT, Web3, cryptocurrency, enterprise blockchain, dApp development',
};

export default function BlockchainPage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="animate-fade-in">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
=======
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          Blockchain Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Build the future of decentralized applications with our comprehensive blockchain development services. 
          From smart contracts to DeFi protocols, we help you create secure, scalable Web3 solutions.
        </p>
<<<<<<< HEAD
=======
    <div className="animate-fade-in">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
=======
    <div className='animate-fade-in'>
      <section className='text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-6c29
          Blockchain Services
        </h1>
        <p className='text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
          Build the future of decentralized applications with our comprehensive
          blockchain development services. From smart contracts to DeFi
          protocols, we help you create secure, scalable Web3 solutions.
        </p>
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
      </section>

      <section className='mb-16'>
        <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
          Our Blockchain Solutions
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <BlockchainServiceCard
            title='Smart Contract Development'
            description='Secure, audited smart contracts for various blockchain platforms'
            features={[
              'Solidity development',
              'Security auditing',
              'Gas optimization',
              'Multi-chain support',
              'Upgradeable contracts',
            ]}
            price='$8,000-25,000'
            icon='📜'
          />
          <BlockchainServiceCard
            title='DeFi Protocol Development'
            description='Decentralized finance protocols including DEXs, lending, and yield farming'
            features={[
              'AMM protocols',
              'Lending platforms',
              'Yield farming',
              'Liquidity mining',
              'Governance tokens',
            ]}
            price='$25,000-100,000'
            icon='💰'
          />
          <BlockchainServiceCard
            title='NFT Marketplace & Platform'
            description='Complete NFT ecosystems with minting, trading, and marketplace functionality'
            features={[
              'NFT minting',
              'Marketplace development',
              'Royalty systems',
              'Metadata management',
              'IPFS integration',
            ]}
            price='$15,000-50,000'
            icon='🎨'
          />
          <BlockchainServiceCard
            title='dApp Development'
            description='Decentralized applications with Web3 integration and user-friendly interfaces'
            features={[
              'Frontend development',
              'Web3 integration',
              'Wallet connectivity',
              'User authentication',
              'Transaction management',
            ]}
            price='$12,000-40,000'
            icon='🌐'
          />
          <BlockchainServiceCard
            title='Enterprise Blockchain'
            description='Private and consortium blockchain solutions for enterprise use cases'
            features={[
              'Hyperledger Fabric',
              'Ethereum Enterprise',
              'Consortium setup',
              'Permission management',
              'Integration APIs',
            ]}
            price='$20,000-75,000'
            icon='🏢'
          />
          <BlockchainServiceCard
            title='Token Development & ICO'
            description='Custom token creation and initial coin offering development'
            features={[
              'ERC-20/721/1155 tokens',
              'ICO platform',
              'Tokenomics design',
              'Vesting contracts',
              'Compliance tools',
            ]}
            price='$10,000-30,000'
            icon='🪙'
=======
    <div className="animate-fade-in">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Blockchain Services
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Build the future of decentralized applications with our comprehensive blockchain development services. 
          From smart contracts to DeFi protocols, we help you create secure, scalable Web3 solutions.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Blockchain Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlockchainServiceCard
            title="Smart Contract Development"
            description="Secure, audited smart contracts for various blockchain platforms"
            features={["Solidity development", "Security auditing", "Gas optimization", "Multi-chain support", "Upgradeable contracts"]}
            price="$8,000-25,000"
            icon="📜"
          />
          <BlockchainServiceCard
            title="DeFi Protocol Development"
            description="Decentralized finance protocols including DEXs, lending, and yield farming"
            features={["AMM protocols", "Lending platforms", "Yield farming", "Liquidity mining", "Governance tokens"]}
            price="$25,000-100,000"
            icon="💰"
          />
          <BlockchainServiceCard
            title="NFT Marketplace & Platform"
            description="Complete NFT ecosystems with minting, trading, and marketplace functionality"
            features={["NFT minting", "Marketplace development", "Royalty systems", "Metadata management", "IPFS integration"]}
            price="$15,000-50,000"
            icon="🎨"
          />
          <BlockchainServiceCard
            title="dApp Development"
            description="Decentralized applications with Web3 integration and user-friendly interfaces"
            features={["Frontend development", "Web3 integration", "Wallet connectivity", "User authentication", "Transaction management"]}
            price="$12,000-40,000"
            icon="🌐"
          />
          <BlockchainServiceCard
            title="Enterprise Blockchain"
            description="Private and consortium blockchain solutions for enterprise use cases"
            features={["Hyperledger Fabric", "Ethereum Enterprise", "Consortium setup", "Permission management", "Integration APIs"]}
            price="$20,000-75,000"
            icon="🏢"
          />
          <BlockchainServiceCard
            title="Token Development & ICO"
            description="Custom token creation and initial coin offering development"
            features={["ERC-20/721/1155 tokens", "ICO platform", "Tokenomics design", "Vesting contracts", "Compliance tools"]}
            price="$10,000-30,000"
            icon="🪙"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
          />
        </div>
      </section>

<<<<<<< HEAD
      <section className='mb-16'>
        <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
          Blockchain Development Process
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <BlockchainProcessStep
            step='1'
            title='Concept & Design'
            description='Define tokenomics, architecture, and technical specifications'
          />
          <BlockchainProcessStep
            step='2'
            title='Smart Contract Development'
            description='Write, test, and optimize smart contracts for security and efficiency'
          />
          <BlockchainProcessStep
            step='3'
            title='Frontend & Integration'
            description='Build user interfaces and integrate with blockchain networks'
          />
          <BlockchainProcessStep
            step='4'
            title='Testing & Deployment'
            description='Comprehensive testing, auditing, and mainnet deployment'
=======
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blockchain Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BlockchainProcessStep
            step="1"
            title="Concept & Design"
            description="Define tokenomics, architecture, and technical specifications"
          />
          <BlockchainProcessStep
            step="2"
            title="Smart Contract Development"
            description="Write, test, and optimize smart contracts for security and efficiency"
          />
          <BlockchainProcessStep
            step="3"
            title="Frontend & Integration"
            description="Build user interfaces and integrate with blockchain networks"
          />
          <BlockchainProcessStep
            step="4"
            title="Testing & Deployment"
            description="Comprehensive testing, auditing, and mainnet deployment"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
          />
        </div>
      </section>

<<<<<<< HEAD
      <section className='mb-16'>
        <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
          Blockchain Technology Stack
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <BlockchainTechStack
            title='Blockchain Platforms'
            technologies={[
              'Ethereum',
              'Polygon',
              'Binance Smart Chain',
              'Solana',
              'Avalanche',
            ]}
          />
          <BlockchainTechStack
            title='Development Tools'
            technologies={[
              'Hardhat',
              'Truffle',
              'Remix',
              'OpenZeppelin',
              'Web3.js',
            ]}
          />
          <BlockchainTechStack
            title='Frontend & Web3'
            technologies={[
              'React',
              'Next.js',
              'Web3.js',
              'Ethers.js',
              'MetaMask',
            ]}
=======
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blockchain Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlockchainTechStack
            title="Blockchain Platforms"
            technologies={["Ethereum", "Polygon", "Binance Smart Chain", "Solana", "Avalanche"]}
          />
          <BlockchainTechStack
            title="Development Tools"
            technologies={["Hardhat", "Truffle", "Remix", "OpenZeppelin", "Web3.js"]}
          />
          <BlockchainTechStack
            title="Frontend & Web3"
            technologies={["React", "Next.js", "Web3.js", "Ethers.js", "MetaMask"]}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
          />
        </div>
      </section>

<<<<<<< HEAD
      <section className='mb-16'>
        <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
          Blockchain Use Cases
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <BlockchainUseCase
            title='Supply Chain'
            description='Transparent and traceable supply chain management'
            examples={[
              'Product tracking',
              'Authenticity verification',
              'Quality assurance',
              'Compliance reporting',
            ]}
            icon='📦'
          />
          <BlockchainUseCase
            title='Digital Identity'
            description='Self-sovereign identity and credential management'
            examples={[
              'KYC/AML compliance',
              'Credential verification',
              'Privacy protection',
              'Cross-platform identity',
            ]}
            icon='🆔'
          />
          <BlockchainUseCase
            title='Gaming & Metaverse'
            description='Play-to-earn games and virtual world economies'
            examples={[
              'Game assets',
              'Virtual land',
              'In-game currencies',
              'Player rewards',
            ]}
            icon='🎮'
          />
          <BlockchainUseCase
            title='Real Estate'
            description='Property tokenization and fractional ownership'
            examples={[
              'Property tokens',
              'Fractional ownership',
              'Rental income',
              'Property trading',
            ]}
            icon='🏠'
          />
          <BlockchainUseCase
            title='Healthcare'
            description='Secure patient data and medical record management'
            examples={[
              'Patient records',
              'Drug traceability',
              'Clinical trials',
              'Insurance claims',
            ]}
            icon='🏥'
          />
          <BlockchainUseCase
            title='Finance'
            description='Decentralized financial services and products'
            examples={[
              'Cross-border payments',
              'Microfinance',
              'Insurance',
              'Credit scoring',
            ]}
            icon='💳'
=======
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blockchain Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlockchainUseCase
            title="Supply Chain"
            description="Transparent and traceable supply chain management"
            examples={["Product tracking", "Authenticity verification", "Quality assurance", "Compliance reporting"]}
            icon="📦"
          />
          <BlockchainUseCase
            title="Digital Identity"
            description="Self-sovereign identity and credential management"
            examples={["KYC/AML compliance", "Credential verification", "Privacy protection", "Cross-platform identity"]}
            icon="🆔"
          />
          <BlockchainUseCase
            title="Gaming & Metaverse"
            description="Play-to-earn games and virtual world economies"
            examples={["Game assets", "Virtual land", "In-game currencies", "Player rewards"]}
            icon="🎮"
          />
          <BlockchainUseCase
            title="Real Estate"
            description="Property tokenization and fractional ownership"
            examples={["Property tokens", "Fractional ownership", "Rental income", "Property trading"]}
            icon="🏠"
          />
          <BlockchainUseCase
            title="Healthcare"
            description="Secure patient data and medical record management"
            examples={["Patient records", "Drug traceability", "Clinical trials", "Insurance claims"]}
            icon="🏥"
          />
          <BlockchainUseCase
            title="Finance"
            description="Decentralized financial services and products"
            examples={["Cross-border payments", "Microfinance", "Insurance", "Credit scoring"]}
            icon="💳"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
          />
        </div>
      </section>

      <Pricing />
<<<<<<< HEAD

      <section className='mt-16'>
        <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
          Why Choose Our Blockchain Services?
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <BlockchainBenefitCard
            title='Security First'
            description='Comprehensive security audits and best practices for smart contracts'
            icon='🔒'
          />
          <BlockchainBenefitCard
            title='Multi-Chain Expertise'
            description='Experience across multiple blockchain platforms and networks'
            icon='⛓️'
          />
          <BlockchainBenefitCard
            title='Gas Optimization'
            description='Efficient smart contracts that minimize transaction costs'
            icon='⚡'
          />
          <BlockchainBenefitCard
            title='Regulatory Compliance'
            description='Understanding of regulatory requirements and compliance frameworks'
            icon='📋'
          />
          <BlockchainBenefitCard
            title='User Experience'
            description='Intuitive interfaces that make Web3 accessible to everyone'
            icon='👥'
          />
          <BlockchainBenefitCard
            title='Ongoing Support'
            description='Continuous maintenance and updates for your blockchain solutions'
            icon='🛠️'
=======
      
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Blockchain Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlockchainBenefitCard
            title="Security First"
            description="Comprehensive security audits and best practices for smart contracts"
            icon="🔒"
          />
          <BlockchainBenefitCard
            title="Multi-Chain Expertise"
            description="Experience across multiple blockchain platforms and networks"
            icon="⛓️"
          />
          <BlockchainBenefitCard
            title="Gas Optimization"
            description="Efficient smart contracts that minimize transaction costs"
            icon="⚡"
          />
          <BlockchainBenefitCard
            title="Regulatory Compliance"
            description="Understanding of regulatory requirements and compliance frameworks"
            icon="📋"
          />
          <BlockchainBenefitCard
            title="User Experience"
            description="Intuitive interfaces that make Web3 accessible to everyone"
            icon="👥"
          />
          <BlockchainBenefitCard
            title="Ongoing Support"
            description="Continuous maintenance and updates for your blockchain solutions"
            icon="🛠️"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
          />
        </div>
      </section>

      <CTASection />
    </div>
  );
}

<<<<<<< HEAD
function BlockchainServiceCard({
  title,
  description,
  features,
  price,
  icon,
}: {
=======
function BlockchainServiceCard({ title, description, features, price, icon }: {
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: string;
}) {
  return (
<<<<<<< HEAD
    <div className='bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300'>
      <div className='text-4xl mb-4'>{icon}</div>
      <h3 className='text-xl font-bold text-gray-900 mb-3'>{title}</h3>
      <p className='text-gray-600 mb-4'>{description}</p>
      <ul className='space-y-2 mb-4'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-center text-sm text-gray-600'>
            <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
=======
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
            {feature}
          </li>
        ))}
      </ul>
<<<<<<< HEAD
      <div className='text-lg font-semibold text-blue-600'>{price}</div>
=======
      <div className="text-lg font-semibold text-blue-600">{price}</div>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    </div>
  );
}

<<<<<<< HEAD
function BlockchainProcessStep({
  step,
  title,
  description,
}: {
=======
function BlockchainProcessStep({ step, title, description }: {
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  step: string;
  title: string;
  description: string;
}) {
  return (
<<<<<<< HEAD
    <div className='text-center'>
      <div className='w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4'>
        {step}
      </div>
      <h3 className='text-lg font-semibold text-gray-900 mb-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
=======
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    </div>
  );
}

<<<<<<< HEAD
function BlockchainTechStack({
  title,
  technologies,
}: {
=======
function BlockchainTechStack({ title, technologies }: {
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  title: string;
  technologies: string[];
}) {
  return (
<<<<<<< HEAD
    <div className='bg-white border border-gray-200 rounded-xl p-6'>
      <h3 className='text-lg font-semibold text-gray-900 mb-4'>{title}</h3>
      <div className='flex flex-wrap gap-2'>
        {technologies.map((tech, index) => (
          <span
            key={index}
            className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm'
          >
=======
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

<<<<<<< HEAD
function BlockchainUseCase({
  title,
  description,
  examples,
  icon,
}: {
=======
function BlockchainUseCase({ title, description, examples, icon }: {
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  title: string;
  description: string;
  examples: string[];
  icon: string;
}) {
  return (
<<<<<<< HEAD
    <div className='bg-white border border-gray-200 rounded-xl p-6'>
      <div className='text-3xl mb-4'>{icon}</div>
      <h3 className='text-lg font-semibold text-gray-900 mb-2'>{title}</h3>
      <p className='text-gray-600 mb-4'>{description}</p>
      <ul className='space-y-1'>
        {examples.map((example, index) => (
          <li key={index} className='text-sm text-gray-500'>
            • {example}
          </li>
=======
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-1">
        {examples.map((example, index) => (
          <li key={index} className="text-sm text-gray-500">• {example}</li>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
        ))}
      </ul>
    </div>
  );
}

<<<<<<< HEAD
function BlockchainBenefitCard({
  title,
  description,
  icon,
}: {
=======
function BlockchainBenefitCard({ title, description, icon }: {
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  title: string;
  description: string;
  icon: string;
}) {
  return (
<<<<<<< HEAD
    <div className='text-center'>
      <div className='text-4xl mb-4'>{icon}</div>
      <h3 className='text-lg font-semibold text-gray-900 mb-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
=======
    <div className="text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    </div>
  );
}

function Pricing() {
  return (
<<<<<<< HEAD
    <div className='bg-white rounded-2xl p-8 mb-16'>
      <h2 className='text-3xl font-bold text-gray-900 text-center mb-8'>
        Blockchain Development Pricing
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <PricingCard
          name='Smart Contract'
          price='$8,000'
          period='project'
          description='Basic smart contract development and deployment'
          features={[
            'Single contract',
            'Basic testing',
            'Deployment',
            'Documentation',
            '1 month support',
          ]}
          popular={false}
        />
        <PricingCard
          name='dApp Development'
          price='$25,000'
          period='project'
          description='Complete decentralized application with frontend'
          features={[
            'Smart contracts',
            'Frontend development',
            'Web3 integration',
            'Testing & auditing',
            '3 months support',
          ]}
          popular={true}
        />
        <PricingCard
          name='Enterprise Solution'
          price='Custom'
          period=''
          description='Custom blockchain solutions for enterprise needs'
          features={[
            'Custom development',
            'Multi-chain support',
            'Enterprise integration',
            'Dedicated team',
            'Ongoing support',
          ]}
=======
    <div className="bg-white rounded-2xl p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Blockchain Development Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          name="Smart Contract"
          price="$8,000"
          period="project"
          description="Basic smart contract development and deployment"
          features={["Single contract", "Basic testing", "Deployment", "Documentation", "1 month support"]}
          popular={false}
        />
        <PricingCard
          name="dApp Development"
          price="$25,000"
          period="project"
          description="Complete decentralized application with frontend"
          features={["Smart contracts", "Frontend development", "Web3 integration", "Testing & auditing", "3 months support"]}
          popular={true}
        />
        <PricingCard
          name="Enterprise Solution"
          price="Custom"
          period=""
          description="Custom blockchain solutions for enterprise needs"
          features={["Custom development", "Multi-chain support", "Enterprise integration", "Dedicated team", "Ongoing support"]}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
          popular={false}
        />
      </div>
    </div>
  );
}

<<<<<<< HEAD
function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular,
}: {
=======
function PricingCard({ name, price, period, description, features, popular }: {
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
<<<<<<< HEAD
    <div
      className={`relative border-2 rounded-xl p-8 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
    >
      {popular && (
        <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
          <span className='bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold'>
            Most Popular
          </span>
        </div>
      )}
      <h3 className='text-2xl font-bold text-gray-900 mb-2'>{name}</h3>
      <p className='text-gray-600 mb-4'>{description}</p>
      <div className='mb-6'>
        <span className='text-4xl font-bold text-gray-900'>{price}</span>
        {period && <span className='text-gray-600'>/{period}</span>}
      </div>
      <ul className='space-y-3 mb-8'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-center'>
            <svg
              className='w-5 h-5 text-green-500 mr-3 flex-shrink-0'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
            <span className='text-gray-700'>{feature}</span>
=======
    <div className={`relative border-2 rounded-xl p-8 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        {period && <span className="text-gray-600">/{period}</span>}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
          </li>
        ))}
      </ul>
      <a
<<<<<<< HEAD
        href='tel:+13024640950'
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
=======
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function CTASection() {
  return (
<<<<<<< HEAD
    <div className='bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-center'>
      <h2 className='text-3xl font-bold text-white mb-4'>
        Ready to Build on Blockchain?
      </h2>
      <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
        Let's discuss your blockchain project and create a custom solution that
        drives innovation and value.
      </p>
      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <a
          href='tel:+13024640950'
          className='bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg'
=======
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Ready to Build on Blockchain?</h2>
      <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
        Let&apos;s discuss your blockchain project and create a custom solution that drives innovation and value.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
        >
          Call +1 302 464 0950
        </a>
        <a
<<<<<<< HEAD
          href='mailto:kleber@ziontechgroup.com'
          className='border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg'
=======
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
        >
          Email Us
        </a>
      </div>
<<<<<<< HEAD
      <div className='mt-6 text-sm text-blue-100'>
=======
      <div className="mt-6 text-sm text-blue-100">
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Blockchain Services Inquiry"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Start Your Blockchain Project
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>
    </div>
  );
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-6c29
=======
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
