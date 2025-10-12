import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Globe, CheckCircle } from 'lucide-react';
import Layout from '../layout';

export default function BlockchainWeb3Page() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Smart Contract Development',
      description: 'Secure, audited smart contracts for DeFi, NFTs, and enterprise blockchain solutions'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'DeFi Solutions',
      description: 'Decentralized finance protocols, yield farming, and liquidity management systems'
    },
    {
      icon: <Globe className="w-6 h-6 text-yellow-400" />,
      title: 'Web3 Integration',
      description: 'Seamless integration of Web3 technologies into existing applications and platforms'
    },
    {
      icon: <ArrowRight className="w-6 h-6 text-green-400" />,
      title: 'NFT Platforms',
      description: 'Custom NFT marketplaces, minting platforms, and digital asset management systems'
    }
  ];

  const services = [
    {
      category: 'Blockchain Development',
      items: ['Smart Contracts', 'DApp Development', 'Token Creation', 'Blockchain Integration', 'Consensus Mechanisms', 'Cross-chain Solutions']
    },
    {
      category: 'DeFi Solutions',
      items: ['DEX Development', 'Yield Farming', 'Liquidity Pools', 'Staking Platforms', 'Lending Protocols', 'Insurance Products']
    },
    {
      category: 'NFT & Metaverse',
      items: ['NFT Marketplaces', 'Minting Platforms', 'Virtual Worlds', 'Gaming Integration', 'Digital Identity', 'Asset Management']
    },
    {
      category: 'Enterprise Solutions',
      items: ['Private Blockchains', 'Supply Chain', 'Identity Management', 'Document Verification', 'Payment Systems', 'Compliance Tools']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$5,000',
      period: '/project',
      description: 'Perfect for small blockchain projects',
      features: [
        'Basic smart contract',
        'Simple DApp',
        'Token creation',
        'Basic security audit',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$15,000',
      period: '/project',
      description: 'Ideal for complex DeFi projects',
      features: [
        'Advanced smart contracts',
        'Full DApp suite',
        'DeFi integration',
        'Comprehensive audit',
        'Frontend development',
        'Testing & deployment'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$50,000',
      period: '/project',
      description: 'For large-scale blockchain solutions',
      features: [
        'Custom blockchain',
        'Multi-chain support',
        'Enterprise integration',
        'Full security audit',
        'Ongoing support',
        'Custom features'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'CryptoVentures',
      content: 'The DeFi platform they built for us has processed over $10M in transactions. Rock solid and secure.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'NFT Marketplace',
      content: 'Our NFT platform launched successfully and has thousands of active users. The smart contracts are flawless.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'Blockchain Corp',
      content: 'The cross-chain solution they developed saved us months of development time. Highly professional team.',
      rating: 5
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Blockchain & Web3 Solutions
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Blockchain & Web3 Development
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future of decentralized applications with our expert blockchain development services. 
              From smart contracts to DeFi platforms, we bring your Web3 vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link 
                to="#demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Comprehensive Blockchain Solutions
              </h2>
              <p className="text-gray-300 text-lg">
                End-to-end development services for the decentralized future
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Blockchain Services
              </h2>
              <p className="text-gray-300 text-lg">
                Complete development solutions for every blockchain need
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((category, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Transparent Project Pricing
              </h2>
              <p className="text-gray-300 text-lg">
                Clear pricing for blockchain development projects
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-cyan-400' : 'border-white/10'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Trusted by Blockchain Innovators
              </h2>
              <p className="text-gray-300 text-lg">
                See how we're building the future of decentralized applications
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <CheckCircle key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build the Future?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join the Web3 revolution with our expert blockchain development services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}