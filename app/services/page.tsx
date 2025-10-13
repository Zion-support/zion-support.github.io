'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Shield, Cloud, BarChart3, Code, Target, Users, TrendingUp, Globe, Zap, Database, Monitor, Lock, Server, Settings, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Comprehensive AI solutions for your business needs',
      icon: <Brain className="w-8 h-8" />,
      link: '/ai-services',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets with advanced security solutions',
      icon: <Shield className="w-8 h-8" />,
      link: '/cybersecurity',
      features: ['Threat Detection', 'Security Audits', 'Incident Response', 'Compliance']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses',
      icon: <Cloud className="w-8 h-8" />,
      link: '/cloud-infrastructure',
      features: ['Cloud Migration', 'Infrastructure Management', 'Scalability', 'Cost Optimization']
    },
    {
      title: 'Data Analytics',
      description: 'Unlock insights from your data with advanced analytics',
      icon: <BarChart3 className="w-8 h-8" />,
      link: '/data-analytics',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Modeling', 'Real-time Analytics']
    },
    {
      title: 'Custom Development',
      description: 'Tailored software solutions for your unique requirements',
      icon: <Code className="w-8 h-8" />,
      link: '/custom-software',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology guidance for digital transformation',
      icon: <Target className="w-8 h-8" />,
      link: '/it-consulting',
      features: ['Technology Assessment', 'Digital Strategy', 'Process Optimization', 'Change Management']
    }
  ];

  const categories = [
    {
      title: 'AI & Machine Learning',
      description: 'Transform your business with intelligent automation',
      icon: <Brain className="w-12 h-12" />,
      services: ['AI Analytics', 'Machine Learning', 'Natural Language Processing', 'Computer Vision']
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital infrastructure',
      icon: <Shield className="w-12 h-12" />,
      services: ['Security Audits', 'Threat Detection', 'Incident Response', 'Compliance']
    },
    {
      title: 'Cloud Services',
      description: 'Scalable and secure cloud solutions',
      icon: <Cloud className="w-12 h-12" />,
      services: ['Cloud Migration', 'Infrastructure Management', 'DevOps', 'Monitoring']
    },
    {
      title: 'Data Solutions',
      description: 'Harness the power of your data',
      icon: <Database className="w-12 h-12" />,
      services: ['Data Analytics', 'Business Intelligence', 'Data Engineering', 'Visualization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services by Zion Tech Group. AI solutions, cybersecurity, cloud infrastructure, data analytics, and custom development." />
        <meta name="keywords" content="AI services, IT services, cybersecurity, cloud infrastructure, data analytics, custom development, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services organized by category.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="text-sm text-gray-400">• {service}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our experts today to discuss your project requirements and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;