'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Link, Coins, Lock } from 'lucide-react';

const AiBlockchainSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Blockchain Solutions',
      description: 'Intelligent blockchain solutions powered by advanced AI technology.',
      benefits: ['Smart contracts', 'Automated processes', 'Predictive analytics', 'Intelligent routing']
    },
    {
      icon: Link,
      title: 'Blockchain Integration',
      description: 'Seamless integration of blockchain technology into existing systems.',
      benefits: ['API integration', 'Legacy system support', 'Cloud deployment', 'Scalable architecture']
    },
    {
      icon: Coins,
      title: 'Cryptocurrency Solutions',
      description: 'Comprehensive cryptocurrency and digital asset management solutions.',
      benefits: ['Wallet integration', 'Payment processing', 'Token management', 'Exchange connectivity']
    },
    {
      icon: Lock,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance for blockchain applications.',
      benefits: ['Multi-layer security', 'Regulatory compliance', 'Audit trails', 'Risk management']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Efficient blockchain data management and storage solutions.',
      benefits: ['Data indexing', 'Query optimization', 'Backup solutions', 'Data integrity']
    },
    {
      icon: Settings,
      title: 'Custom Development',
      description: 'Tailored blockchain solutions for specific business requirements.',
      benefits: ['Custom smart contracts', 'DApp development', 'Protocol design', 'Integration services']
    }
  ];

  const services = [
    {
      title: 'Blockchain Consulting',
      description: 'Expert consultation on blockchain strategy and implementation.',
      features: ['Strategy planning', 'Technology selection', 'Architecture design', 'Implementation guidance'],
      price: 'Starting at $299/hour'
    },
    {
      title: 'Smart Contract Development',
      description: 'Custom smart contract development and auditing services.',
      features: ['Contract development', 'Security auditing', 'Testing & deployment', 'Maintenance support'],
      price: 'Starting at $499/hour'
    },
    {
      title: 'Blockchain Platform',
      description: 'Complete blockchain platform development and deployment.',
      features: ['Platform design', 'Development', 'Testing', 'Deployment & support'],
      price: 'Starting at $999/hour'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered blockchain solutions. Smart contracts, DeFi protocols, cryptocurrency integration, and enterprise blockchain development." />
        <meta name="keywords" content="blockchain solutions, AI blockchain, smart contracts, DeFi, cryptocurrency, blockchain development" />
        <meta property="og:title" content="AI Blockchain Solutions | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI-powered blockchain solutions. Smart contracts, DeFi protocols, cryptocurrency integration, and enterprise blockchain development." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Blockchain Solutions | Zion Tech Group" />
        <meta name="twitter:description" content="Comprehensive AI-powered blockchain solutions. Smart contracts, DeFi protocols, cryptocurrency integration, and enterprise blockchain development." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Blockchain
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI-powered blockchain solutions. Smart contracts, DeFi protocols, 
              cryptocurrency integration, and enterprise blockchain development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Comprehensive Blockchain Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Our Blockchain Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform with Blockchain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the blockchain revolution with our AI-powered solutions and expert development team.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Start Your Free Consultation
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AiBlockchainSolutionsPage;