'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Code, Smartphone, Database, Globe, CheckCircle, ArrowRight, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      features: ['AWS/Azure/GCP migration', 'Zero downtime migration', 'Cost optimization', 'Security compliance'],
      pricing: 'Starting at $2,500',
      link: '/cloud-migration',
      popular: true,
      category: 'cloud'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      features: ['Threat detection', 'Vulnerability assessment', 'Security monitoring', 'Incident response'],
      pricing: '$1,500/month',
      link: '/cybersecurity',
      popular: true,
      category: 'security'
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: 'DevOps Services',
      description: 'Streamline your development and deployment processes with modern DevOps practices.',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring & logging', 'Automated testing'],
      pricing: '$2,000/month',
      link: '/devops',
      popular: false,
      category: 'development'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native iOS/Android apps', 'Cross-platform solutions', 'UI/UX design', 'App store deployment'],
      pricing: 'Starting at $5,000',
      link: '/mobile-development',
      popular: true,
      category: 'development'
    },
    {
      icon: <Database className="w-8 h-8 text-yellow-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: ['Data visualization', 'Predictive analytics', 'Business intelligence', 'Custom dashboards'],
      pricing: '$2,000/month',
      link: '/data-analytics',
      popular: false,
      category: 'analytics'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Digital Transformation',
      description: 'Complete digital transformation to modernize your business processes and systems.',
      features: ['Process automation', 'System integration', 'Workflow optimization', 'Change management'],
      pricing: 'Starting at $10,000',
      link: '/digital-transformation',
      popular: false,
      category: 'transformation'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'cloud', name: 'Cloud Services' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'development', name: 'Development' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'transformation', name: 'Digital Transformation' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Engineers' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, mobile development, and data analytics. Transform your business with our expert IT solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, mobile development, data analytics, digital transformation" />
      </Helmet>

      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, mobile development, 
              and data analytics. Transform your business with our expert solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
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
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-6">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3 group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <Link 
                      to={service.link}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
              <p className="text-lg text-gray-300">The advantages of working with our expert team</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">Certified professionals with years of experience in enterprise IT solutions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Proven Track Record</h3>
                <p className="text-gray-300">Successfully delivered 500+ projects for businesses of all sizes.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and monitoring to ensure your systems run smoothly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Let our experts help you modernize your IT systems and boost your business performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITServicesPage;