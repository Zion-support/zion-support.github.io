// import React from 'react';
import { Link } from 'react-router-dom';

const January2026NewContentShowcaseBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 border-t border-b border-blue-500/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase animate-pulse">
              ✨ January 2026 New Content Showcase
            </span>
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              $125M COMBINED ROI
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Content & Success Stories
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-5xl mx-auto">
            Discover the latest AI innovations, breakthrough technologies, and real-world success stories that are reshaping enterprise operations in 2026
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Edge Computing Content */}
          <div className="group bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl font-bold">⚡</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Edge Computing Revolution</h3>
                <p className="text-blue-300 text-sm">$50M Manufacturing ROI</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Transform your operations with edge computing AI. Achieve 99.7% predictive maintenance accuracy, 85% downtime reduction, and $50M ROI through real-time processing.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-400">Featured Content</div>
              <div className="text-blue-400 font-semibold text-sm group-hover:text-blue-300">
                Read Guide →
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/blog/ai-2026-edge-computing-revolution"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                📖 Edge Computing Revolution Guide
              </Link>
              <Link to="/case-studies/ai-2026-edge-computing-manufacturing-success"
                className="text-green-400 hover:text-green-300 font-semibold transition-colors"
              >
                💰 $50M Manufacturing Success Story
              </Link>
            </div>
          </div>
          
          {/* Autonomous Processes Content */}
          <div className="group bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🤖</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Autonomous Processes</h3>
                <p className="text-purple-300 text-sm">$75M Financial ROI</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Achieve 99.9% process automation with AI-powered autonomous business processes. Learn how leading organizations achieve $75M ROI through intelligent automation.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-400">Featured Content</div>
              <div className="text-purple-400 font-semibold text-sm group-hover:text-purple-300">
                Read Guide →
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/blog/ai-2026-autonomous-business-processes"
                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
              >
                📖 Autonomous Processes Guide
              </Link>
              <Link to="/case-studies/ai-2026-autonomous-processes-financial-success"
                className="text-green-400 hover:text-green-300 font-semibold transition-colors"
              >
                💰 $75M Financial Success Story
              </Link>
            </div>
          </div>
          
          {/* AI Innovation Hub */}
          <div className="group bg-gradient-to-br from-indigo-900/30 to-indigo-800/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🧠</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">AI Innovation Hub</h3>
                <p className="text-indigo-300 text-sm">Latest Technologies</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Explore the latest AI innovations, breakthrough technologies, and implementation strategies that are reshaping enterprise operations in 2026.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-400">Featured Content</div>
              <div className="text-indigo-400 font-semibold text-sm group-hover:text-indigo-300">
                Explore →
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/content-hub"
                className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
              >
                🏠 AI Content Hub
              </Link>
              <Link to="/services"
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                🚀 AI Solutions & Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Key Success Metrics */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/30 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Combined Success Metrics</h3>
            <p className="text-gray-300">Real results from our latest AI implementations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-green-400 mb-2">$125M</div>
              <div className="text-sm text-gray-300">Combined ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-blue-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Process Automation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">95%</div>
              <div className="text-sm text-gray-300">Efficiency Gains</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-orange-400 mb-2">1000+</div>
              <div className="text-sm text-gray-300">Enterprise Clients</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/blog" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
          >
            Explore All AI Content →
          </Link>
          <Link to="/case-studies" 
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
          >
            View All Success Stories →
          </Link>
          <Link to="/contact" 
            className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
          >
            Get AI Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default January2026NewContentShowcaseBanner;