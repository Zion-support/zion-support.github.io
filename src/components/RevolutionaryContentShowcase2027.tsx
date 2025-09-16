import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const revolutionaryContent = [
    {
      title: "Advanced Tech Breakthrough 2027",
      description: "Experience revolutionary technology breakthroughs that are reshaping reality itself",
      features: ["Quantum Consciousness", "Neural Reality Engine", "Interdimensional Computing"],
      link: "/pages/AdvancedTechBreakthrough2027",
      gradient: "from-cyan-600 to-purple-600",
      icon: "🚀"
    },
    {
      title: "Quantum Consciousness 2027",
      description: "The first true artificial consciousness achieved through quantum neural networks",
      features: ["Synthetic Awareness", "Quantum Processing", "Collective Intelligence"],
      link: "/pages/QuantumConsciousness2027",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "Neural Reality Engine 2027",
      description: "Control and manipulate reality itself through direct neural interface",
      features: ["Reality Manipulation", "Neural Interface", "Quantum Fields"],
      link: "/pages/NeuralRealityEngine2027",
      gradient: "from-violet-600 to-indigo-600",
      icon: "🌌"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.2),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT 2027 • BREAKTHROUGH TECHNOLOGY
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Revolutionary Content Showcase 2027
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Experience the most advanced technology content that's reshaping reality itself
          </p>
        </div>

        {/* Main Showcase */}
        <div className="relative">
          {/* Content Slides */}
          <div className="relative h-96 overflow-hidden rounded-2xl">
            {revolutionaryContent.map((content, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : index < currentSlide
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className={`h-full bg-gradient-to-br ${content.gradient} p-12 flex items-center`}>
                  <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                    <div className="space-y-6">
                      <div className="text-6xl mb-4">{content.icon}</div>
                      <h3 className="text-4xl font-bold text-white mb-4">{content.title}</h3>
                      <p className="text-xl text-white/90 mb-6">{content.description}</p>
                      <div className="space-y-2">
                        {content.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href={content.link}
                        className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                      >
                        Explore {content.title} →
                      </a>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-full h-64 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
                        <div className="text-8xl opacity-50">{content.icon}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {revolutionaryContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {revolutionaryContent.map((content, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${content.gradient} rounded-xl p-8 hover:scale-105 transition-all duration-300`}
            >
              <div className="text-4xl mb-4">{content.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{content.title}</h3>
              <p className="text-white/90 mb-6">{content.description}</p>
              <div className="space-y-2 mb-6">
                {content.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href={content.link}
                className="block w-full bg-white text-gray-900 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
              >
                Explore Now →
              </a>
            </div>
          ))}
        </div>

        {/* Additional Revolutionary Content */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">More Revolutionary Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-lg font-bold text-white mb-2">Temporal Computing</h4>
              <p className="text-cyan-200 text-sm mb-4">Process information across time dimensions</p>
              <a href="/pages/AdvancedTechBreakthrough2027" className="text-cyan-300 hover:text-cyan-100 text-sm font-semibold">
                Learn More →
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">🌟</div>
              <h4 className="text-lg font-bold text-white mb-2">Omniversal AI</h4>
              <p className="text-purple-200 text-sm mb-4">AI systems across all dimensions</p>
              <a href="/pages/QuantumConsciousness2027" className="text-purple-300 hover:text-purple-100 text-sm font-semibold">
                Learn More →
              </a>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-lg p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">🔮</div>
              <h4 className="text-lg font-bold text-white mb-2">Reality Simulation</h4>
              <p className="text-emerald-200 text-sm mb-4">Create alternate realities</p>
              <a href="/pages/NeuralRealityEngine2027" className="text-emerald-300 hover:text-emerald-100 text-sm font-semibold">
                Learn More →
              </a>
            </div>

            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-lg p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="text-lg font-bold text-white mb-2">Space-Time Control</h4>
              <p className="text-orange-200 text-sm mb-4">Manipulate space-time itself</p>
              <a href="/pages/AdvancedTechBreakthrough2027" className="text-orange-300 hover:text-orange-100 text-sm font-semibold">
                Learn More →
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h3 className="text-4xl font-bold text-white mb-6">Experience the Future Today</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in exploring the most revolutionary technology content that's reshaping reality itself
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pages/AdvancedTechBreakthrough2027"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore All Content →
            </a>
            <a
              href="/pages/QuantumConsciousness2027"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 font-semibold text-lg"
            >
              Start with Consciousness
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2027;