import React from 'react';
import { CheckCircle, Smartphone, Zap, DollarSign, Users, Shield, BarChart, ArrowRight, Brain, CreditCard, Calendar, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasServices: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automation.',
      price: '$12.99/month',
      features: ['AI Prioritization', 'Smart Scheduling', 'Team Collaboration', 'Progress Tracking'],
      link: '/ai-task-manager'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-400" />,
      title: 'AI Expense Tracker',
      description: 'Automatically track and categorize expenses with AI-powered receipt scanning.',
      price: '$9.99/month',
      features: ['Receipt Scanning', 'Auto-Categorization', 'Real-time Analytics', 'Tax Preparation'],
      link: '/ai-expense-tracker'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      price: '$7.99/month',
      features: ['Secure Storage', 'Password Generation', 'Security Alerts', 'Multi-Device Sync'],
      link: '/ai-password-manager'
    },
    {
      icon: <Mail className="w-8 h-8 text-orange-400" />,
      title: 'AI Invoice Generator',
      description: 'Create professional invoices automatically with AI-powered templates.',
      price: '$15.99/month',
      features: ['Auto-Generation', 'Custom Templates', 'Payment Tracking', 'Tax Calculations'],
      link: '/ai-invoice-generator'
    },
    {
      icon: <Calendar className="w-8 h-8 text-red-400" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI-powered scheduling optimization.',
      price: '$11.99/month',
      features: ['Smart Scheduling', 'Meeting Optimization', 'Conflict Resolution', 'Time Blocking'],
      link: '/ai-smart-calendar'
    },
    {
      icon: <BarChart className="w-8 h-8 text-yellow-400" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI-powered insights and recommendations.',
      price: '$8.99/month',
      features: ['Health Monitoring', 'AI Insights', 'Goal Tracking', 'Wellness Tips'],
      link: '/ai-health-tracker'
    }
  ];

  const benefits = [
    {
      title: 'Affordable Pricing',
      description: 'Start with low-cost solutions that scale with your business',
      icon: <DollarSign className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Quick Setup',
      description: 'Get up and running in minutes, not months',
      icon: <Zap className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'No Technical Expertise',
      description: 'User-friendly interfaces that anyone can use',
      icon: <Users className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow from individual use to enterprise deployment',
      icon: <BarChart className="w-6 h-6 text-orange-400" />
    },
    {
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime',
      icon: <Shield className="w-6 h-6 text-red-400" />
    },
    {
      title: 'Mobile-First',
      description: 'Access your tools anywhere with native mobile apps',
      icon: <Smartphone className="w-6 h-6 text-yellow-400" />
    }
  ];

  const useCases = [
    {
      title: 'Freelancers',
      description: 'Manage projects, track time, and handle invoicing',
      example: 'Increase productivity by 40% with automated workflows'
    },
    {
      title: 'Small Businesses',
      description: 'Streamline operations without breaking the budget',
      example: 'Reduce operational costs by 60% with smart automation'
    },
    {
      title: 'Remote Teams',
      description: 'Collaborate effectively across different time zones',
      example: 'Improve team coordination by 50% with AI-powered tools'
    },
    {
      title: 'Solo Entrepreneurs',
      description: 'Run your business efficiently with minimal overhead',
      example: 'Scale your business 3x faster with intelligent automation'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$5-15',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        '1-3 tools included',
        'Basic AI features',
        'Email support',
        'Mobile app access',
        'Standard security'
      ]
    },
    {
      name: 'Professional',
      price: '$25-50',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        '5-10 tools included',
        'Advanced AI features',
        'Priority support',
        'Team collaboration',
        'Enhanced security',
        'API access'
      ]
    },
    {
      name: 'Business',
      price: '$75-150',
      period: '/month',
      description: 'For growing companies',
      features: [
        'Unlimited tools',
        'Premium AI features',
        '24/7 support',
        'Custom integrations',
        'White-label options',
        'Dedicated account manager'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Affordable micro SaaS solutions for individuals and small businesses. AI-powered tools starting at $5/month." />
        <meta name="keywords" content="micro SaaS, small business tools, AI tools, productivity software, affordable software" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Micro SaaS Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Affordable, AI-powered micro SaaS solutions designed for individuals, freelancers, and small businesses. 
              Get professional tools without the enterprise price tag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Browse Tools
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Micro SaaS Services Grid */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Micro SaaS Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <p className="text-purple-300 font-semibold mb-4">{service.price}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.link}
                    className="text-purple-400 hover:text-purple-300 font-medium flex items-center group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose Micro SaaS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    {benefit.icon}
                    <h3 className="text-lg font-semibold text-white ml-3">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-3">{useCase.description}</p>
                  <p className="text-sm text-purple-300 italic">{useCase.example}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Flexible Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-300 ml-1">{tier.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-gray-900">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start with our micro SaaS tools and see how AI can transform your daily workflow. 
                No long-term commitments, cancel anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Us
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSaasServices;
