import { Helmet } from 'react-helmet-async'
import { Shield, BarChart3, TrendingUp, Target, Zap, CheckCircle, ArrowRight, Star, Globe, Play, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import React  from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIBlockchainAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8h-8text-cyan-400" />,
      title: 'Smart Contract Analysis',
      description: 'AI-powered analysis of smart contracts with vulnerability detection and security scoring.',
      price: '$399/month',
      benefits: ['Vulnerability detection', 'Security scoring', 'Code optimization', 'Gas analysis']
    },
    {
      icon: <BarChart3 className="w-8h-8text-emerald-400" />,
      title: 'DeFi Analytics',
      description: 'Comprehensive DeFi protocol analysis with yield farming optimization and risk assessment.',
      price: '$299/month',
      benefits: ['Yield optimization', 'Risk assessment', 'Protocol analysis', 'APY tracking']
    },
    {
      icon: <TrendingUp className="w-8h-8text-purple-400" />,
      title: 'Trading Intelligence',
      description: 'Advanced trading signals and market analysis powered by machine learning algorithms.',
      price: '$199/month',
      benefits: ['Trading signals', 'Market analysis', 'Price prediction', 'Portfolio optimization']
    },
    {
      icon: <Target className="w-8h-8text-orange-400" />,
      title: 'NFT Analytics',
      description: 'Comprehensive NFT market analysis with rarity scoring and valuation models.',
      price: '$149/month',
      benefits: ['Rarity scoring', 'Valuation models', 'Market trends', 'Collection analysis']
    },
    {
      icon: <Zap className="w-8h-8text-pink-400" />,
      title: 'Real-time Monitoring',
      description: 'Live blockchain monitoring with instant alerts and anomaly detection.',
      price: '$179/month',
      benefits: ['Live monitoring', 'Instant alerts', 'Anomaly detection', 'Real-time data']
    },
    {
      icon: <Globe className="w-8h-8text-yellow-400" />,
      title: 'Cross-Chain Analysis',
      description: 'Multi-blockchain analysis supporting Ethereum, BSC, Polygon, and other major chains.',
      price: '$249/month',
      benefits: ['Multi-chain support', 'Cross-chain tracking', 'Bridge analysis', 'Interoperability insights']
    }
  ]

  const analyticsTypes = [
    {
      title: 'DeFi Protocol Analysis',
      description: 'Comprehensive analysis of DeFi protocols including TVL, yield rates, and risk metrics.',
      icon: <BarChart3 className="w-6h-6text-cyan-400" />,
      metrics: ['95% accuracy', 'Real-time data', '50+ protocols'],
      features: ['TVL tracking', 'Yield analysis', 'Risk scoring', 'Liquidity analysis']
    },
    {
      title: 'Smart Contract Security',
      description: 'Advanced security analysis with vulnerability detection and code optimization recommendations.',
      icon: <Shield className="w-6h-6text-emerald-400" />,
      metrics: ['99% detection rate', 'Zero false positives', '24/7 monitoring'],
      features: ['Vulnerability scanning', 'Code review', 'Security scoring', 'Audit reports']
    },
    {
      title: 'Trading & Investment',
      description: 'AI-powered trading signals and portfolio optimization for crypto investments.',
      icon: <TrendingUp className="w-6h-6text-purple-400" />,
      metrics: ['40% better returns', 'Risk reduction', 'Automated trading'],
      features: ['Trading signals', 'Portfolio optimization', 'Risk management', 'Backtesting']
    },
    {
      title: 'NFT Market Intelligence',
      description: 'Comprehensive NFT analysis with rarity scoring and market trend predictions.',
      icon: <Target className="w-6h-6text-orange-400" />,
      metrics: ['85% accuracy', 'Real-time pricing', 'Trend prediction'],
      features: ['Rarity analysis', 'Price prediction', 'Market trends', 'Collection insights']
    }
  ]

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for individual traders and small projects',
      features: [
        'Basic analytics dashboard',
        '5 blockchain networks',
        'Email support',
        'Standard alerts',
        'Basic reporting',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Advanced features for growing crypto businesses',
      features: [
        'Advanced analytics suite',
        '20+ blockchain networks',
        'Priority support',
        'Custom alerts',
        'Advanced reporting',
        '5 user accounts',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'Complete solution for large organizations and institutions',
      features: [
        'Full analytics platform',
        'Unlimited networks',
        '24/7 dedicated support',
        'White-label solution',
        'Custom development',
        'Unlimited users',
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'CryptoFund Capital',
      role: 'Portfolio Manager',
      content: 'AI Blockchain Analytics helped us optimize our DeFi strategies and increase returns by 40%. The insights are incredibly accurate and actionable.',
      rating: 5,
      avatar: 'AT'
    },
    {
      name: 'Sarah Kim',
      company: 'Blockchain Security Labs',
      role: 'Security Analyst',
      content: 'The smart contract analysis tools are outstanding. We've identified vulnerabilities that other tools missed, saving our clients millions.',
      rating: 5,
      avatar: 'SK'
    },
    {
      name: 'Michael Rodriguez',
      company: 'NFT Marketplace Pro',
      role: 'Data Scientist',
      content: 'The NFT analytics platform provides incredible insights into market trends and pricing. Our users love the rarity scoring and valuation models.',
      rating: 5,
      avatar: 'MR'
    }
  ]

  return (
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>AI Blockchain Analytics - DeFi & Crypto Intelligence | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered blockchain analytics for DeFi, smart contracts, and crypto trading. Real-time insights, security analysis, and trading intelligence with 95% accuracy." / / />
        <meta name="keywords" content="AI blockchain analytics, DeFi analytics, smart contract analysis, crypto trading intelligence, NFT analytics, blockchain security, Zion Tech Group" / / />
        <meta name="robots" content="index, follow" / / />
        <link rel="canonical" href="https://ziontechgroup.com/ai-blockchain-analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20px-4overflow-hidden" />
        <div className="absolute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)]animate-pulse" />
        <div className="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }} / />
        <div className="relative max-w-7xlmx-autotext-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
            <Shield className="w-4 h-4" />
            <span   />AI-Powered Blockchain Intelligence</span>
          </div>

          <h1 className="text-6 xl md:text-8 xl font-bold text-white mb-8leading-tight" />
            AI Blockchain
            <br / />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-texttext-transparentanimate-pulse">Analytics
            </span>
          </h1>

          <p className="text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Advanced AI-powered analytics for DeFi, smart contracts, and crypto trading. 
            Get real-time insights, security analysis, and trading intelligence with 95% accuracy.
            <br / />
            <span className="text-cyan-400font-semibold">Navigate the blockchain with confidence and intelligence.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6justify-centermb-16">
            <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" >
           
          <span    />
        </Link>Start Free Trial</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to="/demo" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" >
           
          <span    />
        </Link>View Demo</span>
              <Play className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
          </div>
      </section>

      {/* Features Section */}
      <section className="py-20px-4relative" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" />
        <div className="relative max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
              Advanced <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Blockchain Intelligence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              Comprehensive AI-powered analytics that provide deep insights into blockchain networks, 
              DeFi protocols, and crypto markets for informed decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </div>
            {features.map((feature, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2xll p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xllhover:shadow-cyan-500/10" />
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xll mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                </div>

            {analyticsTypes.map((type, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2xll p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <div className="flex items-centerspace-x-4mb-6">

            {pricing.map((plan, index) => (
              <div key="{index}" className="{`relative" group bg-white/10 backdrop-blur-lg rounded-2xll p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: bg-white/20'
              }`} />
                {plan.popular && (

            {testimonials.map((testimonial, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2xll p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <div className="flex items-centerspace-x-4mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-centertext-whitefont-bold"  />{testimonial.avatar}
                  </div>
                  <div>
            <h4 className="text-lgfont-semiboldtext-white"   />{testimonial.name}</h4>
                    <p className="text-gray-400text-sm">
              {testimonial.role}</p>
                    <p className="text-gray-500text-sm">
              {testimonial.company}</p>
                  </div>
                
                <div className="flex items-centerspace-x-1mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" className="w-5 h-5text-yellow-400fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300leading-relaxeditalic">
              "{testimonial.content}"
                </p>
              </div>

            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20px-4relative" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" />
        <div className="relative max-w-7xlmx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden">
              <div className="relativez-10">
                <h2 className="text-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6leading-tight" />
                  Ready to Master the <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent"   />Blockchain?</span>
                </h2>

                <p className="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
              Start your free trial today and gain the intelligence you need to navigate 
                  the complex world of blockchain and DeFi with confidence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6justify-centermb-8">
                  <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" >
           
          <span    />
        </Link>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
                  </Link>
                  <Link to="/demo" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" >
           
          <span    />
        </Link>View Demo</span>
                    <BarChart3 className="w-5 h-5group-hover:translate-x-1transition-transform" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3gap-6text-white/80">
                  <div className="flex items-centerjustify-centerspace-x-3">
                    <Phone className="w-5h-5text-cyan-300" />
                    <span className="text-sm"   />+1 302 464 0950</span>
                  </div>
                  <div className="flex items-centerjustify-centerspace-x-3">
                    <Mail className="w-5h-5text-purple-300" />
                    <span className="text-sm"   />kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-centerjustify-centerspace-x-3">
                    <MapPin className="w-5h-5text-pink-300" />
                    <span className="text-sm"   />Middletown DE 19709</span>
                  </div>
              </div>
          </div>
      </section>

  );
};

export default AIBlockchainAnalyticsPage;
