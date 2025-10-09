import React from 'react';
import { Helmet } from 'react-helmet-async';

const MarketingToolsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Marketing Tools - Zion Tech Group</title>
        <meta name="description" content="Professional marketing tools and solutions from Zion Tech Group to boost your business growth." />
        <link rel="canonical" href="https://ziontechgroup.com/marketing-tools" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Marketing Tools</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Professional marketing tools and solutions to accelerate your business growth and reach your target audience effectively.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Marketing Tools</h2>
          <p className="text-gray-600 mb-6">
            We provide a comprehensive suite of marketing tools including AI-powered content generation, social media management, and analytics platforms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            For more information about our marketing tools, contact us at kleber@ziontechgroup.com or +1 302 464 0950.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketingToolsPage;