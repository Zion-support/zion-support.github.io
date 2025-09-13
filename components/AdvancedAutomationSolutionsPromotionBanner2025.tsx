import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Cpu, Zap, Target, Clock, TrendingUp, Users, BarChart3, Settings, Shield } from 'lucide-react';

const AdvancedAutomationSolutionsPromotionBanner2025: React.FC = () => {
  const highlights = [
    {
      icon: Bot,
      title: 'Autonomous Operations',
      description: '99.9% uptime with zero human intervention',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Process Intelligence',
      description: 'AI-powered process optimization and mining',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Cognitive Automation',
      description: 'Human-level AI for complex tasks',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Settings,
      title: 'Hyperautomation',
      description: 'Complete enterprise transformation',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { value: '2,500%+', label: 'Average ROI' },
    { value: '99.9%', label: 'Accuracy Rate' },
    { value: '90%', label: 'Cost Reduction' },
    { value: '10x', label: 'Faster Execution' }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 py-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-indigo-500/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-500/30 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-cyan-500/30 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Clock className="w-4 h-4 mr-2" />
            REVOLUTIONARY: Advanced Automation 2025
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advanced Automation
            <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Solutions 2025
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with revolutionary automation technologies that deliver 2,500%+ ROI, 
            99.9% accuracy, and complete operational transformation.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className={`bg-gradient-to-r ${highlight.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 text-center">{highlight.title}</h3>
                <p className="text-gray-300 text-center text-sm">{highlight.description}</p>
              </div>
            );
          })}
        </div>

        {/* Key Features */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Revolutionary Automation Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Precision Automation</h4>
              <p className="text-gray-300">
                99.9% accuracy in all automated processes with self-healing capabilities
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Massive ROI</h4>
              <p className="text-gray-300">
                Average ROI of 2,500-15,000% with 90% cost reduction
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Global Impact</h4>
              <p className="text-gray-300">
                Transform operations for millions of users across all industries
              </p>
            </div>
          </div>
        </div>

        {/* Industry Examples */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Industry Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Manufacturing</h4>
              <p className="text-gray-300 text-sm mb-2">85% automation achieved</p>
              <p className="text-green-400 font-bold">$2.5M annual savings</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Healthcare</h4>
              <p className="text-gray-300 text-sm mb-2">75% automation achieved</p>
              <p className="text-green-400 font-bold">$1.8M annual savings</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Finance</h4>
              <p className="text-gray-300 text-sm mb-2">90% automation achieved</p>
              <p className="text-green-400 font-bold">$3.2M annual savings</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Transform Your Business with Automation
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Get exclusive access to automation solutions, implementation guides, and ROI calculations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/automation-solutions-2025" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Explore Automation Solutions
                <Settings className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/automation-roi-calculator" 
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30"
              >
                Calculate Automation ROI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAutomationSolutionsPromotionBanner2025;