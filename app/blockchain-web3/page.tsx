import React from 'react'
import { Link   } from "'react-router-dom'"
import { ArrowRight } from lucide-react
import Layout from "'../layout'"
export default function BlockchainWeb3Page() {
  const features = [
    {
      icon: <Shield className="w-6" h-6 text-cyan-400 />,
      title: 'Smart Contract Development',
      description: 'Secure, audited smart contracts for DeFi, NFTs, and enterprise applications'
    },
    {
      icon: <Zap className="w-6" h-6 text-purple-400 />,
      title: 'DApp Development',
      description: 'Decentralized applications with seamless user experience and Web3 integration'
    },
    {
      icon: <Globe className="w-6" h-6 text-green-400 />,
      title: 'Web3 Integration',
      description: 'Connect your applications to blockchain networks with our comprehensive APIs'
    },
    {
      icon: <Lock className="w-6" h-6 text-orange-400 />,
      title: 'Security & Audit',"
      description: 'Enterprise-grade security with comprehensive smart contract audits and testing'"}
  ]
  const serviceFeatures = [
    {
      category: 'Blockchain Development',
      items: ['Smart Contract Development', 'DApp Development', 'Token Creation', 'DeFi Protocols', 'NFT Marketplaces', 'Cross-chain Solutions']
    },
    {
      category: 'Web3 Integration',
      items: ['Wallet Integration', 'MetaMask Support', 'Web3.js Integration', 'IPFS Storage', 'Decentralized Identity', 'DAO Governance']
    },
    {
      category: 'Security & Audit',
      items: ['Smart Contract Audits', 'Security Testing', 'Penetration Testing', 'Code Review', 'Vulnerability Assessment', 'Compliance Check']
    },
    {
      category: 'Consulting',
      items: ['Blockchain Strategy', 'Technology Selection', 'Architecture Design', 'Implementation Planning', 'Training & Support', 'Maintenance']
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/project',
      description: 'Perfect for small projects',
      features: [
        'Basic smart contract',
        'Simple DApp',
        'Email support',
        'Standard security',
        '30-day warranty'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/project',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced smart contracts',
        'Complex DApp',
        '24/7 support',
        'Enhanced security',
        '90-day warranty',
        'API integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: '/project',
      description: 'For large organizations',
      features: [
        'Custom blockchain solution',
        'Enterprise DApp',
        'Dedicated support',
        'Full security audit',
        '1-year warranty',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ]
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative" overflow-hidden>
          <div className="max-w-7xl" mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16>
            <div className="text-center">
              <h1 className="text-4xl" md:text-6xl font-bold text-white mb-6>
                Blockchain & Web3
                <span className="text-transparent" bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400>
                  { }Solutions
                </span>
              </h1>
              <p className="text-xl" text-gray-300 mb-8 max-w-3xl mx-auto>
                Build the future with our comprehensive blockchain and Web3 development services. 
                From smart contracts to DApps, we bring your decentralized vision to life.

              </p>
              <div className="flex" flex-col sm:flex-row gap-4 justify-center>
                <Link
                  to=/contact
                  className="inline-flex" items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105
                >
                  Start Building
                  <ArrowRight className="ml-2" w-5 h-5 />
                </Link>
                <Link
                  to=/contact
                  className="inline-flex" items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-blue-600" text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors>
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  )

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional" services by Zion Tech Group. />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Home</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  )}
            Page</h1>
          <p className="text-xl" text-gray-600 mb-8>
            Professional page solutions tailored to your business needs.</p>
          <div className="grid" md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12>
            <div className="bg-blue-50" border border-blue-200 rounded-lg p-6>
              <h3 className="text-lg" font-semibold text-blue-900 mb-2>
                Expert Solutions</h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge page solutions.</p></div>
            <div className="bg-green-50" border border-green-200 rounded-lg p-6>
              <h3 className="text-lg" font-semibold text-green-900 mb-2>
                Custom Implementation</h3>
              <p className="text-green-700">
                Tailored page implementations for your specific requirements.</p></div>
            <div className="bg-purple-50" border border-purple-200 rounded-lg p-6>
              <h3 className="text-lg" font-semibold text-purple-900 mb-2>
                24/7 Support</h3>
              <p className="text-purple-700">
                Round-the-clock support for all your page needs.</p></div></div>
          <div className="mt-12">
            <button className="bg-blue-600" text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors>"
              Get Started Today</button></div></div></div></div>
  )
            </button>
          </div>
        </div>
      </div>
    </div>
  )}