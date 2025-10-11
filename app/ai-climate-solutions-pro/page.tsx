'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const AiClimateSolutionsProPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Climate Monitoring',
      description: 'Advanced AI-powered climate monitoring and prediction systems for environmental protection.',
      benefits: ['Real-time monitoring', 'Climate prediction', 'Environmental alerts', 'Data visualization']
    },
    {
      icon: Zap,
      title: 'Carbon Footprint Reduction',
      description: 'AI-driven solutions to reduce carbon footprint and optimize energy consumption.',
      benefits: ['Energy optimization', 'Carbon tracking', 'Emission reduction', 'Sustainability metrics']
    },
    {
      icon: Shield,
      title: 'Environmental Protection',
      description: 'Comprehensive environmental protection strategies powered by AI analytics.',
      benefits: ['Risk assessment', 'Protection strategies', 'Compliance monitoring', 'Impact analysis']
    },
    {
      icon: BarChart,
      title: 'Sustainability Analytics',
      description: 'Advanced analytics for sustainable business practices and environmental impact.',
      benefits: ['Impact measurement', 'Trend analysis', 'ROI optimization', 'Performance tracking']
    }
  ];

  const benefits = [
    'Reduce carbon footprint by up to 60%',
    'Optimize energy consumption with AI',
    'Predict and prevent environmental risks',
    'Ensure compliance with environmental regulations',
    'Improve sustainability metrics',
    'Make data-driven environmental decisions'
  ];

  return (
    <>
      <Helmet>
        <title>AI Climate Solutions Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered climate solutions for environmental protection and sustainability. Monitor, predict, and optimize climate impact." />
        <meta name="keywords" content="AI climate, environmental protection, sustainability, carbon reduction, climate monitoring" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Climate
            <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions Pro
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced AI-powered climate solutions for environmental protection and sustainability. 
            Monitor, predict, and optimize your climate impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
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
              Advanced Climate Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI technology for environmental protection and sustainability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
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

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our AI Climate Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of AI-powered environmental protection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Join organizations already using our AI climate solutions
              </p>
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ready to Protect Our Planet?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start using AI-powered climate solutions to make a positive environmental impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AiClimateSolutionsProPage;