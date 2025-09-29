import React from 'react';
import { Link } from 'react-router-dom';

export default function AITrends2025Banner() {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                🚀 New Article
              </span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              AI Trends 2025: The Future of Artificial Intelligence
            </h2>
            
            <p className="text-xl mb-8 opacity-90">
              Discover the revolutionary AI trends that will reshape industries and transform 
              how businesses operate in 2025 and beyond. From autonomous operations to quantum 
              machine learning.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">85%</div>
                <div className="text-sm opacity-75">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99.99%</div>
                <div className="text-sm opacity-75">Uptime Achievement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1000x</div>
                <div className="text-sm opacity-75">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">40%</div>
                <div className="text-sm opacity-75">Better Accuracy</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/blog/ai-trends-2025"
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Read Full Article
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Get AI Consultation
              </a>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Featured AI Trends</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🤖</div>
                <div>
                  <h4 className="font-semibold mb-1">Autonomous AI Operations</h4>
                  <p className="text-sm opacity-90">Self-healing, self-optimizing infrastructure</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">⚡</div>
                <div>
                  <h4 className="font-semibold mb-1">Edge AI Revolution</h4>
                  <p className="text-sm opacity-90">Real-time processing at the edge</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">🔮</div>
                <div>
                  <h4 className="font-semibold mb-1">Quantum ML</h4>
                  <p className="text-sm opacity-90">Breakthrough computational power</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">✍️</div>
                <div>
                  <h4 className="font-semibold mb-1">AI Content Generation</h4>
                  <p className="text-sm opacity-90">Sophisticated, brand-aware content</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">🛡️</div>
                <div>
                  <h4 className="font-semibold mb-1">Ethical AI Governance</h4>
                  <p className="text-sm opacity-90">Comprehensive compliance frameworks</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="flex items-center justify-between">
                <div className="text-sm opacity-75">
                  <span>📅 January 20, 2025</span>
                  <span className="mx-2">•</span>
                  <span>⏱️ 12 min read</span>
                </div>
                <Link
                  to="/blog"
                  className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  View All Articles →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}