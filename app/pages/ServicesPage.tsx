import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive AI and IT services" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <main id="main-content" className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Features:</h3>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Pricing:</h3>
                  <div className="text-sm text-gray-600">
                    <p>Basic: ${service.pricing.basic.toLocaleString()}</p>
                    <p>Pro: ${service.pricing.pro.toLocaleString()}</p>
                    <p>Enterprise: ${service.pricing.enterprise.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default ServicesPage;