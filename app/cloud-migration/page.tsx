'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Cloud, Zap, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';

const CloudMigrationPage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Cloud Migration',
      description: 'Enterprise-grade security and compliance for your cloud migration journey.',
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and flexible cloud solutions tailored to your business needs.',
    },
    {
      icon: Zap,
      title: 'Fast Migration',
      description: 'Rapid and efficient migration with minimal downtime and disruption.',
    },
    {
      icon: BarChart,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and analytics for optimal cloud performance.',
    },
  ];

  const benefits = [
    'Advanced cloud migration technology',
    'Real-time migration monitoring',
    'Enterprise-grade security and compliance',
    'Scalable and flexible migration solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration - Zion Tech Group</title>
        <meta name="description" content="Professional Cloud Migration services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="cloud migration, cloud services, cloud solutions, AI technology" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud Migration Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Seamlessly migrate your business to the cloud with our expert services. 
                Powered by cutting-edge AI technology and industry expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
                <button className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Cloud Migration Services</h2>
              <p className="text-xl text-gray-300">Comprehensive cloud solutions for modern businesses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Cloud Migration?</h2>
              <p className="text-xl text-gray-300">Transform your business with secure and efficient cloud solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Migrate to the Cloud?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how our cloud migration services can transform your business.
            </p>
            <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudMigrationPage;