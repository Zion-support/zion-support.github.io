import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research & Innovation | Zion Tech Group',
  description: 'Explore our cutting-edge research in AI, machine learning, and technology innovation. Leading the future of intelligent systems.',
  keywords: 'AI research, machine learning, technology innovation, research publications, academic collaboration',
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Research & Innovation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of technology through cutting-edge research and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Our Research Focus</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Artificial Intelligence</h3>
                  <p className="text-gray-300">Advanced AI algorithms, machine learning models, and neural network architectures.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
                  <p className="text-gray-300">Quantum algorithms, quantum machine learning, and quantum optimization.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Blockchain Technology</h3>
                  <p className="text-gray-300">Distributed systems, smart contracts, and decentralized applications.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Research Publications</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-white mb-1">"Quantum Machine Learning for Financial Optimization"</h3>
                <p className="text-gray-400 text-sm mb-2">Nature Quantum Information, 2024</p>
                <p className="text-gray-300 text-sm">Novel quantum algorithms for portfolio optimization and risk management.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-white mb-1">"Autonomous AI Systems for Enterprise Operations"</h3>
                <p className="text-gray-400 text-sm mb-2">IEEE Transactions on AI, 2024</p>
                <p className="text-gray-300 text-sm">Self-managing AI systems that adapt to changing business environments.</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-white mb-1">"Decentralized Identity Management on Blockchain"</h3>
                <p className="text-gray-400 text-sm mb-2">ACM Computing Surveys, 2024</p>
                <p className="text-gray-300 text-sm">Privacy-preserving identity solutions using zero-knowledge proofs.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Research Collaborations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Academic Partnerships</h3>
              <p className="text-gray-300">Collaborating with leading universities and research institutions worldwide.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Industry Research</h3>
              <p className="text-gray-300">Working with Fortune 500 companies on cutting-edge technology solutions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Open Source</h3>
              <p className="text-gray-300">Contributing to open source projects and sharing knowledge with the community.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Research Team</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're always looking for talented researchers and engineers to join our mission of advancing technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Open Positions
            </a>
            <a
              href="/contact"
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}