import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Zap, Target, TrendingUp, Users, Shield, Cpu, Brain } from 'lucide-react';

const AutomationSolutions2026_2030PromotionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-semibold mb-6">
            <Bot className="w-4 h-4 mr-2" />
            NEW: Automation Solutions 2026-2030
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Future of Business
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Automation Revolution
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            From basic process automation to transcendent AI systems, discover the complete evolution 
            of automation that will transform how businesses operate, compete, and succeed in the digital age.
          </p>

          {/* Evolution Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-green-400/50 transition-all duration-300">
              <div className="text-2xl font-bold text-green-400 mb-2">2026</div>
              <div className="text-sm text-white font-semibold mb-1">Autonomous Business</div>
              <div className="text-xs text-gray-300">100% Automation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-2xl font-bold text-blue-400 mb-2">2027</div>
              <div className="text-sm text-white font-semibold mb-1">Intelligent Process</div>
              <div className="text-xs text-gray-300">AI-Driven Decisions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-2xl font-bold text-purple-400 mb-2">2028</div>
              <div className="text-sm text-white font-semibold mb-1">Cognitive Automation</div>
              <div className="text-xs text-gray-300">Human-Level AI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-2xl font-bold text-cyan-400 mb-2">2029</div>
              <div className="text-sm text-white font-semibold mb-1">Autonomous Ecosystem</div>
              <div className="text-xs text-gray-300">Perfect Coordination</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-yellow-400/50 transition-all duration-300">
              <div className="text-2xl font-bold text-yellow-400 mb-2">2030</div>
              <div className="text-sm text-white font-semibold mb-1">Transcendent AI</div>
              <div className="text-xs text-gray-300">Beyond Human</div>
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-lg mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">500% Efficiency</h3>
              <p className="text-gray-300 text-sm">Exponential productivity gains with autonomous systems</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4 mx-auto">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">99.9% Accuracy</h3>
              <p className="text-gray-300 text-sm">Perfect precision eliminates human errors</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-lg mb-4 mx-auto">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">80% Cost Reduction</h3>
              <p className="text-gray-300 text-sm">Dramatic operational cost savings</p>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">100%</div>
              <div className="text-sm text-gray-300">Automation by 2026</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">500%</div>
              <div className="text-sm text-gray-300">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">80%</div>
              <div className="text-sm text-gray-300">Cost Reduction</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/automation-solutions-2026-2030"
              className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/automation-strategy-consulting"
              className="group border-2 border-white/30 hover:border-green-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-lg"
            >
              Get Strategic Planning
              <Brain className="w-5 h-5 ml-2 inline group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-400 text-sm mb-4">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold">Fortune 500</div>
              <div className="text-white font-semibold">Tech Giants</div>
              <div className="text-white font-semibold">Startups</div>
              <div className="text-white font-semibold">Enterprises</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSolutions2026_2030PromotionBanner;