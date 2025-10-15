import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BlockchainSolutionsPage: React.FC = () => {
  const features = [
    "Smart contract development and auditing",
    "DeFi protocol design and implementation",
    "NFT marketplace and tokenization solutions",
    "Blockchain integration with existing systems",
    "Cryptocurrency wallet development",
    "Supply chain traceability solutions",
    "Identity verification and KYC systems",
    "Cross-chain interoperability solutions",
    "Blockchain consulting and strategy",
    "Security audits and penetration testing"
  ];

  const solutions = [
    {
      title: "Smart Contracts",
      description: "Secure, audited smart contracts for any blockchain platform",
      icon: "📜",
      price: "Starting at $10,000"
    },
    {
      title: "DeFi Protocols",
      description: "Decentralized finance solutions and yield farming platforms",
      icon: "🏦",
      price: "Starting at $25,000"
    },
    {
      title: "NFT Marketplaces",
      description: "Custom NFT platforms with minting and trading capabilities",
      icon: "🎨",
      price: "Starting at $15,000"
    },
    {
      title: "Blockchain Integration",
      description: "Integrate blockchain technology with your existing systems",
      icon: "🔗",
      price: "Starting at $20,000"
    }
  ];

  const pricing = [
    {
      name: "Basic Blockchain",
      price: "$5,000",
      description: "Simple smart contract or basic integration",
      features: [
        "Basic smart contract",
        "Simple integration",
        "Basic documentation",
        "30 days support",
        "Basic testing"
      ],
      popular: false
    },
    {
      name: "Professional Blockchain",
      price: "$15,000",
      description: "Advanced blockchain solution with comprehensive features",
      features: [
        "Advanced smart contracts",
        "Full integration",
        "Comprehensive documentation",
        "90 days support",
        "Security audit",
        "Performance optimization",
        "API development"
      ],
      popular: true
    },
    {
      name: "Enterprise Blockchain",
      price: "$50,000",
      description: "Complete blockchain ecosystem for large organizations",
      features: [
        "Custom blockchain solution",
        "Full ecosystem development",
        "Enterprise integration",
        "1 year support",
        "Comprehensive security audit",
        "24/7 monitoring",
        "SLA guarantee",
        "Dedicated team"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional blockchain development services. Smart contracts, DeFi protocols, NFT marketplaces, and blockchain integration solutions." />
        <meta name="keywords" content="blockchain development, smart contracts, DeFi, NFT, cryptocurrency, blockchain consulting, Web3" />
        <link rel="canonical" href="https://ziontechgroup.com/blockchain-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Blockchain Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge blockchain technology. 
              Smart contracts, DeFi protocols, and Web3 solutions that drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Start Your Blockchain Project
              </button>
              <button className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-400 hover:text-black transition-all duration-300">
                View Case Studies
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-2">100+</div>
                <div className="text-gray-300">Blockchain Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">$50M+</div>
                <div className="text-gray-300">Value Secured</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">Zero</div>
                <div className="text-gray-300">Security Breaches</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive <span className="text-indigo-400">Blockchain Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end blockchain solutions for every business need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-purple-400">Blockchain Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized blockchain development and consulting services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-5xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <div className="text-purple-400 font-semibold">{solution.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transparent <span className="text-indigo-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the blockchain development package that fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-indigo-400 ring-2 ring-indigo-400/50' 
                    : 'border-white/10'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600'
                      : 'border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-black'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build on Blockchain?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our blockchain experts help you create innovative solutions that transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                  Start Your Project
                </button>
                <Link 
                  to="/contact" 
                  className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-400 hover:text-black transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
                <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
                <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlockchainSolutionsPage;