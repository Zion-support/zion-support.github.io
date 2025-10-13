'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Coins, Shield, Zap, ArrowRight, CheckCircle, Star, Users, Globe, Lock } from 'lucide-react';

export default function BlockchainWeb3Page() {
  const web3Features = [
    {
      icon: <Link className="w-8 h-8" />,
      title: "Smart Contracts",
      description: "Deploy and manage smart contracts with automated execution and transparent transactions.",
      features: ["Automated Execution", "Transparent Transactions", "Gas Optimization", "Security Audits"]
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "DeFi Solutions",
      description: "Build decentralized finance applications with lending, borrowing, and trading capabilities.",
      features: ["Lending Protocols", "DEX Integration", "Yield Farming", "Liquidity Pools"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "NFT Platforms",
      description: "Create and manage NFT marketplaces with minting, trading, and royalty distribution.",
      features: ["NFT Minting", "Marketplace Creation", "Royalty Management", "Metadata Storage"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "dApp Development",
      description: "Build decentralized applications with Web3 integration and user-friendly interfaces.",
      features: ["Web3 Integration", "Wallet Connectivity", "User Authentication", "Frontend Development"]
    }
  ];

  const benefits = [
    {
      metric: "99.9%",
      description: "Uptime guarantee",
      icon: <Shield className="w-6 h-6" />
    },
    {
      metric: "24/7",
      description: "Network availability",
      icon: <Globe className="w-6 h-6" />
    },
    {
      metric: "100%",
      description: "Transparency",
      icon: <Lock className="w-6 h-6" />
    },
    {
      metric: "50%",
      description: "Cost reduction",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Basic Web3 development for small projects",
      features: [
        "Smart contract development",
        "Basic dApp creation",
        "Standard support",
        "Up to 3 developers",
        "1 year hosting",
        "Basic security audit"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Advanced Web3 solutions for growing businesses",
      features: [
        "Advanced smart contracts",
        "Full dApp development",
        "Priority support",
        "Up to 10 developers",
        "3 years hosting",
        "Comprehensive security audit",
        "DeFi integration",
        "NFT marketplace"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "Complete Web3 ecosystem for large organizations",
      features: [
        "Everything in Professional",
        "Custom blockchain solutions",
        "Dedicated support team",
        "Unlimited developers",
        "Unlimited hosting",
        "Full security audit",
        "White-label solutions",
        "On-chain governance"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Finance",
      title: "DeFi Lending Platform",
      description: "Built a decentralized lending platform with automated interest rates and collateral management.",
      results: "Processed $50M+ in loans with 0% default rate"
    },
    {
      industry: "Gaming",
      title: "NFT Gaming Platform",
      description: "Created a play-to-earn gaming platform with NFT characters and in-game assets.",
      results: "1M+ active users and $10M+ in NFT sales"
    },
    {
      industry: "Real Estate",
      title: "Property Tokenization",
      description: "Tokenized real estate properties for fractional ownership and trading.",
      results: "Enabled $100M+ in property investments"
    },
    {
      industry: "Supply Chain",
      title: "Transparent Tracking",
      description: "Implemented blockchain-based supply chain tracking for product authenticity.",
      results: "Reduced fraud by 90% and improved traceability"
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "CTO, DeFi Protocol",
      content: "Zion's Web3 development team delivered an exceptional DeFi platform. The smart contracts are secure and the user experience is outstanding.",
      rating: 5
    },
    {
      name: "Maria Santos",
      role: "CEO, NFT Marketplace",
      content: "The NFT marketplace they built for us has generated millions in sales. The platform is robust and user-friendly.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Founder, Gaming Studio",
      content: "Their blockchain gaming solutions are cutting-edge. We've seen incredible user engagement and revenue growth.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blockchain & Web3 - Decentralized Solutions | Zion Tech Group</title>
        <meta name="description" content="Build the future with our blockchain and Web3 solutions. Smart contracts, DeFi, NFTs, and dApp development for the decentralized web." />
        <meta name="keywords" content="blockchain, Web3, smart contracts, DeFi, NFTs, dApp development, decentralized applications, cryptocurrency" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-500/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-300 text-sm font-medium mb-6">
                <Link className="w-4 h-4 mr-2" />
                Next-Generation Blockchain Solutions
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Blockchain & Web3
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Build the future of the internet with our comprehensive blockchain and Web3 solutions. 
                Create decentralized applications, DeFi protocols, and NFT platforms that revolutionize industries.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25">
                  Start Building
                  <ArrowRight className="inline w-5 h-5 ml-2" />
                </button>
                <button className="border border-yellow-500 text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Web3 <span className="text-yellow-400">Advantages</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of decentralized technology with our Web3 solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-yellow-500/50 transition-all duration-300">
                      <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                        {benefit.icon}
                      </div>
                      <div className="text-4xl font-bold text-white mb-2">{benefit.metric}</div>
                      <div className="text-gray-300">{benefit.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive <span className="text-amber-400">Web3 Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From smart contracts to full dApp development, we provide end-to-end Web3 solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {web3Features.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-yellow-500/50 transition-all duration-300">
                    <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-amber-400 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Real-World <span className="text-yellow-400">Blockchain Applications</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how we're helping businesses leverage blockchain technology for innovation and growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium mr-4">
                        {useCase.industry}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                      <p className="text-amber-300 font-medium">🚀 {useCase.results}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Web3 <span className="text-yellow-400">Development Plans</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the Web3 development plan that matches your project requirements.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative ${plan.popular ? 'scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 h-full ${
                    plan.popular ? 'border-yellow-500/50' : 'border-slate-700/50'
                  }`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-gray-400">{plan.period}</span>
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white hover:from-yellow-600 hover:to-amber-700' 
                        : 'border border-slate-600 text-white hover:bg-slate-700'
                    }`}>
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by <span className="text-yellow-400">Web3 Pioneers</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our blockchain and Web3 development services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-yellow-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-yellow-500/10 to-amber-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build the <span className="text-yellow-400">Future of Web3</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the decentralized revolution and create innovative Web3 solutions that transform industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25">
                Start Your Project
                <ArrowRight className="inline w-5 h-5 ml-2" />
              </button>
              <button className="border border-yellow-500 text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 <a href="mailto:kleber@ziontechgroup.com" className="hover:text-yellow-400">kleber@ziontechgroup.com</a> | 
              📞 <a href="tel:+13024640950" className="hover:text-yellow-400">+1 302 464 0950</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}