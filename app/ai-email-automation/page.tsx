import { Helmet } from 'react-helmet-async'
import { Mail, Send, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Clock, Brain, Shield, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
import React  from 'react';
import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIEmailAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8h-8text-cyan-400" />,
      title: 'AI Email Generation',
      description: 'Generate personalized, high-converting emails using AI that understands your audience and brand voice.',
      benefits: ['Personalized content', 'A/B testing', 'Brand voice training', 'Multi-language support']
    },
    {
      icon: <Send className="w-8h-8text-emerald-400" />,
      title: 'Smart Automation',
      description: 'Create complex email workflows with AI-powered triggers, segmentation, and behavioral targeting.',
      benefits: ['Behavioral triggers', 'Smart segmentation', 'Dynamic content', 'Cross-channel sync']
    },
    {
      icon: <TrendingUp className="w-8h-8text-purple-400" />,
      title: 'Performance Analytics',
      description: 'Advanced analytics with AI insights to optimize email performance and improve ROI.',
      benefits: ['Open rate optimization', 'Click-through analysis', 'Revenue tracking', 'Predictive insights']
    },
    {
      icon: <Zap className="w-8h-8text-red-400" />,
      title: 'Automated Sequences',
      description: 'AI-powered email sequences that adapt based on recipient behavior and engagement patterns.',
      benefits: ['Adaptive sequences', 'Behavioral triggers', 'Personalization', 'Optimal timing']
    },
    {
      icon: <BarChart3 className="w-8h-8text-orange-400" />,
      title: 'Lead Scoring',
      description: 'AI automatically scores leads based on email engagement and behavior to prioritize follow-ups.',
      benefits: ['Lead scoring', 'Engagement tracking', 'Priority alerts', 'CRM integration']
    },
    {
      icon: <Shield className="w-8h-8text-pink-400" />,
      title: 'Deliverability Optimization',
      description: 'AI ensures maximum deliverability with reputation monitoring and content optimization.',
      benefits: ['Reputation monitoring', 'Content optimization', 'Spam prevention', 'Compliance checks']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$59',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5,000 contacts',
        '10,000 emails/month',
        'Basic AI features',
        'Email templates',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25,000 contacts',
        '50,000 emails/month',
        'Advanced AI features',
        'A/B testing',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with high volume needs',
      features: [
        'Unlimited contacts',
        'Unlimited emails',
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'White-label options'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Lee',
      company: 'E-commerce Store',
      content: 'AI Email Automation increased our email revenue by 300%. The AI-generated content is incredibly effective.',
      rating: 5,
      avatar: 'JL'
    },
    {
      name: 'Mark Thompson',
      company: 'SaaS Company',
      content: 'The lead scoring feature helped us identify high-value prospects and increased our conversion rate by 150%.',
      rating: 5,
      avatar: 'MT'
    },
    {
      name: 'Lisa Chen',
      company: 'Marketing Agency',
      content: 'Saves us 20+ hours per week on email campaigns. The automation features are incredibly powerful.',
      rating: 5,
      avatar: 'LC'
    }
  ]

  const stats = [
    { number: '300%', label: 'Revenue Increase', icon: <DollarSign className="w-6h-6text-cyan-400" /> },
    { number: '150%', label: 'Conversion Boost', icon: <TrendingUp className="w-6h-6text-emerald-400" /> },
    { number: '20 hrs', label: 'Time Saved/Week', icon: <Clock className="w-6h-6text-purple-400" /> },
    { number: '95%', label: 'Deliverability Rate', icon: <Shield className="w-6h-6text-orange-400" /> }
  ]

  return (
    <>
      <Helmet />
        <title   />AI Email Automation - Smart Email Marketing | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered email automation with content generation, smart segmentation, and performance analytics. Increase revenue by 300% and save 20+ hours per week." / / />
        <meta name="keywords" content="AI email automation, email marketing, email generation, lead scoring, email analytics, marketing automation, AI content creation" / / />
        <meta name="robots" content="index, follow" / / />
        <link rel="canonical" href="https://ziontechgroup.com/ai-email-automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900via-blue-900to-slate-900" />
        <div className="absoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)]" />
        <div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" />
        <div className="relative max-w-7xlmx-autotext-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-blue-400/30">
            <Mail className="w-4h-4" />
            <span   />AI-Powered Email Marketing</span>
          </div>
          
          <h1 className="text-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
            AI Email
            <br / />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Automation Pro
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Transform your email marketing with AI-powered automation, 
            content generation, and performance optimization that increases revenue by 300%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6justify-centermb-16">
            <Link to="/contact" className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40transformhover:scale-105" >
           
          <span    />
        </Link>Start Free Trial</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to="#demo" className="group border-2 border-blue-400 text-blue-400 px-10 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" >
           
          <span    />
        </Link>Watch Demo</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
          </div>
      </section>

      {/* Stats Section */}
      <section className="py-20px-4bg-gray-900" />
        <div className="max-w-7xlmx-auto">
          <div className="grid grid-cols-2md:grid-cols-4gap-8">
            {stats.map((stat, index) => (
              <div key="{index}" className="text-center bg-white/5 backdrop-blur-sm rounded-2 xl p-6borderborder-white/10" />
                <div className="flexjustify-centermb-4"  />{stat.icon}
                </div>
                <div className="text-3 xl md:text-4xl font-bold text-white mb-2"  />{stat.number}
                </div>
                <div className="text-gray-300text-sm"  />{stat.label}
                </div>
            ))}
          </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-brfrom-slate-800/50to-blue-900/50" />
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
              Advanced <span className="bg-gradient-to-r from-blue-400 to-cyan-400bg-clip-texttext-transparent"   />Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              Our AI-powered email automation platform uses machine learning to create, 
              send, and optimize email campaigns that drive real business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
            {features.map((feature, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300"  />{feature.icon}
                </div>
                <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-blue-400transition-colors"  />{feature.title}
                </h3>
                <p className="text-gray-300 mb-6leading-relaxed">
              {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key="{benefitIndex}" className="flex items-center space-x-2text-gray-400text-sm" />
                      <CheckCircle className="w-4h-4text-green-400" />
                      <span   />{benefit}</span>
                    </div>
                  ))}
                </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20px-4bg-gray-900" />
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
              Transparent <span className="bg-gradient-to-r from-blue-400 to-cyan-400bg-clip-texttext-transparent"   />Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              Choose the perfect plan for your email marketing needs. All plans include our core AI features 
              with scalable options for businesses of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1md:grid-cols-3gap-8">
            {pricingPlans.map((plan, index) => (
              <div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-400/50 shadow-2 xl shadow-blue-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2transform-translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold"  />Most Popular
                    </div>
                )}
                
                <div className="text-centermb-8">
                  <h3 className="text-2 xl font-bold text-white mb-2"   />{plan.name}</h3>
                  <p className="text-gray-300 mb-4">
              {plan.description}</p>
                  <div className="flex items-baselinejustify-center">
                    <span className="text-5 xlfont-bold text-white"   />{plan.price}</span>
                    <span className="text-gray-400ml-2"   />{plan.period}</span>
                  </div>
                
                <div className="space-y-4mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key="{featureIndex}" className="flex items-centerspace-x-3" />
                      <CheckCircle className="w-5 h-5text-green-400flex-shrink-0" />
                      <span className="text-gray-300"   />{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact" 
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 shadow-lg shadow-blue-500/25'
                      : 'border-2 border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-gray-900'
                  }`}
                  />Get Started
                </Link>
              </div>
            ))}
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-brfrom-blue-900/50to-purple-900/50" />
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
              Trusted by <span className="bg-gradient-to-r from-blue-400 to-purple-400bg-clip-texttext-transparent"   />Marketers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              See how AI Email Automation is transforming email marketing for businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1md:grid-cols-3gap-8">
            {testimonials.map((testimonial, index) => (
              <div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8borderborder-white/20" />
                <div className="flex items-centermb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4"  />{testimonial.avatar}
                  </div>
                  <div>
            <h4 className="text-whitefont-semibold"   />{testimonial.name}</h4>
                    <p className="text-gray-400text-sm">
              {testimonial.company}</p>
                  </div>
                <div className="flex items-centermb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" className="w-5 h-5text-yellow-400fill-current" />
                  ))}
                </div>
                <p className="text-gray-300italic">
              "{testimonial.content}"</p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600via-cyan-600to-purple-600" />
        <div className="max-w-7xlmx-autotext-center">
          <h2 className="text-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6" />
            Ready to Revolutionize Your
            <br / />
            <span className="bg-gradient-to-r from-blue-300 to-cyan-300bg-clip-texttext-transparent"  />Email Marketing?
            </span>
          </h2>
          <p className="text-xl sm:text-2 xl text-white/90 mb-8 max-w-4xlmx-auto">
              Join thousands of marketers already increasing revenue and saving time with AI Email Automation. 
            Start your free trial today - no credit card required.
          </p>
          <div className="flex flex-col sm:flex-rowgap-6justify-center">
            <Link to="/contact" className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" >
           
          <span    />
        </Link>Start Free Trial</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" >
           
          <span    />
        </Link>View All Plans</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
          </div>
      </section>
    </>
  )
}

export default AIEmailAutomationPage;