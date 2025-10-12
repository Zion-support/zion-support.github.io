'use client';

import React from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  Server, 
  Database, 
  Shield, 
  Zap,
  Users,
  Target,
  DollarSign,
  Clock,
  Globe,
  Settings,
  Network
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const DataCenterPage: React.FC = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'Server Management',
      description: 'Comprehensive server infrastructure management and optimization',
      features: ['Server monitoring', 'Performance optimization', 'Hardware maintenance', 'Capacity planning']
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Data Storage',
      description: 'Secure and scalable data storage solutions',
      features: ['Data backup', 'Disaster recovery', 'Storage optimization', 'Data migration']
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance management',
      features: ['Access control', 'Data encryption', 'Compliance monitoring', 'Security audits']
    },
    {
      icon: <Network className="w-8 h-8 text-orange-500" />,
      title: 'Network Infrastructure',
      description: 'Robust network infrastructure design and management',
      features: ['Network design', 'Bandwidth management', 'Load balancing', 'Network monitoring']
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: 'High Availability',
      description: 'Ensure 99.9% uptime with redundant systems and failover protection'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-500" />,
      title: 'Cost Efficiency',
      description: 'Optimize costs with efficient resource utilization and energy management'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      title: '24/7 Monitoring',
      description: 'Round-the-clock monitoring and support for your data center operations'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: 'Scalability',
      description: 'Scale your infrastructure as your business grows and demands increase'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Data Center Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive data center solutions including server management, data storage, security, and network infrastructure. Enterprise-grade data center services." />
        <meta name="keywords" content="data center, server management, data storage, network infrastructure, enterprise solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Data Center
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive data center solutions to support your business infrastructure. 
            From server management to data storage, we provide enterprise-grade data center services.
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
              to="/pricing" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Data Center Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive data center solutions to support your business infrastructure and operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
              Why Choose Our Data Center Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our data center solutions provide the reliability and performance your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
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
                Ready to Optimize Your Data Center?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our data center solutions can help you build a robust and efficient infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Data Center Assessment
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Infrastructure Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataCenterPage;
