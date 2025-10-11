import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASServicesPage: React.FC = () => {
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
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, goal tracking, and wellness recommendations.',
      features: ['Health monitoring', 'AI insights', 'Goal tracking', 'Wellness recommendations'],
      pricing: '$18/month',
      link: '/ai-health-tracker',
      popular: false,
      users: '720+',
      rating: '4.6'
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking.',
      features: ['AI scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync'],
      pricing: '$22/month',
      link: '/ai-smart-calendar',
      popular: false,
      users: '1,100+',
      rating: '4.8'
    }
  ];

  const benefits = [
    {
      title: 'Affordable Pricing',
      description: 'Start with low-cost plans and scale as you grow',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Quick Setup',
      description: 'Get up and running in minutes, not weeks',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence for better results',
      icon: <Star className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Growing Community',
      description: 'Join thousands of satisfied users worldwide',
      icon: <Users className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Affordable micro SaaS solutions powered by AI. Task management, expense tracking, password management, and more." />
        <meta name="keywords" content="micro SaaS, AI tools, task management, expense tracking, productivity, affordable software" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Micro
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}SaaS Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Affordable, AI-powered micro SaaS solutions designed to solve specific business problems with minimal complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SaaS Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Micro SaaS Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our collection of focused, AI-powered micro SaaS solutions designed for specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAAS.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {service.pricing}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 mr-1" />
                      <span className="text-gray-600 font-semibold">{service.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{service.users} users</p>
                </div>

                <Link
                  to={service.link}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Try Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Micro SaaS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Micro SaaS solutions offer focused functionality with minimal complexity and maximum value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Try Our Micro SaaS Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start with a free trial and experience the power of focused, AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASServicesPage;