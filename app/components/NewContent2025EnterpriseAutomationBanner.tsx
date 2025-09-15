import React from 'react';
import Link from 'next/link';

const NewContent2025EnterpriseAutomationBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW BREAKTHROUGH CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI 2025 Enterprise Automation Revolutionary Breakthrough
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI automation breakthroughs transforming enterprises in 2025. 
            Learn about autonomous systems, intelligent workflows, and the future of business automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-4">Autonomous Decision-Making</h3>
            <p className="text-gray-200 mb-4">
              AI systems that make complex business decisions independently, delivering 89% improvement in decision-making speed.
            </p>
            <div className="text-2xl font-bold text-green-300">94% Cost Reduction</div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-4">Self-Healing Operations</h3>
            <p className="text-gray-200 mb-4">
              Systems that detect, diagnose, and fix issues without human intervention, achieving 95% reduction in manual tasks.
            </p>
            <div className="text-2xl font-bold text-yellow-300">340% Productivity Boost</div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-4">Predictive Automation</h3>
            <p className="text-gray-200 mb-4">
              Processes that anticipate needs and act before problems occur, delivering 78% increase in employee satisfaction.
            </p>
            <div className="text-2xl font-bold text-blue-300">89% Faster Response</div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Revolutionary Impact Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">94%</div>
                <div className="text-sm text-gray-200">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">340%</div>
                <div className="text-sm text-gray-200">Productivity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">89%</div>
                <div className="text-sm text-gray-200">Decision Speed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-2">95%</div>
                <div className="text-sm text-gray-200">Task Automation</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/blog/ai-2025-enterprise-automation-revolutionary-breakthrough"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Full Article
            </Link>
            <Link
              href="/services/ai-automation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore AI Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
          
          <div className="text-sm text-gray-300">
            <p>📅 Published: January 14, 2025 | ⏱️ 12 min read | 🏷️ AI & Automation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025EnterpriseAutomationBanner;