import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Rocket, Shield, Cpu, Lightbulb } from 'lucide-react';

export default function AI2025RevolutionaryTrendsBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-900 rounded-3xl p-8 md:p-12 mb-16 border border-blue-500/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2306B6D4" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Brain className="w-4 h-4" />
            Revolutionary AI Predictions
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI 2025 Revolutionary Trends
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ultimate Predictions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Explore the most revolutionary AI trends and predictions for 2025 that will fundamentally 
            reshape our world through quantum computing breakthroughs, neural interfaces, and transcendent intelligence.
          </p>
        </div>

        {/* Key Trends Preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Quantum AI Fusion</h3>
            <p className="text-gray-300 text-sm mb-3">10,000x faster processing with quantum computing</p>
            <div className="text-blue-400 font-semibold text-sm">Q2 2025</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Neural Interfaces</h3>
            <p className="text-gray-300 text-sm mb-3">Direct brain-computer interfaces for thought control</p>
            <div className="text-purple-400 font-semibold text-sm">Q3 2025</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Autonomous Everything</h3>
            <p className="text-gray-300 text-sm mb-3">Fully autonomous systems across all industries</p>
            <div className="text-green-400 font-semibold text-sm">Q4 2025</div>
          </div>
        </div>

        {/* Revolutionary Predictions Preview */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Revolutionary Predictions Preview</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-400" />
                Quantum Computing Breakthroughs
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Error-corrected quantum computers with 1,000+ qubits</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Quantum internet connecting major cities globally</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Quantum machine learning solving NP-complete problems</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" />
                Neural Interface Revolution
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Non-invasive brain-computer interfaces for consumers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Memory enhancement and cognitive augmentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Thought-controlled prosthetics and medical devices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Industry Impact Preview */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Expected Industry Impact</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Healthcare</h4>
              <div className="text-2xl font-bold text-blue-400 mb-1">$2.5T</div>
              <div className="text-gray-300 text-sm">Expected Impact</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Manufacturing</h4>
              <div className="text-2xl font-bold text-green-400 mb-1">$4.2T</div>
              <div className="text-gray-300 text-sm">Expected Impact</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Space Exploration</h4>
              <div className="text-2xl font-bold text-purple-400 mb-1">$1.8T</div>
              <div className="text-gray-300 text-sm">Expected Impact</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link 
              href="/blog/ai-2025-revolutionary-trends-ultimate-predictions" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Brain className="w-5 h-5" />
              Read Full Predictions
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm border border-white/20"
            >
              <Rocket className="w-5 h-5" />
              Shape the Future
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-blue-200 text-sm">
            Join 1,000+ visionaries already preparing for the AI revolution
          </p>
        </div>
      </div>
    </div>
  );
}