import React from 'react';
import { Helmet } from 'react-helmet-async';

const ItServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud.',
      icon: '☁️'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automate your development and deployment processes.',
      icon: '🔄'
    },
    {
      title: 'Security Audits',
      description: 'Comprehensive security assessments and improvements.',
      icon: '🔒'
    },
    {
      title: 'Database Management',
      description: 'Optimize and maintain your database systems.',
      icon: '🗄️'
    },
    {
      title: 'Network Infrastructure',
      description: 'Design and implement robust network solutions.',
      icon: '🌐'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology roadmaps.',
      icon: '💡'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, DevOps, security audits, and infrastructure management for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">IT Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions to keep your business running smoothly and securely.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-900 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Need IT Support?</h2>
            <p className="text-xl mb-6">
              Our expert team is ready to help with your IT needs.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItServicesPage;