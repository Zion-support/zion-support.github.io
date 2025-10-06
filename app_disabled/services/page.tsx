import React from 'react';

export default function ServicesPage() {
  const services = [
    {
      title: 'AI Consulting',
      description: 'Expert guidance for your AI transformation journey with proven methodologies and best practices.',
      icon: '🤖'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing AI systems that optimize performance and reduce operational costs by up to 70%.',
      icon: '⚡'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete enterprise modernization with AI-powered solutions tailored to your business needs.',
      icon: '🚀'
    },
    {
      title: 'Micro SaaS Development',
      description: 'Custom micro SaaS solutions that scale with your business and deliver immediate value.',
      icon: '💼'
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure with zero downtime and enhanced security.',
      icon: '☁️'
    },
    {
      title: 'DevOps & SRE',
      description: 'Reliable, scalable infrastructure with automated deployment and monitoring systems.',
      icon: '🔧'
    }
  ];

  return (
    <div className='min-h-screen bg-gray-50 py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-900 mb-6'>Our Services</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Comprehensive AI and IT solutions designed to transform your enterprise and drive measurable results.
          </p>
        </div>
        
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div key={index} className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='text-4xl mb-4'>{service.icon}</div>
              <h2 className='text-xl font-semibold text-gray-900 mb-3'>{service.title}</h2>
              <p className='text-gray-600'>{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-2xl'>
            <h2 className='text-3xl font-bold mb-4'>Ready to Transform Your Business?</h2>
            <p className='text-xl mb-8'>Get started with our AI solutions and achieve 300% ROI guaranteed.</p>
            <button className='bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300'>
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}