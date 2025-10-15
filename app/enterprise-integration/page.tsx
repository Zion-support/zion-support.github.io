import React from 'react';
import { Helmet } from 'react-helmet-async';

const EnterpriseIntegrationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Enterprise Integration Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise integration services including system integration, data synchronization, and workflow automation." />
        <meta name="keywords" content="enterprise integration, system integration, data synchronization, workflow automation, API integration" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="text-8xl mb-8">🔗</div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Enterprise <span className="gradient-text">Integration Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive enterprise integration services including system integration, data synchronization, and workflow automation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EnterpriseIntegrationPage;