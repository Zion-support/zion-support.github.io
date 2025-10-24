'use client'

import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Leaf, Eye, BarChart, Shield, Zap, Globe } from 'lucide-react';

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

  return (
    <>
      <Navigation />
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7 xl mx-auto text-center">
          <h1 className="text-5 xl md:text-7 xl font-bold text-white mb-6 leading-tight">
            AI Agricultural
            <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Intelligence Pro
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto leading-relaxed">
            Transform your farming operations with advanced AI-powered agricultural intelligence. 
            Optimize yields, reduce costs, and make data-driven decisions for sustainable agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7 xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4 xl font-bold text-white mb-4">
              Advanced Agricultural Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Our AI-powered agricultural intelligence platform provides comprehensive solutions for modern farming.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4 xl mx-auto text-center">
          <h2 className="text-4 xl font-bold text-white mb-6">
            Ready to Revolutionize Your Farming?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our agricultural AI experts to learn how our solutions can transform your farming operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
            <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default AIAgriculturalIntelligenceProPage