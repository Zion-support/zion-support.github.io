import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research & Development | Zion Tech Group',
  description: 'Explore our cutting-edge research and development initiatives in AI, machine learning, and emerging technologies.',
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Research & Development
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Pioneering the future of technology through innovative research and development initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">AI Research</h3>
            <p className="text-gray-300 mb-4">
              Advanced artificial intelligence research and development projects.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Machine Learning Algorithms</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
              <li>• Neural Networks</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Quantum Computing</h3>
            <p className="text-gray-300 mb-4">
              Exploring the potential of quantum computing technologies.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Quantum Algorithms</li>
              <li>• Quantum Cryptography</li>
              <li>• Quantum Machine Learning</li>
              <li>• Quantum Simulation</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Blockchain Research</h3>
            <p className="text-gray-300 mb-4">
              Investigating next-generation blockchain technologies.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Smart Contracts</li>
              <li>• Decentralized Systems</li>
              <li>• Cryptocurrency Protocols</li>
              <li>• Web3 Technologies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

