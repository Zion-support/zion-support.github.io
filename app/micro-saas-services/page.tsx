import React from 'react'
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, Clock, DollarSign, Star, Users, Zap } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, automation, and productivity insights.',
      features: [
        'AI-powered task prioritization',
        'Smart deadline management',
        'Team collaboration tools',
        'Productivity analytics',
        'Mobile app included',
        'Integration with 50+ tools'
      ],
      pricing: '$19/month',
      popular: true,
      link: '/micro-saas/ai-task-manager'
    },
    {
      icon: <Database className="w-12 h-12 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning, categorization, and financial insights.',
      features: [
        'Receipt scanning with OCR',
        'Automatic categorization',
        'Budget tracking and alerts',
        'Tax preparation support',
        'Multi-currency support',
        'Export to accounting software'
      ],
      pricing: '$15/month',
      popular: false,
      link: '/micro-saas/ai-expense-tracker'
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: [
        'AI security scoring',
        'Breach monitoring',
        'Secure password generation',
        'Multi-device sync',
        'Two-factor authentication',
        'Emergency access'
      ],
      pricing: '$12/month',
      popular: false,
      link: '/micro-saas/ai-password-manager'
    },
    {
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates, payment tracking, and client management.',
      features: [
        'AI-generated templates',
        'Automatic payment tracking',
        'Client management system',
        'Multi-currency support',
        'Tax calculations',
        'PDF generation and email'
      ],
      pricing: '$25/month',
      popular: true,
      link: '/micro-saas/ai-invoice-generator'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business analytics with AI insights, custom reports, and real-time monitoring.',
      features: [
        'AI-powered insights',
        'Custom report builder',
        'Real-time monitoring',
        'Data visualization',
        'Export capabilities',
        'Team collaboration'
      ],
      pricing: '$35/month',
      popular: false,
      link: '/micro-saas/analytics-dashboard'
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
      title: 'AI Content Generator',
      description: 'AI-powered content creation for blogs, social media, emails, and marketing materials.',
      features: [
        'Multiple content types',
        'SEO optimization',
        'Brand voice training',
        'Plagiarism detection',
        'Multi-language support',
        'Content calendar'
      ],
      pricing: '$29/month',
      popular: false,
      link: '/micro-saas/content-generator'
    }
  ]

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Affordable Pricing',
      description: 'Start with low monthly costs and scale as your business grows'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Easy Setup',
      description: 'Get up and running in minutes with our intuitive setup process'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence for smarter, more efficient operations'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock support to help you succeed with our tools'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$9',
      period: 'month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Access to 3 micro SAAS tools',
        'Basic AI features',
        'Email support',
        '5GB storage',
        'Mobile apps included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$29',
      period: 'month',
      description: 'Ideal for growing businesses',
      features: [
        'Access to all micro SAAS tools',
        'Advanced AI features',
        'Priority support',
        '50GB storage',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited access to all tools',
        'Custom AI training',
        'Dedicated support',
        'Unlimited storage',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful, affordable micro SAAS applications designed to solve specific business problems with AI intelligence." />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-900 via-blue-900 to-green-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">SAAS</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, affordable micro applications designed to solve specific business problems with AI intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Micro SAAS Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered micro applications designed for modern businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 relative ${service.popular ? 'ring-2 ring-green-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      {service.pricing}
                    </div>
                    <Link 
                      to={service.link} 
                      className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible pricing plans designed to fit your business needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-1">
                        /{plan.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine affordability with powerful AI technology to deliver solutions that actually work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Start with our micro SAAS solutions and see the difference AI can make in your daily operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default MicroSaasServicesPage