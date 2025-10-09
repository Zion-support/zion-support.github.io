'use client';
import React from 'react';
import { Settings, Shield, Monitor, Database, Users, Zap, Target, BarChart, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SystemAdminPage: React.FC = () => {
  const features = [
    {
      icon: Settings,
      title: 'System Configuration',
      description: 'Expert system administration and configuration for optimal performance and security.'
    },
    {
      icon: Shield,
      title: 'Security Management',
      description: 'Comprehensive security hardening and monitoring to protect your infrastructure.'
    },
    {
      icon: Monitor,
      title: 'Performance Monitoring',
      description: '24/7 system monitoring and optimization for maximum uptime and efficiency.'
    },
    {
      icon: Database,
      title: 'Database Administration',
      description: 'Professional database management, optimization, and maintenance services.'
    }
  ];

  const benefits = [
    '99.9% system uptime',
    '24/7 monitoring',
    'Proactive maintenance',
    'Security hardening',
    'Performance optimization',
    'Expert support team'
  ];

  const services = [
    {
      title: 'Server Administration',
      description: 'Complete server setup, configuration, and ongoing management.',
      icon: Monitor
    },
    {
      title: 'Network Management',
      description: 'Network infrastructure design, implementation, and maintenance.',
      icon: Settings
    },
    {
      title: 'Security Hardening',
      description: 'Comprehensive security measures to protect your systems.',
      icon: Shield
    },
    {
      title: 'Backup & Recovery',
      description: 'Reliable backup solutions and disaster recovery planning.',
      icon: Database
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              System Administration
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional system administration services that ensure 99.9% uptime and optimal performance. 
              Our expert team manages your infrastructure so you can focus on your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                Get System Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">System Administration Features</h2>
            <p className="text-xl text-gray-300">Comprehensive infrastructure management</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our System Administration?</h2>
            <p className="text-xl text-gray-300">Proven expertise that delivers results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">System Administration Services</h2>
            <p className="text-xl text-gray-300">Complete infrastructure management solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-8">
                <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Expert System Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our expert team manage your systems so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              Get Expert Support
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SystemAdminPage;