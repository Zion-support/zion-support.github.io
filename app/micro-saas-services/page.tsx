import React from 'react';
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, DollarSign, Star, Clock, Users, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, deadline tracking, and productivity insights.',
      features: ['AI task prioritization', 'Smart scheduling', 'Team collaboration', 'Progress analytics', 'Deadline alerts', 'Productivity reports'],
      pricing: '$19/month',
      link: '/ai-task-manager',
      popular: true,
      category: 'Productivity',
      setupTime: '5 minutes'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with receipt scanning, categorization, and budget management powered by AI.',
      features: ['Receipt scanning', 'Auto categorization', 'Budget alerts', 'Tax preparation', 'Multi-currency', 'Export reports'],
      pricing: '$15/month',
      link: '/ai-expense-tracker',
      popular: false,
      category: 'Finance',
      setupTime: '2 minutes'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Advanced password management with AI-powered security recommendations and breach monitoring.',
      features: ['Password generation', 'Security scoring', 'Breach monitoring', '2FA management', 'Secure sharing', 'Dark web scanning'],
      pricing: '$12/month',
      link: '/ai-password-manager',
      popular: false,
      category: 'Security',
      setupTime: '3 minutes'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates, payment tracking, and client management.',
      features: ['Auto invoice generation', 'Payment tracking', 'Client management', 'Tax calculations', 'Recurring billing', 'Payment reminders'],
      pricing: '$25/month',
      link: '/ai-invoice-generator',
      popular: true,
      category: 'Business',
      setupTime: '10 minutes'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, medication reminders, and wellness recommendations.',
      features: ['Health metrics tracking', 'Medication reminders', 'AI health insights', 'Doctor appointments', 'Wellness tips', 'Health reports'],
      pricing: '$18/month',
      link: '/ai-health-tracker',
      popular: false,
      category: 'Health',
      setupTime: '5 minutes'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking.',
      features: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Conflict resolution', 'Travel time calculation', 'Team coordination'],
      pricing: '$22/month',
      link: '/ai-smart-calendar',
      popular: false,
      category: 'Productivity',
      setupTime: '3 minutes'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with AI-powered sorting, auto-responses, and priority filtering.',
      features: ['Smart email sorting', 'Auto responses', 'Priority filtering', 'Spam detection', 'Email templates', 'Follow-up reminders'],
      pricing: '$16/month',
      link: '/ai-email-assistant',
      popular: false,
      category: 'Communication',
      setupTime: '5 minutes'
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: 'AI CRM Assistant',
      description: 'Customer relationship management with AI-powered lead scoring, follow-up suggestions, and sales insights.',
      features: ['Lead scoring', 'Follow-up suggestions', 'Sales insights', 'Customer segmentation', 'Pipeline management', 'Performance analytics'],
      pricing: '$35/month',
      link: '/ai-crm-assistant',
      popular: true,
      category: 'Sales',
      setupTime: '15 minutes'
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: 'AI Time Tracker',
      description: 'Intelligent time tracking with AI-powered project analysis, productivity insights, and billing automation.',
      features: ['Automatic time tracking', 'Project analysis', 'Productivity insights', 'Billing automation', 'Team monitoring', 'Detailed reports'],
      pricing: '$20/month',
      link: '/ai-time-tracker',
      popular: false,
      category: 'Productivity',
      setupTime: '2 minutes'
    },
    {
      icon: <Database className="w-8 h-8 text-teal-500" />,
      title: 'AI Data Analyzer',
      description: 'Simple data analysis tool with AI-powered insights, visualization, and automated reporting.',
      features: ['Data import/export', 'AI insights', 'Auto visualization', 'Report generation', 'Trend analysis', 'Custom dashboards'],
      pricing: '$28/month',
      link: '/ai-data-analyzer',
      popular: false,
      category: 'Analytics',
      setupTime: '10 minutes'
    },
    {
      icon: <Shield className="w-8 h-8 text-amber-500" />,
      title: 'AI Backup Manager',
      description: 'Intelligent backup solution with AI-powered file organization, version control, and recovery optimization.',
      features: ['Auto backup scheduling', 'File organization', 'Version control', 'Recovery optimization', 'Cloud sync', 'Security encryption'],
      pricing: '$14/month',
      link: '/ai-backup-manager',
      popular: false,
      category: 'Storage',
      setupTime: '5 minutes'
    },
    {
      icon: <Globe className="w-8 h-8 text-emerald-500" />,
      title: 'AI Website Monitor',
      description: 'Website monitoring with AI-powered uptime tracking, performance analysis, and alert management.',
      features: ['Uptime monitoring', 'Performance analysis', 'Alert management', 'SLA tracking', 'Incident reports', 'Multi-site support'],
      pricing: '$17/month',
      link: '/ai-website-monitor',
      popular: false,
      category: 'Monitoring',
      setupTime: '3 minutes'
    }
  ];

  const categories = ['All', 'Productivity', 'Finance', 'Security', 'Business', 'Health', 'Communication', 'Sales', 'Analytics', 'Storage', 'Monitoring'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Instant Setup',
      description: 'Get started in minutes with our one-click setup process and intuitive interfaces.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'AI-Powered',
      description: 'All our micro SAAS tools are enhanced with artificial intelligence for better performance.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'Affordable Pricing',
      description: 'Professional-grade tools at micro SAAS prices, starting from just $12/month.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'No Contracts',
      description: 'Cancel anytime with no long-term commitments or hidden fees.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Tools' },
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SAAS applications designed to solve specific business problems with AI intelligence. Affordable, easy-to-use tools for modern businesses." />
        <meta name="keywords" content="micro saas, saas tools, business software, productivity tools, AI applications, small business software" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Powerful, affordable micro applications designed to solve specific business problems with AI intelligence. 
              Get professional-grade tools without the complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Explore AI Services
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Micro SAAS Tools</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose from our comprehensive collection of AI-powered micro applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-white">{service.pricing}</div>
                  <div className="text-sm text-gray-400">Setup: {service.setupTime}</div>
                </div>
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Try Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS Tools?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Experience the power of focused, AI-enhanced business applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start your free trial today and discover how our micro SAAS tools can transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/it-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View IT Services
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
