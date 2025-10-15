import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContainerOrchestrationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Container Orchestration - Zion Tech Group</title>
        <meta name="description" content="Advanced Container Orchestration solutions for Docker, Kubernetes, and microservices management. Scale and manage containerized applications efficiently." />
        <meta name="keywords" content="container orchestration, Kubernetes, Docker, microservices, container management, cloud native, DevOps" />
        <link rel="canonical" href="https://ziontechgroup.com/container-orchestration" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
                Container Orchestration
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced container orchestration solutions for Docker, Kubernetes, and microservices management
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Kubernetes Management</h2>
                <p className="text-gray-300 mb-4">
                  Deploy, scale, and manage containerized applications using Kubernetes with advanced orchestration features.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Cluster management</li>
                  <li>• Auto-scaling</li>
                  <li>• Service discovery</li>
                  <li>• Load balancing</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Microservices Architecture</h2>
                <p className="text-gray-300 mb-4">
                  Build and manage microservices using container orchestration for better scalability and maintainability.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Service mesh</li>
                  <li>• API gateway</li>
                  <li>• Circuit breakers</li>
                  <li>• Health monitoring</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Container Management</h3>
                  <p className="text-gray-300 text-sm">Advanced container lifecycle management</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Auto-Scaling</h3>
                  <p className="text-gray-300 text-sm">Intelligent auto-scaling based on metrics</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
                  <p className="text-gray-300 text-sm">Enterprise-grade security and compliance</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                Get Started with Container Orchestration
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

export default ContainerOrchestrationPage;