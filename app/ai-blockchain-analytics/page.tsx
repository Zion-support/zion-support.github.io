import { Helmet } from 'react-helmet-async'
import { Shield, BarChart3, TrendingUp, Target, Zap, CheckCircle, ArrowRight, Star, Globe, Play, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIBlockchainAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-5h-5 ml-2" />,
      title: 'Smart Contract Analysis',
      description: 'AI-powered analysis of smart contracts with vulnerability detection and security scoring.',
      price: '$399/month',
      benefits: ['Vulnerability detection', 'Security scoring', 'Code optimization', 'Gas analysis']
    },
    {
      icon: <BarChart3 className="w-5h-5 ml-2" />,
      title: 'DeFi Analytics',
      description: 'Comprehensive DeFi protocol analysis with yield farming optimization and risk assessment.',
      price: '$299/month',
      benefits: ['Yield optimization', 'Risk assessment', 'Protocol analysis', 'APY tracking']
    },
    {
      icon: <TrendingUp className="w-5h-5 ml-2" />,
      title: 'Trading Intelligence',
      description: 'Advanced trading signals and market analysis powered by machine learning algorithms.',
      price: '$199/month',
      benefits: ['Trading signals', 'Market analysis', 'Price prediction', 'Portfolio optimization']
    },
    {
      icon: <Target className="w-5h-5 ml-2" />,
      title: 'NFT Analytics',
      description: 'Comprehensive NFT market analysis with rarity scoring and valuation models.',
      price: '$149/month',
      benefits: ['Rarity scoring', 'Valuation models', 'Market trends', 'Collection analysis']
    },
    {
      icon: <Zap className="w-5h-5 ml-2" />,
      title: 'Real-time Monitoring',
      description: 'Live blockchain monitoring with instant alerts and anomaly detection.',
      price: '$179/month',
      benefits: ['Live monitoring', 'Instant alerts', 'Anomaly detection', 'Real-time data']
    },
    {
      icon: <Globe className="w-5h-5 ml-2" />,
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
      icon: <BarChart3 className="w-5h-5 ml-2" />,
      metrics: ['95% accuracy', 'Real-time data', '50+ protocols'],
      features: ['TVL tracking', 'Yield analysis', 'Risk scoring', 'Liquidity analysis']
    },
    {
      title: 'Smart Contract Security',
      description: 'Advanced security analysis with vulnerability detection and code optimization recommendations.',
      icon: <Shield className="w-5h-5 ml-2" />,
      metrics: ['99% detection rate', 'Zero false positives', '24/7 monitoring'],
      features: ['Vulnerability scanning', 'Code review', 'Security scoring', 'Audit reports']
    },
    {
      title: 'Trading & Investment',
      description: 'AI-powered trading signals and portfolio optimization for crypto investments.',
      icon: <TrendingUp className="w-5h-5 ml-2" />,
      metrics: ['40% better returns', 'Risk reduction', 'Automated trading'],
      features: ['Trading signals', 'Portfolio optimization', 'Risk management', 'Backtesting']
    },
    {
      title: 'NFT Market Intelligence',
      description: 'Comprehensive NFT analysis with rarity scoring and market trend predictions.',
      icon: <Target className="w-5h-5 ml-2" />,
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
    <>
      <Helmet>
        <title />AI Blockchain Analytics - DeFi & Crypto Intelligence | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered blockchain analytics for DeFi, smart contracts, and crypto trading. Real-time insights, security analysis, and trading intelligence with 95% accuracy." /  />
        <meta name="keywords" content="AI blockchain analytics, DeFi analytics, smart contract analysis, crypto trading intelligence, NFT analytics, blockchain security, Zion Tech Group" /  />
        <meta name="robots" content="index, follow" /  />
        <link rel="canonical" href="https://ziontechgroup.com/ai-blockchain-analytics"  />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5h-5 ml-2" />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="ab solute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }}  />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <Shield className="w-5h-5 ml-2" />
            <span />AI-Powered Blockchain Intelligence</span>
          </div>
          
          <h1 className="w-5h-5 ml-2" />
            AI Blockchain
            <br />
            <span className="w-5h-5 ml-2" />Analytics
            </span>
          </h1>
          
          <p className="w-5h-5 ml-2" />
            Advanced AI-powered analytics for DeFi, smart contracts, and crypto trading. 
            Get real-time insights, security analysis, and trading intelligence with 95% accuracy.
            <br />
            <span className="w-5h-5 ml-2" />Navigate the blockchain with confidence and intelligence.</span>
          </p>
          
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <Link to="/contact" className="gr oup bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5 ml-2" />
            </Link>
            <Link to="/demo" className="gr oup border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span />View Demo</span>
              <Play className="w-5h-5 ml-2" />
            </Link>
          </div>
      </section>

      {/* Features Section */}
      <section className="w-5h-5 ml-2" />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5 ml-2" />
              Advanced <span className="w-5h-5 ml-2" />Blockchain Intelligence</span>
            </h2>
            <p className="w-5h-5 ml-2" />
              Comprehensive AI-powered analytics that provide deep insights into blockchain networks, 
              DeFi protocols, and crypto markets for informed decision-making.
            </p>
          </div>
          
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {features.map((feature, index) => (
              <div key="{index}" className="gr oup bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}
                </div>
                <h3 className="w-5h-5 ml-2" />{feature.title}
                </h3>
                <p className="w-5h-5 ml-2" />
                  {feature.description}
                </p>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key="{benefitIndex}" className="fl ex items-center space-x-2text-gray-400text-sm" />
                      <CheckCircle className="w-5h-5 ml-2" />
                      <span />{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <span className="w-5h-5 ml-2" />{feature.price}
                  </span>
                  <Link to="/contact" className="gr oup/link flex items-center space-x-2 text-cyan-400hover:text-cyan-300 transition-colors" />
                    <span className="w-5h-5 ml-2" />Learn More</span>
                    <ArrowRight className="w-5h-5 ml-2" />
                  </Link>
                </div>
            ))}
          </div>
      </section>

      {/* Analytics Types Section */}
      <section className="w-5h-5 ml-2" />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <BarChart3 className="w-5h-5 ml-2" />
              <span />Analytics Solutions</span>
            </div>
            <h2 className="w-5h-5 ml-2" />
              Comprehensive <span className="w-5h-5 ml-2" />Analytics Suite</span>
            </h2>
            <p className="w-5h-5 ml-2" />
              From DeFi protocols to NFT markets, our AI-powered analytics cover every aspect 
              of the blockchain ecosystem with unmatched accuracy and depth.
            </p>
          </div>
          
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {analyticsTypes.map((type, index) => (
              <div key="{index}" className="gr oup bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{type.icon}
                  </div>
                  <h3 className="w-5h-5 ml-2" />{type.title}
                  </h3>
                </div>
                <p className="w-5h-5 ml-2" />
                  {type.description}
                </p>
                
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <h4 className="w-5h-5 ml-2" />Key Metrics:</h4>
                  {type.metrics.map((metric, metricIndex) => (
                    <div key="{metricIndex}" className="fl ex items-center space-x-2text-cyan-400font-semibold" />
                      <TrendingUp className="w-5h-5 ml-2" />
                      <span />{metric}</span>
                    </div>
                  ))}
                </div>
                
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <h4 className="w-5h-5 ml-2" />Core Features:</h4>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    {type.features.map((feature, featureIndex) => (
                      <span key="{featureIndex}" className="px-3 p y-1 bg-purple-500/20 text-purple-300rounded-fulltext-sm"  />{feature}
                      </span>
                    ))}
                  </div>
              </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section className="w-5h-5 ml-2" />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5 ml-2" />
              Simple <span className="w-5h-5 ml-2" />Pricing</span>
            </h2>
            <p className="w-5h-5 ml-2" />
              Choose the perfect plan for your blockchain analytics needs. All plans include our core features 
              with no hidden fees or setup costs.
            </p>
          </div>
          
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {pricing.map((plan, index) => (
              <div key="{index}" className="{`re lative" group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: bg-white/20'
              }`} />
                {plan.popular && (
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Most Popular
                    </div>
                )}
                
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <h3 className="w-5h-5 ml-2" />{plan.name}</h3>
                  <p className="w-5h-5 ml-2" />{plan.description}</p>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <span className="w-5h-5 ml-2" />{plan.price}</span>
                    <span className="w-5h-5 ml-2" />{plan.period}</span>
                  </div>
                
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  {plan.features.map((feature, featureIndex) => (
                    <div key="{featureIndex}" className="fl exitems-centerspace-x-3" />
                      <CheckCircle className="w-5h-5 ml-2" />
                      <span className="w-5h-5 ml-2" />{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact"
                  className="{`bl ock" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
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
      <section className="w-5h-5 ml-2" />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5 ml-2" />
              What Our <span className="w-5h-5 ml-2" />Customers Say</span>
            </h2>
            <p className="w-5h-5 ml-2" />
              Join leading crypto companies and institutions that trust AI Blockchain Analytics for critical insights and decision-making.
            </p>
          </div>
          
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {testimonials.map((testimonial, index) => (
              <div key="{index}" className="gr oup bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.avatar}
                  </div>
                  <div />
                    <h4 className="w-5h-5 ml-2" />{testimonial.name}</h4>
                    <p className="w-5h-5 ml-2" />{testimonial.role}</p>
                    <p className="w-5h-5 ml-2" />{testimonial.company}</p>
                  </div>
                
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" className="w-5h-5t e xt-yellow-400fill-current"  />
                  ))}
                </div>
                
                <p className="w-5h-5 ml-2" />
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-5h-5 ml-2" />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <h2 className="w-5h-5 ml-2" />
                  Ready to Master the <span className="w-5h-5 ml-2" />Blockchain?</span>
                </h2>
                
                <p className="w-5h-5 ml-2" />
                  Start your free trial today and gain the intelligence you need to navigate 
                  the complex world of blockchain and DeFi with confidence.
                </p>
                
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <Link to="/contact" className="gr oup bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                    <span />Start Free Trial</span>
                    <ArrowRight className="w-5h-5 ml-2" />
                  </Link>
                  <Link to="/demo" className="gr oup border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                    <span />View Demo</span>
                    <BarChart3 className="w-5h-5 ml-2" />
                  </Link>
                </div>
                
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <Phone className="w-5h-5 ml-2" />
                    <span className="w-5h-5 ml-2" />+1 302 464 0950</span>
                  </div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <Mail className="w-5h-5 ml-2" />
                    <span className="w-5h-5 ml-2" />kleber@ziontechgroup.com</span>
                  </div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <MapPin className="w-5h-5 ml-2" />
                    <span className="w-5h-5 ml-2" />Middletown DE 19709</span>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default AIBlockchainAnalyticsPage;