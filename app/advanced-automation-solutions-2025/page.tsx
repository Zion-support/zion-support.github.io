import React from 'react';
import { Metadata } from 'next';
import { Bot, Settings, BarChart3, Users, Zap, Target, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Advanced Automation Solutions 2025 - Revolutionary Business Automation | Zion Tech Group',
  description: 'Discover cutting-edge automation solutions for 2025. Explore AI-powered business automation, intelligent workflows, and autonomous operations.',
  keywords: 'automation solutions, business automation, AI automation, intelligent workflows, autonomous operations, 2025',
};

export default function AdvancedAutomationSolutions2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-blue-400 to-cyan-400 p-4 rounded-full">
                <Bot className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Advanced Automation
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Solutions 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our revolutionary automation solutions. 
              Intelligent workflows, autonomous operations, and AI-powered efficiency at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                Explore Solutions
                <Bot className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Revolutionary Automation Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Intelligent Workflows */}
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Intelligent Workflows</h3>
              </div>
              <p className="text-gray-300 mb-6">
                AI-powered workflow automation that learns, adapts, and optimizes business processes 
                in real-time for maximum efficiency and productivity.
              </p>
              <div className="flex items-center text-blue-400 font-semibold">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            {/* Autonomous Operations */}
            <div className="bg-gradient-to-br from-cyan-900/50 to-teal-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-cyan-500 p-3 rounded-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Autonomous Operations</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Self-managing systems that operate independently, making intelligent decisions 
                and adapting to changing business requirements without human intervention.
              </p>
              <div className="flex items-center text-cyan-400 font-semibold">
                Explore Now <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            {/* Smart Analytics */}
            <div className="bg-gradient-to-br from-teal-900/50 to-green-900/50 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-teal-500 p-3 rounded-lg">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Smart Analytics</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Advanced analytics and insights powered by AI that provide real-time 
                business intelligence and predictive analytics for data-driven decisions.
              </p>
              <div className="flex items-center text-teal-400 font-semibold">
                Discover More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Automation Performance Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-4">95%</div>
              <div className="text-xl text-gray-300">Process Automation</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4">80%</div>
              <div className="text-xl text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-teal-400 mb-4">10x</div>
              <div className="text-xl text-gray-300">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-green-400 mb-4">24/7</div>
              <div className="text-xl text-gray-300">Autonomous Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Advanced Automation Features
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Intelligent Automation Capabilities</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">AI-Powered Decision Making</h4>
                    <p className="text-gray-300">Intelligent systems that make complex business decisions autonomously using advanced AI algorithms.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-cyan-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Self-Learning Workflows</h4>
                    <p className="text-gray-300">Automation systems that continuously learn and improve from data patterns and user interactions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Real-time Optimization</h4>
                    <p className="text-gray-300">Dynamic optimization of processes and workflows based on real-time performance data and metrics.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Predictive Maintenance</h4>
                    <p className="text-gray-300">Proactive maintenance and issue prevention using predictive analytics and machine learning.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl p-8 border border-blue-500/20">
              <div className="text-center">
                <div className="text-6xl mb-4">🤖</div>
                <h4 className="text-2xl font-bold text-white mb-4">Automation Excellence</h4>
                <p className="text-gray-300 mb-6">
                  Join thousands of organizations already transforming their operations 
                  with our advanced automation solutions.
                </p>
                <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                  Start Automation Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-2xl font-bold text-white mb-4">Manufacturing</h3>
                <p className="text-gray-300">Automated production lines, quality control, and supply chain optimization.</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-2xl font-bold text-white mb-4">Finance</h3>
                <p className="text-gray-300">Automated trading, risk assessment, and financial reporting systems.</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-2xl font-bold text-white mb-4">Healthcare</h3>
                <p className="text-gray-300">Patient management, diagnostic automation, and treatment optimization.</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-2xl font-bold text-white mb-4">Retail</h3>
                <p className="text-gray-300">Inventory management, customer service, and personalized recommendations.</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-2xl font-bold text-white mb-4">Logistics</h3>
                <p className="text-gray-300">Route optimization, warehouse automation, and delivery management.</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
                <p className="text-gray-300">Personalized learning, automated grading, and student management systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Automate Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business operations with our advanced automation solutions. 
            Increase efficiency, reduce costs, and unlock new possibilities for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}