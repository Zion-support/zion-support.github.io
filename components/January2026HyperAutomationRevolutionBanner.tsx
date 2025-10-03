import React from 'react';
import { Link } from 'react-router-dom';

export default function January2026HyperAutomationRevolutionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              HYPER-AUTOMATION REVOLUTION
            </span>
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              $3.2B ROI
            </span>
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              99.5% AUTONOMOUS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            AI 2026: Hyper-Automation Revolution
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Complete enterprise transformation through revolutionary hyper-automation platform 
            delivering 99.5% autonomous operations with unprecedented ROI and operational excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/blog/ai-2026-hyper-automation-revolution"
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-105"
            >
              Explore Hyper-Automation
            </Link>
            <Link to="/case-studies/ai-2026-hyper-automation-revolution-success"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-900 transition-all transform hover:scale-105"
            >
              View $3.2B ROI Success Story
            </Link>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-red-300 text-sm font-bold mb-3">COMPLETE AUTOMATION</div>
            <h3 className="text-xl font-bold mb-3">End-to-End Process Automation</h3>
            <p className="text-gray-300 text-sm">
              Revolutionary automation of complex business processes with intelligent decision-making, 
              exception handling, and continuous optimization across all business functions.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-orange-300 text-sm font-bold mb-3">AUTONOMOUS DECISIONS</div>
            <h3 className="text-xl font-bold mb-3">Intelligent Decision Making</h3>
            <p className="text-gray-300 text-sm">
              AI-powered autonomous decision-making systems that handle complex scenarios, 
              strategic planning, and real-time optimization without human intervention.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-green-300 text-sm font-bold mb-3">REAL-TIME ADAPTATION</div>
            <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
            <p className="text-gray-300 text-sm">
              Advanced learning and adaptation capabilities that respond to changing 
              business conditions and optimize operations in real-time.
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.5%</div>
              <div className="text-sm text-gray-300">Autonomous Operations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">$3.2B</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-sm text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">400%</div>
              <div className="text-sm text-gray-300">Productivity Increase</div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Transform Your Enterprise Today</h3>
            <p className="text-gray-300 mb-6">
              Join the hyper-automation revolution and achieve unprecedented operational efficiency. 
              Contact our automation experts to start your transformation journey.
            </p>
            <Link to="/contact"
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all inline-block"
            >
              Start Transformation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}