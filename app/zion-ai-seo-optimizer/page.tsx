import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicePage: React.FC = () => {
  const serviceName = window.location.pathname.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Service';
  
  return (
    <>
      <Helmet>
        <title>{serviceName} - Zion Tech Group</title>
        <meta name="description" content={`Advanced ${serviceName} solutions powered by AI and cutting-edge technology.`} />
        <meta name="keywords" content={`${serviceName}, AI, automation, technology solutions`} />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              {serviceName}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced {serviceName} solutions powered by AI and cutting-edge technology. 
              Transform your business with our innovative approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">AI-Powered</h3>
              <p className="text-gray-300 mb-6">
                Leverage artificial intelligence to automate and optimize your processes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300 mb-6">
                Built to grow with your business and adapt to changing needs.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Enterprise Ready</h3>
              <p className="text-gray-300 mb-6">
                Secure, reliable, and designed for enterprise environments.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our experts to learn how {serviceName} can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
