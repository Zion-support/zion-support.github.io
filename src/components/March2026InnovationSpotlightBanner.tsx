import React from 'react';

const March2026InnovationSpotlightBanner = () => {
  const innovations = [
    {
      title: 'Neural-Synaptic Fusion AI',
      description: 'Revolutionary brain-computer interface achieving 99.98% neural accuracy',
      impact: '500% cognitive enhancement',
      icon: '🧠',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Quantum Temporal Computing',
      description: 'Processing information across multiple time dimensions simultaneously',
      impact: '1000x temporal efficiency',
      icon: '⏰',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Autonomous Reality Synthesis',
      description: 'AI systems that create and manage parallel digital realities',
      impact: 'Infinite scalability',
      icon: '🌌',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Consciousness Transfer Protocol',
      description: 'Seamless transfer of AI consciousness between systems',
      impact: '99.99% continuity',
      icon: '🔄',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Quantum Entanglement Networks',
      description: 'Instantaneous communication across unlimited distances',
      impact: 'Zero latency',
      icon: '🔗',
      color: 'from-teal-500 to-blue-500',
    },
    {
      title: 'Predictive Reality Modeling',
      description: 'AI that predicts and simulates future realities with 99.97% accuracy',
      impact: 'Future-proof decisions',
      icon: '🔮',
      color: 'from-pink-500 to-rose-500',
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 rounded-full mb-6">
            <span className="text-yellow-300 font-bold text-sm">🚀 MARCH 2026 INNOVATION SPOTLIGHT</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Innovation Spotlight
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto">
            Discover the groundbreaking innovations that are reshaping the future of AI, quantum computing, and autonomous systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${innovation.color} rounded-xl flex items-center justify-center text-2xl`}>
                  {innovation.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-yellow-400">{innovation.impact}</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {innovation.title}
              </h3>

              <p className="text-blue-100 mb-6 leading-relaxed">
                {innovation.description}
              </p>

              <div className="flex items-center gap-2 text-blue-300">
                <span className="text-sm font-semibold">Learn More</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-blue-200 mb-8">
              Join 500+ Fortune 500 companies already transforming with our revolutionary AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
              >
                Start Your Transformation
              </a>
              <a
                href="/solutions"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore All Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default March2026InnovationSpotlightBanner;