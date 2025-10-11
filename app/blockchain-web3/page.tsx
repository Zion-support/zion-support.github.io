import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import { Brain, BarChart, Target, TrendingUp, FileText, Zap, Shield, CheckCircle } from 'lucide-react'

const BlockchainWeb3Page: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'],
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics'],
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'],
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
    const features = [
    {
      icon: Zap,
      title: 'Smart Contracts',
      description: 'Automated, self-executing contracts with the terms directly written into code.',
  },
    {
    icon: Shield,
      title: 'Decentralized Security',
      description: 'Enhanced security through decentralized architecture and cryptographic protection.',
        <title&gt;Blockchain & Web3 Solutions - Zion Tech Group</title&gt;
        <meta /&gt;
      benefits: ['Immutable records', 'Cryptographic security', 'Distributed consensus', 'Tamper-proof data'],
  },
    {
    icon: Brain,
      title: 'AI Integration',
      description: 'AI-powered blockchain solutions for intelligent automation and optimization.',
      benefits: ['Smart automation', 'Predictive analytics', 'Optimized transactions', 'Intelligent contracts'],
  },
    {
    icon: Globe,
      title: 'Global Access',
      description: 'Access blockchain services from anywhere in the world with global connectivity.',
      benefits: ['24/7 availability', 'Global reach', 'Cross-border transactions', 'Universal access'],
  }
    ]
return (
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
    <>
      <Helmet>
        <title>Blockchain Web3 - Zion Tech Group</title>
        <meta name="description" content="AI-powered blockchain web3 solution for intelligent automation and optimization" />
        <meta name="keywords" content="AI, blockchain, web3, automation, artificial intelligence, business solutions" />
      </Helmet>
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div></div></div>
        <div className="container mx-auto px-4 py-16"></div></div></div>
          <div className="text-center mb-16"></div></div></div>
            <h1>
              Blockchain & </h1><span className="text-cyan-400"></span></span>Web3</span>
=======
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Blockchain Web3
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI-powered blockchain web3 solution for intelligent automation and optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

<<<<<<< HEAD
    </div>
  );
};

export default PagePage;
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div></div></div>,
            {features.map((feature, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover: bg-white/10 transition-all duration-300"></div></div></div>,
                <div className="flex items-start space-x-4 mb-6"></div></div></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0"></div></div></div>
                    <feature />
                  <div />
                    <h3 className="text-2xl font-bold text-white mb-2"></h3></h3>{feature.title}</h3>
                    <p className="text-gray-300 mb-4"></p></p>{feature.description</p&gt;}</p>
                  </div>
=======
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Powerful AI capabilities for your business</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Blockchain Web3?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our Blockchain Web3 and experience the future of intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
<<<<<<< HEAD
export default BlockchainWeb3Page
      benefits: ['24/7 availability', 'Global reach', 'Cross-border transactions', 'Universal access']
    }
  ]
  return (
    <>
      <Helmet>
        <title>Blockchain & Web3 Solutions - Zion Tech Group
        <meta name="description" content="Advanced blockchain and Web3 solutions for modern businesses. Smart contracts, DeFi, NFTs, and more." />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div></div>
        <div className="container mx-auto px-4 py-16"></div></div>
          <div className="text-center mb-16"></div></div>
            <h1 className="text-5xl font-bold text-white mb-6"></h1></h1>
              Blockchain & <span className="text-cyan-400"></span></span>Web3
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
              Advanced blockchain and Web3 solutions for modern businesses. Smart contracts, DeFi, NFTs, and more.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"></div></div>
                <div className="flex items-start space-x-4 mb-6"></div></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0"></div></div>
                    <feature.icon className="w-6 h-6 text-white" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2"></h3></h3>{feature.title}
                    <p className="text-gray-300 mb-4"></p></p>{feature.description}
                <ul className="space-y-2"></ul>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      {benefit}
                  ))}
            ))}
=======

export default BlockchainWeb3Page
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
