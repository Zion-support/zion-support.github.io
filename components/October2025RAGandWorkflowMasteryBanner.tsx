// import React from 'react';
import { Link } from 'react-router-dom';

const October2025RAGandWorkflowMasteryBanner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 py-10 px-4 sm:px-6 lg:px-8 my-8 rounded-2xl shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-green-400 text-gray-900 rounded-full text-sm font-bold mb-4 animate-pulse">
            💎 BREAKTHROUGH: RAG OPTIMIZATION & WORKFLOW ORCHESTRATION - OCTOBER 2025 💎
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
            Transform Enterprise AI: RAG & Workflow Mastery
          </h2>
          <p className="text-xl md:text-2xl text-purple-100 mb-4 font-semibold">
            $7.5B Combined Savings | 97% Accuracy | 89% Automation | 5,694 Deployments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* RAG Optimization Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-6">
              <h3 className="text-2xl font-extrabold text-white flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                Production RAG Optimization
              </h3>
            </div>
            <div className="p-6">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4">
                <p className="text-lg font-bold text-green-700 dark:text-green-300">
                  $2.8B in Savings | 97% Accuracy | 12x Faster
                </p>
              </div>
              <ul className="space-y-3 mb-6 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-indigo-500 font-bold mr-2">→</span>
                  <span>Hybrid search architecture (dense + sparse + keyword)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 font-bold mr-2">→</span>
                  <span>Intelligent reranking with cross-encoders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 font-bold mr-2">→</span>
                  <span>93% reduction in hallucinations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 font-bold mr-2">→</span>
                  <span>Dynamic context management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 font-bold mr-2">→</span>
                  <span>420% ROI in first year</span>
                </li>
              </ul>
              <Link 
                to="/blog/ai-2025-october-production-rag-optimization-breakthrough"
                className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors shadow-lg"
              >
                Master RAG Optimization →
              </Link>
            </div>
          </div>

          {/* Agentic Workflow Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
              <h3 className="text-2xl font-extrabold text-white flex items-center">
                <span className="text-3xl mr-3">🔄</span>
                Agentic Workflow Orchestration
              </h3>
            </div>
            <div className="p-6">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4">
                <p className="text-lg font-bold text-green-700 dark:text-green-300">
                  $4.7B in Savings | 89% Automation | 340% ROI
                </p>
              </div>
              <ul className="space-y-3 mb-6 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-500 font-bold mr-2">→</span>
                  <span>Intelligent multi-agent coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 font-bold mr-2">→</span>
                  <span>Context-aware workflow execution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 font-bold mr-2">→</span>
                  <span>99.2% process compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 font-bold mr-2">→</span>
                  <span>76% reduction in execution time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 font-bold mr-2">→</span>
                  <span>Natural language workflow builder</span>
                </li>
              </ul>
              <Link 
                to="/blog/ai-2025-october-agentic-workflow-orchestration-mastery"
                className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors shadow-lg"
              >
                Master Workflow Orchestration →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-white mb-4">
              Complete Enterprise AI Transformation Package
            </h4>
            <p className="text-white/90 mb-6 text-lg max-w-3xl mx-auto">
              Both guides provide comprehensive technical architectures, Fortune 500 case studies, 
              implementation roadmaps, and proven best practices for enterprise-scale deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Schedule Your AI Assessment →
              </Link>
              <Link 
                to="/services"
                className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all border-2 border-white/40"
              >
                Explore Our AI Services
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-white/80 text-sm">
            🌟 Join 5,694 enterprises transforming their operations with optimized AI systems | Published October 1, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default October2025RAGandWorkflowMasteryBanner;
