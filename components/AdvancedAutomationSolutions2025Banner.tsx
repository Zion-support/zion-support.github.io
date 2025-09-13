import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Settings, Zap, BarChart3, Users, Clock, Target, TrendingUp, Star } from 'lucide-react';

const AdvancedAutomationSolutions2025Banner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Crect x="30" y="30" width="2" height="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 mb-6">
            <Bot className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-sm font-medium text-emerald-200">Advanced Automation Solutions 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Advanced Automation
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions 2025
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with intelligent automation solutions that combine AI, machine learning, 
            and robotic process automation for unprecedented efficiency and productivity gains.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/advanced-automation-solutions-2025" 
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Bot className="w-5 h-5 mr-2" />
              Explore Automation Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/automation-case-studies" 
              className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-emerald-400 hover:bg-emerald-400/10 text-emerald-200 font-semibold rounded-lg transition-all duration-300"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              View Case Studies
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Automation Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Intelligent Process Automation</h3>
            <p className="text-gray-300 text-sm">AI-powered automation that learns and adapts to optimize business processes</p>
          </div>

          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Autonomous Decision Systems</h3>
            <p className="text-gray-300 text-sm">Self-managing systems that make intelligent decisions without human intervention</p>
          </div>

          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Predictive Maintenance AI</h3>
            <p className="text-gray-300 text-sm">Advanced AI systems that predict and prevent equipment failures before they occur</p>
          </div>

          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Smart Resource Management</h3>
            <p className="text-gray-300 text-sm">Intelligent allocation and optimization of human and digital resources</p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">2025 Automation Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">500% Productivity Increase</h4>
                <p className="text-gray-300 text-sm">Dramatic productivity gains through intelligent automation and process optimization</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">24/7 Autonomous Operations</h4>
                <p className="text-gray-300 text-sm">Round-the-clock automated systems that never stop working for your business</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Target className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">99.9% Accuracy Rate</h4>
                <p className="text-gray-300 text-sm">Near-perfect accuracy in automated processes and decision-making</p>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Industry Applications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-400/20">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-white">Manufacturing</h4>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-400/20">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-white">Finance</h4>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-400/20">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-white">Healthcare</h4>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-400/20">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-white">Retail</h4>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500%</div>
            <div className="text-gray-300">Productivity Increase</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Autonomous Operations</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300">Industry Solutions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAutomationSolutions2025Banner;