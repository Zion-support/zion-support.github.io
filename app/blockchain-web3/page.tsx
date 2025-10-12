import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Globe, Users, Lock, Coins } from 'lucide-react';
import Layout from '../layout';

export default function BlockchainWeb3Page() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: 'Decentralized Security',
      description: 'Immutable blockchain technology ensures maximum security and transparency for all transactions'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Smart Contracts',
      description: 'Automated, self-executing contracts that eliminate intermediaries and reduce costs'
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      title: 'Global Accessibility',
      description: 'Access financial services from anywhere in the world without traditional banking barriers'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Community Governance',
      description: 'Decentralized decision-making through community-driven governance models'
    },
    {
      icon: <Lock className="w-6 h-6 text-red-400" />,
      title: 'Privacy Protection',
      description: 'Advanced cryptographic techniques protect user privacy while maintaining transparency'
    },
    {
      icon: <Coins className="w-6 h-6 text-orange-400" />,
      title: 'Token Economics',
      description: 'Innovative tokenomics models that create sustainable value for all stakeholders'
    }
  ];

  const services = [
    {
      title: 'DeFi Development',
      description: 'Decentralized finance solutions including DEXs, lending protocols, and yield farming platforms',
      features: ['DEX Development', 'Lending Protocols', 'Yield Farming', 'Liquidity Mining', 'Staking Solutions']
    },
    {
      title: 'NFT Marketplace',
      description: 'Complete NFT marketplace development with minting, trading, and auction capabilities',
      features: ['NFT Minting', 'Marketplace Creation', 'Auction Systems', 'Royalty Management', 'Cross-chain Support']
    },
    {
      title: 'Smart Contract Audit',
      description: 'Comprehensive security auditing for smart contracts to ensure maximum protection',
      features: ['Code Review', 'Vulnerability Assessment', 'Gas Optimization', 'Security Testing', 'Compliance Check']
    },
    {
      title: 'Web3 Integration',
      description: 'Seamless integration of Web3 technologies into existing applications and platforms',
      features: ['Wallet Integration', 'MetaMask Support', 'Web3 APIs', 'Blockchain Connectivity', 'User Onboarding']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$5,000',
      description: 'Perfect for small projects and MVPs',
      features: [
        'Basic smart contract development',
        'Simple DApp creation',
        'Basic security audit',
        '2 weeks delivery',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$15,000',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced smart contracts',
        'Complex DApp development',
        'Comprehensive security audit',
        '4 weeks delivery',
        'Priority support',
        'DeFi integration',
        'NFT marketplace'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$50,000',
      description: 'For large-scale blockchain projects',
      features: [
        'Custom blockchain solutions',
        'Multi-chain development',
        'Enterprise security audit',
        '8 weeks delivery',
        'Dedicated support',
        'White-label solutions',
        'Custom tokenomics',
        'Governance systems'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'CryptoStart Inc.',
      content: 'Zion Tech Group helped us launch our DeFi platform successfully. The smart contract security is top-notch.',
      rating: 5
    },
    {
      name: 'Sarah Martinez',
      company: 'NFT Marketplace Co.',
      content: 'Our NFT marketplace exceeded expectations. The user experience is seamless and the technology is cutting-edge.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Blockchain Solutions',
      content: 'The Web3 integration was flawless. Our users can now interact with blockchain seamlessly through our platform.',
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-6">
              <Coins className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-400 font-medium">Blockchain & Web3 Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Blockchain & Web3 Development
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge blockchain technology and Web3 solutions. 
              Build decentralized applications, DeFi platforms, and NFT marketplaces with our expert team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
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
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Blockchain Technology Features
            </h2>
            <p className="text-gray-300 text-lg">
              Harness the power of decentralized technology for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-colors">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Web3 Services
            </h2>
            <p className="text-gray-300 text-lg">
              Comprehensive blockchain development services for every need
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Development Packages
            </h2>
            <p className="text-gray-300 text-lg">
              Choose the package that fits your blockchain project needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-slate-700 rounded-lg p-8 relative ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-slate-900">
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
              <div key={index} className="bg-slate-800 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join the Web3 revolution with our expert blockchain development services
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
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
      </div>
    </Layout>
  );
}