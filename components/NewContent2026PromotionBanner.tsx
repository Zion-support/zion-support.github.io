import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewContent2026PromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "🚀 AI 2026 Neural Interface Revolution",
      subtitle: "Breakthrough brain-computer interfaces achieving 95% accuracy",
      cta: "Explore Neural Interfaces",
      href: "/ai-2026-neural-interface-revolution",
      color: "from-blue-600 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-100"
    },
    {
      title: "⚛️ Quantum-Neural Fusion Breakthrough",
      subtitle: "Quantum-enhanced neural networks with exponential speed",
      cta: "Discover Quantum AI",
      href: "/ai-2026-quantum-neural-fusion",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-50 to-pink-100"
    },
    {
      title: "🧠 Advanced Deep Learning Architectures",
      subtitle: "Next-generation models with 99.8% accuracy rates",
      cta: "Master Deep Learning",
      href: "/ai-2026-deep-learning-architectures",
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-100"
    },
    {
      title: "🌐 Edge AI Optimization Mastery",
      subtitle: "Deploy AI on edge devices with maximum efficiency",
      cta: "Optimize Edge AI",
      href: "/ai-2026-edge-ai-optimization",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-50 to-red-100"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/80 to-indigo-900/80"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%253Csvg%20width%3D'60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold mb-6 animate-pulse">
            <span className="mr-2">🔥</span>
            NEW AI 2026 CONTENT REVOLUTION
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI 2026
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Content Library
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover breakthrough AI technologies, advanced neural architectures, and revolutionary methodologies 
            that are reshaping the future of artificial intelligence. Join thousands of professionals achieving 
            unprecedented ROI with our cutting-edge content.
          </p>
        </div>

        {/* Rotating Content Slides */}
        <div className="relative mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 min-h-[300px]">
            <div className="transition-all duration-1000 ease-in-out">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  {slides[currentSlide].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to={slides[currentSlide].href}
                    className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${slides[currentSlide].color} text-white font-bold rounded-lg hover:opacity-90 transition-all duration-200 transform hover:scale-105`}
                  >
                    {slides[currentSlide].cta}
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    to="/ai-2026-content-library"
                    className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-200 border border-white/30"
                  >
                    View All Content
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-gray-300 text-lg">Advanced Articles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">15,000%</div>
            <div className="text-gray-300 text-lg">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">99.8%</div>
            <div className="text-gray-300 text-lg">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-gray-300 text-lg">Possibilities</div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Neural Interfaces</h3>
            <p className="text-gray-300">
              Direct brain-computer interfaces with 95% accuracy for seamless human-AI interaction
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold text-green-400 mb-3">Quantum AI</h3>
            <p className="text-gray-300">
              Quantum-enhanced neural networks delivering exponential computational improvements
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold text-blue-400 mb-3">Edge Computing</h3>
            <p className="text-gray-300">
              Advanced edge AI optimization for maximum efficiency and real-time processing
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Master AI 2026?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the AI revolution and unlock unprecedented business potential with our advanced content library. 
              Get instant access to breakthrough technologies and proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ai-2026-content-access"
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 text-lg"
              >
                🚀 Get Instant Access
              </Link>
              <Link
                to="/ai-2026-roi-calculator"
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105 text-lg"
              >
                🧮 Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-5 h-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </div>
  );
};

export default NewContent2026PromotionBanner;