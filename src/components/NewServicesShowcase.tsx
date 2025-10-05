import React from 'react';
import { Link } from 'react-router-dom';

const NewServicesShowcase: React.FC = () => {
  const services = [
    {
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms for predictive insights and data-driven decisions.',
      icon: '📊',
      link: '/services/ai-analytics',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Quantum Computing Solutions',
      description: 'Revolutionary quantum algorithms for complex problem solving and optimization.',
      icon: '⚛️',
      link: '/services/quantum-computing',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing infrastructure with intelligent automation and monitoring.',
      icon: '🤖',
      link: '/services/autonomous-systems',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Blockchain Integration',
      description: 'Secure, decentralized solutions for enterprise applications and data integrity.',
      icon: '⛓️',
      link: '/services/blockchain',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Edge Computing',
      description: 'Distributed processing for real-time applications and IoT connectivity.',
      icon: '🌐',
      link: '/services/edge-computing',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced threat detection and prevention with AI-powered security protocols.',
      icon: '🔒',
      link: '/services/cybersecurity',
      color: 'from-gray-500 to-slate-500'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary Services 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our cutting-edge services that leverage the latest in AI, 
            quantum computing, and autonomous systems to transform your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <Link
                to={service.link}
                className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity`}
              >
                Learn More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Services
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewServicesShowcase;