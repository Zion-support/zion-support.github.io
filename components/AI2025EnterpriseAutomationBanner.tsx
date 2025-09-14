import React from 'react';
import Link from 'next/link';

const AI2025EnterpriseAutomationBanner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🤖 AI AUTOMATION 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI 2025 Enterprise Automation Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how AI-powered automation is revolutionizing enterprise operations 
            with cutting-edge technologiesimplementation strategiesand real-world success stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 text-center">
            <div className="text-3xl mb-3">📈</div>
            <div className="text-2xl font-bold text-green-400 mb-2">340%</div>
            <div className="text-sm opacity-90">Average ROI Increase</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <div className="text-2xl font-bold text-yellow-400 mb-2">98%</div>
            <div className="text-sm opacity-90">Manual Process Reduction</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 text-center">
            <div className="text-3xl mb-3">🎯</div>
            <div className="text-2xl font-bold text-blue-400 mb-2">85%</div>
            <div className="text-sm opacity-90">Decision Speed Improvement</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 text-center">
            <div className="text-3xl mb-3">👥</div>
            <div className="text-2xl font-bold text-purple-400 mb-2">92%</div>
            <div className="text-sm opacity-90">Employee Productivity Boost</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">Advanced MLOps</h3>
            <p className="text-sm opacity-90 mb-4">
              Enterprise-scale AI deployments with automated model management and monitoring
            </p>
            <ul className="space-y-2 text-xs">
              <li>• Automated model deployment</li>
              <li>• Real-time performance monitoring</li>
              <li>• Continuous model improvement</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-bold mb-3">Intelligent Process Automation</h3>
            <p className="text-sm opacity-90 mb-4">
              AI-powered automation that combines RPA with cognitive capabilities
            </p>
            <ul className="space-y-2 text-xs">
              <li>• Cognitive document processing</li>
              <li>• Predictive process analytics</li>
              <li>• Dynamic workflow adaptation</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-3">Conversational AI</h3>
            <p className="text-sm opacity-90 mb-4">
              Advanced conversational systems for customer and employee interactions
            </p>
            <ul className="space-y-2 text-xs">
              <li>• Context-aware dialog management</li>
              <li>• Emotional intelligence</li>
              <li>• Multi-language processing</li>
            </ul>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Real-World Success Stories</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-sm">Fortune 500 Manufacturing</div>
                    <div className="text-xs opacity-75">95% reduction in quality control time$2.3M annual savings</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-sm">Global Financial Services</div>
                    <div className="text-xs opacity-75">80% reduction in compliance review time100% accuracy</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-lg opacity-90">Projects Delivered</div>
              <div className="text-sm opacity-75 mt-2">With 98% client satisfaction</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-2025-enterprise-automation-revolution-ultimate-guide"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Read Full Guide
            </Link>
            <Link
              href="/services/ai-automation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Get AI Automation Solutions
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Transform your enterprise with AI automation - join 500+ successful implementations
          </p>
        </div>
      </div>
    </section>
  );
};

export default AI2025EnterpriseAutomationBanner;