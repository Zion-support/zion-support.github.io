import React from 'react';
import { Cloud, Zap, TrendingUp, Shield, Rocket } from 'lucide-react';

const October2025CloudNativeRevolutionBanner = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg animate-bounce">
            <Rocket className="w-6 h-6 text-white mr-2" />
            <span className="text-white font-bold text-lg">🔥 JUST PUBLISHED: OCTOBER 1, 2025 🔥</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 animate-gradient">
            AI-Native Cloud Infrastructure
          </span>
          <br />
          <span className="text-white">Revolution</span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-cyan-200 text-center font-semibold mb-8">
          Transform Enterprise Computing with Intelligent, Self-Optimizing Infrastructure
        </p>

        {/* Key Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-12 h-12 text-green-400" />
            </div>
            <h3 className="text-4xl font-bold text-white text-center mb-2">60-75%</h3>
            <p className="text-cyan-200 text-center font-semibold">Cost Reduction</p>
            <p className="text-gray-300 text-center text-sm mt-2">Intelligent resource optimization</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-4xl font-bold text-white text-center mb-2">99.99%</h3>
            <p className="text-cyan-200 text-center font-semibold">Uptime</p>
            <p className="text-gray-300 text-center text-sm mt-2">Self-healing infrastructure</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-12 h-12 text-yellow-400" />
            </div>
            <h3 className="text-4xl font-bold text-white text-center mb-2">95%</h3>
            <p className="text-cyan-200 text-center font-semibold">Automation</p>
            <p className="text-gray-300 text-center text-sm mt-2">Autonomous operations</p>
          </div>
        </div>

        {/* Success Story Highlight */}
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-yellow-400/30">
          <div className="flex items-center justify-center mb-4">
            <Cloud className="w-10 h-10 text-yellow-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Fortune 500 Success Story</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">$1.2B</div>
              <div className="text-white font-semibold">Annual Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">99.99%</div>
              <div className="text-white font-semibold">Uptime Achieved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">500K</div>
              <div className="text-white font-semibold">VMs Optimized</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">1,847%</div>
              <div className="text-white font-semibold">ROI</div>
            </div>
          </div>
        </div>

        {/* Key Capabilities */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white text-center mb-6">Revolutionary Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              '🤖 Autonomous Resource Orchestration',
              '🔮 Predictive Performance Optimization',
              '☁️ Unified Multi-Cloud Management',
              '🛡️ Self-Healing Infrastructure',
              '💰 Intelligent Cost Optimization',
              '📊 Real-Time Analytics & Insights'
            ].map((capability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-white font-semibold text-center">{capability}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a
            href="/blog/ai-2025-october-cloud-native-infrastructure-revolution"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center"
          >
            <span>Read Complete Guide</span>
            <Rocket className="ml-2 w-5 h-5" />
          </a>
          <a
            href="/case-studies/ai-2025-october-fortune-500-multi-cloud-transformation-1-2-billion-success"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center"
          >
            <span>View Success Story</span>
            <TrendingUp className="ml-2 w-5 h-5" />
          </a>
          <a
            href="/services/ai-2025-october-cloud-native-infrastructure-services"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center"
          >
            <span>Get Started Today</span>
            <Cloud className="ml-2 w-5 h-5" />
          </a>
        </div>

        {/* Footer Tag */}
        <div className="mt-8 text-center">
          <p className="text-cyan-300 font-semibold text-lg">
            🌟 NEW: Complete Implementation Guide, Fortune 500 Case Study & Enterprise Services 🌟
          </p>
          <p className="text-gray-400 mt-2">
            Join 47 Fortune 500 companies achieving unprecedented cloud efficiency with AI-native infrastructure
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default October2025CloudNativeRevolutionBanner;
