import React from 'react';
import { Helmet } from 'react-helmet-async';

const SupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Contact our technical support team for assistance." />
        <meta name="keywords" content="support, help, technical support, customer service, assistance" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're here to help you succeed with our services.
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Support</h2>
                <p className="text-gray-300 mb-6">
                  Our technical support team is available to help you with any questions or issues.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:support@ziontechgroup.com"
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Email Support
                  </a>
                  <a 
                    href="/contact"
                    className="px-6 py-3 border border-purple-400 text-purple-300 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                  >
                    Contact Form
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;