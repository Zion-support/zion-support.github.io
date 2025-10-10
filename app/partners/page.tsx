import React from 'react';
import { Helmet } from 'react-helmet-async';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: 'Microsoft',
      description: 'Cloud infrastructure and AI services partnership'
    },
    {
      name: 'Amazon Web Services',
      logo: 'AWS',
      description: 'Cloud computing and machine learning solutions'
    },
    {
      name: 'Google Cloud',
      logo: 'Google Cloud',
      description: 'AI and data analytics platform integration'
    },
    {
      name: 'IBM',
      logo: 'IBM',
      description: 'Enterprise AI and blockchain solutions'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Learn about our strategic partnerships with leading technology companies to deliver the best solutions for our clients." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with leading technology companies to deliver the best solutions for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">{partner.logo}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in partnering with us?</h2>
            <p className="text-gray-600 mb-6">
              We're always looking for strategic partnerships that can benefit our clients.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;