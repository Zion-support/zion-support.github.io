import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Shield, DollarSign, Users, Lock, Globe, BarChart3 } from 'lucide-react';

export default function Blockchain() {
  const services = [
    {
      icon: Shield,
      title: 'Smart Contract Development',
      description: 'Secure, audited smart contracts for various blockchain platforms.',
      features: ['Ethereum', 'Polygon', 'Binance Smart Chain', 'Custom Blockchains']
    },
    {
      icon: DollarSign,
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications and protocols.',
      features: ['DEX Development', 'Yield Farming', 'Liquidity Pools', 'Token Economics']
    },
    {
      icon: Users,
      title: 'NFT Marketplace',
      description: 'Custom NFT platforms and marketplace development.',
      features: ['Minting Platform', 'Trading System', 'Royalty Management', 'Metadata Storage']
    },
    {
      icon: Lock,
      title: 'Security Audits',
      description: 'Comprehensive security analysis of smart contracts.',
      features: ['Code Review', 'Vulnerability Assessment', 'Penetration Testing', 'Compliance Check']
    },
    {
      icon: Globe,
      title: 'Web3 Integration',
      description: 'Seamless integration of Web3 technologies.',
      features: ['Wallet Integration', 'MetaMask Support', 'IPFS Storage', 'API Development']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Monitoring',
      description: 'Real-time blockchain analytics and monitoring.',
      features: ['Transaction Tracking', 'Performance Metrics', 'Alert Systems', 'Dashboard Creation']
    }
  ];

  return (
    <>
      <Head>
        <title>Blockchain Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our cutting-edge blockchain services. From smart contracts to DeFi solutions, we deliver secure and innovative blockchain technology." />
        <link rel="canonical" href="https://ziontechgroup.com/blockchain" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-blue-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-white">
                  Zion Tech Group
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">
                  AI Services
                </Link>
                <Link href="/blockchain" className="text-white font-medium">
                  Blockchain
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blockchain Services That
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Innovate
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future with our comprehensive blockchain solutions. From smart contracts to DeFi platforms, we deliver secure and scalable blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link 
                href="#services" 
                className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Our Blockchain Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 p-3 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
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
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build on the Blockchain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our blockchain solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Us Today
              </Link>
              <a 
                href="tel:+13024640950" 
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-blue-500/20 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-gray-300 mb-4">
                  Transforming businesses through innovative blockchain and technology solutions.
                </p>
                <div className="text-gray-300">
                  <p>364 E Main St STE 1008 Middletown DE 19709</p>
                  <p>Phone: +1 302 464 0950</p>
                  <p>Email: kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/ai-services" className="hover:text-white transition-colors">AI Services</Link></li>
                  <li><Link href="/blockchain" className="hover:text-white transition-colors">Blockchain</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Consulting</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/contact" className="hover:text-white transition-colors">Get Quote</Link></li>
                  <li><a href="tel:+13024640950" className="hover:text-white transition-colors">Call Us</a></li>
                  <li><a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">Email Us</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-blue-500/20 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}