import React from 'react';
import Link from 'next/link';

export default function AI2026NeuralInterfacesPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-blue-600 to-teal-700 py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6 animate-pulse">
            🧠 NEURAL INTERFACE REVOLUTION
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI 2026 Neural
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Interface Revolution
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the revolutionary neural interface technology that enables direct brain-computer 
            communicationtransforming how humans interact with AI systems and digital environments.
          </p>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">💭</div>
              <h3 className="text-lg font-semibold text-white mb-2">Thought-to-Text</h3>
              <p className="text-green-100 text-sm">95% accuracy neural communication</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold text-white mb-2">Neural AI Collaboration</h3>
              <p className="text-green-100 text-sm">10ms real-time cognitive enhancement</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold text-white mb-2">Memory Enhancement</h3>
              <p className="text-green-100 text-sm">1000x memory boost capabilities</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-2026-neural-interfaces"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Neural Interfaces
              <svg className="ml-2 w-5 h-5" fill%3D%22none%22 stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/neural-interface-demo"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Try Neural Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">95%</div>
              <div className="text-green-200 text-sm">Thought-to-Text Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">10ms</div>
              <div className="text-green-200 text-sm">Neural Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">1000x</div>
              <div className="text-green-200 text-sm">Memory Enhancement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-green-200 text-sm">Emotion Recognition</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Neural Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse">
        <div className="absolute inset-2 border-2 border-white/30 rounded-full">
          <div className="absolute inset-2 bg-white/20 rounded-full"></div>
        </div>
      </div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-300/20 rounded-full animate-pulse delay-1000">
        <div className="absolute inset-2 border-2 border-yellow-300/40 rounded-full">
          <div className="absolute inset-2 bg-yellow-300/30 rounded-full"></div>
        </div>
      </div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-blue-300/20 rounded-full animate-pulse delay-500">
        <div className="absolute inset-2 border-2 border-blue-300/40 rounded-full">
          <div className="absolute inset-2 bg-blue-300/30 rounded-full"></div>
        </div>
      </div>
      <div className="absolute top-1/4 right-20 w-8 h-8 bg-green-300/20 rounded-full animate-pulse delay-300">
        <div className="absolute inset-1 border border-green-300/40 rounded-full">
          <div className="absolute inset-1 bg-green-300/30 rounded-full"></div>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-20 w-6 h-6 bg-teal-300/20 rounded-full animate-pulse delay-700">
        <div className="absolute inset-1 border border-teal-300/40 rounded-full"></div>
      </div>
    </div>
  );
}