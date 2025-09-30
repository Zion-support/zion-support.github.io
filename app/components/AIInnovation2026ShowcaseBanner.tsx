import React from 'react';
import Link from 'next/link';

export default function AIInnovation2026ShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            🔥 BREAKTHROUGH INNOVATIONS
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            AI Innovation Showcase
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              2026 Edition
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the future of AI with our cutting-edge innovations that are transforming 
            industries and creating unprecedented business value.
          </p>
        </div>
        
        {/* Innovation Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 transform hover:scale-105">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl text-white">🤖</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Autonomous AI Agents</h3>
                <p className="text-sm text-gray-500">Self-managing systems</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Revolutionary AI agents that operate independently, making complex decisions 
              and executing tasks without human oversight. Achieve 90% operational efficiency.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">New Release</div>
              <Link href="/services/ai-2026-autonomous-agents" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                Explore →
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 transform hover:scale-105">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Quantum AI Processing</h3>
                <p className="text-sm text-gray-500">1000x faster computation</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Quantum-enhanced machine learning algorithms that process complex data 
              1000x faster than traditional methods, unlocking new possibilities.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">Breakthrough Tech</div>
              <Link href="/blog/ai-2026-quantum-computing" className="text-violet-600 font-semibold hover:text-violet-700 transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 transform hover:scale-105">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl text-white">🏭</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Smart Manufacturing</h3>
                <p className="text-sm text-gray-500">95% efficiency gains</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              AI-driven manufacturing systems that achieve 95% efficiency improvements 
              and $50M+ annual savings through intelligent automation.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">Case Study</div>
              <Link href="/case-studies/ai-2026-manufacturing-transformation" className="text-rose-600 font-semibold hover:text-rose-700 transition-colors">
                View Results →
              </Link>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ enterprises already benefiting from our AI innovations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/ai-2026-consultation"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get AI 2026 Consultation
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}