import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Code, Shield, Zap, CheckCircle, ArrowRight, Star, Clock, Users, Globe } from 'lucide-react';

const BlockchainDevelopmentSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: <Link className="w-6 h-6" />,
      title: "Smart Contract Development",
      description: "Custom smart contracts for DeFi, NFTs, and enterprise blockchain solutions"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "DApp Development",
      description: "Decentralized applications with seamless user experience and security"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Audits",
      description: "Comprehensive security audits and penetration testing for blockchain projects"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Blockchain Integration",
      description: "Seamless integration of blockchain technology into existing business systems"
    }
  ];

  const services = [
    "Smart Contract Development",
    "DeFi Protocol Development",
    "NFT Marketplace Creation",
    "DApp Development",
    "Blockchain Security Audits",
    "Token Development",
    "Wallet Integration",
    "Cross-chain Solutions",
    "Enterprise Blockchain",
    "Consensus Mechanism Design",
    "Blockchain Consulting",
    "Web3 Integration"
  ];

  const pricingPlans = [
    {
      name: "Startup",
      price: "$2,999",
      period: "/project",
      description: "Perfect for new blockchain projects",
      features: [
        "Basic smart contract development",
        "Simple DApp creation",
        "Security audit",
        "Documentation",
        "2 weeks delivery",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/project", 
      description: "Ideal for growing businesses",
      features: [
        "Advanced smart contracts",
        "Complex DApp development",
        "Comprehensive security audit",
        "UI/UX design",
        "4 weeks delivery",
        "Priority support",
        "Testing & deployment",
        "Maintenance included"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "/project",
      description: "For large organizations",
      features: [
        "Custom blockchain solutions",
        "Enterprise DApp suite",
        "Full security suite",
        "Custom UI/UX",
        "8 weeks delivery",
        "24/7 dedicated support",
        "White-label solutions",
        "SLA guarantee",
        "Ongoing maintenance"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Decentralized and secure solutions",
    "Transparent and immutable records",
    "Reduced transaction costs",
    "Enhanced security and trust",
    "Global accessibility",
    "Smart contract automation",
    "Tokenization capabilities",
    "Future-proof technology"
  ];

  return (
    <>
      <Helmet>
        <title>Blockchain Development Solutions - Zion Tech Group | Web3 Development</title>
        <meta name="description" content="Professional blockchain development services including smart contracts, DApps, DeFi protocols, and NFT marketplaces. Transform your business with Web3 technology." />
        <meta name="keywords" content="blockchain development, smart contracts, DApp development, DeFi, NFT, Web3, cryptocurrency, token development" />
        <meta property="og:title" content="Blockchain Development Solutions - Zion Tech Group" />
        <meta property="og:description" content="Professional blockchain and Web3 development services" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Blockchain <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Development Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with cutting-edge blockchain technology. From smart contracts to DeFi protocols, 
                we build secure, scalable, and innovative Web3 solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Your Project
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Blockchain Development Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive blockchain solutions for the decentralized future
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Blockchain Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete blockchain development and consulting services
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300 group">
                  <div className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    {service}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Blockchain Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with blockchain technology advantages
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center hover:bg-cyan-500/20 transition-all duration-300 group">
                  <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Development Packages</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect blockchain development package for your project
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
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
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
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

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
                <div className="text-gray-300 text-lg">Blockchain Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300 text-lg">Smart Contracts</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-lg">Security Score</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-lg">Expert Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Build the Future with Blockchain?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Transform your business with cutting-edge blockchain technology. Start your Web3 journey today and unlock new possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Your Project
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Blockchain Experts
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlockchainDevelopmentSolutionsPage;