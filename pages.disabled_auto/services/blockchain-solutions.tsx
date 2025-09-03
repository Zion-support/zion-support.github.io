import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { CheckCircle, Shield, Zap, BarChart, Users, Award, Globe } from 'lucide-react';

const BlockchainSolutions: NextPage = () => {
  return (
    <Layout
      title="Blockchain Solutions - Zion Tech Group"
      description="Innovative blockchain technology for secure, transparent business processes. Smart contracts, DeFi applications, and custom blockchain solutions."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Blockchain
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Innovative blockchain technology for secure, transparent business processes. 
            From smart contracts to DeFi applications, we build the future of decentralized systems.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Start Your Blockchain Project
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Blockchain Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Blockchain Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We develop cutting-edge blockchain solutions that provide security, transparency, 
              and efficiency for your business processes and applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Contracts</h3>
              <p className="text-gray-600 mb-4">
                Self-executing contracts with terms directly written into code for automated, secure transactions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Ethereum Smart Contracts
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Solidity Development
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Contract Auditing
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">DeFi Applications</h3>
              <p className="text-gray-600 mb-4">
                Decentralized finance applications for lending, borrowing, trading, and yield farming.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  DEX Development
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Lending Platforms
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Yield Farming
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">NFT Platforms</h3>
              <p className="text-gray-600 mb-4">
                Non-fungible token platforms for digital art, collectibles, and unique digital assets.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  NFT Marketplace
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Minting Platforms
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Gaming NFTs
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Token Development</h3>
              <p className="text-gray-600 mb-4">
                Custom cryptocurrency and utility token development for various blockchain ecosystems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  ERC-20 Tokens
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  BEP-20 Tokens
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Custom Tokenomics
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Enterprise Blockchain</h3>
              <p className="text-gray-600 mb-4">
                Private and consortium blockchain solutions for enterprise applications and supply chain management.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Hyperledger Fabric
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Supply Chain Solutions
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Identity Management
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Blockchain Consulting</h3>
              <p className="text-gray-600 mb-4">
                Strategic consulting to help you understand and implement blockchain technology effectively.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Technology Assessment
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Architecture Design
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Implementation Strategy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Blockchain Platforms We Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with leading blockchain platforms to provide the best solutions for your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-4">Ethereum</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Smart Contracts</li>
                <li>DeFi Applications</li>
                <li>NFT Development</li>
                <li>ERC-20 Tokens</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-4">Binance Smart Chain</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>BEP-20 Tokens</li>
                <li>DeFi Protocols</li>
                <li>Cross-chain Solutions</li>
                <li>Low-cost Transactions</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-4">Polygon</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Layer 2 Solutions</li>
                <li>Scalable dApps</li>
                <li>Fast Transactions</li>
                <li>Ethereum Compatibility</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <h3 className="text-lg font-semibold mb-4">Hyperledger</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Enterprise Solutions</li>
                <li>Private Blockchains</li>
                <li>Supply Chain</li>
                <li>Consortium Networks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Embrace Blockchain Technology?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Let's discuss how blockchain solutions can transform your business and provide new opportunities for growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Start Your Blockchain Project
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlockchainSolutions;