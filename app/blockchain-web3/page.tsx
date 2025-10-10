'use client';
import React from 'react';
import { Lock, Globe, Zap, Shield, Target, Users, BarChart, Settings, CheckCircle, ArrowRight, Brain, Code, Database, Cloud, Smartphone, DollarSign, Clock, Star, Award, TrendingUp, Heart, Cpu, Shield as Security, Globe as World, Zap as Lightning, Target as Crosshair, Users as People, BarChart as Analytics, Settings as Config, CheckCircle as Check, ArrowRight as Arrow, Brain as AI, Code as Dev, Database as Data, Cloud as CloudIcon, Smartphone as Mobile, DollarSign as Money, Clock as Time, Star as StarIcon, Award as Trophy, TrendingUp as Growth, Heart as Love } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlockchainWeb3Page: React.FC = () => {
  const services = [
    {
      title: 'Smart Contract Development',
      description: 'Secure, audited smart contracts for DeFi, NFTs, and enterprise applications',
      icon: Code,
      price: 'Custom Pricing',
      features: [
        'Solidity & Rust development',
        'Security auditing',
        'Gas optimization',
        'Multi-chain deployment',
        'Upgradeable contracts',
        'Testing & validation'
      ],
      benefits: [
        'Reduced transaction costs',
        'Enhanced security',
        'Automated execution',
        'Transparent operations'
      ],
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-400/30',
      category: 'Development'
    },
    {
      title: 'DeFi Solutions',
      description: 'Decentralized finance protocols and applications for lending, trading, and yield farming',
      icon: DollarSign,
      price: 'Custom Pricing',
      features: [
        'DEX development',
        'Lending protocols',
        'Yield farming strategies',
        'Liquidity pools',
        'Token economics',
        'Governance systems'
      ],
      benefits: [
        'Permissionless access',
        'Global liquidity',
        'Automated market making',
        'Reduced intermediaries'
      ],
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-400/30',
      category: 'Finance'
    },
    {
      title: 'NFT Marketplaces',
      description: 'Complete NFT marketplace solutions with minting, trading, and royalty systems',
      icon: Image,
      price: 'Custom Pricing',
      features: [
        'NFT minting platform',
        'Marketplace functionality',
        'Royalty management',
        'Metadata standards',
        'IPFS integration',
        'Multi-wallet support'
      ],
      benefits: [
        'Creator monetization',
        'Digital ownership',
        'Interoperability',
        'Provenance tracking'
      ],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-400/30',
      category: 'Marketplace'
    },
    {
      title: 'Web3 Integration',
      description: 'Seamless integration of Web3 technologies into existing applications and platforms',
      icon: Globe,
      price: 'Custom Pricing',
      features: [
        'Wallet integration',
        'MetaMask connectivity',
        'Transaction management',
        'Token interactions',
        'API development',
        'SDK creation'
      ],
      benefits: [
        'Enhanced user experience',
        'Decentralized identity',
        'Cross-platform compatibility',
        'Future-proof architecture'
      ],
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-400/30',
      category: 'Integration'
    },
    {
      title: 'Blockchain Consulting',
      description: 'Strategic guidance on blockchain implementation and Web3 transformation',
      icon: Brain,
      price: 'Custom Pricing',
      features: [
        'Technology assessment',
        'Architecture design',
        'Tokenomics design',
        'Regulatory compliance',
        'Security audits',
        'Implementation planning'
      ],
      benefits: [
        'Expert guidance',
        'Risk mitigation',
        'Cost optimization',
        'Strategic alignment'
      ],
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-400/30',
      category: 'Consulting'
    },
    {
      title: 'Cross-Chain Solutions',
      description: 'Interoperability solutions for seamless asset and data transfer across blockchains',
      icon: Zap,
      price: 'Custom Pricing',
      features: [
        'Bridge development',
        'Cross-chain protocols',
        'Asset wrapping',
        'Oracle integration',
        'Multi-chain wallets',
        'Interoperability standards'
      ],
      benefits: [
        'Enhanced liquidity',
        'Reduced fragmentation',
        'Improved scalability',
        'Universal compatibility'
      ],
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-400/30',
      category: 'Interoperability'
    }
  ];

  const technologies = [
    {
      name: 'Ethereum',
      description: 'Leading smart contract platform',
      icon: 'Ξ',
      color: 'text-blue-400',
      features: ['Smart contracts', 'DeFi ecosystem', 'NFT standards', 'EVM compatibility']
    },
    {
      name: 'Polygon',
      description: 'Ethereum scaling solution',
      icon: '⬟',
      color: 'text-purple-400',
      features: ['Low fees', 'Fast transactions', 'Ethereum compatibility', 'Growing ecosystem']
    },
    {
      name: 'Solana',
      description: 'High-performance blockchain',
      icon: '◎',
      color: 'text-green-400',
      features: ['High throughput', 'Low latency', 'Rust development', 'Growing DeFi']
    },
    {
      name: 'Polkadot',
      description: 'Multi-chain network',
      icon: '●',
      color: 'text-pink-400',
      features: ['Parachains', 'Interoperability', 'Governance', 'Substrate framework']
    },
    {
      name: 'Avalanche',
      description: 'EVM-compatible platform',
      icon: '🔺',
      color: 'text-red-400',
      features: ['Subnets', 'Fast finality', 'Low fees', 'EVM compatibility']
    },
    {
      name: 'Binance Smart Chain',
      description: 'Ethereum-compatible chain',
      icon: 'BNB',
      color: 'text-yellow-400',
      features: ['Low fees', 'Fast transactions', 'EVM compatibility', 'Large ecosystem']
    }
  ];

  const stats = [
    { label: 'Blockchain Projects', value: '50+', icon: Code },
    { label: 'Smart Contracts Deployed', value: '200+', icon: Shield },
    { label: 'Total Value Locked', value: '$2.5B+', icon: DollarSign },
    { label: 'Active Users', value: '100K+', icon: Users },
    { label: 'Supported Chains', value: '15+', icon: Globe },
    { label: 'Success Rate', value: '99%', icon: Star }
  ];

  const useCases = [
    {
      title: 'DeFi Protocols',
      description: 'Decentralized lending, borrowing, and trading platforms',
      icon: DollarSign,
      examples: ['DEX platforms', 'Lending protocols', 'Yield farming', 'Liquidity mining']
    },
    {
      title: 'NFT Platforms',
      description: 'Digital art, gaming, and collectibles marketplaces',
      icon: Image,
      examples: ['Art marketplaces', 'Gaming NFTs', 'Music platforms', 'Sports collectibles']
    },
    {
      title: 'Enterprise Solutions',
      description: 'Supply chain, identity, and data management systems',
      icon: Building,
      examples: ['Supply chain tracking', 'Digital identity', 'Document verification', 'Data provenance']
    },
    {
      title: 'Gaming & Metaverse',
      description: 'Play-to-earn games and virtual world platforms',
      icon: Gamepad2,
      examples: ['P2E games', 'Virtual worlds', 'Gaming economies', 'Virtual real estate']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Blockchain & <span className="text-cyan-400">Web3</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge blockchain technology and Web3 solutions. 
            From smart contracts to DeFi protocols, we build the decentralized future.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our Blockchain Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${service.borderColor}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 neon-text">{service.title}</h3>
                    <div className={`text-sm font-semibold ${service.color}`}>{service.category}</div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-pink-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <div className={`text-lg font-bold mb-4 neon-text ${service.color}`}>
                    {service.price}
                  </div>
                  <a 
                    href="/contact" 
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                  >
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Supported Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className={`text-4xl font-bold mb-4 ${tech.color}`}>{tech.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 neon-text">{tech.name}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Use Cases & Applications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <useCase.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white neon-text">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {useCase.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-sm text-gray-300">
                        <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Our Blockchain Solutions?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
              <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Security First</h3>
              <p className="text-gray-300">
                We prioritize security in every blockchain solution, with comprehensive auditing and best practices.
              </p>
            </div>
            
            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
              <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We stay ahead of the curve with the latest blockchain technologies and Web3 innovations.
              </p>
            </div>
            
            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
              <Users className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Expert Team</h3>
              <p className="text-gray-300">
                Our blockchain experts have years of experience building successful Web3 applications.
              </p>
            </div>
            
            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
              <Target className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Custom Solutions</h3>
              <p className="text-gray-300">
                Every blockchain solution is tailored to your specific business needs and requirements.
              </p>
            </div>
            
            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
              <Globe className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Multi-Chain Support</h3>
              <p className="text-gray-300">
                We support multiple blockchain networks for maximum flexibility and interoperability.
              </p>
            </div>
            
            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
              <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Future-Proof</h3>
              <p className="text-gray-300">
                Our solutions are built to evolve with the rapidly changing blockchain landscape.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your blockchain and Web3 project. We'll help you navigate the decentralized future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlockchainWeb3Page;