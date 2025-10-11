import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Database, Code, Smartphone, Globe, Mail, BarChart3, FileText, Calendar, CreditCard, Lock, Target, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Writer Pro',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      features: ['Blog post generation', 'Social media content', 'Product descriptions', 'SEO optimization', 'Multi-language support', 'Brand voice customization'],
      pricing: '$29/month',
      link: '/ai-content-writer-pro',
      popular: true,
      category: 'Content',
      users: '2,500+',
      rating: '4.8'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: ['Secure storage', 'Password generation', 'Breach monitoring', 'Multi-device sync', '2FA integration', 'Team sharing'],
      pricing: '$12/month',
      link: '/ai-password-manager',
      popular: true,
      category: 'Security',
      users: '1,800+',
      rating: '4.7'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Analytics Dashboard Pro',
      description: 'Get actionable insights from your data with beautiful, customizable dashboards.',
      features: ['Real-time analytics', 'Custom dashboards', 'Data visualization', 'Automated reports', 'API integrations', 'Mobile app'],
      pricing: '$49/month',
      link: '/analytics-dashboard-pro',
      popular: true,
      category: 'Analytics',
      users: '3,200+',
      rating: '4.9'
    },
    {
      icon: <Mail className="w-8 h-8 text-orange-500" />,
      title: 'Email Assistant AI',
      description: 'Automate your email marketing with AI-powered personalization and optimization.',
      features: ['Email templates', 'A/B testing', 'Personalization', 'Analytics tracking', 'List management', 'Automation workflows'],
      pricing: '$39/month',
      link: '/email-assistant-ai',
      popular: false,
      category: 'Marketing',
      users: '1,600+',
      rating: '4.6'
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: 'Lead Generation AI',
      description: 'Find and qualify leads automatically with our AI-powered lead generation system.',
      features: ['Lead scoring', 'Contact enrichment', 'CRM integration', 'Follow-up automation', 'Email sequences', 'Performance tracking'],
      pricing: '$59/month',
      link: '/lead-generation-ai',
      popular: false,
      category: 'Sales',
      users: '2,100+',
      rating: '4.7'
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-500" />,
      title: 'AI Time Tracker',
      description: 'Advanced time tracking with AI-powered project analysis and productivity optimization.',
      features: ['Automatic tracking', 'Project analysis', 'Productivity insights', 'Team reports', 'Client billing', 'Mobile app'],
      pricing: '$16/month',
      link: '/ai-time-tracker',
      popular: false,
      category: 'Productivity',
      users: '1,400+',
      rating: '4.5'
    },
    {
      icon: <FileText className="w-8 h-8 text-yellow-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with smart templates, payment tracking, and financial analytics.',
      features: ['Smart templates', 'Auto calculations', 'Payment tracking', 'Client management', 'Tax calculations', 'Multi-currency'],
      pricing: '$25/month',
      link: '/ai-invoice-generator',
      popular: false,
      category: 'Finance',
      users: '1,900+',
      rating: '4.6'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, goal tracking, and wellness recommendations.',
      features: ['Health monitoring', 'Goal tracking', 'AI insights', 'Wellness tips', 'Medication reminders', 'Doctor integration'],
      pricing: '$18/month',
      link: '/ai-health-tracker',
      popular: false,
      category: 'Health',
      users: '2,300+',
      rating: '4.8'
    },
    {
      icon: <Calendar className="w-8 h-8 text-teal-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking.',
      features: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync', 'Team coordination', 'Analytics'],
      pricing: '$22/month',
      link: '/ai-smart-calendar',
      popular: false,
      category: 'Productivity',
      users: '1,700+',
      rating: '4.4'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-emerald-500" />,
      title: 'AI Budget Planner',
      description: 'Smart budget planning with AI-powered financial forecasting and spending optimization.',
      features: ['Financial forecasting', 'Spending optimization', 'Goal tracking', 'Investment insights', 'Bill reminders', 'Reports'],
      pricing: '$20/month',
      link: '/ai-budget-planner',
      popular: false,
      category: 'Finance',
      users: '1,500+',
      rating: '4.5'
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-500" />,
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with receipt scanning, categorization, and financial insights powered by AI.',
      features: ['Receipt scanning', 'Auto categorization', 'Expense analytics', 'Tax preparation', 'Multi-currency', 'Export tools'],
      pricing: '$15/month',
      link: '/ai-expense-tracker',
      popular: false,
      category: 'Finance',
      users: '2,000+',
      rating: '4.7'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-violet-500" />,
      title: 'AI Sales Predictor',
      description: 'Predict sales trends and optimize your sales strategy with AI-powered forecasting and insights.',
      features: ['Sales forecasting', 'Trend analysis', 'Performance optimization', 'Lead scoring', 'Pipeline management', 'ROI tracking'],
      pricing: '$45/month',
      link: '/ai-sales-predictor',
      popular: false,
      category: 'Sales',
      users: '1,200+',
      rating: '4.6'
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: 'Affordable Pricing',
      description: 'Powerful tools at micro-SaaS prices, perfect for small businesses and individuals.'
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: 'Easy Setup',
      description: 'Get started in minutes with our intuitive setup process and guided onboarding.'
    },
    {
      icon: <Star className="w-6 h-6 text-purple-500" />,
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence to automate tasks and gain valuable insights.'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: 'Regular Updates',
      description: 'Continuous improvements and new features based on user feedback and needs.'
    }
  ];

  const categories = ['All', 'Content', 'Security', 'Analytics', 'Marketing', 'Sales', 'Productivity', 'Finance', 'Health'];
  
  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '25,000+', label: 'Active Users' },
    { number: '12+', label: 'Micro SAAS Apps' },
    { number: '4.7', label: 'Average Rating' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Affordable micro SaaS solutions powered by AI. Task management, expense tracking, password management, and more." />
        <meta name="keywords" content="micro SaaS, AI tools, task management, expense tracking, productivity, affordable software" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Micro
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {' '}SaaS Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Affordable, AI-powered micro SaaS solutions designed to solve specific business problems with minimal complexity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/ai-services" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
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
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our collection of specialized tools designed to solve specific business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
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
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">{service.users}</div>
                </div>
                
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine affordability with powerful AI capabilities to deliver exceptional value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start with any of our micro SaaS tools and see immediate improvements in your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/ai-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MicroSaasServicesPage;
