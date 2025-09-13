import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Autonomous Business Systems 2025 - Self-Managing AI Enterprises',
  description: 'Revolutionary autonomous business systems that run entire enterprises with minimal human intervention. AI-powered decision making, automated operations, and self-optimizing business processes.',
  keywords: ['Autonomous Business', 'AI Enterprise', 'Self-Managing Systems', 'Business Automation', 'AI Decision Making', 'Autonomous Operations'],
  openGraph: {
    title: 'Autonomous Business Systems 2025 - Self-Managing AI Enterprises',
    description: 'Revolutionary autonomous business systems that run entire enterprises with minimal human intervention.',
    images: ['/og-autonomous-business-2025.png'],
  },
};

export default function AutonomousBusinessSystems2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🤖 AUTONOMOUS BUSINESS 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Autonomous Business
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Systems 2025
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Transform your business into a fully autonomous enterprise. Our AI-powered systems 
            manage operations, make decisions, and optimize performance with minimal human intervention, 
            delivering unprecedented efficiency and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#autonomous-systems" 
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Autonomous Systems
            </Link>
            <Link 
              href="#business-automation" 
              className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300"
            >
              View Business Automation
            </Link>
          </div>
        </div>
      </section>

      {/* Autonomous Systems Showcase */}
      <section id="autonomous-systems" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Autonomous Business Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary AI systems that manage entire business operations autonomously
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Autonomous Decision Engine */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Autonomous Decision Engine</h3>
              <p className="text-gray-600 mb-6">
                AI-powered decision making system that analyzes data and makes strategic business decisions in real-time.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="h-32 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Decision Engine Demo</span>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Decision Speed:</span>
                  <span className="font-semibold text-emerald-600">&lt;1 Second</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Accuracy:</span>
                  <span className="font-semibold text-teal-600">99.8%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Success Rate:</span>
                  <span className="font-semibold text-green-600">97.5%</span>
                </div>
              </div>
              <Link 
                href="/demos/autonomous-decision-engine" 
                className="inline-block w-full text-center px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Try Decision Engine
              </Link>
            </div>

            {/* Self-Optimizing Operations */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Self-Optimizing Operations</h3>
              <p className="text-gray-600 mb-6">
                Autonomous systems that continuously monitor and optimize business processes for maximum efficiency.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="h-32 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Operations Demo</span>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Efficiency Gain:</span>
                  <span className="font-semibold text-teal-600">350%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Cost Reduction:</span>
                  <span className="font-semibold text-cyan-600">85%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Uptime:</span>
                  <span className="font-semibold text-green-600">99.9%</span>
                </div>
              </div>
              <Link 
                href="/demos/self-optimizing-operations" 
                className="inline-block w-full text-center px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Try Operations Demo
              </Link>
            </div>

            {/* Autonomous Customer Service */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Autonomous Customer Service</h3>
              <p className="text-gray-600 mb-6">
                AI-powered customer service that handles all interactions autonomously with human-level understanding.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="h-32 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Customer Service Demo</span>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Response Time:</span>
                  <span className="font-semibold text-cyan-600">&lt;0.5 Seconds</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Resolution Rate:</span>
                  <span className="font-semibold text-blue-600">98.7%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Customer Satisfaction:</span>
                  <span className="font-semibold text-green-600">99.2%</span>
                </div>
              </div>
              <Link 
                href="/demos/autonomous-customer-service" 
                className="inline-block w-full text-center px-6 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
              >
                Try Customer Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Automation Solutions */}
      <section id="business-automation" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Business Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end automation solutions that transform your entire business operation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Manufacturing Automation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">🏭</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Manufacturing Automation</h3>
                  <p className="text-gray-600">Fully Autonomous Production Lines</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg p-4 mb-6">
                <div className="text-3xl font-bold text-emerald-600">500% Increase</div>
                <div className="text-emerald-700">in production efficiency</div>
              </div>
              <p className="text-gray-600 mb-6">
                Autonomous manufacturing systems that operate 24/7 with self-maintenance, 
                quality control, and adaptive production planning.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">Quality Control</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Predictive Maintenance</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">Adaptive Planning</span>
              </div>
              <Link 
                href="/solutions/manufacturing-automation" 
                className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Explore Manufacturing Automation
              </Link>
            </div>

            {/* Financial Automation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">💰</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Financial Automation</h3>
                  <p className="text-gray-600">Autonomous Financial Management</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg p-4 mb-6">
                <div className="text-3xl font-bold text-teal-600">99.9% Accuracy</div>
                <div className="text-teal-700">in financial operations</div>
              </div>
              <p className="text-gray-600 mb-6">
                AI-powered financial systems that handle accounting, budgeting, investment decisions, 
                and risk management autonomously.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Accounting</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">Investment Decisions</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Risk Management</span>
              </div>
              <Link 
                href="/solutions/financial-automation" 
                className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Explore Financial Automation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Autonomous Capabilities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Autonomous Business Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive autonomous systems that handle every aspect of business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🧠', title: 'Autonomous Decision Making', desc: 'AI-powered strategic and operational decisions' },
              { icon: '⚙️', title: 'Self-Optimizing Systems', desc: 'Continuous process improvement and optimization' },
              { icon: '📊', title: 'Predictive Analytics', desc: 'Advanced forecasting and trend analysis' },
              { icon: '🔄', title: 'Adaptive Operations', desc: 'Dynamic adjustment to changing conditions' },
            ].map((capability, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600">{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Autonomous Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your business into a fully autonomous enterprise and experience unprecedented efficiency and growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Autonomous Transformation
            </Link>
            <Link 
              href="/autonomous-business-implementation-guide-2025" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}