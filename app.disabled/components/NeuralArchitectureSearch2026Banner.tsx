import React from 'react';
import Link from 'next/link';

const NeuralArchitectureSearch2026Banner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white overflow-hidden">
      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M50 50c0-27.614-22.386-50-50-50s-50 22.386-50 50 22.386 50 50 50 50-22.386 50-50zm0 0c0 27.614 22.386 50 50 50s50-22.386 50-50-22.386-50-50-50-50 22.386-50 50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* NAS Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-400 to-teal-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
            🧠 NEW: Neural Architecture Search 2026
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Self-Designing AI Systems
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
              99.9% Accuracy Breakthrough
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Experience the revolution of AI systems that design themselves, achieving 
            <span className="font-bold text-emerald-400"> 99.9% accuracy</span> and 
            <span className="font-bold text-emerald-400"> 1000x faster development</span> than human-designed models.
          </p>
          
          {/* NAS Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
              <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-1">99.9%</div>
              <div className="text-sm opacity-80">Model Accuracy</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">1000x</div>
              <div className="text-sm opacity-80">Faster Development</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
              <div className="text-2xl md:text-3xl font-bold text-teal-400 mb-1">500%</div>
              <div className="text-sm opacity-80">Performance Improvement</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">90%</div>
              <div className="text-sm opacity-80">Resource Efficiency</div>
            </div>
          </div>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold mb-2">Evolutionary Search</h3>
              <p className="text-sm opacity-80">
                AI systems that evolve and improve their own architectures through genetic algorithms
              </p>
            </div>
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold mb-2">Reinforcement Learning</h3>
              <p className="text-sm opacity-80">
                AI agents that learn to design optimal architectures through trial and error
              </p>
            </div>
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-lg font-bold mb-2">Gradient Optimization</h3>
              <p className="text-sm opacity-80">
                Differentiable architecture search using advanced gradient optimization
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2026-neural-architecture-search-breakthrough"
              className="bg-gradient-to-r from-emerald-400 to-teal-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore NAS Technology →
            </Link>
            <Link
              href="/tools/neural-architecture-search-demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Try NAS Demo
            </Link>
          </div>
          
          {/* Additional Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <Link href="/case-studies/nas-implementation-success-2026" className="hover:text-emerald-400 transition-colors">
              Success Stories
            </Link>
            <Link href="/services/neural-architecture-search" className="hover:text-emerald-400 transition-colors">
              NAS Services
            </Link>
            <Link href="/resources/nas-implementation-guide" className="hover:text-emerald-400 transition-colors">
              Implementation Guide
            </Link>
            <Link href="/contact" className="hover:text-emerald-400 transition-colors">
              Schedule Demo
            </Link>
          </div>
        </div>
        
        {/* Neural Network Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-emerald-400 border-opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-teal-400 border-opacity-20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-cyan-400 border-opacity-20 rounded-full animate-pulse delay-500"></div>
        </div>
        
        {/* Floating Neural Nodes */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-emerald-400 bg-opacity-20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-teal-400 bg-opacity-20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-5 w-8 h-8 bg-cyan-400 bg-opacity-20 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/3 right-5 w-6 h-6 bg-green-400 bg-opacity-20 rounded-full animate-bounce delay-1500"></div>
      </div>
    </section>
  );
};

export default NeuralArchitectureSearch2026Banner;