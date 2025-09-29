import React from 'react';
import { Link } from 'react-router-dom';

export default function NewContentBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            🚀 New AI Insights: January 2025
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our latest comprehensive guides on autonomous infrastructure, 
            customer service transformation, healthcare AI, and governance frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link 
            to="/blog/ai-autonomous-infrastructure-2025" 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="text-3xl mb-3">🏗️</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
              Autonomous Infrastructure
            </h3>
            <p className="text-sm opacity-90">
              Self-healing systems that reduce downtime by 90%
            </p>
            <div className="mt-3 text-xs opacity-75">
              15 min read • Featured
            </div>
          </Link>

          <Link 
            to="/blog/ai-customer-service-2025" 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="text-3xl mb-3">💬</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
              Customer Service AI
            </h3>
            <p className="text-sm opacity-90">
              Intelligent chatbots and sentiment analysis
            </p>
            <div className="mt-3 text-xs opacity-75">
              12 min read • Featured
            </div>
          </Link>

          <Link 
            to="/blog/ai-healthcare-transformation-2025" 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="text-3xl mb-3">🏥</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
              Healthcare Transformation
            </h3>
            <p className="text-sm opacity-90">
              Predictive diagnostics and personalized care
            </p>
            <div className="mt-3 text-xs opacity-75">
              14 min read • Featured
            </div>
          </Link>

          <Link 
            to="/blog/ai-governance-framework-2025" 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="text-3xl mb-3">⚖️</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
              AI Governance
            </h3>
            <p className="text-sm opacity-90">
              Responsible AI frameworks and compliance
            </p>
            <div className="mt-3 text-xs opacity-75">
              16 min read • Featured
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link 
            to="/blog" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Explore All Articles →
          </Link>
        </div>
      </div>
    </div>
  );
}