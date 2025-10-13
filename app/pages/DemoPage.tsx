import React from 'react';
import { Helmet } from 'react-helmet-async';

const DemoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Schedule a demo to see our AI and IT solutions in action." />
        <meta name="keywords" content="demo, schedule, AI solutions, IT services, consultation" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Demo</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Schedule a personalized demo to see how our solutions can transform your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;