'use client'
import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Target, Brain, BarChart, Clock, CheckCircle, ArrowRight, Star, TrendingUp, DollarSign, Globe, Smartphone, MessageSquare, Calendar, FileText, Shield, Settings, Award, Phone, Mail, MapPin, Search, Zap, Eye, Users } from 'lucide-react'

const ZionAiSeoOptimizerPage: React.FC = () => {
  const features = [
    { icon: Brain, title: 'AI Keyword Research', description: 'Discover high-value keywords using advanced AI algorithms and competitor analysis' },
    { icon: Target, title: 'Content Optimization', description: 'AI-powered content suggestions to improve your search rankings and user engagement' },
    { icon: BarChart, title: 'Ranking Tracking', description: 'Monitor your keyword positions and track progress with detailed analytics' },
    { icon: Search, title: 'Technical SEO', description: 'Automated technical SEO audits and recommendations for better performance' },
    { icon: Zap, title: 'Competitor Analysis', description: 'Analyze competitor strategies and identify opportunities to outrank them' },
    { icon: Eye, title: 'Content Gap Analysis', description: 'Find content opportunities your competitors are missing' }
  ]

  const benefits = [
    'Increase organic traffic by up to 300%',
    'Improve search rankings for target keywords',
    'Save 20+ hours per week on SEO tasks',
    'Get AI-powered content recommendations',
    'Track competitor strategies automatically',
    'Generate detailed SEO reports'
  ]

  const pricing = [
    {
      name: 'Starter',
      price: '$97/month',
      description: 'Perfect for small websites',
      features: ['Up to 1,000 keywords', 'Basic AI recommendations', 'Monthly reports', 'Email support', '5 website audits'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$197/month',
      description: 'Most popular for growing businesses',
      features: ['Up to 10,000 keywords', 'Advanced AI insights', 'Weekly reports', 'Priority support', 'Unlimited audits', 'Competitor tracking'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$397/month',
      description: 'For large organizations',
      features: ['Unlimited keywords', 'Full AI suite', 'Daily reports', 'Dedicated support', 'White-label options', 'API access'],
      popular: false
    }
  ]

  const results = [
    { metric: 'Average Traffic Increase', value: '247%', color: 'text-cyan-400' },
    { metric: 'Keyword Ranking Improvement', value: '156%', color: 'text-purple-400' },
    { metric: 'Time Saved Weekly', value: '22 hours', color: 'text-pink-400' },
    { metric: 'ROI Improvement', value: '340%', color: 'text-green-400' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Zion AI SEO Optimizer
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">SEO Optimization</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Dominate search results with our AI-powered SEO platform. Get intelligent keyword recommendations, 
              content optimization, and competitor insights that drive real traffic growth.
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
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold ${result.color} mb-2`}>{result.value}</div>
                <div className="text-gray-300">{result.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful SEO Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI analyzes millions of data points to give you actionable SEO insights that drive results.
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
              Why Choose Zion AI SEO Optimizer?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their search visibility with our AI-powered platform.
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
              <h3 className="text-2xl font-bold text-white mb-4">Success Stories</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-400 pl-4">
                  <p className="text-gray-300 text-sm">"Increased organic traffic by 300% in just 3 months"</p>
                  <p className="text-cyan-400 font-semibold">- Sarah Johnson, CEO</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <p className="text-gray-300 text-sm">"Saved 25 hours per week on SEO tasks"</p>
                  <p className="text-purple-400 font-semibold">- Mike Chen, Marketing Director</p>
                </div>
                <div className="border-l-4 border-pink-400 pl-4">
                  <p className="text-gray-300 text-sm">"Ranked #1 for our main keywords"</p>
                  <p className="text-pink-400 font-semibold">- Lisa Rodriguez, SEO Manager</p>
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
              Choose the plan that fits your SEO needs. All plans include our core AI features.
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
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses using AI to improve their search rankings and drive more organic traffic.
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

export default ZionAiSeoOptimizerPage