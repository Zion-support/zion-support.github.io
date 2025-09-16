import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const showcaseItems = [
    {
      title: "Revolutionary Tech Breakthrough 2026",
      description: "Experience the most revolutionary technological breakthroughs that are reshaping our world",
      icon: "🚀",
      color: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechBreakthrough2026",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Neural Reality Interface", "Omniversal Computing"]
    },
    {
      title: "Ultimate Tech Showcase 2026",
      description: "Interactive exploration of the most advanced technologies revolutionizing human existence",
      icon: "🌟",
      color: "from-indigo-600 to-purple-600",
      link: "/pages/UltimateTechShowcase2026",
      features: ["Interactive Explorer", "Real-time Demos", "Future Vision", "Revolutionary Impact"]
    },
    {
      title: "Consciousness Computing 2026",
      description: "The first AI systems to achieve true consciousness and self-awareness",
      icon: "🧠",
      color: "from-emerald-600 to-cyan-600",
      link: "/pages/ConsciousnessComputing2026",
      features: ["Self-Awareness", "Emotional Intelligence", "Creative Thinking", "Ethical Reasoning"]
    },
    {
      title: "Advanced AI Transformation 2026",
      description: "Transform your business with cutting-edge AI technologies",
      icon: "🤖",
      color: "from-rose-600 to-orange-600",
      link: "/pages/AdvancedAITransformation2026",
      features: ["Business Automation", "Predictive Analytics", "Intelligent Decision Making", "Scalable Solutions"]
    },
    {
      title: "Quantum-Neural Fusion 2026",
      description: "Revolutionary fusion of quantum computing and neural interfaces",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum Processing", "Neural Integration", "Reality Simulation", "Infinite Possibilities"]
    },
    {
      title: "Next-Gen Tech Showcase 2026",
      description: "Comprehensive showcase of next-generation technologies",
      icon: "🔮",
      color: "from-violet-600 to-purple-600",
      link: "/pages/NextGenTechShowcase2026",
      features: ["Future Technologies", "Innovation Hub", "Tech Trends", "Revolutionary Solutions"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [showcaseItems.length]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Experience
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our most advanced and revolutionary content that showcases the future of technology
          </p>
        </div>

        {/* Main Showcase Carousel */}
        <div className="relative mb-16">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className={`bg-gradient-to-br ${showcaseItems[currentSlide].color}/30 backdrop-blur-sm rounded-3xl p-12 border border-white/20 relative overflow-hidden`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-white/20 to-transparent rounded-full transform translate-x-32 translate-y-32"></div>
              </div>
              
              <div className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="text-8xl mb-6 animate-bounce">{showcaseItems[currentSlide].icon}</div>
                    <h3 className="text-4xl font-bold mb-6">{showcaseItems[currentSlide].title}</h3>
                    <p className="text-xl opacity-90 mb-8">{showcaseItems[currentSlide].description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {showcaseItems[currentSlide].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <span className="text-2xl">✨</span>
                          <span className="text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <a 
                      href={showcaseItems[currentSlide].link}
                      className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                    >
                      Explore Now →
                    </a>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                      <div className="text-center mb-6">
                        <div className="text-6xl mb-4">🎯</div>
                        <h4 className="text-2xl font-bold mb-2">Interactive Preview</h4>
                        <p className="opacity-90">Experience the technology in action</p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white/20 rounded-lg p-4">
                          <div className="text-sm opacity-90 mb-2">Technology Level</div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-4/5"></div>
                          </div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-4">
                          <div className="text-sm opacity-90 mb-2">Innovation Score</div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full w-5/6"></div>
                          </div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-4">
                          <div className="text-sm opacity-90 mb-2">Future Impact</div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full w-full"></div>
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
          <div className="flex justify-center space-x-3 mt-8">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-purple-500 scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">🚀 Quick Access</h3>
            <p className="text-lg opacity-90">Jump directly to any revolutionary content</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`bg-gradient-to-br ${item.color}/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 group`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm opacity-90 mb-4">{item.description}</p>
                <div className="flex items-center text-sm font-semibold">
                  <span>Explore →</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Revolutionary Statistics */}
        <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">📊 Revolutionary Impact</h3>
            <p className="text-lg opacity-90">The numbers that prove our revolutionary content impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Revolutionary Pages</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">1M+</div>
              <div className="text-lg opacity-90">Monthly Visitors</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-rose-400 mb-2">24/7</div>
              <div className="text-lg opacity-90">Content Updates</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Explore our revolutionary content and discover technologies that will reshape your world
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2026"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Start Exploring
            </a>
            <a 
              href="/pages/UltimateTechShowcase2026"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
            >
              View All Content
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;