import React from 'react';
import Link from 'next/link';

export default function NewContent2025UltimateShowcaseBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover breakthrough insights, implementation guides, and cutting-edge strategies that are transforming businesses worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">🤖</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Enterprise AI Agents 2025</h3>
                <p className="text-white opacity-90 mb-4">
                  Breakthrough technologies and real-world impact of AI agents transforming enterprise operations.
                </p>
                <Link 
                  href="/blog/ai-2025-enterprise-ai-agents-breakthrough"
                  className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">⚡</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Hyperautomation Playbook</h3>
                <p className="text-white opacity-90 mb-4">
                  Complete implementation guide for AI-driven hyperautomation across your enterprise.
                </p>
                <Link 
                  href="/blog/ai-2026-hyperautomation-business-playbook"
                  className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Playbook →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-8 text-white opacity-80">
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">New Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}