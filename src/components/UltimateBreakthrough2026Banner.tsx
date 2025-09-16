import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const UltimateBreakthrough2026Banner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-400 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-orange-400 rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-bold">🚀 ULTIMATE BREAKTHROUGH 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            The Future of AI is
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Here Now
            </span>
          </h1>
          <p className="text-xl md:text-3xl opacity-90 max-w-5xl mx-auto leading-relaxed mb-12">
            Experience revolutionary AI breakthroughs that will transform your business
            accelerate growthand deliver unprecedented results in 2026.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20">
              <div className="text-4xl font-bold text-yellow-400 mb-2">5000%</div>
              <div className="text-lg opacity-90">Average ROI</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20">
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-lg opacity-90">Autonomous Operation</div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 className="text-xl font-bold mb-3">Neural Interfaces</h3>
            <p className="text-gray-300 text-sm">Direct brain-computer interaction for unprecedented control</p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 className="text-xl font-bold mb-3">Quantum AI</h3>
            <p className="text-gray-300 text-sm">Revolutionary computing power for complex problem solving</p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-xl font-bold mb-3">Autonomous Systems</h3>
            <p className="text-gray-300 text-sm">Self-managing business operations without human intervention</p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔮</div>
            <h3 className="text-xl font-bold mb-3">Predictive Intelligence</h3>
            <p className="text-gray-300 text-sm">Crystal ball accuracy for business forecasting</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-black text-lg mb-6 opacity-90">
              Join thousands of companies already experiencing the AI revolution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors"
              >
                Get Started Now
              </a>
              <a
                href="/demo"
                className="border-2 border-black text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-colors"
              >
                Watch Demo
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/case-studies"
              className="text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              View Success Stories →
            </a>
            <a
              href="/pricing"
              className="text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              See Pricing →
            </a>
            <a
              href="/resources"
              className="text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Download Resources →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBreakthrough2026Banner;