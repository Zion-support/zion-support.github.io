import { Helmet } from 'react-helmet-async'
import { Target, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Award, Brain, Shield, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
import React  from 'react';
import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

const AILeadScoringPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Lead Scoring',
      description: 'Advanced machine learning algorithms automatically score leads based on behavior, demographics, and engagement patterns.',
      benefits: ['Behavioral analysis', 'Demographic scoring', 'Engagement tracking', 'Predictive modeling']
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-400" />,
      title: 'Intent Detection',
      description: 'AI identifies buying intent signals and purchase readiness to prioritize high-value prospects.',
      benefits: ['Intent signals', 'Purchase readiness', 'Priority scoring', 'Conversion prediction']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: 'Conversion Analytics',
      description: 'Comprehensive analytics with AI insights to optimize lead qualification and improve conversion rates.',
      benefits: ['Conversion tracking', 'ROI analysis', 'Funnel optimization', 'Performance metrics']
    },
    {
      icon: <Zap className="w-8 h-8 text-red-400" />,
      title: 'Automated Workflows',
      description: 'AI-powered lead nurturing workflows that automatically engage prospects based on their score and behavior.',
      benefits: ['Auto-nurturing', 'Behavioral triggers', 'Personalized content', 'Multi-channel engagement']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      title: 'Sales Intelligence',
      description: 'AI provides sales teams with actionable insights and recommendations for each lead.',
      benefits: ['Sales insights', 'Action recommendations', 'Lead context', 'Next best actions']
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-400" />,
      title: 'CRM Integration',
      description: 'Seamlessly integrate with popular CRMs and marketing automation platforms for unified lead management.',
      benefits: ['CRM sync', 'Data consistency', 'Workflow automation', 'Real-time updates']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 leads/month',
        'Basic AI scoring',
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
        'Advanced AI features',
        'CRM integration',
        'Custom workflows',
        'Priority support',
        'API access'
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
        'Full AI suite',
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
      content: 'AI Lead Scoring increased our conversion rate by 180%. We now focus on the right prospects at the right time.',
      rating: 5,
      avatar: 'SM'
    },
    {
      name: 'James Wilson',
      company: 'Marketing Manager',
      content: 'The intent detection feature helped us identify hot leads 3 x faster. Our sales team loves the insights.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Lisa Chen',
      company: 'VP of Sales',
      content: 'ROI increased by 250% in just 3 months. The AI recommendations are incredibly accurate.',
      rating: 5,
      avatar: 'LC'
    }
  ]

  const stats = [
    { number: '180%', label: 'Conversion Increase', icon: <TrendingUp className="w-6 h-6 text-cyan-400" /> },
    { number: '250%', label: 'ROI Improvement', icon: <DollarSign className="w-6 h-6 text-emerald-400" /> },
    { number: '3 x', label: 'Faster Lead Identification', icon: <Target className="w-6 h-6 text-purple-400" /> },
    { number: '95%', label: 'Scoring Accuracy', icon: <Award className="w-6 h-6 text-orange-400" /> }
  ]

  return (
    <>
      <Helmet />
        <title   />AI Lead Scoring - Smart Sales Intelligence | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered lead scoring with intent detection, conversion analytics, and automated workflows. Increase conversion rates by 180% and ROI by 250%." / / />
        <meta name="keywords" content="AI lead scoring, sales intelligence, lead qualification, conversion optimization, sales automation, CRM integration" / / />
        <meta name="robots" content="index, follow" / / />
        <link rel="canonical" href="https://ziontechgroup.com/ai-lead-scoring" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900" />
        <div className="absoluteinset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(20,184,166,0.3)_0%,transparent_50%)]" />
        <div className="absoluteinset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" />
        <div className="relative max-w-7 xlmx-autotext-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-400 px-6 py-3 rounded-full text-sm font-medium mb-8 borderborder-teal-400/30">
            <Target className="w-4 h-4" />
            <span   />AI-Powered Sales Intelligence</span>
          </div>
          
          <h1 className="text-4 xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8 leading-tight" />
            AI Lead
            <br / />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-texttext-transparent"  />Scoring Pro
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">Transform your sales process with AI-powered lead scoring, 
            intent detection, and conversion analytics that increase conversion rates by 180%.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-centermb-16">
            <Link to="/contact" className="group bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transformhover:scale-105" >
           
          <span    />
        </Link>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="#demo" className="group border-2 border-teal-400 text-teal-400 px-10 py-4 rounded-xl font-semibold hover:bg-teal-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2 backdrop-blur-sm" >
           
          <span    />
        </Link>Watch Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-900" />
        <div className="max-w-7 xlmx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key="{index}" className="text-center bg-white/5 backdrop-blur-sm rounded-2 xl p-6 borderborder-white/10" />
                <div className="flexjustify-centermb-4"  />{stat.icon}
                </div>
                <div className="text-3 xl md:text-4 xl font-bold text-white mb-2"  />{stat.number}
                </div>
                <div className="text-gray-300 text-sm"  />{stat.label}
                </div>
            ))}
          </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-brfrom-slate-800/50 to-teal-900/50" />
        <div className="max-w-7 xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
              Advanced <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-texttext-transparent"   />Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xlmx-auto">Our AI-powered lead scoring platform uses machine learning to identify, 
              score, and prioritize leads that are most likely to convert.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300 hover:scale-105" />
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2 xl mb-6 group-hover:scale-110 transition-transformduration-300"  />{feature.icon}
                </div>
                <h3 className="text-2 xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors"  />{feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key="{benefitIndex}" className="flex items-center space-x-2 text-gray-400 text-sm" />
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span   />{benefit}</span>
                    </div>
                  ))}
                </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-900" />
        <div className="max-w-7 xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
              Flexible <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-texttext-transparent"   />Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xlmx-auto">Choose the perfect plan for your lead scoring needs. All plans include our core AI features 
              with scalable options for businesses of all sizes.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-teal-400/50 shadow-2 xl shadow-teal-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform-translate-x-1/2">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold"  />Most Popular
                    </div>
                )}
                
                <div className="text-centermb-8">
                  <h3 className="text-2 xl font-bold text-white mb-2"   />{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
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
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-600 hover:to-cyan-700 shadow-lg shadow-teal-500/25'
                      : 'border-2 border-teal-400 text-teal-400 hover: bg-teal-400 hover:text-gray-900'
                  }`}
                  />Get Started
                </Link>
              </div>
            ))}
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-brfrom-teal-900/50 to-cyan-900/50" />
        <div className="max-w-7 xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
              Trusted by <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-texttext-transparent"   />Sales Teams</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xlmx-auto">See how AI Lead Scoring is transforming sales processes for businesses worldwide.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 borderborder-white/20" />
                <div className="flex items-centermb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4"  />{testimonial.avatar}
                  </div>
                  <div>
            <h4 className="text-whitefont-semibold"   />{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                <div className="flex items-centermb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600" />
        <div className="max-w-7 xlmx-autotext-center">
          <h2 className="text-4 xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6" />
            Ready to Transform Your
            <br / />
            <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-texttext-transparent"  />Sales Process?
            </span>
          </h2>
          <p className="text-xl sm:text-2 xl text-white/90 mb-8 max-w-4 xlmx-auto">Join thousands of sales teams already increasing conversion rates and ROI with AI Lead Scoring. 
            Start your free trial today - no credit card required.</p>
          <div className="flex flex-col sm:flex-rowgap-6 justify-center">
            <Link to="/contact" className="group bg-white text-teal-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" >
           
          <span    />
        </Link>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2 backdrop-blur-sm" >
           
          <span    />
        </Link>View All Plans</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
      </section>
    </>
  )
}

export default AILeadScoringPage;