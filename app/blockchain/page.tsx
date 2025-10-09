import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link, Shield, Zap, Globe, Phone, CheckCircle, ArrowRight, Star, TrendingUp, Brain, Database, Lock, Users, Award, Clock } from 'lucide-react';

const BlockchainPage: React.FC = () => {
  const solutions = [
    {
      title: 'Smart Contracts',
      description: 'Automate business processes with self-executing smart contracts',
      icon: Zap,
      features: ['Automated execution', 'Transparent transactions', 'Reduced costs', 'Eliminate intermediaries'],
      benefits: ['90% cost reduction', '100% transparency', 'Instant execution', 'No middlemen']
    },
    {
      title: 'Decentralized Applications (DApps)',
      description: 'Build secure, transparent applications on blockchain infrastructure',
      icon: Globe,
      features: ['Decentralized architecture', 'Enhanced security', 'User control', 'Open source'],
      benefits: ['Unhackable security', 'User ownership', 'Global accessibility', 'Censorship resistant']
    },
    {
      title: 'Cryptocurrency Solutions',
      description: 'Implement digital currencies and payment systems for your business',
      icon: Database,
      features: ['Digital wallets', 'Payment processing', 'Cross-border transactions', 'Low fees'],
      benefits: ['Instant payments', 'Global reach', 'Low transaction fees', '24/7 availability']
    },
    {
      title: 'Supply Chain Transparency',
      description: 'Track products from origin to consumer with immutable blockchain records',
      icon: Shield,
      features: ['Product tracking', 'Authenticity verification', 'Quality assurance', 'Compliance monitoring'],
      benefits: ['Complete traceability', 'Fraud prevention', 'Quality control', 'Regulatory compliance']
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
      icon: Database,
      useCases: ['Digital payments', 'Cross-border remittances', 'Trade finance', 'Asset tokenization'],
      benefits: ['Reduced costs', 'Faster settlements', 'Enhanced security', 'Global reach']
    },
    {
      name: 'Healthcare',
      icon: Shield,
      useCases: ['Patient records', 'Drug traceability', 'Clinical trials', 'Insurance claims'],
      benefits: ['Data integrity', 'Privacy protection', 'Interoperability', 'Audit trails']
    },
    {
      name: 'Supply Chain',
      icon: Globe,
      useCases: ['Product tracking', 'Quality assurance', 'Compliance', 'Sustainability'],
      benefits: ['Transparency', 'Efficiency', 'Trust', 'Cost reduction']
    },
    {
      name: 'Real Estate',
      icon: Lock,
      useCases: ['Property records', 'Smart contracts', 'Fractional ownership', 'Rental agreements'],
      benefits: ['Transparency', 'Automation', 'Liquidity', 'Reduced fraud']
    }
  ];

  const technologies = [
    {
      name: 'Ethereum',
      description: 'Leading smart contract platform',
      features: ['Smart contracts', 'DApps', 'DeFi', 'NFTs']
    },
    {
      name: 'Hyperledger',
      description: 'Enterprise blockchain framework',
      features: ['Private networks', 'Consensus mechanisms', 'Modular architecture', 'Enterprise focus']
    },
    {
      name: 'Polkadot',
      description: 'Multi-chain interoperability',
      features: ['Cross-chain', 'Scalability', 'Governance', 'Parachains']
    },
    {
      name: 'Solana',
      description: 'High-performance blockchain',
      features: ['Fast transactions', 'Low fees', 'Scalability', 'Developer friendly']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blockchain Solutions - Zion Tech Group | Decentralized Technology</title>
        <meta name="description" content="Implement secure blockchain solutions including smart contracts, DApps, cryptocurrency, and supply chain transparency. Transform your business with decentralized technology." />
        <meta name="keywords" content="blockchain solutions, smart contracts, DApps, cryptocurrency, supply chain, decentralized technology, Web3" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Blockchain Solutions
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Transform your business with secure, transparent, and decentralized blockchain technology. 
                Build trust, reduce costs, and create new opportunities with our blockchain expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </section>

          {/* Solutions */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Blockchain Solutions</h2>
              <p className="text-xl text-gray-300">Comprehensive blockchain services for every business need</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-center mb-6">
                    <solution.icon className="w-12 h-12 text-cyan-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Industry Applications</h2>
              <p className="text-xl text-gray-300">Blockchain solutions across various industries</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <industry.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{industry.name}</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Use Cases:</h4>
                    <ul className="space-y-1">
                      {industry.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="text-xs text-gray-300">
                          • {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-xs text-gray-300">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Technologies We Use</h2>
              <p className="text-xl text-gray-300">Leading blockchain platforms and frameworks</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{tech.description}</p>
                  <ul className="space-y-1">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-400">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Blockchain Solutions?</h2>
              <p className="text-xl text-gray-300">Expertise and experience that delivers results</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center cyber-card p-6">
                <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300">Certified blockchain developers with 5+ years experience</p>
              </div>
              <div className="text-center cyber-card p-6">
                <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Security First</h3>
                <p className="text-gray-300">Bank-level security and compliance standards</p>
              </div>
              <div className="text-center cyber-card p-6">
                <Clock className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Fast Delivery</h3>
                <p className="text-gray-300">Rapid development and deployment cycles</p>
              </div>
              <div className="text-center cyber-card p-6">
                <Users className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Ongoing Support</h3>
                <p className="text-gray-300">24/7 support and maintenance services</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card text-center p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Embrace Blockchain?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the blockchain revolution and transform your business with secure, transparent, 
                and efficient decentralized solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlockchainPage;