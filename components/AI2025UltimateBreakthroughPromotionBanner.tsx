import React from 'react';
import Link from 'next/link';

const AI2025UltimateBreakthroughPromotionBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] animate-spin-slow"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Main headline */}
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent text-6xl md:text-8xl font-black animate-pulse">
              BREAKTHROUGH
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI 2025 Ultimate Breakthrough:
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Revolutionary Autonomous Systems
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most significant technological breakthrough in human history. 
            <strong className="text-yellow-400"> 99.97% accuracy</strong>, 
            <strong className="text-green-400"> 10,000x faster processing</strong>, and 
            <strong className="text-blue-400"> 25,000% ROI</strong> achieved by our revolutionary AI systems.
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">99.97%</div>
              <div className="text-white font-semibold">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">10,000x</div>
              <div className="text-white font-semibold">Faster Processing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">25,000%</div>
              <div className="text-white font-semibold">ROI Achieved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-white font-semibold">Scalability</div>
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/blog/ai-2025-ultimate-breakthrough-revolutionary-autonomous-systems"
              className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 hover:from-red-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              🚀 Read Breakthrough Details
            </Link>
            <Link
              href="/case-studies/ai-2025-global-enterprise-autonomous-transformation-breakthrough"
              className="bg-gradient-to-r from-green-500 via-blue-500 to-indigo-600 hover:from-green-600 hover:via-blue-600 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              🏆 View Success Story
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 hover:from-yellow-600 hover:via-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              💬 Get Started Today
            </Link>
          </div>
          
          {/* Urgency message */}
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-2xl">🔥</span>
              <h3 className="text-2xl font-bold text-red-400">LIMITED TIME OFFER</h3>
              <span className="text-2xl">🔥</span>
            </div>
            <p className="text-lg text-white">
              First 10 clients get <strong className="text-yellow-400">75% off implementation</strong> + 
              <strong className="text-green-400"> FREE quantum hardware</strong> for the first year!
            </p>
            <div className="mt-4 text-sm text-gray-300">
              ⏰ Offer expires in 30 days - Don't miss this revolutionary opportunity!
            </div>
          </div>
          
          {/* Social proof */}
          <div className="text-center">
            <p className="text-gray-400 text-lg mb-4">
              Join <strong className="text-white">500+ companies</strong> already transformed by AI 2025
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              <span className="bg-white/10 px-3 py-1 rounded-full">Fortune 500 Companies</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Global Enterprises</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Tech Leaders</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Innovation Pioneers</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AI2025UltimateBreakthroughPromotionBanner;