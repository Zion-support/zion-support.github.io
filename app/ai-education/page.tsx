'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Clock, Users, BarChart } from 'lucide-react';

const AiEducationPage: React.FC = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Ai Education Solutions',
      description: 'Comprehensive ai education solutions tailored to your business needs.',
      benefits: ['Expert consultation', 'Custom implementation', 'Ongoing support']
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our experienced team delivers high-quality ai education services.',
      benefits: ['Certified professionals', 'Industry expertise', 'Proven track record']
    },
    {
      icon: BarChart,
      title: 'Performance Focused',
      description: 'Optimized ai education solutions for maximum performance and efficiency.',
      benefits: ['Performance monitoring', 'Continuous optimization', 'Real-time analytics']
    }
  ];

  const benefits = [
    'Professional ai education services',
    'Custom solutions for your business',
    'Expert consultation and support',
    'Proven methodologies and best practices',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Cost-effective pricing',
    'Quick implementation and deployment'
  ];

  return (
    <>
      <Helmet>
        <title>Ai Education Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Professional ai education services and solutions to help your business succeed with cutting-edge technology and expert guidance." />
        <meta name="keywords" content="ai education, services, solutions, technology, AI, IT" />
        <meta property="og:title" content="Ai Education Services - Zion Tech Group" />
        <meta property="og:description" content="Professional ai education services and solutions to help your business succeed with cutting-edge technology and expert guidance." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ai Education Services - Zion Tech Group" />
        <meta name="twitter:description" content="Professional ai education services and solutions to help your business succeed with cutting-edge technology and expert guidance." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Professional Ai Education Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional ai education services and solutions to help your business succeed with cutting-edge technology and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
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
                Why Choose Our Ai Education Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional ai education solutions that drive business success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
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
                Discover the advantages of working with our ai education experts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Contact our experts to discuss your ai education needs and get a customized solution.
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
          </div>
        </section>
      </div>
    </>
  );
};

export default AiEducationPage;
