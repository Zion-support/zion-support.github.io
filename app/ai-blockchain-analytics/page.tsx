import { Helmet } from 'react-helmet-async'
import { Shield, BarChart3, TrendingUp, Target, Zap, CheckCircle, ArrowRight, Star, Globe, Play, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import React  from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIBlockchainAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: 'Smart Contract Analysis',
      description: 'AI-powered analysis of smart contracts with vulnerability detection and security scoring.',
      price: '$399/month',
      benefits: ['Vulnerability detection', 'Security scoring', 'Code optimization', 'Gas analysis']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
      title: 'DeFi Analytics',
      description: 'Comprehensive DeFi protocol analysis with yield farming optimization and risk assessment.',
      price: '$299/month',
      benefits: ['Yield optimization', 'Risk assessment', 'Protocol analysis', 'APY tracking']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: 'Trading Intelligence',
      description: 'Advanced trading signals and market analysis powered by machine learning algorithms.',
      price: '$199/month',
      benefits: ['Trading signals', 'Market analysis', 'Price prediction', 'Portfolio optimization']
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'NFT Analytics',
      description: 'Comprehensive NFT market analysis with rarity scoring and valuation models.',
      price: '$149/month',
      benefits: ['Rarity scoring', 'Valuation models', 'Market trends', 'Collection analysis']
    },
    {
      icon: <Zap className="w-8 h-8 text-pink-400" />,
      title: 'Real-time Monitoring',
      description: 'Live blockchain monitoring with instant alerts and anomaly detection.',
      price: '$179/month',
      benefits: ['Live monitoring', 'Instant alerts', 'Anomaly detection', 'Real-time data']
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-400" />,
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
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
      metrics: ['95% accuracy', 'Real-time data', '50+ protocols'],
      features: ['TVL tracking', 'Yield analysis', 'Risk scoring', 'Liquidity analysis']
    },
    {
      title: 'Smart Contract Security',
      description: 'Advanced security analysis with vulnerability detection and code optimization recommendations.',
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      metrics: ['99% detection rate', 'Zero false positives', '24/7 monitoring'],
      features: ['Vulnerability scanning', 'Code review', 'Security scoring', 'Audit reports']
    },
    {
      title: 'Trading & Investment',
      description: 'AI-powered trading signals and portfolio optimization for crypto investments.',
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      metrics: ['40% better returns', 'Risk reduction', 'Automated trading'],
      features: ['Trading signals', 'Portfolio optimization', 'Risk management', 'Backtesting']
    },
    {
      title: 'NFT Market Intelligence',
      description: 'Comprehensive NFT analysis with rarity scoring and market trend predictions.',
      icon: <Target className="w-6 h-6 text-orange-400" />,
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
      content: 'The smart contract analysis tools are outstanding. We\'ve identified vulnerabilities that other tools missed, saving our clients millions.',
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
    <>
      <Helmet />
        <title   />AI Blockchain Analytics - DeFi & Crypto Intelligence | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered blockchain analytics for DeFi, smart contracts, and crypto trading. Real-time insights, security analysis, and trading intelligence with 95% accuracy." / / />
        <meta name="keywords" content="AI blockchain analytics, DeFi analytics, smart contract analysis, crypto trading intelligence, NFT analytics, blockchain security, Zion Tech Group" / / />
        <meta name="robots" content="index, follow" / / />
        <link rel="canonical" href="https://ziontechgroup.com/ai-blockchain-analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)]animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }} / />
        <div className="relative max-w-7 xlmx-autotext-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 borderborder-cyan-400/30">
            <Shield className="w-4 h-4" />
            <span   />AI-Powered Blockchain Intelligence</span>
          </div>
          
          <h1 className="text-6 xl md:text-8 xl font-bold text-white mb-8 leading-tight" />
            AI Blockchain
            <br / />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-texttext-transparentanimate-pulse"  />Analytics
            </span>
          </h1>
          
          <p className="text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Advanced AI-powered analytics for DeFi, smart contracts, and crypto trading. 
            Get real-time insights, security analysis, and trading intelligence with 95% accuracy.
            <br / />
            <span className="text-cyan-400 font-semibold"   />Navigate the blockchain with confidence and intelligence.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-centermb-16">
            <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transformhover:scale-105" >
           
          <span    />
        </Link>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/demo" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2 backdrop-blur-sm" >
           
          <span    />
        </Link>View Demo</span>
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
        <div className="relative max-w-7 xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
              Advanced <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent"   />Blockchain Intelligence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xlmx-auto">Comprehensive AI-powered analytics that provide deep insights into blockchain networks, 
              DeFi protocols, and crypto markets for informed decision-making.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2 xlhover:shadow-cyan-500/10" />
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110 transition-transformduration-300"  />{feature.icon}
                </div>
                <h3 className="text-2 xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors"  />{feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key="{benefitIndex}" className="flex items-center space-x-2 text-gray-400 text-sm" />
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span   />{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-centerjustify-between">
                  <span className="text-cyan-400 font-semiboldtext-lg"  />{feature.price}
                  </span>
                  <Link to="/contact" className="group/link flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors" >
           
          <span className="text-smfont-medium"    />
        </Link>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
            ))}
          </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative" />
        <div className="absoluteinset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
        <div className="relative max-w-7 xlmx-auto">
          <div className="text-centermb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-6 borderborder-cyan-400/30">
              <BarChart3 className="w-4 h-4" />
              <span   />Analytics Solutions</span>
            </div>
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
              Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent"   />Analytics Suite</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xlmx-auto">From DeFi protocols to NFT markets, our AI-powered analytics cover every aspect 
              of the blockchain ecosystem with unmatched accuracy and depth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsTypes.map((type, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300 hover:scale-105" />
                <div className="flex items-centerspace-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transformduration-300"  />{type.icon}
                  </div>
                  <h3 className="text-2 xl font-bold text-whitegroup-hover:text-cyan-400 transition-colors"  />{type.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="text-lgfont-semiboldtext-cyan-400"   />Key Metrics:</h4>
                  {type.metrics.map((metric, metricIndex) => (
                    <div key="{metricIndex}" className="flex items-center space-x-2 text-cyan-400 font-semibold" />
                      <TrendingUp className="w-4 h-4" />
                      <span   />{metric}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-lgfont-semiboldtext-purple-400"   />Core Features:</h4>
                  <div className="flexflex-wrapgap-2">
                    {type.features.map((feature, featureIndex) => (
                      <span key="{featureIndex}" className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-fulltext-sm"  />{feature}
                      </span>
                    ))}
                  </div>
              </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 relative" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="relative max-w-7 xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
              Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent"   />Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xlmx-auto">Choose the perfect plan for your blockchain analytics needs. All plans include our core features 
              with no hidden fees or setup costs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key="{index}" className="{`relative" group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: bg-white/20'
              }`} />
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform-translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold"  />Most Popular
                    </div>
                )}
                
                <div className="text-centermb-8">
                  <h3 className="text-2 xl font-bold text-white mb-2"   />{plan.name}</h3>
                  <p className="text-gray-300 text-smmb-4">{plan.description}</p>
                  <div className="flex items-baselinejustify-center">
                    <span className="text-5 xlfont-bold text-white"   />{plan.price}</span>
                    <span className="text-gray-400 ml-2"   />{plan.period}</span>
                  </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key="{featureIndex}" className="flex items-centerspace-x-3" />
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300"   />{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact"
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
                  />Get Started
                </Link>
              </div>
            ))}
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative" />
        <div className="absoluteinset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" />
        <div className="relative max-w-7 xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
              What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-texttext-transparent"   />Customers Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xlmx-auto">Join leading crypto companies and institutions that trust AI Blockchain Analytics for critical insights and decision-making.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300 hover:scale-105" />
                <div className="flex items-centerspace-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-centertext-whitefont-bold"  />{testimonial.avatar}
                  </div>
                  <div>
            <h4 className="text-lgfont-semiboldtext-white"   />{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                
                <div className="flex items-centerspace-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxeditalic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="relative max-w-7 xlmx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16 relativeoverflow-hidden">
              <div className="relativez-10">
                <h2 className="text-4 xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6 leading-tight" />
                  Ready to Master the <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-texttext-transparent"   />Blockchain?</span>
                </h2>
                
                <p className="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">Start your free trial today and gain the intelligence you need to navigate 
                  the complex world of blockchain and DeFi with confidence.</p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-centermb-8">
                  <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" >
           
          <span    />
        </Link>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/demo" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2 backdrop-blur-sm" >
           
          <span    />
        </Link>View Demo</span>
                    <BarChart3 className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
                  <div className="flex items-centerjustify-centerspace-x-3">
                    <Phone className="w-5 h-5 text-cyan-300" />
                    <span className="text-sm"   />+1 302 464 0950</span>
                  </div>
                  <div className="flex items-centerjustify-centerspace-x-3">
                    <Mail className="w-5 h-5 text-purple-300" />
                    <span className="text-sm"   />kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-centerjustify-centerspace-x-3">
                    <MapPin className="w-5 h-5 text-pink-300" />
                    <span className="text-sm"   />Middletown DE 19709</span>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default AIBlockchainAnalyticsPage;