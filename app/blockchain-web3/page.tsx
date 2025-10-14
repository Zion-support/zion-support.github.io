import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, Globe, Lock, ArrowRight } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

export default function BlockchainWeb3() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Smart Contract Development",
      description: "Secure, audited smart contracts for DeFi, NFTs, and enterprise applications"
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: "DApp Development",
      description: "Decentralized applications with seamless Web3 integration and user experience"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: "Web3 Integration",
      description: "Complete Web3 infrastructure including wallet integration and blockchain connectivity"
    },
    {
      icon: <Lock className="w-8 h-8 text-red-400" />,
      title: "Security Audits",
      description: "Comprehensive security audits and penetration testing for blockchain applications"
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
      period: '/project',
      description: 'Perfect for small blockchain projects',
      features: [
        'Basic smart contract development',
        'Simple DApp creation',
        'Basic security audit',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: '$9,999',
      period: '/project',
      description: 'Ideal for complex blockchain applications',
      features: [
        'Advanced smart contract development',
        'Complex DApp with Web3 integration',
        'Comprehensive security audit',
        'Priority support',
        'Custom blockchain solutions'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom blockchain development',
        'Enterprise-grade security',
        'Dedicated support team',
        'White-label solutions',
        'Ongoing maintenance'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blockchain & Web3 Development - Zion Tech Group</title>
        <meta name="description" content="Professional blockchain and Web3 development services. Smart contracts, DApps, DeFi protocols, and comprehensive security audits." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <ResponsiveContainer>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Blockchain & Web3 Development
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Build the future of decentralized applications with our expert blockchain and Web3 development services. 
                From smart contracts to full DApp ecosystems, we deliver secure, scalable solutions.
              </p>
              <FuturisticButton href="#features" className="bg-blue-600 hover:bg-blue-700">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

        {/* Features Section */}
        <section id="features" className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Blockchain Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive blockchain development and Web3 integration solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="mb-4">
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
        <section className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">What We Build</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete blockchain and Web3 solutions for every industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <FuturisticCard key={index}>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.category}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <ArrowRight className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for blockchain development projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard key={index} className={`${index === 1 ? 'ring-2 ring-blue-500' : ''}`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <FuturisticButton 
                      className={`w-full ${index === 1 ? 'bg-blue-600 hover:bg-blue-700' : 'border border-gray-600 hover:bg-gray-800'}`}
                    >
                      Get Started
                    </FuturisticButton>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center">
              <FuturisticCard className="bg-gradient-to-r from-blue-600 to-purple-600">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Build on Blockchain?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let's create the next generation of decentralized applications together.
                </p>
                <FuturisticButton href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </FuturisticButton>
              </FuturisticCard>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
}
