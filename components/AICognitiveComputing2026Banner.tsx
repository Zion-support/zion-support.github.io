// import React from 'react';
import { Link } from 'react-router-dom';

export default function AICognitiveComputing2026Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-cyan-400 text-purple-900 px-3 py-1 rounded-full text-sm font-bold">
                🧠 REVOLUTIONARY 2026
              </span>
              <span className="text-purple-200 text-sm">Cognitive AI</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              AI Cognitive Computing 2026:
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {' '}Next-Generation Intelligence
              </span>
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Experience the future of AI with cognitive computing that mimics human reasoning, 
              learns continuously, and makes intelligent decisions. See how organizations achieved 
              300% productivity gains with cognitive AI systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/blog/ai-cognitive-computing-2026"
                className="bg-cyan-400 text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-300 transition-colors shadow-lg hover:shadow-xl"
              >
                Explore Cognitive AI →
              </Link>
              <Link to="/services/ai-cognitive-computing"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-400 hover:text-purple-900 transition-colors"
              >
                Get Cognitive AI Services
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-400">300%</div>
                <div className="text-sm text-purple-200">Productivity Gains</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">95%</div>
                <div className="text-sm text-purple-200">Decision Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">$15M+</div>
                <div className="text-sm text-purple-200">Annual Value</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-800 to-indigo-800 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Cognitive Intelligence</h3>
                <p className="text-purple-200">Human-like AI reasoning and learning</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span className="text-purple-100">Advanced reasoning capabilities</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span className="text-purple-100">Continuous learning systems</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span className="text-purple-100">Natural language understanding</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span className="text-purple-100">Contextual decision making</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span className="text-purple-100">Self-improving algorithms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}