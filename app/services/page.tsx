<<<<<<< HEAD
=======
'use client';
>>>>>>> cursor/delete-records-a75e
import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced Page solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
=======
const ServicesPage = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Comprehensive AI solutions for your business needs',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'IT Services',
      description: 'Complete IT infrastructure and support services',
      features: ['Cloud Migration', 'System Administration', 'Network Security', 'Data Management']
    },
    {
      title: 'Consultation',
      description: 'Expert consultation for technology strategy',
      features: ['Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Strategic Planning']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive AI and IT solutions to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
>>>>>>> cursor/delete-records-a75e
