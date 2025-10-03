// import React from 'react';
import { Link } from 'react-router-dom';

const October2025NewContentSpotlight: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-12 px-6 my-8 rounded-xl shadow-xl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-2 bg-yellow-500 text-black font-bold rounded-full mb-4 animate-pulse">
            📢 JUST PUBLISHED: OCTOBER 20, 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400">
            Latest Quantum AI Insights & Success Stories
          </h2>
          <p className="text-xl text-gray-300">
            Explore our newest content featuring $5.2B success stories and cutting-edge technical guides
          </p>
        </div>

        {/* Content cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Quantum AI Technical */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🚀</span>
              <div>
                <span className="inline-block px-3 py-1 bg-purple-600 text-xs font-bold rounded-full mb-2">
                  TECHNICAL GUIDE
                </span>
                <h3 className="text-xl font-bold text-white">Quantum-Ready Enterprise AI</h3>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4 line-clamp-3">
              Transform business operations with unprecedented computational power. Achieve 15,000x faster 
              processing, 99.97% accuracy, and $4.7B in measurable value creation.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">⚡</span>
                <span>15,000x Performance Improvement</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">💰</span>
                <span>$4.7B Value Creation</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">🎯</span>
                <span>99.97% Accuracy Rate</span>
              </div>
            </div>
            
            <Link 
              to="/blog/ai-2025-oct-20-quantum-ready-enterprise-ai-transformation"
              className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg"
            >
              Read Full Guide →
            </Link>
          </div>

          {/* Card 2: Case Study */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">💎</span>
              <div>
                <span className="inline-block px-3 py-1 bg-green-600 text-xs font-bold rounded-full mb-2">
                  SUCCESS STORY
                </span>
                <h3 className="text-xl font-bold text-white">$5.2B Retail Transformation</h3>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4 line-clamp-3">
              Fortune 50 retail corporation achieves $5.2 billion in value through quantum AI, 
              revolutionizing supply chain, customer experience, and operations.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">💰</span>
                <span>$5.2B Total Value Created</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">😊</span>
                <span>96% Customer Satisfaction</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">📈</span>
                <span>18.7x ROI in 18 Months</span>
              </div>
            </div>
            
            <Link 
              to="/case-studies/ai-2025-oct-20-global-retail-quantum-ai-transformation-5-2-billion-success"
              className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg"
            >
              View Case Study →
            </Link>
          </div>

          {/* Card 3: Zero Trust Security */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🔒</span>
              <div>
                <span className="inline-block px-3 py-1 bg-red-600 text-xs font-bold rounded-full mb-2">
                  CYBERSECURITY
                </span>
                <h3 className="text-xl font-bold text-white">AI-Powered Zero Trust Security</h3>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4 line-clamp-3">
              Defend against sophisticated cyber threats with AI-driven zero trust architecture. 
              Achieve 99.4% threat detection and prevent $2.8B in security incidents.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">🛡️</span>
                <span>99.4% Threat Detection</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">💰</span>
                <span>$2.8B Incidents Prevented</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">⚡</span>
                <span>Sub-Second Response Time</span>
              </div>
            </div>
            
            <Link 
              to="/blog/ai-2025-oct-20-ai-security-zero-trust-architecture"
              className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg"
            >
              Learn More →
            </Link>
          </div>

          {/* Card 4: Services */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">🛠️</span>
              <div>
                <span className="inline-block px-3 py-1 bg-blue-600 text-xs font-bold rounded-full mb-2">
                  ENTERPRISE SERVICES
                </span>
                <h3 className="text-xl font-bold text-white">Quantum AI Transformation</h3>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4 line-clamp-3">
              Comprehensive quantum AI services delivering 15,000x performance improvements 
              and industry-leading outcomes for Fortune 500 enterprises.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">✨</span>
                <span>10+ Service Offerings</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">🎯</span>
                <span>Proven Methodologies</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">💼</span>
                <span>End-to-End Support</span>
              </div>
            </div>
            
            <Link 
              to="/services/quantum-ai-transformation-services-2025"
              className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg"
            >
              Explore Services →
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready to Achieve Similar Results?
          </h3>
          <p className="text-lg text-gray-900 mb-6 font-semibold">
            Schedule a complimentary quantum AI strategy session with our experts
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-black hover:bg-gray-900 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Get Started Today →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default October2025NewContentSpotlight;
