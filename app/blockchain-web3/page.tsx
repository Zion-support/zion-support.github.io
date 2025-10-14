import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, Globe, Lock, ArrowRight, CheckCircle, Code, Users, Target } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

export default function BlockchainWeb3Page() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Smart Contract Development',
      description: 'Secure and audited smart contracts for DeFi, NFTs, and blockchain applications'
    },
    {
      icon: <Code className="w-6 h-6 text-blue-400" />,
      title: 'DApp Development',
      description: 'Decentralized applications with seamless Web3 integration and user experience'
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      title: 'Web3 Integration',
      description: 'Connect your existing applications to blockchain networks and Web3 protocols'
    },
    {
      icon: <Lock className="w-6 h-6 text-red-400" />,
      title: 'Security Audits',
      description: 'Comprehensive security audits and penetration testing for blockchain projects'
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
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      description: 'Perfect for small projects and MVPs',
      features: [
        'Basic smart contract development',
        'Simple DApp creation',
        'Basic security review',
        'Email support',
        '2 weeks delivery'
      ]
    },
    {
      name: 'Professional',
      price: '$9,999',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced smart contracts',
        'Complex DApp development',
        'Comprehensive security audit',
        'Priority support',
        'API integration',
        '4 weeks delivery'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$24,999',
      description: 'For large-scale projects',
      features: [
        'Custom blockchain solutions',
        'Multi-chain integration',
        'Full security audit suite',
        '24/7 support',
        'Dedicated team',
        '8+ weeks delivery'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
      title: 'Future-Proof Technology',
      description: 'Build on cutting-edge blockchain technology that will stand the test of time'
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: 'Lightning Fast',
      description: 'Optimized smart contracts and DApps for maximum performance and efficiency'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Community Driven',
      description: 'Join the decentralized future with community-governed applications'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blockchain & Web3 Development - Zion Tech Group</title>
        <meta name="description" content="Professional blockchain and Web3 development services including smart contracts, DApps, DeFi protocols, and security audits." />
        <meta name="keywords" content="blockchain development, Web3, smart contracts, DApp development, DeFi, NFT, cryptocurrency" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
          <ResponsiveContainer>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent mb-6">
                Blockchain & Web3
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Build the future of the internet with our comprehensive blockchain and Web3 development services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton className="bg-green-600 hover:bg-green-700">
                  Start Building
                </FuturisticButton>
                <FuturisticButton variant="outline">
                  View Portfolio
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Blockchain Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From smart contracts to full DApp development, we provide end-to-end blockchain solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white/5">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Full-stack blockchain development and Web3 integration services.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <FuturisticCard key={index}>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.category}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Blockchain Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of professional blockchain development.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white/5">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Development Packages</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect package for your blockchain project.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard key={index} className={`${plan.popular ? 'ring-2 ring-green-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      {plan.price}
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <FuturisticButton className="w-full justify-center">
                    Get Started
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Build the Future?</h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Let's create innovative blockchain solutions that will transform your business and the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton className="bg-white text-green-600 hover:bg-gray-100">
                  Start Your Project
                </FuturisticButton>
                <FuturisticButton variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Schedule Consultation
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
}