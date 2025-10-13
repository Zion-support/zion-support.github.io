<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD

import { CheckCircle } from 'lucide-react';
const BlockchainPage: React.FC = () => {
  const blockchainServices = [
    {
      title: 'Smart Contract Development',
      description: 'Secure, audited smart contracts for DeFi, NFTs, and enterprise blockchain applications.',
      icon: '📜',
      price: 'Starting at $8,000/project',
      features: ['Solidity development', 'Security auditing', 'Gas optimization', 'Testing & deployment', 'Documentation'],
      benefits: ['Automate business processes', 'Reduce transaction costs', 'Ensure transparency'],
      marketPrice: '$15,000-50,000/project',
      category: 'Smart Contracts',
      technologies: ['Solidity', 'Vyper', 'Rust', 'Go', 'JavaScript']
    },
    {
      title: 'DeFi Protocol Development',
      description: 'Decentralized finance protocols including DEXs, lending platforms, and yield farming.',
      icon: '🏦',
      price: 'Starting at $25,000/project',
      features: ['DEX development', 'Lending protocols', 'Yield farming', 'Liquidity pools', 'Governance tokens'],
      benefits: ['Create new revenue streams', 'Access global liquidity', 'Reduce financial barriers'],
      marketPrice: '$50,000-200,000/project',
      category: 'DeFi',
      technologies: ['Ethereum', 'Polygon', 'BSC', 'Avalanche', 'Arbitrum']
    },
    {
      title: 'NFT Marketplace Development',
      description: 'Complete NFT marketplace solutions with minting, trading, and auction capabilities.',
      icon: '🎨',
      price: 'Starting at $15,000/project',
      features: ['NFT minting', 'Marketplace functionality', 'Auction system', 'Royalty management', 'Mobile app'],
      benefits: ['Monetize digital assets', 'Create new business models', 'Engage communities'],
      marketPrice: '$30,000-100,000/project',
      category: 'NFTs',
      technologies: ['IPFS', 'OpenSea API', 'Web3.js', 'Ethers.js', 'React']
    },
    {
      title: 'Blockchain Integration Services',
      description: 'Integrate blockchain technology into existing business systems and applications.',
      icon: '🔗',
      price: 'Starting at $5,000/month',
      features: ['API development', 'System integration', 'Data synchronization', 'Security implementation', 'Maintenance'],
      benefits: ['Modernize legacy systems', 'Improve data integrity', 'Enable new capabilities'],
      marketPrice: '$8,000-20,000/month',
      category: 'Integration',
      technologies: ['Web3 APIs', 'REST APIs', 'GraphQL', 'Microservices', 'Cloud Integration']
    },
    {
      title: 'Cryptocurrency Wallet Development',
      description: 'Secure multi-chain cryptocurrency wallets with advanced features and security.',
      icon: '👛',
      price: 'Starting at $12,000/project',
      features: ['Multi-chain support', 'Hardware wallet integration', 'DeFi integration', 'Security features', 'Mobile & web'],
      benefits: ['Secure asset management', 'Multi-chain compatibility', 'Enhanced user experience'],
      marketPrice: '$25,000-80,000/project',
      category: 'Wallets',
      technologies: ['React Native', 'Flutter', 'Web3.js', 'WalletConnect', 'Hardware Security']
    },
    {
      title: 'Blockchain Security Auditing',
      description: 'Comprehensive security audits for smart contracts and blockchain applications.',
      icon: '🔒',
      price: 'Starting at $3,000/audit',
      features: ['Code review', 'Vulnerability assessment', 'Penetration testing', 'Compliance checking', 'Remediation'],
      benefits: ['Prevent security breaches', 'Ensure compliance', 'Build user trust'],
      marketPrice: '$5,000-15,000/audit',
      category: 'Security',
      technologies: ['Mythril', 'Slither', 'Oyente', 'Echidna', 'Custom Tools']
    },
    {
      title: 'Token Development & ICO/IDO',
      description: 'Custom token development with ICO/IDO launch support and marketing strategies.',
      icon: '🪙',
      price: 'Starting at $10,000/project',
      features: ['Token creation', 'ICO/IDO platform', 'Marketing strategy', 'Legal compliance', 'Community building'],
      benefits: ['Raise capital efficiently', 'Build community', 'Create utility tokens'],
      marketPrice: '$20,000-100,000/project',
      category: 'Tokens',
      technologies: ['ERC-20', 'ERC-721', 'ERC-1155', 'BEP-20', 'Custom Standards']
    },
    {
      title: 'Enterprise Blockchain Solutions',
      description: 'Private blockchain networks for enterprise use cases with custom governance.',
      icon: '🏢',
      price: 'Starting at $20,000/project',
      features: ['Private networks', 'Custom governance', 'Consensus mechanisms', 'Integration APIs', 'Management tools'],
      benefits: ['Improve transparency', 'Reduce costs', 'Enhance security'],
      marketPrice: '$40,000-150,000/project',
      category: 'Enterprise',
      technologies: ['Hyperledger', 'Ethereum Private', 'Quorum', 'Corda', 'Custom Blockchains']
    },
    {
      title: 'Cross-Chain Bridge Development',
      description: 'Secure cross-chain bridges for asset transfers between different blockchain networks.',
      icon: '🌉',
      price: 'Starting at $18,000/project',
      features: ['Multi-chain support', 'Asset locking', 'Minting & burning', 'Security mechanisms', 'Monitoring'],
      benefits: ['Enable interoperability', 'Expand user base', 'Increase liquidity'],
      marketPrice: '$35,000-120,000/project',
      category: 'Interoperability',
      technologies: ['Cosmos SDK', 'Polkadot', 'LayerZero', 'Wormhole', 'Custom Bridges']
    },
    {
      title: 'DAO Development & Governance',
      description: 'Decentralized Autonomous Organizations with voting, treasury, and governance mechanisms.',
      icon: '🗳️',
      price: 'Starting at $12,000/project',
      features: ['Voting systems', 'Treasury management', 'Proposal mechanisms', 'Governance tokens', 'Integration'],
      benefits: ['Decentralize decision making', 'Increase transparency', 'Engage communities'],
      marketPrice: '$25,000-80,000/project',
      category: 'DAOs',
      technologies: ['Aragon', 'Snapshot', 'Governor', 'Custom Governance', 'Voting Mechanisms']
    },
    {
      title: 'Blockchain Analytics & Monitoring',
      description: 'Real-time blockchain analytics, monitoring, and compliance reporting solutions.',
      icon: '📊',
      price: 'Starting at $2,500/month',
      features: ['Transaction monitoring', 'Compliance reporting', 'Risk assessment', 'Analytics dashboards', 'Alerts'],
      benefits: ['Ensure compliance', 'Monitor risks', 'Gain insights'],
      marketPrice: '$4,000-12,000/month',
      category: 'Analytics',
      technologies: ['The Graph', 'Alchemy', 'Moralis', 'Custom Analytics', 'Compliance Tools']
    },
    {
      title: 'Web3 Application Development',
      description: 'Complete Web3 applications with frontend, backend, and blockchain integration.',
      icon: '🌐',
      price: 'Starting at $15,000/project',
      features: ['Frontend development', 'Backend APIs', 'Blockchain integration', 'User authentication', 'Deployment'],
      benefits: ['Create Web3 experiences', 'Engage crypto users', 'Build decentralized apps'],
      marketPrice: '$30,000-100,000/project',
      category: 'Web3 Apps',
      technologies: ['React', 'Next.js', 'Node.js', 'Web3.js', 'Ethers.js']
    }
  ];
  const categories = [...new Set(blockchainServices.map(service => service.category))];
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Blockchain & Web3 Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
                Build the future of decentralized applications with cutting-edge blockchain technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                  Explore Web3 Solutions
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                  Schedule Consultation
                </button>
=======
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, Shield, Brain, Globe, Zap } from 'lucide-react';
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, Shield, Brain, Globe, Zap } from 'lucide-react'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
const BlockchainPage: React.FC = () => {
  const features = [
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Link, Shield, Zap, Target, BarChart, Cpu, Sparkles } from 'lucide-react';
;
const BlockchainPage: React.FC = () => {
const blockchainServices = [
];
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    {
      icon: Shield,
      title: 'Secure Blockchain Solutions',
      description: 'Advanced blockchain technology with enterprise-grade security and compliance',},
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast blockchain transactions and smart contract execution',},
    {icon: Brain,
      title: 'AI-Powered Solutions',
<<<<<<< HEAD
      description: 'Intelligent blockchain solutions powered by advanced AI technology',},
    {icon: Globe,
=======
      description: 'Intelligent blockchain solutions powered by advanced AI technology'
    },
    {
<<<<<<< HEAD
      icon: Globe,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      title: 'Global Reach',
      description: 'Worldwide blockchain deployment and support for international businesses',}];
  const benefits = [
    'Advanced blockchain technology integration',
    'Real-time transaction processing',
    'Enterprise-grade security and compliance',
    'Scalable and flexible blockchain solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <Helmet />
        <title>Blockchain Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional Blockchain Solutions by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="blockchain solutions, blockchain technology, IT services, Zion Tech Group, smart contracts" />
      </Helmet>
<<<<<<< HEAD
<div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
<<<<<<< HEAD
          <h1 className="text-5xl font-bold text-white mb-6">Blockchain Solutions;</h1>
=======
          <h1 className="text-5xl font-bold text-white mb-6">
            Blockchain Solutions
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  </
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with cutting-edge blockchain technology and decentralized solutions.</p>
            Powered by advanced AI and industry expertise.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our blockchain solutions deliver unmatched performance, security, and scalability.</p>
          </p>
        </div>
        <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">,</div>
          {features.map((feature, index) => (
            <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover: bg-white/20 transition-all duration-300">,</div>
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
<<<<<<< HEAD
              <p className="text-gray-300">{feature.description</p>}</p>
=======
              <p className="text-gray-300">{feature.description}</p>
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
=======

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
            </div>
          ))}
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Our Blockchain Solutions?</h2>
          </h2>
          <div className="grid md: grid-cols-2 gap-6">,</div>
            {benefits.map((benefit, index) => (
              <div key={index}className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit</span>}</span>

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title></titl>Blockchain Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional Blockchain Solutions by Zion Tech Group. Advanced AI and IT solutions for your business." /></meta>
        <meta name="keywords" content="blockchain solutions, blockchain technology, IT services, Zion Tech Group, smart contracts" /></meta>
      </Helmet>
<div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
          <h1 className="text-5xl font-bold text-white mb-6"></h1>
            Blockchain Solutions
  </
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Transform your business with cutting-edge blockchain technology and decentralized solutions. 
            Powered by advanced AI and industry expertise.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            Our blockchain solutions deliver unmatched performance, security, and scalability.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div>
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"></div>
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" /></feature>
              <h3 className="text-xl font-semibold text-white mb-3"></h>{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>

            </div>
          ))}
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-8"></h2>
            Why Choose Our Blockchain Solutions?
          </h2>
          <div className="grid md:grid-cols-2 gap-6"></div>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3"></div>
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" /></CheckCircle>
                <span className="text-gray-300"></spa>{benefit}</span>

<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </section>
        {/* Key Benefits */}
=======
        </div>
<<<<<<< HEAD

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
{/* Key Benefits */}
=======
      title: 'Enterprise Blockchain Solutions',
      description: 'Private and consortium blockchain solutions for enterprise applications and supply chain management.',
      icon: '🏢',
      price: 'Starting at $20,000
      features: ['Private blockchain setup', 'Consortium management', 'Supply chain tracking', 'Identity management', 'Data privacy'],
      benefits: ['Improve transparency', 'Reduce fraud', 'Streamline operations'],
      marketPrice: '$40,000-150,000
      category: 'Enterprise',
      technologies: ['Hyperledger', 'Ethereum Enterprise', 'Corda', 'Quorum', 'Fabric']
    },
    {
      title: 'Cross-Chain Bridge Development',
      description: 'Interoperability solutions for seamless asset and data transfer between different blockchain networks.',
      icon: '🌉',
      price: 'Starting at $30,000
      features: ['Cross-chain bridges', 'Asset wrapping', 'Liquidity pools', 'Security audits', 'Multi-chain support'],
      benefits: ['Enable blockchain interoperability', 'Increase liquidity', 'Reduce fragmentation'],
      marketPrice: '$60,000-300,000
      category: 'Interoperability',
      technologies: ['Polkadot', 'Cosmos', 'LayerZero', 'Wormhole', 'Chainlink']
    },
    {
      title: 'Web3 Application Development',
      description: 'Full-stack Web3 applications with wallet integration, smart contract interaction, and decentralized storage.',
      icon: '🌐',
      price: 'Starting at $12,000/project',
      features: ['dApp development', 'Wallet integration', 'Smart contract integration', 'IPFS storage', 'User authentication'],
      benefits: ['Build decentralized applications', 'Enable user ownership', 'Create new business models'],
      marketPrice: '$25,000-100,000/project',
      category: 'Web3',
technologies: ['React', 'Next.js', 'Web3.js', 'Ethers.js', 'WalletConnect'];)
},
    {
      title: 'Blockchain Analytics Platform',
      description: 'Comprehensive blockchain data analysis and visualization platform for insights and monitoring.',
      icon: '📊',
      price: 'Starting at $8,000
      features: ['Transaction analysis', 'Address tracking', 'DeFi analytics', 'NFT metrics', 'Custom dashboards'],
      benefits: ['Gain blockchain insights', 'Monitor network activity', 'Make data-driven decisions'],
      marketPrice: '$15,000-60,000
      category: 'Analytics',
      technologies: ['The Graph', 'Alchemy', 'Moralis', 'Infura', 'Custom APIs'];)
},
    {
      title: 'Staking & Validator Services',
      description: 'Professional staking services and validator node management for various blockchain networks.',
      icon: '🏦',
      price: 'Starting at $2,000
      features: ['Validator setup', 'Staking management', 'Reward optimization', 'Security monitoring', 'Slashing protection'],
      benefits: ['Earn passive income', 'Support network security', 'Contribute to decentralization'],
      marketPrice: '$4,000-20,000
      category: 'Staking',
      technologies: ['Ethereum 2.0', 'Cosmos', 'Polkadot', 'Solana', 'Cardano'];)
},
    {
      title: 'Blockchain Consulting',
      description: 'Strategic blockchain consulting for enterprise adoption, technology selection, and implementation planning.',
      icon: '💡',
      price: 'Starting at $300
      feature,
    s: ['Technology assessment', 'Use case analysis', 'Implementation strategy', 'Risk assessment', 'ROI analysis'],
      benefits: ['Make informed decisions', 'Reduce implementation risks', 'Maximize blockchain value'],
      marketPrice: '$500-1,500
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Evaluation', 'Risk Assessment', 'ROI Analysis'];);
  ];
