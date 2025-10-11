'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, FileText, BarChart, Mail, Calendar } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function MicroSAASServicesPage() {
  const microSAAS = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization, scheduling, and productivity insights.',
      features: ['AI task prioritization', 'Smart scheduling', 'Productivity analytics', 'Team collaboration'],
      pricing: '$19/month',
      link: '/ai-task-manager',
      popular: true,
      users: '1,200+',
      rating: '4.9'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning, categorization, and financial insights.',
      features: ['Receipt scanning', 'Auto categorization', 'Budget tracking', 'Financial reports'],
      pricing: '$15/month',
      link: '/ai-expense-tracker',
      popular: true,
      users: '850+',
      rating: '4.8'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: ['Secure storage', 'AI security audit', 'Breach monitoring', 'Multi-device sync'],
      pricing: '$12/month',
      link: '/ai-password-manager',
      popular: false,
      users: '650+',
      rating: '4.7'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered templates, payment tracking, and client management.',
      features: ['Auto invoice generation', 'Payment tracking', 'Client management', 'Tax calculations'],
      pricing: '$25/month',
      link: '/ai-invoice-generator',
      popular: true,
      users: '980+',
      rating: '4.9'
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: 'AI Document Processor',
      description: 'Smart document processing with OCR, data extraction, and automated workflows.',
      features: ['OCR technology', 'Data extraction', 'Workflow automation', 'Document templates'],
      pricing: '$29/month',
      link: '/ai-document-processor',
      popular: false,
      users: '720+',
      rating: '4.6'
    },
    {
      icon: <BarChart className="w-8 h-8 text-cyan-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business analytics with AI-powered insights and automated reporting.',
      features: ['Real-time analytics', 'AI insights', 'Automated reports', 'Custom dashboards'],
      pricing: '$39/month',
      link: '/ai-analytics-dashboard',
      popular: true,
      users: '1,100+',
      rating: '4.8'
    }
  ]

  const benefits = [
    {
      title: 'Affordable Pricing',
      description: 'Start with low-cost solutions that scale with your business',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our intuitive interfaces',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence for smarter automation',
      icon: <Star className="w-6 h-6 text-purple-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance when you need it most',
      icon: <Clock className="w-6 h-6 text-orange-500" />
    }
  ]

  const stats = [
    { number: '5,000+', label: 'Active Users' },
    { number: '50+', label: 'Micro SAAS Apps' },
    { number: '99.9%', label: 'Uptime' },
    { number: '4.8', label: 'Average Rating' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro SAAS applications designed to solve specific business problems with AI-powered automation and efficiency." />
        <meta name="keywords" content="micro saas, small business software, AI tools, productivity apps, business automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">SAAS Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Discover our collection of specialized micro SAAS applications designed to solve specific business problems with AI-powered automation and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Explore All Apps
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="#apps" 
                  className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
                >
                  View Apps
                </a>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Small solutions, big impact for your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Apps Grid */}
        <section id="apps" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Micro SAAS Applications</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose from our growing collection of specialized business tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSAAS.map((app, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative">
                  {app.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-4">{app.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{app.title}</h3>
                  <p className="text-gray-300 mb-6">{app.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-white">{app.pricing}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-gray-300">{app.rating}</span>
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm">{app.users} users</div>
                  </div>
                  
                  <ul className="space-y-2 mb-8">
                    {app.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={app.link}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Try Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Start using our micro SAAS applications today and experience the power of AI-driven automation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Started Today
                  </a>
                  <a 
                    href="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}