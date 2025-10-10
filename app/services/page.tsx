'use client';

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Database, 
  Smartphone, 
  Search, 
  Filter,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  features: string[];
  pricing: string;
  popular?: boolean;
}

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const services: Service[] = [
    {
      id: '1',
      name: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: Brain,
      category: 'AI & Machine Learning',
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'API integration'],
      pricing: 'Starting at $2,999/month',
      popular: true
    },
    {
      id: '2',
      name: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions tailored to your business needs.',
      icon: Cloud,
      category: 'Cloud Computing',
      features: ['Auto-scaling', '99.9% uptime', 'Security compliance', '24/7 monitoring'],
      pricing: 'Starting at $1,999/month'
    },
    {
      id: '3',
      name: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: Shield,
      category: 'Cybersecurity',
      features: ['Threat detection', 'Vulnerability assessment', 'Incident response', 'Compliance reporting'],
      pricing: 'Starting at $3,499/month'
    },
    {
      id: '4',
      name: 'Process Automation',
      description: 'Streamline operations with intelligent automation solutions.',
      icon: Zap,
      category: 'Automation',
      features: ['Workflow automation', 'RPA implementation', 'Integration services', 'Performance monitoring'],
      pricing: 'Starting at $2,499/month'
    },
    {
      id: '5',
      name: 'Database Management',
      description: 'Optimize and secure your database infrastructure for peak performance.',
      icon: Database,
      category: 'Data Management',
      features: ['Performance tuning', 'Backup solutions', 'Migration services', 'Security hardening'],
      pricing: 'Starting at $1,799/month'
    },
    {
      id: '6',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: Smartphone,
      category: 'Development',
      features: ['Native development', 'Cross-platform apps', 'UI/UX design', 'App store deployment'],
      pricing: 'Starting at $4,999/project'
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Automation', 'Data Management', 'Development'];

  const filteredServices = useMemo(() => {
    if (selectedCategory === 'All') {
      return services;
    }
    return services.filter(service => service.category === selectedCategory);
  }, [selectedCategory, services]);

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: TrendingUp, value: '99%', label: 'Success Rate' },
    { icon: Star, value: '4.9/5', label: 'Client Rating' }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including analytics, cloud computing, cybersecurity, automation, and more. Transform your business with our expert solutions." />
        <meta name="keywords" content="AI services, cloud computing, cybersecurity, automation, data analytics, mobile development, IT consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI & IT Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI and IT services. From analytics to cybersecurity, we deliver solutions that drive growth and innovation.
            </p>
            
            {/* Category Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                    <div className="text-sm text-gray-400">Flexible pricing options available</div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's discuss how our AI and IT solutions can drive your success. Get a free consultation and custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/demo"
                className="bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;