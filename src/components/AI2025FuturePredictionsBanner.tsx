import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function AI2025FuturePredictionsBanner() {
  return (
    <section className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full px-6 py-2 mb-6 text-black">
            <span className="text-sm font-bold">🔮 AI FUTURE PREDICTIONS 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore the Future of AI
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover emerging trendsbreakthrough technologiesand unprecedented 
            opportunities that will shape 2025 and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/ai-2025-future-predictions"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-cyan-300 hover:to-blue-400 transition-all transform hover:scale-105"
            >
              Explore Predictions
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all"
            >
              Get Started
            </a>
          </div>
          
          {/* Key Predictions Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold mb-2">Conscious AI</h3>
              <p className="text-sm opacity-90">Self-aware AI systems</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Quantum AI</h3>
              <p className="text-sm opacity-90">Revolutionary processing</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-lg font-semibold mb-2">Global Integration</h3>
              <p className="text-sm opacity-90">Industry transformation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}