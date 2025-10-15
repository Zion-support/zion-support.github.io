import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';

const PageFiveGOptimizationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>5G Optimization - Zion Tech Group</title>
        <meta name="description" content="Expert 5G optimization services to maximize network performance, efficiency, and user experience." />
        <meta name="keywords" content="5G optimization, network optimization, performance tuning, 5G efficiency" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Optimization
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert 5G optimization services to maximize network performance, efficiency, and user experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageFiveGOptimizationPage;