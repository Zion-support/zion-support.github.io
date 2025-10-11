'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {BarChart, CheckCircle, Brain, Target, TrendingUp, FileText, Zap, Shield, ArrowRight, PieChart} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AIAgriculturalIntelligenceProPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis and insights for agricultural optimization.',
      benefits: ['Real-time monitoring', 'Predictive analytics', 'Yield optimization', 'Resource management']
    },
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Machine learning algorithms for smart agricultural decision making.',
      benefits: ['Crop prediction', 'Disease detection', 'Weather forecasting', 'Automated recommendations']
    },
    {
      icon: Target,
      title: 'Precision Agriculture',
      description: 'Targeted interventions for maximum efficiency and minimal waste.',
      benefits: ['Variable rate application', 'GPS guidance', 'Soil mapping', 'Crop scouting']
    },
    {
      icon: Shield,
      title: 'Sustainable Practices',
      description: 'Environmentally conscious farming solutions for long-term viability.',
      benefits: ['Water conservation', 'Soil health', 'Biodiversity protection', 'Carbon footprint reduction']
    }
  ]

  const useCases = [
    {
      title: 'Crop Monitoring',
      description: 'Real-time monitoring of crop health and growth patterns.',
      icon: Target,
      benefits: ['Disease early detection', 'Growth tracking', 'Yield prediction', 'Quality assessment']
    },
    {
      title: 'Resource Optimization',
      description: 'Intelligent management of water, fertilizer, and other resources.',
      icon: CheckCircle,
      benefits: ['Water usage optimization', 'Fertilizer efficiency', 'Cost reduction', 'Environmental impact']
    },
    {
      title: 'Weather Intelligence',
      description: 'Advanced weather prediction and climate adaptation strategies.',
      icon: Brain,
      benefits: ['Weather forecasting', 'Climate adaptation', 'Risk assessment', 'Seasonal planning']
    },
    {
      title: 'Market Analysis',
      description: 'Data-driven insights for market trends and pricing strategies.',
      icon: PieChart,
      benefits: ['Price prediction', 'Market trends', 'Demand forecasting', 'Supply chain optimization']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered agricultural intelligence solutions for precision farming, crop monitoring, and sustainable agriculture." />
        <meta name="keywords" content="AI agriculture, precision farming, crop monitoring, agricultural intelligence, smart farming, sustainable agriculture" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Agricultural <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Intelligence Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your farming operations with advanced AI-powered agricultural intelligence solutions for precision farming, crop monitoring, and sustainable agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge AI technology for modern agriculture
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your agricultural operations with AI intelligence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{useCase.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Agriculture?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how AI Agricultural Intelligence Pro can transform your farming operations and increase productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Your AI Journey
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Schedule Demo
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