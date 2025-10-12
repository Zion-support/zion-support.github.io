import React from 'react';
import { Helmet } from 'react-helmet-async';

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Main | Zion Tech Group</title>
        <meta name="description" content="Professional Main services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="main, AI solutions, IT services, Zion Tech Group, main" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Main</h1>
          <p className="text-lg text-gray-300 mb-8">Professional main services coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;