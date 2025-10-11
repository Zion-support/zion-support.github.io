import React from 'react';
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, Clock, DollarSign, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Password generation', 'Security scoring', 'Breach monitoring', 'Auto-fill'],
      pricing: '$12/month',
      duration: 'Instant setup',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with smart templates and payment tracking.',
      features: ['Smart templates', 'Auto calculations', 'Payment tracking', 'Multi-currency'],
      pricing: '$25/month',
      duration: 'Instant setup',
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights and recommendations.',
      features: ['Health metrics', 'AI insights', 'Goal tracking', 'Reminder system'],
      pricing: '$18/month',
      duration: 'Instant setup',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-red-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling and optimization.',
      features: ['Smart scheduling', 'Conflict resolution', 'Time optimization', 'Integration'],
      pricing: '$22/month',
      duration: 'Instant setup',
      popular: false
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SaaS Apps' },
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Specialized micro SaaS applications for modern businesses. AI-powered tools for productivity, management, and automation." />
        <meta name="keywords" content="micro SaaS, productivity tools, AI applications, business automation" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Micro SaaS
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Powerful micro applications designed to solve specific business challenges with AI-powered automation and intelligence.
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
      </section>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
        {stats.map((stat, index) => (
          <div key={index} className="text-center px-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
            <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized tools that solve specific business problems with AI-powered intelligence and automation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
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
                  <div>
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <div className="flex items-center text-gray-400 text-sm mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Try Now
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Boost Your Productivity?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Discover how our micro SaaS applications can streamline your workflows and accelerate your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MicroSaasServicesPage;