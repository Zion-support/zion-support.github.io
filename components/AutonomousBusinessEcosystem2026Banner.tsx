import React from 'react';
import Link from 'next/link';

const AutonomousBusinessEcosystem2026Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white py-20">
      {/* Autonomous system network visualization */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-medium">🤖 AUTONOMOUS BUSINESS ECOSYSTEM 2026</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
            Autonomous Business
            <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Ecosystem 2026
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the future of business with fully autonomous AI ecosystems that manage, 
            optimize, and scale your operations without human intervention. True business autonomy achieved.
          </p>
          
          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-4">🏭</div>
              <h3 className="text-lg font-bold mb-2">Self-Managing Operations</h3>
              <p className="text-sm opacity-80">AI systems that run your entire business infrastructure</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-lg font-bold mb-2">Autonomous Growth</h3>
              <p className="text-sm opacity-80">Self-scaling systems that adapt to market changes</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-lg font-bold mb-2">Self-Optimization</h3>
              <p className="text-sm opacity-80">Continuous improvement without human oversight</p>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/autonomous-business-ecosystem-2026"
              className="bg-gradient-to-r from-blue-400 to-green-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-500 hover:to-green-500 transition-all duration-300 transform hover:scale-105"
            >
              Build Your Ecosystem →
            </Link>
            <Link
              href="/autonomous-business-ecosystem-2026/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
          
          {/* Ecosystem stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">100%</div>
              <div className="text-sm opacity-80">Autonomous Operation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">24/7</div>
              <div className="text-sm opacity-80">Continuous Management</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">500%</div>
              <div className="text-sm opacity-80">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">Zero</div>
              <div className="text-sm opacity-80">Human Intervention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousBusinessEcosystem2026Banner;