'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  Cpu, 
  FileText, 
  Mail, 
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users
} from 'lucide-react';

const MicroSAASServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automation.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      features: ['Smart prioritization', 'Automated scheduling', 'Progress tracking', 'Team collaboration'],
      pricing: 'Starting at $29/month',
      link: '/ai-task-manager',
      popular: true
    },
    {
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning and categorization.',
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      features: ['Receipt scanning', 'Auto categorization', 'Budget alerts', 'Tax reporting'],
      pricing: 'Starting at $19/month',
      link: '/ai-expense-tracker'
    },
    {
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      features: ['Secure storage', 'Auto-generation', 'Security audit', 'Multi-device sync'],
      pricing: 'Starting at $15/month',
      link: '/ai-password-manager'
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content creation for blogs, social media, and marketing.',
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      features: ['Multi-format support', 'SEO optimization', 'Brand voice training', 'Content scheduling'],
      pricing: 'Starting at $39/month',
      link: '/ai-content-generator',
      popular: true
    },
    {
      title: 'AI Email Assistant',
      description: 'Smart email management with automated responses and scheduling.',
      icon: <Mail className="w-8 h-8 text-blue-400" />,
      features: ['Smart replies', 'Email scheduling', 'Priority sorting', 'Template library'],
      pricing: 'Starting at $25/month',
      link: '/ai-email-assistant'
    },
    {
      title: 'AI Chat Analytics',
      description: 'Advanced analytics for customer support and chat interactions.',
      icon: <MessageSquare className="w-8 h-8 text-orange-400" />,
      features: ['Sentiment analysis', 'Performance metrics', 'Customer insights', 'Real-time monitoring'],
      pricing: 'Starting at $45/month',
      link: '/ai-chat-analytics'
    }
  ];

  const features = [
    {
      title: 'Easy Integration',
      description: 'Quick setup with existing tools and workflows',
      icon: <Zap className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow with your business needs',
      icon: <Users className="w-6 h-6 text-purple-400" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance and maintenance',
      icon: <Shield className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Regular Updates',
      description: 'Continuous improvements and new features',
      icon: <Star className="w-6 h-6 text-yellow-400" />
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Solutions', icon: <Brain className="w-6 h-6" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | Specialized Business Solutions</title>
        <meta name="description" content="Discover our range of micro SAAS services including AI task management, expense tracking, password management, and content generation. Streamline your business operations." />
        <meta name="keywords" content="micro SAAS, AI solutions, task management, expense tracking, password manager, content generation, business automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Micro SAAS{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized micro SAAS solutions designed to streamline specific business processes 
                and boost productivity with AI-powered automation.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border transition-all duration-300 ${
                  service.popular 
                    ? 'border-cyan-400/40 ring-2 ring-cyan-400/20' 
                    : 'border-cyan-500/20 hover:border-cyan-400/40'
                }`}>
                  {service.popular && (
                    <div className="flex justify-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-4">
                    <span className="text-lg font-semibold text-cyan-400">{service.pricing}</span>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Features Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30 rounded-2xl">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Why Choose Our Micro SAAS Solutions?
                  </h2>
                  <p className="text-gray-300">
                    Built for modern businesses that need specialized tools
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Ready to Streamline Your Business?
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Choose from our range of micro SAAS solutions and start automating your workflows today
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Get Started
                    </Link>
                    <Link
                      to="/it-services"
                      className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASServicesPage;
