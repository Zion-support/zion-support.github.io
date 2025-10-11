'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Shield, Zap, Database, CheckCircle, ArrowRight, Globe, Settings, Wifi, Lock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DataCenterPage: React.FC = () => {
  const features = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive data center infrastructure management with monitoring and optimization capabilities.',
      benefits: ['Server management', 'Network monitoring', 'Resource optimization', 'Capacity planning']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures and compliance standards to protect your critical data.',
      benefits: ['Physical security', 'Data encryption', 'Access controls', 'Compliance auditing']
    },
    {
      icon: Zap,
      title: 'High Availability',
      description: 'Redundant systems and failover mechanisms to ensure maximum uptime and reliability.',
      benefits: ['99.9% uptime SLA', 'Redundant power', 'Backup systems', 'Disaster recovery']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Efficient data storage, backup, and recovery solutions for your critical business data.',
      benefits: ['Data backup', 'Recovery services', 'Storage optimization', 'Data migration']
    }
  ];

  const services = [
    'Colocation Services',
    'Cloud Migration',
    'Disaster Recovery',
    'Network Services',
    'Security Audits',
    'Compliance Management',
    'Performance Monitoring',
    '24/7 Support'
  ];

  return (
    <>
      <Helmet>
        <title>Data Center Services - Zion Tech Group</title>
        <meta name="description" content="Professional data center services including infrastructure management, security, and high availability solutions." />
        <meta name="keywords" content="data center, infrastructure, colocation, cloud services, disaster recovery, security, compliance" />
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Data Center</span> Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Reliable, secure, and scalable data center solutions to support your business infrastructure and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Schedule Tour
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Data Center Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive data center services designed for reliability and performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Data Center Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Complete range of data center services to meet your infrastructure needs
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-center bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <span className="text-white text-center">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your data center requirements and create a solution that ensures reliability and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default DataCenterPage;