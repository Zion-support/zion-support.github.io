import React from 'react';
import { Helmet } from 'react-helmet-async';
// import { Brain, Mail, MapPin } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, and automation. Enterprise-grade AI solutions starting at $800/month." />
      </Helmet>
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with our comprehensive AI solutions
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
          <p className="text-gray-300">Our AI services are currently under development.</p>
        </div>
      </main>
    </div>
  );
};

export default AIServicesPage;
