'use client';
import React from 'react';
import { Shield, Clock, Users, Zap, Target, BarChart, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ManagedITPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: '24/7 Monitoring',
      description: 'Round-the-clock monitoring and management of your IT infrastructure and systems.'
    },
    {
      icon: Clock,
      title: 'Proactive Maintenance',
      description: 'Preventive maintenance and updates to keep your systems running optimally.'
    },
    {
      icon: Users,
      title: 'Dedicated Support Team',
      description: 'Expert IT professionals dedicated to your business success and growth.'
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'Quick response times and resolution of IT issues to minimize downtime.'
    }
  ];

  const benefits = [
    '24/7 monitoring and support',
    'Proactive issue prevention',
    'Reduced IT costs',
    'Improved system reliability',
    'Expert technical support',
    'Scalable solutions'
  ];

  const services = [
    {
      title: 'Network Management',
      description: 'Complete network infrastructure monitoring, maintenance, and optimization.',
      icon: Target
    },
    {
      title: 'Security Management',
      description: 'Comprehensive cybersecurity monitoring and threat protection.',
      icon: Shield
    },
    {
      title: 'Server Management',
      description: 'Server monitoring, maintenance, and performance optimization.',
      icon: BarChart
    },
    {
      title: 'Help Desk Support',
      description: 'Professional help desk services for all your IT support needs.',
      icon: Users
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
              Managed IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete IT management services that keep your business running smoothly. 
              Our 24/7 managed IT services ensure maximum uptime and optimal performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                Get Managed IT
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
            <h2 className="text-4xl font-bold text-white mb-4">Managed IT Features</h2>
            <p className="text-xl text-gray-300">Comprehensive IT management solutions</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Managed IT?</h2>
            <p className="text-xl text-gray-300">Proven results that deliver value</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Managed IT Services</h2>
            <p className="text-xl text-gray-300">Complete IT management solutions</p>
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
            Ready for Managed IT?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us handle your IT so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              Get Managed IT Services
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

export default ManagedITPage;