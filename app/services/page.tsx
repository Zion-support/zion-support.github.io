import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { services } from './data';

export default function ServicesIndexPage() {
  const grouped = services.reduce<Record<string, typeof services>>((acc, s) => {
    (acc[s.category] = acc[s.category] || []).push(s);
    return acc;
  }, {} as Record<string, typeof services>);

  return (
    <>
      <Helmet>
        <title>Services | Zion Tech Group - AI, Micro SaaS, and IT Solutions</title>
        <meta name="description" content="Comprehensive AI services, micro SaaS solutions, and IT consulting. Transform your business with cutting-edge technology and automation." />
        <meta name="keywords" content="AI services, micro SaaS, IT consulting, cloud migration, DevOps, enterprise software, automation" />
      </Helmet>
      
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation 
              and drive business growth.
            </p>
          </div>

          <div className="space-y-16">
            {Object.entries(grouped).map(([category, list]) => (
              <section key={category}>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{category}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {list.map(service => (
                    <Link 
                      key={service.slug} 
                      to={`/services/${service.slug}`} 
                      className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100"
                    >
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.headline}</p>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="text-center">
                        <div className="text-lg font-semibold text-blue-600 mb-2">
                          Starting from ${typeof service.pricing[0].pricePerMonthUsd === 'number' ? service.pricing[0].pricePerMonthUsd : 'Custom'}/month
                        </div>
                        <div className="text-sm text-gray-500">Learn More →</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-center text-white mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/case-studies" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}