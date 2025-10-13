'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  DocumentTextIcon,
  LightBulbIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

export default function AIBlockchainSolutionsPage() {
  const blockchainServices = [
    {
      title: "AI-Powered Smart Contracts",
      description: "Intelligent smart contracts with AI-driven automation, self-executing conditions, and adaptive logic for complex business processes.",
      icon: DocumentTextIcon,
      features: [
        "AI-driven contract logic",
        "Automated execution",
        "Self-adapting conditions",
        "Multi-blockchain support",
        "Gas optimization",
        "Security auditing"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "$4,500/month",
      setupFee: "$15,000",
      benefits: ["99.9% uptime", "Zero human error", "Cost reduction"],
      useCases: ["DeFi protocols", "Supply chain", "Insurance automation"],
      href: "/ai-smart-contracts"
    },
    {
      title: "AI Blockchain Analytics",
      description: "Advanced blockchain data analysis with AI-powered insights, transaction monitoring, and predictive analytics for crypto markets.",
      icon: ChartBarIcon,
      features: [
        "Real-time transaction analysis",
        "Market trend prediction",
        "Anomaly detection",
        "Portfolio optimization",
        "Risk assessment",
        "Compliance monitoring"
      ],
      color: "from-green-500 to-emerald-500",
      price: "$3,200/month",
      setupFee: "$12,000",
      benefits: ["Real-time insights", "Predictive accuracy", "Risk mitigation"],
      useCases: ["Crypto trading", "DeFi protocols", "Market analysis"],
      href: "/ai-blockchain-analytics"
    },
    {
      title: "AI NFT Marketplace",
      description: "Intelligent NFT marketplace with AI-powered recommendations, automated pricing, and smart curation for digital assets.",
      icon: GlobeAltIcon,
      features: [
        "AI content curation",
        "Automated pricing",
        "Smart recommendations",
        "Fraud detection",
        "Royalty management",
        "Cross-chain support"
      ],
      color: "from-purple-500 to-pink-500",
      price: "$2,800/month",
      setupFee: "$10,000",
      benefits: ["Increased sales", "Fraud prevention", "User engagement"],
      useCases: ["Digital art", "Gaming assets", "Collectibles"],
      href: "/ai-nft-marketplace"
    },
    {
      title: "AI DeFi Protocol",
      description: "Decentralized finance protocol with AI-powered yield optimization, automated trading, and risk management.",
      icon: CurrencyDollarIcon,
      features: [
        "Yield optimization",
        "Automated trading",
        "Risk management",
        "Liquidity provision",
        "Cross-protocol integration",
        "Governance automation"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "$5,500/month",
      setupFee: "$20,000",
      benefits: ["Higher yields", "Risk reduction", "Automated management"],
      useCases: ["Yield farming", "Liquidity mining", "Automated trading"],
      href: "/ai-defi-protocol"
    },
    {
      title: "AI Supply Chain Tracking",
      description: "Blockchain-based supply chain solution with AI-powered tracking, authenticity verification, and automated compliance.",
      icon: ServerIcon,
      features: [
        "End-to-end tracking",
        "Authenticity verification",
        "Automated compliance",
        "Quality assurance",
        "Sustainability monitoring",
        "Real-time alerts"
      ],
      color: "from-orange-500 to-red-500",
      price: "$3,800/month",
      setupFee: "$15,000",
      benefits: ["Transparency", "Fraud prevention", "Compliance automation"],
      useCases: ["Food safety", "Pharmaceuticals", "Luxury goods"],
      href: "/ai-supply-chain"
    },
    {
      title: "AI Identity Verification",
      description: "Decentralized identity solution with AI-powered verification, privacy protection, and seamless authentication.",
      icon: ShieldCheckIcon,
      features: [
        "Biometric verification",
        "Privacy protection",
        "Zero-knowledge proofs",
        "Multi-factor authentication",
        "Cross-platform integration",
        "Compliance support"
      ],
      color: "from-teal-500 to-green-500",
      price: "$2,200/month",
      setupFee: "$8,000",
      benefits: ["Enhanced security", "Privacy protection", "Seamless UX"],
      useCases: ["KYC/AML", "Access control", "Digital identity"],
      href: "/ai-identity-verification"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered blockchain solutions including smart contracts, DeFi protocols, NFT marketplaces, and supply chain tracking. Transform your business with cutting-edge blockchain technology." />
        <meta name="keywords" content="AI blockchain, smart contracts, DeFi, NFT marketplace, supply chain, cryptocurrency, blockchain solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              AI Blockchain Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Revolutionary blockchain technology powered by artificial intelligence
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI-powered blockchain solutions including smart contracts, 
              DeFi protocols, NFT marketplaces, and supply chain tracking. Experience the future of decentralized technology.
            </p>
          </div>
        </div>
      </section>

      {/* Blockchain Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blockchainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-green-400">{service.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Setup fee: <span className="text-yellow-400 font-semibold">{service.setupFee}</span>
                    </div>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={service.href}
                      className={`flex-1 inline-flex items-center justify-center gap-2 text-${service.color.split(' ')[1].split('-')[1]}-400 hover:text-${service.color.split(' ')[1].split('-')[1]}-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg`}
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Blockchain Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Blockchain Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology combined with enterprise-grade security and scalability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered</h3>
              <p className="text-gray-300">
                Advanced AI algorithms optimize blockchain operations for maximum efficiency and security.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security with multi-layer encryption and advanced threat protection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <GlobeAltIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Multi-Chain Support</h3>
              <p className="text-gray-300">
                Support for multiple blockchain networks including Ethereum, Polygon, and BSC.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Architecture</h3>
              <p className="text-gray-300">
                Built to handle enterprise-scale transactions with high throughput and low latency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Revolutionize with AI Blockchain?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join the future of decentralized technology with our AI-powered blockchain solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}