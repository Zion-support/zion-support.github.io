import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Cloud, Database, Smartphone, Brain, Cpu, Wifi, Star, Sparkles, Rocket, Lock, Coins, Link as LinkIcon, TrendingUp, FileText, Users } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIBlockchainSolutionsPage() {
  const features = [
    {
      icon: <Lock className="w-8 h-8 text-cyan-400" />,
      title: 'Smart Contract Development',
      description: 'AI-powered smart contracts with automated execution and self-optimizing capabilities.',
      benefits: ['Smart Contract Audit - $5,000/contract', 'DeFi Protocols - $25,000/development', 'NFT Marketplaces - $35,000/setup', 'DAO Governance - $20,000/implementation']
    },
    {
      icon: <Coins className="w-8 h-8 text-purple-400" />,
      title: 'Cryptocurrency Solutions',
      description: 'Custom cryptocurrency development with AI-driven trading algorithms and market analysis.',
      benefits: ['Token Development - $15,000/launch', 'Trading Bots - $12,000/month', 'Market Analysis - $8,000/month', 'Wallet Integration - $10,000/setup']
    },
    {
      icon: <LinkIcon className="w-8 h-8 text-green-400" />,
      title: 'Cross-Chain Integration',
      description: 'Seamless integration between different blockchain networks with AI-powered bridge solutions.',
      benefits: ['Bridge Development - $30,000/project', 'Cross-Chain DApps - $40,000/development', 'Interoperability - $25,000/setup', 'Asset Migration - $15,000/implementation']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
      title: 'DeFi Solutions',
      description: 'Decentralized finance applications with AI-powered yield optimization and risk management.',
      benefits: ['Yield Farming - $35,000/setup', 'Liquidity Pools - $20,000/implementation', 'Risk Management - $15,000/month', 'Portfolio Optimization - $12,000/month']
    },
    {
      icon: <FileText className="w-8 h-8 text-pink-400" />,
      title: 'NFT Platforms',
      description: 'Complete NFT marketplace solutions with AI-powered metadata generation and rarity analysis.',
      benefits: ['NFT Marketplace - $50,000/development', 'Metadata Generation - $8,000/month', 'Rarity Analysis - $5,000/setup', 'Royalty Management - $10,000/implementation']
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'DAO Development',
      description: 'Decentralized Autonomous Organizations with AI-powered governance and decision-making systems.',
      benefits: ['DAO Setup - $25,000/implementation', 'Governance Tokens - $15,000/development', 'Voting Systems - $12,000/setup', 'Treasury Management - $8,000/month']
    }
  ]

  const blockchainTypes = [
    {
      title: 'Ethereum',
      description: 'Smart contracts and DApps on the most popular blockchain platform.',
      icon: <Coins className="w-6 h-6" />,
      price: 'Starting at $20,000'
    },
    {
      title: 'Polygon',
      description: 'Fast and low-cost transactions with Ethereum compatibility.',
      icon: <Zap className="w-6 h-6" />,
      price: 'Starting at $15,000'
    },
    {
      title: 'Binance Smart Chain',
      description: 'High-performance blockchain with low transaction fees.',
      icon: <TrendingUp className="w-6 h-6" />,
      price: 'Starting at $18,000'
    },
    {
      title: 'Solana',
      description: 'Ultra-fast blockchain with high throughput capabilities.',
      icon: <Rocket className="w-6 h-6" />,
      price: 'Starting at $25,000'
    }
  ]

  const useCases = [
    'Supply Chain Tracking',
    'Digital Identity Management',
    'Decentralized Finance (DeFi)',
    'Non-Fungible Tokens (NFTs)',
    'Smart Contracts',
    'Cross-Border Payments',
    'Asset Tokenization',
    'Voting Systems'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary blockchain solutions powered by AI. Smart contracts, DeFi protocols, NFT platforms, and DAO development services." />
        <meta name="keywords" content="blockchain development, smart contracts, DeFi, NFTs, DAO, cryptocurrency, Web3, AI blockchain" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 mb-6">
              <Lock className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-300 text-sm font-medium">Decentralized AI Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">Blockchain Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
              Build the future of decentralized applications with AI-enhanced blockchain technology. 
              Smart contracts, DeFi protocols, NFT platforms, and DAO governance powered by artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
              >
                Start Blockchain Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/ai-services" 
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Blockchain <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive blockchain development services enhanced with AI capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-green-500/20 transform group-hover:scale-105">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-cyan-500/20 inline-block">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">{feature.description}</p>
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchain Types Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Supported <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Blockchains</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              We develop on all major blockchain platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {blockchainTypes.map((blockchain, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 mr-4">
                    {blockchain.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{blockchain.title}</h3>
                    <p className="text-cyan-400 font-medium">{blockchain.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{blockchain.description}</p>
              </div>
            ))}
          </div>

          {/* Use Cases Section */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Common Use Cases</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg p-4 text-center">
                  <span className="text-white font-medium">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 via-cyan-600 to-purple-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.3),transparent_50%)]"></div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Go Blockchain?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
                  Transform your business with decentralized solutions. Get started with a free blockchain consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Get Blockchain Consultation
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    View All AI Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}