'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Shield, Zap, Target, CheckCircle, ArrowRight, Globe, Users, Database, Cpu } from 'lucide-react';

const BlockchainIntegrationServicesPage: React.FC = () => {
  const services = [
    {
      icon: Link,
      title: 'Smart Contract Integration',
      description: 'Seamlessly integrate smart contracts with your existing systems and applications'
    },
    {
      icon: Shield,
      title: 'Security Auditing',
      description: 'Comprehensive security audits to ensure your blockchain integration is secure'
    },
    {
      icon: Zap,
      title: 'API Development',
      description: 'Custom APIs for blockchain interaction and data management'
    },
    {
      icon: Target,
      title: 'Custom Solutions',
      description: 'Tailored blockchain integration solutions for your specific business needs'
    }
  ];

  const benefits = [
    'Seamless integration with existing systems',
    'Enhanced security and transparency',
    'Reduced operational costs',
    'Improved data integrity',
    'Automated business processes',
    'Real-time transaction tracking',
    'Compliance with regulations',
    'Scalable blockchain solutions'
  ];

  return (
    <>
      <Helmet>
        <title>Blockchain Integration Services | Zion Tech Group</title>
        <meta name="description" content="Professional blockchain integration services by Zion Tech Group. Connect your business with blockchain technology seamlessly." />
        <meta name="keywords" content="blockchain integration, smart contracts, blockchain API, blockchain consulting, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blockchain Integration Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Seamlessly integrate blockchain technology with your existing systems and applications.
              Transform your business with secure, transparent, and efficient blockchain solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Link className="mr-2 h-5 w-5" />
                Start Integration
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Globe className="mr-2 h-5 w-5" />
                View Solutions
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Integration Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-purple-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our Integration Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {benefits.slice(4).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Integration Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Analysis</h3>
                <p className="text-gray-300">Analyze your existing systems and identify integration opportunities</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Development</h3>
                <p className="text-gray-300">Develop custom blockchain integration solutions</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Deployment</h3>
                <p className="text-gray-300">Deploy and maintain your blockchain integration</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-purple-800/20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Integrate Blockchain?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let our experts help you integrate blockchain technology with your existing systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="mr-2 h-5 w-5" />
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Target className="mr-2 h-5 w-5" />
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlockchainIntegrationServicesPage;