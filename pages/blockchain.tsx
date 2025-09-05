import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Code,
  Database,
  Smartphone,
  CreditCard,
  Building,
  Award
} from 'lucide-react';
import Layout from './components/Layout';

const blockchainServices = [
  {
    title: "Smart Contract Development",
    description: "Secure, audited smart contracts for DeFi, NFTs, and enterprise applications",
    icon: Code,
    features: ["Solidity & Rust development", "Security audits", "Gas optimization", "Multi-chain deployment"]
  },
  {
    title: "DeFi Solutions",
    description: "Decentralized finance platforms including DEXs, lending protocols, and yield farming",
    icon: TrendingUp,
    features: ["DEX development", "Lending protocols", "Yield farming", "Liquidity mining"]
  },
  {
    title: "NFT Marketplaces",
    description: "Complete NFT marketplace solutions with minting, trading, and auction capabilities",
    icon: Smartphone,
    features: ["NFT minting", "Marketplace creation", "Royalty systems", "Cross-chain NFTs"]
  },
  {
    title: "Enterprise Blockchain",
    description: "Private and consortium blockchain solutions for enterprise use cases",
    icon: Building,
    features: ["Hyperledger Fabric", "Ethereum Enterprise", "Consortium networks", "Permissioned chains"]
  }
];

const useCases = [
  {
    industry: "Financial Services",
    applications: ["Cross-border payments", "Trade finance", "Digital identity", "Regulatory compliance"],
    icon: CreditCard
  },
  {
    industry: "Supply Chain",
    applications: ["Product traceability", "Authenticity verification", "Smart contracts", "Transparency"],
    icon: Globe
  },
  {
    industry: "Healthcare",
    applications: ["Patient data security", "Drug traceability", "Clinical trials", "Medical records"],
    icon: Shield
  },
  {
    industry: "Real Estate",
    applications: ["Property tokenization", "Smart contracts", "Title management", "Fractional ownership"],
    icon: Building
  }
];

const technologies = [
  "Ethereum", "Polygon", "Binance Smart Chain", "Solana", "Cardano", 
  "Polkadot", "Avalanche", "Hyperledger Fabric", "Corda", "Quorum"
];

export default function Blockchain() {
  return (
    <Layout 
      title="Blockchain Development Services | Zion Tech Group"
      description="Expert blockchain development services including smart contracts, DeFi solutions, NFT marketplaces, and enterprise blockchain implementations."
      keywords="blockchain development, smart contracts, DeFi, NFT marketplace, enterprise blockchain, cryptocurrency, Web3"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Blockchain Development
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              Transform your business with cutting-edge blockchain solutions. From smart contracts to DeFi platforms, we build the future of decentralized technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Start Your Project
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Blockchain Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive blockchain development services tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blockchainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how blockchain technology can transform your industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {useCase.industry}
                </h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      • {app}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with leading blockchain platforms and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-gray-800 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build on Blockchain?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your blockchain project and explore how we can help you leverage this transformative technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Start Your Project
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}