'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Database, Code, Smartphone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DigitalTransformationPage = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows to increase efficiency and reduce errors.',
      features: ['Workflow automation', 'Task scheduling', 'Integration management', 'Performance monitoring']
    },
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: 'Data Integration',
      description: 'Connect and synchronize data across all your systems for better decision making.',
      features: ['Data migration', 'Real-time sync', 'Data quality', 'Analytics integration']
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: 'Cloud Migration',
      description: 'Move your infrastructure to the cloud for scalability and cost efficiency.',
      features: ['Cloud strategy', 'Migration planning', 'Security compliance', 'Cost optimization']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security Enhancement',
      description: 'Strengthen your security posture with modern cybersecurity solutions.',
      features: ['Threat detection', 'Access control', 'Compliance audit', 'Incident response']
    }
  ];

  const benefits = [
    'Increased operational efficiency',
    'Reduced operational costs',
    'Improved customer experience',
    'Enhanced data security',
    'Better decision making',
    'Scalable infrastructure',
    '24/7 system monitoring',
    'Future-proof technology'
  ];

  const stats = [
    { number: '40%', label: 'Cost Reduction' },
    { number: '60%', label: 'Efficiency Gain' },
    { number: '99.9%', label: 'System Uptime' },
    { number: '500+', label: 'Projects Completed' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with comprehensive digital transformation services. Process automation, cloud migration, data integration, and security enhancement." />
        <meta name="keywords" content="digital transformation, business automation, cloud migration, data integration, process optimization" />
      </Helmet>

      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital Transformation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with comprehensive digital solutions. From process automation to cloud migration, 
              we help you modernize your operations and stay competitive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Get Started
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Digital Transformation Services</h2>
              <p className="text-lg text-gray-300">Comprehensive solutions to modernize your business</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3 group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transformation Benefits</h2>
              <p className="text-lg text-gray-300">What you can expect from our digital transformation services</p>
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

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Transformation Process</h2>
              <p className="text-lg text-gray-300">A structured approach to digital transformation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-400">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Assessment</h3>
                <p className="text-gray-300">Analyze your current systems and identify transformation opportunities.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Planning</h3>
                <p className="text-gray-300">Develop a comprehensive transformation roadmap and strategy.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-400">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Implementation</h3>
                <p className="text-gray-300">Execute the transformation with minimal disruption to your business.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-400">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Optimization</h3>
                <p className="text-gray-300">Continuously monitor and optimize your transformed systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Let our experts guide you through your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
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

export default DigitalTransformationPage;