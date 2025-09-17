import React from 'react';
import Link from 'next/link';

export default function BusinessTransformation2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🎯 MASTERY GUIDE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI 2026: Business Transformation Mastery
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Master the art of AI-driven business transformation with proven strategies, frameworks, 
            and real-world case studies for sustainable competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">Strategic Framework</h3>
            <p className="text-lg opacity-90">
              Proven 3-phase approach to AI-driven transformation success
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Real-World Results</h3>
            <p className="text-lg opacity-90">
              5-10x improvements in efficiency, customer satisfaction, and revenue
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Industry Expertise</h3>
            <p className="text-lg opacity-90">
              Specialized strategies for manufacturing, finance, healthcare, and retail
            </p>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Transformation Success Factors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Critical Elements</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Intelligence-first design principles
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Autonomous operations capabilities
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Human-AI collaboration frameworks
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Data-driven decision making
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Avoid Common Pitfalls</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <span className="text-red-400 mr-3">✗</span>
                  Technology-first approach
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-3">✗</span>
                  Insufficient change management
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-3">✗</span>
                  Data quality issues
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-3">✗</span>
                  Lack of leadership commitment
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2026-business-transformation-mastery"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Read the Mastery Guide
            </Link>
            <Link
              href="/services/business-transformation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              Get Expert Consultation
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">5-10x</div>
              <div className="text-lg opacity-90">Efficiency Gains</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">6mo</div>
              <div className="text-lg opacity-90">Time to Value</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Continuous Improvement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}