import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, Clock, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3732

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization and automation.',
      features: ['Smart task prioritization', 'AI scheduling', 'Team collaboration', 'Progress tracking'],
      pricing: '$19/month',
      duration: 'Instant setup',
      popular: true
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning and categorization.',
      features: ['Receipt scanning', 'Auto categorization', 'Budget alerts', 'Tax reporting'],
      pricing: '$15/month',
      duration: 'Instant setup',
      popular: true
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Advanced password management with AI-powered security recommendations and breach monitoring.',
      features: [
        'AI security scoring',
        'Breach monitoring',
        'Password generation',
        'Secure sharing',
        'Multi-device sync',
        'Two-factor authentication'
      ],
=======
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: ['Secure storage', 'Password generation', 'Breach monitoring', 'Multi-device sync'],
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
=======
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Secure storage', 'Password generation', 'Security audit', 'Multi-device sync'],
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
      pricing: '$12/month',
      duration: 'Instant setup',
      popular: false
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Code className="w-12 h-12 text-orange-500" />,
=======
      icon: <Code className="w-8 h-8 text-orange-500" />,
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates and customization.',
      features: ['Auto generation', 'Custom templates', 'Payment tracking', 'Tax calculations'],
      pricing: '$25/month',
      duration: 'Instant setup',
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: 'AI Social Media Manager',
      description: 'Automated social media posting and engagement with AI content suggestions.',
      features: ['Auto posting', 'Content suggestions', 'Engagement tracking', 'Multi-platform'],
      pricing: '$29/month',
      duration: 'Instant setup',
      popular: false
    },
    {
<<<<<<< HEAD
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Analytics Dashboard',
      description: 'Get actionable insights from your data with beautiful, customizable dashboards.',
      features: ['Real-time analytics', 'Custom dashboards', 'Data visualization', 'Automated reports'],
      pricing: '$49/month',
      link: '/analytics-dashboard',
      popular: true,
      duration: '1-2 weeks'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Email Assistant',
      description: 'Automate your email marketing with AI-powered personalization and optimization.',
      features: ['Email templates', 'A/B testing', 'Personalization', 'Analytics tracking'],
      pricing: '$39/month',
      link: '/email-assistant',
      popular: false,
      duration: '1 week'
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Lead Generation',
      description: 'Find and qualify leads automatically with our AI-powered lead generation system.',
      features: ['Lead scoring', 'Contact enrichment', 'CRM integration', 'Follow-up automation'],
      pricing: '$59/month',
      link: '/lead-generation',
      popular: false,
      duration: '2-3 weeks'
=======
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with smart templates, payment tracking, and financial analytics.',
      features: ['Smart templates', 'Auto calculations', 'Payment tracking', 'Client management'],
      pricing: '$25/month',
      link: '/ai-invoice-generator',
      popular: false,
      users: '420+',
      rating: '4.6'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, goal tracking, and wellness recommendations.',
      features: ['Health monitoring', 'Goal tracking', 'AI insights', 'Wellness tips'],
      pricing: '$18/month',
      link: '/ai-health-tracker',
      popular: false,
      users: '380+',
      rating: '4.5'
    },
    {
      icon: <Star className="w-8 h-8 text-indigo-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking.',
      features: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync'],
      pricing: '$22/month',
      link: '/ai-smart-calendar',
      popular: false,
<<<<<<< HEAD
      users: '290+',
      rating: '4.4'
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
=======
      users: '1,100+',
      rating: '4.8'
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
=======
      icon: <Globe className="w-8 h-8 text-yellow-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business analytics with AI-powered insights and predictions.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reports'],
      pricing: '$35/month',
      duration: 'Instant setup',
      popular: false
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Affordable Pricing',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Start from just $29/month with no setup fees',
=======
      description: 'Start with low-cost plans and scale as you grow',
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Quick Setup',
<<<<<<< HEAD
      description: 'Get up and running in minutes, not months',
=======
      description: 'Start from just $12/month with no setup fees or long-term contracts',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Instant Setup',
      description: 'Get started in minutes with our easy-to-use interface',
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence to automate and optimize your workflows',
      icon: <Brain className="w-6 h-6 text-purple-500" />
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Apps' },
    { number: '1000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
=======
      description: 'Powerful tools at micro-SaaS prices, perfect for small businesses and individuals.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Easy Setup',
      description: 'Get started in minutes with our intuitive setup process and guided onboarding.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence to automate tasks and gain valuable insights.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'Regular Updates',
      description: 'Continuous improvements and new features based on user feedback and needs.'
    }
  ];

  const stats = [
    { number: '4,000+', label: 'Active Users' },
    { number: '15+', label: 'Micro SAAS Apps' },
    { number: '4.7', label: 'Average Rating' },
    { number: '99.9%', label: 'Uptime' }
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
  ];

=======
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

