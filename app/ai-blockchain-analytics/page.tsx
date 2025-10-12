import { Helmet } from 'react-helmet-async'
import { Shield, Bar Chart3, Trending Up, Target, Zap, Check Circle, Arrow Right, Star, Globe, Play, Mail, Phone, Map Pin } from 'lucide-react';
import { Link } from 'react-router-dom'
import React from 'react';
import { Arrow Right } from 'lucide-react';
import { Link } from 'react-router-dom';

const A I Blockchain Analytics Page: React.F C = () => {
  const features = [
    {
      icon: <S hieldclass Name="w-8h-8t e xt-c y an-400" />,
      title: 'Smart Contract Analysis',
      description: 'A I-powered analysis of smart contracts with vulnerability detection and security scoring.',
      price: '$399/month',
      benefits: ['Vulnerability detection', 'Security scoring', 'Code optimization', 'Gas analysis']
    },
    {
      icon: <B ar Chart3 class Name="w-8h-8t e xt-e m erald-400" />,
      title: 'De Fi Analytics',
      description: 'Comprehensive De Fi protocol analysis with yield farming optimization and risk assessment.',
      price: '$299/month',
      benefits: ['Yield optimization', 'Risk assessment', 'Protocol analysis', 'A P Y tracking']
    },
    {
      icon: <T rending Upclass Name="w-8h-8t e xt-p u rple-400" />,
      title: 'Trading Intelligence',
      description: 'Advanced trading signals and market analysis powered by machine learning algorithms.',
      price: '$199/month',
      benefits: ['Trading signals', 'Market analysis', 'Price prediction', 'Portfolio optimization']
    },
    {
      icon: <T argetclass Name="w-8h-8t e xt-o r ange-400" />,
      title: 'N F T Analytics',
      description: 'Comprehensive N F T market analysis with rarity scoring and valuation models.',
      price: '$149/month',
      benefits: ['Rarity scoring', 'Valuation models', 'Market trends', 'Collection analysis']
    },
    {
      icon: <Z apclass Name="w-8h-8t e xt-p i nk-400" />,
      title: 'Real-time Monitoring',
      description: 'Live blockchain monitoring with instant alerts and anomaly detection.',
      price: '$179/month',
      benefits: ['Live monitoring', 'Instant alerts', 'Anomaly detection', 'Real-time data']
    },
    {
      icon: <G lobeclass Name="w-8h-8t e xt-y e llow-400" />,
      title: 'Cross-Chain Analysis',
      description: 'Multi-blockchain analysis supporting Ethereum, B S C, Polygon, and other major chains.',
      price: '$249/month',
      benefits: ['Multi-chain support', 'Cross-chain tracking', 'Bridge analysis', 'Interoperability insights']
    }
  ]

  const analytics Types = [
    {
      title: 'De Fi Protocol Analysis',
      description: 'Comprehensive analysis of De Fi protocols including T V L, yield rates, and risk metrics.',
      icon: <B ar Chart3 class Name="w-6h-6t e xt-c y an-400" />,
      metrics: ['95% accuracy', 'Real-time data', '50+ protocols'],
      features: ['T V L tracking', 'Yield analysis', 'Risk scoring', 'Liquidity analysis']
    },
    {
      title: 'Smart Contract Security',
      description: 'Advanced security analysis with vulnerability detection and code optimization recommendations.',
      icon: <S hieldclass Name="w-6h-6t e xt-e m erald-400" />,
      metrics: ['99% detection rate', 'Zero false positives', '24/7 monitoring'],
      features: ['Vulnerability scanning', 'Code review', 'Security scoring', 'Audit reports']
    },
    {
      title: 'Trading & Investment',
      description: 'A I-powered trading signals and portfolio optimization for crypto investments.',
      icon: <T rending Upclass Name="w-6h-6t e xt-p u rple-400" />,
      metrics: ['40% better returns', 'Risk reduction', 'Automated trading'],
      features: ['Trading signals', 'Portfolio optimization', 'Risk management', 'Backtesting']
    },
    {
      title: 'N F T Market Intelligence',
      description: 'Comprehensive N F T analysis with rarity scoring and market trend predictions.',
      icon: <T argetclass Name="w-6h-6t e xt-o r ange-400" />,
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
        'A P I access',
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
        'S L A guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'Crypto Fund Capital',
      role: 'Portfolio Manager',
      content: 'A I Blockchain Analytics helped us optimize our De Fi strategies and increase returns by 40%. The insights are incredibly accurate and actionable.',
      rating: 5,
      avatar: 'A T'
    },
    {
      name: 'Sarah Kim',
      company: 'Blockchain Security Labs',
      role: 'Security Analyst',
      content: 'The smart contract analysis tools are outstanding. We've identified vulnerabilities that other tools missed, saving our clients millions.',
      rating: 5,
      avatar: 'S K'
    },
    {
      name: 'Michael Rodriguez',
      company: 'N F T Marketplace Pro',
      role: 'Data Scientist',
      content: 'The N F T analytics platform provides incredible insights into market trends and pricing. Our users love the rarity scoring and valuation models.',
      rating: 5,
      avatar: 'M R'
    }
  ]

  return (

      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Blockchain Analytics - De Fi & Crypto Intelligence | Zion Tech Group</t itle>
        <m eta name="description" content="Advanced A I-powered blockchain analytics for De Fi, smart contracts, and crypto trading. Real-time insights, security analysis, and trading intelligence with 95% accuracy." / / />
        <m eta name="keywords" content="A I blockchain analytics, De Fi analytics, smart contract analysis, crypto trading intelligence, N F T analytics, blockchain security, Zion Tech Group" / / />
        <m eta name="robots" content="index, follow" / / />
        <l inkrel="canonical" href="https://ziontechgroup.com/ai-blockchain-analytics" />
      </H elmet>

      {/* Hero Section */}

      <s ection class Name="r e l a tive py-20px-4overflow-hidden" />
        <d iv class Name="a b s o lute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)]animate-pulse" />
        <d iv class Name="a b s o lute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animation Delay: '1 s' }} / />
        <d iv class Name="r e l a tive max-w-7 xlmx-autotext-center">
        </d iv>
          <d iv class Name="i n l i ne-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
        </d iv>
            <S hieldclass Name="w-4h-4" / />
            <s pan>A I-Powered Blockchain Intelligence</s pan>
          </d iv>

          <h1 c lass Name="t e xt-6 xl md:t e xt-8 xl font-bold text-white mb-8leading-tight" />
            A I Blockchain

            <b r / />
            <s pan class Name="b g-g r a dient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-texttext-transparentanimate-pulse">Analytics
            </s pan>
          </h1>

          <p c lass Name="t e xt-2 xl t e xt-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Advanced A I-powered analytics for De Fi, smart contracts, and crypto trading. 
            Get real-time insights, security analysis, and trading intelligence with 95% accuracy.

            <b r / />
            <s pan class Name="t e xt-c y an-400font-semibold">Navigate the blockchain with confidence and intelligence.</s pan>
          </p>

          <d iv class Name="f l ex f l ex-col sm:flex-row gap-6justify-centermb-16">
        </d iv>
            <L ink to="/contact" class Name="g r o u p bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
              <s pan>Start Free Trial</s pan>
              <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
            </L ink>
            <L ink to="/demo" class Name="g r o u p border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <s pan>View Demo</s pan>
              <P layclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" / />
            </L ink>
          </d iv>
      </s ection>

      {/* Features Section */}

      <s ection class Name="p y-20p x-4r e lative" />
        <d iv class Name="a b s o lute inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" / />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Advanced <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Blockchain Intelligence</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

              Comprehensive A I-powered analytics that provide deep insights into blockchain networks, 
              De Fi protocols, and crypto markets for informed decision-making.

            </p>
          </d iv>

          <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
            {features.map((feature, index) => (

              <d ivkey="{index}" class Name="g r o u p bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <d iv class Name="f l ex i t ems-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                </d iv>
                <h3 c lass Name="t e xt-2 xl f o nt-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title}
                </h3>
                <p c lass Name="t e xt-g r ay-300mb-6leading-relaxed" />

                  {feature.description}

                </p>
                <d iv class Name="s p a c e-y-2mb-6">
        </d iv>

                  {feature.benefits.map((benefit, benefit Index) => (

                    <d ivkey="{benefit Index}" class Name="f l ex i t ems-center space-x-2text-gray-400text-sm" />
                      <C heck Circleclass Name="w-4h-4t e xt-g r een-400" / />
                      <s pan>{benefit}</s pan>
                    </d iv>

                  ))}

                </d iv>
                <d iv class Name="f l e x items-centerjustify-between" />
                  <s pan class Name="t e xt-c y an-400font-semiboldtext-lg">{feature.price}
                  </s pan>
                  <L ink to="/contact" class Name="g r o u p/link flex items-center space-x-2 text-cyan-400hover:text-cyan-300transition-colors" />
                    <s pan class Name="t e xt-s m font-medium">Learn More</s pan>
                    <A rrow Rightclass Name="w-4 h-4g r o u p-hover/link:translate-x-1transition-transform" />
                  </L ink>
                </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Analytics Types Section */}

      <s ection class Name="p y-20 p x-4 bg-g r adient-to-br from-slate-800/50to-purple-900/50relative" />
        <d iv class Name="a b s o luteinset-0bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" / />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <d iv class Name="i n l i ne-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-6borderborder-cyan-400/30">
        </d iv>
              <B ar Chart3 class Name="w-4h-4" / />
              <s pan>Analytics Solutions</s pan>
            </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Comprehensive <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Analytics Suite</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

              From De Fi protocols to N F T markets, our A I-powered analytics cover every aspect 
              of the blockchain ecosystem with unmatched accuracy and depth.

            </p>
          </d iv>

          <d iv class Name="g r id g r id-cols-1md:grid-cols-2gap-8">
        </d iv>
            {analytics Types.map((type, index) => (

              <d ivkey="{index}" class Name="g r o u p bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <d iv class Name="f l ex i t ems-centerspace-x-4mb-6">
        </d iv>
                  <d iv class Name="p-3 b g-g r a dient-to-r from-cyan-500 to-purple-600 rounded-xl group-hover:scale-110transition-transformduration-300">{type.icon}
                  </d iv>
                  <h3 c lass Name="t e xt-2 xl f o nt-bold text-whitegroup-hover:text-cyan-400transition-colors">{type.title}
                  </h3>
                </d iv>
                <p c lass Name="t e xt-g r ay-300mb-6leading-relaxed" />

                  {type.description}
                </p>

                <d iv class Name="s p a c e-y-3mb-6">
        </d iv>
                  <h4 c lass Name="t e x t-lgfont-semiboldtext-cyan-400">Key Metrics:</h4>

                  {type.metrics.map((metric, metric Index) => (

                    <d ivkey="{metric Index}" class Name="f l ex i t ems-center space-x-2text-cyan-400font-semibold" />
                      <T rending Upclass Name="w-4h-4" / />
                      <s pan>{metric}</s pan>
                    </d iv>

                  ))}
                </d iv>

                <d iv class Name="s p a c e-y-2">
        </d iv>
                  <h4 c lass Name="t e x t-lgfont-semiboldtext-purple-400">Core Features:</h4>
                  <d iv class Name="f l e x flex-wrapgap-2">
        </d iv>

                    {type.features.map((feature, feature Index) => (

                      <s pankey="{feature Index}" class Name="p x-3 p y-1 bg-p u rple-500/20 text-purple-300rounded-fulltext-sm">{feature}
                      </s pan>

                    ))}

                  </d iv>
              </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Pricing Section */}

      <s ection class Name="p y-20p x-4r e lative" />
        <d iv class Name="a b s o lute inset-0 bg-gradient-to-r from-cyan-500/5via-purple-500/5to-pink-500/5" / />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Simple <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

              Choose the perfect plan for your blockchain analytics needs. All plans include our core features 
              with no hidden fees or setup costs.

            </p>
          </d iv>

          <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
            {pricing.map((plan, index) => (
              <d ivkey="{index}" class Name="{`r e l a tive" group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: bg-white/20'
              }`} />
                {plan.popular && (

                  <d iv class Name="a b s o lute -top-4 left-1/2transform-translate-x-1/2">
        </d iv>
                    <d iv class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                    </d iv>

                )}

                <d iv class Name="t e x t-centermb-8">
        </d iv>
                  <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-2">{plan.name}</h3>
                  <p c lass Name="t e xt-g r ay-300text-smmb-4">{plan.description}</p>
                  <d iv class Name="f l e x items-baselinejustify-center" />
                    <s pan class Name="t e xt-5 x l font-boldtext-white">{plan.price}</s pan>
                    <s pan class Name="t e xt-g r ay-400ml-2">{plan.period}</s pan>
                  </d iv>

                <d iv class Name="s p a c e-y-4mb-8">
        </d iv>
                  {plan.features.map((feature, feature Index) => (

                    <d ivkey="{feature Index}" class Name="f l e x items-centerspace-x-3" />
                      <C heck Circleclass Name="w-5 h-5t e xt-g r een-400flex-shrink-0" / />
                      <s pan class Name="t e xt-g r ay-300">{feature}</s pan>
                    </d iv>

                  ))}
                </d iv>
                
                <L ink 
                  to="/contact"
                  class Name="{`b l o c k" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
                  />Get Started

                </L ink>
              </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Testimonials Section */}

      <s ection class Name="p y-20 p x-4 bg-g r adient-to-br from-purple-900/50to-pink-900/50relative" />
        <d iv class Name="a b s o luteinset-0bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" / />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              What Our <s pan class Name="b g-g r a dient-to-r from-purple-400 to-pink-400bg-clip-texttext-transparent">Customers Say</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

              Join leading crypto companies and institutions that trust A I Blockchain Analytics for critical insights and decision-making.

            </p>
          </d iv>

          <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
            {testimonials.map((testimonial, index) => (

              <d ivkey="{index}" class Name="g r o u p bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <d iv class Name="f l ex i t ems-centerspace-x-4mb-6">
        </d iv>
                  <d iv class Name="w-12 h-12 b g-g r a dient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-centertext-whitefont-bold">{testimonial.avatar}
                  </d iv>
                  <d iv />
                    <h4 c lass Name="t e x t-lgfont-semiboldtext-white">{testimonial.name}</h4>
                    <p c lass Name="t e xt-g r ay-400text-sm">{testimonial.role}</p>
                    <p c lass Name="t e xt-g r ay-500text-sm">{testimonial.company}</p>
                  </d iv>

                <d iv class Name="f l ex i t ems-centerspace-x-1mb-4">
        </d iv>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <S tarkey="{i}" class Name="w-5 h-5t e xt-y e llow-400fill-current" />
                  ))}
                </d iv>
                
                <p c lass Name="t e xt-g r ay-300leading-relaxeditalic" />
                  "{testimonial.content}"

                </p>
              </d iv>

            ))}

          </d iv>
      </s ection>

      {/* C T A Section */}

      <s ection class Name="p y-20p x-4r e lative" />
        <d iv class Name="a b s o lute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-center" />
            <d iv class Name="b g-g r a dient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden">
        </d iv>
              <d iv class Name="r e l a tivez-10">
        </d iv>
                <h2 c lass Name="t e xt-4 xl sm:t e xt-5 xl md:text-6 xl font-bold text-white mb-6leading-tight" />
                  Ready to Master the <s pan class Name="b g-g r a dient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">Blockchain?</s pan>
                </h2>

                <p c lass Name="t e xt-xl sm:t e xt-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
                  Start your free trial today and gain the intelligence you need to navigate 
                  the complex world of blockchain and De Fi with confidence.
                </p>

                <d iv class Name="f l ex f l ex-col sm:flex-row gap-6justify-centermb-8">
        </d iv>
                  <L ink to="/contact" class Name="g r o u p bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                    <s pan>Start Free Trial</s pan>
                    <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
                  </L ink>
                  <L ink to="/demo" class Name="g r o u p border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                    <s pan>View Demo</s pan>
                    <B ar Chart3 class Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" / />
                  </L ink>
                </d iv>

                <d iv class Name="g r id g r id-cols-1 md:grid-cols-3gap-6text-white/80">
        </d iv>
                  <d iv class Name="f l ex i t ems-centerjustify-centerspace-x-3">
        </d iv>
                    <P honeclass Name="w-5h-5t e xt-c y an-300" / />
                    <s pan class Name="t e xt-sm">+1 302 464 0950</s pan>
                  </d iv>
                  <d iv class Name="f l ex i t ems-centerjustify-centerspace-x-3">
        </d iv>
                    <M ailclass Name="w-5h-5t e xt-p u rple-300" / />
                    <s pan class Name="t e xt-sm">kleber@ziontechgroup.com</s pan>
                  </d iv>
                  <d iv class Name="f l ex i t ems-centerjustify-centerspace-x-3">
        </d iv>
                    <M ap Pinclass Name="w-5h-5t e xt-p i nk-300" / />
                    <s pan class Name="t e xt-sm">Middletown D E 19709</s pan>
                  </d iv>
              </d iv>
          </d iv>
      </s ection>

  );
};

export default A I Blockchain Analytics Page;
