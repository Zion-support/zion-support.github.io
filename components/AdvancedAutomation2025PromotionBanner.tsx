import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Settings, BarChart3, Users, Clock, Zap, Shield } from 'lucide-react';

const AdvancedAutomation2025PromotionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-600/10 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-black px-6 py-3 rounded-full text-lg font-bold mb-6">
            <Bot className="w-5 h-5" />
            ADVANCED AUTOMATION 2025
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Autonomous Operations
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Redefining Efficiency
            </span>
          </h2>
          <p className="text-2xl text-gray-300 mb-10 max-w-5xl mx-auto leading-relaxed">
            Transform your business with self-managing AI systems that operate 24/7 with 99.9% uptime. 
            Achieve unprecedented efficiency gains while reducing operational costs by up to 80%.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
              <Bot className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Orchestration</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Self-managing AI systems that coordinate complex workflows and make autonomous decisions.
            </p>
            <div className="text-emerald-400 font-bold text-xl">99.9% Uptime</div>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
              <Settings className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Process Automation</h3>
            <p className="text-gray-300 mb-6 text-lg">
              End-to-end automation of business processes with intelligent decision-making capabilities.
            </p>
            <div className="text-blue-400 font-bold text-xl">80% Cost Reduction</div>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
              <BarChart3 className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Predictive Analytics</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Advanced analytics that predict outcomes and optimize operations in real-time.
            </p>
            <div className="text-purple-400 font-bold text-xl">95% Accuracy</div>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
              <Shield className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Self-Healing Systems</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Autonomous systems that detect, diagnose, and resolve issues without human intervention.
            </p>
            <div className="text-orange-400 font-bold text-xl">Zero Downtime</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-6">
              Industry-Leading Automation Solutions
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              From manufacturing to healthcare, our automation solutions are transforming industries with unprecedented efficiency and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Manufacturing</h4>
              <p className="text-gray-300">Smart factories with autonomous production lines and quality control</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Healthcare</h4>
              <p className="text-gray-300">Automated patient care and medical diagnosis systems</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Finance</h4>
              <p className="text-gray-300">Automated trading and risk management systems</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Energy</h4>
              <p className="text-gray-300">Smart grid management and renewable energy optimization</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">2,500%</div>
              <div className="text-lg text-gray-300 mb-4">ROI Increase</div>
              <p className="text-sm text-gray-400">Average return on investment for companies using our automation solutions</p>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-lg text-gray-300 mb-4">System Uptime</div>
              <p className="text-sm text-gray-400">Reliability rate of our autonomous systems with self-healing capabilities</p>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">80%</div>
              <div className="text-lg text-gray-300 mb-4">Cost Reduction</div>
              <p className="text-sm text-gray-400">Average operational cost savings achieved through intelligent automation</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link 
              to="/automation-2025" 
              className="bg-gradient-to-r from-emerald-400 to-teal-500 text-black px-10 py-5 rounded-2xl font-bold text-xl hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 flex items-center gap-3 shadow-2xl"
            >
              Start Automation Journey
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link 
              to="/automation-demo" 
              className="bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Watch Demo
            </Link>
          </div>
          <div className="flex items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>24/7 Autonomous Operations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Real-time Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Expert Implementation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAutomation2025PromotionBanner;