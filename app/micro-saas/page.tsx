'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react'

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      icon: Brain,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials',
      features: ['AI Writing', 'Content Templates', 'SEO Optimization', 'Multi-language Support'],
      price: '$29/month',
      popular: true
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting for your business metrics',
      features: ['Real-time Data', 'Custom Reports', 'Data Visualization', 'Export Options'],
      price: '$19/month',
      popular: false
    },
    {
      icon: Shield,
      title: 'Security Monitor',
      description: 'Monitor and protect your digital assets with advanced security features',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Compliance Reports', '24/7 Monitoring'],
      price: '$39/month',
      popular: false
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Streamline team communication and project management',
      features: ['Task Management', 'File Sharing', 'Video Calls', 'Team Chat'],
      price: '$15/month',
      popular: false
    },
    {
      icon: Database,
      title: 'Data Manager',
      description: 'Organize and manage your business data efficiently',
      features: ['Data Import/Export', 'Data Validation', 'Backup & Recovery', 'Data Analytics'],
      price: '$25/month',
      popular: false
    },
    {
      icon: Settings,
      title: 'Process Automator',
      description: 'Automate repetitive tasks and workflows',
      features: ['Workflow Builder', 'API Integration', 'Scheduled Tasks', 'Custom Triggers'],
      price: '$35/month',
      popular: false
    }
  ]

  const benefits = [
    'Quick Setup & Deployment',
    'Affordable Pricing',
    'No Long-term Contracts',
    'Regular Updates',
    '24/7 Support',
    'Easy Integration'
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, focused software solutions that solve specific business problems without the complexity of enterprise software.
              </p>
              <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center mx-auto">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Micro SaaS Products
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized tools designed to enhance your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 ${
                  product.popular
                    ? 'border-cyan-500 scale-105'
                    : 'border-purple-500/20 hover:border-purple-500/40'
                }`}>
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <product.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{product.price}</div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                    product.popular
                      ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Micro SaaS?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Micro SaaS solutions offer the perfect balance of functionality and simplicity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-4 flex-shrink-0" />
                  <span className="text-white">{benefit}</span>
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
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All our micro SaaS products come with these essential features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-cyan-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Fast Setup</h3>
                <p className="text-gray-300">Get up and running in minutes with our intuitive setup process.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Secure</h3>
                <p className="text-gray-300">Enterprise-grade security to protect your data and privacy.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Scalable</h3>
                <p className="text-gray-300">Grow with your business with flexible scaling options.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Customizable</h3>
                <p className="text-gray-300">Tailor the solution to your specific business needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the perfect micro SaaS solution for your business and start seeing results today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center">
                Browse All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-500 text-cyan-500 px-8 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;