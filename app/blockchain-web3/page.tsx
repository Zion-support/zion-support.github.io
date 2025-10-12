import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Globe, Lock } from 'lucide-react';
import Layout from '../layout';

export default function BlockchainWeb3() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Decentralized Security',
      description: 'Immutable blockchain technology ensures maximum security and transparency'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'Smart Contracts',
      description: 'Automated, self-executing contracts that eliminate intermediaries'
    },
    {
      icon: <Globe className="w-6 h-6 text-yellow-400" />,
      title: 'Web3 Integration',
      description: 'Seamless integration with decentralized applications and protocols'
    },
    {
      icon: <Lock className="w-6 h-6 text-green-400" />,
      title: 'Cryptocurrency Support',
      description: 'Full support for major cryptocurrencies and token standards'
    }
  ];

  const services = [
    {
      category: 'Blockchain Development',
      items: ['Smart Contract Development', 'DApp Development', 'Token Creation', 'DeFi Protocols', 'NFT Marketplaces', 'Cross-chain Solutions']
    },
    {
      category: 'Web3 Integration',
      items: ['Wallet Integration', 'MetaMask Support', 'Web3.js Integration', 'IPFS Storage', 'Decentralized Identity', 'DAO Governance']
    },
    {
      category: 'Security & Audit',
      items: ['Smart Contract Audits', 'Security Testing', 'Penetration Testing', 'Code Review', 'Vulnerability Assessment', 'Compliance Check']
    },
    {
      category: 'Consulting',
      items: ['Blockchain Strategy', 'Technology Selection', 'Architecture Design', 'Implementation Planning', 'Training & Support', 'Maintenance']
import { Shield, Zap, Globe, Database, Lock } from 'lucide-react';
import Layout from '../layout';

export default function BlockchainWeb3Page() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Smart Contracts',
      description: 'Secure, automated contracts that execute without intermediaries'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications for lending, trading, and yield farming'
    },
    {
      icon: <Globe className="w-6 h-6 text-yellow-400" />,
      title: 'NFT Marketplace',
      description: 'Create and trade unique digital assets with blockchain technology'
    },
    {
      icon: <Database className="w-6 h-6 text-green-400" />,
      title: 'Web3 Integration',
      description: 'Seamlessly integrate blockchain features into existing applications'
    },
    {
      icon: <Lock className="w-6 h-6 text-orange-400" />,
      title: 'Security Audits',
      description: 'Comprehensive security audits for smart contracts and dApps'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$5,000',
      description: 'Perfect for small projects',
      features: [
        'Basic smart contract',
        'Simple DApp',
        'Standard security',
        'Email support',
        '30-day warranty'
      price: '$2,999',
      period: '/project',
      description: 'Perfect for small blockchain projects',
      features: [
        'Basic smart contract development',
        'Simple dApp creation',
        'Basic security audit',
        'Email support',
        '3 months maintenance'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$15,000',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced smart contracts',
        'Complex DApp',
        'Enhanced security',
        'Priority support',
        '90-day warranty',
        'Audit included'
      price: '$7,999',
      period: '/project',
      description: 'Ideal for complex blockchain applications',
      features: [
        'Advanced smart contracts',
        'Full dApp development',
        'Comprehensive security audit',
        'Priority support',
        '6 months maintenance',
        'Token integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$50,000',
      description: 'For large organizations',
      features: [
        'Custom blockchain solution',
        'Full-stack Web3 app',
        'Enterprise security',
        'Dedicated support',
        '1-year warranty',
        'Full audit & testing',
      price: '$19,999',
      period: '/project',
      description: 'For large-scale blockchain solutions',
      features: [
        'Custom blockchain development',
        'Multi-chain integration',
        'Advanced security protocols',
        'Dedicated support',
        '12 months maintenance',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      company: 'DeFi Startup',
      content: 'Zion Tech Group helped us build a secure DeFi protocol. The smart contract audit caught critical vulnerabilities.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'NFT Marketplace',
      content: 'Our NFT marketplace launch was flawless. The Web3 integration works perfectly across all devices.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      company: 'Crypto Exchange',
      content: 'The blockchain infrastructure they built handles millions of transactions daily with zero downtime.',
      company: 'CryptoStart Inc',
      content: 'The smart contract development was flawless. Our DeFi platform launched without any security issues.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'NFT Ventures',
      content: 'The NFT marketplace they built exceeded our expectations. User experience is outstanding.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'Blockchain Solutions',
      content: 'Their Web3 integration expertise helped us modernize our existing platform seamlessly.',
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center"></div>
          <div className="mb-4"></div>
            <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"></span>
              Blockchain & Web3 Solutions
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Blockchain & Web3 Development
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Build the future of decentralized applications with our expert blockchain and Web3 development services. 
            From smart contracts to full-stack DApps, we bring your Web3 vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link to="#demo" className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-colors">
              Start Your Project
            </Link>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4"></div>
        <div className="max-w-6xl mx-auto text-center"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Blockchain & Web3 Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Build the future of decentralized applications with our comprehensive blockchain 
            development services and Web3 integration expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all">
              Start Your Project
            </button>
            <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Portfolio
            </Link>
          </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Cutting-Edge Blockchain Solutions
            </h2>
            <p className="text-gray-300 text-lg"></p>
              Leverage the power of blockchain technology to build secure, transparent, and decentralized applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors"></div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-900"></div>
        <div className="max-w-6xl mx-auto px-4"></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Comprehensive Blockchain Services
          </h2>
          <p className="text-gray-300 text-center mb-12"></p>
            From smart contracts to full dApp development, we cover all aspects of blockchain technology
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-400 transition-colors"></div>
                <div className="flex items-center mb-4"></div>
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comprehensive Blockchain Services
            </h2>
            <p className="text-gray-300 text-lg"></p>
              End-to-end blockchain and Web3 development solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {services.map((category, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700"></div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Blockchain Development Packages
            </h2>
            <p className="text-gray-300 text-lg"></p>
              Choose the package that fits your blockchain project needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gray-800 p-8 rounded-lg border ${plan.popular ? 'border-cyan-500' : 'border-gray-700'} relative`}></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium"></span>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-slate-900"></div>
        <div className="max-w-6xl mx-auto px-4"></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Transparent Project Pricing
          </h2>
          <p className="text-gray-300 text-center mb-12"></p>
            Choose the package that fits your blockchain project needs
          </p>
          <div className="grid md:grid-cols-3 gap-8"></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gray-800 p-8 rounded-lg border-2 relative ${plan.popular ? 'border-purple-400' : 'border-gray-700'}`}></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-purple-400 text-black px-4 py-1 rounded-full text-sm font-semibold"></span>
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6"></div>
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Shield className="w-5 h-5 text-cyan-400 mr-3" />
                      <Shield className="w-5 h-5 text-purple-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="#contact" 
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                    plan.popular 
                      ? 'bg-cyan-500 text-white hover:bg-cyan-600' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-600 text-white hover:from-purple-600 hover:to-cyan-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-300 text-lg"></p>
              Join successful blockchain projects powered by our expertise
            </p>
          </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-900"></div>
        <div className="max-w-6xl mx-auto px-4"></div>
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Trusted by Blockchain Innovators
          </h2>
          <p className="text-gray-300 text-center mb-12"></p>
            See how companies are building the future with our blockchain solutions
          </p>
          <div className="grid md:grid-cols-3 gap-8"></div>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700"></div>
                <div className="flex mb-4"></div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div></div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.company}</div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center"></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto"></p>
            Start your blockchain project today and join the Web3 revolution with our expert development team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link to="#contact" className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </Link>
            <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Portfolio
            </Link>
          </div>
      </section>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-slate-900"></div>
        <div className="max-w-4xl mx-auto text-center px-4"></div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-gray-300 mb-8"></p>
            Join the blockchain revolution with our expert development team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link to="/contact" className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300">
              Start Your Project
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
      </div>
    </Layout>
  );
}