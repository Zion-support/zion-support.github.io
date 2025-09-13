import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Bot, Zap, Brain, Star, TrendingUp, Cog } from 'lucide-react';

const AdvancedAutomationSolutions2025PromotionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-500/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-teal-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-500/30 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 mb-6">
            <Bot className="w-5 h-5 text-emerald-400 mr-2" />
            <span className="text-sm font-medium text-white">Advanced Automation 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Advanced Automation
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Solutions 2025
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl text-gray-300 mt-4">
              Intelligent Process Automation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our advanced automation solutions. From intelligent process automation 
            to autonomous decision systems, achieve unprecedented efficiency and productivity gains.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/advanced-automation-solutions-2025"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Settings className="w-6 h-6 mr-2" />
              Explore Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/automation-case-studies"
              className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              <TrendingUp className="w-6 h-6 mr-2" />
              View Case Studies
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Intelligent Process Automation</h3>
            <p className="text-gray-300">
              AI-powered process automation that learns and adapts to optimize business workflows with 99.9% accuracy.
            </p>
          </div>

          <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Autonomous Decision Systems</h3>
            <p className="text-gray-300">
              Self-managing systems that make intelligent decisions and adapt to changing business conditions autonomously.
            </p>
          </div>

          <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Cog className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Smart Resource Management</h3>
            <p className="text-gray-300">
              Intelligent resource allocation and optimization systems that maximize efficiency and minimize waste.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">85%</div>
            <div className="text-gray-300">Efficiency Gain</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Operation</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">2025</div>
            <div className="text-gray-300">Launch</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAutomationSolutions2025PromotionBanner;