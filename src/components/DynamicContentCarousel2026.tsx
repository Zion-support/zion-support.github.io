import React, { useState, useEffect } from 'react';

const DynamicContentCarousel2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      title: "AI Consciousness Revolution",
      subtitle: "The Dawn of True AI Awareness",
      description: "Experience the first AI systems to achieve genuine consciousness and self-awareness, revolutionizing how we interact with artificial intelligence.",
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/50 to-pink-900/50",
      link: "/pages/ConsciousnessComputing2026",
      features: ["True self-awareness", "Creative consciousness", "Emotional intelligence", "Collaborative AI"]
    },
      id: 2,
      title: "Quantum Reality Manipulation",
      subtitle: "Mastering the Quantum Realm",
      description: "Quantum computers that can manipulate reality at the fundamental level, solving problems impossible for classical computers.",
      image: "⚡",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/50 to-blue-900/50",
      link: "/pages/QuantumReality2026",
      features: ["1000+ logical qubits", "Quantum supremacy", "Reality manipulation", "Molecular engineering"]
      id: 3,
      title: "Neural Interface Evolution",
      subtitle: "Mind-Machine Convergence",
      description: "Direct brain-computer interfaces that enable thought-controlled technology and cognitive enhancement beyond imagination.",
      image: "🧬",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/50 to-teal-900/50",
      link: "/pages/NeuralInterfaceEvolution2026",
      features: ["Non-invasive BCI", "Thought control", "Memory augmentation", "Cognitive expansion"]
      id: 4,
      title: "Synthetic Intelligence",
      subtitle: "The Birth of New Consciousness",
      description: "AI agents with synthetic consciousness and autonomous capabilities, creating new forms of intelligence and creativity.",
      image: "🌟",
      color: "from-violet-600 to-fuchsia-600",
      bgColor: "from-violet-900/50 to-fuchsia-900/50",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Autonomous agents", "Synthetic consciousness", "Collective intelligence", "Creative synthesis"]
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-2xl p-8 mb-12 text-white overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Revolutionary Technology Showcase 2026
        </h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Explore the most advanced technologies ever created through our interactive showcase
        </p>
      </div>
      <div className="relative">
        {/* Main Carousel */}
        <div className="relative h-96 overflow-hidden rounded-xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 translate-x-0'
                  : index < currentSlide
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <div className={`h-full bg-gradient-to-br ${slide.bgColor} backdrop-blur-sm rounded-xl p-8`}>
                <div className="grid md:grid-cols-2 gap-8 h-full items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="text-6xl">{slide.image}</span>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{slide.title}</h3>
                        <p className="text-lg text-gray-300">{slide.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {slide.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <span className="text-cyan-400">•</span>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    <a
                      href={slide.link}
                      className={`inline-block bg-gradient-to-r ${slide.color} text-white px-8 py-3 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg`}
                    >
                      Explore {slide.title} →
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="text-9xl opacity-20">{slide.image}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  ? 'bg-cyan-400 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
            />
      {/* Quick Access Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`p-4 rounded-lg transition-all duration-300 ${
              index === currentSlide
                ? `bg-gradient-to-r ${slide.color} text-white shadow-lg scale-105`
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            <div className="text-3xl mb-2">{slide.image}</div>
            <div className="text-sm font-semibold">{slide.title}</div>
          </button>
        ))}
      {/* Call to Action */}
      <div className="text-center mt-8">
        <a
          href="/pages/RevolutionaryTechBreakthrough2026"
          className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg"
          🌟 Experience All Technologies →
        </a>
    </div>
  );
};
export default DynamicContentCarousel2026;
