// import React from 'react';
import { Link } from 'react-router-dom';

const October2025NewAIContentMegaLaunchBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 dark:from-purple-800 dark:via-blue-800 dark:to-indigo-800 py-12 px-4 sm:px-6 lg:px-8 my-8 rounded-xl shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold mb-4 animate-pulse">
            🔥 JUST PUBLISHED: OCTOBER 1, 2025 - THREE BREAKTHROUGH GUIDES 🔥
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Master Production AI Systems: Enterprise Excellence
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-6 font-semibold">
            $13.7B Combined Savings | 99.9% Reliability | 450% ROI | 7,941 Enterprise Deployments
          </p>
          <p className="text-lg text-white mb-8 max-w-4xl mx-auto">
            Three revolutionary guides just published today: Production AI Agent Deployment, RAG Optimization Breakthrough, 
            and Agentic Workflow Orchestration. Learn how Fortune 500 companies achieve enterprise-grade AI at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* AI Agent Deployment Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-3 mb-4">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">
                🤖 Production AI Agent Deployment
              </h3>
            </div>
            <div className="space-y-2 mb-4 text-gray-700 dark:text-gray-300">
              <p className="font-semibold text-green-600 dark:text-green-400">$6.2B in Savings</p>
              <p>• 99.9% Agent Reliability</p>
              <p>• Zero Security Incidents</p>
              <p>• 73% Cost Reduction</p>
              <p>• 450% ROI Achievement</p>
            </div>
            <Link 
              to="/blog/ai-2025-october-production-ai-agent-deployment-excellence"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors"
            >
              Read Complete Guide →
            </Link>
          </div>

          {/* RAG Optimization Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="bg-indigo-100 dark:bg-indigo-900 rounded-lg p-3 mb-4">
              <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100">
                🎯 RAG Optimization Breakthrough
              </h3>
            </div>
            <div className="space-y-2 mb-4 text-gray-700 dark:text-gray-300">
              <p className="font-semibold text-green-600 dark:text-green-400">$2.8B in Savings</p>
              <p>• 97% Accuracy Achievement</p>
              <p>• 93% Fewer Hallucinations</p>
              <p>• 12x Faster Responses</p>
              <p>• 420% ROI in Year 1</p>
            </div>
            <Link 
              to="/blog/ai-2025-october-production-rag-optimization-breakthrough"
              className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors"
            >
              Read Complete Guide →
            </Link>
          </div>

          {/* Agentic Workflow Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-100 dark:bg-purple-900 rounded-lg p-3 mb-4">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100">
                🔄 Agentic Workflow Orchestration
              </h3>
            </div>
            <div className="space-y-2 mb-4 text-gray-700 dark:text-gray-300">
              <p className="font-semibold text-green-600 dark:text-green-400">$4.7B in Savings</p>
              <p>• 89% Automation Achievement</p>
              <p>• 99.2% Process Compliance</p>
              <p>• 76% Time Reduction</p>
              <p>• 340% ROI in 18 Months</p>
            </div>
            <Link 
              to="/blog/ai-2025-october-agentic-workflow-orchestration-mastery"
              className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors"
            >
              Read Complete Guide →
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white text-lg font-semibold mb-4">
            Ready to deploy production-grade AI systems at enterprise scale?
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
          >
            Schedule Your AI Strategy Session →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default October2025NewAIContentMegaLaunchBanner;
