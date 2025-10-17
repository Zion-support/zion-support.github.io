import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import SEOHead from '../components/SEOHead';
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c

const ContainerOrchestrationPage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
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
=======
      <SEOHead
        title="Container Orchestration - Zion Tech Group"
        description="Manage and scale containerized applications with our container orchestration solutions. Kubernetes, Docker Swarm, and microservices deployment."
        keywords="container orchestration, Kubernetes, Docker Swarm, microservices, container management, cloud-native applications"
        canonicalUrl="https://ziontechgroup.com/container-orchestration"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Container Orchestration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage and scale containerized applications with our container orchestration solutions. Kubernetes, Docker Swarm, and microservices deployment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Orchestration Platforms</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Kubernetes cluster management
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Docker Swarm orchestration
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Service mesh integration
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Auto-scaling and load balancing
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Health monitoring and recovery
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Container Services</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Container registry management
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  CI/CD pipeline integration
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Security scanning and compliance
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Multi-cloud deployment
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Disaster recovery and backup
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Orchestration Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Scalability</h3>
                <p className="text-gray-300">Automatically scale applications based on demand.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Management</h3>
                <p className="text-gray-300">Centralized management of containerized applications.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Reliability</h3>
                <p className="text-gray-300">High availability and fault tolerance for applications.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/contact?service=container-orchestration"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Orchestrate Containers
            </a>
          </div>
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
        </div>
      </div>
    </>
  );
};

export default ContainerOrchestrationPage;