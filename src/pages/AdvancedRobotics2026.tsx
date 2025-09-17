import React from 'react';

const AdvancedRobotics2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-700 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent">
            Advanced Robotics 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary robotics solutions and automation for the future
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-4 text-slate-400">AI-Powered Automation</h3>
            <p className="text-gray-300 mb-4">
              Intelligent robots that can learn, adapt, and perform complex tasks autonomously.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Machine learning integration</li>
              <li>• Computer vision systems</li>
              <li>• Natural language processing</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-4 text-gray-400">Industrial Applications</h3>
            <p className="text-gray-300 mb-4">
              Advanced robotics solutions for manufacturing, logistics, and service industries.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Manufacturing automation</li>
              <li>• Warehouse management</li>
              <li>• Quality control systems</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-4 text-slate-300">Human-Robot Collaboration</h3>
            <p className="text-gray-300 mb-4">
              Safe and efficient collaboration between humans and robots in shared workspaces.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Safety protocols</li>
              <li>• Intuitive interfaces</li>
              <li>• Real-time monitoring</li>
            </ul>
          </div>
        </div>

        {/* Applications Section */}
        <div className="bg-gradient-to-r from-slate-600 to-gray-600 py-20 rounded-2xl">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">🌐 Industry Applications</h2>
              <p className="text-xl text-slate-100">Transforming industries through intelligent automation</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-lg font-bold text-orange-600 mb-2">Manufacturing</h3>
                <p className="text-sm text-gray-600">Automated production lines</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-lg font-bold text-blue-600 mb-2">Logistics</h3>
                <p className="text-sm text-gray-600">Warehouse automation</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-lg font-bold text-green-600 mb-2">Healthcare</h3>
                <p className="text-sm text-gray-600">Medical assistance robots</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-lg font-bold text-purple-600 mb-2">Service</h3>
                <p className="text-sm text-gray-600">Customer service automation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Automate Your Future?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
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