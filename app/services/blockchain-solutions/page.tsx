// import React from 'react';
import Head from 'next/head';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Link as LinkIcon, 
  Coins, 
  Lock, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  Target,
  Phone,
  Mail,
  MapPin,
  Zap,
  Rocket,
  Award,
  Building,
  CreditCard,
  Database,
  BarChart3,
  FileText,
  Smartphone,
  Laptop,
  Monitor,
  Settings,
  PieChart,
  Activity,
  Eye,
  Mic,
  Network,
  Cpu,
  HardDrive,
  Wifi,
  Key,
  AlertTriangle,
  CheckSquare,
  Globe,
  Users,
  TrendingUp,
  Heart,
  ShoppingCart,
  Brain,
  Code,
  Cloud,
  Server,
  Layers,
  GitBranch,
  Container,
  MessageSquare,
  Search,
  Camera,
  Layers as Stack
} from 'lucide-react';

export default function BlockchainSolutionsPage() {
  const title = 'Blockchain Solutions & Services — Zion Tech Group';
  const description = 'Enterprise blockchain solutions including smart contracts, DeFi platforms, NFT marketplaces, supply chain tracking, and digital identity verification. Production-ready with enterprise security.';

  const blockchainServices = [
    {
      name: 'Smart Contract Development',
      description: 'Secure, audited smart contracts for DeFi, NFTs, and enterprise applications',
      icon: FileText,
      features: [
        'Solidity, Rust, and Web3.js development',
        'Security audits and penetration testing',
        'Gas optimization and cost reduction',
        'Multi-signature wallet integration',
        'Upgradeable contract architecture',
        'Comprehensive testing and documentation'
      ],
      pricing: '$15,000 - $75,000/project',
      delivery: '4-8 weeks',
      category: 'Development',
      benefits: 'Secure, audited contracts with 99.9% uptime guarantee',
      marketPrice: '$25,000 - $150,000/project',
      link: '/services/blockchain-solutions/smart-contracts'
    },
    {
      name: 'DeFi Platform Development',
      description: 'Complete DeFi platforms including DEX, lending protocols, and yield farming',
      icon: TrendingUp,
      features: [
        'Decentralized exchange (DEX) development',
        'Lending and borrowing protocols',
        'Yield farming and staking mechanisms',
        'Liquidity pool management',
        'Cross-chain bridge integration',
        'Governance token implementation'
      ],
      pricing: '$50,000 - $300,000/project',
      delivery: '8-16 weeks',
      category: 'DeFi',
      benefits: 'Launch successful DeFi protocols with proven tokenomics',
      marketPrice: '$100,000 - $500,000/project',
      link: '/services/blockchain-solutions/defi-platforms'
    },
    {
      name: 'NFT Marketplace Development',
      description: 'Full-featured NFT marketplaces with minting, trading, and auction capabilities',
      icon: Image,
      features: [
        'NFT minting and metadata management',
        'Auction and fixed-price listings',
        'Royalty distribution system',
        'Multi-payment support (ETH, USDC, etc.)',
        'Creator dashboard and analytics',
        'Mobile-responsive design'
      ],
      pricing: '$25,000 - $150,000/project',
      delivery: '6-12 weeks',
      category: 'NFT',
      benefits: 'Launch NFT marketplace with 2-5% transaction fees',
      marketPrice: '$50,000 - $250,000/project',
      link: '/services/blockchain-solutions/nft-marketplace'
    },
    {
      name: 'Supply Chain Blockchain',
      description: 'Transparent supply chain tracking with immutable records and real-time monitoring',
      icon: Network,
      features: [
        'Product traceability from origin to consumer',
        'Smart contract-based verification',
        'IoT sensor integration',
        'QR code and RFID tracking',
        'Compliance reporting and auditing',
        'Stakeholder access management'
      ],
      pricing: '$30,000 - $200,000/project',
      delivery: '8-16 weeks',
      category: 'Supply Chain',
      benefits: 'Reduce fraud by 95%, improve traceability and compliance',
      marketPrice: '$60,000 - $400,000/project',
      link: '/services/blockchain-solutions/supply-chain'
    },
    {
      name: 'Digital Identity Verification',
      description: 'Self-sovereign identity solutions with privacy-preserving verification',
      icon: Shield,
      features: [
        'Decentralized identity (DID) implementation',
        'Zero-knowledge proof verification',
        'Biometric and document verification',
        'Cross-platform identity portability',
        'Privacy-preserving authentication',
        'Compliance with GDPR and CCPA'
      ],
      pricing: '$40,000 - $250,000/project',
      delivery: '10-20 weeks',
      category: 'Identity',
      benefits: 'Reduce identity fraud by 90%, improve user privacy',
      marketPrice: '$80,000 - $500,000/project',
      link: '/services/blockchain-solutions/digital-identity'
    },
    {
      name: 'Blockchain Integration Services',
      description: 'Integrate blockchain technology into existing enterprise systems',
      icon: LinkIcon,
      features: [
        'Legacy system integration',
        'API development and management',
        'Data migration and synchronization',
        'Hybrid cloud-blockchain architecture',
        'Performance optimization',
        'Training and support'
      ],
      pricing: '$20,000 - $100,000/project',
      delivery: '4-12 weeks',
      category: 'Integration',
      benefits: 'Seamless integration with 99.9% uptime',
      marketPrice: '$40,000 - $200,000/project',
      link: '/services/blockchain-solutions/integration'
    }
  ];

  const blockchainTechnologies = [
    { name: 'Ethereum', icon: Coins, description: 'Smart contracts and DApps' },
    { name: 'Polygon', icon: Network, description: 'Layer 2 scaling solutions' },
    { name: 'Binance Smart Chain', icon: TrendingUp, description: 'High-performance DeFi' },
    { name: 'Solana', icon: Zap, description: 'Fast and low-cost transactions' },
    { name: 'Polkadot', icon: LinkIcon, description: 'Interoperable blockchains' },
    { name: 'Cardano', icon: Shield, description: 'Research-driven development' }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="blockchain development, smart contracts, DeFi, NFT, supply chain, digital identity, enterprise blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services/blockchain-solutions" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://ziontechgroup.com/services/blockchain-solutions" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Blockchain Solutions
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Enterprise-grade blockchain development with smart contracts, DeFi platforms, NFT marketplaces, and supply chain solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="#services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Explore Services
                </Link>
                <Link to="/contact" className="border border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Blockchain Technologies We Support
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work with leading blockchain platforms to deliver scalable, secure, and efficient solutions
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {blockchainTechnologies.map((tech, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gray-100 rounded-xl p-6 mb-4 group-hover:bg-purple-50 transition-colors">
                    <tech.icon className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Blockchain Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Production-ready blockchain solutions with enterprise security and proven ROI
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blockchainServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 rounded-lg p-3 mr-4">
                        <service.icon className="w-8 h-8 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                        <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Our Pricing:</span>
                        <span className="font-semibold text-green-600">{service.pricing}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Market Rate:</span>
                        <span className="text-sm text-gray-600">{service.marketPrice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Delivery:</span>
                        <span className="text-sm font-medium text-blue-600">{service.delivery}</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Benefits:</strong> {service.benefits}
                      </p>
                    </div>

                    <Link to={service.link} className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Blockchain Solution?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's discuss your blockchain project and create a secure, scalable solution that drives real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Project
              </Link>
              <a href="tel:+13024640950" className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-1">Phone</h3>
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-blue-400">364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}