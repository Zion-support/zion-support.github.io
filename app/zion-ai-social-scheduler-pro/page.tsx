import React from 'react';
import { Helmet } from 'react-helmet-async';

const AISocialSchedulerProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Social Media Scheduler Pro - Zion Tech Group | Automated Social Media</title>
        <meta name="description" content="Automate social media posting with AI optimization for optimal timing and engagement across all platforms." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Social Media Scheduler Pro
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automate social media posting with AI optimization for optimal timing and engagement across all platforms.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Coming Soon</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're working on creating an amazing social media scheduling experience for you. 
              In the meantime, please contact us for a free consultation about your social media needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Free Consultation
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISocialSchedulerProPage;