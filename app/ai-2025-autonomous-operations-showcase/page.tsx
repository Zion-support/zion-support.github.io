import React from 'react';
import { Link } from 'react-router-dom';
import AutonomousOperationsPromotionBanner from '../../src/components/AutonomousOperationsPromotionBanner';

export default function AI2025AutonomousOperationsShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <AutonomousOperationsPromotionBanner />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-lg font-bold animate-pulse">
                🚀 AI 2025 AUTONOMOUS OPERATIONS REVOLUTION
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Complete Business Autonomy
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Transform your business with AI-powered autonomous operations. Join Fortune 500 companies achieving 
              <span className="text-yellow-300 font-bold"> 2,500% ROI</span> through complete operational independence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog/ai-2025-autonomous-business-operations"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Explore the Revolution
              </Link>
              <Link
                to="/case-studies/ai-2025-global-enterprise-autonomous-transformation"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                See 2,500% ROI Success
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Autonomous Operations Matter in 2025
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The businesses that embrace autonomous AI operations today will dominate their markets tomorrow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2,500% ROI</h3>
              <p className="text-gray-600">Proven returns within 12 months of implementation</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">300% Efficiency</h3>
              <p className="text-gray-600">Massive improvements in operational efficiency</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">99.8% Accuracy</h3>
              <p className="text-gray-600">Unprecedented precision in decision-making</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Operations</h3>
              <p className="text-gray-600">Continuous autonomous operation worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Autonomous Operations Resource Library
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to understand, implement, and succeed with autonomous AI operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">📖 Blog Posts</h3>
                <p className="text-purple-100">In-depth insights and analysis</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <Link
                    to="/blog/ai-2025-autonomous-business-operations"
                    className="block p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg hover:shadow-md transition-all duration-300"
                  >
                    <h4 className="font-bold text-gray-900 mb-2">AI 2025: Autonomous Business Operations Revolution</h4>
                    <p className="text-sm text-gray-600 mb-2">Complete guide to autonomous business operations transformation</p>
                    <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold">
                      BREAKTHROUGH
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Case Studies */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">🏆 Case Studies</h3>
                <p className="text-green-100">Real-world success stories</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <Link
                    to="/case-studies/ai-2025-global-enterprise-autonomous-transformation"
                    className="block p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:shadow-md transition-all duration-300"
                  >
                    <h4 className="font-bold text-gray-900 mb-2">Global Enterprise: 2,500% ROI Success</h4>
                    <p className="text-sm text-gray-600 mb-2">Fortune 500 company achieves complete operational autonomy</p>
                    <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                      2,500% ROI
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Implementation Guides */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">📚 Implementation Guides</h3>
                <p className="text-orange-100">Step-by-step implementation plans</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <Link
                    to="/resources/ai-2025-autonomous-operations-implementation-guide"
                    className="block p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg hover:shadow-md transition-all duration-300"
                  >
                    <h4 className="font-bold text-gray-900 mb-2">Complete Implementation Master Plan</h4>
                    <p className="text-sm text-gray-600 mb-2">Definitive guide to autonomous operations implementation</p>
                    <span className="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-semibold">
                      ESSENTIAL
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI technologies powering the autonomous operations revolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Neural Networks</h3>
              <p className="text-gray-600">Multi-modal AI systems with 99.7% accuracy rates for complex decision-making</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-5xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quantum Computing</h3>
              <p className="text-gray-600">Enhanced optimization algorithms for complex business problems</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Edge AI Integration</h3>
              <p className="text-gray-600">Distributed intelligence for real-time processing and enhanced security</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="text-5xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Analytics</h3>
              <p className="text-gray-600">99.2% accuracy in demand forecasting and market predictions</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Autonomous AI Agents</h3>
              <p className="text-gray-600">Independent decision-making systems for strategic operations</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Self-Evolving Systems</h3>
              <p className="text-gray-600">Continuous optimization and improvement without human intervention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the autonomous operations revolution. Get your custom implementation plan and start achieving 
            <span className="text-yellow-300 font-bold"> 2,500% ROI</span> within 12 months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Get Custom Implementation Plan
            </Link>
            <Link
              to="/resources/ai-2025-autonomous-operations-implementation-guide"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}