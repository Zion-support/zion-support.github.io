import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const showcases = [
    {
      title: 'Conscious AI Systems',
      description: 'AI that achieves true consciousness and self-awareness',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500',
      features: ['Self-aware decision making', 'Emotional intelligence', 'Creative problem solving'],
      stats: { efficiency: '+500%', accuracy: '99.9%', speed: '1000x faster' }
    },
    {
      title: 'Quantum Reality Engine',
      description: 'Immersive virtual environments powered by quantum computing',
      icon: '⚡',
      color: 'from-cyan-500 to-blue-500',
      features: ['Quantum state processing', 'Parallel universe computing', 'Reality manipulation'],
      stats: { processing: 'Exponential', security: 'Unbreakable', applications: 'Infinite' }
    },
    {
      title: 'Neural Interface Pro',
      description: 'Direct brain-computer interface for seamless interaction',
      icon: '🧬',
      color: 'from-emerald-500 to-teal-500',
      features: ['Thought control', 'Neural feedback', 'Memory enhancement'],
      stats: { response: 'Instant', accuracy: '99.8%', safety: '100%' }
    },
    {
      title: 'Interdimensional Computing',
      description: 'Computing systems that operate across multiple dimensions',
      icon: '🌌',
      color: 'from-orange-500 to-red-500',
      features: ['Multi-dimensional processing', 'Infinite computational power', 'Dimensional data storage'],
      stats: { dimensions: '∞', power: 'Infinite', storage: 'Unlimited' }
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % showcases.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, showcases.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcases.length) % showcases.length);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2026
          </div>
          <h2 className="text-4xl font-bold mb-4">Revolutionary Technology Showcase 2026</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking content on AI Revolution, Quantum Computing, and Neural Interfaces
          </p>
        </div>

        {/* Interactive Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {showcases.map((showcase, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-8 items-center p-8">
                    <div>
                      <div className="text-8xl mb-6">{showcase.icon}</div>
                      <h3 className="text-4xl font-bold mb-4">{showcase.title}</h3>
                      <p className="text-xl mb-6 opacity-90">{showcase.description}</p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {Object.entries(showcase.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-purple-300">{value}</div>
                            <div className="text-sm opacity-75 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      <button className={`bg-gradient-to-r ${showcase.color} text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg`}>
                        Experience {showcase.title} →
                      </button>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold mb-4">Key Features</h4>
                      {showcase.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                          <div className={`w-3 h-3 bg-gradient-to-r ${showcase.color} rounded-full`}></div>
                          <span className="text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <span className="text-2xl">←</span>
            </button>
            
            <div className="flex space-x-2">
              {showcases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <span className="text-2xl">→</span>
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 ml-4"
            >
              <span className="text-2xl">{isPlaying ? '⏸️' : '▶️'}</span>
            </button>
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {showcases.map((showcase, index) => (
            <a
              key={index}
              href={`/pages/${showcase.title.replace(/\s+/g, '')}2026`}
              className={`p-4 rounded-lg bg-gradient-to-r ${showcase.color} text-white hover:shadow-lg transition-all duration-300 text-center`}
            >
              <div className="text-2xl mb-2">{showcase.icon}</div>
              <div className="font-semibold text-sm">{showcase.title}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;