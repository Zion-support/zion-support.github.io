'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Zap, Database, CheckCircle, ArrowRight, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CloudServicesPage = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to AWS, Azure, or Google Cloud Platform.',
      features: ['Zero downtime migration', 'Cost optimization', 'Security compliance', 'Performance monitoring'],
      pricing: 'Starting at $2,500',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure.',
      features: ['Threat detection', 'Access control', 'Data encryption', 'Compliance audit'],
      pricing: '$1,500/month',
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Cloud Optimization',
      description: 'Optimize your cloud resources for better performance and cost efficiency.',
      features: ['Resource monitoring', 'Cost analysis', 'Auto-scaling', 'Performance tuning'],
      pricing: '$1,000/month',
      popular: true
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Backup',
      description: 'Reliable backup and disaster recovery solutions for your critical data.',
      features: ['Automated backups', 'Disaster recovery', 'Data retention', 'Restore testing'],
      pricing: '$800/month',
      popular: false
    }
  ];

  const benefits = [
    'Reduced infrastructure costs',
    'Improved scalability and flexibility',
    'Enhanced security and compliance',
    '24/7 monitoring and support',
    'Faster deployment times',
    'Better disaster recovery',
    'Access to latest technologies',
    'Simplified management'
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '40%', label: 'Cost Savings' },
    { number: '500+', label: 'Migrations Completed' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud services including migration, security, optimization, and backup solutions. Transform your business with cloud technology." />
        <meta name="keywords" content="cloud services, cloud migration, cloud security, cloud optimization, AWS, Azure, Google Cloud" />
      </Helmet>

      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with comprehensive cloud solutions. From migration to optimization, 
              we help you leverage the power of cloud technology.
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

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Cloud Services</h2>
              <p className="text-lg text-gray-300">Comprehensive solutions for all your cloud needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
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
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <Link 
                      to="/contact"
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

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cloud Benefits</h2>
              <p className="text-lg text-gray-300">Why choose cloud solutions for your business</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Move to the Cloud?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Let our cloud experts help you migrate and optimize your infrastructure.
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

export default CloudServicesPage;