;
const categories = [...new Set(blockchainServices.map(service => service.category))];
  return (
    <div>
        <title>Blockchain Services - Zion Tech Group<
        <meta name="description" content="Comprehensive blockchain solutions including smart contracts, DeFi protocols, NFT marketplaces, and enterprise blockchain applications." 
        <meta name="keywords" content="blockchain development, smart contracts, DeFi, NFTs, enterprise blockchain, Web3" 
      <
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}<
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-30"><
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-indigo-800/50"><
          <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"><
            <div className="text-center"><
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Blockchain Solutions<
              <
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Transform your business with cutting-edge blockchain technology and decentralized solutions
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center"><
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                  Explore Blockchain Solutions
                <
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Schedule Blockchain Consultation
                <
              <
            <
          <
        <
        {/* Key Benefits *
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Blockchain Services?
              </h2>
              <p className="text-xl text-gray-600">
<<<<<<< HEAD
                Expert blockchain developers delivering secure, scalable, and innovative Web3 solutions
              </p>
=======
                Leading blockchain expertise with proven track record in DeFi, NFTs, and enterprise solutions
<<<<<<< HEAD
  </
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
<<<<<<< HEAD
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Link className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Experts</h3>
                <p className="text-gray-600">Certified developers with deep expertise in multiple blockchain platforms</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
                <p className="text-gray-600">Comprehensive security audits and best practices for all projects</p>
=======
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Link className="w-8 h-8 text-blue-600" />

        <section className="py-16 bg-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
                Why Choose Our Blockchain Services?
              </h2>
              <p className="text-xl text-gray-600"></p>
                Leading blockchain expertise with proven track record in DeFi, NFTs, and enterprise solutions
  </
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              <div className="text-center"></div>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Link className="w-8 h-8 text-blue-600" /></Link>

                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2"></h>Blockchain Experts</h3>
                <p className="text-gray-600">Certified blockchain developers and architects</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Shield className="w-8 h-8 text-green-600" /></Shield>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2"></h>Security First</h3>
                <p className="text-gray-600">Comprehensive security audits and best practices</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
              </div>
              <div className="text-center"></div>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Zap className="w-8 h-8 text-purple-600" /></Zap>
                </div>
<<<<<<< HEAD
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Development</h3>
                <p className="text-gray-600">Fast delivery with proven development methodologies and tools</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Success</h3>
                <p className="text-gray-600">Successfully launched 100+ blockchain projects across industries</p>
=======
                <h3 className="text-xl font-semibold text-gray-900 mb-2"></h>Rapid Development</h3>
                <p className="text-gray-600">Fast delivery with proven development frameworks</p>
              </div>
              <div className="text-center"></div>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Target className="w-8 h-8 text-orange-600" /></Target>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2"></h>Custom Solutions</h3>
                <p className="text-gray-600">Tailored blockchain solutions for your specific needs</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
<<<<<<< HEAD
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======

        {/* Services by Category */}{categories.map(category => ()
          <section key={category}className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,</div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Specialized {category.toLowerCase()} services for modern blockchain applications
                </p>
=======
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
=======
              <
            <
            <div className="grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-4 gap-8"><
              <div className="text-center"><
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><
                  <Link className="w-8 h-8 text-blue-600" 
                <
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Experts<
                <p className="text-gray-600">Certified blockchain developers and architects<
              <
              <div className="text-center"><
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><
                  <Shield className="w-8 h-8 text-green-600" 
                <
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First<
                <p className="text-gray-600">Comprehensive security audits and best practices<
              <
              <div className="text-center"><
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><
                  <Zap className="w-8 h-8 text-purple-600" 
                <
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Development<
                <p className="text-gray-600">Fast delivery with proven development frameworks<
              <
              <div className="text-center"><
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><
                  <Target className="w-8 h-8 text-orange-600" 
                <
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions<
                <p className="text-gray-600">Tailored blockchain solutions for your specific needs<
              <
            <
          <
        <
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From smart contracts to enterprise solutions, we provide comprehensive blockchain development services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blockchainServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    <span className="text-sm text-gray-500 ml-2">(Market: {service.marketPrice})</span>
                  </div>
        {/* Services by Category *
        {categories.map(category => (
          <section key={category)} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"><
              <div className="text-center mb-12"><
                <h2 className="text-3xl m,
    d:text-4xl font-bold text-gray-900 mb-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                  {category} Services
  </
                <p className="text-xl text-gray-600">
                  Professional {category.toLowerCase()} solutions powered by blockchain technology
<<<<<<< HEAD
  </
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blockchainServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-orange-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 50% vs market rates
<<<<<<< HEAD
                        </div>
=======
  </
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
<<<<<<< HEAD
                      <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                        Get Blockchain Consultation
                      </button>
=======
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover: bg-blue-700 transition-colors">,</button>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50"></section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
              <div className="text-center mb-12"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
                  {category} Services
  </
                <p className="text-xl text-gray-600"></p>
                  Professional {category.toLowerCase()} solutions powered by blockchain technology
  </
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {blockchainServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"></div>
                      <div className="text-4xl mb-4"></di>{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3"></h>{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="mb-4"></div>
                        <div className="flex items-center justify-between mb-2"></div>
                          <span className="text-2xl font-bold text-blue-600"></spa>{service.price}</span>
                          <span className="text-sm text-gray-500"></spa>Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold"></div>
                          Save up to 50% vs market rates
  </
                      </div>
                      <div className="mb-4"></div>
                        <h4 className="font-semibold text-gray-900 mb-2"></h>Key Features:</h4>
                        <ul className="space-y-1"></ul>
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600"></li>
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /></CheckCircle>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-4"></div>
                        <h4 className="font-semibold text-gray-900 mb-2"></h>Technologies:</h4>
                        <div className="flex flex-wrap gap-2"></div>
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"></span>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-6"></div>
                        <h4 className="font-semibold text-gray-900 mb-2"></h>Business Benefits:</h4>
                        <ul className="space-y-1"></ul>
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600"></li>
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" /></Star>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover: bg-blue-700 transition-colors"></button>

                        Get Blockchain Quote,
  </
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}
<<<<<<< HEAD
        {/* Blockchain Capabilities Showcase */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======

        {/* Blockchain Capabilities Showcase */} <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,</div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Blockchain Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive blockchain solutions covering all aspects of Web3 development
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg">
                <Link className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Contracts</h3>
<<<<<<< HEAD
                <p className="text-gray-600">Secure, audited smart contracts for all blockchain platforms</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg">
                <Coins className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">DeFi Protocols</h3>
                <p className="text-gray-600">Decentralized finance solutions including DEXs and lending platforms</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">NFT Solutions</h3>
                <p className="text-gray-600">Complete NFT marketplace and collection development</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Auditing</h3>
                <p className="text-gray-600">Comprehensive security audits and vulnerability assessments</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg">
                <BarChart className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics & Monitoring</h3>
                <p className="text-gray-600">Real-time blockchain analytics and compliance monitoring</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <Cpu className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Web3 Applications</h3>
                <p className="text-gray-600">Complete Web3 applications with frontend and backend integration</p>
=======

        {/* Blockchain Capabilities Showcase */}
        <section className="py-16 bg-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
                Our Blockchain Capabilities
  </
              <p className="text-xl text-gray-600"></p>
                Comprehensive blockchain technologies and methodologies for modern business applications,
  </
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg"></div>
                <Link className="w-12 h-12 text-blue-600 mx-auto mb-4" /></Link>
                <h3 className="text-xl font-semibold text-gray-900 mb-2"></h>Smart Contracts</h3>

                <p className="text-gray-600">Automated contract execution with transparency and security</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg"></div>
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" /></Shield>
                <h3 className="text-xl font-semibold text-gray-900 mb-2"></h>DeFi Protocols</h3>
                <p className="text-gray-600">Decentralized finance solutions for modern financial services</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg"></div>
                <Cpu className="w-12 h-12 text-purple-600 mx-auto mb-4" /></Cpu>
                <h3 className="text-xl font-semibold text-gray-900 mb-2"></h>NFT Marketplaces</h3>
                <p className="text-gray-600">Digital asset trading and ownership verification platforms</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg"></div>
                <Target className="w-12 h-12 text-orange-600 mx-auto mb-4" /></Target>
                <h3 className="text-xl font-semibold text-gray-900 mb-2"></h>Enterprise Solutions</h3>
                <p className="text-gray-600">Private and consortium blockchains for business applications</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg"></div>
                <Sparkles className="w-12 h-12 text-pink-600 mx-auto mb-4" /></Sparkles>
                <h3 className="text-xl font-semibold text-gray-900 mb-2"></h>Web3 Applications</h3>
                <p className="text-gray-600">Decentralized applications with user-friendly interfaces</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg"></div>
                <BarChart className="w-12 h-12 text-indigo-600 mx-auto mb-4" /></BarChart>
                <h3 className="text-xl font-semibold text-gray-900 mb-2"></h>Blockchain Analytics</h3>
                <p className="text-gray-600">Comprehensive data analysis and visualization tools</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build the Future of Web3?
            </h2>
<<<<<<< HEAD
            <p className="text-xl mb-8 text-orange-100">
              Contact our blockchain experts for a free consultation and custom Web3 strategy
            </p>
=======
            <p className="text-xl mb-8 text-blue-100">
=======
                <
              <
              <div className="grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-8">
                {blockchainServices
                  .filter(service => service.category === category)
                  .map((service, index) => (<
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"><
                      <div className="text-4xl mb-4">{service.icon}<
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}<
                      <p className="text-gray-600 mb-4">{service.description}<
                      <div className="mb-4"><
                        <div className="flex items-center justify-between mb-2"><
                          <span className="text-2xl font-bold text-blue-600">{service.price}<
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}<
                        <
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 50% vs market rates<
                        <
                      <
                      <div className="mb-4"><
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features: <
                        <ul className="space-y-1">)
                          {service.features.map((feature), featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" 
                              {feature};
                            <)
                          ))};
                        <
                      <
                      <div className="mb-4"><
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies: <
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech), techIndex) => (<
                            <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              {tech};
                            <)
                          ))};
                        <
                      <
                      <div className="mb-6"><
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits: <
                        <ul className="space-y-1">
                          {service.benefits.map((benefit), benefitIndex) => (<li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        Get Blockchain Quote
                      <
                    <
                  ))};
              <
            <
          <
        ))};
        {/* Blockchain Capabilities Showcase *
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"><
            <div className="text-center mb-12"><
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Blockchain Capabilities
              <
              <p className="text-xl text-gray-600">
                Comprehensive blockchain technologies and methodologies for modern business applications
              <
            <
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg"><
                <Link className="w-12 h-12 text-blue-600 mx-auto mb-4" 
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Contracts<
                <p className="text-gray-600">Automated contract execution with transparency and security<
              <
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg"><
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" 
                <h3 className="text-xl font-semibold text-gray-900 mb-2">DeFi Protocols<
                <p className="text-gray-600">Decentralized finance solutions for modern financial services<
              <
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg"><
                <Cpu className="w-12 h-12 text-purple-600 mx-auto mb-4" 
                <h3 className="text-xl font-semibold text-gray-900 mb-2">NFT Marketplaces<
                <p className="text-gray-600">Digital asset trading and ownership verification platforms<
              <
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg"><
                <Target className="w-12 h-12 text-orange-600 mx-auto mb-4" 
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Solutions<
                <p className="text-gray-600">Private and consortium blockchains for business applications<
              <
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg"><
                <Sparkles className="w-12 h-12 text-pink-600 mx-auto mb-4" 
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Web3 Applications<
                <p className="text-gray-600">Decentralized applications with user-friendly interfaces<
              <
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg"><
                <BarChart className="w-12 h-12 text-indigo-600 mx-auto mb-4" 
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Analytics<
                <p className="text-gray-600">Comprehensive data analysis and visualization tools<
              <
            <
          <
        <
        {/* Contact Section *
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform with Blockchain?
            <
            <p className="text-xl mb-8 text-blue-100">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature};
                        </li>
                      ))};
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit};
                        </li>
                      ))};
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {tech};
                        </span>
                      ))};
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                      {service.category};
                    </span>
                  </div>
                </div>
              ))};
            </div>
          </div>
        </section>
        {/* CTA Section */};
        <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build on Blockchain?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Let's discuss your blockchain project and create a solution that transforms your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                Start Your Project
              </a>
              <a href="/pricing"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                View Pricing
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              Contact our blockchain experts for a free consultation and custom blockchain strategy development
  </
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-orange-200">
=======

        {/* Contact Section */} <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">,</div>
            <h2 className="text-3xl md: text-4xl font-bold mb-4">,</h2>
              Ready to Transform with Blockchain?
            </h2>
            <p className="text-xl mb-8 text-blue-100">Contact our blockchain experts for a free consultation and custom blockchain strategy development;</p>
  </
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <a;
                href="tel: +13024640950",
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover: bg-blue-50 transition-colors inline-flex items-center">,
                📞 +1 302 464 0950;
  </
              <a;
                href="mailto: kleber@ziontechgroup.com",
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-blue-600 transition-colors">,

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4"></h2>
              Ready to Transform with Blockchain?
            </h2>
            <p className="text-xl mb-8 text-blue-100"></p>
              Contact our blockchain experts for a free consultation and custom blockchain strategy development
  </
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"></a>
                📞 +1 302 464 0950
<<<<<<< HEAD
  </
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"></a>

                ✉️ kleber@ziontechgroup.com,
  </
            </div>
            <div className="mt-8 text-sm text-blue-200"></div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
=======
              <
              <a href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hove,
    r:text-blue-600 transition-colors">
                ✉️ kleber@ziontechgroup.com
              <
            <
            <div className="mt-8 text-sm text-blue-200"><
              <p>📍 364 E Main St STE 1008, Middletown DE 19709<
            <
          <
        <
      <
    <
  );
              </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            </div>
          </div>
        </section>
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
      </div>
<<<<<<< HEAD
    </>
  );
};
export default BlockchainPage;
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'

const BlockchainPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blockchain Solutions - Zion Tech Group</title>
        <meta name="description" content="Blockchain Solutions services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Blockchain Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced Blockchain Solutions solutions by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlockchainPage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
<<<<<<< HEAD
    </div>
  )
}
export default BlockchainPage
  </a>
  </a>
  </p>
  </p>
  </h2>
  </button>
  </p>
  </h2>
  </p>
  </h1>
  </div>
=======
    </>
);
};
export default BlockchainPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
