'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Leaf, BarChart, Shield, Zap, CheckCircle, ArrowRight, Brain, Target, TrendingUp, FileText} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AIAgriculturalIntelligenceProPage: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Crop Monitoring',
      description: 'Advanced AI-powered crop monitoring with real-time analysis and predictive insights.',
      benefits: ['Real-time monitoring', 'Disease detection', 'Growth tracking', 'Yield prediction']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analytics for optimizing agricultural operations and decision making.',
      benefits: ['Data visualization', 'Trend analysis', 'Performance metrics', 'Predictive modeling']
    },
    {
      icon: Shield,
      title: 'Pest & Disease Control',
      description: 'AI-driven pest and disease detection with automated treatment recommendations.',
      benefits: ['Early detection', 'Treatment plans', 'Prevention strategies', 'Cost optimization']
    },
    {
      icon: Zap,
      title: 'Automated Irrigation',
      description: 'Smart irrigation systems that optimize water usage based on AI analysis.',
      benefits: ['Water optimization', 'Weather integration', 'Soil monitoring', 'Energy efficiency']
    },
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'Machine learning models that predict crop yields, weather patterns, and market trends.',
      benefits: ['Yield forecasting', 'Weather prediction', 'Market analysis', 'Risk assessment']
    },
    {
      icon: Target,
      title: 'Precision Agriculture',
      description: 'GPS-guided precision farming techniques for maximum efficiency and minimal waste.',
      benefits: ['GPS guidance', 'Variable rate application', 'Field mapping', 'Resource optimization']
    }
  ];

  const services = [
    {
      title: 'Smart Farming Solutions',
      description: 'Complete AI-powered farming solutions for modern agriculture.',
      icon: Leaf,
      benefits: ['Crop monitoring', 'Automated systems', 'Data analytics', 'Performance optimization']
    },
    {
      title: 'Data Analytics Platform',
      description: 'Advanced analytics platform for agricultural data insights.',
      icon: BarChart,
      benefits: ['Data visualization', 'Trend analysis', 'Reporting', 'Decision support']
    },
    {
      title: 'Consulting Services',
      description: 'Expert consulting for implementing AI in agriculture.',
      icon: Brain,
      benefits: ['Implementation support', 'Training', 'Best practices', 'Ongoing support']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered agricultural intelligence platform for smart farming, crop monitoring, and precision agriculture." />
        <meta name="keywords" content="AI agriculture, smart farming, precision agriculture, crop monitoring, agricultural analytics" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Agricultural Intelligence Pro</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your farming operations with cutting-edge AI technology for precision agriculture and smart farming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">AI Agricultural Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that revolutionizes modern agriculture
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
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

        {/* Services Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered agricultural solutions for modern farming
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Agriculture?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start using our AI agricultural intelligence platform today and revolutionize your farming operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIAgriculturalIntelligenceProPage;