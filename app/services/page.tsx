import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesPage = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions for business automation and optimization.',
      href: '/ai-solutions'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      href: '/cybersecurity'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern business needs.',
      href: '/cloud-infrastructure'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies and implementation.',
      href: '/digital-transformation'
    },
    {
      title: 'IT Services',
      description: 'Professional IT support and managed services.',
      href: '/it-services'
    },
    {
      title: 'Micro SAAS',
      description: 'Custom software solutions and micro-SaaS development.',
      href: '/micro-saas'
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, cybersecurity, cloud infrastructure, and digital transformation." />
      </Helmet>
      
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <a
                    href={service.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServicesPage;