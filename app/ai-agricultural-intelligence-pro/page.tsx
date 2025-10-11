'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, Leaf, Target, ArrowRight, CheckCircle, Brain, Zap, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAgriculturalIntelligenceProPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis and insights for agricultural optimization.',
      benefits: ['Yield prediction', 'Weather analysis', 'Soil monitoring', 'Crop health tracking']
    },
    {
      icon: Leaf,
      title: 'Crop Intelligence',
      description: 'AI-powered crop monitoring and disease detection for optimal yields.',
      benefits: ['Disease detection', 'Pest identification', 'Growth monitoring', 'Harvest optimization']
    },
    {
      icon: Target,
      title: 'Precision Agriculture',
      description: 'Targeted interventions based on real-time field data and AI predictions.',
      benefits: ['Variable rate application', 'Precision planting', 'Smart irrigation', 'Resource optimization']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered agricultural intelligence solutions for modern farming" />
        <meta name="keywords" content="AI agriculture, smart farming, crop intelligence, precision agriculture" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Agricultural <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Intelligence Pro</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your farming operations with advanced AI-powered agricultural intelligence solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge AI technology for modern agriculture
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Agriculture?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how AI can transform your farming operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-3 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  )
}

export default AIAgriculturalIntelligenceProPage