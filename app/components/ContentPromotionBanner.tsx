'use client'
import Navigation from './Navigation'
import { Helmet } from 'react-helmet-async'
import React from 'react'
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Star, Clock, Zap, Shield, Globe, Database, Users, Settings, Check } from 'lucide-react'

const ContentPromotionBanner: React.FC = () => {
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  const stats = [
    { icon: Brain, value: '95%', label: 'Accuracy', description: 'AI-powered precision' },
    { icon: BarChart, value: '50%', label: 'Efficiency', description: 'Faster processing' },
    { icon: Target, value: '24/7', label: 'Availability', description: 'Always online' }
  ]

  const features = [
    { icon: Brain, title: 'AI Intelligence', description: 'Advanced AI algorithms' },
    { icon: BarChart, title: 'Analytics', description: 'Real-time insights' },
    { icon: Target, title: 'Targeting', description: 'Precise targeting' },
    { icon: TrendingUp, title: 'Growth', description: 'Scalable solutions' }
  ]

  return (
    <>
      <Helmet>
        <title>ContentPromotionBanner</title>
        <meta name="description" content="Advanced ContentPromotionBanner solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, ContentPromotionBanner, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ContentPromotionBanner
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced ContentPromotionBanner solution for modern businesses.
            </p>
            <div className="hidden md:block w-px h-6 bg-white/30 mx-auto mb-4"></div>
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn More
              <ArrowRight className="inline-block ml-1 h-4 w-4" />
            </button>
          </div>
        </section>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mx-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Us?</h3>
              <ul className="space-y-2">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-purple-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Additional Benefits</h3>
              <ul className="space-y-2">
                {benefits.slice(4).map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-purple-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Get Started Today
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 px-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center px-4 pb-20">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Join the future of business technology. Get started with our AI solutions today and see the difference.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentPromotionBanner;