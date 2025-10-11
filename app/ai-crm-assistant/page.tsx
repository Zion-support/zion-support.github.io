'use client'
import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Users, Brain, BarChart, Target, Clock, CheckCircle, ArrowRight, Star, TrendingUp, DollarSign, Globe, Smartphone, MessageSquare, Calendar, FileText, Shield, Settings, Award, Phone, Mail, MapPin } from 'lucide-react'

const AiCrmAssistantPage: React.FC = () => {
  const features = [
    { icon: Brain, title: 'AI Lead Scoring', description: 'Automatically score and prioritize leads based on behavior, demographics, and engagement patterns' },
    { icon: Target, title: 'Predictive Analytics', description: 'Predict customer lifetime value, churn risk, and optimal engagement strategies' },
    { icon: BarChart, title: 'Smart Insights', description: 'Get actionable insights and recommendations to improve sales performance and customer relationships' },
    { icon: Clock, title: 'Automated Follow-ups', description: 'AI-powered follow-up sequences that adapt based on customer responses and behavior' },
    { icon: Users, title: 'Customer Segmentation', description: 'Automatically segment customers based on behavior, preferences, and value' },
    { icon: MessageSquare, title: 'Conversation Intelligence', description: 'Analyze customer interactions to provide context and recommendations for better engagement' }
  ]

  const benefits = [
    'Increase sales conversion by up to 40%',
    'Reduce sales cycle time by 30%',
    'Improve customer retention by 25%',
    'Save 15+ hours per week on CRM management',
    'Boost revenue per customer by 35%',
    'Automate 80% of routine CRM tasks'
  ]

  const pricing = [
    {
      name: 'Starter',
      price: '$147/month',
      description: 'Perfect for small teams',
      features: ['Up to 1,000 contacts', 'Basic AI lead scoring', 'Email automation', 'Basic analytics', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$297/month',
      description: 'Most popular for growing businesses',
      features: ['Up to 10,000 contacts', 'Advanced AI insights', 'Predictive analytics', 'Custom workflows', 'Priority support', 'API access'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$597/month',
      description: 'For large organizations',
      features: ['Unlimited contacts', 'Full AI suite', 'Custom integrations', 'Dedicated support', 'White-label options', 'Advanced reporting'],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              AI CRM Assistant
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">CRM Assistant</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer relationships with AI that learns, predicts, and optimizes every interaction. 
              Our intelligent CRM assistant increases sales by 40% while reducing manual work by 80%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Higher Conversion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">30%</div>
              <div className="text-gray-300">Faster Sales Cycle</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">25%</div>
              <div className="text-gray-300">Better Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-300">Task Automation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Intelligent CRM Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI learns from your data to provide insights, predictions, and automation that drive real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our AI CRM?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of sales teams that have transformed their performance with our AI-powered CRM assistant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Lead Conversion Rate</span>
                  <span className="text-cyan-400 font-bold">23.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Average Deal Size</span>
                  <span className="text-purple-400 font-bold">$12,450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Customer Lifetime Value</span>
                  <span className="text-pink-400 font-bold">$45,230</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sales Cycle Length</span>
                  <span className="text-green-400 font-bold">18 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your team size and business needs. All plans include our core AI features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 relative ${plan.popular ? 'border-2 border-cyan-500' : 'border border-white/10'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <p className="text-gray-300">{plan.description}</p>
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
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of sales teams using AI to close more deals and build stronger customer relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Your Free Trial
            </button>
            <a
              href="tel:+13024640950"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AiCrmAssistantPage