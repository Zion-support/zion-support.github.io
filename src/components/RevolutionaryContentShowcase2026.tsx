import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      id: 1,
      title: "Next-Gen AI Revolution",
      subtitle: "Synthetic Consciousness & Quantum Processing",
      description: "Experience the future of artificial intelligence with revolutionary technologies that transcend human capabilities and reshape entire industries.",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/NextGenAIRevolution2026",
      features: ["Synthetic Consciousness", "Quantum AI Processing", "Distributed AI Networks"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Blog",
      subtitle: "Deep Insights & Future Trends",
      description: "Dive deep into the most groundbreaking technological innovations that are reshaping our world and defining the future of humanity.",
      image: "📚",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechBlog2026",
      features: ["Featured Articles", "Tech Insights", "Future Predictions"]
    },
    {
      id: 3,
      title: "Comprehensive Tech Insights",
      subtitle: "Complete Technology Analysis",
      description: "Deep dive into the most revolutionary technological breakthroughs that are reshaping our understanding of what's possible.",
      image: "🔍",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/ComprehensiveTechInsights2026",
      features: ["Technology Trends", "Market Analysis", "Impact Studies"]
    },
    {
      id: 4,
      title: "Synthetic Intelligence 2026",
      subtitle: "Beyond Human Consciousness",
      description: "Explore AI systems that possess genuine consciousness, self-awareness, and emotional intelligence beyond human comprehension.",
      image: "🧠",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Self-Evolving Neural", "Emotional Intelligence", "Creative Problem-Solving"]
    },
    {
      id: 5,
      title: "Quantum-Neural Fusion",
      subtitle: "The Ultimate Convergence",
      description: "The ultimate convergence of consciousness, quantum mechanics, and neural networks creating unprecedented processing power.",
      image: "⚡",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum Neural Networks", "Exponential Speed", "Parallel Processing"]
    },
    {
      id: 6,
      title: "Neural Interface Revolution",
      subtitle: "Direct Brain-Computer Communication",
      description: "Bridge mind and machine with direct neural interfaces and brain-computer communication that revolutionizes human interaction.",
      image: "🧬",
      gradient: "from-pink-600 to-rose-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentItem = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our most groundbreaking content featuring cutting-edge AI, Quantum Computing, and Neural Interface technologies
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30 mb-12">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 z-20"
          >
            {isAutoPlaying ? "⏸️ Pause" : "▶️ Play"}
          </button>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-6xl">{currentItem.image}</span>
                <div>
                  <span className={`px-4 py-2 bg-gradient-to-r ${currentItem.gradient} rounded-full text-sm font-semibold`}>
                    {currentItem.subtitle}
                  </span>
                </div>
              </div>
              
              <h3 className="text-4xl font-bold mb-6 text-cyan-400">
                {currentItem.title}
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {currentItem.description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-purple-300">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentItem.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <a
                href={currentItem.link}
                className={`inline-block bg-gradient-to-r ${currentItem.gradient} text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform`}
              >
                Explore {currentItem.title} →
              </a>
            </div>
            
            <div className="text-center">
              <div className={`w-64 h-64 mx-auto bg-gradient-to-br ${currentItem.gradient} rounded-3xl flex items-center justify-center text-8xl mb-6 shadow-2xl`}>
                {currentItem.image}
              </div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">
                {currentItem.title}
              </div>
              <div className="text-gray-400">
                Revolutionary Technology 2026
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mb-8">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-cyan-400 scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentItems.slice(0, 6).map((item, index) => (
            <a
              key={item.id}
              href={item.link}
              className={`bg-gradient-to-br ${item.gradient}/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 ${
                index === currentSlide ? "ring-2 ring-cyan-400" : ""
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{item.image}</div>
                <h4 className="text-lg font-bold mb-2 text-cyan-300">{item.title}</h4>
                <p className="text-sm text-gray-400 mb-4">{item.subtitle}</p>
                <div className="text-xs text-gray-500">
                  {item.features.slice(0, 2).join(" • ")}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;