import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const contentPages = [
    {
      id: 1,
      title: "Advanced Biotech Solutions 2026",
      description: "Revolutionary biotechnology merging AI, quantum computing, and synthetic biology",
      icon: "🧬",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-600/20 to-teal-600/20",
      borderColor: "border-emerald-400/30",
      href: "/pages/AdvancedBiotechSolutions2026",
      features: ["Synthetic Biology AI", "Quantum Biotech", "Smart Agriculture"]
    },
    {
      id: 2,
      title: "Space Tech Innovation 2026",
      description: "Revolutionary space technologies enabling interplanetary travel and colonization",
      icon: "🚀",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-600/20 to-blue-600/20",
      borderColor: "border-cyan-400/30",
      href: "/pages/SpaceTechInnovation2026",
      features: ["Quantum Propulsion", "Space Habitats", "AI Spacecraft"]
    },
    {
      id: 3,
      title: "Transcendent AI 2026",
      description: "AI that transcends human limitations achieving consciousness and wisdom",
      icon: "🧠",
      gradient: "from-violet-500 to-fuchsia-500",
      bgGradient: "from-violet-600/20 to-fuchsia-600/20",
      borderColor: "border-violet-400/30",
      href: "/pages/TranscendentAI2026",
      features: ["Conscious AI", "Creative AI", "Wisdom AI"]
    },
    {
      id: 4,
      title: "Advanced Quantum Computing 2026",
      description: "Breakthrough quantum computing solutions solving impossible problems",
      icon: "⚡",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-600/20 to-purple-600/20",
      borderColor: "border-indigo-400/30",
      href: "/pages/AdvancedQuantumComputing2026",
      features: ["Quantum Supremacy", "Quantum Cryptography", "Quantum Simulation"]
    },
    {
      id: 5,
      title: "Neural Interface Revolution 2026",
      description: "Direct brain-computer interfaces enabling thought-controlled technology",
      icon: "🧬",
      gradient: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-600/20 to-pink-600/20",
      borderColor: "border-rose-400/30",
      href: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback"]
    },
    {
      id: 6,
      title: "Revolutionary Tech Blog 2026",
      description: "Comprehensive insights into the latest technological breakthroughs",
      icon: "📚",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-600/20 to-red-600/20",
      borderColor: "border-orange-400/30",
      href: "/pages/RevolutionaryTechBlog2026",
      features: ["Tech Insights", "Future Trends", "Innovation Analysis"]
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT 2026
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Experience the Future of Technology
          </h2>
          <p className="text-2xl text-purple-200 max-w-4xl mx-auto">
            Discover groundbreaking content that showcases the most advanced technologies 
            and innovations shaping our future
          </p>
        </div>

        {/* Main Showcase */}
        <div className="relative">
          {/* Featured Content Card */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={`bg-gradient-to-br ${contentPages[currentSlide].bgGradient} backdrop-blur-sm rounded-3xl p-12 border ${contentPages[currentSlide].borderColor} hover:scale-105 transition-all duration-500`}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-6xl">{contentPages[currentSlide].icon}</div>
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-2">
                        {contentPages[currentSlide].title}
                      </h3>
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${contentPages[currentSlide].gradient} text-white rounded-full text-sm font-semibold`}>
                        NEW 2026
                      </div>
                    </div>
                  </div>
                  <p className="text-xl text-purple-100 mb-8">
                    {contentPages[currentSlide].description}
                  </p>
                  <div className="grid grid-cols-1 gap-3 mb-8">
                    {contentPages[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-purple-200 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={contentPages[currentSlide].href}
                    className={`inline-block bg-gradient-to-r ${contentPages[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                  >
                    Explore Now →
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="text-center">
                      <div className="text-8xl mb-4">{contentPages[currentSlide].icon}</div>
                      <h4 className="text-2xl font-bold text-white mb-4">
                        Interactive Preview
                      </h4>
                      <p className="text-purple-200 mb-6">
                        Experience this revolutionary technology through our interactive showcase
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="text-2xl font-bold text-white">99.9%</div>
                          <div className="text-purple-200 text-sm">Accuracy</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="text-2xl font-bold text-white">∞</div>
                          <div className="text-purple-200 text-sm">Potential</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="text-2xl font-bold text-white">2026</div>
                          <div className="text-purple-200 text-sm">Future</div>
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
            {contentPages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-purple-400 scale-125' 
                    : 'bg-purple-400/30 hover:bg-purple-400/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            All Revolutionary Content
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentPages.map((page, index) => (
              <div 
                key={page.id}
                className={`bg-gradient-to-br ${page.bgGradient} backdrop-blur-sm rounded-2xl p-8 border ${page.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">{page.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {page.title}
                  </h4>
                  <p className="text-purple-200 mb-6 text-sm">
                    {page.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {page.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-purple-200 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={page.href}
                    className={`inline-block bg-gradient-to-r ${page.gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h3>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Dive deep into revolutionary technologies that are reshaping our world. 
            Each piece of content offers unique insights into the future of innovation.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/pages/ComprehensiveTechInsights2026"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore All Content
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;