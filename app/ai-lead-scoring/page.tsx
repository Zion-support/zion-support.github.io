import React from 'react';
import { Helmet } from 'react-helmet-async'
import { Target, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Award, Brain, Shield, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
export default AILeadScoringPage;
const AILeadScoringPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-5h-5ml-2" />,
      title: 'AI Lead Scoring',
      description: 'Advanced machine learning algorithms automatically score leads based on behavior, demographics, and engagement patterns.',
      benefits: ['Behavioral analysis', 'Demographic scoring', 'Engagement tracking', 'Predictive modeling']
    } ,
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: 'Intent Detection',
      description: 'AI identifies buying intent signals and purchase readiness to prioritize high-value prospects.',
      benefits: ['Intent signals', 'Purchase readiness', 'Priority scoring', 'Conversion prediction']
    } ,
    {
      icon: <TrendingUp className="w-5h-5ml-2" />,
      title: 'Conversion Analytics',
      description: 'Comprehensive analytics with AI insights to optimize lead qualification and improve conversion rates.',
      benefits: ['Conversion tracking', 'ROI analysis', 'Funnel optimization', 'Performance metrics']
    } ,
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Automated Workflows',
      description: 'AI-powered lead nurturing workflows that automatically engage prospects based on their score and behavior.',
      benefits: ['Auto-nurturing', 'Behavioral triggers', 'Personalized content', 'Multi-channel engagement']
    } ,
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
      title: 'Sales Intelligence',
      description: 'AI provides sales teams with actionable insights and recommendations for each lead.',
      benefits: ['Sales insights', 'Action recommendations', 'Lead context', 'Next best actions']
    } ,
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'CRM Integration',
      description: 'Seamlessly integrate with popular CRMs and marketing automation platforms for unified lead management.',
      benefits: ['CRM sync', 'Data consistency', 'Workflow automation', 'Real-time updates']
    } ]

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
      popular: false;
    } ,
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
      popular: true;
    } ,
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
      popular: false;
    } ]

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'Sales Director',
      content: 'AI Lead Scoring increased our conversion rate by 180%. We now focus on the right prospects at the right time.',
      rating: 5,
      avatar: 'SM'
    } ,
    {
      name: 'James Wilson',
      company: 'Marketing Manager',
      content: 'The intent detection feature helped us identify hot leads 3 x faster. Our sales team loves the insights.',
      rating: 5,
      avatar: 'JW'
    } ,
    {
      name: 'Lisa Chen',
      company: 'VP of Sales',
      content: 'ROI increased by 250% in just 3 months. The AI recommendations are incredibly accurate.',
      rating: 5,
      avatar: 'LC'
    } ]

  const stats = [
    { number: '180%', label: 'Conversion Increase', icon: <TrendingUp className="w-5h-5ml-2" /&gt; } ,</TrendingUp / />
    { number: '250%', label: 'ROI Improvement', icon: <DollarSign className="w-5h-5ml-2" /&gt; } ,</DollarSign / />
    { number: '3 x', label: 'Faster Lead Identification', icon: <Target className="w-5h-5ml-2" /&gt; } ,</Target / />
    { number: '95%', label: 'Scoring Accuracy', icon: <Award className="w-5h-5ml-2" /&gt; }</Award / />
  ]

  return (

    <></>
      <Helmet / />
        <title />AI Lead Scoring - Smart Sales Intelligence | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered lead scoring with intent detection, conversion analytics, and automated workflows. Increase conversion rates by 180% and ROI by 250%." / />
        <meta name="keywords" content="AI lead scoring, sales intelligence, lead qualification, conversion optimization, sales automation, CRM integration" / />
        <meta name="robots" content="index, follow" / />
        <link rel="canonical" href="https://ziontechgroup.com/ai-lead-scoring"  / />
      </Helmet>
      {/* Hero Section */}  <section className="w-5h-5ml-2" / />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
            <Target className="w-5h-5ml-2" / />
            <span />AI-Powered Sales Intelligence</span>
          </div>
          <h1 className="w-5h-5ml-2" / />
            AI Lead;
            <br / />
            <span className="w-5h-5ml-2" />Scoring Pro;
            </span>
          </h1>
          <p className="w-5h-5ml-2">Transform your sales process with AI-powered lead scoring, 
            intent detection, and conversion analytics that increase conversion rates by 180%.
          </p>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
            <Link to="/contact" className="groupbg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40transformhover:scale-105" / />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" / />
            </Link>
            <Link to="#demo" className="groupborder-2 border-teal-400 text-teal-400 px-10 py-4 rounded-xl font-semibold hover:bg-teal-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" / />
              <span />Watch Demo</span>
              <ArrowRight className="w-5h-5ml-2" / />
            </Link>
          </div>
      </section>
      {/* Stats Section */}  <section className="w-5h-5ml-2" / />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
            {stats.map((stat, index) => (
              <div key={index} className="text-centerbg-white/5 backdrop-blur-sm rounded-2 xl p-6 borderborder-white/10" / />
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />{stat.icon}  </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />{stat.number}  </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />{stat.label}  </div>
            ))}
          </div>
      </section>
      {/* Features Section */}  <section className="w-5h-5ml-2" / />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
            <h2 className="w-5h-5ml-2" / />
              Advanced <span className="w-5h-5ml-2" />Features</span>
            </h2>
            <p className="w-5h-5ml-2">Our AI-powered lead scoring platform uses machine learning to identify, 
              score, and prioritize leads that are most likely to convert.
            </p>
          </div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
            {features.map((feature, index) => (
              <div key={index} className="groupbg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300hover:scale-105" / />
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />{feature.icon}  </div>
                <h3 className="w-5h-5ml-2" />{feature.title}  </h3>
                <p className="w-5h-5ml-2">{feature.description}  </p>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2text-gray-400text-sm" / />
                      <CheckCircle className="w-5h-5ml-2" / />
                      <span />{benefit}</span>
                    </div>
                  ))}
                </div>
            ))}
          </div>
      </section>
      {/* Pricing Section */}  <section className="w-5h-5ml-2" / />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
            <h2 className="w-5h-5ml-2" / />
              Flexible <span className="w-5h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5h-5ml-2">Choose the perfect plan for your lead scoring needs. All plans include our core AI features;
              with scalable options for businesses of all sizes.
            </p>
          </div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
            {pricingPlans.map((plan, index) => (
              <div key={index} className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular;
                  ? 'border-teal-400/50 shadow-2 xl shadow-teal-500/20' 
                  : 'border-white/20 hover: border-white/40'
              } `} / />
                {plan.popular && (
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />Most Popular;
                    </div>
                )}  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
                  <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                  <p className="w-5h-5ml-2">{plan.description}</p>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}</span>
                  </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-centerspace-x-3" / />
                      <CheckCircle className="w-5h-5ml-2" / />
                      <span className="w-5h-5ml-2" />{feature}</span>
                    </div>
                  ))}
                </div>
                <Link;</Link / />
                  to="/contact" 
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-600 hover:to-cyan-700 shadow-lg shadow-teal-500/25'
                      : 'border-2 border-teal-400 text-teal-400 hover: bg-teal-400 hover:text-gray-900'
                  } `}
                  />Get Started;
                </Link>
              </div>
            ))}
          </div>
      </section>
      {/* Testimonials Section */}  <section className="w-5h-5ml-2" / />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
            <h2 className="w-5h-5ml-2" / />
              Trusted by <span className="w-5h-5ml-2" />Sales Teams</span>
            </h2>
            <p className="w-5h-5ml-2">See how AI Lead Scoring is transforming sales processes for businesses worldwide.
            </p>
          </div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10backdrop-blur-lg rounded-2 xl p-8 borderborder-white/20" / />
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />{testimonial.avatar}  </div>
                  <div / />
                    <h4 className="w-5h-5ml-2" />{testimonial.name}</h4>
                    <p className="w-5h-5ml-2">{testimonial.company}</p>
                  </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5h-5tex t-yellow-400fill-current"  / />
                  ))}
                </div>
                <p className="w-5h-5ml-2">"{testimonial.content} "</p>
              </div>
            ))}
          </div>
      </section>
      {/* CTA Section */}  <section className="w-5h-5ml-2" / />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
          <h2 className="w-5h-5ml-2" / />
            Ready to Transform Your;
            <br / />
            <span className="w-5h-5ml-2" />Sales Process?
            </span>
          </h2>
          <p className="w-5h-5ml-2">Join thousands of sales teams already increasing conversion rates and ROI with AI Lead Scoring. 
            Start your free trial today - no credit card required.
          </p>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" / />
            <Link to="/contact" className="groupbg-white text-teal-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" / />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" / />
            </Link>
            <Link to="/pricing" className="groupborder-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" / />
              <span />View All Plans</span>
              <ArrowRight className="w-5h-5ml-2" / />
            </Link>
          </div>
      </section>
    </>
  )
}

