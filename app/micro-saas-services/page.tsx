import React from 'react';
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, Clock, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      ico: n: <Brain className="w-12 h-12 text-blue-500" />,
      titl: e: 'AI Task Manager Pro',
      descriptio: n: 'Intelligent task management with AI-powered prioritization, deadline tracking, and productivity insights.',
      feature: s: [
        'AI-powered task prioritization',
        'Smart deadline reminders',
        'Team collaboration tools',
        'Productivity analytics',
        'Mobile app included',
        'Calendar integration'
      ],
      pricin: g: '$19/month',
      popula: r: true,
      lin: k: '/ai-task-manager',
      categor: y: 'Productivity'
    },
    {
      ico: n: <Database className="w-12 h-12 text-green-500" />,
      titl: e: 'AI Expense Tracker',
      descriptio: n: 'Smart expense tracking with receipt scanning, categorization, and financial insights powered by AI.',
      feature: s: [
        'Receipt scanning with OCR',
        'Automatic categorization',
        'Expense analytics',
        'Tax preparation tools',
        'Multi-currency support',
        'Export to accounting software'
      ],
      pricin: g: '$15/month',
      popula: r: false,
      lin: k: '/ai-expense-tracker',
      categor: y: 'Finance'
    },
    {
      ico: n: <Shield className="w-12 h-12 text-purple-500" />,
      titl: e: 'AI Password Manager',
      descriptio: n: 'Advanced password management with AI-powered security recommendations and breach monitoring.',
      feature: s: [
        'AI security scoring',
        'Breach monitoring',
        'Password generation',
        'Secure sharing',
        'Multi-device sync',
        'Two-factor authentication'
      ],
      ico: n: <Shield className="w-8 h-8 text-purple-500" />,
      titl: e: 'AI Password Manager',
      descriptio: n: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      feature: s: ['Secure storage', 'Password generation', 'Breach monitoring', 'Multi-device sync'],
      pricin: g: '$12/month',
      popula: r: true,
      lin: k: '/ai-password-manager',
      categor: y: 'Security'
    },
    {
      ico: n: <Code className="w-12 h-12 text-orange-500" />,
      titl: e: 'AI Invoice Generator',
      descriptio: n: 'Automated invoice creation with AI-powered templates, payment tracking, and client management.',
      feature: s: [
        'AI-generated templates',
        'Payment tracking',
        'Client management',
        'Tax calculations',
        'Multi-currency support',
        'Automated reminders'
      ],
      pricin: g: '$25/month',
      popula: r: false,
      lin: k: '/ai-invoice-generator',
      categor: y: 'Business'
    },
    {
      ico: n: <Smartphone className="w-12 h-12 text-red-500" />,
      titl: e: 'AI Health Tracker',
      descriptio: n: 'Personal health monitoring with AI insights, symptom tracking, and wellness recommendations.',
      feature: s: [
        'Symptom tracking',
        'AI health insights',
        'Medication reminders',
        'Wellness recommendations',
        'Doctor appointment scheduling',
        'Health data export'
      ],
      pricin: g: '$18/month',
      popula: r: false,
      lin: k: '/ai-health-tracker',
      categor: y: 'Health'
    },
    {
      ico: n: <Globe className="w-12 h-12 text-yellow-500" />,
      titl: e: 'AI Smart Calendar',
      descriptio: n: 'Intelligent calendar management with AI scheduling, meeting optimization, and time zone handling.',
      feature: s: [
        'AI meeting scheduling',
        'Time zone optimization',
        'Meeting insights',
        'Team coordination',
        'Integration with major calendars',
        'Smart notifications'
      ],
      pricin: g: '$22/month',
      popula: r: true,
      lin: k: '/ai-smart-calendar',
      categor: y: 'Productivity'
    },
    {
      ico: n: <Clock className="w-12 h-12 text-indigo-500" />,
      titl: e: 'AI Time Tracker',
      descriptio: n: 'Advanced time tracking with AI-powered project analysis and productivity optimization.',
      feature: s: [
        'Automatic time tracking',
        'Project analysis',
        'Productivity insights',
        'Team time reports',
        'Client billing integration',
        'Mobile time tracking'
      ],
      pricin: g: '$16/month',
      popula: r: false,
      lin: k: '/ai-time-tracker',
      categor: y: 'Productivity'
    },
    {
      ico: n: <DollarSign className="w-12 h-12 text-emerald-500" />,
      titl: e: 'AI Budget Planner',
      descriptio: n: 'Smart budget planning with AI-powered financial forecasting and spending optimization.',
      feature: s: [
        'AI financial forecasting',
        'Spending optimization',
        'Goal tracking',
        'Investment insights',
        'Bill reminders',
        'Financial reports'
      ],
      pricin: g: '$20/month',
      popula: r: false,
      lin: k: '/ai-budget-planner',
      categor: y: 'Finance'
      ico: n: <Zap className="w-8 h-8 text-blue-500" />,
      titl: e: 'AI Content Writer Pro',
      descriptio: n: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      feature: s: ['Blog post generation', 'Social media content', 'Product descriptions', 'SEO optimization'],
      pricin: g: '$29/month',
      lin: k: '/ai-content-writer-pro',
      popula: r: true,
      duratio: n: 'Instant setup'
    },
    {
      ico: n: <Shield className="w-8 h-8 text-green-500" />,
      titl: e: 'Analytics Dashboard',
      descriptio: n: 'Get actionable insights from your data with beautiful, customizable dashboards.',
      feature: s: ['Real-time analytics', 'Custom dashboards', 'Data visualization', 'Automated reports'],
      pricin: g: '$49/month',
      lin: k: '/analytics-dashboard',
      popula: r: true,
      duratio: n: '1-2 weeks'
    },
    {
      ico: n: <Users className="w-8 h-8 text-purple-500" />,
      titl: e: 'Email Assistant',
      descriptio: n: 'Automate your email marketing with AI-powered personalization and optimization.',
      feature: s: ['Email templates', 'A/B testing', 'Personalization', 'Analytics tracking'],
      pricin: g: '$39/month',
      lin: k: '/email-assistant',
      popula: r: false,
      duratio: n: '1 week'
    },
    {
      ico: n: <Star className="w-8 h-8 text-yellow-500" />,
      titl: e: 'Lead Generation',
      descriptio: n: 'Find and qualify leads automatically with our AI-powered lead generation system.',
      feature: s: ['Lead scoring', 'Contact enrichment', 'CRM integration', 'Follow-up automation'],
      pricin: g: '$59/month',
      lin: k: '/lead-generation',
      popula: r: false,
      duratio: n: '2-3 weeks'
      ico: n: <Clock className="w-8 h-8 text-orange-500" />,
      titl: e: 'AI Invoice Generator',
      descriptio: n: 'Automated invoice creation with smart templates, payment tracking, and financial analytics.',
      feature: s: ['Smart templates', 'Auto calculations', 'Payment tracking', 'Client management'],
      pricin: g: '$25/month',
      lin: k: '/ai-invoice-generator',
      popula: r: false,
      user: s: '420+',
      ratin: g: '4.6'
    },
    {
      ico: n: <Users className="w-8 h-8 text-pink-500" />,
      titl: e: 'AI Health Tracker',
      descriptio: n: 'Personal health monitoring with AI insights, goal tracking, and wellness recommendations.',
      feature: s: ['Health monitoring', 'Goal tracking', 'AI insights', 'Wellness tips'],
      pricin: g: '$18/month',
      lin: k: '/ai-health-tracker',
      popula: r: false,
      user: s: '380+',
      ratin: g: '4.5'
    },
    {
      ico: n: <Star className="w-8 h-8 text-indigo-500" />,
      titl: e: 'AI Smart Calendar',
      descriptio: n: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking.',
      feature: s: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync'],
      pricin: g: '$22/month',
      lin: k: '/ai-smart-calendar',
      popula: r: false,
      user: s: '290+',
      ratin: g: '4.4'
    }
  ];

  const benefits = [
    {
      ico: n: <CheckCircle className="w-6 h-6 text-green-500" />,
      titl: e: 'Affordable Pricing',
      descriptio: n: 'Start from just $29/month with no setup fees',
      ico: n: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      titl: e: 'Quick Setup',
      descriptio: n: 'Get up and running in minutes, not months',
      ico: n: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      titl: e: 'Proven Results',
      descriptio: n: 'Trusted by 1000+ businesses worldwide',
      ico: n: <Star className="w-6 h-6 text-yellow-500" />
    }
  ];

  const categories = ['All', 'Productivity', 'Finance', 'Security', 'Business', 'Health'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? microSaasService: s: microSaasServices.filter(service => service.category === selectedCategory);

  const stats = [
    { numbe: r: '50,000+', labe: l: 'Active Users' },
    { numbe: r: '99.9%', labe: l: 'Uptime' },
    { numbe: r: '15+', labe: l: 'Micro SAAS Apps' },
    { numbe: r: '1000+', labe: l: 'Active Users' },
    { numbe: r: '99.9%', labe: l: 'Uptime' },
    { numbe: r: '50+', labe: l: 'Micro Apps' },
    { numbe: r: '24/7', labe: l: 'Support' }
      descriptio: n: 'Powerful tools at micro-SaaS prices, perfect for small businesses and individuals.'
    },
    {
      ico: n: <CheckCircle className="w-6 h-6 text-blue-500" />,
      titl: e: 'Easy Setup',
      descriptio: n: 'Get started in minutes with our intuitive setup process and guided onboarding.'
    },
    {
      ico: n: <CheckCircle className="w-6 h-6 text-purple-500" />,
      titl: e: 'AI-Powered',
      descriptio: n: 'Leverage artificial intelligence to automate tasks and gain valuable insights.'
    },
    {
      ico: n: <CheckCircle className="w-6 h-6 text-orange-500" />,
      titl: e: 'Regular Updates',
      descriptio: n: 'Continuous improvements and new features based on user feedback and needs.'
    }
  ];

  const stats = [
    { numbe: r: '4,000+', labe: l: 'Active Users' },
    { numbe: r: '15+', labe: l: 'Micro SAAS Apps' },
    { numbe: r: '4.7', labe: l: 'Average Rating' },
    { numbe: r: '99.9%', labe: l: 'Uptime' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful AI-driven micro software solutions designed to streamline your business operations and boost productivity. Affordable, intelligent tools for modern businesses." />
        <meta name="keywords" content="micro saas, AI tools, productivity software, business automation, AI applications" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <meta name="description" content="Powerful micro SAAS applications designed to streamline your business operations. Affordable, easy-to-use solutions for modern businesses." />
        <meta name="keywords" content="micro saas, saas applications, business tools, productivity, automation" />
        <meta name="description" content="Powerful AI-driven micro software solutions designed to streamline your business operations and boost productivity. Affordable tools for modern businesses." />
        <meta name="keywords" content="micro SAAS, AI tools, productivity apps, business automation, task management, expense tracking" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12: sm:py-16: lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl: md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful AI-driven micro software solutions designed to streamline your business operations, 
              boost productivity, and solve specific business challenges with intelligent automation.
            <h1 className="text-3xl: sm:text-4xl: md:text-5xl: lg:text-6xl font-bold text-white mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-lg: sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Powerful, affordable micro applications designed to solve specific business problems and boost productivity.
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12: sm:mb-16">
            <h1 className="text-3xl: sm:text-4xl: md:text-5xl: lg:text-6xl font-bold text-white mb-4: sm:mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-lg: sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6: sm:mb-8 px-4">
              Powerful AI-driven micro software solutions designed to streamline your business operations and boost productivity. 
              Affordable tools for modern businesses.
            </p>
            <div className="flex flex-col: sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold: hover:from-blue-700: hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold: hover:bg-white/10 transition-colors"
              >
                Explore AI Services
                View All AI Services
              >

          {/* Stats Section */}
          <div className="grid grid-cols-2: sm:grid-cols-4 gap-4: sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-2">{stat.number}</div>
          <div className="grid grid-cols-2: md:grid-cols-4 gap-4: sm:gap-6: lg:gap-8 mb-12: sm:mb-16: lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-1: sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs: sm:text-sm">{stat.label}>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300: hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Micro SAAS Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl: md:text-4xl font-bold text-white text-center mb-12">Our Micro SAAS Applications</h2>
            <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20: hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      >
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hove: r:scale-110 transition-transform duration-300">{service.icon}</div>
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {service.category}
                    >
                  <h3 className="text-xl font-semibold text-white mb-4 group-hove: r:text-purple-300 transition-colors">{service.title}</h3>
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
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold: hover:from-blue-700: hover:to-purple-700 transition-all duration-300"
                    >
                      Try Free
                    >
              ))}
            </div>

          {/* Pricing Plans */}
          <div className="mb-20">
            <h2 className="text-3xl: md:text-4xl font-bold text-white text-center mb-12">Simple Pricing Plans</h2>
            <div className="grid grid-cols-1: md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-white mb-6">$12<span className="text-lg text-gray-400">/month>
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
                  >
                <Link 
                  to="/contact" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold: hover:from-blue-700: hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  Get Started
                >
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  >
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-white mb-6">$29<span className="text-lg text-gray-400">/month>
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
                  >
                <Link 
                  to="/contact" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold: hover:from-purple-700: hover:to-pink-700 transition-all duration-300 text-center block"
                >
                  Get Started
                >
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-white mb-6">$99<span className="text-lg text-gray-400">/month>
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
                  >
                <Link 
                  to="/contact" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold: hover:from-blue-700: hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  Contact Sales
                >
      {/* Services Section */}
      <section className="py-12: sm:py-16: lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-4 px-4">Our Micro SAAS Applications</h2>
            <p className="text-lg: sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose from our collection of powerful micro applications
            >
          
          <div className="grid grid-cols-1: sm:grid-cols-2: lg:grid-cols-2 gap-6: sm:gap-8 mb-20">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20: hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hove: r:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hove: r:text-purple-300 transition-colors">{service.title}</h3>
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
      {/* Micro SAAS Apps Section */}
      <section className="py-12: sm:py-16: lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12: sm:mb-16">
            <h2 className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-4">Our Micro SAAS Apps</h2>
            <p className="text-lg: sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose from our collection of AI-powered micro applications
            >
          
          <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-3 gap-6: sm:gap-8 mb-12: sm:mb-16: lg:mb-20">
            {microSAAS.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20: hover:bg-white/15 transition-all duration-300 group relative">
                {app.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                )}
                <div className="mb-4 group-hove: r:scale-110 transition-transform duration-300">{app.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hove: r:text-purple-300 transition-colors">{app.title}</h3>
                <p className="text-gray-300 mb-6">{app.description}</p>
                <ul className="space-y-2 mb-6">
                  {app.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-white">{app.pricing}</div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {app.rating}
                    <span className="ml-2">({app.users} users)>
                <div className="text-sm text-gray-400 mb-6">Setu: p: {service.duration}</div>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-blue-400: hover:text-blue-300 font-semibold transition-colors"
                >
                  Get Started
                  to={app.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold: hover:from-blue-700: hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Try Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                >
            ))}
          >

      {/* Benefits Section */}
      <section className="py-12: sm:py-16: lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-4 px-4">Why Choose Micro SAAS?</h2>
            <p className="text-lg: sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Get the benefits of enterprise software at a fraction of the cost
            >
          
          <div className="grid grid-cols-1: md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}>
            ))}
          <div className="text-center mb-12: sm:mb-16">
            <h2 className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS?</h2>
            <p className="text-lg: sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Experience the benefits of our AI-powered micro applications
            >
          
          <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-4 gap-6: sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of AI-driven micro SAAS solutions.
      {/* CTA Section */}
      <section className="py-12: sm:py-16: lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6: sm:p-8: lg:p-12">
              <h2 className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-4 px-4">Ready to Boost Your Productivity?</h2>
              <p className="text-lg: sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Start using our micro SAAS applications today and see the difference they can make.
      {/* CTA Section */}
      <section className="py-12: sm:py-16: lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl: sm:rounded-3xl p-6: sm:p-8: lg:p-12">
              <h2 className="text-2xl: sm:text-3xl: md:text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-lg: sm:text-xl text-white/90 mb-6: sm:mb-8 max-w-2xl mx-auto px-4">
                Start using our AI-powered micro SAAS tools today and transform how you work.
              </p>
              <div className="flex flex-col: sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold: hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold: hover:bg-white/10 transition-colors"
                >
                  Learn More
                  View All Services
                  to="/it-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold: hover:bg-white/10 transition-colors"
                >
                  Explore IT Services
                >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      
      <Footer />
    </div>
  );
};

export default AIServicesPage;

}