'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Shield, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin, Database, Lock, Cpu, HardDrive } from 'lucide-react';

const AICloudInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Scalable Cloud Architecture',
      description: 'Build and deploy AI applications on a fully scalable cloud infrastructure'
    },
    {
      icon: Server,
      title: 'High-Performance Computing',
      description: 'Leverage powerful cloud computing resources for AI model training and inference'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, access controls, and compliance standards'
    },
    {
      icon: Zap,
      title: 'Auto-Scaling',
      description: 'Automatically scale resources based on demand to optimize costs and performance'
    }
  ];

  const benefits = [
    '99.99% uptime guarantee',
    'Global edge computing network',
    'Advanced security and compliance',
    'Cost-effective resource optimization',
    'Seamless integration capabilities',
    'Real-time monitoring and analytics',
    'Disaster recovery and backup',
    '24/7 technical support'
  ];

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your existing infrastructure to our AI-optimized cloud platform',
      icon: Database
    },
    {
      title: 'AI Model Deployment',
      description: 'Deploy and manage AI models at scale with our cloud infrastructure',
      icon: Cpu
    },
    {
      title: 'Data Storage Solutions',
      description: 'Secure, scalable data storage optimized for AI workloads and analytics',
      icon: HardDrive
    },
    {
      title: 'Security & Compliance',
      description: 'Comprehensive security measures and compliance with industry standards',
      icon: Lock
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Helmet>
        <title>AI Cloud Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Advanced AI cloud infrastructure solutions with scalable architecture, high-performance computing, and enterprise-grade security." />
        <meta name="keywords" content="AI cloud infrastructure, cloud computing, scalable architecture, AI deployment, cloud migration, enterprise security" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                AI Cloud Infrastructure
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build and deploy AI applications on our advanced cloud infrastructure. 
              Scalable, secure, and optimized for high-performance AI workloads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
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
              Advanced Cloud Infrastructure
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-optimized cloud infrastructure provides the foundation for scalable, secure, and high-performance applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our AI-optimized cloud infrastructure for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud infrastructure services tailored for AI applications and enterprise needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Scale with AI Cloud?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact our experts to discuss your cloud infrastructure needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICloudInfrastructurePage;