import React, { useState, useEffect } from 'react';

const DynamicContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentSlides = [
    {
      id: 1,
      title: "🚀 Revolutionary AI Breakthrough 2025",
      description: "Experience the next generation of artificial intelligence that's transforming every industry",
      features: ["Autonomous AI Agents", "Quantum-Enhanced Learning", "Real-time Adaptation", "Zero-downtime Updates"],
      link: "/pages/AdvancedAITransformation2025",
      gradient: "from-purple-600 to-pink-600",
      icon: "🤖"
    },
    {
      id: 2,
      title: "⚡ Quantum Computing Revolution",
      description: "Unlock exponential computing power with quantum technology that solves impossible problems",
      features: ["Exponential Speed", "Quantum Cryptography", "Molecular Simulation", "Breakthrough Algorithms"],
      link: "/pages/QuantumComputingRevolution2025",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      id: 3,
      title: "🧬 Neural Interface Technology",
      description: "Bridge the gap between mind and machine with direct neural communication systems",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback", "Brain-Computer Interface"],
      link: "/pages/NeuralInterfaceRevolution2025",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧬"
    },
    {
      id: 4,
      title: "🌟 Next-Gen Tech Showcase",
      description: "Comprehensive showcase of cutting-edge technologies reshaping our digital future",
      features: ["AI Integration", "Blockchain Solutions", "IoT Networks", "Edge Computing"],
      link: "/pages/NextGenTechShowcase2025",
      gradient: "from-orange-600 to-red-600",
      icon: "🚀"
    },
    {
      id: 5,
      title: "🧠 Synthetic Intelligence 2026",
      description: "Self-evolving AI systems that transcend traditional limitations and create new possibilities",
      features: ["Self-Evolving Systems", "Transcendent AI", "Autonomous Creation", "Future Intelligence"],
      link: "/pages/SyntheticIntelligence2026",
      gradient: "from-indigo-600 to-purple-600",
      icon: "🧠"
    },
    {
      id: 6,
      title: "⚛️ Quantum-Neural Fusion",
      description: "The revolutionary convergence of quantum computing and neural networks for unprecedented power",
      features: ["Quantum Neural Processing", "Hybrid Intelligence", "Fusion Algorithms", "Next-Gen Computing"],
      link: "/pages/QuantumNeuralFusion2026",
      gradient: "from-violet-600 to-purple-600",
      icon: "⚛️"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentSlides.length]);

  const currentContent = contentSlides[currentSlide];

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-bold mb-4 animate-pulse">
            🔥 FEATURED CONTENT • DYNAMIC SHOWCASE
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Revolutionary Technology Experience</h2>
          <p className="text-xl text-gray-600">Explore our most advanced technologies with immersive interactive features</p>
        </div>

        {/* Main Content Carousel */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content Display */}
            <div className="space-y-6">
              <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${currentContent.gradient} text-white rounded-full text-sm font-semibold`}>
                <span className="mr-2">{currentContent.icon}</span>
                {currentContent.title}
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {currentContent.description}
              </p>

              <div className="grid grid-cols-2 gap-3">
                {currentContent.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href={currentContent.link}
                className={`inline-block bg-gradient-to-r ${currentContent.gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
              >
                Explore Technology →
              </a>
            </div>

            {/* Visual Display */}
            <div className="relative">
              <div className={`bg-gradient-to-br ${currentContent.gradient} rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all duration-300`}>
                <div className="text-8xl mb-4 animate-bounce">{currentContent.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{currentContent.title}</h3>
                <p className="text-white/90 text-sm">
                  Revolutionary breakthrough in {currentContent.title.split(' ')[1]} technology
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {contentSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Quick Access to All Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {contentSlides.map((slide, index) => (
              <a
                key={slide.id}
                href={slide.link}
                className={`p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
                  index === currentSlide 
                    ? `bg-gradient-to-r ${slide.gradient} text-white shadow-lg` 
                    : 'bg-white text-gray-700 hover:shadow-md border border-gray-200'
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="text-3xl mb-2">{slide.icon}</div>
                <div className="text-xs font-semibold leading-tight">
                  {slide.title.split(' ')[0]} {slide.title.split(' ')[1]}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel;