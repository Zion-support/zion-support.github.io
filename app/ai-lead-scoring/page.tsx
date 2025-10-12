import { Helmet } from 'react-helmet-async'
import { Target, Trending Up, Bar Chart3, Zap, Check Circle, Arrow Right, Star, Award, Brain, Shield, Dollar Sign } from 'lucide-react';
import { Link } from 'react-router-dom'
import React from 'react';
import { Arrow Right, Bot, Rotate Ccw, Rotate Cw, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

const A I Lead Scoring Page: React.F C = () => {
  const features = [
    {
      icon: <B rainclass Name="w-8h-8t e xt-c y an-400" />,
      title: 'A I Lead Scoring',
      description: 'Advanced machine learning algorithms automatically score leads based on behavior, demographics, and engagement patterns.',
      benefits: ['Behavioral analysis', 'Demographic scoring', 'Engagement tracking', 'Predictive modeling']
    },
    {
      icon: <T argetclass Name="w-8h-8t e xt-e m erald-400" />,
      title: 'Intent Detection',
      description: 'A I identifies buying intent signals and purchase readiness to prioritize high-value prospects.',
      benefits: ['Intent signals', 'Purchase readiness', 'Priority scoring', 'Conversion prediction']
    },
    {
      icon: <T rending Upclass Name="w-8h-8t e xt-p u rple-400" />,
      title: 'Conversion Analytics',
      description: 'Comprehensive analytics with A I insights to optimize lead qualification and improve conversion rates.',
      benefits: ['Conversion tracking', 'R O I analysis', 'Funnel optimization', 'Performance metrics']
    },
    {
      icon: <Z apclass Name="w-8h-8t e xt-r e d-400" />,
      title: 'Automated Workflows',
      description: 'A I-powered lead nurturing workflows that automatically engage prospects based on their score and behavior.',
      benefits: ['Auto-nurturing', 'Behavioral triggers', 'Personalized content', 'Multi-channel engagement']
    },
    {
      icon: <B ar Chart3 class Name="w-8h-8t e xt-o r ange-400" />,
      title: 'Sales Intelligence',
      description: 'A I provides sales teams with actionable insights and recommendations for each lead.',
      benefits: ['Sales insights', 'Action recommendations', 'Lead context', 'Next best actions']
    },
    {
      icon: <S hieldclass Name="w-8h-8t e xt-p i nk-400" />,
      title: 'C R M Integration',
      description: 'Seamlessly integrate with popular C R Ms and marketing automation platforms for unified lead management.',
      benefits: ['C R M sync', 'Data consistency', 'Workflow automation', 'Real-time updates']
    }
  ]

  const pricing Plans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 leads/month',
        'Basic A I scoring',
        'Email integration',
        'Standard reports',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and sales teams',
      features: [
        'Up to 10,000 leads/month',
        'Advanced A I features',
        'C R M integration',
        'Custom workflows',
        'Priority support',
        'A P I access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations with high volume needs',
      features: [
        'Unlimited leads',
        'Full A I suite',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'White-label options'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'Sales Director',
      content: 'A I Lead Scoring increased our conversion rate by 180%. We now focus on the right prospects at the right time.',
      rating: 5,
      avatar: 'S M'
    },
    {
      name: 'James Wilson',
      company: 'Marketing Manager',
      content: 'The intent detection feature helped us identify hot leads 3 x faster. Our sales team loves the insights.',
      rating: 5,
      avatar: 'J W'
    },
    {
      name: 'Lisa Chen',
      company: 'V P of Sales',
      content: 'R O I increased by 250% in just 3 months. The A I recommendations are incredibly accurate.',
      rating: 5,
      avatar: 'L C'
    }
  ]

  const stats = [

    { number: '180%', label: 'Conversion Increase', icon: <T rending Upclass Name="w-6h-6t e xt-c y an-400" / /> },
    { number: '250%', label: 'R O I Improvement', icon: <D ollar Signclass Name="w-6h-6t e xt-e m erald-400" / /> },
    { number: '3 x', label: 'Faster Lead Identification', icon: <T argetclass Name="w-6h-6t e xt-p u rple-400" / /> },
    { number: '95%', label: 'Scoring Accuracy', icon: <A wardclass Name="w-6h-6t e xt-o r ange-400" / /> }
  ]

  return (

      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Lead Scoring - Smart Sales Intelligence | Zion Tech Group</t itle>
        <m eta name="description" content="Revolutionary A I-powered lead scoring with intent detection, conversion analytics, and automated workflows. Increase conversion rates by 180% and R O I by 250%." / / />
        <m eta name="keywords" content="A I lead scoring, sales intelligence, lead qualification, conversion optimization, sales automation, C R M integration" / / />
        <m eta name="robots" content="index, follow" / / />
        <l inkrel="canonical" href="https://ziontechgroup.com/ai-lead-scoring" />
      </H elmet>

      {/* Hero Section */}

      <s ection class Name="r e l a tive py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900via-teal-900to-slate-900" />
        <d iv class Name="a b s o luteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(20,184,166,0.3)_0%,transparent_50%)]" / />
        <d iv class Name="a b s o luteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" / />
        <d iv class Name="r e l a tive max-w-7 xlmx-autotext-center">
        </d iv>
          <d iv class Name="i n l i ne-flex items-center space-x-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-teal-400/30">
        </d iv>
            <T argetclass Name="w-4h-4" / />
            <s pan>A I-Powered Sales Intelligence</s pan>
          </d iv>

          <h1 c lass Name="t e x t-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
            A I Lead

            <b r / />
            <s pan class Name="b g-g r a dient-to-r from-teal-400 via-cyan-400 to-blue-400bg-clip-texttext-transparent">Scoring Pro
            </s pan>
          </h1>

          <p c lass Name="t e x t-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
            Transform your sales process with A I-powered lead scoring, 
            intent detection, and conversion analytics that increase conversion rates by 180%.
          </p>

          <d iv class Name="f l ex f l ex-col sm:flex-row gap-6justify-centermb-16">
        </d iv>
            <L ink to="/contact" class Name="g r o u p bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40transformhover:scale-105" />
              <s pan>Start Free Trial</s pan>
              <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
            </L ink>
            <L ink to="#demo" class Name="g r o u p border-2 border-teal-400 text-teal-400 px-10 py-4 rounded-xl font-semibold hover:bg-teal-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <s pan>Watch Demo</s pan>
              <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
            </L ink>
          </d iv>
      </s ection>

      {/* Stats Section */}

      <s ection class Name="p y-20p x-4bg-g r ay-900" />
        <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
          <d iv class Name="g r id g r id-cols-2md:grid-cols-4gap-8">
        </d iv>

            {stats.map((stat, index) => (

              <d ivkey="{index}" class Name="t e x t-center bg-white/5 backdrop-blur-sm rounded-2 xl p-6borderborder-white/10" />
                <d iv class Name="f l e x justify-centermb-4">{stat.icon}
                </d iv>
                <d iv class Name="t e xt-3 xl md:t e xt-4 xl font-boldtext-whitemb-2">{stat.number}
                </d iv>
                <d iv class Name="t e xt-g r ay-300text-sm">{stat.label}
                </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Features Section */}

      <s ection class Name="p y-20 p x-4 bg-g r adient-to-brfrom-slate-800/50to-teal-900/50" />
        <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Advanced <s pan class Name="b g-g r a dient-to-r from-teal-400 to-cyan-400bg-clip-texttext-transparent">Features</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

              Our A I-powered lead scoring platform uses machine learning to identify, 
              score, and prioritize leads that are most likely to convert.

            </p>
          </d iv>

          <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
            {features.map((feature, index) => (

              <d ivkey="{index}" class Name="g r o u p bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <d iv class Name="f l ex i t ems-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                </d iv>
                <h3 c lass Name="t e xt-2 xl f o nt-bold text-white mb-4group-hover:text-teal-400transition-colors">{feature.title}
                </h3>
                <p c lass Name="t e xt-g r ay-300mb-6leading-relaxed" />

                  {feature.description}

                </p>
                <d iv class Name="s p a c e-y-2">
        </d iv>

                  {feature.benefits.map((benefit, benefit Index) => (

                    <d ivkey="{benefit Index}" class Name="f l ex i t ems-center space-x-2text-gray-400text-sm" />
                      <C heck Circleclass Name="w-4h-4t e xt-g r een-400" / />
                      <s pan>{benefit}</s pan>
                    </d iv>

                  ))}

                </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Pricing Section */}

      <s ection class Name="p y-20p x-4bg-g r ay-900" />
        <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Flexible <s pan class Name="b g-g r a dient-to-r from-teal-400 to-cyan-400bg-clip-texttext-transparent">Pricing</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

              Choose the perfect plan for your lead scoring needs. All plans include our core A I features 
              with scalable options for businesses of all sizes.

            </p>
          </d iv>

          <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
            {pricing Plans.map((plan, index) => (
              <d ivkey="{index}" class Name="{`r e l a tive" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-teal-400/50 shadow-2 xl shadow-teal-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (

                  <d iv class Name="a b s o lute -top-4 left-1/2transform-translate-x-1/2">
        </d iv>
                    <d iv class Name="b g-g r a dient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                    </d iv>

                )}

                <d iv class Name="t e x t-centermb-8">
        </d iv>
                  <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-2">{plan.name}</h3>
                  <p c lass Name="t e xt-g r ay-300mb-4">{plan.description}</p>
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
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-600 hover:to-cyan-700 shadow-lg shadow-teal-500/25'
                      : 'border-2 border-teal-400 text-teal-400 hover: bg-teal-400 hover:text-gray-900'
                  }`}
                  />Get Started

                </L ink>
              </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Testimonials Section */}

      <s ection class Name="p y-20 p x-4 bg-g r adient-to-brfrom-teal-900/50to-cyan-900/50" />
        <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Trusted by <s pan class Name="b g-g r a dient-to-r from-teal-400 to-cyan-400bg-clip-texttext-transparent">Sales Teams</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

              See how A I Lead Scoring is transforming sales processes for businesses worldwide.

            </p>
          </d iv>

          <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
            {testimonials.map((testimonial, index) => (

              <d ivkey="{index}" class Name="b g-w h i te/10 backdrop-blur-lg rounded-2 xl p-8borderborder-white/20" />
                <d iv class Name="f l e x items-centermb-4">
        </d iv>
                  <d iv class Name="w-12 h-12 b g-g r a dient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4">{testimonial.avatar}
                  </d iv>
                  <d iv />
                    <h4 c lass Name="t e xt-w h itefont-semibold">{testimonial.name}</h4>
                    <p c lass Name="t e xt-g r ay-400text-sm">{testimonial.company}</p>
                  </d iv>
                <d iv class Name="f l e x items-centermb-4">
        </d iv>

                  {[...Array(testimonial.rating)].map((_, i) => (
                    <S tarkey="{i}" class Name="w-5 h-5t e xt-y e llow-400fill-current" />
                  ))}

                </d iv>
                <p c lass Name="t e xt-g r ay-300italic">"{testimonial.content}"</p>
              </d iv>

            ))}

          </d iv>
      </s ection>

      {/* C T A Section */}

      <s ection class Name="p y-20 p x-4 bg-g r adient-to-r from-teal-600via-cyan-600to-blue-600" />
        <d iv class Name="m a x-w-7 x l mx-autotext-center">
        </d iv>
          <h2 c lass Name="t e xt-4 xl sm:t e xt-5 xl md:text-6 xl font-boldtext-white mb-6" />

            Ready to Transform Your

            <b r / />
            <s pan class Name="b g-g r a dient-to-r from-teal-300 to-cyan-300bg-clip-texttext-transparent">Sales Process?
            </s pan>
          </h2>
          <p c lass Name="t e xt-xl sm:t e xt-2 xl text-white/90 mb-8 max-w-4xlmx-auto" />

            Join thousands of sales teams already increasing conversion rates and R O I with A I Lead Scoring. 
            Start your free trial today - no credit card required.

          </p>
          <d iv class Name="f l ex f l ex-col sm:flex-rowgap-6justify-center">
        </d iv>
            <L ink to="/contact" class Name="g r o u p bg-white text-teal-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
              <s pan>Start Free Trial</s pan>
              <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
            </L ink>
            <L ink to="/pricing" class Name="g r o u p border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <s pan>View All Plans</s pan>
              <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
            </L ink>
          </d iv>
      </s ection>

  )
}

export default A I Lead Scoring Page;
