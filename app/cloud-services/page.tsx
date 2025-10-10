'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cloud, Server, Database, Lock } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.'
    },
    {
      icon: Server,
      title: 'Cloud Infrastructure',
      description: 'Scalable and reliable cloud infrastructure designed for your specific business needs.'
    },
    {
      icon: Database,
      title: 'Database Services',
      description: 'Managed database solutions with automated backups, monitoring, and optimization.'
    },
    {
      icon: Lock,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud environment and data.'
    }
  ];

  const features = [
    'Scalable cloud infrastructure',
    'Automated backup and disaster recovery',
    '24/7 monitoring and support',
    'Cost optimization strategies',
    'Security compliance and auditing',
    'Multi-cloud deployment options',
    'Performance optimization',
    'Real-time analytics and reporting'
  ];

  const benefits = [
    'Reduced infrastructure costs by up to 40%',
    'Improved scalability and flexibility',
    'Enhanced security and compliance',
    'Faster deployment and time-to-market',
    'Automated backup and disaster recovery',
    '24/7 monitoring and support',
    'Cost-effective pay-as-you-scale model',
    'Expert cloud architecture guidance'
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services | Zion Tech Group</title>
        <meta name="description" content="Professional cloud services by Zion Tech Group. Cloud migration, infrastructure, and management solutions for your business." />
        <meta name="keywords" content="cloud services, cloud migration, cloud infrastructure, database services, cloud security, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Cloud Services
                </span>
                <br />
                <span className="text-white">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive cloud services. 
                Migrate, optimize, and manage your cloud infrastructure with expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
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

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Cloud Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to accelerate your digital transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center group-hover:bg-cyan-400/30 transition-colors">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-400/10 to-purple-500/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Our Cloud Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cloud solutions deliver unmatched performance, security, and scalability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of our cloud solutions for your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your cloud needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-xl hover:bg-cyan-300 transition-colors">
                Get Free Consultation
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-colors">
                View Our Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudServicesPage;