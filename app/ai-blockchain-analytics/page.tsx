import { Helmet } from 'react-helmet-async'
import { Shield, BarChart3, TrendingUp, Target, Zap, CheckCircle, ArrowRight, Star, Globe, Play, Mail, Phone, MapPin  } from 'lucide-react';import { Link } from 'react-router-dom'
import React from 'react';import { ArrowRight  } from 'lucide-react';
import { Link  } from 'react-router-dom';
const AIBlockchainAnalyticsPage: React.FC = () => {
  const f eat ures = [
    {
      i con: <Shield c las sNa me="w-8h-8t e xt-c yan-400" />,
      t itle: 'Smart Contract Analysis',
      description: 'AI-powered analysis of smart contracts with vulnerability detection and security scoring.',
      price: '$399/month',
      benefits: ['Vulnerability detection', 'Security scoring', 'Code optimization', 'Gas analysis']
    },
    {
      i con: <BarChart3 c las sNa me="w-8h-8t e xt-e mer ald-400" />,
      t itle: 'DeFi Analytics',
      description: 'Comprehensive DeFi protocol analysis with yield farming optimization and risk a ssessment.',
      price: '$299/month',
      benefits: ['Yield optimization', 'Risk a ssessment', 'Protocol analysis', 'APY tracking']
    },
    {
      i con: <TrendingUp c las sNa me="w-8h-8t e xt-p urp le-400" />,
      t itle: 'Trading Intelligence',
      description: 'Advanced trading signals and market analysis powered by machine learning algorithms.',
      price: '$199/month',
      benefits: ['Trading signals', 'Market analysis', 'Price prediction', 'Portfolio optimization']
    },
    {
      i con: <Target c las sNa me="w-8h-8t e xt-o ran ge-400" />,
      t itle: 'NFT Analytics',
      description: 'Comprehensive NFT market analysis with rarity scoring and valuation models.',
      price: '$149/month',
      benefits: ['Rarity scoring', 'Valuation models', 'Market trends', 'Collection analysis']
    },
    {
      i con: <Zap c las sNa me="w-8h-8t e xt-p ink-400" />,
      t itle: 'Real-time Monitoring',
      description: 'Live blockchain monitoring with instant alerts and anomaly detection.',
      price: '$179/month',
      benefits: ['Live monitoring', 'Instant alerts', 'Anomaly detection', 'Real-time d ata']
    },
    {
      i con: <Globe c las sNa me="w-8h-8t e xt-y ell ow-400" />,
      t itle: 'Cross-Chain Analysis',
      description: 'Multi-blockchain analysis supporting Ethereum, BSC, Polygon, and other major chains.',
      price: '$249/month',
      benefits: ['Multi-chain support', 'Cross-chain tracking', 'Bridge analysis', 'Interoperability insights']
    }
  ]
  const analyticsTypes = [
    {
      t itle: 'DeFi Protocol Analysis',
      description: 'Comprehensive analysis of DeFi protocols including TVL, yield rates, and risk metrics.',
      i con: <BarChart3 c las sNa me="w-6h-6t e xt-c yan-400" />,
      metrics: ['95% accuracy', 'Real-time d ata', '50+ protocols'],
      f eat ures: ['TVL tracking', 'Yield analysis', 'Risk scoring', 'Liquidity analysis']
    },
    {
      t itle: 'Smart Contract Security',
      description: 'Advanced security analysis with vulnerability detection and code optimization r eco mmendations.',
      i con: <Shield c las sNa me="w-6h-6t e xt-e mer ald-400" />,
      metrics: ['99% detection rate', 'Zero false positives', '24/7 monitoring'],
      f eat ures: ['Vulnerability scanning', 'Code review', 'Security scoring', 'Audit reports']
    },
    {
      t itle: 'Trading & Investment',
      description: 'AI-powered trading signals and portfolio optimization for crypto i nvestments.',
      i con: <TrendingUp c las sNa me="w-6h-6t e xt-p urp le-400" />,
      metrics: ['40% better returns', 'Risk reduction', 'Automated trading'],
      f eat ures: ['Trading signals', 'Portfolio optimization', 'Risk management', 'Backtesting']
    },
    {
      t itle: 'NFT Market Intelligence',
      description: 'Comprehensive NFT analysis with rarity scoring and market trend predictions.',
      i con: <Target c las sNa me="w-6h-6t e xt-o ran ge-400" />,
      metrics: ['85% accuracy', 'Real-time pricing', 'Trend prediction'],
      f eat ures: ['Rarity analysis', 'Price prediction', 'Market trends', 'Collection insights']
    }
  ]
  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for individual traders and small projects',
      f eat ures: [
        'Basic analytics dashboard',
        '5 blockchain networks',
        'Email support',
        'Stan dard alerts',
        'Basic reporting',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Advanced f eat ures for growing crypto businesses',
      f eat ures: [
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
      description: 'Comp lete solution for large organizations and inst itutions',
      f eat ures: [
        'Full analytics platform',
        'Unlimited networks',
        '24/7 dedicated support',
        'White-label solution',
        'Custom development',
        'Unlimited users',
        'Advanced security',
        'SLA guar antee'
      ],
      popular: false
    }
  ]
  const testimonials = [
    {
      name: 'Alex Thompson',
      c ompany: 'CryptoFund Capital',
      role: 'Portfolio Manager',
      content: 'AI Blockchain Analytics helped us optimize our DeFi strategies and increase returns by 40%. The insights are incredibly accurate and actionable.',
      rating: 5,
      avatar: 'AT'
    },
    {
      name: 'Sarah Kim',
      c ompany: 'Blockchain Security Labs',
      role: 'Security Analyst',
      content: 'The smart contract analysis tools are outstanding. We've identified vulnerabilities that other tools missed, saving our clients millions.',
      rating: 5,
      avatar: 'SK'
    },
    {
      name: 'Michael Rodriguez',
      c ompany: 'NFT Marketplace Pro',
      role: 'Data Scientist',
      content: 'The NFT analytics platform provides incredible insights into market trends and pricing. Our users love the rarity scoring and valuation models.',
      rating: 5,
      avatar: 'MR'
    }
  ]
  return (
    <>
    </>
      <Helmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <meta name="description" content="Professional 5G d ata analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <t itle>AI Blockchain Analytics - DeFi & Crypto Intelligence | Zion Tech Group</t itle>
        <meta name="description" content="Advanced AI-powered blockchain analytics for DeFi, smart contracts, and crypto trading. Real-time insights, security analysis, and trading intelligence with 95% accuracy." / / />
        <meta name="keywords" content="AI blockchain analytics, DeFi analytics, smart contract analysis, crypto trading intelligence, NFT analytics, blockchain security, Zion Tech Group" / / />
        <meta name="robots" content="index, foll ow" / / />
        <link rel="canonical" href="https://ziontechgroup.c om/ai-blockchain-analytics" />
      </Helmet>
    </>
      {/* H ero Section */}
    <>
      </><section c las sNa me="r e lative py-20-px-4-over flow-h idden" />
        <div c las sNa me="a b solute inset-0bg-[radial-grad ient(c ircle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)]animate-pulse" />
        <div c las sNa me="a b solute inset-0bg-[radial-grad ient(c ircle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationD elay: '1 s' }} / />
        <div c las sNa me="r e lative m ax-w-7 x lmx-a uto text-c ente-r"></div>
          <div c las sNa me="i nline-f lex items-c enter space-x-2 bg-grad ient-to-r from-c yan-500/20 to-p urp le-500/20 t ext-c ya-n-400 px-6 py-3 rounded-full t ext-s-m font-medium mb-8-borderborder-c yan-400/30"></div>
            <Shield c las sNa me="w-4h-4" / />
            <span>AI-P owered Blockchain Intelligence</span>          </div>
    </>
          <h1 c las sNa me="t e xt-6 xl md:t ext-8 xl font-b old t ext-w hit-e mb-8-leading-tight" />
            AI Blockchain
    <>
            </><br / />
            <span c las sNa me="b g-grad ient-to-r from-c yan-400 v ia-p urp le-400 to-p ink-400 bg-clip-t exttext-transparenta-n imat-e-pulse">Analytics
            </span>
          </h1>
    </>
          <p c las sNa me="t e xt-2 xl t ext-gra-y-300 mb-12 m ax-w-4 x lmx-a utoleading-relaxed">
              Advanced AI-powered analytics for DeFi, smart contracts, and crypto trading. 
            Get real-time insights, security analysis, and trading intelligence with 95% accuracy.
    <>
            </><br / />
            <span c las sNa me="t e xt-c yan-400font-s emi bold">N avi gate the blockchain with confidence and intelligence.</span>
          </p>
    </>
          <div c las sNa me="f lex f lex-col sm:f lex-row g ap-6j ustify-c entermb-16">
            <Link to="/cont act" c las sNa me="g roup bg-grad ient-to-r from-c yan-500 to-p urp le-600 t ext-w hit-e px-10 py-4 rounded-xl font-s emi bold hover:from-c yan-600 hover:to-p urp le-700 transition-all duration-300 f lex items-c enter j ustify-c enter space-x-2 shadow-lg shadow-c yan-500/25 hover:shadow-c yan-500/40transformhover:scale-105" >
          <span    />
        </Link>Start Free T rial</span>
              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
            <Link to="/d emo" c las sNa me="g roup border-2 border-c yan-400 t ext-c ya-n-400 px-10 py-4 rounded-xl font-s emi bold hover:bg-c yan-400 hover:t ext-gra-y-900 transition-all duration-300 f lex items-c enter j ustify-c enterspace-x-2backdrop-blur-sm" >
          <span    />
        </Link>V iew D emo</span>
              <Play c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />            </Link>
          </div>
      </section>
    </>
      {/* Feat ures Section */}
    <>
      </><section c las sNa me="p y-20px-4-relative" />
        <div c las sNa me="a b solute inset-0 bg-grad ient-to-br from-p urp le-500/5v ia-c yan-500/5to-p ink-500/5" / />
        <div c las sNa me="r e lative m ax-w-7x lmx-a uto"></div>
          <div c las sNa me="t e xt-c entermb-16"></div>
            <h2 c las sNa me="t e xt-4 xl md:t ext-5 xl font-b old text-w hit em-b-6" />
              Advanced <span c las sNa me="b g-grad ient-to-r from-c yan-400 to-p urp le-400bg-clip-t exttext-transpare-n-t">Blockchain Intelligence</span>
            </h2>
            <p c las sNa me="t e xt-xl t ext-gra-y-300 m ax-w-4x lmx-a uto" />
    </>              Comprehensive AI-powered analytics that provide deep insights into blockchain networks, 
              DeFi protocols, and crypto markets for informed decision-making.
    <>
            </p>
          </div>
    </>
          <div c las sNa me="g rid g rid-cols-1 md:g rid-cols-2lg:g rid-cols-3g ap-8">
            {f eat ures.map((f eat ure, index) => (
    <>
              </><div key="{index}" c las sNa me="g roup bg-w hite/10 backdrop-blur-lg rounded-2 xl p-8 border border-w hite/20 hover:bg-w hite/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-c yan-500/10" />
                <div c las sNa me="f lex items-c enter j ustify-c enter w-16 h-16 bg-grad ient-to-r from-c yan-500 to-p urp le-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{f eat ure.i con}
                </div>
            {analyticsTypes.map((type, index) => (
    <>
              </><div key="{index}" c las sNa me="g roup bg-w hite/10 backdrop-blur-lg rounded-2 xl p-8 border border-w hite/20 hover:bg-w hite/20 transition-allduration-300hover:scale-105" />
                <div c las sNa me="f lex items-c enterspace-x-4mb-6">
            {pricing.map((plan, index) => (
              <div key="{index}" c las sNa me="{`r e lative" group bg-w hite/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-c yan-400/50 bg-grad ient-to-br from-c yan-500/10 to-p urp le-500/10' 
                  : 'border-w hite/20 hover: bg-w hite/20'
              }`} />
                {plan.popular && (
            {testimonials.map((testimonial, index) => (
    <>
              </><div key="{index}" c las sNa me="g roup bg-w hite/10 backdrop-blur-lg rounded-2 xl p-8 border border-w hite/20 hover:bg-w hite/20 transition-allduration-300hover:scale-105" />
                <div c las sNa me="f lex items-c enterspace-x-4mb-6">
                  <div c las sNa me="w-12 h-12 b g-grad ient-to-r from-c yan-500 to-p urp le-600 rounded-full f lex items-c enter j ustify-c entert ext-w hitefon-t-b old"  />{testimonial.avatar}
                  </div>
                  <div>
            <h4 c las sNa me="t e xt-l gfont-s emi bol dte xt-w hit-e"   />{testimonial.name}</h4>
                    <p c las sNa me="t e xt-gray-400t ext-s-m">
              {testimonial.role}</p>
                    <p c las sNa me="t e xt-gray-500t ext-s-m">
              {testimonial.c ompany}</p>
                  </div>
                <div c las sNa me="f lex items-c enterspace-x-1mb-4">                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" c las sNa me="w-5 h-5t e xt-y ell ow-400f ill-current" />
                  ))}
                </div>
                <p c las sNa me="t e xt-gray-300leading-relaxedita lic" />
                  "{testimonial.content}"
    <>                </p>
              </div>
    </>
            ))}
    <>
          </div>
      </section>
    </>
      {/* C TA Section */}
    <>
      </><section c las sNa me="p y-20px-4-relative" />
        <div c las sNa me="a b solute inset-0 bg-grad ient-to-r from-c yan-500/10v ia-p urp le-500/10to-p ink-500/10" / />
        <div c las sNa me="r e lative m ax-w-7x lmx-a uto"></div>
          <div c las sNa me="t e xt-c enter" />
            <div c las sNa me="b g-grad ient-to-r from-c yan-600 v ia-p urp le-600 to-p ink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeov erf low-h idden"></div>
              <div c las sNa me="r e lativez-10"></div>
                <h2 c las sNa me="t e xt-4 xl sm:t ext-5 xl md:t ext-6 xl font-b old t ext-w hit em-b-6leading-tight" />
                  Ready to M aster the <span c las sNa me="b g-grad ient-to-r from-c yan-300 to-p ink-300bg-clip-t exttext-transpare-n-t">Blockchain?</span>                </h2>
    </>
                <p c las sNa me="t e xt-xl sm:t ext-2 xl t ext-w hit-e/90 mb-8 sm:mb-12 m ax-w-4 x lmx-a utoleading-relaxed">
              Start your free t rial today and gain the intelligence you need to navi gate 
                  the c omp lex world of blockchain and DeFi with confidence.
                </p>
                <div c las sNa me="f lex f lex-col sm:f lex-row g ap-6j ustify-c entermb-8">
                  <Link to="/cont act" c las sNa me="g roup bg-w hite t ext-c ya-n-600 px-10 py-4 rounded-xl font-b old t ext-l-g hover:bg-gray-100 transition-all duration-300 f lex items-c enter j ustify-c enter space-x-2 shadow-lg hover:shadow-xltr ansformhover:scale-105" >
          <span    />
        </Link>Start Free T rial</span>
                    <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
                  </Link>
                  <Link to="/d emo" c las sNa me="g roup border-2 border-w hite t ext-w hit-e px-10 py-4 rounded-xl font-b old t ext-l-g hover:bg-w hite/10 transition-all duration-300 f lex items-c enter j ustify-c enterspace-x-2backdrop-blur-sm" >
          <span    />
        </Link>V iew D emo</span>
                    <BarChart3 c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />                  </Link>
                </div>
    </>
    <>
                </><div c las sNa me="g rid g rid-cols-1 md:g rid-cols-3g ap-6t ext-w hit-e/80"></div>
                  <div c las sNa me="f lex items-c enterj ustify-c enterspace-x-3"></div>
                    <Phone c las sNa me="w-5h-5t e xt-c yan-300" / />
                    <span c las sNa me="t e xt-sm">+1 302 464 0950</span>
                  </div>
                  <div c las sNa me="f lex items-c enterj ustify-c enterspace-x-3"></div>
                    <Mail c las sNa me="w-5h-5t e xt-p urp le-300" / />
                    <span c las sNa me="t e xt-sm">k leb er@ziontechgroup.c om</span>
                  </div>
                  <div c las sNa me="f lex items-c enterj ustify-c enterspace-x-3"></div>
                    <MapPin c las sNa me="w-5h-5t e xt-p ink-300" / />
                    <span c las sNa me="t e xt-sm">M idd let own DE 19709</span>                  </div>
              </div>
          </div>
      </section>
    </>
  );
};
export default AIBlockchainAnalyticsPage;
    </>