'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Leaf, Zap, Eye, BarChart, Globe, Shield, Users } from 'lucide-react'

const AIAgriculturalIntelligenceProPage: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Crop Monitoring',
      description: 'Advanced AI-powered crop monitoring and health assessment using satellite imagery and IoT sensors.',
      benefits: ['Real-time monitoring', 'Disease detection', 'Yield prediction']
    },
    {
      icon: Zap,
      title: 'Precision Agriculture',
      description: 'Optimize farming operations with AI-driven precision agriculture techniques.',
      benefits: ['Smart irrigation', 'Fertilizer optimization', 'Resource efficiency']
    },
    {
      icon: Eye,
      title: 'Predictive Analytics',
      description: 'Predict crop yields, weather patterns, and market conditions using machine learning.',
      benefits: ['Yield forecasting', 'Weather prediction', 'Market analysis']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Comprehensive data analytics for informed agricultural decision making.',
      benefits: ['Performance metrics', 'Trend analysis', 'ROI optimization']
    },
    {
      icon: Globe,
      title: 'Climate Adaptation',
      description: 'Adapt farming practices to changing climate conditions with AI recommendations.',
      benefits: ['Climate modeling', 'Adaptation strategies', 'Sustainability focus']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identify and mitigate agricultural risks using AI-powered risk assessment.',
      benefits: ['Risk prediction', 'Insurance optimization', 'Loss prevention']
    }
  ]

  const benefits = [
    'Increase crop yields by up to 30%',
    'Reduce water usage by 25% with smart irrigation',
    'Minimize pesticide use through targeted application',
    'Improve soil health and sustainability',
    'Reduce operational costs by 20%',
    'Enhance decision-making with data-driven insights'
  ]

  return (
    <>
      <Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered agricultural intelligence solutions for modern farming. Optimize crop yields, monitor health, and make data-driven decisions." />
        <meta name="keywords" content="AI agriculture, precision farming, crop monitoring, agricultural intelligence, smart farming" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Agricultural
              <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Intelligence Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your farming operations with advanced AI-powered agricultural intelligence. 
              Optimize yields, monitor crop health, and make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Agricultural Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology for modern agriculture
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300">
                Proven results that drive agricultural success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Agriculture?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your agricultural needs and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                  Contact Us
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default AIAgriculturalIntelligenceProPage