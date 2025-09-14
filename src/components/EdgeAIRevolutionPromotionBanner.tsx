import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, TrendingUp } from 'lucide-react';

const EdgeAIRevolutionPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-600/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">🚀 NEW: Edge AI Revolution</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Transform Your Business with
            <span className="block text-yellow-400">Edge AI Computing</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
            Join the revolution! Real-time AI processing at the network edge delivers 
            <span className="text-yellow-300 font-semibold"> 99.9% accuracy</span> and 
            <span className="text-yellow-300 font-semibold"> sub-10ms response times</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-xl font-bold">Real-time Intelligence</h3>
            </div>
            <p className="text-blue-100 mb-4">
              Process data and make decisions in milliseconds with edge AI computing
            </p>
            <div className="text-2xl font-bold text-yellow-400">&lt;10ms Latency</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-xl font-bold">Proven ROI</h3>
            </div>
            <p className="text-blue-100 mb-4">
              Our clients achieve average revenue increases of $2.5B+ with edge AI
            </p>
            <div className="text-2xl font-bold text-green-400">2,500% ROI</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-bold">Autonomous Operations</h3>
            </div>
            <p className="text-blue-100 mb-4">
              Enable truly autonomous business operations with edge AI decision-making
            </p>
            <div className="text-2xl font-bold text-purple-400">24/7 Operations</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            🎯 Limited Time: Get Your Edge AI Implementation Guide
          </h3>
          <p className="text-lg text-gray-800 mb-6 max-w-3xl mx-auto">
            Download our comprehensive <strong>Edge AI Implementation Master Guide 2025</strong> 
            and discover how Fortune 500 companies are achieving unprecedented results with edge computing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/resources/edge-ai-implementation-master-guide-2025"
              className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 flex items-center group"
            >
              Download Free Guide
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/case-studies/global-retail-edge-ai-transformation-2025"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center group"
            >
              View Success Story
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="mt-6 text-sm text-gray-700">
            ⚡ <strong>New Content:</strong> Edge AI Revolution Blog Post • Retail Transformation Case Study • Implementation Master Guide
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-blue-200">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span>Real-time Processing</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
              <span>Enhanced Security</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
              <span>Autonomous Operations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgeAIRevolutionPromotionBanner;