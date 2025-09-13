import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Zap, Cpu, Database, Shield, Globe, Rocket, Settings, Target } from 'lucide-react';

const AdvancedAutomationSolutions2030PromotionBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.2),transparent_50%)]"></div>
      
      {/* Floating Automation Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-500/20 rounded-full animate-bounce"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-teal-500/20 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-cyan-500/20 rounded-full animate-bounce delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-black rounded-full text-sm font-semibold mb-6">
            <Bot className="w-4 h-4 mr-2" />
            NEW: Advanced Automation Solutions 2030
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Autonomous Operations 2030
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with 
            <span className="text-emerald-400 font-semibold"> fully autonomous operations</span>, 
            <span className="text-emerald-400 font-semibold"> self-healing systems</span>, and 
            <span className="text-emerald-400 font-semibold"> intelligent decision-making</span> that runs 24/7 without human intervention.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/advanced-automation-solutions-2030" 
              className="bg-gradient-to-r from-emerald-400 to-teal-500 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:from-emerald-500 hover:to-teal-600 hover:scale-105 flex items-center justify-center"
            >
              Explore Automation Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/autonomous-operations-2030" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center"
            >
              Autonomous Operations
              <Settings className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
            <Bot className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Fully Autonomous</h3>
            <p className="text-gray-300">Zero human intervention required</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
            <Zap className="w-12 h-12 text-teal-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Self-Healing</h3>
            <p className="text-gray-300">Automatically fixes and optimizes</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
            <Cpu className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Intelligent Decisions</h3>
            <p className="text-gray-300">AI-powered business decisions</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
            <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Predictive Security</h3>
            <p className="text-gray-300">Prevents issues before they occur</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">100%</div>
            <div className="text-gray-300">Automation</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">24/7</div>
            <div className="text-gray-300">Operation</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-gray-300">Uptime</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">2030</div>
            <div className="text-gray-300">Target Year</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAutomationSolutions2030PromotionBanner;