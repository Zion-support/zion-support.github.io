import React from 'react';
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, MessageCircle, Zap, DollarSign, Users, Clock, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function MicroSaasServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automated scheduling.',
      features: ['Smart task prioritization', 'Automated scheduling', 'Progress tracking', 'Team collaboration', 'Deadline management', 'Productivity insights'],
      price: '$19/month',
      link: '/ai-task-manager',
      popular: true
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning and intelligent categorization.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget alerts', 'Tax preparation', 'Expense reports', 'Multi-currency support'],
      price: '$15/month',
      link: '/ai-expense-tracker',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Secure storage', 'Password generation', 'Security alerts', 'Multi-device sync', 'Breach monitoring', 'Two-factor authentication'],
      price: '$12/month',
      link: '/ai-password-manager',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates and payment tracking.',
      features: ['Auto-invoice generation', 'Payment tracking', 'Custom templates', 'Tax calculations', 'Client management', 'Recurring billing'],
      price: '$25/month',
      link: '/ai-invoice-generator',
      popular: true
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights and wellness recommendations.',
      features: ['Health metrics tracking', 'AI insights', 'Wellness recommendations', 'Goal setting', 'Progress monitoring', 'Health reports'],
      price: '$18/month',
      link: '/ai-health-tracker',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI-powered scheduling optimization.',
      features: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync', 'Conflict resolution', 'Availability sharing'],
      price: '$22/month',
      link: '/ai-smart-calendar',
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Content Writer',
      description: 'AI-powered content creation for blogs, social media, and marketing materials.',
      features: ['Content generation', 'SEO optimization', 'Brand voice training', 'Multi-language support', 'Plagiarism detection', 'Content scheduling'],
      price: '$29/month',
      link: '/ai-content-writer',
      popular: true
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: 'AI Lead Generator',
      description: 'Automated lead discovery and qualification with CRM integration.',
      features: ['Lead discovery', 'Qualification scoring', 'CRM integration', 'Follow-up automation', 'Contact enrichment', 'Lead nurturing'],
      price: '$39/month',
      link: '/ai-lead-generator',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Affordable Solutions',
      description: 'Get powerful AI-powered tools at fraction of the cost of enterprise solutions.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Easy Setup',
      description: 'Quick and easy setup with no technical expertise required.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable',
      description: 'Start small and scale up as your business grows.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Regular Updates',
      description: 'Continuous improvements and new features added regularly.'
    }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: ['1 AI tool', 'Basic support', 'Standard features', 'Email support'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: ['3 AI tools', 'Priority support', 'Advanced features', 'Phone & email support'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$59',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: ['All AI tools', '24/7 support', 'Custom features', 'Dedicated account manager'],
      popular: false
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50+', label: 'AI Tools' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful, affordable micro applications designed to solve specific business problems with AI intelligence." />
        <meta name="keywords" content="micro saas, ai tools, business software, productivity, automation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Micro SAAS Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, affordable micro applications designed to solve specific business problems with AI intelligence.
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

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Micro SAAS Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized tools that solve specific business challenges with the power of AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-600 font-semibold mb-4">{service.price}</div>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Micro SAAS?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of our specialized micro applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include our core features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Start using our AI-powered micro applications today and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}