import React from 'react';
import { Link } from 'react-router-dom';

export default function EnterpriseAutomationMasteryPromotionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-24 h-24 bg-emerald-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-24 w-20 h-20 bg-blue-500 rounded-full opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-purple-500 rounded-full opacity-30 animate-pulse delay-2000"></div>
        <div className="absolute bottom-16 right-1/3 w-12 h-12 bg-emerald-400 rounded-full opacity-20 animate-pulse delay-3000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-bold">🏢 ENTERPRISE MASTERY 2030</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Enterprise Automation Mastery
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-emerald-300">
            2030 Revolution
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your enterprise with revolutionary AI-powered automation achieving 5000% ROI. Master autonomous systems, intelligent workflows, and complete business transformation.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-emerald-600 rounded-full text-sm font-semibold">
              🤖 Intelligent Process Automation
            </span>
            <span className="px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold">
              🧠 Autonomous Decision Making
            </span>
            <span className="px-4 py-2 bg-purple-600 rounded-full text-sm font-semibold">
              📊 Predictive Resource Management
            </span>
            <span className="px-4 py-2 bg-orange-600 rounded-full text-sm font-semibold">
              🔧 Self-Healing Systems
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-6xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold mb-2">Process Automation</h3>
              <p className="text-sm text-gray-300 mb-3">99.9% accuracy, 1000% efficiency</p>
              <div className="text-xs text-emerald-300">REVOLUTIONARY</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2">Autonomous Decisions</h3>
              <p className="text-sm text-gray-300 mb-3">99.99% accuracy, zero human intervention</p>
              <div className="text-xs text-blue-300">BREAKTHROUGH</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold mb-2">Resource Management</h3>
              <p className="text-sm text-gray-300 mb-3">95% forecasting accuracy</p>
              <div className="text-xs text-purple-300">MASTERY</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-lg font-bold mb-2">Self-Healing Systems</h3>
              <p className="text-sm text-gray-300 mb-3">99.9% uptime, 95% self-repair</p>
              <div className="text-xs text-orange-300">AUTONOMOUS</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">5000%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Automation Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">90%</div>
              <div className="text-sm text-gray-300">Cost Reduction</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/enterprise-automation-mastery-2030"
              className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Master Enterprise Automation
            </Link>
            <Link
              to="/ai-2030-future-predictions"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 transform hover:scale-105"
            >
              View Future Predictions
            </Link>
            <Link
              to="/quantum-computing-solutions-breakthrough-2030"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Quantum Solutions
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>Join thousands of enterprises already achieving 5000% ROI with our revolutionary automation solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}