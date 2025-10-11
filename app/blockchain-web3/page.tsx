'use client';
import React from 'react';
import { Link  } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlockchainWeb3Page: React.FC = () => {
  return (

  const services = [{
      title: 'Smart Contract Development', description: 'Secure and efficient smart contracts for various applications', features: ['Ethereum', 'Polygon', 'BSC', 'Custom Blockchains'],
      price: 'Starting at $2,500/month',
      icon: '📜'
    
  );
},
    {
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications and protocols',
      features: ['DEX Development', 'Yield Farming', 'Lending Protocols'],
      price: 'Starting at $3,000/month',
      icon: '🏦'
    },
    {
      title: 'NFT Platforms',
      description: 'NFT marketplace and collection development',
      features: ['Marketplace Creation', 'Minting Systems', 'Royalty Management'],
      price: 'Starting at $2,200/month',
      icon: '🎨'
    },
    {
      title: 'Web3 Integration',
      description: 'Integrate Web3 features into existing applications',
      features: ['Wallet Integration', 'MetaMask Support', 'Web3 APIs'],
      price: 'Starting at $1,800/month',
      icon: '🌐'
    },
    {
      title: 'Blockchain Consulting',
      description: 'Strategic guidance for blockchain adoption',
      features: ['Technology Assessment', 'Architecture Design', 'Implementation Planning'],
      price: 'Starting at $1,500/month',
      icon: '💡'
    },
    {
      title: 'Token Development',
      description: 'Custom token creation and management systems',
      features: ['ERC-20/721/1155', 'Tokenomics Design', 'Launch Strategy'],
      price: 'Starting at $1,200/month',
      icon: '🪙'
import { Helmet  } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe  } from 'lucide-react';

const PagePage: React.FC = () => {
  return (

  const features = [{
      icon: Brain, title: 'AI-Powered Solutions', description: 'Advanced AI technology to transform your business operations and improve efficiency'
    
  );
}, {
      icon: Zap, title: 'High Performance', description: 'Lightning-fast processing and real-time analytics for optimal results'
    }, {
      icon: Shield, title: 'Enterprise Security', description: 'Bank-level security with encryption and compliance standards'
    }, {
      icon: Globe, title: 'Global Reach', description: 'Worldwide deployment and support for international businesses'
    }];

  const benefits = [{ metric: 'Decentralized', description: 'No Single Point of Failure' }, { metric: 'Transparent', description: 'Public Ledger Technology' }, { metric: 'Secure', description: 'Cryptographic Security' }, { metric: 'Immutable', description: 'Tamper-Proof Records' }];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation /></Navigation>
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
            Blockchain & Web3 Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Build the future of the internet with decentralized applications, 
            smart contracts, and Web3 technologies that empower users and creators.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button"></Link>
              Explore Web3 Solutions
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}></Link>
              View Blockchain Case Studies
            </Link>
    const features = [{
      icon: Zap, title: 'Smart Contracts', description: 'Automated, self-executing contracts with the terms directly written into code.', benefits: ['Automated execution', 'Transparent transactions', 'Reduced costs', 'Enhanced security']},
    {icon: Shield,
  },
    {
    icon: Shield,
      title: 'Decentralized Security',
      description: 'Enhanced security through decentralized architecture and cryptographic protection.',
      benefits: ['Immutable records', 'Cryptographic security', 'Distributed consensus', 'Tamper-proof data']},
    {icon: Brain,
      title: 'AI Integration',
      description: 'AI-powered blockchain solutions for intelligent automation and optimization.',
      benefits: ['Smart automation', 'Predictive analytics', 'Optimized transactions', 'Intelligent contracts']},
    {icon: Globe,
      title: 'Global Access',
      description: 'Access blockchain services from anywhere in the world with global connectivity.',
      benefits: ['24/7 availability', 'Global reach', 'Cross-border transactions', 'Universal access']}]
return(<>
  )
</>
      <Helmet /></Helmet>
        <title>Blockchain & Web3 Solutions - Zion Tech Group</title>
        <meta />
      benefits: ['Immutable records', 'Cryptographic security', 'Distributed consensus', 'Tamper-proof data'],
  },
    {
    icon: Brain,
      title: 'AI Integration',
      description: 'AI-powered blockchain solutions for intelligent automation and optimization.',
      benefits: ['Smart automation', 'Predictive analytics', 'Optimized transactions', 'Intelligent contracts'],
  },
    {
    icon: Globe,
      title: 'Global Access',
      description: 'Access blockchain services from anywhere in the world with global connectivity.',
      benefits: ['24/7 availability', 'Global reach', 'Cross-border transactions', 'Universal access'],
  }
    ]
return (
    <>
      <Helmet ></Helmet>
        </Helmet><title>Blockchain & Web3 Solutions - Zion Tech Group</title>
        <meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
        <div className="container mx-auto px-4 py-16"></div>
          <div className="text-center mb-16"></div>
            <h1>
              Blockchain & </h1><span className="text-cyan-400">Web3</span>
            </h1>
            <p>Advanced blockchain and Web3 solutions for modern businesses. Smart contracts, DeFi, NFTs, and more.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Blockchain Benefits</h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center cyber-card">
                <div className="text-4xl font-bold text-purple-400 mb-2">{benefit.metric}</div>
                <div className="text-gray-300">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Blockchain Services</h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="text-purple-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400 mb-3">{service.price}</div>
                  <Link to="/contact" className="text-purple-400 hover: text-purple-300 font-medium"></Link>
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Build the Future with Blockchain?
          </h2>
          <p className="text-gray-300 mb-6">
            Join the Web3 revolution with our cutting-edge blockchain solutions.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button"></Link>
              Start Blockchain Journey
            </Link>
            <a href="tel:+13024640950" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer /></Footer>
    </div>
  );
};

export default PagePage;
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
            {features.map((feature, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover: bg-white/10 transition-all duration-300"></div>,
                <div className="flex items-start space-x-4 mb-6"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <feature />
                  <div />
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description</p>}</p>
                  </div>
                </div>
                <ul>
                  {feature.benefits.map((benefit, benefitIndex) => (} <li>
                      <CheckCircle /></CheckCircle>
                      {benefit} </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}
export default BlockchainWeb3Page
      benefits: ['24/7 availability', 'Global reach', 'Cross-border transactions', 'Universal access']
    }
  ]
  return (
    <React .Fragment></React>
      <Helmet ></Helmet>
        <title>Blockchain & Web3 Solutions - Zion Tech Group
        <meta name="description" content="Advanced blockchain and Web3 solutions for modern businesses. Smart contracts, DeFi, NFTs, and more." />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Blockchain & <span className="text-cyan-400">Web3
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced blockchain and Web3 solutions for modern businesses. Smart contracts, DeFi, NFTs, and more.
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover: bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}
                    <p className="text-gray-300 mb-4">{feature.description}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" /></CheckCircle>
                      {benefit}
                  ))}
            ))}
          </div>
        ))
      </div>

  );
};

export default BlockchainWeb3Page;
