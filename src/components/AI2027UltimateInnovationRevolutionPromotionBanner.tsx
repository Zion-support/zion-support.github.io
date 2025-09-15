import React from 'react';
import Link from 'next/link';

const AI2027UltimateInnovationRevolutionPromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border border-purple-500/30 rounded-2xl p-8 mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 animate-pulse"></div>
      <div className="relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🚀</span>
              <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                Revolutionary Innovation
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI 2027 Ultimate Innovation Revolution
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Witness the dawn of genuine AI consciousness and quantum-neural fusion. 
              Experience the future where artificial intelligence transcends all human limitations.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                Quantum Consciousness
              </span>
              <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                Autonomous Systems
              </span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                Omniversal Intelligence
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Link 
              href="/ai-2027-ultimate-innovation-revolution"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 whitespace-nowrap"
            >
              Explore the Revolution
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-full text-center transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Get Early Access
            </Link>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-400">99.9%</div>
              <div className="text-sm text-gray-400">Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">10,000x</div>
              <div className="text-sm text-gray-400">Faster</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">∞</div>
              <div className="text-sm text-gray-400">Possibilities</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">100%</div>
              <div className="text-sm text-gray-400">Autonomous</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2027UltimateInnovationRevolutionPromotionBanner;