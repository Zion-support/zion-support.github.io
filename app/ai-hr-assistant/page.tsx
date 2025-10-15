import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIHRAssistantPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI HR Assistant Pro - Zion Tech Group</title>
        <meta name="description" content="Comprehensive HR management platform with AI-powered recruitment, employee analytics, and automated HR processes." />
        <meta name="keywords" content="AI HR, HR management, AI recruitment, employee analytics, HR automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="text-8xl mb-8">👥</div>
              <h1 className="text-5xl md:text-6xl font-bold">
                AI <span className="gradient-text">HR Assistant Pro</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive HR management platform with AI-powered recruitment, employee analytics, and automated HR processes.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIHRAssistantPage;