'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Zap, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Globe } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function MicroSaasServicesPage() {
  const microSaasServices = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization and automation.',
      features: ['AI task prioritization', 'Smart scheduling', 'Team collaboration', 'Progress tracking'],
      pricing: '$19/month',
      link: '/task-manager-pro',
      popular: true,
      duration: 'Instant'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning and categorization.',
      features: ['Receipt scanning', 'Auto categorization', 'Budget alerts', 'Tax preparation'],
      pricing: '$15/month',
      link: '/expense-tracker',
      popular: false,
      duration: 'Instant'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Secure storage', 'Password generation', 'Security alerts', 'Multi-device sync'],
      pricing: '$12/month',
      link: '/password-manager',
      popular: false,
      duration: 'Instant'
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered customization and tracking.',
      features: ['Auto generation', 'Custom templates', 'Payment tracking', 'Tax calculations'],
      pricing: '$25/month',
      link: '/invoice-generator',
      popular: true,
      duration: 'Instant'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: 'AI Social Media Scheduler',
      description: 'Smart social media management with AI-optimized posting times.',
      features: ['Content scheduling', 'AI optimization', 'Analytics dashboard', 'Multi-platform'],
      pricing: '$18/month',
      link: '/social-scheduler',
      popular: false,
      duration: 'Instant'
    },
    {
      icon: <Clock className="w-8 h-8 text-cyan-500" />,
      title: 'AI Time Tracker',
      description: 'Intelligent time tracking with AI-powered productivity insights.',
      features: ['Auto time tracking', 'Productivity insights', 'Project billing', 'Team reports'],
      pricing: '$14/month',
      link: '/time-tracker',
      popular: false,
      duration: 'Instant'
    }
  ];

  const stats = [
    { number: '15+', label: 'Micro SAAS Apps' },
    { number: '1000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SAAS applications designed to solve specific business problems with AI intelligence." />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Micro <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SAAS</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful, affordable micro applications designed to solve specific business problems with AI intelligence.
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
                Our Micro SAAS Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our collection of specialized tools designed to streamline your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
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
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
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
                Why Choose Our Micro SAAS?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built with modern technology and AI intelligence to deliver maximum value at minimal cost.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered</h3>
                <p className="text-gray-600">Every tool is enhanced with artificial intelligence for smarter automation and insights.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Setup</h3>
                <p className="text-gray-600">Get started in minutes with our intuitive setup process and guided onboarding.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                <p className="text-gray-600">Enterprise-grade security with 99.9% uptime guarantee and 24/7 support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Start using our micro SAAS applications today and experience the power of AI-driven business tools.
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
