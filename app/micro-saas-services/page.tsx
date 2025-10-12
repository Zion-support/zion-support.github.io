import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Database, Smartphone, Globe, BarChart3, Cog, Cpu } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, deadline tracking, productivity insights, and team collaboration features.',
      features: [
        'AI-powered task prioritization and scheduling',
        'Smart deadline reminders and notifications',
        'Team collaboration and project management',
        'Productivity analytics and insights',
        'Mobile app for iOS and Android',
        'Calendar integration (Google, Outlook)',
        'Time tracking and reporting',
        'Custom workflows and automation'
      ],
      pricing: '$19/month',
      popular: true,
      link: '/ai-task-manager',
      category: 'Productivity',
      marketPrice: '$39-79/month',
      setupTime: '5 minutes',
      users: '2,500+',
      rating: '4.8'
    },
    {
      icon: <Database className="w-12 h-12 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with receipt scanning, automatic categorization, financial insights, and tax preparation tools powered by AI.',
      features: [
        'Receipt scanning with OCR technology',
        'Automatic expense categorization',
        'Financial analytics and insights',
        'Tax preparation and reporting tools',
        'Multi-currency support (50+ currencies)',
        'Export to accounting software (QuickBooks, Xero)',
        'Expense approval workflows',
        'Real-time spending alerts'
      ],
      pricing: '$15/month',
      popular: false,
      link: '/ai-expense-tracker',
      category: 'Finance',
      marketPrice: '$29-59/month',
      setupTime: '2 minutes',
      users: '1,800+',
      rating: '4.6'
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Advanced password management with AI-powered security recommendations, breach monitoring, and secure sharing capabilities.',
      features: [
        'AI security scoring and recommendations',
        'Real-time breach monitoring',
        'Secure password generation',
        'Safe password sharing with team members',
        'Multi-device synchronization',
        'Two-factor authentication (2FA)',
        'Biometric authentication support',
        'Dark web monitoring'
      ],
      pricing: '$12/month',
      popular: true,
      link: '/ai-password-manager',
      category: 'Security',
      marketPrice: '$24-48/month',
      setupTime: '3 minutes',
      users: '3,200+',
      rating: '4.9'
    },
    {
      icon: <Cog className="w-12 h-12 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates, payment tracking, client management, and financial analytics.',
      features: [
        'AI-generated invoice templates',
        'Automated payment tracking',
        'Client management and CRM integration',
        'Tax calculations and compliance',
        'Multi-currency invoicing',
        'Automated payment reminders',
        'Financial reporting and analytics',
        'Custom branding and themes'
      ],
      pricing: '$25/month',
      popular: false,
      link: '/ai-invoice-generator',
      category: 'Business',
      marketPrice: '$49-99/month',
      setupTime: '10 minutes',
      users: '1,100+',
      rating: '4.5'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, symptom tracking, wellness recommendations, and doctor appointment scheduling.',
      features: [
        'Symptom tracking and analysis',
        'AI health insights and recommendations',
        'Medication reminders and tracking',
        'Wellness goal setting and monitoring',
        'Doctor appointment scheduling',
        'Health data export and sharing',
        'Integration with fitness trackers',
        'Privacy-focused data storage'
      ],
      pricing: '$18/month',
      popular: false,
      link: '/ai-health-tracker',
      category: 'Health',
      marketPrice: '$35-69/month',
      setupTime: '5 minutes',
      users: '950+',
      rating: '4.7'
    },
    {
      icon: <Globe className="w-12 h-12 text-yellow-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, time zone handling, and team coordination.',
      features: [
        'AI meeting scheduling and optimization',
        'Time zone coordination and management',
        'Meeting insights and analytics',
        'Team coordination and availability',
        'Integration with major calendar apps',
        'Smart notifications and reminders',
        'Conflict resolution and suggestions',
        'Custom scheduling rules and preferences'
      ],
      pricing: '$22/month',
      popular: true,
      link: '/ai-smart-calendar',
      category: 'Productivity',
      marketPrice: '$44-88/month',
      setupTime: '3 minutes',
      users: '1,600+',
      rating: '4.8'
    },
    {
      icon: <Clock className="w-12 h-12 text-indigo-500" />,
      title: 'AI Time Tracker',
      description: 'Advanced time tracking with AI-powered project analysis, productivity optimization, and team time reporting.',
      features: [
        'Automatic time tracking with AI',
        'Project analysis and insights',
        'Productivity optimization recommendations',
        'Team time reports and analytics',
        'Client billing integration',
        'Mobile time tracking app',
        'Idle time detection and alerts',
        'Custom reporting and exports'
      ],
      pricing: '$16/month',
      popular: false,
      link: '/ai-time-tracker',
      category: 'Productivity',
      marketPrice: '$32-64/month',
      setupTime: '2 minutes',
      users: '1,300+',
      rating: '4.6'
    },
    {
      icon: <DollarSign className="w-12 h-12 text-emerald-500" />,
      title: 'AI Budget Planner',
      description: 'Smart budget planning with AI-powered financial forecasting, spending optimization, and investment insights.',
      features: [
        'AI financial forecasting and predictions',
        'Spending optimization recommendations',
        'Goal tracking and milestone alerts',
        'Investment insights and suggestions',
        'Bill reminders and payment automation',
        'Financial reports and visualizations',
        'Expense categorization and analysis',
        'Savings goal tracking and planning'
      ],
      pricing: '$20/month',
      popular: false,
      link: '/ai-budget-planner',
      category: 'Finance',
      marketPrice: '$40-80/month',
      setupTime: '5 minutes',
      users: '1,400+',
      rating: '4.7'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-cyan-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Business analytics dashboard with AI-powered insights, custom reports, and real-time data visualization.',
      features: [
        'AI-powered business insights',
        'Custom dashboard creation',
        'Real-time data visualization',
        'Automated report generation',
        'Data integration from multiple sources',
        'Predictive analytics and forecasting',
        'Mobile app for on-the-go insights',
        'Team collaboration and sharing'
      ],
      pricing: '$35/month',
      popular: false,
      link: '/ai-analytics-dashboard',
      category: 'Analytics',
      marketPrice: '$70-140/month',
      setupTime: '15 minutes',
      users: '800+',
      rating: '4.5'
    },
    {
      icon: <Users className="w-12 h-12 text-pink-500" />,
      title: 'AI Customer Support',
      description: 'AI-powered customer support chatbot with natural language processing, ticket management, and knowledge base integration.',
      features: [
        'AI chatbot with natural language processing',
        'Ticket management and routing',
        'Knowledge base integration',
        'Multi-language support',
        'Customer satisfaction tracking',
        'Integration with popular platforms',
        'Analytics and performance insights',
        'Custom training and optimization'
      ],
      pricing: '$28/month',
      popular: false,
      link: '/ai-customer-support',
      category: 'Customer Service',
      marketPrice: '$56-112/month',
      setupTime: '20 minutes',
      users: '650+',
      rating: '4.4'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Affordable Pricing',
      description: 'Powerful tools at micro-SaaS prices, perfect for small businesses and individuals. Start from just $12/month.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Easy Setup',
      description: 'Get started in minutes with our intuitive setup process and guided onboarding. No technical expertise required.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence to automate tasks, gain valuable insights, and improve productivity.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'Regular Updates',
      description: 'Continuous improvements and new features based on user feedback and evolving business needs.'
    }
  ];

  const stats = [
    { number: '4,000+', label: 'Active Users' },
    { number: '15+', label: 'Micro SaaS Apps' },
    { number: '4.7', label: 'Average Rating' },
    { number: '99.9%', label: 'Uptime' }
  ];

  const categories = ['All', 'Productivity', 'Finance', 'Security', 'Business', 'Health', 'Analytics', 'Customer Service'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

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

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
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
            {filteredServices.map((service, index) => (
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
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {service.pricing}
                    </span>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Market Price</div>
                      <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                    <span>Setup: {service.setupTime}</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {service.category}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span>{service.rating}</span>
                    </div>
                    <span>{service.users} users</span>
                  </div>
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

      <Footer />
    </div>
  );
};

export default MicroSaasServicesPage;
