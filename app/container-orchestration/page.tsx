import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContainerOrchestrationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Container Orchestration Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced container orchestration solutions for Kubernetes, Docker, and microservices. Manage and scale containerized applications efficiently." />
        <meta name="keywords" content="container orchestration, Kubernetes, Docker, microservices, container management, cloud native" />
        <link rel="canonical" href="https://ziontechgroup.com/container-orchestration" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              Container Orchestration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage and scale containerized applications with our advanced orchestration solutions. 
              Deploy, manage, and monitor microservices with Kubernetes and Docker expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">☸️</div>
              <h3 className="text-xl font-semibold text-white mb-4">Kubernetes Management</h3>
              <p className="text-gray-300">
                Deploy and manage Kubernetes clusters with automated scaling and monitoring.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🐳</div>
              <h3 className="text-xl font-semibold text-white mb-4">Docker Solutions</h3>
              <p className="text-gray-300">
                Containerize applications and manage Docker environments efficiently.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-white mb-4">Microservices Architecture</h3>
              <p className="text-gray-300">
                Design and implement microservices with proper service discovery and communication.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">Monitoring & Logging</h3>
              <p className="text-gray-300">
                Monitor container health and performance with comprehensive logging solutions.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-4">Security & Compliance</h3>
              <p className="text-gray-300">
                Implement security best practices and compliance for containerized applications.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-4">CI/CD Integration</h3>
              <p className="text-gray-300">
                Integrate container orchestration with your CI/CD pipeline for automated deployments.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Orchestrate Containers?</h2>
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

export default ContainerOrchestrationPage;