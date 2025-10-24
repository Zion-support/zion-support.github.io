import React from 'react'
import Link from 'next/link'
import { Brain, Send, TrendingUp, Zap, BarChart3, Shield, DollarSign, Clock, Mail, ArrowRight, CheckCircle, Star } from 'lucide-react'
const AIEmailAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Email Generation',
      description: 'Generate personalized, high-converting emails using AI that understands your audience and brand voice.',
      benefits: ['Personalized content', 'A/B testing', 'Brand voice training', 'Multi-language support']
    },
    {
      icon: <Send className="w-8 h-8 text-emerald-400" />,
      title: 'Smart Automation',
      description: 'Create complex email workflows with AI-powered triggers, segmentation, and behavioral targeting.',
      benefits: ['Behavioral triggers', 'Smart segmentation', 'Dynamic content', 'Cross-channel sync']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: 'Performance Analytics',
      description: 'Advanced analytics with AI insights to optimize email performance and improve ROI.',
      benefits: ['Open rate optimization', 'Click-through analysis', 'Revenue tracking', 'Predictive insights']
    },
    {
      icon: <Zap className="w-8 h-8 text-red-400" />,
      title: 'Automated Sequences',
      description: 'AI-powered email sequences that adapt based on recipient behavior and engagement patterns.',
      benefits: ['Adaptive sequences', 'Behavioral triggers', 'Personalization', 'Optimal timing']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      title: 'Lead Scoring',
      description: 'AI automatically scores leads based on email engagement and behavior to prioritize follow-ups.',
      benefits: ['Lead scoring', 'Engagement tracking', 'Priority alerts', 'CRM integration']
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-400" />,
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
      description: 'Perfect for small businesses getting started with AI email automation',
      features: [
        'Up to 10,000 emails/month',
        'AI email generation',
        'Basic automation',
        'Email analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 50,000 emails/month',
        'Advanced AI features',
        'Complex automation workflows',
        'Advanced analytics',
        'A/B testing',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'Full-featured solution for large organizations',
      features: [
        'Unlimited emails',
        'All AI features',
        'Custom automation',
        'Advanced reporting',
        'Dedicated account manager',
        '24/7 phone support'
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
    { number: '300%', label: 'Revenue Increase', icon: <DollarSign className="w-6 h-6 text-cyan-400" /> },
    { number: '150%', label: 'Conversion Boost', icon: <TrendingUp className="w-6 h-6 text-emerald-400" /> },
    { number: '20hrs', label: 'Time Saved/Week', icon: <Clock className="w-6 h-6 text-purple-400" /> },
    { number: '95%', label: 'Deliverability Rate', icon: <Shield className="w-6 h-6 text-orange-400" /> }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-400/30">
            <Mail className="w-4 h-4" />
            <span>AI-Powered Email Marketing</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            AI Email
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Automation Pro
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your email marketing with AI-powered automation, 
            content generation, and performance optimization that increases revenue by 300%.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              href="/contact" 
              className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:scale-105"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#demo" 
              className="group border-2 border-blue-400 text-blue-400 px-10 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>Watch Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Email Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to create, automate, and optimize your email marketing campaigns.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-cyan-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="bg-cyan-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 mr-3 text-cyan-500" />
                      {feature}
                    </li>
                  ))}
                </div>
                <Link 
                  href="/contact" 
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 shadow-lg shadow-blue-500/25'
                      : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900'
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
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Email Automation?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven track record and innovative approach deliver measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Start your free trial today and see the power of AI email automation.
          </p>
          <button className="bg-white hover:bg-gray-100 text-cyan-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center mx-auto">
            Start Free Trial
            <ArrowRight className="w-8 h-8" />
          </button>
        </div>
      </section>
    </>
  )
}
export default AIEmailAutomationPage