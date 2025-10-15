import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const PartnershipsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Partnerships - Zion Tech Group | Partner With Us</title>
        <meta name="description" content="Partner with Zion Tech Group. Explore partnership opportunities and join our network of technology partners." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Partnership Opportunities</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Join our network of technology partners and grow your business with us. 
                We offer various partnership programs to suit different business models.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold">
                  Become a Partner
                </Link>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors text-lg font-semibold">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Partnership Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the partnership program that best fits your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technology Partner</h3>
                <p className="text-gray-600 mb-6">Integrate your technology with our solutions</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• API integration support</li>
                  <li>• Joint marketing opportunities</li>
                  <li>• Technical collaboration</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Reseller Partner</h3>
                <p className="text-gray-600 mb-6">Resell our solutions to your clients</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Competitive pricing</li>
                  <li>• Sales training and support</li>
                  <li>• Marketing materials</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Strategic Partner</h3>
                <p className="text-gray-600 mb-6">Long-term strategic collaboration</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Joint product development</li>
                  <li>• Revenue sharing</li>
                  <li>• Exclusive territories</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnershipsPage;