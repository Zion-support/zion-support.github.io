'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, Zap, CheckCircle, ArrowRight, Star, Users, Clock, Shield } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIServicesPage() {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      features: ['Blog post generation', 'Social media content', 'Product descriptions', 'SEO optimization'],
      pricing: '$29/month',
      link: '/ai-content-generator',
      popular: true,
      duration: 'Instant'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support and lead generation.',
      features: ['Natural language processing', 'Multi-language support', 'Integration APIs', 'Analytics dashboard'],
      pricing: '$49/month',
      link: '/ai-chatbot-builder',
      popular: false,
      duration: '1-2 weeks'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Advanced analytics and insights powered by artificial intelligence.',
      features: ['Predictive analytics', 'Real-time monitoring', 'Custom reports', 'Data visualization'],
      pricing: '$79/month',
      link: '/ai-analytics-dashboard',
      popular: true,
      duration: '2-3 weeks'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'AI Customer Service',
      description: 'Automated customer service solutions with intelligent response generation.',
      features: ['24/7 support', 'Ticket routing', 'Sentiment analysis', 'Performance metrics'],
      pricing: '$99/month',
      link: '/ai-customer-service',
      popular: false,
      duration: '2-4 weeks'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'AI Process Automation',
      description: 'Automate repetitive tasks and workflows with intelligent AI solutions.',
      features: ['Workflow automation', 'Task scheduling', 'Integration hub', 'Performance monitoring'],
      pricing: '$149/month',
      link: '/ai-automation',
      popular: true,
      duration: '3-4 weeks'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Security Monitor',
      description: 'Advanced security monitoring and threat detection using AI algorithms.',
      features: ['Threat detection', 'Anomaly analysis', 'Real-time alerts', 'Compliance reporting'],
      pricing: '$199/month',
      link: '/ai-security-monitor',
      popular: false,
      duration: '2-3 weeks'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '50+', label: 'AI Services Available' },
    { number: '500+', label: 'AI Solutions Deployed' },
    { number: '24/7', label: 'AI Support' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, chatbots, and automation." />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions designed to drive growth and efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered solutions designed to solve your business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-gray-900 ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-purple-600">{service.pricing}</span>
                    <span className="text-sm text-gray-500">{service.duration}</span>
                  </div>
                  
                  {service.popular && (
                    <div className="mb-4">
                      <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built with cutting-edge AI technology and designed for maximum business impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced AI</h3>
                <p className="text-gray-600">Powered by the latest machine learning models and neural networks for superior performance.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Implementation</h3>
                <p className="text-gray-600">Get up and running quickly with our streamlined setup process and expert support.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                <p className="text-gray-600">Enterprise-grade security with 99.9% uptime guarantee and comprehensive data protection.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of businesses already using our AI services to drive growth and efficiency.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
