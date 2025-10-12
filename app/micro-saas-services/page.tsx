import React from 'react';
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, Clock, DollarSign, Star, Users, Zap, TrendingUp, FileText, Calendar, CreditCard } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, deadline tracking, and productivity insights.',
      features: ['AI-powered prioritization', 'Smart deadline reminders', 'Team collaboration', 'Productivity analytics', 'Mobile app', 'Calendar integration'],
      pricing: '$19/month',
      link: '/ai-task-manager',
      popular: true,
      category: 'Productivity',
      users: '2,500+',
      rating: '4.8'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with receipt scanning, categorization, and financial insights powered by AI.',
      features: ['Receipt scanning with OCR', 'Automatic categorization', 'Expense analytics', 'Tax preparation', 'Multi-currency support', 'Export to accounting'],
      pricing: '$15/month',
      link: '/ai-expense-tracker',
      popular: true,
      category: 'Finance',
      users: '1,800+',
      rating: '4.6'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Advanced password management with AI-powered security recommendations and breach monitoring.',
      features: ['AI security scoring', 'Breach monitoring', 'Password generation', 'Secure sharing', 'Multi-device sync', 'Two-factor authentication'],
      pricing: '$12/month',
      link: '/ai-password-manager',
      popular: false,
      category: 'Security',
      users: '3,200+',
      rating: '4.7'
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates, payment tracking, and client management.',
      features: ['AI-generated templates', 'Payment tracking', 'Client management', 'Tax calculations', 'Multi-currency support', 'Automated reminders'],
      pricing: '$25/month',
      link: '/ai-invoice-generator',
      popular: false,
      category: 'Business',
      users: '1,100+',
      rating: '4.5'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, symptom tracking, and wellness recommendations.',
      features: ['Symptom tracking', 'AI health insights', 'Medication reminders', 'Wellness recommendations', 'Doctor appointments', 'Health data export'],
      pricing: '$18/month',
      link: '/ai-health-tracker',
      popular: false,
      category: 'Health',
      users: '950+',
      rating: '4.4'
    },
    {
      icon: <Calendar className="w-8 h-8 text-yellow-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time zone handling.',
      features: ['AI meeting scheduling', 'Time zone optimization', 'Meeting insights', 'Team coordination', 'Calendar integration', 'Smart notifications'],
      pricing: '$22/month',
      link: '/ai-smart-calendar',
      popular: true,
      category: 'Productivity',
      users: '1,400+',
      rating: '4.6'
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-500" />,
      title: 'AI Time Tracker',
      description: 'Advanced time tracking with AI-powered project analysis and productivity optimization.',
      features: ['Automatic time tracking', 'Project analysis', 'Productivity insights', 'Team time reports', 'Client billing integration', 'Mobile tracking'],
      pricing: '$16/month',
      link: '/ai-time-tracker',
      popular: false,
      category: 'Productivity',
      users: '2,100+',
      rating: '4.5'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-emerald-500" />,
      title: 'AI Budget Planner',
      description: 'Smart budget planning with AI-powered financial forecasting and spending optimization.',
      features: ['AI financial forecasting', 'Spending optimization', 'Goal tracking', 'Investment insights', 'Bill reminders', 'Financial reports'],
      pricing: '$20/month',
      link: '/ai-budget-planner',
      popular: false,
      category: 'Finance',
      users: '1,300+',
      rating: '4.3'
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management that drafts, schedules, and optimizes emails using AI to improve open rates.',
      features: ['Smart email drafting', 'Send time optimization', 'Subject line testing', 'Email templates', 'Performance analytics', 'CRM integration'],
      pricing: '$14/month',
      link: '/ai-email-assistant',
      popular: false,
      category: 'Communication',
      users: '1,700+',
      rating: '4.4'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-pink-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Get actionable insights from your data with beautiful, customizable AI-powered dashboards.',
      features: ['Real-time analytics', 'Custom dashboards', 'Data visualization', 'Automated reports', 'Mobile app', 'Team collaboration'],
      pricing: '$28/month',
      link: '/ai-analytics-dashboard',
      popular: false,
      category: 'Analytics',
      users: '890+',
      rating: '4.6'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Affordable Pricing',
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
    { number: '15,000+', label: 'Active Users' },
    { number: '15+', label: 'Micro SAAS Apps' },
    { number: '4.7', label: 'Average Rating' },
    { number: '99.9%', label: 'Uptime' }
  ];

  const categories = ['All', 'Productivity', 'Finance', 'Security', 'Business', 'Health', 'Communication', 'Analytics'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful AI-driven micro software solutions designed to streamline your business operations and boost productivity. Affordable, intelligent tools for modern businesses." />
        <meta name="keywords" content="micro saas, AI tools, productivity software, business automation, AI applications" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Micro SAAS Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Powerful AI-driven micro software solutions designed to streamline your business operations, 
                boost productivity, and solve specific business challenges with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All AI Services
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
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Micro SAAS Applications</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Choose from our collection of powerful micro applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
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
                    <div className="flex items-center text-sm text-gray-400">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {service.rating}
                      <span className="ml-2">({service.users} users)</span>
                    </div>
                  </div>
                  <Link 
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Try Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Simple Pricing Plans</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Choose the plan that fits your needs and scale as you grow
              </p>
            </div>
            
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
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Micro SAAS?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Get the benefits of enterprise software at a fraction of the cost
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
                  Start using our micro SAAS applications today and see the difference they can make.
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
                    Explore IT Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSaasServicesPage;
