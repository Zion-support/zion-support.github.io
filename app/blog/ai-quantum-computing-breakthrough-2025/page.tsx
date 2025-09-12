import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Tag, Star, Zap, Brain, Shield, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI-Quantum Computing Breakthrough: The Next Frontier in 2025',
  description: 'Explore the revolutionary convergence of AI and quantum computing that\'s reshaping industries and unlocking unprecedented computational power.',
  keywords: 'AI quantum computing, quantum AI, quantum machine learning, quantum algorithms, 2025 technology trends',
  openGraph: {
    title: 'AI-Quantum Computing Breakthrough: The Next Frontier in 2025',
    description: 'Explore the revolutionary convergence of AI and quantum computing that\'s reshaping industries and unlocking unprecedented computational power.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

export default function AIQuantumComputingBreakthrough2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              BREAKTHROUGH TECHNOLOGY
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Quantum Computing
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                The Next Frontier
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              The revolutionary convergence of artificial intelligence and quantum computing is unlocking 
              unprecedented computational power, reshaping industries, and solving problems once thought impossible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#quantum-ai-applications" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Explore Applications
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#quantum-ai-implementation" 
                className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-300"
              >
                Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">1000x</div>
              <div className="text-gray-600">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">$50B</div>
              <div className="text-gray-600">Market Value by 2030</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Quantum Advantage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum AI Applications */}
      <section id="quantum-ai-applications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quantum AI is transforming industries with unprecedented computational capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Drug Discovery</h3>
              <p className="text-gray-600 mb-4">
                Accelerating molecular simulation and drug design by 1000x, enabling rapid discovery 
                of treatments for complex diseases.
              </p>
              <div className="text-sm text-purple-600 font-medium">Healthcare & Pharma</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">
                Quantum-resistant encryption and threat detection systems that can identify 
                sophisticated attacks in real-time.
              </p>
              <div className="text-sm text-blue-600 font-medium">Security & Defense</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Modeling</h3>
              <p className="text-gray-600 mb-4">
                Complex risk analysis and portfolio optimization with quantum algorithms 
                processing millions of variables simultaneously.
              </p>
              <div className="text-sm text-indigo-600 font-medium">Finance & Banking</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Climate Modeling</h3>
              <p className="text-gray-600 mb-4">
                Advanced climate simulation and carbon capture optimization using 
                quantum-enhanced machine learning models.
              </p>
              <div className="text-sm text-green-600 font-medium">Sustainability</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Supply Chain</h3>
              <p className="text-gray-600 mb-4">
                Optimizing complex logistics networks and inventory management 
                with quantum optimization algorithms.
              </p>
              <div className="text-sm text-orange-600 font-medium">Logistics & Manufacturing</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Space Exploration</h3>
              <p className="text-gray-600 mb-4">
                Advanced trajectory optimization and materials science for 
                next-generation space missions and satellite networks.
              </p>
              <div className="text-sm text-pink-600 font-medium">Aerospace & Defense</div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section id="quantum-ai-implementation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Implementation Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive guide to integrating quantum AI into your organization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Phase 1: Foundation (Months 1-6)</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-purple-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quantum Readiness Assessment</h4>
                    <p className="text-gray-600">Evaluate current infrastructure and identify quantum-ready applications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-purple-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Team Training & Development</h4>
                    <p className="text-gray-600">Build quantum computing expertise within your organization</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-purple-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pilot Project Selection</h4>
                    <p className="text-gray-600">Choose low-risk, high-impact use cases for initial implementation</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Phase 2: Integration (Months 7-18)</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quantum Cloud Integration</h4>
                    <p className="text-gray-600">Leverage cloud-based quantum computing services</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hybrid Classical-Quantum Systems</h4>
                    <p className="text-gray-600">Develop systems that combine classical and quantum processing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Performance Optimization</h4>
                    <p className="text-gray-600">Fine-tune algorithms for maximum quantum advantage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Embrace Quantum AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution and unlock unprecedented computational power for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/resources/ai-quantum-implementation-guide-2025" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Download Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Related Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/blog/ai-edge-computing-2025" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                  AI Edge Computing Revolution
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how edge computing is bringing AI closer to the data source.
                </p>
                <div className="flex items-center text-purple-600 font-medium">
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-multimodal-revolution-2025" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                  AI Multimodal Revolution
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore the future of AI that can see, hear, and understand like humans.
                </p>
                <div className="flex items-center text-purple-600 font-medium">
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-quantum-implementation-guide-2025" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                  Quantum AI Implementation Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive guide to implementing quantum AI in your organization.
                </p>
                <div className="flex items-center text-purple-600 font-medium">
                  Download Guide <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}