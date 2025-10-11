'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AiCustomerSupportPage: React.FC = () => {
  const features = [
    {
      title: 'AiCustomerSupport',
      description: 'Professional aicustomersupport services and solutions.',
      benefits: ['Expert Solutions', 'Advanced Technology', 'Proven Results', 'Client Satisfaction']
    },
    {
      title: 'Advanced Technology',
      description: 'Cutting-edge tools and technologies to deliver superior results.',
      benefits: ['Latest Tools', 'Modern Methods', 'Scalable Solutions', 'Future-Ready']
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients.',
      benefits: ['High Success Rate', 'Client Satisfaction', 'Ongoing Support', 'Continuous Improvement']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AiCustomerSupport - Zion Tech Group</title>
        <meta name="description" content="Professional aicustomersupport services and solutions." />
        <meta name="keywords" content="aicustomersupport, services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AiCustomerSupport
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional aicustomersupport services and solutions for your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center mx-auto">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AiCustomerSupportPage;
