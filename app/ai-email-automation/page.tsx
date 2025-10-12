import { Helmet } from 'react-helmet-async'

import { Mail, Send, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Clock, Brain, Shield, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';


const AIEmailAutomationPage: React.FC = () => {
  const f eat ures = [
    {

      icon: <Brain className="w-5 h-5ml-2" />,
      title: 'AI Email Generation',

      description: 'Generate personalized, high-converting emails using AI that understands your audience and brand voice.',
      benefits: ['Personalized content', 'A/B testing', 'Brand voice training', 'Multi-language s upport']
    },
    {

      icon: <Send className="w-5 h-5ml-2" />,
      title: 'Smart Automation',

      description: 'Create complex email workflows with AI-powered triggers, segmentation, and behavioral targeting.',
      benefits: ['Behavioral triggers', 'Smart segmentation', 'Dynamic content', 'Cross-channel sync']
    },
    {

      icon: <TrendingUp className="w-5 h-5ml-2" />,
      title: 'Performance Analytics',

      description: 'Advanced analytics with AI insights to optimize email performance and improve ROI.',
      benefits: ['Open rate optimization', 'Click-through analysis', 'Revenue tracking', 'Predictive insights']
    },
    {

      icon: <Zap className="w-5 h-5ml-2" />,
      title: 'Automated Sequences',

      description: 'AI-powered email sequences that adapt based on recipient behavior and engagement patterns.',
      benefits: ['Adaptive sequences', 'Behavioral triggers', 'Personalization', 'Optimal timing']
    },
    {

      icon: <BarChart3 className="w-5 h-5ml-2" />,
      title: 'Lead Scoring',
      description: 'AI automatically scores leads based on email engagement and behavior to prioritize follow-ups.',
      benefits: ['Lead scoring', 'Engagement tracking', 'Priority alerts', 'CRM integration']
    },
    {
      icon: <Shield className="w-5 h-5ml-2" />,
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
      f eat ures: [
        'Up to 5,000 contacts',
        '10,000 emails/month',
        'Basic AI f eat ures',
        'Email templates',
        'Email s upport'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      f eat ures: [
        'Up to 25,000 contacts',
        '50,000 emails/month',
        'Advanced AI f eat ures',
        'A/B testing',
        'Priority s upport',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with high volume needs',
      f eat ures: [
        'Unlimited contacts',
        'Unlimited emails',
        'Full AI suite',
        'Custom integrations',
        'Dedicated s upport',
        'White-label options'
      ],
      popular: false
    }
  ]
  const testimonials = [
    {
      name: 'Jennifer Lee',
      company: 'E-comm erce Store',
      content: 'AI Email Automation increased our email revenue by 300%. The AI-generated content is incredibly effective.',
      rating: 5,
      avatar: 'JL'
    },
    {
      name: 'Mark Thompson',
      company: 'SaaS Company',
      content: 'The lead scoring f eat ure helped us identify high-value prospects and increased our conversion rate by 150%.',
      rating: 5,
      avatar: 'MT'
    },
    {
      name: 'Lisa Chen',
      company: 'Marketing Agency',
      content: 'Saves us 20+ hours per week on email campaigns. The automation f eat ures are incredibly powerful.',
      rating: 5,
      avatar: 'LC'
    }
  ]
  const stats = [

    { number: '300%', label: 'Revenue Increase', icon: <DollarSign className="w-5 h-5ml-2" /> },
    { number: '150%', label: 'Conversion Boost', icon: <TrendingUp className="w-5 h-5ml-2" /> },
    { number: '20 hrs', label: 'Time Saved/Week', icon: <Clock className="w-5 h-5ml-2" /> },
    { number: '95%', label: 'Deliverability Rate', icon: <Shield className="w-5 h-5ml-2" /> }
  ]

  return (
    <>
      <Helmet>
        <title />AI Email Automation - Smart Email Marketing | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered email automation with content generation, smart segmentation, and performance analytics. Increase revenue by 300% and save 20+ hours per week." />
        <meta name="keywords" content="AI email automation, email marketing, email generation, lead scoring, email analytics, marketing automation, AI content creation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-email-automation"  />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <Mail className="w-5 h-5ml-2" />
            <span />AI-Powered Email Marketing</span>
          </div>
          
          <h1 className="w-5 h-5ml-2" />
            AI Email
            <br />
            <span className="w-5 h-5ml-2" />Automation Pro
            </span>
          </h1>
          
          <p className="w-5 h-5ml-2">Transform your email marketing with AI-powered automation, 
            content generation, and performance optimization that increases revenue by 300%.
          </p>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <Link to="/contact" className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5 h-5ml-2" />
            </Link>
            <Link to="#demo" className="group border-2 border-blue-400 text-blue-400 px-10 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span />Watch Demo</span>
              <ArrowRight className="w-5 h-5ml-2" />
            </Link>
          </div>
      </section>

      {/* Stats Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {stats.map((stat, index) => (
              <div key="{index}" className="text-center bg-white/5 backdrop-blur-sm rounded-2 xl p-6borderborder-white/10" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{stat.icon}
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{stat.number}
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{stat.label}
                </div>
            ))}
          </div>
      </section>

      {/* Features Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Advanced <span className="w-5 h-5ml-2" />Features</span>
            </h2>
            <p className="w-5 h-5ml-2">Our AI-powered email automation platform uses machine learning to create, 
              send, and optimize email campaigns that drive real business results.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {features.map((feature, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}
                </div>
                <h3 className="w-5 h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5 h-5ml-2">{feature.description}
                </p>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key="{benefitIndex}" className="flex items-center space-x-2text-gray-400text-sm" />
                      <CheckCircle className="w-5 h-5ml-2" />
                      <span />{benefit}</span>
                    </div>
                  ))}
                </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Transparent <span className="w-5 h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5 h-5ml-2">Choose the perfect plan for your email marketing needs. All plans include our core AI features 
              with scalable options for businesses of all sizes.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">

            {pricingPlans.map((plan, index) => (
              <d iv key="{index}" c las sNa me="{`r e lative" bg-white/10 backdrop-b lur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-b lue-400/50 shadow-2 xl shadow-b lue-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (

                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Most Popular
                    </div>
                )}
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <h3 className="w-5 h-5ml-2" />{plan.name}</h3>
                  <p className="w-5 h-5ml-2">{plan.description}</p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <span className="w-5 h-5ml-2" />{plan.price}</span>
                    <span className="w-5 h-5ml-2" />{plan.period}</span>
                  </div>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  {plan.features.map((feature, featureIndex) => (
                    <div key="{featureIndex}" className="flex items-centerspace-x-3" />
                      <CheckCircle className="w-5 h-5ml-2" />
                      <span className="w-5 h-5ml-2" />{feature}</span>
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
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Trusted by <span className="w-5 h-5ml-2" />Marketers</span>
            </h2>
            <p className="w-5 h-5ml-2">See how AI Email Automation is transforming email marketing for businesses worldwide.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {testimonials.map((testimonial, index) => (
              <div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8borderborder-white/20" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.avatar}
                  </div>
                  <div />
                    <h4 className="w-5 h-5ml-2" />{testimonial.name}</h4>
                    <p className="w-5 h-5ml-2">{testimonial.company}</p>
                  </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" className="w-5 h-5te xt-yellow-400fill-current"  />
                  ))}
                </div>
                <p className="w-5 h-5ml-2">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <h2 className="w-5 h-5ml-2" />
            Ready to Revolutionize Your
            <br />
            <span className="w-5 h-5ml-2" />Email Marketing?
            </span>
          </h2>
          <p className="w-5 h-5ml-2">Join thousands of marketers already increasing revenue and saving time with AI Email Automation. 
            Start your free trial today - no credit card required.
          </p>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <Link to="/contact" className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5 h-5ml-2" />
            </Link>
            <Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span />View All Plans</span>
              <ArrowRight className="w-5 h-5ml-2" />
            </Link>
          </div>
      </section>
    </>
  )
}

export default AIEmailAutomationPage;

