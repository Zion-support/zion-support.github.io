import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
  keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting'
};

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI solutions including custom LLM development, 
              RAG systems, AI agents, computer vision, and MLOps solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 backdrop-blur-sm"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive AI solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom LLM Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Build custom large language models tailored to your specific use cases and data.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Fine-tuned models for your domain
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Custom training pipelines
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Performance optimization
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">RAG Systems</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Build retrieval-augmented generation systems for intelligent document processing.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Document indexing and search
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Context-aware responses
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Real-time knowledge updates
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl mb-6">👁️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Computer Vision</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Implement computer vision solutions for image recognition, object detection, and analysis.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Image classification
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Object detection and tracking
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Real-time video processing
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl mb-6">⚙️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">MLOps Solutions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                End-to-end machine learning operations for model deployment and monitoring.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Model versioning and deployment
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Performance monitoring
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Automated retraining pipelines
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Agents</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Build intelligent agents that can perform complex tasks autonomously.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Task automation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Decision making
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Multi-step workflows
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl mb-6">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Consulting</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Strategic AI consulting to help you identify opportunities and plan implementations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  AI strategy development
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Technology assessment
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Implementation planning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI services can help you achieve your business goals.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}