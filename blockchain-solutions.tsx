// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  Database, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award,
  DollarSign,
  Clock,
  Star,
  TrendingUp,
  Smartphone,
  MessageSquare
} from 'lucide-react';

export default function BlockchainSolutions() {
  const title = 'Blockchain Solutions — Zion Tech Group';
  const description = 'Comprehensive blockchain solutions including smart contracts, DeFi, NFTs, and cross-chain integration services with enterprise-grade security and proven ROI.';

  const blockchainServices = [
    {
      title: 'Smart Contract Development & Auditing',
      description: 'Enterprise-grade smart contracts with comprehensive security auditing and gas optimization.',
      icon: Shield,
      features: [
        'Solidity, Rust, and Vyper smart contract development',
        'Comprehensive security auditing and vulnerability assessment',
        'Gas optimization and cost reduction strategies',
        'Automated testing and deployment pipelines',
        'Multi-signature wallet integration',
        'Upgradeable contract patterns and proxy implementations'
      ],
      pricing: '$5,000 - $50,000/project',
      delivery: '2-8 weeks',
      category: 'Smart Contracts',
      benefits: [
        '99.9% security audit coverage',
        '60% gas cost optimization',
        'Zero critical vulnerabilities',
        'Automated deployment and monitoring'
      ],
      useCases: ['DeFi protocols', 'NFT marketplaces', 'DAO governance', 'Enterprise blockchain'],
      marketSize: '$2.3B smart contract market'
    },
    {
      title: 'DeFi Protocol Development',
      description: 'Complete DeFi solutions including DEX, lending protocols, and yield farming platforms.',
      icon: Zap,
      features: [
        'Decentralized exchange (DEX) development',
        'Lending and borrowing protocol implementation',
        'Yield farming and liquidity mining platforms',
        'Cross-chain bridge integration',
        'Oracle integration for price feeds',
        'Governance token and DAO implementation'
      ],
      pricing: '$15,000 - $150,000/project',
      delivery: '6-16 weeks',
      category: 'DeFi',
      benefits: [
        'TVL growth of 300%+ in first year',
        '99.9% uptime and reliability',
        'Multi-chain compatibility',
        'Automated liquidity management'
      ],
      useCases: ['DeFi startups', 'Financial institutions', 'Crypto exchanges', 'Investment platforms'],
      marketSize: '$89.2B DeFi market'
    },
    {
      title: 'NFT Marketplace & Tokenization',
      description: 'Complete NFT platforms with minting, trading, and royalty management capabilities.',
      icon: Globe,
      features: [
        'NFT minting and marketplace development',
        'Royalty management and creator tools',
        'Multi-blockchain NFT support',
        'Auction and bidding mechanisms',
        'IPFS integration for decentralized storage',
        'Analytics and reporting dashboard'
      ],
      pricing: '$8,000 - $75,000/project',
      delivery: '4-12 weeks',
      category: 'NFTs',
      benefits: [
        '50% reduction in gas fees',
        'Multi-chain interoperability',
        'Automated royalty distribution',
        'Advanced creator tools and analytics'
      ],
      useCases: ['Art galleries', 'Gaming companies', 'Content creators', 'Brand marketing'],
      marketSize: '$24.9B NFT market'
    },
    {
      title: 'Enterprise Blockchain Integration',
      description: 'Private and consortium blockchain solutions for enterprise applications and supply chain management.',
      icon: Database,
      features: [
        'Private blockchain network setup and management',
        'Consortium blockchain implementation',
        'Supply chain traceability solutions',
        'Identity management and KYC integration',
        'Interoperability with existing enterprise systems',
        'Compliance and regulatory reporting tools'
      ],
      pricing: '$25,000 - $200,000/project',
      delivery: '8-20 weeks',
      category: 'Enterprise',
      benefits: [
        '40% reduction in operational costs',
        '99.99% data integrity and security',
        'Real-time supply chain visibility',
        'Automated compliance reporting'
      ],
      useCases: ['Supply chain management', 'Healthcare records', 'Financial services', 'Government applications'],
      marketSize: '$67.4B enterprise blockchain market'
    },
    {
      title: 'Cross-Chain Bridge Solutions',
      description: 'Secure cross-chain asset transfer and interoperability solutions between different blockchains.',
      icon: Globe,
      features: [
        'Multi-chain asset bridge development',
        'Secure cross-chain transaction protocols',
        'Automated liquidity management',
        'Real-time monitoring and alerting',
        'Governance and upgrade mechanisms',
        'Integration with major DeFi protocols'
      ],
      pricing: '$20,000 - $100,000/project',
      delivery: '6-14 weeks',
      category: 'Interoperability',
      benefits: [
        '99.9% transaction success rate',
        'Sub-second cross-chain transfers',
        'Multi-signature security',
        'Automated risk management'
      ],
      useCases: ['DeFi protocols', 'Multi-chain dApps', 'Crypto exchanges', 'Cross-chain gaming'],
      marketSize: '$4.8B cross-chain market'
    },
    {
      title: 'Blockchain Security & Compliance',
      description: 'Comprehensive security auditing, compliance monitoring, and risk assessment services.',
      icon: Lock,
      features: [
        'Smart contract security auditing',
        'Penetration testing and vulnerability assessment',
        'Regulatory compliance monitoring',
        'AML/KYC integration and reporting',
        'Risk assessment and mitigation strategies',
        '24/7 security monitoring and incident response'
      ],
      pricing: '$3,000 - $25,000/month',
      delivery: '2-6 weeks',
      category: 'Security',
      benefits: [
        'Zero security breaches',
        '100% regulatory compliance',
        'Real-time threat detection',
        'Automated incident response'
      ],
      useCases: ['Financial institutions', 'DeFi protocols', 'NFT platforms', 'Enterprise blockchain'],
      marketSize: '$3.7B blockchain security market'
    },
    {
      title: 'DAO Development & Governance',
      description: 'Decentralized autonomous organization setup with voting mechanisms and treasury management.',
      icon: Users,
      features: [
        'DAO governance token design and distribution',
        'Voting mechanisms and proposal systems',
        'Treasury management and multi-sig integration',
        'Member onboarding and verification',
        'Governance analytics and reporting',
        'Integration with DeFi protocols'
      ],
      pricing: '$5,000 - $40,000/project',
      delivery: '3-8 weeks',
      category: 'Governance',
      benefits: [
        'Transparent decision-making processes',
        'Automated proposal execution',
        'Community-driven governance',
        'Real-time governance analytics'
      ],
      useCases: ['Investment DAOs', 'Protocol governance', 'Community organizations', 'Decentralized startups'],
      marketSize: '$1.2B DAO market'
    },
    {
      title: 'Blockchain Consulting & Strategy',
      description: 'Strategic blockchain consulting including technology selection, architecture design, and implementation planning.',
      icon: Award,
      features: [
        'Blockchain technology assessment and selection',
        'Architecture design and scalability planning',
        'Tokenomics design and economic modeling',
        'Regulatory compliance strategy',
        'Partnership and integration planning',
        'Training and team development programs'
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '1-4 weeks',
      category: 'Consulting',
      benefits: [
        'Reduced implementation risks',
        'Optimized technology stack selection',
        'Compliance-first approach',
        'Expert guidance and support'
      ],
      useCases: ['Enterprise organizations', 'Startups', 'Government agencies', 'Financial institutions'],
      marketSize: '$1.8B blockchain consulting market'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="blockchain solutions, smart contracts, DeFi, NFTs, enterprise blockchain, cross-chain, DAO, blockchain security" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/blockchain-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-cyan-400 mr-3" />
              <span className="text-lg font-semibold text-cyan-400">Blockchain Solutions</span>
            </div>
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Revolutionary Blockchain Services
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge blockchain technology, smart contracts, and decentralized solutions. 
              Our enterprise-grade blockchain services deliver measurable ROI with proven security and scalability.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blockchainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-400">{service.marketSize}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-slate-300 mb-4">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-xs text-slate-400 ml-5">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-fuchsia-400 mb-2">Proven Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-300">
                            <TrendingUp className="w-3 h-3 text-fuchsia-400 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="text-left">
                      <div className="text-lg font-semibold text-cyan-400">{service.pricing}</div>
                      <div className="text-sm text-slate-400">{service.delivery} deployment</div>
                    </div>
                    <a 
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="pt-4 border-t border-slate-700/50">
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Build on Blockchain?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Get a custom blockchain solution proposal tailored to your business needs. Most implementations start with a comprehensive blockchain readiness assessment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fast Implementation</h3>
                <p className="text-sm text-slate-300">Deploy blockchain solutions in 2-20 weeks with our proven methodology</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Proven ROI</h3>
                <p className="text-sm text-slate-300">Average 300% ROI within first year of blockchain implementation</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-fuchsia-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-fuchsia-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Support</h3>
                <p className="text-sm text-slate-300">24/7 support from blockchain specialists and security experts</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <a 
                  href="tel:+13024640950" 
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                >
                  <Smartphone className="w-4 h-4" />
                  +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  kleber@ziontechgroup.com
                </a>
              </div>
              <p className="text-sm text-slate-400">
                364 E Main St STE 1008, Middletown DE 19709
              </p>
              <p className="text-sm text-slate-400 mt-2">
                Visit our website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:underline">https://ziontechgroup.com</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}