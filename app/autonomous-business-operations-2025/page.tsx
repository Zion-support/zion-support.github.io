import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Autonomous Business Operations 2025 - Complete Business Automation',
  description: 'Transform your business with autonomous operations powered by AI. Complete automation with 99.9% accuracy, self-improving capabilities, and 24/7 operations.',
  keywords: ['Autonomous Business', 'Business Automation', 'AI Operations', 'Self-Improving Systems', '99.9% Accuracy', '24/7 Operations'],
};

export default function AutonomousBusinessOperations2025Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full text-black font-bold text-lg mb-8 animate-pulse">
            🤖 AUTONOMOUS BUSINESS 2025
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Autonomous
            <span className="block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Business Operations
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Complete business automation with <span className="text-green-400 font-bold">99.9% accuracy</span> and 
            <span className="text-blue-400 font-bold"> self-improving capabilities</span>. 
            Transform your operations with AI that works 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-black font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              Start Automation
            </Link>
            <Link 
              href="/case-studies" 
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Autonomous Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Autonomous Capabilities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Self-Managing Systems",
                description: "AI systems that manage themselves, optimize performance, and adapt to changing conditions",
                icon: "🔄🤖",
                stats: "Zero Human Intervention"
              },
              {
                title: "Predictive Maintenance",
                description: "Anticipate and prevent issues before they occur with advanced predictive analytics",
                icon: "🔮⚡",
                stats: "99.9% Uptime"
              },
              {
                title: "Intelligent Decision Making",
                description: "AI makes complex business decisions based on real-time data and historical patterns",
                icon: "🧠💡",
                stats: "95% Decision Accuracy"
              },
              {
                title: "Automated Workflows",
                description: "Complete end-to-end automation of business processes and workflows",
                icon: "⚙️🔄",
                stats: "100% Process Automation"
              },
              {
                title: "Real-time Optimization",
                description: "Continuously optimize operations for maximum efficiency and performance",
                icon: "📈⚡",
                stats: "30% Efficiency Gain"
              },
              {
                title: "Self-Healing Systems",
                description: "Automatically detect and resolve issues without human intervention",
                icon: "🛠️💚",
                stats: "Instant Recovery"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-green-400 font-bold text-lg">{feature.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Applications */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Business Applications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Customer Service</h3>
                <p className="text-gray-200 mb-4">24/7 AI-powered customer support with instant responses and problem resolution.</p>
                <div className="text-green-300 font-bold">24/7 Availability</div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Supply Chain Management</h3>
                <p className="text-gray-200 mb-4">Automated inventory management, demand forecasting, and logistics optimization.</p>
                <div className="text-blue-300 font-bold">50% Cost Reduction</div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Financial Operations</h3>
                <p className="text-gray-200 mb-4">Automated accounting, financial reporting, and risk management systems.</p>
                <div className="text-purple-300 font-bold">99.9% Accuracy</div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Human Resources</h3>
                <p className="text-gray-200 mb-4">Automated recruitment, onboarding, and performance management processes.</p>
                <div className="text-orange-300 font-bold">80% Time Savings</div>
              </div>
              
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Marketing Automation</h3>
                <p className="text-gray-200 mb-4">AI-driven marketing campaigns, content creation, and customer engagement.</p>
                <div className="text-teal-300 font-bold">300% ROI Increase</div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Operations Management</h3>
                <p className="text-gray-200 mb-4">Complete operational oversight with predictive analytics and optimization.</p>
                <div className="text-indigo-300 font-bold">40% Efficiency Gain</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Autonomous Performance
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "99.9%", label: "Accuracy Rate" },
              { number: "24/7", label: "Operation Time" },
              { number: "30%", label: "Efficiency Gain" },
              { number: "Zero", label: "Human Errors" }
            ].map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl p-8">
                <div className="text-5xl font-bold text-white mb-2">{metric.number}</div>
                <div className="text-gray-300 text-lg">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready for Autonomous Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Transform your business with autonomous operations. Join companies already experiencing 
            the future of business automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="px-12 py-6 bg-gradient-to-r from-green-400 to-blue-500 text-black font-bold text-xl rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              Start Automation Journey
            </Link>
            <Link 
              href="/pricing"
              className="px-12 py-6 border-2 border-white text-white font-bold text-xl rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              View Automation Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}