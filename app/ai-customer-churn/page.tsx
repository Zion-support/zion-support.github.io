import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiCustomerChurnPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Customer Churn - Zion Tech Group</title>
        <meta name="description" content="AI Customer Churn services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="ai-customer-churn, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Customer Churn
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional AI customer churn services by Zion Tech Group.
            </p>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-lg text-gray-300 mb-8">
              We're working on bringing you comprehensive AI customer churn solutions. 
              Contact us to learn more about our services.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiCustomerChurnPage;