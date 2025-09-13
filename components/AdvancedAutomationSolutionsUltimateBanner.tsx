import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cog, 
  Bot, 
  Zap, 
  Target, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Award,
  Settings,
  Workflow,
  BarChart3,
  Shield,
  Clock,
  CheckCircle,
  Lightbulb,
  Database
} from 'lucide-react';

const AdvancedAutomationSolutionsUltimateBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 py-20 overflow-hidden">
      {/* Automation Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-24 h-24 bg-emerald-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-24 w-20 h-20 bg-teal-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-24 left-1/4 w-16 h-16 bg-cyan-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-16 right-1/3 w-28 h-28 bg-green-500/10 rounded-full animate-pulse delay-500"></div>
        
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="automation-circuit" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="12.5" cy="12.5" r="2" fill="currentColor"/>
                <path d="M0,12.5 L25,12.5 M12.5,0 L12.5,25" stroke="currentColor" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#automation-circuit)"/>
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-full border border-emerald-400/30 mb-6">
            <Cog className="w-5 h-5 text-emerald-400 mr-2" />
            <span className="text-emerald-300 font-semibold">Advanced Automation Solutions Ultimate</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Advanced Automation
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions Ultimate
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with the most advanced automation solutions featuring intelligent process automation, 
            autonomous decision systems, and predictive maintenance AI that deliver unprecedented efficiency.
          </p>

          {/* Automation Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-emerald-400/20">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="text-2xl font-bold text-white">80%</div>
              <div className="text-sm text-gray-300">Efficiency Increase</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-teal-400/20">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-8 h-8 text-teal-400" />
              </div>
              <div className="text-2xl font-bold text-white">90%</div>
              <div className="text-sm text-gray-300">Time Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-green-400/20">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white">$2.5M</div>
              <div className="text-sm text-gray-300">Average Savings</div>
            </div>
          </div>
        </div>

        {/* Automation Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-xl p-8 border border-emerald-400/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Bot className="w-8 h-8 text-emerald-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Intelligent Process Automation</h3>
            </div>
            <p className="text-gray-300 mb-6">
              AI-powered automation of complex business processes with cognitive capabilities and self-learning algorithms.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Cognitive Automation</li>
              <li>• Process Mining</li>
              <li>• Intelligent Document Processing</li>
              <li>• Self-Learning Algorithms</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 rounded-xl p-8 border border-teal-400/30 hover:border-teal-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-teal-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Autonomous Decision Systems</h3>
            </div>
            <p className="text-gray-300 mb-6">
              AI systems capable of making complex business decisions autonomously with real-time analysis and risk assessment.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Real-time Decision Making</li>
              <li>• Risk Assessment</li>
              <li>• Strategic Planning</li>
              <li>• Autonomous Operations</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl p-8 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-cyan-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Predictive Maintenance AI</h3>
            </div>
            <p className="text-gray-300 mb-6">
              AI systems predicting and preventing equipment failures with IoT integration and anomaly detection.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• IoT Integration</li>
              <li>• Anomaly Detection</li>
              <li>• Maintenance Scheduling</li>
              <li>• Predictive Analytics</li>
            </ul>
          </div>
        </div>

        {/* Automation Features */}
        <div className="bg-gradient-to-r from-slate-800/50 to-gray-800/50 rounded-2xl p-8 mb-12 border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Automation Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Settings className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Smart Configuration</h4>
              <p className="text-sm text-gray-400">Auto-configure based on business needs</p>
            </div>
            <div className="text-center">
              <Workflow className="w-12 h-12 text-teal-400 mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Workflow Optimization</h4>
              <p className="text-sm text-gray-400">Streamline complex business processes</p>
            </div>
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Analytics & Insights</h4>
              <p className="text-sm text-gray-400">Real-time performance monitoring</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Security & Compliance</h4>
              <p className="text-sm text-gray-400">Enterprise-grade security</p>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-emerald-600/10 to-teal-600/10 rounded-xl p-6 border border-emerald-400/20">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Database className="w-5 h-5 text-emerald-400 mr-2" />
              Enterprise Applications
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Financial Services Automation</li>
              <li>• Healthcare Process Optimization</li>
              <li>• Manufacturing Quality Control</li>
              <li>• Supply Chain Management</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-teal-600/10 to-cyan-600/10 rounded-xl p-6 border border-teal-400/20">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Lightbulb className="w-5 h-5 text-teal-400 mr-2" />
              Innovation Areas
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>• AI-Powered Customer Service</li>
              <li>• Intelligent Document Processing</li>
              <li>• Automated Quality Assurance</li>
              <li>• Smart Resource Allocation</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/advanced-automation-solutions-ultimate" 
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Explore Automation Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/automation-implementation" 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30 hover:border-white/50 flex items-center justify-center"
            >
              Start Implementation
              <Cog className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm">
            Transform your business with intelligent automation - Experience 80% efficiency increase
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAutomationSolutionsUltimateBanner;