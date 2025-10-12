import { Helmet } from 'react-helmet-async'
import { Shield, BarChart3, TrendingUp, Target, Zap, CheckCirc l e, ArrowRight, Star, Globe, Play, Volume2, VolumeX, Search, Upload, Mail, Phone, MapPin, Users, Brain, Cpu, Rocket, Network, Monitor, Server, CircuitBoa r d, Atom, Satellite, Wrench, BarChart, PieChart, LineChart, Activity, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIBlockchainAnalyticsPa g e: React.FC = () => {
  constfeatures= [
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Smart Contract Analysis',
      description: 'AI-poweredanalysisof smart contracts with vulnerabili t y detection and security scoring.',
      price: '$399/month',
      benefits: ['Vulnerabili t y detection', 'Security scoring', 'Code optimizati o n', 'Gas analysis']
    },
    {
      icon: <BarChart3className="w-5h-5ml-2" />,
      title: 'DeFi Analytics',
      description: 'Comprehensi v e DeFi protocol analysis with yield farming optimizati o n and risk assessment.',
      price: '$299/month',
      benefits: ['Yield optimizati o n', 'Risk assessment', 'Protocol analysis', 'APY tracking']
    },
    {
      icon: <TrendingUpclassName="w-5h-5ml-2" />,
      title: 'Trading Intelligen c e',
      description: 'Advanced trading signals and market analysis powered by machine learning algorithms.',
      price: '$199/month',
      benefits: ['Trading signals', 'Market analysis', 'Price prediction', 'Portfolio optimizati o n']
    },
    {
      icon: <TargetclassName="w-5h-5ml-2" />,
      title: 'NFT Analytics',
      description: 'Comprehensi v e NFT market analysis with rarity scoring and valuation models.',
      price: '$149/month',
      benefits: ['Rarity scoring', 'Valuation models', 'Market trends', 'Collection analysis']
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Real-timeMonitoring',
      description: 'Live blockchain monitoring with instant alerts and anomaly detection.',
      price: '$179/month',
      benefits: ['Live monitoring', 'Instant alerts', 'Anomaly detection', 'Real-timedata']
    },
    {
      icon: <GlobeclassName="w-5h-5ml-2" />,
      title: 'Cross-ChainAnalysis',
      description: 'Multi-blockchainanalysissupporting Ethereum, BSC, Polygon, and other major chains.',
      price: '$249/month',
      benefits: ['Multi-chainsupport', 'Cross-chaintracking', 'Bridge analysis', 'Interoperabili t y insights']
    }
  ]

  const analyticsTypes= [
    {
      title: 'DeFi Protocol Analysis',
      description: 'Comprehensi v e analysis of DeFi protocols including TVL, yield rates, and risk metrics.',
      icon: <BarChart3className="w-5h-5ml-2" />,
      metrics: ['95% accuracy', 'Real-timedata', '50+ protocols'],
      features: ['TVL tracking', 'Yield analysis', 'Risk scoring', 'Liquidity analysis']
    },
    {
      title: 'Smart Contract Security',
      description: 'Advanced security analysis with vulnerabili t y detection and code optimizati o n recommendatio n s.',
      icon: <ShieldclassName="w-5h-5ml-2" />,
      metrics: ['99% detection rate', 'Zero false positives', '24/7 monitoring'],
      features: ['Vulnerabili t y scanning', 'Code review', 'Security scoring', 'Audit reports']
    },
    {
      title: 'Trading & Investment',
      description: 'AI-poweredtradingsignals and portfolio optimizati o n for crypto investmen t s.',
      icon: <TrendingUpclassName="w-5h-5ml-2" />,
      metrics: ['40% better returns', 'Risk reduction', 'Automated trading'],
      features: ['Trading signals', 'Portfolio optimizati o n', 'Risk management', 'Backtesti n g']
    },
    {
      title: 'NFT Market Intelligen c e',
      description: 'Comprehensi v e NFT analysis with rarity scoring and market trend predictio n s.',
      icon: <TargetclassName="w-5h-5ml-2" />,
      metrics: ['85% accuracy', 'Real-timepricing', 'Trend prediction'],
      features: ['Rarity analysis', 'Price prediction', 'Market trends', 'Collection insights']
    }
  ]

  constpricing= [
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
        '1 user account';
      ],
      popular: false;
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
        'Custom integratio n s';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'Complete solution for large organizatio n s and institutio n s',
      features: [
        'Full analytics platform',
        'Unlimited networks',
        '24/7 dedicated support',
        'White-labelsolution',
        'Custom developme n t',
        'Unlimited users',
        'Advanced security',
        'SLA guarantee';
      ],
      popular: false;
    }
  ]

  const testimonials= [
    {
      name: 'Alex Thompson',
      company: 'CryptoFund Capital',
      role: 'Portfolio Manager',
      content: 'AI Blockchain Analytics helped us optimize our DeFi strategies and increase returns by 40%. The insights are incredibly accurate and actionable.',
      rating: 5,
      avatar: 'AT';
    },
    {
      name: 'Sarah Kim',
      company: 'Blockchain Security Labs',
      role: 'Security Analyst',
      content: 'The smart contract analysis tools are outstandi n g. We've identified vulnerabiliti e s that other tools missed, saving our clients millions.',
      rating: 5,
      avatar: 'SK';
    },
    {
      name: 'Michael Rodriguez',
      company: 'NFT Marketpla c e Pro',
      role: 'Data Scientist',
      content: 'The NFT analytics platform provides incredible insights into market trends and pricing. Our users love the rarity scoring and valuation models.',
      rating: 5,
      avatar: 'MR';
    }
  ]

return (
    <>
      <Helmet></Helmet>
        <title />AI Blockchain Analytics - DeFi & Crypto Intelligen c e | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-poweredblockchainanalytics for DeFi, smart contracts, and crypto trading. Real-timeinsights, security analysis, and trading intelligen c e with 95% accuracy." />
        <meta name="keywords" content="AI blockchain analytics, DeFi analytics, smart contract analysis, crypto trading intelligen c e, NFT analytics, blockchain security, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <linkrel="canonical" href="https://ziontechgro u p.com/ai-blockchain-analytics"  />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDel a y: '1 s' ,}}  />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <ShieldclassName="w-5h-5ml-2" />
            <span />AI-PoweredBlockchainIntelligen c e</span>
          </div>
          
          <h1 className="w-5h-5ml-2" />
            AI Blockchain;
            <br />
            <span className="w-5h-5ml-2" />Analytics;
            </span>
          </h1>
          
          <p className="w-5h-5ml-2" />
            Advanced AI-poweredanalyticsfor DeFi, smart contracts, and crypto trading.;
            Get real-timeinsights, security analysis, and trading intelligen c e with 95% accuracy.;
            <br />
            <span className="w-5h-5ml-2" />Navigate the blockchain with confidence and intelligen c e.</span>
          </p>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Linkto="/contact" className="groupbg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-10py-4rounded-xlfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lgshadow-cyan-500/25hover:shadow-cyan-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
            <Linkto="/demo" className="groupborder-2border-cyan-400text-cyan-400px-10py-4rounded-xlfont-semiboldhover:bg-cyan-400hover:text-gray-900transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
              <span />View Demo</span>
              <PlayclassName="w-5h-5ml-2" />
            </Link>
          </div>
      </section>

      {/* Features Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Advanced <span className="w-5h-5ml-2" />Blockchain Intelligen c e</span>
            </h2>
            <p className="w-5h-5ml-2">Comprehensi v e AI-poweredanalyticsthat provide deep insights into blockchain networks, 
              DeFi protocols, and crypto markets for informed decision-making.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {features.map((feature, index) => ())
              <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{feature.icon}>
                </div>
                <h3 className="w-5h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5h-5ml-2">{feature.description}
                </p>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {feature.benefits.map((benefit, benefitInd e x) => ())
                    <divkey="{benefitInd e x}" className="flexitems-centerspace-x-2text-gray-400text-sm" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      <span />{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <span className="w-5h-5ml-2" />{feature.price}
                  </span>
                  <Linkto="/contact" className="group/linkflexitems-centerspace-x-2text-cyan-400hover:text-cyan-300transition-colors" />
                    <span className="w-5h-5ml-2" />Learn More</span>
                    <ArrowRight className="w-5h-5ml-2" />
                  </Link>
                </div>
            ))}
          </div>
      </section>

      {/* Analytics Types Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <BarChart3className="w-5h-5ml-2" />
              <span />Analytics Solutions</span>
            </div>
            <h2 className="w-5h-5ml-2" />
              Comprehensi v e <span className="w-5h-5ml-2" />Analytics Suite</span>
            </h2>
            <p className="w-5h-5ml-2">From DeFi protocols to NFT markets, our AI-poweredanalyticscover every aspect;
              of the blockchain ecosystem with unmatched accuracy and depth.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {analyticsTyp e s.map((type, index) => ())
              <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{type.icon}>
                  </div>
                  <h3 className="w-5h-5ml-2" />{type.title}
                  </h3>
                </div>
                <p className="w-5h-5ml-2">{type.description}
                </p>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <h4 className="w-5h-5ml-2" />Key Metrics:</h4>
                  {type.metrics.map((metric, metricInd e x) => ())
                    <divkey="{metricInd e x}" className="flexitems-centerspace-x-2text-cyan-400font-semibold" />
                      <TrendingUpclassName="w-5h-5ml-2" />
                      <span />{metric}</span>
                    </div>
                  ))}
                </div>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <h4 className="w-5h-5ml-2" />Core Features:</h4>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {type.features.map((feature, featureInd e x) => ())
                      <spankey="{featureInd e x}" className="px-3py-1bg-purple-500/20text-purple-300rounded-fulltext-sm"  />{feature}
                      </span>
                    ))}
                  </div>
              </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Simple <span className="w-5h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5h-5ml-2">Choose the perfect plan for your blockchain analytics needs. All plans include our core features;
              with no hidden fees or setup costs.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {pricing.map((plan, index) => ())
              <divkey="{index}" className="{`relative" group bg-white/10 backdrop-blur-lgrounded-2xl p-8bordertransition-allduration-300hover:scale-105 ${>
                plan.popular;
                  ? 'border-cyan-400/50 bg-gradient-to-brfrom-cyan-500/10 to-purple-500/10';
                  : 'border-white/20 hover: bg-white/20';
              }`} />
                {plan.popular && ()
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Most Popular>
                    </div>
                )}
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                  <p className="w-5h-5ml-2">{plan.description}</p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}</span>
                  </div>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {plan.features.map((feature, featureInd e x) => ())
                    <divkey="{featureInd e x}" className="flexitems-centerspace-x-3" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      <span className="w-5h-5ml-2" />{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className="{`block" w-fulltext-centerpy-3rounded-xlfont-semiboldtransition-allduration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-rfrom-cyan-500to-purple-600text-whitehover:from-cyan-600hover:to-purple-700shadow-lgshadow-cyan-500/25';
                      : 'border-2border-cyan-400text-cyan-400hover: bg-cyan-400hover:text-gray-900';
                  }`}
                  />Get Started;
                </Link>
              </div>
            ))}
          </div>
      </section>

      {/* Testimonia l s Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              What Our <span className="w-5h-5ml-2" />Customers Say</span>
            </h2>
            <p className="w-5h-5ml-2">Join leading crypto companies and institutio n s that trust AI Blockchain Analytics for critical insights and decision-making.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {testimonia l s.map((testimoni a l, index) => ())
              <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.avatar}>
                  </div>
                  <div />
                    <h4 className="w-5h-5ml-2" />{testimoni a l.name}</h4>
                    <p className="w-5h-5ml-2">{testimoni a l.role}</p>
                    <p className="w-5h-5ml-2">{testimoni a l.company}</p>
                  </div>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {[...Array(testimoni a l.rating)].map((_, i) => ())
                    <Starkey="{i}" className="w-5h-5text-yellow-400fill-current"  />
                  ))}
                </div>
                
                <p className="w-5h-5ml-2">"{testimoni a l.content}";
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <h2 className="w-5h-5ml-2" />
                  Ready to Master the <span className="w-5h-5ml-2" />Blockchain?</span>
                </h2>
                
                <p className="w-5h-5ml-2">Start your free trial today and gain the intelligen c e you need to navigate;
                  the complex world of blockchain and DeFi with confidence.;
                </p>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <Linkto="/contact" className="groupbg-whitetext-cyan-600px-10py-4rounded-xlfont-boldtext-lghover:bg-gray-100transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lghover:shadow-xltransformhover:scale-105" />
                    <span />Start Free Trial</span>
                    <ArrowRight className="w-5h-5ml-2" />
                  </Link>
                  <Linkto="/demo" className="groupborder-2border-whitetext-whitepx-10py-4rounded-xlfont-boldtext-lghover:bg-white/10transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
                    <span />View Demo</span>
                    <BarChart3className="w-5h-5ml-2" />
                  </Link>
                </div>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <PhoneclassName="w-5h-5ml-2" />
                    <span className="w-5h-5ml-2" />+1 302 464 0950</span>
                  </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <MailclassName="w-5h-5ml-2" />
                    <span className="w-5h-5ml-2" />kleber@ziontechgro u p.com</span>
                  </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <MapPinclassName="w-5h-5ml-2" />
                    <span className="w-5h-5ml-2" />Middletown DE 19709</span>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default AIBlockchainAnalyticsPa g e;