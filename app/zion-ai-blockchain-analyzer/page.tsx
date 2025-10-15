import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Bitcoin, 
  TrendingUp, 
  Shield, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Users, 
  Zap,
  Settings,
  Globe,
  Smartphone,
  Database,
  FileText,
  Mail,
  Phone,
  MapPin,
  Eye,
  AlertTriangle,
  Lock,
  Activity
} from 'lucide-react';

const ZionAIBlockchainAnalyzerPage: React.FC = () => {
  const features = [
    {
      title: 'Real-Time Blockchain Analytics',
      description: 'Advanced AI algorithms analyze blockchain transactions, smart contracts, and DeFi protocols in real-time to provide actionable insights and risk assessments.',
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ['Real-time monitoring', 'Transaction analysis', 'Smart contract auditing', 'DeFi protocol tracking']
    },
    {
      title: 'Cryptocurrency Portfolio Management',
      description: 'Intelligent portfolio tracking with AI-powered rebalancing, risk assessment, and automated trading strategies for optimal returns.',
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ['Portfolio optimization', 'Risk management', 'Auto rebalancing', 'Performance analytics']
    },
    {
      title: 'Smart Contract Security Auditing',
      description: 'Comprehensive smart contract analysis using AI to detect vulnerabilities, gas optimization opportunities, and security best practices.',
      icon: <Shield className="w-8 h-8" />,
      benefits: ['Vulnerability detection', 'Gas optimization', 'Security scoring', 'Best practices']
    },
    {
      title: 'DeFi Protocol Monitoring',
      description: 'Monitor DeFi protocols for liquidity changes, yield farming opportunities, and potential risks across multiple blockchain networks.',
      icon: <Activity className="w-8 h-8" />,
      benefits: ['Liquidity monitoring', 'Yield tracking', 'Risk alerts', 'Multi-chain support']
    }
  ];

  const supportedChains = [
    { name: 'Ethereum', icon: 'Ξ', color: 'text-blue-400' },
    { name: 'Bitcoin', icon: '₿', color: 'text-orange-400' },
    { name: 'Binance Smart Chain', icon: 'B', color: 'text-yellow-400' },
    { name: 'Polygon', icon: '⬟', color: 'text-purple-400' },
    { name: 'Solana', icon: '◎', color: 'text-green-400' },
    { name: 'Avalanche', icon: 'AVAX', color: 'text-red-400' },
    { name: 'Cardano', icon: '₳', color: 'text-blue-300' },
    { name: 'Polkadot', icon: 'DOT', color: 'text-pink-400' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for individual traders',
      features: [
        'Basic portfolio tracking',
        'Real-time price alerts',
        'Simple analytics',
        '2 blockchain networks',
        'Email support',
        'Up to 5 wallets'
      ],
      popular: false,
      marketPrice: '$299/month',
      savings: '67%'
    },
    {
      name: 'Professional',
      price: '$199/month',
      description: 'Ideal for serious traders',
      features: [
        'Advanced analytics',
        'Smart contract auditing',
        'DeFi monitoring',
        '5 blockchain networks',
        'Priority support',
        'Up to 25 wallets',
        'API access'
      ],
      popular: true,
      marketPrice: '$599/month',
      savings: '67%'
    },
    {
      name: 'Enterprise',
      price: '$499/month',
      description: 'For institutions and teams',
      features: [
        'Full AI suite',
        'Custom integrations',
        'White-label options',
        'All blockchain networks',
        'Dedicated support',
        'Unlimited wallets',
        'Custom reporting'
      ],
      popular: false,
      marketPrice: '$1499/month',
      savings: '67%'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'Crypto Investment Fund',
      role: 'Portfolio Manager',
      content: 'Zion AI Blockchain Analyzer has revolutionized our trading strategy. The AI insights helped us identify profitable opportunities we would have missed.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'DeFi Protocol',
      role: 'Security Lead',
      content: 'The smart contract auditing feature is incredible. It found critical vulnerabilities in our code that could have cost us millions.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'Blockchain Consulting',
      role: 'CTO',
      content: 'The multi-chain support and real-time monitoring capabilities are unmatched. This tool is essential for any serious blockchain project.',
      rating: 5
    }
  ];

  const stats = [
    { number: '50+', label: 'Blockchain Networks', icon: <Globe className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" /> },
    { number: '1M+', label: 'Transactions Analyzed', icon: <Activity className="w-6 h-6" /> },
    { number: '24/7', label: 'Real-Time Monitoring', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Blockchain Analyzer - Advanced Crypto Analytics | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered blockchain analytics platform with portfolio management, smart contract auditing, and DeFi monitoring. Maximize your crypto investments with cutting-edge technology." />
        <meta name="keywords" content="blockchain analytics, cryptocurrency portfolio, smart contract auditing, DeFi monitoring, crypto trading, blockchain security, digital assets" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-blockchain-analyzer" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden cyber-grid-enhanced quantum-dots">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 mb-8 neon-border">
              <Bitcoin className="w-5 h-5 text-yellow-400 mr-2 animate-pulse" />
              <span className="text-yellow-400 text-sm font-medium">#1 AI Blockchain Analytics Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight holographic-text">
              Zion AI Blockchain Analyzer
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Advanced AI-powered blockchain analytics platform that maximizes your crypto investments with 
              <span className="text-yellow-400 font-semibold"> real-time insights, smart contract auditing, and DeFi monitoring.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-yellow-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400/10 transition-all duration-300 group hover:scale-105"
              >
                View Live Demo
                <Bitcoin className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group data-stream">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Chains */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Supported Blockchain Networks
              </h2>
              <p className="text-xl text-gray-300">
                Monitor and analyze transactions across all major blockchain networks
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {supportedChains.map((chain, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 text-center"
                >
                  <div className={`text-3xl font-bold ${chain.color} mb-2 group-hover:scale-110 transition-transform`}>
                    {chain.icon}
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-yellow-400 transition-colors">
                    {chain.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Blockchain Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive AI-powered tools for blockchain analysis, portfolio management, and DeFi monitoring
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {feature.benefits.map((benefit, idx) => (
                          <span key={idx} className="px-3 py-1 bg-yellow-500/10 text-yellow-300 text-sm rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-yellow-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Analytics Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options for traders, developers, and institutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 ${
                    plan.popular 
                      ? 'border-yellow-500/50 ring-2 ring-yellow-500/20' 
                      : 'border-white/20 hover:border-yellow-500/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="text-center mb-6">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center justify-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-4xl font-bold text-yellow-400">{plan.price}</span>
                      <span className="text-gray-400 line-through">{plan.marketPrice}</span>
                    </div>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      Save {plan.savings}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white hover:from-yellow-600 hover:to-orange-700'
                        : 'border border-yellow-500 text-yellow-400 hover:bg-yellow-500/10'
                    }`}
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Blockchain Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what crypto traders and blockchain developers say about our platform
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-900/30 to-orange-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Maximize Your Crypto Investments
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of traders and developers using AI-powered blockchain analytics to make smarter investment decisions.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-yellow-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-yellow-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-yellow-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-yellow-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400/10 transition-all duration-300 group hover:scale-105"
              >
                View Live Demo
                <Bitcoin className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIBlockchainAnalyzerPage;