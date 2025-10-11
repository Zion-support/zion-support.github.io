'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, Clock, DollarSign, Star, Users } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Writer',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      features: ['Blog post generation', 'Social media content', 'Product descriptions', 'SEO optimization'],
      pricing: '$29/month',
      link: '/micro-saas/ai-content-writer',
      popular: true,
      category: 'Content'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Get actionable insights from your data with beautiful, customizable dashboards.',
      features: ['Real-time analytics', 'Custom dashboards', 'Data visualization', 'Automated reports'],
      pricing: '$99/month',
      link: '/micro-saas/analytics-dashboard',
      popular: true,
      category: 'Analytics'
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization and productivity insights.',
      features: ['AI prioritization', 'Team collaboration', 'Productivity analytics', 'Mobile app'],
      pricing: '$19/month',
      link: '/micro-saas/task-manager-pro',
      popular: false,
      category: 'Productivity'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: ['Secure storage', 'Password generation', 'Breach monitoring', 'Multi-device sync'],
      pricing: '$12/month',
      link: '/micro-saas/support-bot',
      popular: false,
      category: 'Security'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-400" />,
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with receipt scanning, categorization, and financial insights.',
      features: ['Receipt scanning', 'Auto categorization', 'Expense analytics', 'Tax preparation'],
      pricing: '$15/month',
      link: '/micro-saas/expense-tracker',
      popular: false,
      category: 'Finance'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'AI Email Assistant',
      description: 'Automate your email marketing with AI-powered personalization and optimization.',
      features: ['Email templates', 'A/B testing', 'Personalization', 'Analytics tracking'],
      pricing: '$39/month',
      link: '/micro-saas/email-marketing',
      popular: false,
      category: 'Marketing'
    }
  ]

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: 'Affordable Pricing',
      description: 'Powerful tools at micro-SaaS prices, perfect for small businesses and individuals.'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: 'Easy Setup',
      description: 'Get started in minutes with our intuitive setup process and guided onboarding.'
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence to automate tasks and gain valuable insights.'
    },
    {
      icon: <Star className="w-6 h-6 text-orange-400" />,
      title: 'Regular Updates',
      description: 'Continuous improvements and new features based on user feedback and needs.'
    }
  ]

  const stats = [
    { number: '4,000+', label: 'Active Users' },
    { number: '15+', label: 'Micro SAAS Apps' },
    { number: '4.7', label: 'Average Rating' },
    { number: '99.9%', label: 'Uptime' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful AI-driven micro software solutions designed to streamline your business operations and boost productivity. Affordable tools for modern businesses." />
        <meta name="keywords" content="micro SAAS, AI tools, productivity apps, business automation, task management, expense tracking" />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Micro SAAS Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Powerful AI-driven micro software solutions designed to streamline your business operations and boost productivity. 
                Affordable tools for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm"
                >
                  View All AI Services
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We deliver powerful solutions that are easy to use and affordable for businesses of all sizes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Micro SAAS Applications</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose from our collection of AI-powered micro applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {microSaasServices.map((service, index) => (
                <Link key={index} to={service.link} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <span className="bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses using our micro SAAS solutions to streamline their operations and achieve better results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View All Services
                  </Link>
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

export default MicroSaasServicesPage