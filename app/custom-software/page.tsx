'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code2, Wrench, Database, Smartphone, Globe, CheckCircle, ArrowRight, Zap, Shield, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CustomSoftwarePage: React.FC = () => {
  const features = [
    {
      icon: Code2,
      title: 'Bespoke Software Solutions',
      description: 'Custom software applications designed and developed specifically for your business needs and workflows.',
      benefits: ['Tailored functionality', 'Business process automation', 'Scalable architecture', 'Ongoing support']
    },
    {
      icon: Wrench,
      title: 'System Customization',
      description: 'Modify and enhance existing software systems to better align with your specific requirements.',
      benefits: ['Legacy system updates', 'Feature enhancements', 'Integration improvements', 'Performance optimization']
    },
    {
      icon: Database,
      title: 'Data Management Solutions',
      description: 'Comprehensive data management systems for efficient storage, processing, and analysis of your business data.',
      benefits: ['Data modeling', 'Database design', 'ETL processes', 'Analytics integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      benefits: ['Native performance', 'Cross-platform compatibility', 'Offline functionality', 'Push notifications']
    }
  ];

  const industries = [
    'Healthcare & Medical',
    'Financial Services',
    'E-commerce & Retail',
    'Manufacturing',
    'Education & E-learning',
    'Real Estate',
    'Logistics & Supply Chain',
    'Government & Public Sector'
  ];

  return (
    <>
      <Helmet>
        <title>Custom Software - Zion Tech Group</title>
        <meta name="description" content="Professional custom software development services tailored to your business requirements and objectives." />
        <meta name="keywords" content="custom software, software development, bespoke solutions, mobile apps, web applications, system integration" />
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Software</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with custom software solutions designed to meet your unique requirements and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Case Studies
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
                Our Custom Software Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive software development solutions tailored to your business needs
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

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Custom software solutions across diverse industries and sectors
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center justify-center bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <span className="text-white text-center">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Custom Software?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your requirements and create a software solution that perfectly fits your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Request Quote
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default CustomSoftwarePage;