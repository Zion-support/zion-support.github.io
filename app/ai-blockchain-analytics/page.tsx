import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

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
      <Helmet>
        <title>AI Blockchain Analytics - DeFi & Crypto Intelligence | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered blockchain analytics for DeFi, smart contracts, and crypto trading. Real-time insights, security analysis, and trading intelligence with 95% accuracy." />
        <meta name="keywords" content="AI blockchain analytics, DeFi analytics, smart contract analysis, crypto trading intelligence, NFT analytics, blockchain security, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-blockchain-analytics" />
      </Helmet>

      </Shield>
      </BarChart3>
      </TrendingUp>
      </Target>
      </Zap>
      </Globe>
      </BarChart3>
      </Shield>
      </TrendingUp>
      </Target>
      </meta>
      </meta>
      </meta>
      </link>
      </Shield>
      </br>
      </br>
      </ArrowRight>
      </Play>
      </CheckCircle>
      </ArrowRight>
      </BarChart3>
      </TrendingUp>
      </CheckCircle>
      </Star>
      </div>
      </div>
      </div>
      </ArrowRight>
      </BarChart3>
      </div>
      </div>
      </Phone>
      </div>
      </Mail>
      </div>
      </MapPin>
      {/* Hero Section */}
      <section>
        <div>
        <div>
        
        <div>
          <div>
            <Shield className="w-4 h-4" />
            <span>AI-Powered Blockchain Intelligence</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            AI Blockchain
            <br></br>
            <span>
              Analytics
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Advanced AI-powered analytics for DeFi, smart contracts, and crypto trading. 
            Get real-time insights, security analysis, and trading intelligence with 95% accuracy.
            <br></br>
            <span>Navigate the blockchain with confidence and intelligence.</span>
          </p>
          
          <div>
            <Link;
to="/contact" 
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link;
to="/demo" 
              className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>View Demo</span>
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div>
        <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced <span>Blockchain Intelligence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive AI-powered analytics that provide deep insights into blockchain networks, 
              DeFi protocols, and crypto markets for informed decision-making.
            </p>
          </div>
          
          <div>
            {features.map((feature, index) => (
              <div>
                <div>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <span>
                    {feature.price}
                  </span>
                  <Link;
to="/contact"
                    className="group/link flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section>
        <div>
        <div>
          <div>
            <div>
              <BarChart3 className="w-4 h-4" />
              <span>Analytics Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive <span>Analytics Suite</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              From DeFi protocols to NFT markets, our AI-powered analytics cover every aspect;
of the blockchain ecosystem with unmatched accuracy and depth.
            </p>
          </div>
          
          <div>
            {analyticsTypes.map((type, index) => (
              <div>
                <div>
                  <div>
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {type.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {type.description}
                </p>
                
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400">Key Metrics:</h4>
                  {type.metrics.map((metric, metricIndex) => (
                    <div>
                      <TrendingUp className="w-4 h-4" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-purple-400">Core Features:</h4>
                  <div>
                    {type.features.map((feature, featureIndex) => (
                      <span>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section>
        <div>
        <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple <span>Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choose the perfect plan for your blockchain analytics needs. All plans include our core features;
with no hidden fees or setup costs.
            </p>
          </div>
          
          <div>
            {pricing.map((plan, index) => (
              <div>
                {plan.popular && (
                  <div>
                    <div>
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div>
                    <span>{plan.price}</span>
                    <span>{plan.period}</span>
                  </div>
                </div>
                
                <div>
                  {plan.features.map((feature, featureIndex) => (
                    <div>
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link;
to="/contact"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <div>
        <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span>Customers Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Join leading crypto companies and institutions that trust AI Blockchain Analytics for critical insights and decision-making.
            </p>
          </div>
          
          <div>
            {testimonials.map((testimonial, index) => (
              <div>
                <div>
                  <div>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div>
        <div>
          <div>
            <div>
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to Master the <span>Blockchain?</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Start your free trial today and gain the intelligence you need to navigate;
the complex world of blockchain and DeFi with confidence.
                </p>
                
                <div>
                  <Link;
to="/contact" 
                    className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link;
to="/demo" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>View Demo</span>
                    <BarChart3 className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div>
                  <div>
                    <Phone className="w-5 h-5 text-cyan-300" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div>
                    <Mail className="w-5 h-5 text-purple-300" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div>
                    <MapPin className="w-5 h-5 text-pink-300" />
                    <span>Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIBlockchainAnalyticsPage;