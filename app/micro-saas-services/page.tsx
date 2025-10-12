import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
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
      icon: <DollarSign className="w-12 h-12 text-green-500" />,
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
        'Security recommendations',
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
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking.',
      features: [
        'AI-powered scheduling',
        'Meeting optimization',
        'Time blocking',
        'Smart reminders',
        'Team coordination',
        'Integration with all major calendars'
      ],
      pricing: '$18/month',
      popular: true,
      link: '/ai-smart-calendar',
      category: 'Productivity'
    },
    {
      icon: <Users className="w-12 h-12 text-pink-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, goal tracking, and wellness recommendations.',
      features: [
        'Health data tracking',
        'AI wellness insights',
        'Goal setting & tracking',
        'Medication reminders',
        'Health reports',
        'Doctor integration'
      ],
      pricing: '$16/month',
      popular: false,
      link: '/ai-health-tracker',
      category: 'Health'
    },
    {
      icon: <Star className="w-12 h-12 text-yellow-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates, payment tracking, and client management.',
      features: [
        'AI-generated invoices',
        'Payment tracking',
        'Client management',
        'Tax calculations',
        'Multi-currency support',
        'Automated reminders'
      ],
      pricing: '$14/month',
      popular: false,
      link: '/ai-invoice-generator',
      category: 'Business'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Choose Your Tool',
      description: 'Select from our range of AI-powered micro-SaaS tools that fit your needs.'
    },
    {
      step: '02',
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive setup process and guided onboarding.'
    },
    {
      step: '03',
      title: 'Start Using',
      description: 'Begin using your new tool immediately with full access to all features.'
    },
    {
      step: '04',
      title: 'Scale & Grow',
      description: 'Upgrade as your needs grow with flexible pricing and additional features.'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Instant Access',
      description: 'Get started immediately with no complex setup or installation required.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'Affordable Pricing',
      description: 'Cost-effective solutions starting from just $12/month with no hidden fees.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for all services.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock support to help you get the most out of your tools.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro-SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro-SaaS tools powered by AI. Task management, expense tracking, password management, and more." />
        <meta name="keywords" content="micro-saas, AI tools, productivity, task management, expense tracking, password manager" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro-SaaS Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, AI-powered micro-SaaS tools designed to boost your productivity and streamline your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* Micro-SaaS Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  <Link 
                    to={service.link}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center"
                  >
                    Try Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Micro-SaaS Tools?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the power of AI-driven productivity tools designed for modern professionals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get started with our micro-SaaS tools in just a few simple steps.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start using our AI-powered micro-SaaS tools today and experience the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Free Trial
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MicroSaasServicesPage;