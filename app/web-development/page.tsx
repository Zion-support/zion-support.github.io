import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const WebDevelopmentPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Web Development Services - Zion Tech Group | Professional Web Solutions</title>
        <meta name="description" content="Professional web development services including responsive websites, e-commerce platforms, and web applications. Contact us at +1 302 464 0950." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Web Development Services</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Professional web development services to create stunning, responsive websites and web applications 
                that drive business growth and user engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
                  Get Web Quote
                </Link>
                <a href="tel:+13024640950" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Web Development Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern web solutions built with the latest technologies and best practices
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Responsive Websites</h3>
                <p className="text-gray-600 mb-6">Mobile-first, responsive websites that work perfectly on all devices</p>
                <div className="text-2xl font-bold text-blue-600 mb-2">$2,500</div>
                <div className="text-sm text-gray-500">Starting price</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">E-commerce Platforms</h3>
                <p className="text-gray-600 mb-6">Full-featured online stores with payment processing and inventory management</p>
                <div className="text-2xl font-bold text-blue-600 mb-2">$8,000</div>
                <div className="text-sm text-gray-500">Starting price</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Web Applications</h3>
                <p className="text-gray-600 mb-6">Custom web applications built with modern frameworks and technologies</p>
                <div className="text-2xl font-bold text-blue-600 mb-2">$15,000</div>
                <div className="text-sm text-gray-500">Starting price</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDevelopmentPage;