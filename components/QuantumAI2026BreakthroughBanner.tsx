import React from 'react';
import Link from 'next/link';
import { Atom, Zap, Target, TrendingUp, ArrowRight } from 'lucide-react';

export default function QuantumAI2026BreakthroughBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <Atom className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">QUANTUM AI BREAKTHROUGH 2026</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Quantum Neural Revolution is Here
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience 10,000x faster processing and 99.97% accuracy with quantum-enhanced AI solutions. 
            Transform your enterprise computing capabilities today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">10,000x</div>
              <div className="text-sm opacity-90">Faster Processing</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">99.97%</div>
              <div className="text-sm opacity-90">Accuracy Rate</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">$2.3T</div>
              <div className="text-sm opacity-90">Value Created</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-2026-quantum-neural-revolution-breakthrough"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Learn More About Quantum AI
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center"
            >
              Get Quantum AI Assessment
              <Target className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}