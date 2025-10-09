'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITConsultingPage: React.FC = () => {
  const consultingAreas = [
    {
      title: 'IT Strategy',
      description: 'Develop comprehensive IT strategies aligned with your business objectives.',
      icon: '📋'
    },
    {
      title: 'Technology Assessment',
      description: 'Evaluate your current technology stack and identify improvement opportunities.',
      icon: '🔍'
    },
    {
      title: 'Digital Transformation',
      description: 'Guide your organization through digital transformation initiatives.',
      icon: '🚀'
    },
    {
      title: 'Cloud Migration',
      description: 'Plan and execute seamless cloud migration strategies.',
      icon: '☁️'
    }
  ];

  const expertise = [
    'Enterprise Architecture',
    'Cloud Strategy & Migration',
    'Security & Compliance',
    'Data Management',
    'Process Optimization',
    'Technology Integration'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IT Consulting
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic IT consulting to help you make informed technology decisions and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {consultingAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expertise.map((skill, index) => (
              <div key={index} className="flex items-center">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your IT Strategy?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert guidance to optimize your technology investments and drive business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Schedule Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all"
            >
              Call: (302) 464-0950
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ITConsultingPage;