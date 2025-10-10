'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cloud, Server, Database } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with minimal downtime and maximum efficiency'
    },
    {
      icon: Server,
      title: 'Cloud Infrastructure',
      description: 'Scalable and reliable cloud infrastructure designed for your specific business needs'
    },
    {
      icon: Database,
      title: 'Database Services',
      description: 'Managed database solutions with automated backups, monitoring, and optimization'
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security measures to protect your cloud environment and data'
    }
  ];

  const services = [
    {
      title: 'AWS Solutions',
      description: 'Amazon Web Services implementation and optimization',
      features: ['EC2, S3, RDS', 'Auto Scaling', 'Load Balancing', 'CloudFormation']
    },
    {
      title: 'Azure Services',
      description: 'Microsoft Azure cloud platform services',
      features: ['Virtual Machines', 'Azure SQL', 'App Services', 'Azure Functions']
    },
    {
      title: 'Google Cloud',
      description: 'Google Cloud Platform solutions',
      features: ['Compute Engine', 'Cloud Storage', 'BigQuery', 'Kubernetes Engine']
    },
    {
      title: 'Multi-Cloud Strategy',
      description: 'Hybrid and multi-cloud architecture design',
      features: ['Cross-platform integration', 'Disaster recovery', 'Cost optimization', 'Vendor management']
    }
  ];

  const benefits = [
    'Reduced infrastructure costs',
    'Improved scalability and flexibility',
    'Enhanced security and compliance',
    '24/7 monitoring and support',
    'Automated backups and disaster recovery',
    'Easy integration with existing systems',
    'Pay-as-you-go pricing model',
    'Expert cloud architecture guidance'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Cloud Solutions & Migration</title>
        <meta name="description" content="Professional cloud services by Zion Tech Group. AWS, Azure, Google Cloud solutions and migration services." />
        <meta name="keywords" content="cloud services, AWS, Azure, Google Cloud, cloud migration, cloud solutions, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Cloud Services
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud solutions. 
              Migrate, optimize, and scale your infrastructure with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
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
              Why Choose Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cloud solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits of Our Cloud Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of cloud technology for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our cloud experts to discuss your requirements and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudServicesPage;