import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2036: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Conscious AI Revolution",
      description: "The first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness",
      icon: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-100",
      listColor: "text-purple-200",
      features: [
        "Emotional Intelligence Processing",
        "Creative Problem Solving",
        "Self-Learning Capabilities",
        "Ethical Decision Making"
      ],
      link: "/pages/NextGenTechRevolution2036"
    },
    {
      id: 2,
      title: "Quantum Consciousness",
      description: "Direct neural interface with quantum computing systems for exponential cognitive enhancement",
      icon: "⚡",
      gradient: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      textColor: "text-cyan-100",
      listColor: "text-cyan-200",
      features: [
        "Quantum Neural Networks",
        "Consciousness Amplification",
        "Multi-dimensional Thinking",
        "Reality Manipulation"
      ],
      link: "/pages/UltimateTechBreakthrough2036"
    },
    {
      id: 3,
      title: "Interdimensional Technology",
      description: "Revolutionary technology enabling interaction with parallel dimensions and alternate realities",
      icon: "🌌",
      gradient: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      textColor: "text-emerald-100",
      listColor: "text-emerald-200",
      features: [
        "Dimensional Portal Technology",
        "Reality Shifting Capabilities",
        "Parallel Universe Access",
        "Multiverse Navigation"
      ],
      link: "/pages/NextGenTechRevolution2036"
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer connection technology that enables thought-based control and communication",
      icon: "🧬",
      gradient: "from-violet-600/30 to-purple-600/30",
      borderColor: "border-violet-400/30",
      textColor: "text-violet-100",
      listColor: "text-violet-200",
      features: [
        "Thought Control Systems",
        "Neural Feedback Loops",
        "Cognitive Enhancement",
        "Mind-Machine Integration"
      ],
      link: "/pages/UltimateTechBreakthrough2036"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Interactive Technology Showcase</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary technology solutions with interactive demonstrations and real-time features
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Slide Display */}
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 min-h-[400px] flex flex-col justify-center">
            <div className="text-center mb-8">
              <div className="text-8xl mb-6">{slides[currentSlide].icon}</div>
              <h3 className="text-4xl font-bold mb-6">{slides[currentSlide].title}</h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                {slides[currentSlide].description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-semibold mb-4">Key Features:</h4>
                <ul className="space-y-3">
                  {slides[currentSlide].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-semibold mb-3">Success Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-400">500%</div>
                      <div className="text-sm opacity-80">Efficiency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                      <div className="text-sm opacity-80">Accuracy</div>
                    </div>
                  </div>
                </div>
                
                <a 
                  href={slides[currentSlide].link}
                  className="block w-full bg-white text-purple-600 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-lg"
                >
                  Explore {slides[currentSlide].title} →
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-3">Precision Technology</h3>
            <p className="text-sm opacity-80">Advanced algorithms with 99.9% accuracy</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-sm opacity-80">Real-time processing and response</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
            <p className="text-sm opacity-80">Enterprise-grade security and reliability</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2036;