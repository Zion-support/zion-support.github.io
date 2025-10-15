import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Advanced AI Infrastructure solutions for machine learning, deep learning, and AI model deployment. Scalable AI infrastructure for enterprise applications." />
        <meta name="keywords" content="AI infrastructure, machine learning infrastructure, deep learning, AI model deployment, GPU computing, AI platform" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-infrastructure" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
                AI Infrastructure
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced AI infrastructure solutions for machine learning, deep learning, and AI model deployment
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">GPU Computing</h2>
                <p className="text-gray-300 mb-4">
                  High-performance GPU computing infrastructure for training and inference of deep learning models.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• NVIDIA GPU clusters</li>
                  <li>• Distributed training</li>
                  <li>• Model optimization</li>
                  <li>• Performance monitoring</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Model Deployment</h2>
                <p className="text-gray-300 mb-4">
                  Scalable AI model deployment infrastructure with automatic scaling and monitoring capabilities.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Model serving</li>
                  <li>• A/B testing</li>
                  <li>• Model versioning</li>
                  <li>• Performance tracking</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">High Performance</h3>
                  <p className="text-gray-300 text-sm">Optimized for AI workloads</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Scalable</h3>
                  <p className="text-gray-300 text-sm">Auto-scaling AI infrastructure</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Secure</h3>
                  <p className="text-gray-300 text-sm">Enterprise-grade security</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                Get Started with AI Infrastructure
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

export default AIInfrastructurePage;