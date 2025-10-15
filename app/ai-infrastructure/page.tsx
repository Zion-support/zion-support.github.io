import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Infrastructure Solutions - Zion Tech Group</title>
        <meta name="description" content="Scalable AI infrastructure solutions for enterprise deployments. GPU clusters, ML pipelines, and AI model hosting with high availability and performance." />
        <meta name="keywords" content="AI infrastructure, ML infrastructure, GPU clusters, AI hosting, machine learning platform" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Infrastructure Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scalable, high-performance AI infrastructure for enterprise deployments. 
              GPU clusters, ML pipelines, and AI model hosting solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Enterprise-Grade AI Infrastructure
              </h2>
              <p className="text-gray-300 mb-6">
                Our AI infrastructure solutions provide the compute power, storage, 
                and networking capabilities needed to run AI workloads at scale. 
                Built for performance, reliability, and cost efficiency.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  GPU clusters and compute nodes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  ML pipeline orchestration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Model serving and hosting
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Auto-scaling capabilities
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Infrastructure Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">GPU Nodes</span>
                  <span className="text-cyan-400 font-bold">100+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Storage Capacity</span>
                  <span className="text-cyan-400 font-bold">10PB+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Uptime</span>
                  <span className="text-cyan-400 font-bold">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Global Regions</span>
                  <span className="text-cyan-400 font-bold">15+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Training Infrastructure</h3>
              <p className="text-gray-300">
                High-performance GPU clusters optimized for training large-scale AI models.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Inference Hosting</h3>
              <p className="text-gray-300">
                Scalable model serving infrastructure with low-latency inference capabilities.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Data Pipeline</h3>
              <p className="text-gray-300">
                Automated data processing and ML pipeline orchestration for production workloads.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Scale Your AI Operations
            </h2>
            <p className="text-gray-300 mb-8">
              Partner with us to build robust AI infrastructure that grows with your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Get Infrastructure Quote
              </button>
              <button className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                View Architecture
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIInfrastructurePage;