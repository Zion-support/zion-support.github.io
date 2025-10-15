import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContainerOrchestrationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Container Orchestration Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced container orchestration with Kubernetes, Docker Swarm, and custom solutions. Manage, scale, and deploy containerized applications with enterprise-grade reliability." />
        <meta name="keywords" content="container orchestration, Kubernetes, Docker, microservices, container management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Container Orchestration Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Streamline your containerized applications with advanced orchestration. 
              Manage, scale, and deploy with enterprise-grade reliability and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Enterprise Container Management
              </h2>
              <p className="text-gray-300 mb-6">
                Our container orchestration solutions provide automated deployment, 
                scaling, and management of containerized applications. Built on 
                Kubernetes and other industry-leading platforms for maximum reliability.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Kubernetes management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Auto-scaling capabilities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Service discovery
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Load balancing
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Orchestration Features</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">99.9%</div>
                    <div className="text-sm text-gray-300">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">1000+</div>
                    <div className="text-sm text-gray-300">Containers</div>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  View Dashboard
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Kubernetes</h3>
              <p className="text-gray-300">
                Full Kubernetes deployment and management for complex containerized applications.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Docker Swarm</h3>
              <p className="text-gray-300">
                Simplified container orchestration for smaller deployments and teams.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-300">
                Tailored orchestration solutions for specific business requirements.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Scale Your Container Infrastructure
            </h2>
            <p className="text-gray-300 mb-8">
              Partner with us for reliable container orchestration solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Get Started
              </button>
              <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                View Architecture
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerOrchestrationPage;