import React from 'react';
import { Helmet } from 'react-helmet-async';

const AdvancedRobotics2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      <Helmet>
        <title>Advanced Robotics 2026 - Revolutionary Robotic Solutions</title>
        <meta name="description" content="Explore the latest breakthroughs in robotics technology and their applications in modern industry and automation." />
        <meta name="keywords" content="robotics, automation, AI robotics, industrial robots, robotic solutions, robotics 2026" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-500 to-gray-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              ADVANCED ROBOTICS 2026
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
              Revolutionary Robotic Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the future of robotics with our cutting-edge AI-powered robotic systems that are transforming industries worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Solutions
              </button>
              <button className="border-2 border-slate-600 text-slate-600 px-8 py-4 rounded-lg hover:bg-slate-600 hover:text-white transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">AI-Powered Robots</h3>
            <p className="text-gray-600 mb-6 text-center">
              Intelligent robots that learn, adapt, and make decisions autonomously
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Machine learning integration</li>
              <li>• Real-time decision making</li>
              <li>• Adaptive behavior</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-6xl mb-4 text-center">👤</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">Human-Robot Collaboration</h3>
            <p className="text-gray-600 mb-6 text-center">
              Safe and efficient collaboration between humans and robots
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Safety protocols</li>
              <li>• Intuitive interfaces</li>
              <li>• Seamless integration</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🏭</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">Industrial Automation</h3>
            <p className="text-gray-600 mb-6 text-center">
              Advanced automation solutions for manufacturing and production
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Precision manufacturing</li>
              <li>• Quality control</li>
              <li>• Production optimization</li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-slate-600/10 to-gray-600/10 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-600 mb-2">99.9%</div>
              <div className="text-lg text-gray-700 mb-2">Precision Rate</div>
              <div className="text-sm text-gray-500">Industrial automation accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600 mb-2">50%</div>
              <div className="text-lg text-gray-700 mb-2">Cost Reduction</div>
              <div className="text-sm text-gray-500">Manufacturing efficiency gains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-600 mb-2">24/7</div>
              <div className="text-lg text-gray-700 mb-2">Operation</div>
              <div className="text-sm text-gray-500">Continuous production capability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600 mb-2">0%</div>
              <div className="text-lg text-gray-700 mb-2">Error Rate</div>
              <div className="text-sm text-gray-500">AI-powered quality control</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how our advanced robotics solutions can transform your operations and unlock new possibilities for growth and innovation
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/contact" className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Get Started →
            </a>
            <a href="/pages/AdvancedTechSolutions2026" className="border border-slate-600 text-slate-600 px-8 py-3 rounded-lg hover:bg-slate-50 transition-colors">
              View All Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedRobotics2026;