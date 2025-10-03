// import React from 'react';
import { Link } from 'react-router-dom';

export default function AIMetaCognitiveRevolutionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white rounded-xl p-8 mb-8 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                🧠 BREAKTHROUGH
              </span>
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              AI Meta-Cognitive Reasoning Revolution
            </h2>
            
            <p className="text-lg mb-6 text-white/90 leading-relaxed">
              Discover the next evolution in enterprise intelligence. AI systems that think about thinking, achieving 300% better decision accuracy and 500% faster problem-solving.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">300%</div>
                <div className="text-sm text-white/80">Better Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">500%</div>
                <div className="text-sm text-white/80">Faster Solving</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">95%</div>
                <div className="text-sm text-white/80">Confidence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">Real-time</div>
                <div className="text-sm text-white/80">Learning</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/blog/ai-meta-cognitive-reasoning-2026"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 text-center"
              >
                Read Full Article
              </Link>
              <Link to="/contact"
                className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 text-center"
              >
                Get Implementation Guide
              </Link>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🧠</div>
                <div className="text-sm font-semibold text-white/90">
                  Self-Aware AI Systems
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}