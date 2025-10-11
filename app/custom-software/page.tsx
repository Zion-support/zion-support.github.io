'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Settings, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CustomSoftwarePage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Bespoke Software Solutions',
      description: 'Custom software built specifically for your business requirements.',
      benefits: ['Tailored functionality', 'Scalable architecture', 'Modern tech stack', 'Ongoing maintenance']
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Connect your existing systems with new custom solutions.',
      benefits: ['API development', 'Data migration', 'Workflow automation', 'Legacy support']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Enhance the speed and efficiency of your applications.',
      benefits: ['Speed improvements', 'Resource optimization', 'Scalability', 'Monitoring']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Custom Software - Zion Tech Group</title>
        <meta name="description" content="Professional custom software development services for your business needs." />
        <meta name="keywords" content="custom software, bespoke solutions, software development, system integration" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Custom Software
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with custom software solutions designed specifically for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Your Project
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Custom Software Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We create powerful, scalable software solutions that grow with your business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Custom Software?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your requirements and create the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CustomSoftwarePage;