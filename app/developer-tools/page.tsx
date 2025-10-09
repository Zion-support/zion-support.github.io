import React from 'react';
import { Helmet } from 'react-helmet-async';

const DeveloperToolsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Developer Tools - Zion Tech Group</title>
        <meta name="description" content="Professional developer tools and resources from Zion Tech Group for modern software development." />
        <link rel="canonical" href="https://ziontechgroup.com/developer-tools" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Developer Tools</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Professional developer tools and resources to accelerate your software development workflow.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Tools</h2>
          <p className="text-gray-600 mb-6">
            We provide a comprehensive suite of developer tools including AI-powered code analysis, automated testing, and deployment automation.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            For more information about our developer tools, contact us at kleber@ziontechgroup.com or +1 302 464 0950.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperToolsPage;