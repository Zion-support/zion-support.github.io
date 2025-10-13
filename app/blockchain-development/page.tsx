import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  LinkIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  LockClosedIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const BlockchainDevelopmentPage = () => {
  const features = [
    {
      icon: LinkIcon,
      title: "Smart Contract Development",
      description: "Secure, audited smart contracts for DeFi, NFTs, and enterprise applications with comprehensive testing and deployment."
    },
    {
      icon: ShieldCheckIcon,
      title: "Security Audits",
      description: "Comprehensive security audits and penetration testing to ensure your blockchain solutions are bulletproof."
    },
    {
      icon: GlobeAltIcon,
      title: "DApp Development",
      description: "Full-stack decentralized applications with intuitive user interfaces and seamless blockchain integration."
    },
    {
      icon: CpuChipIcon,
      title: "Custom Blockchain Solutions",
      description: "Tailored blockchain networks and protocols designed for your specific business requirements and use cases."
    },
    {
      icon: ChartBarIcon,
      title: "DeFi Platform Development",
      description: "Complete DeFi ecosystems including DEXs, lending protocols, yield farming, and liquidity management systems."
    },
    {
      icon: DocumentTextIcon,
      title: "NFT Marketplace Development",
      description: "End-to-end NFT platforms with minting, trading, auction, and royalty distribution capabilities."
    }
  ];

  const services = [
    "Smart Contract Development & Auditing",
    "DeFi Platform Development",
    "NFT Marketplace Creation",
    "Custom Blockchain Networks",
    "DApp Frontend & Backend",
    "Token Development & ICOs",
    "Blockchain Integration Services",
    "Cryptocurrency Wallet Development",
    "Supply Chain Tracking Solutions",
    "Identity Management Systems"
  ];

  const pricingPlans = [
    {
      name: "Smart Contract",
      price: "$5,000",
      period: "starting from",
      description: "Basic smart contract development",
      features: [
        "Single smart contract",
        "Basic security audit",
        "Testnet deployment",
        "Documentation",
        "2 weeks delivery"
      ]
    },
    {
      name: "DApp Development",
      price: "$15,000",
      period: "starting from",
      description: "Complete DApp solution",
      features: [
        "Smart contracts",
        "Frontend development",
        "Backend integration",
        "Security audit",
        "Mainnet deployment",
        "4-6 weeks delivery"
      ]
    },
    {
      name: "Enterprise Solution",
      price: "$50,000",
      period: "starting from",
      description: "Custom blockchain platform",
      features: [
        "Custom blockchain",
        "Multiple smart contracts",
        "Full-stack application",
        "Comprehensive security",
        "Ongoing support",
        "8-12 weeks delivery"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blockchain Development Services - Zion Tech Group</title>
        <meta name="description" content="Expert blockchain development services including smart contracts, DeFi platforms, NFT marketplaces, and custom blockchain solutions." />
        <meta name="keywords" content="blockchain development, smart contracts, DeFi, NFT marketplace, DApp development, cryptocurrency" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <LinkIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Blockchain Development
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge blockchain solutions. From smart contracts to DeFi platforms, we build secure, scalable, and innovative blockchain applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Get Free Consultation
            </button>
            <button className="border border-purple-500 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Blockchain Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Comprehensive Blockchain Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-slate-800/30 rounded-lg p-4">
                <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Transparent Development Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                plan.name === 'DApp Development' 
                  ? 'border-purple-500 ring-2 ring-purple-500/20' 
                  : 'border-slate-700'
              }`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.name === 'DApp Development'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                    : 'border border-slate-600 text-gray-300 hover:border-purple-500 hover:text-white'
                }`}>
                  {plan.name === 'DApp Development' ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-12 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Blockchain Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and create a custom blockchain solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Start Your Project
            </button>
            <button className="border border-purple-500 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
              Contact Us
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Free consultation • Custom quotes • 24/7 support
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlockchainDevelopmentPage;