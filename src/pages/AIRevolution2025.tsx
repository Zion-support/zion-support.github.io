import React from 'react';

const AIRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 AI REVOLUTION • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Revolution 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover how artificial intelligence is reshaping industries and creating new opportunities in 2025
          </p>
        </div>

        {/* AI Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Autonomous AI Agents</h3>
            <p className="text-purple-100 mb-6 text-center">
              Self-managing AI agents that can operate independently across multiple domains
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Self-learning algorithms</li>
              <li>• Autonomous decision making</li>
              <li>• Cross-domain intelligence</li>
              <li>• Real-time adaptation</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-white text-purple-600 py-2 px-4 rounded-lg font-semibold">
                Available Now
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Edge AI Computing</h3>
            <p className="text-cyan-100 mb-6 text-center">
              AI processing at the edge for real-time decision making and reduced latency
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Real-time processing</li>
              <li>• Reduced latency</li>
              <li>• Offline capabilities</li>
              <li>• Privacy preservation</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-white text-cyan-600 py-2 px-4 rounded-lg font-semibold">
                Deployed
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🎨</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Generative AI 2.0</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Next-generation AI that can create original content across multiple media types
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Original content creation</li>
              <li>• Multi-media generation</li>
              <li>• Style transfer</li>
              <li>• Creative collaboration</li>
            </ul>
            <div className="text-center">
              <span className="inline-block bg-white text-emerald-600 py-2 px-4 rounded-lg font-semibold">
                Beta Testing
              </span>
            </div>
          </div>
        </div>

        {/* AI Impact Statistics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">AI Impact Metrics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">300%</div>
              <div className="text-lg text-purple-200">Productivity Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg text-cyan-200">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">50%</div>
              <div className="text-lg text-emerald-200">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-lg text-pink-200">Availability</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the AI Revolution</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of the most transformative technological advancement in human history
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your AI Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              View Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRevolution2025;