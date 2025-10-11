'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {BarChart, CheckCircle, ArrowRight, Brain, Target, Zap, Shield, Leaf, TrendingUp, Globe} from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

const AIAgriculturalIntelligenceProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Crop Monitoring',
      description: 'AI-powered crop health monitoring and disease detection.',
      benefits: ['Real-time monitoring', 'Disease detection', 'Yield prediction', 'Quality assessment']
    },
    {
      icon: Target,
      title: 'Precision Agriculture',
      description: 'Optimize farming practices with data-driven insights.',
      benefits: ['Soil analysis', 'Weather prediction', 'Irrigation control', 'Fertilizer optimization']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis for better decision making.',
      benefits: ['Performance metrics', 'Trend analysis', 'Cost optimization', 'ROI tracking']
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Automate routine farming tasks for increased efficiency.',
      benefits: ['Automated irrigation', 'Smart harvesting', 'Pest control', 'Equipment management']
    }
  ]

  const benefits = [
    'Increase crop yield by up to 30%',
    'Reduce water usage by 25%',
    'Minimize pesticide use by 40%',
    'Improve soil health and sustainability',
    'Real-time monitoring and alerts',
    'Data-driven decision making',
    'Cost reduction and efficiency gains',
    'Environmental sustainability'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered agricultural intelligence solutions for modern farming operations." />
        <meta name="keywords" content="AI agriculture, smart farming, precision agriculture, crop monitoring, agricultural intelligence" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Agricultural <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Intelligence Pro</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your farming operations with advanced AI-powered agricultural intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Advanced Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions for modern agriculture
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
                    <div className="text-green-400 mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven benefits for agricultural operations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Agriculture?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get started with our AI agricultural intelligence platform today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default AIAgriculturalIntelligenceProPage