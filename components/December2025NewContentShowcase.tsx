import React from 'react';
import { Link } from 'react-router-dom';

const December2025NewContentShowcase: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🚀 December 2025: Revolutionary AI Content Release
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Discover our latest breakthrough content: Quantum AI Business Intelligence, Autonomous Enterprise Operations, and Generative AI Transformation guides
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Blog Posts */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                📚 New Blog Posts
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Latest AI Insights & Guides
            </h3>
            <ul className="space-y-3 text-blue-100">
              <li>
                <Link to="/blog/ai-2025-december-generative-ai-enterprise-transformation-2026" 
                  className="hover:text-white transition-colors flex items-start"
                >
                  <span className="text-green-400 mr-2">✓</span>
                  Generative AI Enterprise Transformation: Complete 2026 Roadmap
                </Link>
              </li>
              <li>
                <Link to="/blog/ai-2025-december-quantum-ai-business-intelligence-breakthrough" 
                  className="hover:text-white transition-colors flex items-start"
                >
                  <span className="text-green-400 mr-2">✓</span>
                  Quantum AI Business Intelligence: $847B Enterprise Breakthrough
                </Link>
              </li>
              <li>
                <Link to="/blog/ai-2025-december-autonomous-enterprise-operations-revolution" 
                  className="hover:text-white transition-colors flex items-start"
                >
                  <span className="text-green-400 mr-2">✓</span>
                  Autonomous Enterprise Operations: $2.3T Business Revolution
                </Link>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/20">
              <Link to="/blog" 
                className="text-blue-300 hover:text-white font-semibold"
              >
                View All Blog Posts →
              </Link>
            </div>
          </div>

          {/* Case Studies */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                🏆 Success Stories
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Proven Results & ROI
            </h3>
            <ul className="space-y-3 text-blue-100">
              <li>
                <Link to="/case-studies/ai-2025-december-global-finance-quantum-ai-transformation-500-billion-success" 
                  className="hover:text-white transition-colors flex items-start"
                >
                  <span className="text-green-400 mr-2">💰</span>
                  Global Finance: $500B Quantum AI Success
                </Link>
              </li>
              <li>
                <Link to="/case-studies/ai-2025-december-manufacturing-autonomous-operations-340-billion-success" 
                  className="hover:text-white transition-colors flex items-start"
                >
                  <span className="text-green-400 mr-2">🏭</span>
                  Manufacturing: $340B Autonomous Operations
                </Link>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/20">
              <Link to="/case-studies" 
                className="text-blue-300 hover:text-white font-semibold"
              >
                View All Case Studies →
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                ⚡ New Services
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Cutting-Edge Solutions
            </h3>
            <ul className="space-y-3 text-blue-100">
              <li>
                <Link to="/services/ai-2025-december-quantum-ai-business-intelligence-consulting" 
                  className="hover:text-white transition-colors flex items-start"
                >
                  <span className="text-green-400 mr-2">🎯</span>
                  Quantum AI Business Intelligence Consulting
                </Link>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/20">
              <Link to="/services" 
                className="text-blue-300 hover:text-white font-semibold"
              >
                View All Services →
              </Link>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            📊 Content Impact Statistics
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">$2.3T</div>
              <div className="text-blue-200">Total Value Creation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">99.97%</div>
              <div className="text-blue-200">Prediction Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">2,890%</div>
              <div className="text-blue-200">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">340%</div>
              <div className="text-blue-200">Efficiency Improvement</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 p-1 rounded-full inline-block">
            <Link to="/contact" 
              className="bg-gradient-to-r from-purple-900 to-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-800 hover:to-blue-800 transition-all duration-300 inline-flex items-center"
            >
              🚀 Start Your AI Transformation Journey
              <span className="ml-2">→</span>
            </Link>
          </div>
          <p className="text-blue-200 mt-4">
            Join Fortune 500 leaders achieving exceptional results with our proven AI solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default December2025NewContentShowcase;