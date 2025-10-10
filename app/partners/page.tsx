'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: 'https://via.placeholder.com/150x80/0078d4/ffffff?text=Microsoft',
      description: 'Strategic partnership for cloud solutions and AI services',
      website: 'https://microsoft.com'
    },
    {
      name: 'Google Cloud',
      logo: 'https://via.placeholder.com/150x80/4285f4/ffffff?text=Google+Cloud',
      description: 'Collaboration on machine learning and data analytics',
      website: 'https://cloud.google.com'
    },
    {
      name: 'Amazon Web Services',
      logo: 'https://via.placeholder.com/150x80/ff9900/ffffff?text=AWS',
      description: 'Infrastructure and cloud computing solutions',
      website: 'https://aws.amazon.com'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint research and development',
    'Enhanced service offerings',
    'Global market reach',
    'Technical expertise sharing',
    'Innovation acceleration'
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Our strategic partners and collaborations" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">Our Partners</h1>
          <p className="text-lg text-gray-300 mb-12">
            We work with industry leaders to deliver the best solutions to our clients.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-full h-20 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-gray-300 mb-4">{partner.description}</p>
                <a 
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Partnership Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PartnersPage;