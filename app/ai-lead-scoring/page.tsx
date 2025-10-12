import { Helmet } from 'react-helmet-async'
import { Target, Trending Up, Bar Chart3, Zap, CheckCircle, ArrowRight, Star, Award, Brain, Shield, Dollar Sign } from 'lucide-react';
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight, Bot, Rotate Ccw, Rotate Cw, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

const A ILead Scoring Page: React.F C = () => {
  const features = [
    {
      icon: <B rain class Name="w-8h-8t ext-cyan-400" />,
      title: 'A I Lead Scoring',
      description: 'Advanced machine learning algorithms automatically score leads based on behavior, demographics, and engagement patterns.',
      benefits: ['Behavioral analysis', 'Demographic scoring', 'Engagement tracking', 'Predictive modeling']
    },
    {
      icon: <T arget class Name="w-8h-8t ext-emerald-400" />,
      title: 'Intent Detection',
      description: 'A I identifies buying intent signals and purchase readiness to prioritize high-value prospects.',
      benefits: ['Intent signals', 'Purchase readiness', 'Priority scoring', 'Conversion prediction']
    },
    {
      icon: <T rending Up class Name="w-8h-8t ext-purple-400" />,
      title: 'Conversion Analytics',
      description: 'Comprehensive analytics with A I insights to optimize lead qualification and improve conversion rates.',
      benefits: ['Conversion tracking', 'R OI analysis', 'Funnel optimization', 'Performance metrics']
    },
    {
      icon: <Z ap class Name="w-8h-8t ext-red-400" />,
      title: 'Automated Workflows',
      description: 'A I-powered lead nurturing workflows that automatically engage prospects based on their score and behavior.',
      benefits: ['Auto-nurturing', 'Behavioral triggers', 'Personalized content', 'Multi-channel engagement']
    },
    {
      icon: <B ar Chart3 class Name="w-8h-8t ext-orange-400" />,
      title: 'Sales Intelligence',
      description: 'A I provides sales teams with actionable insights and recommendations for each lead.',
      benefits: ['Sales insights', 'Action recommendations', 'Lead context', 'Next best actions']
    },
    {
      icon: <S hield class Name="w-8h-8t ext-pink-400" />,
      title: 'C RM Integration',
      description: 'Seamlessly integrate with popular C RMs and marketing automation platforms for unified lead management.',
      benefits: ['C RM sync', 'Data consistency', 'Workflow automation', 'Real-time updates']
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
        'C RM integration',
        'Custom workflows',
        'Priority support',
        'A PI access'
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
      content: 'R OI increased by 250% in just 3 months. The A I recommendations are incredibly accurate.',
      rating: 5,
      avatar: 'L C'
    }
  ]

  const stats = [

    { number: '180%', label: 'Conversion Increase', icon: <T rending Up class Name="w-6h-6t ext-cyan-400" / /> },
    { number: '250%', label: 'R OI Improvement', icon: <D ollar Sign class Name="w-6h-6t ext-emerald-400" / /> },
    { number: '3 x', label: 'Faster Lead Identification', icon: <T arget class Name="w-6h-6t ext-purple-400" / /> },
    { number: '95%', label: 'Scoring Accuracy', icon: <A ward class Name="w-6h-6t ext-orange-400" / /> }
  ]

  return (

      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Lead Scoring - Smart Sales Intelligence | Zion Tech Group</t itle>
        <m eta name="description" content="Revolutionary A I-powered lead scoring with intent detection, conversion analytics, and automated workflows. Increase conversion rates by 180% and R OI by 250%." / / />
        <m eta name="keywords" content="A I lead scoring, sales intelligence, lead qualification, conversion optimization, sales automation, C RM integration" / / />
        <m eta name="robots" content="index, follow" / / />
        <l ink rel="canonical" href="https://ziontechgroup.com/ai-lead-scoring" />
      </H elmet>

      {/* Hero Section */}

      <s ection class Name="r elative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900via-teal-900to-slate-900" />
        <d iv class Name="a bsoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(20,184,166,0.3)_0%,transparent_50%)]" / />
        <d iv class Name="a bsoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" / />
        <d iv class Name="r elative max-w-7 xlmx-autotext-center">
        </d iv>
          <d iv class Name="i nline-flex items-center space-x-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-teal-400/30">
        </d iv>
            <T arget class Name="w-4h-4" / />
            <s pan>A I-Powered Sales Intelligence</s pan>
          </d iv>

          <h1 c lass Name="t ext-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
            A I Lead

            <b r / />
            <s pan class Name="b g-gradient-to-r from-teal-400 via-cyan-400 to-blue-400bg-clip-texttext-transparent">Scoring Pro
            </s pan>
          </h1>

          <p c lass Name="t ext-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
            Transform your sales process with A I-powered lead scoring, 
            intent detection, and conversion analytics that increase conversion rates by 180%.
          </p>

          <d iv class Name="f lex flex-col sm:flex-row gap-6justify-centermb-16">
        </d iv>
            <L ink to="/contact" class Name="g roup bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40transformhover:scale-105" />
              <s pan>Start Free Trial</s pan>
              <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
            </L ink>
            <L ink to="#demo" class Name="g roup border-2 border-teal-400 text-teal-400 px-10 py-4 rounded-xl font-semibold hover:bg-teal-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <s pan>Watch Demo</s pan>
              <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
            </L ink>
          </d iv>
      </s ection>

      {/* Stats Section */}

      <s ection class Name="p y-20px-4bg-gray-900" />
        <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
          <d iv class Name="g rid grid-cols-2md:grid-cols-4gap-8">
        </d iv>

            {stats.map((stat, index) => (

              <d iv key="{index}" class Name="t ext-center bg-white/5 backdrop-blur-sm rounded-2 xl p-6borderborder-white/10" />
                <d iv class Name="f lexjustify-centermb-4">{stat.icon}
                </d iv>
                <d iv class Name="t ext-3 xl md:text-4 xl font-boldtext-whitemb-2">{stat.number}
                </d iv>
                <d iv class Name="t ext-gray-300text-sm">{stat.label}
                </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Features Section */}

      <s ection class Name="p y-20 px-4 bg-gradient-to-brfrom-slate-800/50to-teal-900/50" />
        <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Advanced <s pan class Name="b g-gradient-to-r from-teal-400 to-cyan-400bg-clip-texttext-transparent">Features</s pan>
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

              Our A I-powered lead scoring platform uses machine learning to identify, 
              score, and prioritize leads that are most likely to convert.

            </p>
          </d iv>

          <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
            {features.map((feature, index) => (

              <d iv key="{index}" class Name="g roup bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <d iv class Name="f lex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                </d iv>
                <h3 c lass Name="t ext-2 xl font-bold text-white mb-4group-hover:text-teal-400transition-colors">{feature.title}
                </h3>
                <p c lass Name="t ext-gray-300mb-6leading-relaxed" />

                  {feature.description}

                </p>
                <d iv class Name="s pace-y-2">
        </d iv>

                  {feature.benefits.map((benefit, benefit Index) => (

                    <d iv key="{benefit Index}" class Name="f lex items-center space-x-2text-gray-400text-sm" />
                      <C heck Circle class Name="w-4h-4t ext-green-400" / />
                      <s pan>{benefit}</s pan>
                    </d iv>

                  ))}

                </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Pricing Section */}

      <s ection class Name="p y-20px-4bg-gray-900" />
        <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Flexible <s pan class Name="b g-gradient-to-r from-teal-400 to-cyan-400bg-clip-texttext-transparent">Pricing</s pan>
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

              Choose the perfect plan for your lead scoring needs. All plans include our core A I features 
              with scalable options for businesses of all sizes.

            </p>
          </d iv>

          <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
            {pricing Plans.map((plan, index) => (
              <d iv key="{index}" class Name="{`r elative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-teal-400/50 shadow-2 xl shadow-teal-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (

                  <d iv class Name="a bsolute -top-4 left-1/2transform-translate-x-1/2">
        </d iv>
                    <d iv class Name="b g-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                    </d iv>

                )}

                <d iv class Name="t ext-centermb-8">
        </d iv>
                  <h3 c lass Name="t ext-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p c lass Name="t ext-gray-300mb-4">{plan.description}</p>
                  <d iv class Name="f lexitems-baselinejustify-center" />
                    <s pan class Name="t ext-5 xlfont-boldtext-white">{plan.price}</s pan>
                    <s pan class Name="t ext-gray-400ml-2">{plan.period}</s pan>
                  </d iv>

                <d iv class Name="s pace-y-4mb-8">
        </d iv>
                  {plan.features.map((feature, feature Index) => (

                    <d iv key="{feature Index}" class Name="f lexitems-centerspace-x-3" />
                      <C heck Circle class Name="w-5 h-5t ext-green-400flex-shrink-0" / />
                      <s pan class Name="t ext-gray-300">{feature}</s pan>
                    </d iv>

                  ))}
                </d iv>
                
                <L ink 
                  to="/contact" 
                  class Name="{`b lock" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
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

      <s ection class Name="p y-20 px-4 bg-gradient-to-brfrom-teal-900/50to-cyan-900/50" />
        <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Trusted by <s pan class Name="b g-gradient-to-r from-teal-400 to-cyan-400bg-clip-texttext-transparent">Sales Teams</s pan>
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

              See how A I Lead Scoring is transforming sales processes for businesses worldwide.

            </p>
          </d iv>

          <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
            {testimonials.map((testimonial, index) => (

              <d iv key="{index}" class Name="b g-white/10 backdrop-blur-lg rounded-2 xl p-8borderborder-white/20" />
                <d iv class Name="f lexitems-centermb-4">
        </d iv>
                  <d iv class Name="w-12 h-12 b g-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4">{testimonial.avatar}
                  </d iv>
                  <d iv />
                    <h4 c lass Name="t ext-whitefont-semibold">{testimonial.name}</h4>
                    <p c lass Name="t ext-gray-400text-sm">{testimonial.company}</p>
                  </d iv>
                <d iv class Name="f lexitems-centermb-4">
        </d iv>

                  {[...Array(testimonial.rating)].map((_, i) => (
                    <S tar key="{i}" class Name="w-5 h-5t ext-yellow-400fill-current" />
                  ))}

                </d iv>
                <p c lass Name="t ext-gray-300italic">"{testimonial.content}"</p>
              </d iv>

            ))}

          </d iv>
      </s ection>

      {/* C TA Section */}

      <s ection class Name="p y-20 px-4 bg-gradient-to-r from-teal-600via-cyan-600to-blue-600" />
        <d iv class Name="m ax-w-7 xlmx-autotext-center">
        </d iv>
          <h2 c lass Name="t ext-4 xl sm:text-5 xl md:text-6 xl font-boldtext-whitemb-6" />

            Ready to Transform Your

            <b r / />
            <s pan class Name="b g-gradient-to-r from-teal-300 to-cyan-300bg-clip-texttext-transparent">Sales Process?
            </s pan>
          </h2>
          <p c lass Name="t ext-xl sm:text-2 xl text-white/90 mb-8 max-w-4xlmx-auto" />

            Join thousands of sales teams already increasing conversion rates and R OI with A I Lead Scoring. 
            Start your free trial today - no credit card required.

          </p>
          <d iv class Name="f lex flex-col sm:flex-rowgap-6justify-center">
        </d iv>
            <L ink to="/contact" class Name="g roup bg-white text-teal-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
              <s pan>Start Free Trial</s pan>
              <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
            </L ink>
            <L ink to="/pricing" class Name="g roup border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <s pan>View All Plans</s pan>
              <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
            </L ink>
          </d iv>
      </s ection>

  )
}

export default A ILead Scoring Page;
