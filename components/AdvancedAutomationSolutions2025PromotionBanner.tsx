import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Bot, Target, TrendingUp, Star, Zap, Cpu } from 'lucide-react';

const AdvancedAutomationSolutions2025PromotionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 mb-6">
            <Settings className="w-5 h-5 text-emerald-300 mr-2" />
            <span className="text-emerald-300 font-semibold">Advanced Automation 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Advanced Automation
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Solutions Revolution
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with intelligent process automation, autonomous decision systems, and self-optimizing workflows that deliver unprecedented efficiency and ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/advanced-automation-2025" 
              className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span className="flex items-center">
                Explore Automation Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link 
              to="/automation-demo" 
              className="group bg-transparent border-2 border-emerald-400/30 hover:border-emerald-400/60 text-emerald-300 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-emerald-500/10"
            >
              <span className="flex items-center">
                Live Demo
                <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Intelligent Process Automation</h3>
            <p className="text-gray-300 mb-6">
              AI-powered automation that learns, adapts, and optimizes business processes in real-time without human intervention.
            </p>
            <div className="flex items-center text-emerald-300 font-semibold">
              <TrendingUp className="w-5 h-5 mr-2" />
              2,500% ROI Guaranteed
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Autonomous Decision Systems</h3>
            <p className="text-gray-300 mb-6">
              Self-managing AI systems that make complex business decisions autonomously while maintaining human oversight.
            </p>
            <div className="flex items-center text-teal-300 font-semibold">
              <Target className="w-5 h-5 mr-2" />
              99.9% Decision Accuracy
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Self-Optimizing Workflows</h3>
            <p className="text-gray-300 mb-6">
              Dynamic workflow systems that continuously improve efficiency and adapt to changing business requirements.
            </p>
            <div className="flex items-center text-cyan-300 font-semibold">
              <Star className="w-5 h-5 mr-2" />
              Zero Downtime Operations
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 border border-emerald-400/30">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Zap className="w-6 h-6 mr-3 text-emerald-400" />
              Predictive Maintenance AI
            </h3>
            <p className="text-gray-300 mb-6">
              Advanced AI systems that predict equipment failures before they happen, reducing downtime by 95% and maintenance costs by 60%.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-emerald-300">
                <Target className="w-4 h-4 mr-2" />
                <span className="text-sm">95% Downtime Reduction</span>
              </div>
              <div className="flex items-center text-emerald-300">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="text-sm">60% Cost Savings</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl p-8 border border-teal-400/30">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Bot className="w-6 h-6 mr-3 text-teal-400" />
              Smart Resource Management
            </h3>
            <p className="text-gray-300 mb-6">
              Intelligent resource allocation systems that optimize workforce, equipment, and budget allocation for maximum efficiency.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-teal-300">
                <Target className="w-4 h-4 mr-2" />
                <span className="text-sm">40% Resource Optimization</span>
              </div>
              <div className="flex items-center text-teal-300">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="text-sm">3x Productivity Boost</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 border border-emerald-400/30">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Automate Your Future?
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Join thousands of businesses already experiencing the automation revolution with guaranteed ROI and zero risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/automation-assessment" 
                className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center">
                  Free Automation Assessment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/automation-case-studies" 
                className="group bg-transparent border-2 border-emerald-400 hover:border-emerald-300 text-emerald-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-emerald-500/10"
              >
                <span className="flex items-center">
                  View Success Stories
                  <Star className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAutomationSolutions2025PromotionBanner;