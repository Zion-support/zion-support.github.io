'use client'
import React from 'react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import { BarChart, CheckCircle, Star, Users, Zap, Shield, Globe, ArrowRight, DollarSign, Clock, Award, TrendingUp } from 'lucide-react'

const ZionAnalyticsPro: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics Dashboard',
      description: 'Monitor your business metrics with live data visualization and customizable dashboards.',
      included: true
    },
    {
      icon: Users,
      title: 'Customer Behavior Analysis',
      description: 'Understand customer patterns and preferences with advanced behavioral analytics.',
      included: true
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting to predict trends and make data-driven decisions.',
      included: true
    },
    {
      icon: Shield,
      title: 'Data Security & Compliance',
      description: 'Enterprise-grade security with GDPR, CCPA, and SOC 2 compliance.',
      included: true
    },
    {
      icon: Globe,
      title: 'Multi-platform Integration',
      description: 'Connect with 100+ platforms including Google Analytics, Facebook, Shopify, and more.',
      included: true
    },
    {
      icon: Zap,
      title: 'Automated Reporting',
      description: 'Generate and schedule custom reports with automated email delivery.',
      included: true
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: 29,
      period: 'month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 data sources',
        'Basic dashboard',
        'Monthly reports',
        'Email support',
        '1 user account'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: 79,
      period: 'month',
      description: 'Most popular for growing businesses',
      features: [
        'Up to 25 data sources',
        'Advanced analytics',
        'Real-time dashboards',
        'Predictive analytics',
        'Priority support',
        'Up to 5 user accounts',
        'Custom integrations'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 199,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Custom analytics',
        'White-label dashboards',
        'Advanced AI insights',
        '24/7 phone support',
        'Unlimited users',
        'Custom development',
        'Dedicated account manager'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Zion Analytics Pro transformed our data strategy. We increased our conversion rate by 40% in just 3 months.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      content: 'The predictive analytics feature helped us identify market opportunities we never knew existed.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Analyst, Enterprise Corp',
      content: 'Finally, a tool that makes complex data accessible to everyone in our organization.',
      rating: 5,
      avatar: 'ER'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Award className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-medium">#1 Business Intelligence Platform</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Analytics Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business data into actionable insights with our AI-powered analytics platform. 
              Make smarter decisions, faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                <Clock className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">10,000+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Avg. ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Features for <span className="text-cyan-400">Modern Businesses</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to turn your data into competitive advantage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Included in all plans</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, <span className="text-cyan-400">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">${plan.price}</span>
                    <span className="text-gray-300 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white' 
                    : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by <span className="text-cyan-400">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Zion Analytics Pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using Zion Analytics Pro to make better decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <DollarSign className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ZionAnalyticsPro