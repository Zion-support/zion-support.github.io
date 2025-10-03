// import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research | Zion Tech Group',
  description: 'Explore our cutting-edge research in AI, quantum computing, and autonomous systems.',
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Research & Innovation</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Driving the future of technology through cutting-edge research in AI, quantum computing, and autonomous
            systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200">
            <h3 className="text-xl font-bold text-white mb-4">AI Research</h3>
            <p className="text-gray-300 mb-4">Advanced machine learning algorithms and neural network architectures.</p>
            <div className="text-blue-400 font-semibold">25+ Patents Filed</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200">
            <h3 className="text-xl font-bold text-white mb-4">Quantum Computing</h3>
            <p className="text-gray-300 mb-4">
              Breakthrough research in quantum algorithms and quantum machine learning.
            </p>
            <div className="text-blue-400 font-semibold">15+ Publications</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200">
            <h3 className="text-xl font-bold text-white mb-4">Autonomous Systems</h3>
            <p className="text-gray-300 mb-4">Self-learning systems and autonomous decision-making frameworks.</p>
            <div className="text-blue-400 font-semibold">10+ Active Projects</div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Research Partnerships</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We collaborate with leading universities and research institutions worldwide to advance the frontiers of
            technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Stanford University</h3>
              <p className="text-gray-300">AI & Machine Learning</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">MIT</h3>
              <p className="text-gray-300">Quantum Computing & AI</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">University of Oxford</h3>
              <p className="text-gray-300">AI Ethics & Governance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
