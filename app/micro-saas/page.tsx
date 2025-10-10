import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaasPage: React.FC = () => {
  const features = [
    {
      title: 'Rapid Development',
      description: 'Get your SaaS product to market quickly with our proven development process.'
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to handle growth from startup to enterprise scale.'
    },
    {
      title: 'Modern Tech Stack',
      description: 'Using the latest technologies for optimal performance and user experience.'
    },
    {
      title: 'Cloud-Native',
      description: 'Designed for cloud deployment with automatic scaling and high availability.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Development - Zion Tech Group</title>
        <meta name="description" content="Build and launch your micro SaaS product with our expert development team. Rapid development, scalable architecture, and modern tech stack." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Micro SaaS Development</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build and launch your micro SaaS product with our expert development team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h2>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Micro SaaS?</h2>
            <p className="text-gray-600 mb-6">
              Let's discuss your idea and create a plan to bring it to life.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasPage;