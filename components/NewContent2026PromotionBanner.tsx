import React from 'react';
import Link from 'next/link';

export default function NewContent2026PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                NEW
              </span>
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                2026
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Revolutionary AI 2026 Content Now Available
            </h2>
            
            <p className="text-lg lg:text-xl text-blue-100 mb-6 max-w-2xl">
              Discover breakthrough innovations in quantum AI, neural interfaces, and autonomous systems. 
              Get the complete implementation toolkit and case studies worth $2.3B in savings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/blog/ai-2026-revolutionary-breakthroughs"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Breakthrough Article
              </Link>
              <Link 
                href="/case-studies/quantum-ai-financial-optimization-breakthrough-2026"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                View $2.3B Case Study
              </Link>
              <Link 
                href="/resources/ai-2026-implementation-toolkit"
                className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center"
              >
                Download Toolkit
              </Link>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold mb-2">99.7%</div>
              <div className="text-sm text-blue-100 mb-4">Faster Processing</div>
              
              <div className="text-4xl font-bold mb-2">$2.3B</div>
              <div className="text-sm text-blue-100 mb-4">Cost Savings</div>
              
              <div className="text-4xl font-bold mb-2">400%</div>
              <div className="text-sm text-blue-100">Better Accuracy</div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-semibold mb-2">Quantum AI Breakthrough</h3>
              <p className="text-sm text-blue-100">1000x performance improvements with quantum computing</p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-2">🧠</div>
              <h3 className="font-semibold mb-2">Neural Interfaces</h3>
              <p className="text-sm text-blue-100">Direct brain-computer communication technology</p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-2">🤖</div>
              <h3 className="font-semibold mb-2">Autonomous Systems</h3>
              <p className="text-sm text-blue-100">Self-managing AI with 99.9% reliability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}