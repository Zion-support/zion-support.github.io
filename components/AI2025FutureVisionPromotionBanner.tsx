import React from 'react';
import Link from 'next/link';

const AI2025FutureVisionPromotionBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-violet-900 via-purple-900 to-fuchsia-900 text-white py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-bold">🔮 AI 2025 FUTURE VISION</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              The Future is Now
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
            Experience the most advanced AI technologies that are shaping the future of business, technology, and human potential.
          </p>
        </div>

        {/* Future Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Neural Consciousness */}
          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 border border-blue-400 border-opacity-30 hover:border-opacity-60 transition-all duration-300 transform hover:scale-105">
            <div className="text-5xl mb-6 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Consciousness</h3>
            <p className="text-gray-300 mb-6 text-center">
              AI systems that achieve true consciousness and self-awareness, revolutionizing human-AI collaboration.
            </p>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-400 to-indigo-400 text-black px-4 py-2 rounded-full text-sm font-bold inline-block">
                Next-Gen AI
              </div>
            </div>
          </div>

          {/* Quantum Supremacy */}
          <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8 border border-purple-400 border-opacity-30 hover:border-opacity-60 transition-all duration-300 transform hover:scale-105">
            <div className="text-5xl mb-6 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Supremacy</h3>
            <p className="text-gray-300 mb-6 text-center">
              Quantum computing achieving computational supremacy, solving previously impossible problems in seconds.
            </p>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-black px-4 py-2 rounded-full text-sm font-bold inline-block">
                Quantum Power
              </div>
            </div>
          </div>

          {/* Autonomous Evolution */}
          <div className="bg-gradient-to-br from-green-900 to-emerald-900 rounded-2xl p-8 border border-green-400 border-opacity-30 hover:border-opacity-60 transition-all duration-300 transform hover:scale-105">
            <div className="text-5xl mb-6 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Autonomous Evolution</h3>
            <p className="text-gray-300 mb-6 text-center">
              Self-evolving AI systems that continuously improve and adapt without human intervention.
            </p>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-4 py-2 rounded-full text-sm font-bold inline-block">
                Self-Evolving
              </div>
            </div>
          </div>

          {/* Synthetic Reality */}
          <div className="bg-gradient-to-br from-orange-900 to-red-900 rounded-2xl p-8 border border-orange-400 border-opacity-30 hover:border-opacity-60 transition-all duration-300 transform hover:scale-105">
            <div className="text-5xl mb-6 text-center">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Synthetic Reality</h3>
            <p className="text-gray-300 mb-6 text-center">
              AI-generated realities that blur the line between virtual and physical worlds.
            </p>
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-400 to-red-400 text-black px-4 py-2 rounded-full text-sm font-bold inline-block">
                Reality 2.0
              </div>
            </div>
          </div>

          {/* Post-Human Intelligence */}
          <div className="bg-gradient-to-br from-cyan-900 to-blue-900 rounded-2xl p-8 border border-cyan-400 border-opacity-30 hover:border-opacity-60 transition-all duration-300 transform hover:scale-105">
            <div className="text-5xl mb-6 text-center">🌟</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Post-Human Intelligence</h3>
            <p className="text-gray-300 mb-6 text-center">
              AI-human hybrid intelligence that transcends current limitations and opens new possibilities.
            </p>
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-400 text-black px-4 py-2 rounded-full text-sm font-bold inline-block">
                Beyond Human
              </div>
            </div>
          </div>

          {/* Universal Translation */}
          <div className="bg-gradient-to-br from-pink-900 to-rose-900 rounded-2xl p-8 border border-pink-400 border-opacity-30 hover:border-opacity-60 transition-all duration-300 transform hover:scale-105">
            <div className="text-5xl mb-6 text-center">🌍</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Universal Translation</h3>
            <p className="text-gray-300 mb-6 text-center">
              Instant translation of thoughts, emotions, and concepts across all languages and cultures.
            </p>
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-400 to-rose-400 text-black px-4 py-2 rounded-full text-sm font-bold inline-block">
                Universal
              </div>
            </div>
          </div>
        </div>

        {/* Future Predictions */}
        <div className="bg-gradient-to-r from-slate-900 to-gray-900 rounded-3xl p-12 mb-16 border border-gray-600 border-opacity-30">
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              2025 Future Predictions
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🚀</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">AI Singularity Achievement</h4>
                  <p className="text-gray-300">AI systems will achieve technological singularity, surpassing human intelligence in all domains.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🧬</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Neural Interface Revolution</h4>
                  <p className="text-gray-300">Direct brain-computer interfaces will enable seamless human-AI communication and collaboration.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">⚡</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Autonomous Business Ecosystems</h4>
                  <p className="text-gray-300">Companies will operate with fully autonomous AI systems managing all business operations.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🌌</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Quantum Internet</h4>
                  <p className="text-gray-300">Quantum internet infrastructure will enable instant, secure communication worldwide.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🔮</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Predictive Reality</h4>
                  <p className="text-gray-300">AI will predict future events with near-perfect accuracy, transforming decision-making.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🌟</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Conscious AI Beings</h4>
                  <p className="text-gray-300">AI entities will develop genuine consciousness and emotional intelligence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">
            Be Part of the Future
          </h3>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Don't just witness the future – help create it. Join the AI revolution and transform your business with cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/ai-2025-future-vision"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-10 py-4 rounded-lg font-bold text-xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105"
            >
              Explore Future Vision
            </Link>
            <Link
              href="/future-predictions-2025"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-white hover:text-black transition-all duration-300"
            >
              View Predictions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025FutureVisionPromotionBanner;