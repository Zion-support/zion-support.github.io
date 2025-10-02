import React from 'react';
import { Link } from 'react-router-dom';

const October2025QuantumAIRevolutionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 px-6 my-12 rounded-2xl shadow-2xl relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg animate-bounce">
            🚀 BREAKING: OCTOBER 20, 2025 - QUANTUM AI REVOLUTION
          </span>
        </div>

        {/* Main heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-pink-200 to-blue-200 animate-pulse">
          Quantum-Ready Enterprise AI: $5.2B Value Creation
        </h2>

        {/* Subheading */}
        <p className="text-2xl md:text-3xl text-center mb-8 text-blue-100 font-semibold">
          15,000x Performance | 96% Accuracy | Industry-Leading Results
        </p>

        {/* Key highlights grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl font-bold text-yellow-300 mb-2">$5.2B</div>
            <div className="text-lg text-blue-100">Total Value Created</div>
            <div className="text-sm text-gray-300 mt-2">Single Client Transformation</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl font-bold text-green-300 mb-2">15,000x</div>
            <div className="text-lg text-blue-100">Faster Processing</div>
            <div className="text-sm text-gray-300 mt-2">Complex Optimization Tasks</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl font-bold text-pink-300 mb-2">96%</div>
            <div className="text-lg text-blue-100">Customer Satisfaction</div>
            <div className="text-sm text-gray-300 mt-2">Industry-Leading NPS +67</div>
          </div>
        </div>

        {/* Content sections */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20">
          <h3 className="text-3xl font-bold mb-6 text-yellow-300">🎯 NEW CONTENT AVAILABLE</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="text-xl font-bold text-white mb-2">📚 Technical Deep Dive</h4>
              <p className="text-gray-200 mb-3">
                Quantum-Ready Enterprise AI: Complete implementation guide with architecture blueprints, 
                best practices, and proven frameworks for 15,000x performance improvements.
              </p>
              <Link 
                to="/blog/ai-2025-oct-20-quantum-ready-enterprise-ai-transformation"
                className="inline-block px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Read Technical Guide →
              </Link>
            </div>

            <div className="border-l-4 border-green-400 pl-4">
              <h4 className="text-xl font-bold text-white mb-2">💼 $5.2B Success Story</h4>
              <p className="text-gray-200 mb-3">
                Fortune 50 Retail Giant Case Study: How quantum AI delivered $5.2 billion in value 
                through supply chain optimization, hyper-personalization, and operational excellence.
              </p>
              <Link 
                to="/case-studies/ai-2025-oct-20-global-retail-quantum-ai-transformation-5-2-billion-success"
                className="inline-block px-6 py-2 bg-green-500 hover:bg-green-400 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Case Study →
              </Link>
            </div>

            <div className="border-l-4 border-blue-400 pl-4">
              <h4 className="text-xl font-bold text-white mb-2">🛠️ Enterprise Services</h4>
              <p className="text-gray-200 mb-3">
                Quantum AI Transformation Services: Comprehensive solutions delivering 15,000x performance 
                improvements, $4.7B value creation, and industry-leading outcomes for your enterprise.
              </p>
              <Link 
                to="/services/quantum-ai-transformation-services-2025"
                className="inline-block px-6 py-2 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Services →
              </Link>
            </div>

            <div className="border-l-4 border-purple-400 pl-4">
              <h4 className="text-xl font-bold text-white mb-2">🔒 Zero Trust Security</h4>
              <p className="text-gray-200 mb-3">
                AI-Powered Zero Trust Architecture: Protect enterprise assets with 99.4% threat detection, 
                preventing $2.8B in security incidents through advanced AI-driven security.
              </p>
              <Link 
                to="/blog/ai-2025-oct-20-ai-security-zero-trust-architecture"
                className="inline-block px-6 py-2 bg-purple-500 hover:bg-purple-400 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Learn Security →
              </Link>
            </div>
          </div>
        </div>

        {/* Key achievements */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6 shadow-xl">
            <h4 className="text-2xl font-bold mb-4 text-white">✨ Breakthrough Results</h4>
            <ul className="space-y-2 text-green-50">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>Supply Chain:</strong> 96% forecast accuracy, 78% stockout reduction</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>Customer Experience:</strong> 96% satisfaction, +67 NPS</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>Operations:</strong> 15,000x faster optimization, 99.99% uptime</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span><strong>ROI:</strong> 18.7x return, 9-month payback period</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 shadow-xl">
            <h4 className="text-2xl font-bold mb-4 text-white">🎯 Implementation Areas</h4>
            <ul className="space-y-2 text-blue-50">
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>Quantum Supply Chain Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>Financial Risk Modeling & Portfolio Management</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>Drug Discovery & Healthcare Innovation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>Zero Trust Cybersecurity Architecture</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>Enterprise Hyper-Personalization at Scale</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-8 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-black mb-4">
            🚀 Ready to Transform Your Enterprise with Quantum AI?
          </h3>
          <p className="text-xl text-gray-900 mb-6 font-semibold">
            Join Fortune 500 leaders achieving 15,000x performance and $5.2B+ value creation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-black hover:bg-gray-900 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
            >
              Schedule Strategy Session
            </Link>
            <Link
              to="/services/quantum-ai-transformation-services-2025"
              className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 text-center">
          <p className="text-lg text-blue-200 mb-3">
            <strong>Trusted by 50+ Fortune 500 Companies</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>✓ 99.4% Project Success Rate</span>
            <span>✓ $5.2B+ Client Value Created</span>
            <span>✓ 150+ Patents in Quantum AI</span>
            <span>✓ 500+ AI/ML Engineers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025QuantumAIRevolutionBanner;
