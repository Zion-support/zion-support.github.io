import React from 'react';
import Link from 'next/link';

export default function AutonomousSystems2025RevolutionBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-white rounded-full animate-pulse delay-200"></div>
          <div className="absolute bottom-10 right-10 w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🤖 AUTONOMOUS SYSTEMS REVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Autonomous Systems 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            The Revolution is Here - Discover how autonomous AI systems are transforming business operations 
            with self-managingself-optimizingand self-healing capabilities.
          </p>
        </div>

        {/* Autonomous Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">Self-Optimization</h3>
            <p className="text-gray-300 text-sm">
              Continuously analyze and improve business processes without human intervention.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🔮</div>
            <h3 className="text-xl font-bold mb-3">Predictive Maintenance</h3>
            <p className="text-gray-300 text-sm">
              Anticipate and prevent system failures before they occur with 99.9% accuracy.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Dynamic Allocation</h3>
            <p className="text-gray-300 text-sm">
              Automatically adjust resources based on real-time demand and performance metrics.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-3">Self-Healing</h3>
            <p className="text-gray-300 text-sm">
              Automatically detect and resolve issues without human intervention.
            </p>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Autonomous Systems Implementation Roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">Q1</span>
              </div>
              <h4 className="font-semibold mb-2">Foundation & Assessment</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• System readiness evaluation</li>
                <li>• Autonomous capability mapping</li>
                <li>• Technology stack selection</li>
                <li>• Team training</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">Q2</span>
              </div>
              <h4 className="font-semibold mb-2">Pilot Deployment</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Autonomous system deployment</li>
                <li>• Performance monitoring</li>
                <li>• Optimization algorithms</li>
                <li>• Feedback integration</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">Q3-Q4</span>
              </div>
              <h4 className="font-semibold mb-2">Full Autonomy</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Enterprise-wide deployment</li>
                <li>• Advanced self-healing</li>
                <li>• Continuous optimization</li>
                <li>• Strategic autonomy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ROI Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">90%</div>
            <div className="text-gray-300 text-sm">Process Automation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">75%</div>
            <div className="text-gray-300 text-sm">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">400%</div>
            <div className="text-gray-300 text-sm">Efficiency Gains</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-gray-300 text-sm">Uptime Reliability</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">Ready for Autonomous Transformation?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              'Don', 't get left behind in the autonomous revolution. Start your journey to Level 5 business autonomy 
              with Zion Tech 'Group', 's expert guidance and cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Autonomous Journey
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-all duration-300"
              >
                Explore Autonomous Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}