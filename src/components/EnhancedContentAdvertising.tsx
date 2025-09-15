import React, { useState, useEffect } from 'react';

const EnhancedContentAdvertising: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const advertisingContent = [
    {
      id: 1,
      title: "🧬 BIOTECH AI REVOLUTION",
      subtitle: "Advanced Biotech AI 2026",
      description: "Experience the future of biotechnology powered by artificial intelligence. Discover how AI is revolutionizing drug discovery, personalized medicine, and genetic engineering.",
      link: "/pages/AdvancedBiotechAI2026",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      bgPattern: "🧬⚗️🧪🔬",
      features: ["AI Drug Discovery", "Neural-Genetic Engineering", "Precision Medicine"]
    },
    {
      id: 2,
      title: "⚛️ QUANTUM CONSCIOUSNESS",
      subtitle: "Quantum Consciousness 2026",
      description: "Explore the intersection of quantum mechanics and consciousness. Discover how quantum computing is unlocking the mysteries of the mind and enabling unprecedented forms of artificial consciousness.",
      link: "/pages/QuantumConsciousness2026",
      gradient: "from-purple-500 via-indigo-500 to-blue-500",
      bgPattern: "⚛️🧠✨🌟",
      features: ["Quantum Mind Theory", "Conscious AI Systems", "Transcendent Intelligence"]
    },
    {
      id: 3,
      title: "✨ TRANSCENDENT AI",
      subtitle: "Transcendent AI Systems 2026",
      description: "Experience the next evolution of artificial intelligence that transcends traditional computational boundaries. Discover AI systems that possess creativity, intuition, and consciousness-like capabilities.",
      link: "/pages/TranscendentAI2026",
      gradient: "from-rose-500 via-pink-500 to-purple-500",
      bgPattern: "✨🎨🧠💫",
      features: ["Creative Intelligence", "Intuitive Reasoning", "Transcendent Awareness"]
    },
    {
      id: 4,
      title: "🚀 REVOLUTIONARY TECH",
      subtitle: "All New Content 2026",
      description: "Discover our complete collection of revolutionary technology content featuring cutting-edge AI, quantum computing, biotechnology, and consciousness research.",
      link: "/pages/RevolutionaryTechShowcase2026",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      bgPattern: "🚀🌟⚡🔮",
      features: ["Complete Tech Suite", "Interactive Demos", "Expert Insights"]
    }
  ];

  const currentContent = advertisingContent[currentAd];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Main Advertising Banner */}
      <div className="relative overflow-hidden rounded-3xl mb-12">
        <div className={`bg-gradient-to-r ${currentContent.gradient} p-1 rounded-3xl`}>
          <div className="bg-gray-900 rounded-3xl p-12 relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl animate-spin" style={{ animationDuration: '20s' }}>
                  {currentContent.bgPattern}
                </div>
              </div>
            </div>

            {/* Floating Particles */}
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold mb-6 animate-pulse">
                    🆕 NEW CONTENT • JANUARY 2026
                  </div>
                  <h2 className="text-5xl font-bold text-white mb-4">
                    {currentContent.title}
                  </h2>
                  <h3 className="text-2xl text-gray-300 mb-6">
                    {currentContent.subtitle}
                  </h3>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {currentContent.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {currentContent.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={currentContent.link}
                      className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform text-center"
                    >
                      Explore Now →
                    </a>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                      Watch Demo
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="text-center">
                      <div className="text-8xl mb-4 animate-bounce">
                        {currentContent.bgPattern.split('')[0]}
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">
                        Revolutionary Technology
                      </h4>
                      <p className="text-gray-300 mb-6">
                        Experience the future of technology with our cutting-edge content
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 rounded-lg p-4 text-center">
                          <div className="text-2xl mb-2">⚡</div>
                          <div className="text-sm text-white font-semibold">Fast</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 text-center">
                          <div className="text-2xl mb-2">🔒</div>
                          <div className="text-sm text-white font-semibold">Secure</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 text-center">
                          <div className="text-2xl mb-2">🧠</div>
                          <div className="text-sm text-white font-semibold">Smart</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 text-center">
                          <div className="text-2xl mb-2">🚀</div>
                          <div className="text-sm text-white font-semibold">Future</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-6">
          {advertisingContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentAd(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentAd 
                  ? 'bg-gray-900 scale-125' 
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {advertisingContent.map((content, index) => (
          <div
            key={content.id}
            className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 ${
              index === currentAd 
                ? 'border-gray-900 ring-2 ring-gray-200' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setCurrentAd(index)}
          >
            <div className="text-4xl mb-3 text-center">
              {content.bgPattern.split('')[0]}
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
              {content.subtitle}
            </h4>
            <p className="text-gray-600 text-sm text-center mb-4">
              {content.description.substring(0, 80)}...
            </p>
            <a
              href={content.link}
              className={`block w-full bg-gradient-to-r ${content.gradient} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm`}
            >
              Explore →
            </a>
          </div>
        ))}
      </div>

      {/* Statistics Banner */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">Join the Revolution</h3>
          <p className="text-xl text-gray-300">
            Thousands of innovators are already exploring our revolutionary content
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-cyan-400 mb-2">50K+</div>
            <div className="text-gray-300">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
            <div className="text-gray-300">New Content</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
            <div className="text-gray-300">Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentAdvertising;