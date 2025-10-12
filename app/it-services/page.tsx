'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cloud, Shield, Code, Database, Smartphone, Globe, Zap, Sparkles } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud',
      price: 'Starting at $5,000',
      features: ['Zero-downtime migration', 'Security compliance', 'Cost optimization', '24/7 support'],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security assessment and implementation',
      price: 'Starting at $3,000',
      features: ['Vulnerability assessment', 'Penetration testing', 'Security policies', 'Staff training'],
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Custom Web Development',
      description: 'Modern, responsive web applications built to scale',
      price: 'Starting at $8,000',
      features: ['Responsive design', 'SEO optimization', 'Performance tuning', 'Maintenance support'],
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      price: 'Starting at $12,000',
      features: ['iOS & Android', 'Cross-platform', 'App store optimization', 'Push notifications'],
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Cloud, Security & Development Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, web development, and mobile app development. Transform your technology infrastructure." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT Infrastructure &
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT services to build, secure, and optimize your technology infrastructure 
                for maximum performance and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From cloud migration to cybersecurity, we provide end-to-end IT solutions 
                tailored to your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our IT services can optimize your technology stack and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;