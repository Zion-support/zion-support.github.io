import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Link as LinkIcon, 
  Shield, 
  Zap, 
  Coins, 
  Globe, 
  Lock, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  DollarSign, 
  Clock, 
  Award,
  Users,
  Database,
  Smartphone,
  Building,
  TrendingUp,
  Target
} from 'lucide-react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const blockchainServices = [
  {
    id: 1,
    title: 'Smart Contract Development',
    description: 'Secure, audited smart contracts for DeFi, NFTs, DAOs, and enterprise applications with comprehensive testing and deployment.',
    icon: LinkIcon,
    category: 'Development',
    price: 'Starting at $8,000/month',
    marketPrice: '$15,000-30,000/month',
    setupTime: '4-8 weeks',
    features: [
      'Ethereum, Polygon, BSC, Solana smart contracts',
      'DeFi protocols & yield farming',
      'NFT marketplaces & collections',
      'DAO governance systems',
      'Multi-signature wallets',
      'Token standards (ERC-20, ERC-721, ERC-1155)',
      'Cross-chain bridge contracts',
      'Automated market makers (AMM)'
    ],
    benefits: [
      'Reduce transaction costs by 60-80%',
      'Eliminate intermediaries and middlemen',
      'Enable 24/7 automated operations',
      'Increase transparency and trust'
    ],
    targetUsers: 'DeFi Projects, NFT Platforms, DAOs, Enterprises'
  },
  {
    id: 2,
    title: 'DeFi Platform Development',
    description: 'Complete decentralized finance platforms including DEXs, lending protocols, yield farming, and liquidity management.',
    icon: Coins,
    category: 'DeFi',
    price: 'Starting at $25,000/month',
    marketPrice: '$50,000-100,000/month',
    setupTime: '8-16 weeks',
    features: [
      'Decentralized exchanges (DEX)',
      'Lending & borrowing protocols',
      'Yield farming & staking platforms',
      'Liquidity pools & AMMs',
      'Cross-chain DeFi solutions',
      'DeFi aggregators',
      'Insurance protocols',
      'Derivatives & synthetic assets'
    ],
    benefits: [
      'Generate revenue through trading fees',
      'Access global liquidity pools',
      'Enable permissionless financial services',
      'Reduce counterparty risk'
    ],
    targetUsers: 'Financial Institutions, Crypto Exchanges, DeFi Startups'
  },
  {
    id: 3,
    title: 'NFT Marketplace Development',
    description: 'Custom NFT marketplaces with advanced features, multi-chain support, and comprehensive trading capabilities.',
    icon: Globe,
    category: 'NFT',
    price: 'Starting at $15,000/month',
    marketPrice: '$30,000-60,000/month',
    setupTime: '6-12 weeks',
    features: [
      'Multi-chain NFT support',
      'Auction & bidding systems',
      'Royalty management',
      'Creator tools & analytics',
      'Mobile-responsive design',
      'Payment gateway integration',
      'Community features',
      'Advanced search & filtering'
    ],
    benefits: [
      'Tap into $50B+ NFT market',
      'Enable new revenue streams',
      'Build engaged communities',
      'Create unique digital assets'
    ],
    targetUsers: 'Artists, Creators, Brands, Gaming Companies'
  },
  {
    id: 4,
    title: 'Blockchain Consulting & Strategy',
    description: 'Strategic guidance for blockchain adoption, technology selection, and implementation roadmap development.',
    icon: Target,
    category: 'Consulting',
    price: 'Starting at $5,000/month',
    marketPrice: '$10,000-20,000/month',
    setupTime: '1-2 weeks',
    features: [
      'Blockchain strategy development',
      'Technology stack selection',
      'Tokenomics design',
      'Regulatory compliance guidance',
      'Security audit recommendations',
      'Implementation roadmap',
      'Team training & education',
      'Ongoing advisory support'
    ],
    benefits: [
      'Make informed blockchain decisions',
      'Reduce implementation risks by 70%',
      'Accelerate time-to-market',
      'Ensure regulatory compliance'
    ],
    targetUsers: 'Enterprises, Startups, Government, Investors'
  },
  {
    id: 5,
    title: 'Web3 Application Development',
    description: 'Full-stack Web3 applications with wallet integration, decentralized storage, and seamless user experience.',
    icon: Smartphone,
    category: 'Web3',
    price: 'Starting at $12,000/month',
    marketPrice: '$25,000-50,000/month',
    setupTime: '6-10 weeks',
    features: [
      'Wallet integration (MetaMask, WalletConnect)',
      'Decentralized storage (IPFS, Arweave)',
      'Identity & authentication',
      'Real-time blockchain data',
      'Mobile & web applications',
      'API development & integration',
      'User-friendly interfaces',
      'Cross-platform compatibility'
    ],
    benefits: [
      'Build next-generation applications',
      'Enable user ownership of data',
      'Create censorship-resistant platforms',
      'Access global user base'
    ],
    targetUsers: 'Tech Companies, Startups, Developers, Enterprises'
  },
  {
    id: 6,
    title: 'Blockchain Security & Auditing',
    description: 'Comprehensive security audits, penetration testing, and vulnerability assessments for blockchain applications.',
    icon: Shield,
    category: 'Security',
    price: 'Starting at $10,000/month',
    marketPrice: '$20,000-40,000/month',
    setupTime: '2-4 weeks',
    features: [
      'Smart contract security audits',
      'Penetration testing',
      'Vulnerability assessments',
      'Code review & analysis',
      'Compliance auditing',
      'Security monitoring',
      'Incident response',
      'Security training'
    ],
    benefits: [
      'Prevent costly security breaches',
      'Protect user funds and data',
      'Meet regulatory requirements',
      'Build trust and credibility'
    ],
    targetUsers: 'DeFi Protocols, NFT Projects, Exchanges, Enterprises'
  }
];

const industries = [
  {
    title: "Finance & Banking",
    description: "DeFi protocols, digital payments, and blockchain-based financial services",
    icon: "🏦",
    useCases: ["Cross-border payments", "Lending platforms", "Asset tokenization", "Trading systems"]
  },
  {
    title: "Gaming & Entertainment",
    description: "Play-to-earn games, NFT collectibles, and virtual economies",
    icon: "🎮",
    useCases: ["Game assets as NFTs", "In-game economies", "Player ownership", "Virtual worlds"]
  },
  {
    title: "Supply Chain",
    description: "Transparent supply chain tracking and product authentication",
    icon: "📦",
    useCases: ["Product provenance", "Anti-counterfeiting", "Quality assurance", "Traceability"]
  },
  {
    title: "Real Estate",
    description: "Property tokenization and fractional ownership platforms",
    icon: "🏠",
    useCases: ["Property tokens", "Fractional ownership", "Rental income sharing", "Property management"]
  },
  {
    title: "Healthcare",
    description: "Secure medical records and pharmaceutical supply chain",
    icon: "🏥",
    useCases: ["Medical records", "Drug authentication", "Clinical trials", "Patient data"]
  },
  {
    title: "Energy & Carbon",
    description: "Carbon credit trading and renewable energy certificates",
    icon: "🌱",
    useCases: ["Carbon credits", "Energy trading", "Sustainability tracking", "Green certificates"]
  }
];

export default function BlockchainServicesPage() {
  return (
    <Layout
      title="Blockchain & Web3 Services - Zion Tech Group | DeFi, NFT, Smart Contracts"
      description="Comprehensive blockchain services including DeFi development, NFT marketplaces, smart contracts, and Web3 applications. Transform your business with cutting-edge blockchain technology."
      keywords="blockchain services, DeFi development, NFT marketplace, smart contracts, Web3 applications, blockchain consulting, cryptocurrency development"
      canonical="https://ziontechgroup.com/blockchain-services"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Blockchain & Web3 Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Transform your business with cutting-edge blockchain technology. From DeFi platforms to NFT marketplaces, 
                we deliver secure, scalable, and innovative blockchain solutions that drive growth and create new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Get Blockchain Consultation
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Blockchain Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive blockchain solutions tailored to your business needs with competitive pricing and proven results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blockchainServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{service.setupTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Save up to 50% vs market rate
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-600">
                      <strong>Target Users:</strong> {service.targetUsers}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href="/contact"
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded text-center hover:bg-blue-50 transition-colors font-semibold"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our blockchain solutions are tailored to meet the unique needs of various industries and use cases.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                    <ul className="space-y-1">
                      {industry.useCases.map((useCase, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <ArrowRight className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Blockchain Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge blockchain technology with deep expertise to deliver solutions that provide real business value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Blockchain Expertise",
                  description: "Certified blockchain developers with 5+ years experience"
                },
                {
                  icon: Shield,
                  title: "Security First",
                  description: "Comprehensive security audits and best practices"
                },
                {
                  icon: DollarSign,
                  title: "Competitive Pricing",
                  description: "50% lower than market rates with transparent pricing"
                },
                {
                  icon: Clock,
                  title: "Fast Delivery",
                  description: "Rapid development with 4-16 week timelines"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build on Blockchain?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Join the blockchain revolution with our expert development team. From DeFi protocols to NFT marketplaces, 
                we'll help you build the next generation of decentralized applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Start Your Blockchain Project
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
              
              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 mr-2" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}