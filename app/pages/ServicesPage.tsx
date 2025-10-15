import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { services, Service } from '../data/servicesData';
>>>>>>> cursor/fix-errors-and-merge-to-main-6911

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Explore our comprehensive range of AI and IT services." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">AI Development</h3>
              <p className="text-gray-600">Custom AI solutions tailored to your business needs.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600">Modern, responsive web applications.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Mobile Apps</h3>
              <p className="text-gray-600">Native and cross-platform mobile applications.</p>
            </div>
          </div>
        </div>
      </div>
=======
        <meta name="description" content="Explore our comprehensive range of AI and IT services designed to transform your business." />
      </Helmet>
      
      <main id="main-content" className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: Service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Starting at</span>
                    <span className="text-lg font-semibold text-blue-600">
                      ${service.pricing.basic.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
>>>>>>> cursor/fix-errors-and-merge-to-main-6911
    </>
  );
};

<<<<<<< HEAD
export default ServicesPage;
=======
export default ServicesPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6911
=======

export default function PagesPage() {
  return (
    <>
      <Helmet>
        <title>Pages - Zion Tech Group</title>
        <meta name="description" content="Professional pages solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Pages</h1>
          <p className="text-lg text-gray-600">
            Professional pages solutions for modern businesses.
          </p>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-15e9
