import React from 'react';
import { Link } from 'react-router-dom';

export default function QuantumAI2027BreakthroughBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-6 rounded-lg mb-8 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                BREAKTHROUGH 2027
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                ⚛️ QUANTUM AI
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              🚀 AI 2027: Quantum Neural Networks
            </h2>
            
            <p className="text-lg lg:text-xl opacity-90 mb-6">
              Experience <strong>1000x faster AI processing</strong> with revolutionary quantum neural networks. 
              See how Fortune 100 companies achieved <strong>$500M ROI</strong> in just 18 months.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-white/20 px-3 py-1 rounded-full">
                💰 $500M ROI Achieved
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full">
                ⚡ 1000x Faster Processing
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full">
                🎯 99.9% Accuracy
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <Link 
              href="/blog/ai-2027-quantum-neural-networks"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-center whitespace-nowrap"
            >
              Read Full Article →
            </Link>
            
            <Link 
              href="/case-studies/ai-2027-quantum-breakthrough-success"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition-colors text-center whitespace-nowrap"
            >
              View $500M Success Story
            </Link>
            
            <Link 
              href="/services/ai-2027-quantum-enterprise-solutions"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors text-center whitespace-nowrap"
            >
              Get Quantum AI Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}