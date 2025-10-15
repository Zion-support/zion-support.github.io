import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, CheckCircle, ArrowRight, Star, Users, Award, DollarSign, Lock } from 'lucide-react';

const AiSmartContractsPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI-Powered Security Audits",
      description: "Automated smart contract vulnerability detection using advanced AI algorithms"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Auto-Execution Logic",
      description: "Intelligent contract execution based on predefined conditions and market data"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Multi-Chain Support",
      description: "Deploy and manage contracts across Ethereum, Polygon, BSC, and other networks"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Governance Integration",
      description: "Built-in DAO governance mechanisms for decentralized decision making"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small projects and startups",
      features: [
        "Up to 5 smart contracts",
        "Basic AI security audit",
        "Ethereum & Polygon support",
        "Email support",
        "Standard templates"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 smart contracts",
        "Advanced AI security audit",
        "Multi-chain support",
        "Priority support",
        "Custom templates",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large-scale operations",
      features: [
        "Unlimited smart contracts",
        "Premium AI security audit",
        "All blockchain networks",
        "24/7 dedicated support",
        "Custom development",
        "Advanced analytics",
        "White-label solution"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "DeFi Protocols",
      description: "Automated yield farming, liquidity provision, and token swapping contracts",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: "NFT Marketplaces",
      description: "Smart contracts for minting, trading, and royalty distribution",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Supply Chain",
      description: "Track and verify product authenticity through blockchain",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Insurance",
      description: "Automated claims processing and payouts based on real-world data",
      icon: <Lock className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Smart Contracts - Zion Tech Group | Blockchain Automation Solutions</title>
        <meta name="description" content="Revolutionary AI-powered smart contracts for DeFi, NFTs, and enterprise applications. Automated security audits, multi-chain support, and intelligent execution." />
        <meta name="keywords" content="ai smart contracts, blockchain, defi, nft, ethereum, polygon, automated security, smart contract audit" />
        <meta property="og:title" content="AI Smart Contracts - Zion Tech Group" />
        <meta property="og:description" content="AI-powered smart contract solutions for modern blockchain applications" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-smart-contracts" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Smart Contracts</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Revolutionary blockchain automation powered by artificial intelligence. 
                Deploy secure, intelligent smart contracts across multiple networks with automated security audits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful AI Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to create, deploy, and manage smart contracts with unprecedented security and efficiency
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Real-World Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI smart contracts are powering the next generation of blockchain applications
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-center">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your smart contract needs. All plans include our AI security audit technology.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy AI Smart Contracts?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join hundreds of projects already using our AI-powered smart contract platform. 
                Start your free trial today and experience the future of blockchain automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiSmartContractsPage;