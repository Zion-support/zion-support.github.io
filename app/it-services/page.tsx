'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Zap, Cpu, HardDrive, Wifi, Server, Code, Globe, Target, TrendingUp } from 'lucide-react';

export default function ITServicesPage() {
  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure cloud solutions for modern businesses.',
      icon: Cloud,
      features: ['AWS/Azure/GCP setup', 'Auto-scaling', 'Cost optimization', '24/7 monitoring'],
      price: 'Starting at $1,999/month'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business.',
      icon: Shield,
      features: ['Threat detection', 'Firewall management', 'Security audits', 'Compliance'],
      price: 'Starting at $2,499/month'
    },
    {
      title: 'Network Solutions',
      description: 'Reliable, high-performance network infrastructure.',
      icon: Wifi,
      features: ['Network design', 'VPN setup', 'Load balancing', 'Performance optimization'],
      price: 'Starting at $1,499/month'
    },
    {
      title: 'Database Management',
      description: 'Optimized database solutions for peak performance.',
      icon: Database,
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Migration'],
      price: 'Starting at $1,799/month'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development and deployment processes.',
      icon: Code,
      features: ['CI/CD pipelines', 'Containerization', 'Infrastructure as code', 'Monitoring'],
      price: 'Starting at $2,999/month'
    },
    {
      title: 'IT Support',
      description: '24/7 technical support and maintenance services.',
      icon: Users,
      features: ['Help desk', 'Remote support', 'System maintenance', 'User training'],
      price: 'Starting at $999/month'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '99.9% Uptime',
      description: 'Reliable infrastructure with guaranteed uptime and performance.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'ISO 27001 certified security measures and compliance standards.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring services.'
    },
    {
      icon: Target,
      title: 'Scalable Solutions',
      description: 'Infrastructure that grows with your business needs.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IT solutions that keep your business running smoothly. From cloud infrastructure 
              to cybersecurity, we provide the technology foundation your business needs to succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/10 px-4 py-2 rounded-lg">
                <Cloud className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Cloud Solutions</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/10 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-medium">Cybersecurity</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/10 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT solutions designed to optimize your technology infrastructure and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-slate-900/50 rounded-2xl p-8 cyber-card hover:bg-slate-900/70 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <div className="text-cyan-400 font-bold text-lg mb-4">{service.price}</div>
                    <button className="w-full cyber-button inline-flex items-center justify-center px-6 py-3">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide reliable, secure, and scalable IT solutions that keep your business running smoothly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl cyber-card">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">Our IT Implementation Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to implementing IT solutions that ensures success and minimizes disruption.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Assessment</h3>
                <p className="text-gray-300">We analyze your current IT infrastructure and identify areas for improvement.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-400">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Planning</h3>
                <p className="text-gray-300">We develop a comprehensive IT strategy tailored to your business needs.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Implementation</h3>
                <p className="text-gray-300">We deploy your IT solutions with minimal disruption to your operations.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-400">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Support</h3>
                <p className="text-gray-300">We provide ongoing support and maintenance to keep your systems running.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let's discuss how our IT services can improve your technology infrastructure and support your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}