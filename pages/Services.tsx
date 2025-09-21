import React from 'react';
import Link from 'next/link';

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Artificial intelligence and machine learning services',
      link: '/services/ai-solutions'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for your business',
      link: '/services/cybersecurity'
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and management',
      link: '/services/cloud-services'
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business with digital solutions',
      link: '/services/digital-transformation'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href={service.link}>
                <button className="bg-zion-blue text-white px-4 py-2 rounded hover:bg-zion-blue-dark">
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;