import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About Zion Tech Group</h1>
          <p className="text-gray-300 text-lg">Professional solutions coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;