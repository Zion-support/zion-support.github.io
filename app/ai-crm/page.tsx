'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, Users, BarChart3, Mail, Phone, Calendar, Target, TrendingUp, Shield, Zap, CheckCircle, Star, DollarSign, Clock, Globe, Smartphone, Database, Bot, Brain, Cpu, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'

const AICRMPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Lead Scoring',
      description: 'Automatically score and prioritize leads using machine learning algorithms that analyze behavior patterns, engagement levels, and conversion probability.',
      price: '$29/month'
    },
    {
      icon: <Bot className="w-8 h-8 text-green-500" />,
      title: 'Intelligent Chatbots',
      description: 'Deploy AI chatbots that can handle customer inquiries, qualify leads, and schedule meetings 24/7 with natural language processing.',
      price: '$19/month'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Predictive Analytics',
      description: 'Get insights into customer behavior, sales forecasting, and revenue predictions with advanced AI analytics and reporting.',
      price: '$39/month'
    },
    {
      icon: <Mail className="w-8 h-8 text-orange-500" />,
      title: 'Smart Email Automation',
      description: 'Create personalized email campaigns that adapt based on customer behavior, preferences, and engagement patterns.',
      price: '$24/month'
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: 'Customer Segmentation',
      description: 'Automatically segment customers based on behavior, demographics, and purchase history for targeted marketing campaigns.',
      price: '$19/month'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-cyan-500" />,
      title: 'Sales Forecasting',
      description: 'Predict future sales and revenue with AI-powered forecasting models that analyze historical data and market trends.',
      price: '$34/month'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI CRM',
      features: [
        'Up to 1,000 contacts',
        'AI lead scoring',
        'Basic email automation',
        'Standard reporting',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses with advanced AI features',
      features: [
        'Up to 10,000 contacts',
        'All AI features included',
        'Advanced analytics',
        'Custom integrations',
        'Priority support',
        'Team collaboration tools',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with custom AI requirements',
      features: [
        'Unlimited contacts',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'Advanced security',
        'Custom integrations',
        'Training & onboarding'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'Sales Director',
      content: 'AI CRM increased our lead conversion rate by 40% in just 3 months. The predictive analytics are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCorp',
      role: 'Marketing Manager',
      content: 'The AI-powered email automation has saved us 15 hours per week. Our engagement rates have doubled.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'ScaleUp Solutions',
      role: 'CEO',
      content: 'The customer segmentation feature helped us identify our most valuable customers and increase retention by 35%.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI-Powered CRM - Zion Tech Group"
        description="Transform your customer relationships with our AI-powered CRM system. Advanced lead scoring, predictive analytics, and intelligent automation."
        keywords="AI CRM, customer relationship management, lead scoring, predictive analytics, sales automation"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI-Powered
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CRM System
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your customer relationships with intelligent automation, predictive analytics, 
            and AI-driven insights that boost sales and improve customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="#pricing" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to automate your sales process and maximize customer value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-semibold">{feature.price}</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-500 bg-gradient-to-br from-purple-500/20 to-blue-500/20' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their sales with AI CRM.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Sales Process?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start your free 14-day trial today and experience the power of AI-driven customer relationship management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AICRMPage
