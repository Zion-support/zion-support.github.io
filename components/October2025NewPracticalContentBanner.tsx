import React from 'react';
import Link from 'next/link';
import { Sparkles, BookOpen, Wrench, TrendingUp } from 'lucide-react';

const October2025NewPracticalContentBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white rounded-2xl shadow-2xl overflow-hidden my-8">
      <div className="px-8 py-10">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-8 h-8 text-yellow-300" />
          <span className="bg-yellow-300 text-blue-900 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
            New Content Available
          </span>
        </div>
        
        <h2 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
          Production-Ready AI & ML Resources
        </h2>
        
        <p className="text-xl text-blue-100 mb-6 max-w-3xl">
          Explore our latest comprehensive guides on vector databases, LLM prompt engineering, 
          and production ML monitoring—designed for teams building real-world AI systems.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Link 
            href="/blog/ai-2025-oct-vector-database-optimization-guide"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-5 transition-all duration-300 border border-white/20 hover:border-white/40 group"
          >
            <div className="flex items-start gap-3">
              <Wrench className="w-6 h-6 text-yellow-300 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors">
                  Vector Database Optimization
                </h3>
                <p className="text-sm text-blue-100">
                  Complete guide to optimizing vector databases for production AI systems
                </p>
              </div>
            </div>
          </Link>

          <Link 
            href="/blog/ai-2025-oct-llm-prompt-engineering-advanced-patterns"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-5 transition-all duration-300 border border-white/20 hover:border-white/40 group"
          >
            <div className="flex items-start gap-3">
              <BookOpen className="w-6 h-6 text-green-300 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-green-300 transition-colors">
                  Advanced Prompt Engineering
                </h3>
                <p className="text-sm text-blue-100">
                  Master patterns and techniques for production LLM applications
                </p>
              </div>
            </div>
          </Link>

          <Link 
            href="/blog/ai-2025-oct-production-ml-monitoring-observability"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-5 transition-all duration-300 border border-white/20 hover:border-white/40 group"
          >
            <div className="flex items-start gap-3">
              <TrendingUp className="w-6 h-6 text-purple-300 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">
                  Production ML Monitoring
                </h3>
                <p className="text-sm text-blue-100">
                  Build comprehensive observability for machine learning systems
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="border-t border-white/20 pt-6">
          <p className="text-lg text-blue-100 mb-4">
            <strong>New Services Available:</strong> We now offer specialized consulting in Vector Database Optimization 
            and LLM Integration. Get expert help implementing these technologies at scale.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services/vector-database-optimization-services"
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              Vector DB Services
              <Wrench className="w-5 h-5" />
            </Link>
            
            <Link
              href="/services/llm-integration-consulting-services"
              className="bg-green-400 hover:bg-green-300 text-blue-900 font-bold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              LLM Consulting
              <BookOpen className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025NewPracticalContentBanner;
