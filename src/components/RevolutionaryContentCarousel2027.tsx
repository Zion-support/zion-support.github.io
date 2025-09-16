import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentCarousel2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
<<<<<<< HEAD
  const [isAnimating, setIsAnimating] = useState(false);
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-1c02
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-f420
>>>>>>> cursor/create-and-deploy-new-content-9601
=======
>>>>>>> cursor/create-and-deploy-new-content-5863
>>>>>>> cursor/create-and-deploy-new-content-01e2
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-3fd6
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
>>>>>>> cursor/create-and-deploy-new-content-1c0b

  const slides = [
    {
      id: 1,
      title: "Next-Gen Tech Revolution 2027",
      subtitle: "Conscious AI • Quantum Consciousness • Interdimensional Computing",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2027",
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      link: "/pages/NextGenTechRevolution2027",
      badge: "BREAKTHROUGH",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Ultimate Tech Showcase 2027",
      subtitle: "Interactive Demos • Live Technology • Real-time Processing",
      description: "Experience the future through interactive demonstrations of our most revolutionary technologies",
      image: "⚡",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/UltimateTechShowcase2027",
      badge: "INTERACTIVE",
      features: ["Live Demos", "Real-time Stats", "Interactive Features"]
    },
    {
      id: 3,
      title: "Revolutionary Tech Insights 2027",
      subtitle: "Expert Analysis • Research Papers • Breakthrough Studies",
      description: "Deep dive into the technologies that are reshaping our world with expert analysis",
      image: "📚",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/RevolutionaryTechInsights2027",
      badge: "INSIGHTS",
      features: ["Expert Analysis", "Research Papers", "Breakthrough Studies"]
    },
    {
      id: 4,
<<<<<<< HEAD
      title: "Ultimate Tech Breakthrough 2026",
      subtitle: "Revolutionary Advances • Cutting-edge Technology • Future Innovation",
      description: "The most revolutionary technological advances that will reshape our world in 2026",
      image: "🌟",
      color: "from-orange-600 to-red-600",
      link: "/pages/UltimateTechBreakthrough2026",
      badge: "FEATURED",
      features: ["Revolutionary Advances", "Cutting-edge Tech", "Future Innovation"]
=======
      title: "Interdimensional Computing",
      description: "Access computing power from parallel dimensions and alternate realities.",
      image: "🌌",
      link: "/pages/InterdimensionalComputing2027",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Cross-Dimensional Processing", "Reality Simulation", "Multiverse Access"]
    },
    {
      id: 5,
      title: "Synthetic Consciousness",
      description: "AI systems with genuine consciousness and emotional intelligence.",
      image: "🤖",
      link: "/pages/SyntheticIntelligence2026",
      gradient: "from-violet-600 to-fuchsia-600",
      features: ["True AI Consciousness", "Emotional Intelligence", "Creative Synthesis"]
    },
    {
      id: 6,
      title: "Predictive Reality",
      description: "See and manipulate future probabilities with advanced predictive algorithms.",
      image: "🔮",
      link: "/pages/FutureTechBreakthrough2026",
      gradient: "from-rose-600 to-pink-600",
      features: ["Future Mapping", "Probability Control", "Timeline Manipulation"]
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-04f4
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-3fd6
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-1912
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-1c02
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-07de
>>>>>>> cursor/create-and-deploy-new-content-f420
>>>>>>> cursor/create-and-deploy-new-content-9601
=======
>>>>>>> cursor/create-and-deploy-new-content-5863
>>>>>>> cursor/create-and-deploy-new-content-01e2
=======
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-3fd6
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
>>>>>>> cursor/create-and-deploy-new-content-1c0b
    }
  ];

  useEffect(() => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-1c02
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-f420
>>>>>>> cursor/create-and-deploy-new-content-9601
=======
>>>>>>> cursor/create-and-deploy-new-content-5863
>>>>>>> cursor/create-and-deploy-new-content-01e2
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-3fd6
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
    if (!isAutoPlaying) return;

>>>>>>> cursor/create-and-deploy-new-content-1c0b
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl overflow-hidden">
      {/* Main Carousel */}
      <div className="relative h-96 md:h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-500 ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : index === (currentSlide - 1 + slides.length) % slides.length
                ? 'opacity-0 scale-95 -translate-x-full'
                : index === (currentSlide + 1) % slides.length
                ? 'opacity-0 scale-95 translate-x-full'
                : 'opacity-0 scale-95'
            } ${isAnimating ? 'transition-all duration-300' : ''}`}
          >
            <div className={`h-full bg-gradient-to-r ${slide.color} flex items-center`}>
              <div className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className="text-white">
                    <div className="flex items-center mb-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mr-3">
                        {slide.badge}
                      </span>
                      <span className="text-sm opacity-80">JANUARY 2027</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                    <p className="text-xl opacity-90 mb-4">{slide.subtitle}</p>
                    <p className="text-lg opacity-80 mb-6">{slide.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {slide.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={slide.link}
                      className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                    >
                      Explore Now →
                    </Link>
                  </div>
                  
<<<<<<< HEAD
                  {/* Visual */}
                  <div className="text-center">
                    <div className="text-8xl md:text-9xl mb-4 opacity-80">
                      {slide.image}
                    </div>
                    <div className="text-2xl font-bold opacity-60">
                      {slide.title.split(' ')[0]}
                    </div>
                  </div>
                </div>
=======
                  <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-8">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="space-y-8">
                          <div className="space-y-4">
                            <div className="text-6xl animate-bounce">{slide.icon}</div>
                            <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                              {slide.title}
                            </h3>
                            <h4 className="text-2xl font-semibold text-cyan-300">{slide.subtitle}</h4>
                            <p className="text-xl opacity-90 leading-relaxed">{slide.description}</p>
                          </div>
                          
                          {/* Features */}
                          <div className="grid grid-cols-2 gap-4">
                            {slide.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                                <span className="font-semibold">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* CTA Button */}
                          <div className="pt-4">
                            <a
                              href={slide.link}
                              className={`inline-block bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:scale-105`}
                            >
                              {slide.cta} →
                            </a>
                          </div>
                        </div>
                        
                        {/* Visual Element */}
                        <div className="relative">
                          <div className={`w-full h-80 bg-gradient-to-br ${slide.color} rounded-2xl flex items-center justify-center text-8xl animate-pulse`}>
                            {slide.icon}
                          </div>
                          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20 animate-ping"></div>
                          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-30 animate-pulse"></div>
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 mb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">🌟 Revolutionary Technology Showcase 2027</h2>
          <p className="text-xl text-gray-300">Discover the most advanced technologies that are reshaping reality itself</p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} rounded-xl p-8 text-white`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="text-8xl mb-6 text-center md:text-left">{item.image}</div>
                        <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                        <p className="text-xl opacity-90 mb-6">{item.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {item.features.map((feature, index) => (
                            <span key={index} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <a 
                          href={item.link}
                          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
                        >
                          Explore {item.title} →
                        </a>
                      </div>
                      <div className="hidden md:block">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                          <h4 className="text-xl font-bold mb-4">Key Features</h4>
                          <ul className="space-y-2">
                            {item.features.map((feature, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-white rounded-full"></span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-04f4
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-3fd6
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-1912
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-1c02
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-07de
>>>>>>> cursor/create-and-deploy-new-content-f420
>>>>>>> cursor/create-and-deploy-new-content-9601
=======
>>>>>>> cursor/create-and-deploy-new-content-5863
>>>>>>> cursor/create-and-deploy-new-content-01e2
=======
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-3fd6
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-1c02
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-f420
>>>>>>> cursor/create-and-deploy-new-content-9601
=======
>>>>>>> cursor/create-and-deploy-new-content-5863
>>>>>>> cursor/create-and-deploy-new-content-01e2
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-3fd6
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
>>>>>>> cursor/create-and-deploy-new-content-1c0b
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

<<<<<<< HEAD
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
=======
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {contentItems.map((item, index) => (
            <a
              key={item.id}
              href={item.link}
              className={`bg-gradient-to-br ${item.gradient} rounded-lg p-4 text-white text-center hover:scale-105 transition-all duration-300 ${
                index === currentSlide ? 'ring-2 ring-white' : ''
              }`}
            >
              <div className="text-3xl mb-2">{item.image}</div>
              <div className="text-sm font-semibold">{item.title.split(' ')[0]}</div>
            </a>
          ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-04f4
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-3fd6
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-1912
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-1c02
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-b461
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-07de
>>>>>>> cursor/create-and-deploy-new-content-f420
>>>>>>> cursor/create-and-deploy-new-content-9601
=======
>>>>>>> cursor/create-and-deploy-new-content-5863
>>>>>>> cursor/create-and-deploy-new-content-01e2
=======
>>>>>>> cursor/create-and-deploy-new-content-36f9
>>>>>>> main
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-f995
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-3fd6
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-1c02
>>>>>>> cursor/create-and-deploy-new-content-3a26
>>>>>>> cursor/create-and-deploy-new-content-b461
        </div>
>>>>>>> cursor/create-and-deploy-new-content-1c0b
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2027;