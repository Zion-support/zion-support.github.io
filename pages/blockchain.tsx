import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Link as LinkIcon, 
  Shield, 
  Zap, 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Users,
  Globe,
  Database
} from 'lucide-react';

const blockchainServices = [
  {
    title: "Smart Contract Development",
    description: "Secure, audited smart contracts for DeFi, NFTs, and enterprise applications",
    icon: LinkIcon,
    features: ["Solidity Development", "Security Audits", "Gas Optimization", "Testing & Deployment"],
    price: "Starting at $15,000"
  },
  {
    title: "DeFi Solutions",
    description: "Decentralized finance platforms including DEXs, lending protocols, and yield farming",
    icon: BarChart3,
    features: ["DEX Development", "Lending Protocols", "Yield Farming", "Liquidity Pools"],
    price: "Starting at $25,000"
  },
  {
    title: "NFT Marketplaces",
    description: "Custom NFT platforms with minting, trading, and marketplace functionality",
    icon: Users,
    features: ["NFT Minting", "Marketplace UI", "Royalty Systems", "Metadata Management"],
    price: "Starting at $20,000"
  },
  {
    title: "Blockchain Integration",
    description: "Integrate blockchain technology into existing business systems and workflows",
    icon: Database,
    features: ["API Integration", "Web3 Wallets", "Transaction Management", "Data Synchronization"],
    price: "Starting at $10,000"
  }
];

const blockchainFeatures = [
  {
    title: "Security First",
    description: "All smart contracts undergo rigorous security audits and testing",
    icon: Shield
  },
  {
    title: "Scalable Solutions",
    description: "Built for high throughput and low transaction costs",
    icon: Zap
  },
  {
    title: "Cross-Chain Support",
    description: "Multi-blockchain compatibility for maximum reach",
    icon: Globe
  }
];

export default function BlockchainPage() {
  return (
    <Layout
      title="Blockchain Development Services - Zion Tech Group"
      description="Expert blockchain development services including smart contracts, DeFi solutions, NFT marketplaces, and enterprise blockchain integration."
      keywords="blockchain development, smart contracts, DeFi, NFT marketplace, cryptocurrency, Web3, Ethereum, Solidity"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Blockchain Development{' '}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge blockchain technology. From smart contracts to DeFi platforms, 
                we build secure, scalable blockchain solutions that drive innovation and create new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
                <Link href="/pricing" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Blockchain Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive blockchain development services to help you leverage the power of 
                decentralized technology for your business needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blockchainServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-purple-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-2xl font-bold text-purple-600 mb-4">
                      {service.price}
                    </div>
                    <Link
                      href="/contact"
                      className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Blockchain Solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine deep blockchain expertise with proven development practices to deliver 
                secure, scalable, and innovative solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {blockchainFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-purple-600 mb-4">
                      <IconComponent className="w-16 h-16 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build on Blockchain?</h2>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Let's discuss your blockchain project and explore how we can help you leverage 
              this transformative technology for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Start Your Project
              </Link>
              <a href="tel:+13024640950" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call Us Now
              </a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}