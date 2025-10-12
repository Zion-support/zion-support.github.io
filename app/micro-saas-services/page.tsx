import React from 'react';
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, Clock, DollarSign, Zap, Star, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, deadline tracking, and productivity insights.',
      features: [
        'AI-powered task prioritization',
        'Smart deadline reminders',
        'Team collaboration tools',
        'Productivity analytics',
        'Mobile app included',
        'Calendar integration'
      ],
      pricing: '$19/month',
      popular: true,
      link: '/ai-task-manager',
      category: 'Productivity'
    },
    {
      icon: <Database className="w-12 h-12 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with receipt scanning, categorization, and financial insights powered by AI.',
      features: [
        'Receipt scanning with OCR',
        'Automatic categorization',
        'Expense analytics',
        'Tax preparation tools',
        'Multi-currency support',
        'Export to accounting software'
      ],
      pricing: '$15/month',
      popular: false,
      link: '/ai-expense-tracker',
      category: 'Finance'
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: [
        'Secure password generation',
        'Breach monitoring',
        'Security score analysis',
        'Multi-device sync',
        'Two-factor authentication',
        'Family sharing'
      ],
      pricing: '$12/month',
      popular: false,
      link: '/ai-password-manager',
      category: 'Security'
    },
    {
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates, payment tracking, and client management.',
      features: [
        'AI-generated templates',
        'Payment tracking',
        'Client management',
        'Tax calculations',
        'Multi-currency support',
        'Automated reminders'
      ],
      pricing: '$25/month',
      popular: true,
      link: '/ai-invoice-generator',
      category: 'Business'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, symptom tracking, and wellness recommendations.',
      features: [
        'Symptom tracking',
        'Health analytics',
        'Medication reminders',
        'Wellness recommendations',
        'Doctor visit preparation',
        'Health goal tracking'
      ],
      pricing: '$18/month',
      popular: false,
      link: '/ai-health-tracker',
      category: 'Health'
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking.',
      features: [
        'AI scheduling suggestions',
        'Meeting optimization',
        'Time blocking',
        'Conflict resolution',
        'Team coordination',
        'Integration with tools'
      ],
      pricing: '$16/month',
      popular: false,
      link: '/ai-smart-calendar',
      category: 'Productivity'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive onboarding process'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and technical assistance'
    }
  ];

  const categories = ['All', 'Productivity', 'Finance', 'Security', 'Business', 'Health'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful, affordable micro applications designed to solve specific business problems with AI intelligence." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Micro SAAS <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Applications</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Powerful, affordable micro applications designed to solve specific business problems with AI intelligence. 
              Start small, scale big with our suite of specialized tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Micro SAAS Applications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our collection of specialized micro applications, each designed to solve a specific business challenge
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-green-500 mr-1" />
                    <span className="text-2xl font-bold text-gray-900">{service.pricing}</span>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Try Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Micro SAAS?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Small applications, big impact. Our micro SAAS solutions are designed for maximum efficiency and ease of use.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Affordable Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start with individual apps or bundle them for maximum savings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Individual App</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">$12-25</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Single application access
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Full feature set
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Email support
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Choose App
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Best Value
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bundle Pack</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">$89</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  All 6 applications
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Advanced analytics
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Get Bundle
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">Custom</span>
                <span className="text-gray-600"> pricing</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  All applications
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  White-label options
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Custom development
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Boost Your Productivity?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Start with one app or get the complete bundle. Transform your workflow with our AI-powered micro applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/about"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasServicesPage;