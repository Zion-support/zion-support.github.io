'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Code, Database, Smartphone, Globe, Settings, Monitor, BarChart, Package, Lock, Calendar, Wifi, Server, Cpu, Link as LinkIcon, ShoppingCart, TrendingUp, CheckCircle } from 'lucide-react';

export default function ITServicesPage() {
  const services = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses',
      icon: Cloud,
      href: '/cloud-infrastructure',
      features: ['AWS/Azure/GCP Setup', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security for your digital assets',
      icon: Shield,
      href: '/cybersecurity-solutions',
      features: ['Security Audits', 'Threat Detection', 'Penetration Testing', 'Compliance']
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications',
      icon: Globe,
      href: '/web-development',
      features: ['React/Next.js', 'Node.js Backend', 'Database Design', 'API Development']
    },
    {
      title: 'Mobile Development',
      description: 'iOS and Android applications',
      icon: Smartphone,
      href: '/mobile-development',
      features: ['Native Apps', 'Cross-platform', 'App Store Deployment', 'Push Notifications']
    },
    {
      title: 'API Development',
      description: 'Robust and scalable API solutions',
      icon: Code,
      href: '/api-development',
      features: ['RESTful APIs', 'GraphQL', 'Microservices', 'API Documentation']
    },
    {
      title: 'Database Management',
      description: 'Efficient data storage and management',
      icon: Database,
      href: '/database-management',
      features: ['Database Design', 'Performance Optimization', 'Backup & Recovery', 'Data Migration']
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, and more." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, web development, mobile development" />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                IT Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology infrastructure and development services to power your digital transformation.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <LinkIcon className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our IT services can accelerate your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Started
                  <LinkIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center group"
                >
                  Free Consultation
                  <LinkIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
