import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, Globe, Lock, ArrowRight, CheckCircle, Target, Brain, Users, Award } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function BlockchainWeb3() {
  const features = [
    {
      title: "Smart Contract Development",
      description: "Secure and efficient smart contracts for DeFi, NFTs, and enterprise applications",
      icon: <Shield className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "DApp Development",
      description: "Decentralized applications with seamless user experience and Web3 integration",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "DeFi Protocols",
      description: "Decentralized finance solutions including lending, staking, and yield farming",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Security Audits",
      description: "Comprehensive security audits and penetration testing for blockchain projects",
      icon: <Lock className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
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
        'Email support',
        '2 revisions included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$9,999',
      period: '/project',
      description: 'Ideal for complex blockchain applications',
      features: [
        'Advanced smart contract development',
        'Full-stack DApp development',
        'Comprehensive security audit',
        'Priority support',
        'Unlimited revisions',
        'Deployment assistance'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored for large-scale blockchain solutions',
      features: [
        'Custom blockchain development',
        'Multi-chain integration',
        'Advanced security protocols',
        '24/7 dedicated support',
        'Full project management',
        'Ongoing maintenance'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blockchain & Web3 Development - Zion Tech Group</title>
        <meta name="description" content="Professional blockchain and Web3 development services. Smart contracts, DApps, DeFi protocols, and security audits for the decentralized future." />
        <meta name="keywords" content="blockchain development, Web3, smart contracts, DApp development, DeFi, NFT, cryptocurrency, decentralized applications" />
      </Helmet>
      
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Shield className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Blockchain & Web3 Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Blockchain & Web3 Development
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Build the future of decentralized applications with our expert blockchain and Web3 development services. 
            From smart contracts to DeFi protocols, we bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Globe className="w-5 h-5" />}
            >
              View Portfolio
            </FuturisticButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Blockchain Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive blockchain and Web3 solutions for the decentralized future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end blockchain and Web3 development solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-6 text-center group-hover:text-purple-400 transition-colors">
                  {service.category}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Project Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent pricing for blockchain development projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-2 -right-2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
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
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join the blockchain revolution with our expert development team. 
            Let's create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Target className="w-5 h-5" />}
            >
              Schedule Consultation
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
}