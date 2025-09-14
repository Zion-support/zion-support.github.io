import React from 'react';
import Link from 'next/link';

const AutonomousSystems2026Banner = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-gray-900 to-zinc-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Autonomous system grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }).map((_i) => (
            <div key={i} className="border border-gray-400/20 rounded animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-gray-500/20 to-slate-500/20 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-gray-400/30">
            <span className="text-lg font-bold flex items-center">
              🤖 <span className="ml-3">AUTONOMOUS SYSTEMS 2026</span>
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Fully
            <span className="block bg-gradient-to-r from-gray-300 via-slate-300 to-zinc-300 bg-clip-text text-transparent">
              Autonomous
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            The era of fully autonomous systems is here. AI systems that operate independently
            make complex decisionsand adapt to changing environments without human intervention. 
            Experience the future of autonomous technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-gray-500/20 to-slate-500/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-400/30">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-3">Autonomous Vehicles</h3>
              <p className="text-sm opacity-80 mb-3">Self-driving cars that navigate complex urban environments</p>
              <ul className="text-xs opacity-70 space-y-1">
                <li>• Real-time decision making</li>
                <li>• Weather adaptation</li>
                <li>• Traffic optimization</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-500/20 to-zinc-500/20 backdrop-blur-sm rounded-2xl p-6 border border-slate-400/30">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-3">Smart Factories</h3>
              <p className="text-sm opacity-80 mb-3">Manufacturing systems that self-optimize and self-repair</p>
              <ul className="text-xs opacity-70 space-y-1">
                <li>• Predictive maintenance</li>
                <li>• Quality optimization</li>
                <li>• Supply chain management</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-zinc-500/20 to-gray-500/20 backdrop-blur-sm rounded-2xl p-6 border border-zinc-400/30">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-3">Smart Cities</h3>
              <p className="text-sm opacity-80 mb-3">Urban systems that manage themselves autonomously</p>
              <ul className="text-xs opacity-70 space-y-1">
                <li>• Traffic management</li>
                <li>• Energy optimization</li>
                <li>• Public safety</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-500/20 to-slate-500/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-400/30">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-3">Digital Ecosystems</h3>
              <p className="text-sm opacity-80 mb-3">Self-managing digital infrastructure and services</p>
              <ul className="text-xs opacity-70 space-y-1">
                <li>• Auto-scaling systems</li>
                <li>• Self-healing networks</li>
                <li>• Intelligent monitoring</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-gray-500/10 to-slate-500/10 backdrop-blur-sm rounded-2xl p-10 mb-12 border border-gray-400/20">
            <h3 className="text-3xl font-bold mb-6">Autonomous System Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h4 className="text-xl font-semibold mb-3">Self-Learning</h4>
                <p className="text-sm opacity-80">Continuously improve performance through experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-semibold mb-3">Real-Time Adaptation</h4>
                <p className="text-sm opacity-80">Instantly adapt to changing conditions and requirements</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h4 className="text-xl font-semibold mb-3">Self-Maintenance</h4>
                <p className="text-sm opacity-80">Detect and fix issues without human intervention</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-500/20 to-slate-500/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-400/30">
              <h3 className="text-2xl font-bold mb-4">Autonomous Business Operations</h3>
              <ul className="space-y-3 text-sm opacity-80">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Automated customer service with human-level understanding
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Self-optimizing supply chain management
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Autonomous financial trading and risk management
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Self-managing IT infrastructure and security
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-500/20 to-zinc-500/20 backdrop-blur-sm rounded-2xl p-8 border border-slate-400/30">
              <h3 className="text-2xl font-bold mb-4">Autonomous Research & Development</h3>
              <ul className="space-y-3 text-sm opacity-80">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">✓</span>
                  Self-directed scientific research and experimentation
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">✓</span>
                  Autonomous product development and testing
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">✓</span>
                  Self-improving AI systems and algorithms
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">✓</span>
                  Autonomous innovation and patent generation
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/autonomous-systems-2026"
              className="bg-gradient-to-r from-gray-500 to-slate-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-gray-400 hover:to-slate-500 transition-all duration-300 transform hover:scale-105"
            >
              Explore Autonomous Systems →
            </Link>
            <Link
              href="/autonomous-systems-demo"
              className="border-2 border-gray-400 text-gray-400 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-400 hover:text-gray-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg opacity-80 mb-4">
              "Autonomous systems will handle 80% of business operations by 2026"
            </p>
            <p className="text-sm opacity-60">- Autonomous Systems Research Foundation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousSystems2026Banner;