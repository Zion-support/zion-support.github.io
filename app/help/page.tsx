import React from 'react';
import { Helmet } from 'react-helmet-async';

const HelpPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Help Center - Zion Tech Group | Support & Documentation</title>
        <meta name="description" content="Get help with our services. Find documentation, FAQs, and support resources. Contact us at +1 302 464 0950." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Help Center</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Find answers to your questions and get the support you need. 
                Our comprehensive help center has everything you need to succeed.
              </p>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quick answers to common questions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I get started?</h3>
                <p className="text-gray-600">Contact us for a free consultation to discuss your needs and get started with our services.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is your response time?</h3>
                <p className="text-gray-600">We typically respond to inquiries within 24 hours during business days.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer support?</h3>
                <p className="text-gray-600">Yes, we provide comprehensive support for all our services and solutions.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I cancel my service?</h3>
                <p className="text-gray-600">Yes, you can cancel your service with 30 days notice. Contact us for details.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpPage;