import React from 'react';
import Link from 'next/link';

const AI2027UltimateBreakthroughBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.3),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-full px-8 py-3 mb-8 shadow-lg">
            <span className="text-lg font-bold">🔥 AI 2027 ULTIMATE BREAKTHROUGH</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            The Future is Here
          </h1>
          <p className="text-2xl md:text-3xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-12">
            Experience the most advanced AI technologies ever created. 
            <span className="text-yellow-300 font-bold"> Revolutionary breakthroughs</span> that will 
            <span className="text-green-300 font-bold"> transform your business</span> beyond imagination.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">Synthetic Intelligence</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI systems with consciousness-like capabilities, self-awareness, and the ability to create original solutions.
            </p>
            <div className="text-sm text-green-400 font-semibold">🚀 Available Now</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Quantum Neural Networks</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionary computing that processes infinite possibilities simultaneously, solving complex problems instantly.
            </p>
            <div className="text-sm text-green-400 font-semibold">⚡ In Development</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Predictive Reality Engine</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI that can predict and simulate future scenarios with 99.7% accuracy, revolutionizing decision-making.
            </p>
            <div className="text-sm text-green-400 font-semibold">🎯 Coming Soon</div>
          </div>
        </div>

        {/* Success metrics */}
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-md rounded-2xl p-8 mb-16 border border-green-500/30">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8 text-green-300">Proven Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">2,500%</div>
                <div className="text-green-400 font-semibold">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">99.9%</div>
                <div className="text-blue-400 font-semibold">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">50x</div>
                <div className="text-purple-400 font-semibold">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">24/7</div>
                <div className="text-yellow-400 font-semibold">AI Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready for the Ultimate AI Revolution?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join the elite group of forward-thinking companies already transforming their future with AI 2027.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/services/ai-automation"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🚀 Start Your Transformation
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              💬 Speak with AI Experts
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Limited availability. Book your consultation today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AI2027UltimateBreakthroughBanner;