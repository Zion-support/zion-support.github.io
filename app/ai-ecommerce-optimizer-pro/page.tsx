import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ShoppingCart, ArrowRight, CheckCircle, Zap, Brain, Smartphone, Globe, Shield, BarChart3, Star, Sparkles, TrendingUp, Users, Target, CreditCard } from 'lucide-react'
import Layout from '../layout'

export default function AIEcommerceOptimizerPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Optimization',
      description: 'Machine learning algorithms optimize every aspect of your e-commerce store'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      title: 'Revenue Growth',
      description: 'Increase sales by up to 40% with intelligent product recommendations and pricing'
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-400" />,
      title: 'Customer Insights',
      description: 'Deep customer behavior analysis to improve conversion rates and retention'
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-green-400" />,
      title: 'Cart Optimization',
      description: 'Reduce cart abandonment with smart checkout optimization and recovery campaigns'
    }
  ]

  const optimizationFeatures = [
    {
      category: 'Product Optimization',
      items: ['Smart Recommendations', 'Dynamic Pricing', 'Inventory Management', 'Product Search', 'Cross-selling', 'Upselling']
    },
    {
      category: 'Customer Experience',
      items: ['Personalized Shopping', 'Behavioral Analytics', 'Customer Segmentation', 'Loyalty Programs', 'Retargeting', 'A/B Testing']
    },
    {
      category: 'Conversion Optimization',
      items: ['Checkout Flow', 'Payment Processing', 'Mobile Optimization', 'Page Speed', 'SEO Enhancement', 'Cart Recovery']
    },
    {
      category: 'Analytics & Reporting',
      items: ['Real-time Dashboard', 'Sales Analytics', 'Customer Insights', 'ROI Tracking', 'Performance Metrics', 'Custom Reports']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small online stores',
      features: [
        'Up to 1,000 products',
        'Basic AI optimization',
        'Standard analytics',
        'Email support',
        'Mobile optimization'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing e-commerce businesses',
      features: [
        'Up to 10,000 products',
        'Advanced AI features',
        'Custom recommendations',
        'Priority support',
        'A/B testing tools',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large e-commerce platforms',
      features: [
        'Unlimited products',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Jessica Park',
      company: 'Fashion Forward Store',
      content: 'AI E-commerce Optimizer Pro increased our conversion rate by 35% and reduced cart abandonment by 50%.',
      rating: 5
    },
    {
      name: 'David Wilson',
      company: 'Tech Gadgets Plus',
      content: 'The personalized recommendations feature is incredible. Our average order value increased by 28%.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'Home & Garden Co.',
      content: 'Real-time analytics and optimization helped us understand our customers better than ever before.',
      rating: 5
    }
  ]

  return (
    <Layout
      title="AI E-commerce Optimizer Pro - Boost Sales with AI | Zion Tech Group"
      description="Transform your e-commerce store with AI-powered optimization. Increase sales by 40%, reduce cart abandonment, and boost conversion rates. Start your free trial today."
      keywords="e-commerce optimization, AI shopping, conversion optimization, online store, sales boost, cart abandonment"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
                <ShoppingCart className="w-4 h-4 mr-2" />
                E-commerce AI Optimization
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                AI E-commerce Optimizer Pro
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your e-commerce store with AI-powered optimization. Increase sales by up to 40%, 
                reduce cart abandonment, and boost conversion rates with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="#demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Powerful E-commerce Optimization
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                AI-driven features that transform your online store performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Optimization Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Comprehensive Optimization Suite
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Everything you need to maximize your e-commerce success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {optimizationFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.category}</h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the plan that scales with your e-commerce business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-orange-400/40 scale-105 shadow-2xl shadow-orange-500/20' 
                    : 'border-orange-500/20 hover:border-orange-400/40'
                }`}>
                  {plan.popular && (
                    <div className="inline-flex items-center px-3 py-1 bg-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-4">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white hover:from-orange-600 hover:to-purple-700'
                        : 'border-2 border-orange-400 text-orange-400 hover:bg-orange-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-gray-300">
                See how our AI optimization transforms e-commerce businesses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-2xl p-8 border border-orange-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Boost Your E-commerce Sales Today
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of successful online stores using AI E-commerce Optimizer Pro
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Your Free Trial
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}