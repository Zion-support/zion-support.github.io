import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import servicesData from '../../data/services.json';

const ServicesPage: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'ai-services', name: 'AI & Machine Learning' },
    { id: 'cloud-services', name: 'Cloud & Infrastructure' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'data-services', name: 'Data & Analytics' },
    { id: 'mobile-development', name: 'Mobile Development' },
    { id: 'blockchain', name: 'Blockchain & Web3' },
    { id: 'consulting', name: 'Technology Consulting' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? Object.values(servicesData.services)
    : [servicesData.services[selectedCategory]];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI development, cloud solutions, cybersecurity, web development, and more. Transform your business with our cutting-edge solutions." />
        <meta name="keywords" content="AI services, cloud migration, cybersecurity, web development, mobile apps, blockchain, consulting, Zion Tech Group" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions to transform your business. From AI development to cybersecurity, 
            we provide cutting-edge services tailored to your needs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {filteredServices.map((category) => (
            <div key={category.category} className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {category.category}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service) => (
                  <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pricing */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Starting from:</h4>
                        <div className="text-2xl font-bold text-blue-600">
                          {service.pricing.basic}
                        </div>
                      </div>

                      {/* Delivery Time */}
                      <div className="mb-6">
                        <span className="text-sm text-gray-500">
                          Delivery: {service.delivery_time}
                        </span>
                      </div>

                      {/* CTA Button */}
                      <Link href={service.url}>
                        <span className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer">
                          Learn More
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <span className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer inline-block">
                  Get Free Consultation
                </span>
              </Link>
              <a 
                href={`tel:${servicesData.contact.phone}`}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer inline-block"
              >
                Call Now: {servicesData.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;