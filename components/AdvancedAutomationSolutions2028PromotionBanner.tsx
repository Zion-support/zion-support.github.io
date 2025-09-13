import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Zap, Settings, Brain, Shield, Globe, Database, TrendingUp, Target, Users } from 'lucide-react';

const AdvancedAutomationSolutions2028PromotionBanner: React.FC = () => {
  const stats = [
    { icon: Bot, value: '95%', label: 'Process Automation' },
    { icon: Zap, value: '99.8%', label: 'Error Reduction' },
    { icon: Settings, value: '70%', label: 'Cost Savings' },
    { icon: Brain, value: '10x', label: 'Faster Execution' }
  ];

  const solutions = [
    {
      icon: Bot,
      title: 'Autonomous Business Processes',
      description: 'Self-managing workflows that adapt and optimize in real-time'
    },
    {
      icon: Settings,
      title: 'Intelligent Infrastructure',
      description: 'AI-powered systems that self-monitor, self-repair, and self-optimize'
    },
    {
      icon: Brain,
      title: 'Cognitive Decision Engine',
      description: 'Advanced AI that makes complex business decisions autonomously'
    },
    {
      icon: Users,
      title: 'Autonomous Customer Experience',
      description: 'End-to-end customer journey automation with personalized interactions'
    }
  ];

  const industries = [
    { name: 'Manufacturing', impact: '40% cost reduction' },
    { name: 'Healthcare', impact: '50% faster diagnosis' },
    { name: 'Finance', impact: '99.9% fraud detection' },
    { name: 'Retail', impact: '35% inventory reduction' }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-16 left-16 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-24 w-16 h-16 bg-indigo-400/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-24 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-cyan-400/20 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            REVOLUTIONARY: Advanced Automation 2028
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Autonomous Business
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> Revolution</span>
            <br />
            <span className="text-3xl md:text-4xl text-gray-300">Starts Now</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with intelligent automation that self-manages, self-optimizes, and self-evolves. Experience 95% process automation with 99.8% error reduction.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group-hover:scale-105">
                    <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-800/30 to-indigo-800/30 rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group">
                  <IconComponent className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-white mb-2">{solution.title}</h3>
                  <p className="text-gray-300 text-sm">{solution.description}</p>
                </div>
              );
            })}
          </div>

          {/* Industry Impact */}
          <div className="bg-gradient-to-r from-slate-800/50 to-blue-800/50 rounded-2xl p-8 border border-blue-500/30 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Industry Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-semibold text-blue-300 mb-1">{industry.name}</div>
                  <div className="text-sm text-gray-300">{industry.impact}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-800/30 to-indigo-800/30 rounded-xl p-6 border border-blue-500/30">
              <div className="flex items-center mb-3">
                <Brain className="w-6 h-6 text-blue-400 mr-2" />
                <h4 className="text-lg font-semibold text-white">Self-Learning AI</h4>
              </div>
              <p className="text-gray-300 text-sm">Continuous improvement through machine learning and adaptive algorithms</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-800/30 to-purple-800/30 rounded-xl p-6 border border-indigo-500/30">
              <div className="flex items-center mb-3">
                <Network className="w-6 h-6 text-indigo-400 mr-2" />
                <h4 className="text-lg font-semibold text-white">Cross-Platform Integration</h4>
              </div>
              <p className="text-gray-300 text-sm">Seamless automation across all business systems and platforms</p>
            </div>
            <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center mb-3">
                <Shield className="w-6 h-6 text-purple-400 mr-2" />
                <h4 className="text-lg font-semibold text-white">Security Automation</h4>
              </div>
              <p className="text-gray-300 text-sm">Comprehensive security with automated threat detection and response</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/advanced-automation-solutions-2028"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Explore Automation Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/automation-interactive-demo"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              Interactive Demo
            </Link>
            <Link
              to="/automation-roi-calculator"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              ROI Calculator
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm mb-2">
              Join 2,000+ companies already transforming with advanced automation
            </p>
            <div className="flex justify-center items-center space-x-1">
              <Target className="w-4 h-4 text-blue-400" />
              <span className="text-gray-400 text-sm ml-2">Average 70% cost reduction within 6 months</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAutomationSolutions2028PromotionBanner;