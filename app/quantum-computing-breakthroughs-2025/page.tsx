import React from 'react';
import { Metadata } from 'next';
import QuantumComputingBreakthroughShowcase2025 from '../../components/QuantumComputingBreakthroughShowcase2025';
import QuantumComputingBreakthroughPromotionBanner2025 from '../../components/QuantumComputingBreakthroughPromotionBanner2025';

export const metadata: Metadata = {
  title: 'Quantum Computing Breakthroughs 2025 | Zion Tech Group',
  description: 'Discover revolutionary quantum computing breakthroughs in 2025. Explore quantum technologies, applications, and the future of quantum computation that will transform industries.',
  keywords: [
    'quantum computing 2025',
    'quantum breakthroughs',
    'quantum algorithms',
    'quantum machine learning',
    'quantum cryptography',
    'quantum internet',
    'quantum applications',
    'quantum hardware',
    'quantum software',
    'quantum advantage'
  ],
  openGraph: {
    title: 'Quantum Computing Breakthroughs 2025',
    description: 'Revolutionary quantum technologies reshaping computation and cryptography',
    type: 'article',
    publishedTime: '2025-01-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['Quantum Computing', 'Breakthroughs', 'Technology', '2025']
  }
};

const QuantumComputingBreakthroughs2025Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Promotion Banner */}
      <QuantumComputingBreakthroughPromotionBanner2025 />
      
      {/* Main Content Showcase */}
      <QuantumComputingBreakthroughShowcase2025 />
      
      {/* Additional Content Sections */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Quantum Revolution is Here
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              2025 marks the year when quantum computing transitions from research to practical applications. 
              These breakthroughs will fundamentally change how we solve complex problems and process information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1000+</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Qubits</h3>
              <p className="text-gray-300">
                Commercial quantum computers now achieve over 1000 qubits, enabling practical quantum applications.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">10^15x</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Speed Increase</h3>
              <p className="text-gray-300">
                Quantum algorithms achieve exponential speedup for specific computational problems.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">0.001%</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Error Rate</h3>
              <p className="text-gray-300">
                Quantum error correction reduces error rates to unprecedented levels for reliable computation.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">50+</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Applications</h3>
              <p className="text-gray-300">
                Over 50 real-world applications now benefit from quantum computing advantages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingBreakthroughs2025Page;