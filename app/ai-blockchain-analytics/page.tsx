import {Helmet} from 'react-helmet-async'
import {Shield, BarChart3, TrendingUp, Target, Zap, CheckCircle, ArrowRight, Star, Globe, Play, Mail, Phone, MapPin} from 'lucide-react'
import {Link} from 'react-router-dom'
import React from 'react';
import {ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';

const AIBlockchain Analytics Page: React.FC = () => {
  constfeatures = [
    {
      icon: <Shieldclass Name ="w-8h-8text-cyan-400" / />,
      title: 'Smart Contract Analysis',
      description: 'AI-powered analysis of smart contracts with vulnerability detection and security scoring.',
      price: '$399/month',
      benefits: ['Vulnerability detection', 'Security scoring', 'Code optimization', 'Gas analysis']
    },
    {
      icon: <Bar Chart3class Name="w-8h-8text-emerald-400" / />,
      title: 'De Fi Analytics',
      description: 'Comprehensive De Fi protocol analysis with yield farming optimization and risk assessment.',
      price: '$299/month',
      benefits: ['Yield optimization', 'Risk assessment', 'Protocol analysis', 'APY tracking']
    },
    {
      icon: <Trending Upclass Name="w-8h-8text-purple-400" / />,
      title: 'Trading Intelligence',
      description: 'Advanced trading signals and market analysis powered by machine learning algorithms.',
      price: '$199/month',
      benefits: ['Trading signals', 'Market analysis', 'Price prediction', 'Portfolio optimization']
    },
    {
      icon: <Targetclass Name ="w-8h-8text-orange-400" / />,
      title: 'NFT Analytics',
      description: 'Comprehensive NFT market analysis with rarity scoring and valuation models.',
      price: '$149/month',
      benefits: ['Rarity scoring', 'Valuation models', 'Market trends', 'Collection analysis']
    },
    {
      icon: <Zapclass Name ="w-8h-8text-pink-400" / />,
      title: 'Real-time Monitoring',
      description: 'Live blockchain monitoring with instant alerts and anomaly detection.',
      price: '$179/month',
      benefits: ['Live monitoring', 'Instant alerts', 'Anomaly detection', 'Real-time data']
    },
    {
      icon: <Globeclass Name ="w-8h-8text-yellow-400" / />,
      title: 'Cross- Chain Analysis',
      description: 'Multi-blockchain analysis supporting Ethereum, BSC, Polygon, and other major chains.',
      price: '$249/month',
      benefits: ['Multi-chain support', 'Cross-chain tracking', 'Bridge analysis', 'Interoperability insights']
    }
  ]

  const analyticsTypes = [
    {
      title: 'De Fi Protocol Analysis',
      description: 'Comprehensive analysis of De Fi protocols including TVL, yield rates, and risk metrics.',
      icon: <Bar Chart3class Name="w-6h-6text-cyan-400" / />,
      metrics: ['95% accuracy', 'Real-time data', '50+ protocols'],
      features: ['TVL tracking', 'Yield analysis', 'Risk scoring', 'Liquidity analysis']
    },
    {
      title: 'Smart Contract Security',
      description: 'Advanced security analysis with vulnerability detection and code optimization recommendations.',
      icon: <Shieldclass Name ="w-6h-6text-emerald-400" / />,
      metrics: ['99% detection rate', 'Zero false positives', '24/7 monitoring'],
      features: ['Vulnerability scanning', 'Code review', 'Security scoring', 'Audit reports']
    },
    {
      title: 'Trading & Investment',
      description: 'AI-powered trading signals and portfolio optimization for crypto investments.',
      icon: <Trending Upclass Name="w-6h-6text-purple-400" / />,
      metrics: ['40% better returns', 'Risk reduction', 'Automated trading'],
      features: ['Trading signals', 'Portfolio optimization', 'Risk management', 'Backtesting']
    },
    {
      title: 'NFT Market Intelligence',
      description: 'Comprehensive NFT analysis with rarity scoring and market trend predictions.',
      icon: <Targetclass Name ="w-6h-6text-orange-400" / />,
      metrics: ['85% accuracy', 'Real-time pricing', 'Trend prediction'],
      features: ['Rarity analysis', 'Price prediction', 'Market trends', 'Collection insights']
    }
  ]

  constpricing = [
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

  consttestimonials = [
    {
      name: 'Alex Thompson',
      company: 'Crypto Fund Capital',
      role: 'Portfolio Manager',
      content: 'AI Blockchain Analytics helped us optimize our De Fi strategies and increase returns by 40%. The insights are incredibly accurate and actionable.',
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
        <title   />AIBlockchain Analytics - DeFi & CryptoIntelligence | ZionTech Group</title>
        <meta name ="description" content="Advanced AI-poweredblockchain analyticsfor De Fi, smartcontracts, andcrypto trading. Real-timeinsights, securityanalysis, andtrading intelligencewith 95% accuracy." / / />
        <meta name ="keywords" content="AIblockchain analytics, De Fi analytics, smartcontract analysis, cryptotrading intelligence, NFTanalytics, blockchainsecurity, Zion Tech Group" / / />
        <meta name ="robots" content="index, follow" / / />
        <linkrel ="canonical" href="https://ziontechgroup.com/ai-blockchain-analytics" / />
      </Helmet>

      {/* HeroSection */}
      <sectionclassName ="relativepy-20px-4overflow-hidden" />
        <div className ="absoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)]animate-pulse" / />
        <div className ="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }} / />
        <div className ="relative max-w-7 xlmx-autotext-center" />
          <div className ="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30" />
            <Shieldclass Name ="w-4h-4" / />
            <span   />AI- Powered Blockchain Intelligence</span>
          </div>
          
          <h1className ="text-6 xl md:text-8 xl font-bold text-whitemb-8leading-tight" />
            AI Blockchain
            <br / />
            <spanclassName ="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-texttext-transparentanimate-pulse"  />Analytics
            </span>
          </h1>
          
          <pclassName ="text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed" />
            Advanced AI-powered analytics for De Fi, smart contracts, and crypto trading. 
            Get real-time insights, security analysis, and trading intelligence with 95% accuracy.
            <br / />
            <spanclassName ="text-cyan-400font-semibold"   />Navigate the blockchain with confidence and intelligence.</span>
          </p>
          
          <div className ="flex flex-col sm:flex-row gap-6justify-centermb-16" />
            <Link to ="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
              <span   />Start Free Trial</span>
              <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to ="/demo" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span   />View Demo</span>
              <Playclass Name ="w-5 h-5group-hover:translate-x-1transition-transform" / />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <sectionclassName ="py-20px-4relative" />
        <div className ="absolute inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" / />
        <div className ="relative max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Advanced <spanclassName ="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Blockchain Intelligence</span>
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
              Comprehensive AI-powered analytics that provide deep insights into blockchain networks, 
              De Fi protocols, and crypto markets for informed decision-making.
            </p>
          </div>
          
          <div className ="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8" />
            {features.map((feature, index) => (
              <divkey ="{index}" className="groupbg-white/10 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover:bg-white/20 transition-allduration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className ="flexitems-centerjustify-centerw-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xlmb-6 group-hover:scale-110transition-transformduration-300"  />{feature.icon}
                </div>
                <h3className ="text-2 xlfont-boldtext-whitemb-4group-hover:text-cyan-400transition-colors"  />{feature.title}
                </h3>
                <pclassName ="text-gray-300mb-6leading-relaxed" />
                  {feature.description}
                </p>
                <div className ="space-y-2mb-6" />
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <divkey ="{benefitIndex}" className="flexitems-centerspace-x-2text-gray-400text-sm" />
                      <Check Circleclass Name="w-4h-4text-green-400" / />
                      <span   />{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className ="flexitems-centerjustify-between" />
                  <spanclassName ="text-cyan-400font-semiboldtext-lg"  />{feature.price}
                  </span>
                  <Link to ="/contact" className="group/link flex items-center space-x-2 text-cyan-400hover:text-cyan-300transition-colors" />
                    <spanclassName ="text-smfont-medium"   />Learn More</span>
                    <Arrow Rightclass Name="w-4 h-4group-hover/link:translate-x-1transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <sectionclassName ="py-20 px-4 bg-gradient-to-br from-slate-800/50to-purple-900/50relative" />
        <div className ="absoluteinset-0bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" / />
        <div className ="relative max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <div className ="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-6borderborder-cyan-400/30" />
              <Bar Chart3class Name="w-4h-4" / />
              <span   />Analytics Solutions</span>
            </div>
            <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Comprehensive <spanclassName ="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Analytics Suite</span>
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
              From De Fi protocols to NFT markets, our AI-powered analytics cover every aspect 
              of the blockchain ecosystem with unmatched accuracy and depth.
            </p>
          </div>
          
          <div className ="grid grid-cols-1md:grid-cols-2gap-8" />
            {analytics Types.map((type, index) => (
              <divkey ="{index}" className="groupbg-white/10 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <div className ="flexitems-centerspace-x-4mb-6" />
                  <div className ="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xlgroup-hover:scale-110transition-transformduration-300"  />{type.icon}
                  </div>
                  <h3className ="text-2 xlfont-boldtext-whitegroup-hover:text-cyan-400transition-colors"  />{type.title}
                  </h3>
                </div>
                <pclassName ="text-gray-300mb-6leading-relaxed" />
                  {type.description}
                </p>
                
                <div className ="space-y-3mb-6" />
                  <h4className ="text-lgfont-semiboldtext-cyan-400"   />KeyMetrics:</h4>
                  {type.metrics.map((metric, metricIndex) => (
                    <divkey ="{metricIndex}" className="flexitems-centerspace-x-2text-cyan-400font-semibold" />
                      <Trending Upclass Name="w-4h-4" / />
                      <span   />{metric}</span>
                    </div>
                  ))}
                </div>
                
                <div className ="space-y-2" />
                  <h4className ="text-lgfont-semiboldtext-purple-400"   />Core Features:</h4>
                  <div className ="flexflex-wrapgap-2" />
                    {type.features.map((feature, featureIndex) => (
                      <spankey ="{featureIndex}" className="px-3 py-1 bg-purple-500/20 text-purple-300rounded-fulltext-sm"  />{feature}
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
      <sectionclassName ="py-20px-4relative" />
        <div className ="absolute inset-0 bg-gradient-to-r from-cyan-500/5via-purple-500/5to-pink-500/5" / />
        <div className ="relative max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Simple <spanclassName ="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Pricing</span>
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
              Choose the perfect plan for your blockchain analytics needs. All plans include our core features 
              with no hidden fees or setup costs.
            </p>
          </div>
          
          <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
            {pricing.map((plan, index) => (
              <divkey ="{index}" className="{`relative" groupbg-white/10 backdrop-blur-lgrounded-2 xlp-8 bordertransition-allduration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-400/50 bg-gradient-to-brfrom-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: bg-white/20'
              }`} />
                {plan.popular && (
                  <div className ="absolute -top-4 left-1/2transform-translate-x-1/2" />
                    <div className ="bg-gradient-to-r from-cyan-500 to-purple-600 text-whitepx-6 py-2 rounded-fulltext-smfont-semibold"  />MostPopular
                    </div>
                  </div>
                )}
                
                <div className ="text-centermb-8" />
                  <h3className ="text-2 xl font-boldtext-whitemb-2"   />{plan.name}</h3>
                  <pclassName ="text-gray-300text-smmb-4" />{plan.description}</p>
                  <div className ="flexitems-baselinejustify-center" />
                    <spanclassName ="text-5 xlfont-boldtext-white"   />{plan.price}</span>
                    <spanclassName ="text-gray-400ml-2"   />{plan.period}</span>
                  </div>
                </div>
                
                <div className ="space-y-4mb-8" />
                  {plan.features.map((feature, featureIndex) => (
                    <divkey ="{featureIndex}" className="flexitems-centerspace-x-3" />
                      <Check Circleclass Name="w-5 h-5text-green-400flex-shrink-0" / />
                      <spanclassName ="text-gray-300"   />{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to ="/contact"
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-whitehover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
                  />Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <sectionclassName ="py-20 px-4 bg-gradient-to-br from-purple-900/50to-pink-900/50relative" />
        <div className ="absoluteinset-0bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" / />
        <div className ="relative max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              What Our <spanclassName ="bg-gradient-to-r from-purple-400 to-pink-400bg-clip-texttext-transparent"   />Customers Say</span>
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
              Join leading crypto companies and institutions that trust AI Blockchain Analytics for critical insights and decision-making.
            </p>
          </div>
          
          <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
            {testimonials.map((testimonial, index) => (
              <divkey ="{index}" className="groupbg-white/10 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <div className ="flexitems-centerspace-x-4mb-6" />
                  <div className ="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-fullflex items-centerjustify-centertext-whitefont-bold"  />{testimonial.avatar}
                  </div>
                  <div />
                    <h4className ="text-lgfont-semiboldtext-white"   />{testimonial.name}</h4>
                    <pclassName ="text-gray-400text-sm" />{testimonial.role}</p>
                    <pclassName ="text-gray-500text-sm" />{testimonial.company}</p>
                  </div>
                </div>
                
                <div className ="flexitems-centerspace-x-1mb-4" />
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Starkey ="{i}" className="w-5 h-5text-yellow-400fill-current" / />
                  ))}
                </div>
                
                <pclassName ="text-gray-300leading-relaxeditalic" />
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <sectionclassName ="py-20px-4relative" />
        <div className ="absolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
        <div className ="relative max-w-7xlmx-auto" />
          <div className ="text-center" />
            <div className ="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden" />
              <div className ="relativez-10" />
                <h2className ="text-4 xl sm:text-5 xl md:text-6 xl font-bold text-whitemb-6leading-tight" />
                  Ready to Master the <spanclassName ="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent"   />Blockchain?</span>
                </h2>
                
                <pclassName ="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed" />
                  Start your free trial today and gain the intelligence you need to navigate 
                  the complex world of blockchain and De Fi with confidence.
                </p>
                
                <div className ="flex flex-col sm:flex-row gap-6justify-centermb-8" />
                  <Link to ="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                    <span   />Start Free Trial</span>
                    <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
                  </Link>
                  <Link to ="/demo" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                    <span   />View Demo</span>
                    <Bar Chart3class Name="w-5 h-5group-hover:translate-x-1transition-transform" / />
                  </Link>
                </div>
                
                <div className ="grid grid-cols-1 md:grid-cols-3gap-6text-white/80" />
                  <div className ="flex items-centerjustify-centerspace-x-3" />
                    <Phoneclass Name ="w-5h-5text-cyan-300" / />
                    <spanclassName ="text-sm"   />+1 302 464 0950</span>
                  </div>
                  <div className ="flex items-centerjustify-centerspace-x-3" />
                    <Mailclass Name ="w-5h-5text-purple-300" / />
                    <spanclassName ="text-sm"   />kleber@ziontechgroup.com</span>
                  </div>
                  <div className ="flex items-centerjustify-centerspace-x-3" />
                    <Map Pinclass Name="w-5h-5text-pink-300" / />
                    <spanclassName ="text-sm"   />Middletown DE 19709</span>
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

export default AIBlockchain Analytics Page;