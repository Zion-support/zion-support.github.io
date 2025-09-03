import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle, 
  Users, 
  Award,
  Network,
  BarChart3,
  Lock,
  Server,
  Database,
  Code,
  Star,
  TrendingUp,
  Clock,
  MessageSquare,
  Smartphone,
  Target,
  Calendar,
  FileText,
  Mail,
  Home,
  Settings,
  Mic,
  Satellite,
  Camera,
  Cpu,
  Wifi,
  Monitor,
  Smartphone as Phone,
  Headphones,
  Video,
  Image,
  Music,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Truck,
  Package,
  MapPin,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as LocationIcon
} from 'lucide-react'

// Dynamic imports for better performance
const SEO = dynamic(() => import('../src/components/seo/SEOHead'), { ssr: false })
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { ssr: false })

export default function BlockchainSolutions() {
  const title = 'Blockchain Solutions — Zion Tech Group'
  const description = 'Comprehensive blockchain solutions including smart contracts, DeFi, NFTs, and cross-chain integration services.'

  const blockchainServices = [
    {
      title: 'Smart Contract Development',
      description: 'Secure and efficient smart contracts for various blockchain platforms',
      icon: Code,
      features: [
        'Ethereum, Polygon, and BSC smart contracts',
        'Automated contract execution and verification',
        'Gas optimization and security auditing',
        'Multi-signature wallet integration',
        'Upgradeable contract architecture',
        'Comprehensive testing and deployment'
      ],
      pricing: '$5,000 - $25,000/project',
      delivery: '4-8 weeks',
      category: 'Smart Contracts',
      benefits: 'Automated processes, reduced costs, enhanced security'
    },
    {
      title: 'DeFi Platform Development',
      description: 'Decentralized finance applications and protocols',
      icon: TrendingUp,
      features: [
        'DEX and AMM protocol development',
        'Yield farming and staking mechanisms',
        'Liquidity pool management',
        'Cross-chain bridge integration',
        'Governance token implementation',
        'Risk management and analytics'
      ],
      pricing: '$15,000 - $100,000/project',
      delivery: '8-16 weeks',
      category: 'DeFi',
      benefits: 'Financial innovation, global accessibility, transparency'
    },
    {
      title: 'NFT Marketplace Development',
      description: 'Custom NFT platforms and marketplace solutions',
      icon: Image,
      features: [
        'ERC-721 and ERC-1155 token standards',
        'Auction and bidding mechanisms',
        'Royalty and commission systems',
        'Metadata and IPFS integration',
        'Multi-wallet support',
        'Analytics and reporting dashboard'
      ],
      pricing: '$10,000 - $50,000/project',
      delivery: '6-12 weeks',
      category: 'NFT',
      benefits: 'Digital asset ownership, creator monetization, new revenue streams'
    },
    {
      title: 'Cross-Chain Integration',
      description: 'Seamless interoperability between different blockchain networks',
      icon: Network,
      features: [
        'Bridge protocol development',
        'Cross-chain asset transfers',
        'Multi-chain wallet integration',
        'Interoperability standards compliance',
        'Security and audit protocols',
        'Real-time monitoring and analytics'
      ],
      pricing: '$20,000 - $80,000/project',
      delivery: '10-20 weeks',
      category: 'Interoperability',
      benefits: 'Enhanced liquidity, reduced fragmentation, improved user experience'
    },
    {
      title: 'Blockchain Consulting',
      description: 'Strategic guidance and technical consultation for blockchain adoption',
      icon: Brain,
      features: [
        'Blockchain strategy and roadmap development',
        'Technology stack evaluation and selection',
        'Regulatory compliance guidance',
        'Security best practices implementation',
        'Performance optimization consulting',
        'Team training and knowledge transfer'
      ],
      pricing: '$2,000 - $10,000/month',
      delivery: '2-4 weeks',
      category: 'Consulting',
      benefits: 'Strategic guidance, risk mitigation, accelerated adoption'
    },
    {
      title: 'Blockchain Security Auditing',
      description: 'Comprehensive security assessment and vulnerability analysis',
      icon: Shield,
      features: [
        'Smart contract security auditing',
        'Penetration testing and vulnerability assessment',
        'Code review and best practices analysis',
        'Security documentation and recommendations',
        'Compliance and regulatory assessment',
        'Ongoing security monitoring'
      ],
      pricing: '$5,000 - $30,000/audit',
      delivery: '2-6 weeks',
      category: 'Security',
      benefits: 'Risk mitigation, compliance assurance, enhanced security'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO 
        title={title}
        description={description}
        keywords={['blockchain', 'smart contracts', 'DeFi', 'NFT', 'cryptocurrency', 'web3']}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Blockchain Solutions
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge blockchain technology and decentralized solutions. 
              From smart contracts to DeFi platforms, we deliver secure and innovative blockchain solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blockchain Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Blockchain Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive blockchain solutions designed to leverage the power of decentralized technology 
              for your business needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blockchainServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.title}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-purple-100 transition-colors">
                      <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors" />
                    </div>
                    <div className="ml-4">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <p className="text-sm text-green-600 font-medium">{service.benefits}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-blue-600 text-xs">+{service.features.length - 3} more features</li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-bold text-gray-900">{service.pricing}</span>
                      <span className="text-sm text-gray-500">{service.delivery}</span>
                    </div>
                    <Link 
                      href="/contact" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors text-center block"
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Build on the Blockchain?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how blockchain technology can revolutionize your business operations and create new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">
                Start Your Blockchain Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">
                Call +1 302 464 0950
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}