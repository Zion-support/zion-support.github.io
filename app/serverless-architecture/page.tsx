import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServerlessArchitecturePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Serverless Architecture Solutions - Zion Tech Group</title>
        <meta name="description" content="Build scalable, cost-effective applications with our serverless architecture solutions. Focus on code, not infrastructure management." />
        <meta name="keywords" content="serverless architecture, cloud functions, serverless computing, microservices, cloud infrastructure" />
        <link rel="canonical" href="https://ziontechgroup.com/serverless-architecture" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              Serverless Architecture
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build scalable, cost-effective applications with our serverless architecture solutions. 
              Focus on code, not infrastructure management, and scale automatically with demand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-4">Auto Scaling</h3>
              <p className="text-gray-300">
                Automatically scale your applications based on demand without manual intervention.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-white mb-4">Cost Effective</h3>
              <p className="text-gray-300">
                Pay only for the compute time you use, reducing infrastructure costs significantly.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-white mb-4">No Server Management</h3>
              <p className="text-gray-300">
                Focus on building features instead of managing servers and infrastructure.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-4">Rapid Deployment</h3>
              <p className="text-gray-300">
                Deploy applications quickly with built-in CI/CD and version control.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-4">Built-in Security</h3>
              <p className="text-gray-300">
                Leverage cloud provider security features and best practices.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">Monitoring & Analytics</h3>
              <p className="text-gray-300">
                Monitor performance and costs with comprehensive analytics and logging.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Go Serverless?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 neon-glow"
              >
                Get Started Today
              </a>
              <a 
                href="/pricing" 
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServerlessArchitecturePage;