import React from 'react';
import { CheckCircle, ArrowRight, Brain, BarChart3, Lock, FileText, Globe, Settings, Smartphone, DollarSign, Star, Clock, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Settings className="w-12 h-12 text-blue-500" />,
      title: 'AI Smart Scheduler',
      description: 'Revolutionary AI-powered scheduling tool that optimizes your calendar, manages time zones, and coordinates team meetings automatically.',
      features: [
        'Intelligent scheduling',
        'Time zone management',
        'Team coordination',
        'Smart notifications',
        'Calendar integration',
        'Mobile app access'
      ],
      pricing: '$9/month',
      popular: true,
      link: '/ai-smart-scheduler'
    },
    {
      icon: <FileText className="w-12 h-12 text-indigo-500" />,
      title: 'AI Document Analyzer',
      description: 'Advanced AI-powered document analysis tool that extracts insights, searches content, and processes documents automatically.',
      features: [
        'Multi-format support',
        'Intelligent search',
        'Data extraction',
        'Secure processing',
        'OCR technology',
        'API access'
      ],
      pricing: '$15/month',
      popular: false,
      link: '/ai-document-analyzer'
    },
    {
      icon: <Globe className="w-12 h-12 text-pink-500" />,
      title: 'AI Social Media Manager',
      description: 'Automate your social media presence with AI-powered content creation, scheduling, and analytics across all platforms.',
      features: [
        'Multi-platform management',
        'AI content generation',
        'Audience insights',
        'Performance analytics',
        'Scheduled posting',
        'Team collaboration'
      ],
      pricing: '$29/month',
      popular: false,
      link: '/ai-social-media-manager'
    },
    {
      icon: <Brain className="w-12 h-12 text-green-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management system that prioritizes, schedules, and optimizes your workflow using AI.',
      features: [
        'Smart prioritization',
        'Auto-scheduling',
        'Progress tracking',
        'Team collaboration',
        'Deadline alerts',
        'Productivity insights'
      ],
      pricing: '$12/month',
      popular: false,
      link: '/ai-task-manager'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with AI-powered categorization, receipt scanning, and financial insights.',
      features: [
        'Receipt scanning',
        'Auto-categorization',
        'Expense reports',
        'Budget tracking',
        'Tax preparation',
        'Mobile app'
      ],
      pricing: '$8/month',
      popular: false,
      link: '/ai-expense-tracker'
    },
    {
      icon: <Lock className="w-12 h-12 text-red-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security analysis and breach monitoring.',
      features: [
        'Secure storage',
        'Password generation',
        'Security analysis',
        'Breach monitoring',
        'Multi-device sync',
        'Two-factor auth'
      ],
      pricing: '$5/month',
      popular: false,
      link: '/ai-password-manager'
    }
  ];

  const benefits = [
    {
      title: 'Affordable Pricing',
      description: 'Start from just $5/month with no long-term contracts',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Easy Setup',
      description: 'Get started in minutes with our simple onboarding process',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI technology for better results',
      icon: <Star className="w-6 h-6 text-purple-500" />
    },
    {
      title: '24/7 Support',
      description: 'Get help whenever you need it with our dedicated support team',
      icon: <Users className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful, affordable micro SAAS applications designed to solve specific business problems with AI intelligence. Start from $5/month." />
        <meta name="keywords" content="micro SAAS, AI applications, business tools, productivity software, affordable software, AI-powered tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Powerful, affordable micro applications designed to solve specific business problems with AI intelligence. Start from just $5/month.
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
                to="/ai-services"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                View AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Micro SAAS Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our collection of specialized AI-powered micro applications designed for specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
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
                  <div className="text-2xl font-bold text-gray-900">
                    {service.pricing}
                  </div>
                </div>

                <Link
                  to={service.link}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
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
              Why Choose Our Micro SAAS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of specialized AI applications designed for modern businesses.
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
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already using our micro SAAS applications to streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/ai-services"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasServicesPage;
