import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Smartphone, ArrowRight, CheckCircle, Star, Zap, Shield, Globe, Database, Calendar, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and productivity insights.',
      features: ['Smart prioritization', 'Team collaboration', 'Progress tracking', 'AI insights'],
      pricing: 'From $4.99/month',
      href: '/ai-task-manager',
      icon: <Smartphone className="w-8 h-8 text-blue-500" />,
      popular: true
    },
    {
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with receipt scanning and automated categorization.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget alerts', 'Expense reports'],
      pricing: 'From $2.99/month',
      href: '/ai-expense-tracker',
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      popular: true
    },
    {
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Password generation', 'Security scoring', 'Breach monitoring', 'Auto-fill'],
      pricing: 'From $1.99/month',
      href: '/ai-password-manager',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      popular: false
    },
    {
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates and payment tracking.',
      features: ['Auto-generation', 'Custom templates', 'Payment tracking', 'Tax calculations'],
      pricing: 'From $7.99/month',
      href: '/ai-invoice-generator',
      icon: <DollarSign className="w-8 h-8 text-purple-500" />,
      popular: false
    },
    {
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights and wellness recommendations.',
      features: ['Health metrics', 'AI insights', 'Goal tracking', 'Wellness tips'],
      pricing: 'From $5.99/month',
      href: '/ai-health-tracker',
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      popular: true
    },
    {
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling and time optimization.',
      features: ['Auto-scheduling', 'Time blocking', 'Meeting optimization', 'Smart reminders'],
      pricing: 'From $3.99/month',
      href: '/ai-smart-calendar',
      icon: <Calendar className="w-8 h-8 text-orange-500" />,
      popular: false
    },
    {
      title: 'AI Social Media Manager',
      description: 'AI-powered social media management with content creation and scheduling.',
      features: ['Content creation', 'Auto-posting', 'Analytics', 'Hashtag optimization'],
      pricing: 'From $9.99/month',
      href: '/ai-social-media-manager',
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      popular: true
    },
    {
      title: 'AI Email Assistant',
      description: 'Smart email management with AI categorization and automated responses.',
      features: ['Smart categorization', 'Auto-responses', 'Email scheduling', 'Priority detection'],
      pricing: 'From $4.99/month',
      href: '/ai-email-assistant',
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
      popular: false
    },
    {
      title: 'AI Content Writer',
      description: 'AI-powered content creation for blogs, social media, and marketing materials.',
      features: ['Blog posts', 'Social content', 'Product descriptions', 'SEO optimization'],
      pricing: 'From $6.99/month',
      href: '/ai-content-writer',
      icon: <Database className="w-8 h-8 text-yellow-500" />,
      popular: true
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Personal analytics dashboard with AI insights and data visualization.',
      features: ['Data visualization', 'AI insights', 'Custom reports', 'Real-time updates'],
      pricing: 'From $8.99/month',
      href: '/ai-analytics-dashboard',
      icon: <Database className="w-8 h-8 text-teal-500" />,
      popular: false
    },
    {
      title: 'AI Time Tracker',
      description: 'Intelligent time tracking with AI-powered productivity analysis.',
      features: ['Automatic tracking', 'Productivity insights', 'Project billing', 'Time reports'],
      pricing: 'From $3.99/month',
      href: '/ai-time-tracker',
      icon: <Smartphone className="w-8 h-8 text-violet-500" />,
      popular: false
    },
    {
      title: 'AI Note Taker',
      description: 'Smart note-taking with AI organization and search capabilities.',
      features: ['Voice notes', 'AI organization', 'Smart search', 'Cross-device sync'],
      pricing: 'From $2.99/month',
      href: '/ai-note-taker',
      icon: <Database className="w-8 h-8 text-emerald-500" />,
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Instant Setup',
      description: 'Get started in minutes with our intuitive, user-friendly interfaces.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Secure & Private',
      description: 'Enterprise-grade security with end-to-end encryption and privacy protection.'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      title: 'Cross-Platform',
      description: 'Access your tools anywhere with web, mobile, and desktop applications.'
    },
    {
      icon: <Database className="w-6 h-6 text-purple-500" />,
      title: 'AI-Powered',
      description: 'Leverage advanced AI to automate tasks and gain intelligent insights.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SaaS Tools' },
    { number: '100K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '4.9/5', label: 'User Rating' }
  ];

  const categories = [
    { name: 'Productivity', count: 15, color: 'bg-blue-500' },
    { name: 'Finance', count: 8, color: 'bg-green-500' },
    { name: 'Health', count: 6, color: 'bg-pink-500' },
    { name: 'Marketing', count: 12, color: 'bg-purple-500' },
    { name: 'Development', count: 9, color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of powerful micro SaaS tools designed to boost productivity, streamline workflows, and automate everyday tasks with AI." />
        <meta name="keywords" content="micro SaaS, productivity tools, automation, AI tools, business software, workflow optimization" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our collection of powerful, AI-powered micro SaaS tools designed to boost productivity, 
              streamline workflows, and automate everyday tasks for individuals and small businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Explore All Tools
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Categories Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Browse by Category</h2>
              <p className="text-xl text-gray-300">Find the perfect tools for your specific needs</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-white font-bold text-lg">{category.name.charAt(0)}</span>
                  </div>
                  <p className="text-white font-medium mb-1">{category.name}</p>
                  <p className="text-gray-400 text-sm">{category.count} tools</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Micro SaaS Tools?</h2>
              <p className="text-xl text-gray-300">Designed for simplicity, power, and efficiency</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 mx-auto">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Micro SaaS Tools</h2>
              <p className="text-xl text-gray-300">Powerful tools for modern productivity</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border ${service.popular ? 'border-pink-500 ring-2 ring-pink-500' : 'border-white/20'} hover:bg-white/15 transition-all duration-300 group`}>
                  {service.popular && (
                    <div className="absolute -top-3 -right-3">
                      <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3 group-hover:text-pink-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-white">{service.pricing}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <a
                    href={service.href}
                    className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:translate-y-1"
                  >
                    Try Free
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of users who have transformed their workflows with our AI-powered micro SaaS tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View All Tools
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSaasServicesPage;