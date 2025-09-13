import React from 'react';
import { Link } from 'react-router-dom';

const AutonomousSystemsRevolutionBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-orange-900 via-red-900 to-pink-900 py-20">
      {/* Autonomous system visualization */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-20 h-20 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-red-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-12 h-12 bg-pink-400 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-yellow-400 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/4 left-2/3 w-14 h-14 bg-rose-400 rounded-full opacity-35 animate-bounce"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-orange-200 bg-orange-800/30 rounded-full border border-orange-400/30 mb-4 animate-pulse">
              🤖 AUTONOMOUS SYSTEMS REVOLUTION 2026-2027
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Fully Autonomous
              <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Intelligent Systems
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
              Self-governing systems that make complex decisions, adapt to changing environments, 
              and operate independently across all industries. The future of automation is autonomous.
            </p>
          </div>

          {/* Key autonomous features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-white mb-2">Autonomous Vehicles</h3>
              <p className="text-orange-200">Self-driving cars, trucks, and drones with Level 5 autonomy and zero human intervention</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-white mb-2">Smart Manufacturing</h3>
              <p className="text-orange-200">Fully automated factories that self-optimize, self-repair, and adapt to demand</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-white mb-2">Autonomous Healthcare</h3>
              <p className="text-orange-200">AI systems that diagnose, treat, and monitor patients without human oversight</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/autonomous-systems-solutions"
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg rounded-full hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25"
            >
              <span className="relative z-10">Explore Autonomous Systems</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/case-studies/autonomous-manufacturing-revolution"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              View Industry Transformations
            </Link>
          </div>

          {/* Autonomous systems stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.8%</div>
              <div className="text-orange-200">Autonomy Level</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-orange-200">Continuous Operation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">0.001%</div>
              <div className="text-orange-200">Error Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-orange-200">Self-Adaptation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousSystemsRevolutionBanner;