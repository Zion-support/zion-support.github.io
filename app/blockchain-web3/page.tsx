import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Globe, Users, Lock, Coins, Database } from 'lucide-react';
import Layout from '../layout';

export default function BlockchainWeb3Page() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Smart Contracts',
      description: 'Automated, secure, and transparent contract execution on blockchain networks'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications for lending, borrowing, and trading'
    },
    {
      icon: <Globe className="w-6 h-6 text-yellow-400" />,
      title: 'Web3 Integration',
      description: 'Seamless integration with Web3 wallets and decentralized applications'
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: 'DAO Development',
      description: 'Decentralized autonomous organizations for community governance'
    }
  ]

  const services = [
    {
      title: 'Blockchain Development',
      description: 'Custom blockchain solutions and smart contract development',
      icon: <Database className="w-5 h-5" />,
      features: ['Smart Contracts', 'DApps', 'Token Development', 'Blockchain Migration']
    },
    {
      title: 'DeFi Platforms',
      description: 'Decentralized finance applications and protocols',
      icon: <Coins className="w-5 h-5" />,
      features: ['DEX Development', 'Yield Farming', 'Liquidity Pools', 'Staking Platforms']
    },
    {
      title: 'NFT Marketplaces',
      description: 'Non-fungible token platforms and marketplaces',
      icon: <Lock className="w-5 h-5" />,
      features: ['NFT Minting', 'Marketplace Development', 'Royalty Systems', 'Metadata Management']
    },
    {
      title: 'Web3 Integration',
      description: 'Connect traditional applications with Web3 ecosystem',
      icon: <Globe className="w-5 h-5" />,
      features: ['Wallet Integration', 'MetaMask Support', 'IPFS Storage', 'API Development']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$5,000',
      description: 'Perfect for small projects and MVPs',
      features: [
        'Basic smart contract development',
        'Simple DApp interface',
        'Single blockchain network',
        'Basic testing and deployment',
        'Documentation and support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$15,000',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced smart contracts',
        'Multi-chain deployment',
        'Custom UI/UX design',
        'Security audits',
        'Integration support',
        '3 months maintenance'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$50,000',
      description: 'For large organizations',
      features: [
        'Complex DeFi protocols',
        'Custom blockchain solutions',
        'White-label development',
        'Advanced security features',
        'Dedicated team',
        '12 months support'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Alex Chen',
      company: 'CryptoStart Inc.',
      content: 'Zion Tech Group built our DeFi platform from scratch. The smart contracts are bulletproof and the UI is amazing.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'NFT Marketplace',
      content: 'Our NFT marketplace launch was flawless. The team understood our vision and delivered beyond expectations.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      company: 'Blockchain Solutions',
      content: 'The Web3 integration was seamless. Our users can now connect their wallets and interact with our platform easily.',
      rating: 5
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-4">
              Blockchain & Web3 Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Blockchain & Web3 Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build the future of decentralized applications with our expert blockchain development team. 
              Smart contracts, DeFi platforms, NFT marketplaces, and Web3 integration services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Your Project
              </Link>
              <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Core Blockchain Technologies
            </h2>
            <p className="text-gray-300 text-lg">
              Cutting-edge blockchain solutions for the decentralized future
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700 p-6 rounded-lg">
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

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Blockchain Services
            </h2>
            <p className="text-gray-300 text-lg">
              Comprehensive blockchain development solutions for every need
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-700 p-8 rounded-lg">
                <div className="flex items-start mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Development Packages
            </h2>
            <p className="text-gray-300 text-lg">
              Choose the package that fits your blockchain project needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-700 p-8 rounded-lg ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
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
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Trusted by Blockchain Innovators
            </h2>
            <p className="text-gray-300 text-lg">
              See what our clients say about our blockchain development services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
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
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join the blockchain revolution with our expert development team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Start Your Project
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}