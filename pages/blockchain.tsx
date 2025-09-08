import React from 'react';
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
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';

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
    <div><Head>
        <title>Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive blockchain development services including smart contracts, DeFi, NFTs, and security audits." />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Blockchain Solutions
              </h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
                Build the future with secure, scalable blockchain solutions.
                From smart contracts to DeFi protocols, we deliver cutting-edge blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Get Started
                </Link>
                <Link href="/pricing" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Services Grid */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Blockchain Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end blockchain development and consulting services for modern businesses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Technology Stack */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work with the latest blockchain technologies and frameworks.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">ETH</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Ethereum</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">POL</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Polygon</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">BSC</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">BSC</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">SOL</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Solana</h3>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="bg-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build on Blockchain?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your blockchain project and how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Start Your Project
              </Link>
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}