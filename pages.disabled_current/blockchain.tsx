import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const features = [
  {
    icon: Shield,
    title: 'Smart Contracts',
    description: 'Secure, self-executing contracts with automated enforcement and transparent terms.'
  },
  {
    icon: Zap,
    title: 'DeFi Solutions',
    description: 'Decentralized finance applications including lending, borrowing, and trading platforms.'
  },
  {
    icon: Globe,
    title: 'NFT Marketplaces',
    description: 'Custom NFT platforms for digital art, collectibles, and unique digital assets.'
  },
  {
    icon: Lock,
    title: 'Security Audits',
    description: 'Comprehensive smart contract audits to ensure security and prevent vulnerabilities.'
  }
];

const services = [
  {
    title: 'Smart Contract Development',
    description: 'Custom smart contracts for various blockchain platforms including Ethereum, BSC, and Polygon.',
    features: ['Solidity Development', 'Gas Optimization', 'Multi-chain Support', 'Testing & Deployment'],
    pricing: 'Starting at $5,000'
  },
  {
    title: 'DeFi Platform Development',
    description: 'Complete decentralized finance solutions with advanced trading and liquidity features.',
    features: ['DEX Development', 'Yield Farming', 'Liquidity Pools', 'Token Economics'],
    pricing: 'Starting at $15,000'
  },
  {
    title: 'NFT Marketplace',
    description: 'Custom NFT platforms with minting, trading, and marketplace functionality.',
    features: ['NFT Minting', 'Marketplace UI', 'Royalty System', 'Wallet Integration'],
    pricing: 'Starting at $8,000'
  },
  {
    title: 'Blockchain Integration',
    description: 'Integrate blockchain technology into existing applications and systems.',
    features: ['API Integration', 'Wallet Connectivity', 'Transaction Management', 'Real-time Updates'],
    pricing: 'Starting at $3,000'
  }
];

const stats = [
  { number: '50+', label: 'Blockchain Projects' },
  { number: '15+', label: 'DeFi Platforms' },
  { number: '25+', label: 'Smart Contracts' },
  { number: '99.9%', label: 'Security Score' }
];

export default function BlockchainPage() {
  return (
    <MainLayout
      title="Blockchain Solutions - Zion Tech Group"
      description="Expert blockchain development services including smart contracts, DeFi platforms, NFT marketplaces, and blockchain integration solutions."
      keywords="blockchain development, smart contracts, DeFi, NFT marketplace, cryptocurrency, blockchain integration"
      canonical="https://ziontechgroup.com/blockchain"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Blockchain Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              Transform your business with cutting-edge blockchain technology. 
              From smart contracts to DeFi platforms, we build secure, scalable solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get Started Today
              </Link>
              <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                View Case Studies
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Blockchain Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in developing secure, scalable blockchain solutions that drive innovation and create value.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-purple-600 mb-4">
                    <IconComponent className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive blockchain development services tailored to your business needs.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-600">{service.pricing}</span>
                  <Link 
                    href="/contact"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
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
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Build on Blockchain?</h2>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Let's discuss your blockchain project and create a secure, innovative solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Start Your Project
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}