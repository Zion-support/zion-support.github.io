import React from 'react';
import { Link } from 'react-router-dom';

const January2026AutonomousProcessesRevolutionBanner: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 border-t border-b border-purple-500/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <span className="text-purple-400 font-bold text-lg tracking-wider uppercase animate-pulse">
              🤖 January 2026 Autonomous Processes Revolution
            </span>
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              $75M ROI SUCCESS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Autonomous Business Processes: The Future of Enterprise Automation
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Achieve 99.9% process automation with AI-powered autonomous business processes. Learn how leading organizations achieve $75M ROI through intelligent automation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">🧠</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Intelligent Automation</h3>
                <p className="text-purple-300 text-sm">99.9% Autonomous</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              AI systems make intelligent decisions, self-optimize processes, and handle exceptions autonomously with minimal human intervention.
            </p>
            <div className="text-purple-400 font-semibold text-sm">
              Self-Learning AI →
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">⚡</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Lightning Fast</h3>
                <p className="text-pink-300 text-sm">95% Time Reduction</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Autonomous processes reduce processing time by 95%, enabling instant responses and real-time decision making.
            </p>
            <div className="text-pink-400 font-semibold text-sm">
              Real-Time Processing →
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">🔄</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Self-Healing</h3>
                <p className="text-indigo-300 text-sm">Auto-Recovery</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Autonomous systems automatically detect and resolve issues, ensuring continuous operation with 99.99% uptime.
            </p>
            <div className="text-indigo-400 font-semibold text-sm">
              Zero Downtime →
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/blog/ai-2026-autonomous-business-processes" 
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
          >
            Read Autonomous Processes Guide →
          </Link>
          <Link to="/case-studies/ai-2026-autonomous-processes-financial-success" 
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
          >
            View $75M Success Story →
          </Link>
          <Link to="/services/autonomous-business-processes" 
            className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
          >
            Get Autonomous Solutions
          </Link>
        </div>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
            <div className="text-2xl font-extrabold text-purple-400 mb-1">$75M</div>
            <div className="text-xs text-purple-300">Financial ROI</div>
          </div>
          <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-4 border border-pink-500/30">
            <div className="text-2xl font-extrabold text-pink-400 mb-1">99.9%</div>
            <div className="text-xs text-pink-300">Process Automation</div>
          </div>
          <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
            <div className="text-2xl font-extrabold text-green-400 mb-1">95%</div>
            <div className="text-xs text-green-300">Time Reduction</div>
          </div>
          <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
            <div className="text-2xl font-extrabold text-indigo-400 mb-1">99.99%</div>
            <div className="text-xs text-indigo-300">System Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2026AutonomousProcessesRevolutionBanner;