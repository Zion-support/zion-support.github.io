import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServerlessArchitecturePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Serverless Architecture - Zion Tech Group</title>
        <meta name="description" content="Advanced Serverless Architecture solutions for scalable, cost-effective applications. Build and deploy serverless applications with our platform." />
        <meta name="keywords" content="serverless architecture, serverless computing, cloud functions, microservices, scalable applications, cost-effective solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/serverless-architecture" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
                Serverless Architecture
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced serverless architecture solutions for scalable, cost-effective, and maintenance-free applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Cloud Functions</h2>
                <p className="text-gray-300 mb-4">
                  Deploy and manage cloud functions that automatically scale based on demand without server management overhead.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Auto-scaling functions</li>
                  <li>• Event-driven architecture</li>
                  <li>• Pay-per-execution pricing</li>
                  <li>• Zero server management</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Microservices</h2>
                <p className="text-gray-300 mb-4">
                  Build and deploy microservices using serverless architecture for better scalability and maintainability.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Independent scaling</li>
                  <li>• Technology diversity</li>
                  <li>• Fault isolation</li>
                  <li>• Easy deployment</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Auto-Scaling</h3>
                  <p className="text-gray-300 text-sm">Automatic scaling based on demand</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cost-Effective</h3>
                  <p className="text-gray-300 text-sm">Pay only for what you use</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">High Availability</h3>
                  <p className="text-gray-300 text-sm">Built-in high availability and reliability</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                Get Started with Serverless
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServerlessArchitecturePage;