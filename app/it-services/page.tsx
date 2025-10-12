'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, MessageCircle, Code, Network, Settings, Zap, Users, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ITServicesPage() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud migration, management, and optimization services.',
      features: ['AWS, Azure, GCP expertise', 'Cloud architecture design', 'Migration planning', 'Cost optimization'],
      pricing: 'Starting at $299/month',
      category: 'Infrastructure'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions to protect your business from threats.',
      features: ['Security audits', 'Threat detection', 'Compliance management', 'Incident response'],
      pricing: 'Starting at $199/month',
      category: 'Security'
    },
    {
      icon: <Server className="w-8 h-8 text-purple-500" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure design, implementation, and management.',
      features: ['Network design', 'Server management', 'Monitoring & maintenance', 'Disaster recovery'],
      pricing: 'Starting at $399/month',
      category: 'Infrastructure'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Database Services',
      description: 'Expert database design, optimization, and management services.',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Migration services'],
      pricing: 'Starting at $249/month',
      category: 'Data'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms.',
      features: ['Native development', 'Cross-platform apps', 'UI/UX design', 'App store deployment'],
      pricing: 'Starting at $499/month',
      category: 'Development'
    },
    {
      icon: <Code className="w-8 h-8 text-teal-500" />,
      title: 'Web Development',
      description: 'Modern web applications and websites built with latest technologies.',
      features: ['Responsive design', 'E-commerce solutions', 'CMS development', 'API integration'],
      pricing: 'Starting at $349/month',
      category: 'Development'
    }
  ];

  const categories = ['All', 'Infrastructure', 'Security', 'Data', 'Development'];

  const benefits = [
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience'
    },
    {
      icon: <Clock className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Security First',
      description: 'Enterprise-grade security in all solutions'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: 'Fast Delivery',
      description: 'Rapid deployment and implementation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud solutions, cybersecurity, infrastructure management, and custom development."
        keywords="IT services, cloud solutions, cybersecurity, infrastructure, web development, mobile development"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            IT
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT services to help your business thrive in the digital age. 
            From cloud solutions to cybersecurity, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Started
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

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to meet your business needs and drive growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">{service.pricing}</span>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional IT services that help your business succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let our IT experts help you build a robust, secure, and scalable technology foundation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
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
}