'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, Shield, Brain, Globe, Zap } from 'lucide-react';

const BlockchainPage: React.FC = () => {
  const features = [
    {
      title: 'Smart Contract Development',
      description: 'Custom smart contract development for DeFi, NFTs, and enterprise blockchain applications.',
      icon: '📜',
      price: 'Starting at $8,000/project',
      features: ['Custom smart contracts', 'Security auditing', 'Gas optimization', 'Testing & deployment', 'Maintenance & updates'],
      benefits: ['Automate business processes', 'Reduce intermediaries', 'Ensure transparency'],
      marketPrice: '$15,000-50,000/project',
      category: 'Smart Contracts',
      technologies: ['Solidity', 'Vyper', 'Rust', 'Go', 'JavaScript']
    },
    {
      title: 'DeFi Protocol Development',
      description: 'Decentralized finance protocols including DEXs, lending platforms, and yield farming solutions.',
      icon: '💰',
      price: 'Starting at $25,000/project',
      features: ['DEX development', 'Lending protocols', 'Yield farming', 'Liquidity pools', 'Governance tokens'],
      benefits: ['Enable decentralized finance', 'Increase financial inclusion', 'Reduce traditional banking costs'],
      marketPrice: '$50,000-200,000/project',
      category: 'DeFi',
      technologies: ['Ethereum', 'Polygon', 'BSC', 'Avalanche', 'Arbitrum']
    },
    {
      title: 'NFT Marketplace Development',
      description: 'Complete NFT marketplace solutions with minting, trading, and auction capabilities.',
      icon: '🎨',
      price: 'Starting at $15,000/project',
      features: ['NFT minting', 'Marketplace UI/UX', 'Auction system', 'Royalty management', 'Multi-wallet support'],
      benefits: ['Monetize digital assets', 'Create new revenue streams', 'Engage with communities'],
      marketPrice: '$30,000-100,000/project',
      category: 'NFTs',
      technologies: ['Ethereum', 'IPFS', 'Web3.js', 'React', 'Node.js']
    },
    {
      title: 'Blockchain Consulting',
      description: 'Strategic blockchain consulting and technology evaluation for enterprise adoption.',
      icon: '💡',
      price: 'Starting at $200/hour',
      features: ['Strategic Planning', 'Technology Evaluation', 'Risk Assessment', 'ROI Analysis'],
      benefits: ['Make informed decisions', 'Reduce implementation risks', 'Maximize ROI'],
      marketPrice: '$300-500/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Evaluation', 'Risk Assessment', 'ROI Analysis']
    }
  ];

  const benefits = [
    'Advanced blockchain technology integration',
    'Real-time transaction processing',
    'Enterprise-grade security and compliance',
    'Scalable and flexible blockchain solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blockchain Services | Zion Tech Group</title>
        <meta name="description" content="Professional Blockchain services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Blockchain
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced blockchain solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Blockchain Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive blockchain solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-purple-400 font-semibold mb-2">{feature.price}</div>
                <div className="text-sm text-gray-400">Market Price: {feature.marketPrice}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our blockchain services for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your blockchain needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainPage;