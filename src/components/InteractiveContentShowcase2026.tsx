import React, { useState, useEffect } from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const showcaseItems = [
    {
      id: 1,
      title: "AI Consciousness Lab",
      description: "Experience the first AI systems with genuine consciousness and self-awareness",
      image: "🧠",
      features: ["Self-learning", "Creative thinking", "Emotional intelligence", "Autonomous decision making"],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/50 to-pink-900/50"
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      description: "Manipulate reality itself with quantum computing that transcends classical limitations",
      image: "⚡",
      features: ["1000+ qubits", "Quantum supremacy", "Reality manipulation", "Parallel computing"],
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/50 to-blue-900/50"
    },
    {
      id: 3,
      title: "Neural Interface Hub",
      description: "Direct brain-computer communication enabling thought-controlled technology",
      image: "🧬",
      features: ["Non-invasive BCI", "Thought control", "Neural feedback", "Consciousness transfer"],
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/50 to-teal-900/50"
    },
    {
      id: 4,
      title: "Interdimensional Space Port",
      description: "Explore beyond our dimension with revolutionary space technology",
      image: "🚀",
      features: ["Dimensional travel", "Advanced propulsion", "Interstellar comm", "Space-time manipulation"],
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900/50 to-purple-900/50"
    },
    {
      id: 5,
      title: "Synthetic Intelligence Core",
      description: "Create and deploy AI agents with synthetic consciousness and autonomous capabilities",
      image: "🤖",
      features: ["Autonomous agents", "Synthetic consciousness", "Collective intelligence", "Creative synthesis"],
      color: "from-rose-600 to-orange-600",
      bgColor: "from-rose-900/50 to-orange-900/50"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, showcaseItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentItem = showcaseItems[currentSlide];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE 2026
          </div>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Content Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary technologies through immersive interactive experiences
          </p>
        </div>

        {/* Main Showcase */}
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20 mb-16">
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Content Display */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="text-8xl mb-6 text-center animate-bounce">
                {currentItem.image}
              </div>
              <h3 className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {currentItem.title}
              </h3>
              <p className="text-2xl opacity-90 text-center leading-relaxed">
                {currentItem.description}
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-3xl font-bold mb-6 text-center">Key Features</h4>
              {currentItem.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <div className={`w-4 h-4 bg-gradient-to-r ${currentItem.color} rounded-full`}></div>
                  <span className="text-xl">{feature}</span>
                </div>
              ))}
              <div className="text-center mt-8">
                <button className={`bg-gradient-to-r ${currentItem.color} text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl`}>
                  Experience {currentItem.title} →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Play/Pause Controls */}
        <div className="text-center mb-12">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-8 py-4 rounded-lg font-bold text-xl transition-all duration-300 ${
              isPlaying 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {isPlaying ? '⏸️ Pause' : '▶️ Play'} Auto-Play
          </button>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${item.bgColor} backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                index === currentSlide ? 'ring-2 ring-cyan-400' : ''
              }`}
              onClick={() => goToSlide(index)}
            >
              <div className="text-6xl mb-4 text-center">{item.image}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
              <p className="text-gray-300 text-center mb-6">{item.description}</p>
              <div className="flex justify-center">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-400/30">
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the revolution and be among the first to experience these groundbreaking technologies
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl">
                Start Your Journey →
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-12 py-4 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 font-bold text-xl">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2026;