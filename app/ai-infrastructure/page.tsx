import React from 'react';
import SEOHead from '../components/SEOHead';

const AIInfrastructurePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Infrastructure - Zion Tech Group"
        description="Comprehensive AI infrastructure solutions including GPU clusters, cloud computing, data processing, and AI model deployment platforms."
        keywords="AI infrastructure, GPU clusters, cloud computing, AI deployment, machine learning infrastructure, AI platform"
        canonicalUrl="https://ziontechgroup.com/ai-infrastructure"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI Infrastructure
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build and scale AI applications with our comprehensive infrastructure solutions including GPU clusters, cloud computing, and AI deployment platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Compute Infrastructure</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  High-performance GPU clusters
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Scalable cloud computing
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Edge computing solutions
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Container orchestration
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Auto-scaling capabilities
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">AI Platform Services</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Model training and deployment
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Data processing pipelines
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  MLOps and model management
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  API gateway and monitoring
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Security and compliance
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Infrastructure Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🖥️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">GPU Clusters</h3>
                <p className="text-gray-300">High-performance computing for AI model training and inference.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Cloud Platform</h3>
                <p className="text-gray-300">Scalable cloud infrastructure for AI workloads.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">MLOps Tools</h3>
                <p className="text-gray-300">Complete machine learning operations and deployment pipeline.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/contact?service=ai-infrastructure"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
            >
              Build AI Infrastructure
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIInfrastructurePage;