import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award,
  TrendingUp,
  DollarSign,
  Clock,
  Star
} from 'lucide-react';
import Layout from '../components/Layout';

const blockchainServices = [
  {
    title: "Smart Contract Development",
    description: "Secure, audited smart contracts for DeFi, NFTs, and enterprise applications",
    icon: Shield,
    features: ["Solidity/Vyper development", "Security audits", "Gas optimization", "Multi-chain deployment"],
    pricing: "Starting at $5,000"
  },
  {
    title: "DeFi Platform Development",
    description: "Complete decentralized finance platforms with DEX, lending, and yield farming",
    icon: Zap,
    features: ["DEX development", "Liquidity pools", "Yield farming", "Governance tokens"],
    pricing: "Starting at $25,000"
  },
  {
    title: "NFT Marketplace",
    description: "Custom NFT marketplaces with minting, trading, and royalty systems",
    icon: Globe,
    features: ["NFT minting", "Marketplace trading", "Royalty systems", "Metadata management"],
    pricing: "Starting at $15,000"
  },
  {
    title: "Blockchain Integration",
    description: "Integrate blockchain technology into existing business systems",
    icon: Lock,
    features: ["API development", "Web3 integration", "Wallet connectivity", "Transaction management"],
    pricing: "Starting at $8,000"
  }
];

const benefits = [
  {
    title: "Enhanced Security",
    description: "Immutable, tamper-proof records with cryptographic security",
    icon: Shield
  },
  {
    title: "Transparency",
    description: "Public, verifiable transactions and smart contract execution",
    icon: Globe
  },
  {
    title: "Decentralization",
    description: "No single point of failure, distributed network architecture",
    icon: Users
  },
  {
    title: "Cost Efficiency",
    description: "Reduced intermediaries and automated processes",
    icon: DollarSign
  }
];

const stats = [
  { number: '50+', label: 'Blockchain Projects' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '15+', label: 'Blockchain Networks' }
];

export default function BlockchainServices() {
  return (
    <Layout 
      title="Blockchain Development Services | Zion Tech Group"
      description="Expert blockchain development services including smart contracts, DeFi platforms, NFT marketplaces, and enterprise blockchain integration."
      keywords="blockchain development, smart contracts, DeFi, NFT marketplace, Web3, cryptocurrency, decentralized applications"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Blockchain Development Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Build secure, scalable blockchain solutions with our expert development team
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Started
                </Link>
                <Link 
                  href="/quote" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Blockchain Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive blockchain development solutions for modern businesses
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {blockchainServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-blue-600 font-semibold">{service.pricing}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Blockchain?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unlock the power of decentralized technology for your business
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Build on Blockchain?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Let's discuss your blockchain project and create a solution that transforms your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/case-studies" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}