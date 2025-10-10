'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const BlockchainIntegrationServicesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Integration',
      description: 'Advanced AI technology to seamlessly integrate blockchain solutions with your existing systems'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast blockchain integration with optimized performance and scalability'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards for blockchain integration'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide blockchain integration services and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI-powered blockchain integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blockchain Integration Services | Zion Tech Group</title>
        <meta name="description" content="Professional Blockchain Integration Services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="blockchain integration, AI solutions, IT services, Zion Tech Group, blockchain services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Blockchain Integration Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced blockchain integration solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our blockchain integration services deliver unmatched performance, security, and scalability.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our Blockchain Integration Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your blockchain integration needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainIntegrationServicesPage;