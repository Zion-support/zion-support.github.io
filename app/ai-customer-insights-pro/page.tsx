'use client'
import React from 'react'
import { Brain, BarChart, Users, TrendingUp, CheckCircle, Star, ArrowRight, Shield, Zap, Target, DollarSign, Clock, Award, MessageCircle, Eye, Database, Cpu, Smartphone, Globe, Lock, Settings, FileText, Calendar, Phone, Mail, MapPin } from 'lucide-react'

const AiCustomerInsightsPro: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze customer behavior patterns and predict future trends with 95% accuracy.',
      benefits: ['Real-time insights', 'Predictive analytics', 'Behavioral analysis', 'Trend forecasting']
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'Automatically segment customers based on behavior, preferences, and value using advanced clustering algorithms.',
      benefits: ['Dynamic segmentation', 'Personalized targeting', 'Lifetime value prediction', 'Churn prevention']
    },
    {
      icon: BarChart,
      title: 'Advanced Reporting',
      description: 'Comprehensive dashboards and reports that provide actionable insights for business growth and optimization.',
      benefits: ['Custom dashboards', 'Automated reports', 'Real-time metrics', 'ROI tracking']
    },
    {
      icon: Target,
      title: 'Predictive Modeling',
      description: 'Build and deploy machine learning models to predict customer actions, preferences, and business outcomes.',
      benefits: ['ML model deployment', 'A/B testing', 'Performance optimization', 'Continuous learning']
    }
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI insights',
      features: [
        'Up to 10,000 customer profiles',
        'Basic analytics dashboard',
        'Email support',
        'Standard reporting',
        'API access (1,000 calls/month)',
        'Data export (CSV, JSON)'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses with advanced analytics needs',
      features: [
        'Up to 100,000 customer profiles',
        'Advanced AI analytics',
        'Priority support',
        'Custom dashboards',
        'API access (10,000 calls/month)',
        'Real-time data sync',
        'Advanced segmentation',
        'Predictive modeling'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Complete solution for large enterprises with unlimited scale',
      features: [
        'Unlimited customer profiles',
        'Full AI suite',
        '24/7 dedicated support',
        'Custom integrations',
        'Unlimited API access',
        'White-label solution',
        'Advanced security',
        'Dedicated account manager'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'VP Marketing, TechFlow Inc',
      content: 'AI Customer Insights Pro increased our conversion rates by 340% and reduced customer acquisition costs by 60%. The predictive analytics are incredibly accurate.',
      rating: 5,
      company: 'TechFlow Inc'
    },
    {
      name: 'David Chen',
      role: 'CEO, DataDriven Solutions',
      content: 'The customer segmentation features helped us identify our most valuable customers and increase their lifetime value by 200%. ROI was achieved in just 2 months.',
      rating: 5,
      company: 'DataDriven Solutions'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Head of Analytics, GrowthCorp',
      content: 'The AI-powered insights have transformed how we understand our customers. We can now predict churn with 95% accuracy and take proactive measures.',
      rating: 5,
      company: 'GrowthCorp'
    }
  ]

  const useCases = [
    {
      title: 'E-commerce Optimization',
      description: 'Increase sales by 40% with personalized product recommendations and optimized pricing strategies.',
      metrics: ['40% increase in sales', '25% higher AOV', '60% reduction in cart abandonment']
    },
    {
      title: 'SaaS Customer Success',
      description: 'Reduce churn by 50% with predictive analytics and proactive customer success interventions.',
      metrics: ['50% churn reduction', '35% increase in MRR', '80% improvement in NPS']
    },
    {
      title: 'Financial Services',
      description: 'Improve risk assessment and fraud detection with advanced behavioral analysis and pattern recognition.',
      metrics: ['90% fraud detection accuracy', '30% reduction in false positives', '25% increase in approval rates']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-medium">AI-Powered Customer Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Customer Insights
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Professional
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer data into actionable insights with our advanced AI-powered analytics platform. 
              Predict customer behavior, optimize marketing campaigns, and maximize revenue with machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to understand your customers like never before.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
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
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border ${
                tier.popular ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-white/10'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transform hover:scale-105' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  {tier.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses across industries are using AI Customer Insights Pro to drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-green-400">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses already using AI Customer Insights Pro to drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Analytics?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and see the power of AI-driven customer insights in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AiCustomerInsightsPro