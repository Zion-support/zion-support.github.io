import React, { useState, useEffect } from 'react';

const NewContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const contentItems = [
    {
      id: 1,
      title: "Revolutionary Tech Showcase 2026",
      description: "Experience the convergence of AI consciousness, quantum supremacy, and neural interfaces",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechShowcase2026",
      badge: "NEW"
    },
    {
      id: 2,
      title: "AI Business Automation 2026",
      description: "Transform your business with autonomous AI systems that work 24/7 and deliver unprecedented efficiency",
      image: "🤖",
      gradient: "from-emerald-600 to-cyan-600",
      link: "/pages/AIBusinessAutomation2026",
      badge: "HOT"
    },
    {
      id: 3,
      title: "Quantum Computing Revolution",
      description: "Breakthrough quantum computing solutions solving impossible problems with exponential speed",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumReality2026",
      badge: "BREAKTHROUGH"
    },
    {
      id: 4,
      title: "Neural Interface Evolution",
      description: "Direct brain-computer communication enabling thought-controlled technology and enhanced cognition",
      image: "🧬",
      gradient: "from-violet-600 to-fuchsia-600",
      link: "/pages/NeuralInterfaceEvolution2026",
      badge: "FUTURE"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentItems.length]);

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW CONTENT 2026 • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Revolutionary Content Showcase 2026</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our latest groundbreaking content featuring cutting-edge technology, 
            AI innovations, and revolutionary solutions that are reshaping the future
          </p>
        </div>

        {/* Interactive Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 mx-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-6xl">{item.image}</span>
                          <div>
                            <span className={`px-3 py-1 bg-gradient-to-r ${item.gradient} text-white text-xs font-bold rounded-full`}>
                              {item.badge}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                        <p className="text-lg opacity-90 mb-6">{item.description}</p>
                        <a 
                          href={item.link}
                          className={`inline-block bg-gradient-to-r ${item.gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                        >
                          Explore Now →
                        </a>
                      </div>
                      <div className="text-center">
                        <div className="text-9xl opacity-20">{item.image}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contentItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-white/20"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{item.image}</div>
                <div className="flex justify-center mb-2">
                  <span className={`px-2 py-1 bg-gradient-to-r ${item.gradient} text-white text-xs font-bold rounded-full`}>
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm opacity-80">{item.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Explore the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Dive into our revolutionary content and discover how cutting-edge technology can transform your world
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/RevolutionaryTechShowcase2026"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-2xl"
            >
              🌟 Start Exploring →
            </a>
            <a 
              href="/pages/AIBusinessAutomation2026"
              className="border-2 border-white text-white px-12 py-5 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-bold text-2xl"
            >
              🤖 AI Automation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;