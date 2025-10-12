#!/usr/bin/env python3
"""
Script to fix final problematic files
"""
import os

def create_clean_ai_automation():
    """Create clean ai-automation/page.tsx"""
    content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Zap, Settings, BarChart3 } from 'lucide-react';

export default function AiAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Reduce costs, increase efficiency, and eliminate manual processes." />
        <meta name="keywords" content="AI automation, business process automation, workflow automation, intelligent automation, RPA" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Bot className="w-5 h-5 ml-2" />
            AI Automation
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">
            AI <span className="text-cyan-400">Automation</span> Services
          </h1>
          <p className="text-lg text-gray-300 mb-8">Transform your business operations with intelligent automation solutions that reduce costs, increase efficiency, and eliminate repetitive tasks.</p>
          <div className="flex space-x-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
            >
              Get Started 
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/ai-services" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              View All AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Automation Solutions</h2>
            <p className="text-lg text-gray-300">Streamline your business processes with AI</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Zap className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Process Automation</h3>
              <p className="text-gray-300">Automate repetitive tasks and workflows</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Settings className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Smart Integration</h3>
              <p className="text-gray-300">Seamlessly connect your existing systems</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <BarChart3 className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Analytics & Insights</h3>
              <p className="text-gray-300">Monitor and optimize your automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Automate Your Business?</h2>
          <p className="text-lg text-gray-300 mb-8">Get started with AI automation and transform your operations today.</p>
          <div className="flex space-x-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300">
              Start Automation
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}'''
    
    with open('/workspace/app/ai-automation/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Created clean ai-automation/page.tsx")

def create_clean_ai_autonomous_systems():
    """Create clean ai-autonomous-systems/page.tsx"""
    content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Brain, Zap, Target } from 'lucide-react';

export default function AiAutonomousSystemsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Autonomous Systems - Advanced AI Solutions | Zion Tech Group</title>
        <meta name="description" content="Build intelligent autonomous systems with AI. Self-managing, self-optimizing solutions that adapt and learn. Get your autonomous system today." />
        <meta name="keywords" content="AI autonomous systems, intelligent automation, self-managing systems, AI robotics, autonomous AI" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Cpu className="w-5 h-5 ml-2" />
            Autonomous AI
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">AI Autonomous Systems</h1>
          <p className="text-lg text-gray-300 mb-8">Build intelligent systems that think, learn, and act independently. Self-managing solutions that adapt to your business needs.</p>
          <div className="flex space-x-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
            >
              Build Your System
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Autonomous Capabilities</h2>
            <p className="text-lg text-gray-300">Intelligent systems that work independently</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Brain className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Self-Learning</h3>
              <p className="text-gray-300">Systems that learn and improve over time</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Zap className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Self-Optimizing</h3>
              <p className="text-gray-300">Automatically optimize performance</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Target className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Self-Adapting</h3>
              <p className="text-gray-300">Adapt to changing conditions and requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Autonomous Systems?</h2>
          <p className="text-lg text-gray-300 mb-8">Create intelligent systems that work independently and efficiently.</p>
          <div className="flex space-x-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
              Start Building
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}'''
    
    with open('/workspace/app/ai-autonomous-systems/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Created clean ai-autonomous-systems/page.tsx")

def main():
    """Main function"""
    create_clean_ai_automation()
    create_clean_ai_autonomous_systems()
    print("Created clean templates for final problematic files")

if __name__ == "__main__":
    main()