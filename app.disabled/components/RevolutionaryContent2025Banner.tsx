"use client";

import React from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Banner = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 REVOLUTIONARY 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Discover the Future of AI</h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore groundbreaking insights, real-world case studies, and comprehensive resources that will revolutionize your understanding of AI in 2025.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-lg font-bold mb-3">Generative AI Revolution</h3>
            <p className="text-sm text-gray-300 mb-4">How generative AI is transforming enterprise operations with 340% ROI.</p>
            <Link href="/blog/ai-2025-generative-ai-enterprise-transformation" className="text-white text-sm font-semibold hover:text-gray-300 transition-colors">Read More →</Link>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="text-lg font-bold mb-3">MLOps Breakthrough</h3>
            <p className="text-sm text-gray-300 mb-4">Achieve 99.9% model reliability with advanced MLOps practices.</p>
            <Link href="/blog/ai-2025-machine-learning-operations-mlops-breakthrough" className="text-white text-sm font-semibold hover:text-gray-300 transition-colors">Read More →</Link>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-bold mb-3">Autonomous Systems</h3>
            <p className="text-sm text-gray-300 mb-4">Next-generation autonomous systems delivering 78% efficiency gains.</p>
            <Link href="/blog/ai-2025-next-generation-autonomous-systems-revolution" className="text-white text-sm font-semibold hover:text-gray-300 transition-colors">Read More →</Link>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-bold mb-3">Case Studies</h3>
            <p className="text-sm text-gray-300 mb-4">Real-world success stories with $34.7M+ in proven savings.</p>
            <Link href="/case-studies" className="text-white text-sm font-semibold hover:text-gray-300 transition-colors">View All →</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025Banner;