import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, BarChart3, TrendingUp, Target, Zap, CheckCircle, ArrowRight, Star, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIBlockchainAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-5 h-5 ml-2" />,
      title: 'Smart Contract Analysis',
      description: 'AI-powered analysis of smart contracts with vulnerability detection and security scoring.',
      price: '$399/month',
      benefits: ['Vulnerability detection', 'Security scoring', 'Code optimization', 'Gas analysis']
    },
    {
      icon: <BarChart3 className="w-5 h-5 ml-2" />,
      title: 'DeFi Analytics',
      description: 'Comprehensive DeFi protocol analysis with yield farming optimization and risk assessment.',
      price: '$299/month',
      benefits: ['Yield optimization', 'Risk assessment', 'Protocol analysis', 'APY tracking']
    },
    {
      icon: <TrendingUp className="w-5 h-5 ml-2" />,
      title: 'Trading Intelligence',
      description: 'Advanced trading signals and market analysis powered by machine learning algorithms.',
      price: '$199/month',
      benefits: ['Trading signals', 'Market analysis', 'Price prediction', 'Portfolio optimization']
    },
    {
      icon: <Target className="w-5 h-5 ml-2" />,
      title: 'NFT Analytics',
      description: 'Comprehensive NFT market analysis with rarity scoring and valuation models.',
      price: '$149/month',
      benefits: ['Rarity scoring', 'Valuation models', 'Market trends', 'Collection analysis']
    },
    {
      icon: <Zap className="w-5 h-5 ml-2" />,
      title: 'Real-time Monitoring',
      description: 'Live blockchain monitoring with instant alerts and anomaly detection.',
      price: '$179/month',
      benefits: ['Live monitoring', 'Instant alerts', 'Anomaly detection', 'Real-time data']
    },
    {
      icon: <Globe className="w-5 h-5 ml-2" />,
      title: 'Cross-Chain Analysis',
      description: 'Multi-blockchain analysis supporting Ethereum, BSC, Polygon, and other major chains.',
      price: '$249/month',
      benefits: ['Multi-chain support', 'Cross-chain tracking', 'Bridge analysis', 'Interoperability insights']
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      company: 'Crypto Investment Fund',
      content: 'AI Blockchain Analytics transformed our investment strategy. The smart contract analysis saved us from potential losses.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'DeFi Protocol',
      content: 'The DeFi analytics helped us optimize our yield farming strategies and reduce risks significantly.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      company: 'NFT Marketplace',
      content: 'The NFT analytics platform gave us insights we never had before. Our valuation accuracy improved by 40%.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Blockchain Analytics - Advanced Crypto Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your blockchain investments with AI-powered analytics. Smart contract analysis, DeFi insights, trading intelligence, and NFT analytics. Get started today." />
        <meta name="keywords" content="blockchain analytics, crypto analytics, DeFi analytics, smart contract analysis, NFT analytics, trading intelligence" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-8 h-8 text-blue-400 mr-3" />
            <span className="text-blue-400 font-semibold">AI-Powered Blockchain Intelligence</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Blockchain Analytics
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your blockchain investments with advanced AI-powered analytics. Get smart contract analysis, 
            DeFi insights, trading intelligence, and comprehensive market data in one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="#features" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Analytics Suite</h2>
            <p className="text-xl text-gray-300">Everything you need to make informed blockchain decisions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-2xl font-bold text-blue-400 mb-4">{feature.price}</div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Crypto Professionals</h2>
            <p className="text-xl text-gray-300">See how our analytics platform transforms blockchain investments</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Start Your Blockchain Analytics Journey</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of crypto professionals who trust our AI-powered analytics platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Get Free Trial
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBlockchainAnalyticsPage;