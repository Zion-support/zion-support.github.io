'use client';

import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

const InteractiveContentPromotionBanner = () => {
  const [currentSlidesetCurrentSlide] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  const slides = [
    {
      title: "🚀 AI Revolution 2025",
      subtitle: "Transform Your Business with Cutting-Edge AI",
      description: "Discover how our AI solutions are helping companies achieve 500% efficiency gains and unprecedented growth.",
      cta: "Explore AI Solutions",
      link: "/services/ai-automation",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      bgPattern: "🔮✨🌟"
    },
    {
      title: "⚛️ Quantum Computing Breakthrough",
      subtitle: "Next-Generation Processing Power",
      description: "Experience the future of computing with our quantum-powered solutions that process data 1000x faster.",
      cta: "Learn More",
      link: "/services/quantum-computing",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      bgPattern: "⚡💫🌌"
    },
    {
      title: "🧠 Neural Interface Technology",
      subtitle: "The Future of Human-Computer Interaction",
      description: "Connect directly with technology through our revolutionary neural interface systems.",
      cta: "Discover Innovation",
      link: "/services/neural-interfaces",
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      bgPattern: "🧬🔬💡"
    },
    {
      title: "🌱 Sustainable AI Solutions",
      subtitle: "Green Technology for a Better Tomorrow",
      description: "Build environmentally conscious AI systems that drive growth while protecting our planet.",
      cta: "Go Green",
      link: "/services/sustainable-ai",
      gradient: "from-emerald-600 via-green-600 to-lime-600",
      bgPattern: "🌿🍃🌍"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }5000);
    return () => clearInterval(interval);
  }[slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.gradient} opacity-90 transition-all duration-1000`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="text-6xl font-bold text-white/20 transform rotate-12 -translate-x-4 -translate-y-4">
              {currentSlideData.bgPattern}
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">✨ FEATURED CONTENT</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              {currentSlideData.title}
            </h2>
            
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white/90">
              {currentSlideData.subtitle}
            </h3>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white/80 leading-relaxed">
              {currentSlideData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href={currentSlideData.link}
                className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {currentSlideData.cta}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View All Content
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-bounce">
        <div className="text-4xl opacity-20">🚀</div>
      </div>
      <div className="absolute top-1/3 right-10 animate-bounce delay-1000">
        <div className="text-4xl opacity-20">⚡</div>
      </div>
      <div className="absolute bottom-1/4 left-20 animate-bounce delay-2000">
        <div className="text-4xl opacity-20">💫</div>
      </div>
      <div className="absolute bottom-1/3 right-20 animate-bounce delay-500">
        <div className="text-4xl opacity-20">🌟</div>
      </div>
    </section>
  );
};

export default InteractiveContentPromotionBanner;