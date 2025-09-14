'use client';

import React, { useState } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
=======

const NewContent2025UltimateShowcase = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge insights, case studies, and resources that will transform your understanding of AI in 2025. 
            From enterprise transformation to autonomous systems, explore the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Blog Posts */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Generative AI Enterprise Transformation</h3>
            <p className="text-gray-300 mb-6">
              Discover how generative AI is revolutionizing enterprise operations in 2025, delivering unprecedented productivity gains and cost savings.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">10 min read</span>
              <Link 
                href="/blog/ai-2025-generative-ai-enterprise-transformation"
                className="bg-white text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold mb-4">MLOps Breakthrough Revolution</h3>
            <p className="text-gray-300 mb-6">
              Learn how MLOps is transforming enterprise AI deployment, delivering 99.9% model reliability and 10x faster deployment cycles.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">12 min read</span>
              <Link 
                href="/blog/ai-2025-machine-learning-operations-mlops-breakthrough"
                className="bg-white text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Next-Gen Autonomous Systems</h3>
            <p className="text-gray-300 mb-6">
              Explore how next-generation autonomous systems are transforming industries, delivering unprecedented efficiency and intelligence.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">11 min read</span>
              <Link 
                href="/blog/ai-2025-next-generation-autonomous-systems-revolution"
                className="bg-white text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🏭</div>
              <h4 className="text-2xl font-bold mb-4">Fortune 500 Manufacturing Transformation</h4>
              <p className="text-gray-300 mb-6">
                How a global manufacturing leader achieved 99.2% uptime and $34.7M in annual savings through AI transformation.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">8 min read</span>
                <Link 
                  href="/case-studies/fortune-500-manufacturing-ai-transformation"
                  className="bg-white text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Case Study
                </Link>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🏥</div>
              <h4 className="text-2xl font-bold mb-4">Healthcare Network AI Revolution</h4>
              <p className="text-gray-300 mb-6">
                A major healthcare network serving 5.2M patients achieved 89% diagnostic accuracy and $28.3M in savings.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">9 min read</span>
                <Link 
                  href="/case-studies/healthcare-network-ai-diagnostic-revolution"
                  className="bg-white text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Downloadable Resources</h3>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">📚</div>
            <h4 className="text-2xl font-bold mb-4">Complete AI Transformation Guide 2025</h4>
            <p className="text-gray-300 mb-6">
              A comprehensive guide to successful AI transformation, covering strategy, implementation, and best practices. 
              Download our free 50-page guide with actionable insights and real-world examples.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">15 min read • PDF Download</span>
              <Link 
                href="/resources/ai-transformation-guide-2025"
                className="bg-white text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Download Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already benefiting from our AI solutions. 
            Get started with a free consultation and discover your transformation potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
>>>>>>> cursor/create-and-deploy-new-content-040d
  );
};

export default NewContent2025UltimateShowcase;