>>>>>>> cursor/fix-errors-and-merge-to-main-9603
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
<<<<<<< HEAD
        <title>Micro SAAS Services - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <meta name="description" content="Powerful AI-driven micro software solutions designed to streamline your business operations and boost productivity. Affordable, intelligent tools for modern businesses." />
        <meta name="keywords" content="micro saas, AI tools, productivity software, business automation, AI applications" />
=======
        <meta name="description" content="Powerful, affordable micro applications designed to solve specific business problems with AI intelligence. Start from $12/month." />
        <meta name="keywords" content="micro saas, saas applications, business automation, AI tools, productivity apps" />
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
      </Helmet>
      
      <Navigation />
      
<<<<<<< HEAD
      <main className="pt-20 px-4 py-20">
=======
        <meta name="description" content="Powerful micro SAAS applications designed to streamline your business operations. Affordable, easy-to-use solutions for modern businesses." />
        <meta name="keywords" content="micro saas, saas applications, business tools, productivity, automation" />
=======
        <meta name="description" content="Powerful AI-driven micro software solutions designed to streamline your business operations and boost productivity. Affordable tools for modern businesses." />
        <meta name="keywords" content="micro SAAS, AI tools, productivity apps, business automation, task management, expense tracking" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
=======
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Affordable micro SaaS solutions powered by AI. Task management, expense tracking, password management, and more." />
        <meta name="keywords" content="micro SaaS, AI tools, task management, expense tracking, productivity, affordable software" />
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
      </Helmet>

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Micro SAAS Applications
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
<<<<<<< HEAD
              Powerful, affordable micro applications designed to solve specific business problems and boost productivity.
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
=======
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Powerful AI-driven micro software solutions designed to streamline your business operations and boost productivity. 
              Affordable tools for modern businesses.
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
=======
              Powerful, affordable micro applications designed to solve specific business problems with AI intelligence.
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                Get Started Today
=======
                Get Started
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
=======
                Start Free Trial
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
<<<<<<< HEAD
<<<<<<< HEAD
                Explore AI Services
=======
                View All AI Services
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
=======
                Learn More
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
              </Link>
            </div>
          </div>

          {/* Stats Section */}
<<<<<<< HEAD
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
=======
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Micro SAAS Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Micro SAAS Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
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
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <Link 
                      to={service.link}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Try Free
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Simple Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-white mb-6">$12<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    1 Micro SAAS App
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic AI Features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Mobile App Access
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  Get Started
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-white mb-6">$29<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 5 Micro SAAS Apps
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced AI Features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Team Collaboration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    API Access
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center block"
                >
                  Get Started
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-white mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited Micro SAAS Apps
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Premium AI Features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 Phone Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom Integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated Account Manager
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Micro SAAS Applications</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose from our collection of AI-powered micro applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
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
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
=======
      {/* Micro SAAS Apps Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Micro SAAS Apps</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose from our collection of AI-powered micro applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {microSAAS.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                {app.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
                      Popular
                    </div>
                  </div>
                )}
<<<<<<< HEAD
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{app.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{app.title}</h3>
                <p className="text-gray-300 mb-6">{app.description}</p>
=======
                
                <div className="mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                </div>

>>>>>>> cursor/fix-errors-and-merge-to-main-9603
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-white">{app.pricing}</div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {app.rating}
                    <span className="ml-2">({app.users} users)</span>
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
                </div>
                <div className="text-sm text-gray-400 mb-6">{service.duration}</div>
                <Link 
<<<<<<< HEAD
<<<<<<< HEAD
                  to={service.link}
=======
                  to="/contact"
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Get Started
=======
                  to={app.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Try Now
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
                  <ArrowRight className="w-4 h-4 ml-2" />
=======

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
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-12 sm:py-16 lg:py-20 px-4">
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <div className="text-center mb-16">
<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Micro SAAS?</h2>
=======
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Our Micro SAAS?</h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We make powerful business tools accessible and affordable for everyone
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
=======
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Experience the benefits of our AI-powered micro applications
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
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
=======
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Micro SaaS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Micro SaaS solutions offer focused functionality with minimal complexity and maximum value.
            </p>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of AI-driven micro SAAS solutions.
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Boost Your Productivity?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
<<<<<<< HEAD
                Start using our micro SAAS applications today and see the difference they can make.
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
=======
      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start using our AI-powered micro SAAS tools today and transform how you work.
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
=======
                Start your free trial today and experience the power of AI-driven micro applications.
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
<<<<<<< HEAD
<<<<<<< HEAD
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
<<<<<<< HEAD
                  Learn More
=======
                  View All Services
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
=======
                  to="/it-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore IT Services
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
=======
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore AI Services
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
                </Link>
              </div>
            </div>
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default MicroSaasServicesPage;
=======
export default MicroSaasServicesPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
=======
export default MicroSAASServicesPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
=======
export default MicroSAASServicesPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
=======
export default MicroSaasServicesPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-3732
