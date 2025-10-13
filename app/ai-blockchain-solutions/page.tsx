'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  GlobeAltIcon,
  ChartBarIcon,
  LightBulbIcon,
  CogIcon
} from '@heroicons/react/24/outline';

export default function AIBlockchainSolutionsPage() {
  const blockchainSolutions = [
    {
      title: "AI-Powered Smart Contracts",
      description: "Intelligent smart contracts that adapt and optimize themselves using AI algorithms for enhanced security, efficiency, and automation.",
      icon: CpuChipIcon,
      features: [
        "Self-optimizing contract logic",
        "AI-powered security auditing",
        "Automated contract deployment",
        "Dynamic parameter adjustment",
        "Predictive contract behavior",
        "Gas optimization algorithms",
        "Multi-chain compatibility",
        "Real-time monitoring"
      ],
      color: "from-purple-500 to-pink-500",
      price: "$3,999/month",
      setupFee: "$12,000",
      benefits: ["40% gas savings", "Enhanced security", "Automated optimization"],
      useCases: ["DeFi protocols", "Supply chain", "Insurance contracts"],
      href: "/ai-smart-contracts"
    },
    {
      title: "AI Blockchain Analytics",
      description: "Advanced blockchain data analysis platform that provides insights into transaction patterns, market trends, and network behavior using AI.",
      icon: ChartBarIcon,
      features: [
        "Transaction pattern analysis",
        "Market trend prediction",
        "Anomaly detection",
        "Network health monitoring",
        "Risk assessment algorithms",
        "Real-time dashboards",
        "Custom analytics models",
        "API integration"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "$2,499/month",
      setupFee: "$8,000",
      benefits: ["Real-time insights", "Predictive analytics", "Risk mitigation"],
      useCases: ["Trading analysis", "Compliance monitoring", "Market research"],
      href: "/ai-blockchain-analytics"
    },
    {
      title: "AI DeFi Protocol Optimizer",
      description: "Intelligent DeFi protocol management system that optimizes yield farming, liquidity provision, and automated trading strategies.",
      icon: CurrencyDollarIcon,
      features: [
        "Automated yield optimization",
        "Liquidity management",
        "Risk-adjusted strategies",
        "Cross-protocol arbitrage",
        "Impermanent loss protection",
        "Portfolio rebalancing",
        "Performance analytics",
        "Multi-chain support"
      ],
      color: "from-green-500 to-emerald-500",
      price: "$4,499/month",
      setupFee: "$15,000",
      benefits: ["30% higher yields", "Risk reduction", "Automated strategies"],
      useCases: ["Yield farming", "Liquidity provision", "DeFi trading"],
      href: "/ai-defi-optimizer"
    },
    {
      title: "AI NFT Marketplace Platform",
      description: "Intelligent NFT marketplace with AI-powered features including automated pricing, rarity analysis, and smart recommendation systems.",
      icon: GlobeAltIcon,
      features: [
        "AI-powered pricing algorithms",
        "Rarity and authenticity verification",
        "Smart recommendation engine",
        "Automated royalty management",
        "Cross-chain NFT support",
        "Market trend analysis",
        "Creator analytics",
        "Community features"
      ],
      color: "from-rose-500 to-pink-500",
      price: "$2,999/month",
      setupFee: "$10,000",
      benefits: ["Optimal pricing", "Enhanced discovery", "Creator monetization"],
      useCases: ["Digital art", "Gaming NFTs", "Collectibles"],
      href: "/ai-nft-marketplace"
    },
    {
      title: "AI Blockchain Security Suite",
      description: "Comprehensive blockchain security solution with AI-powered threat detection, vulnerability scanning, and automated security monitoring.",
      icon: ShieldCheckIcon,
      features: [
        "AI threat detection",
        "Smart contract auditing",
        "Vulnerability scanning",
        "Real-time monitoring",
        "Incident response automation",
        "Security compliance",
        "Penetration testing",
        "Risk assessment"
      ],
      color: "from-red-500 to-orange-500",
      price: "$3,499/month",
      setupFee: "$12,000",
      benefits: ["99.9% security", "Automated protection", "Compliance ready"],
      useCases: ["Protocol security", "Exchange protection", "Wallet security"],
      href: "/ai-blockchain-security"
    },
    {
      title: "AI Cross-Chain Bridge",
      description: "Intelligent cross-chain bridge with AI-powered routing, optimal fee calculation, and automated liquidity management across multiple blockchains.",
      icon: CogIcon,
      features: [
        "AI-powered routing",
        "Optimal fee calculation",
        "Automated liquidity management",
        "Multi-chain support",
        "Real-time monitoring",
        "Slippage optimization",
        "Security verification",
        "API integration"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "$2,799/month",
      setupFee: "$9,000",
      benefits: ["Lower fees", "Faster transfers", "Enhanced security"],
      useCases: ["Cross-chain swaps", "Liquidity provision", "DeFi integration"],
      href: "/ai-cross-chain-bridge"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered blockchain solutions including smart contracts, DeFi optimization, NFT marketplaces, and cross-chain bridges. Transform your blockchain operations with artificial intelligence." />
        <meta name="keywords" content="AI blockchain, smart contracts, DeFi, NFT marketplace, blockchain analytics, cross-chain, cryptocurrency, Web3" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Blockchain Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Revolutionize blockchain with artificial intelligence
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our cutting-edge AI blockchain solutions combine the power of artificial intelligence 
              with blockchain technology to create intelligent, self-optimizing, and secure 
              decentralized applications and protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Blockchain Solutions Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blockchainSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div 
                  key={solution.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-green-400">{solution.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Setup fee: <span className="text-yellow-400 font-semibold">{solution.setupFee}</span>
                    </div>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
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
                      {solution.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={solution.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-pink-700 transition-all"
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
              Leading the convergence of AI and blockchain technology for next-generation Web3 applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Intelligence</h3>
              <p className="text-gray-300">
                Advanced AI algorithms that make blockchain applications smarter, more efficient, and self-optimizing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enhanced Security</h3>
              <p className="text-gray-300">
                AI-powered security features that provide advanced threat detection and automated protection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-time Optimization</h3>
              <p className="text-gray-300">
                Continuous optimization and monitoring that adapts to market conditions and user behavior.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <GlobeAltIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Multi-Chain Support</h3>
              <p className="text-gray-300">
                Seamless integration across multiple blockchain networks for maximum flexibility and reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Blockchain with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Build the next generation of intelligent blockchain applications with our AI-powered solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Blockchain Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Blockchain Demo
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