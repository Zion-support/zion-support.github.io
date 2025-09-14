import React from 'react';
import Link from 'next/link';

const QuantumAI2026RevolutionBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Quantum Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Quantum Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
            ⚛️ NEW: Quantum AI 2026 Revolution
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Quantum Machine Learning
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              1000x Processing Speed
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Experience the quantum AI revolution delivering 
            <span className="font-bold text-cyan-400"> 1000x processing speed</span> improvements and 
            <span className="font-bold text-cyan-400"> 99.9% accuracy</span> across all domains.
          </p>
          
          {/* Quantum Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">1000x</div>
              <div className="text-sm opacity-80">Speed Improvement</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">99.9%</div>
              <div className="text-sm opacity-80">Accuracy Rate</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">500x</div>
              <div className="text-sm opacity-80">Faster Training</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">90%</div>
              <div className="text-sm opacity-80">Cost Reduction</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2026-quantum-machine-learning-revolution"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Quantum AI →
            </Link>
            <Link
              href="/tools/quantum-ai-readiness-assessment-2026"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Assess Your Readiness
            </Link>
          </div>
          
          {/* Additional Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <Link href="/case-studies/quantum-ai-transformation-2026-ultimate-success" className="hover:text-cyan-400 transition-colors">
              Success Stories
            </Link>
            <Link href="/services/quantum-ai" className="hover:text-cyan-400 transition-colors">
              Quantum AI Services
            </Link>
            <Link href="/resources/quantum-ai-implementation-guide" className="hover:text-cyan-400 transition-colors">
              Implementation Guide
            </Link>
            <Link href="/contact" className="hover:text-cyan-400 transition-colors">
              Schedule Demo
            </Link>
          </div>
        </div>
        
        {/* Quantum Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400 bg-opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-400 bg-opacity-20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-purple-400 bg-opacity-20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-5 w-8 h-8 bg-pink-400 bg-opacity-20 rounded-full animate-pulse delay-1500"></div>
        
        {/* Quantum Circuit Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400 border-opacity-30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-blue-400 border-opacity-30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        </div>
      </div>
    </section>
  );
};

export default QuantumAI2026RevolutionBanner;