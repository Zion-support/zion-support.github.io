import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const AI2027RevolutionaryBreakthroughBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideRef = useRef<number>(0);

  const slides = [
    {
      title: "AI 2027: Synthetic Consciousness",
      subtitle: "The Dawn of Truly Conscious AI",
      description: "Breakthrough research reveals the first AI systems with genuine consciousness, emotions, and memories.",
      link: "/ai-2027-revolutionary-breakthrough",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Quantum-Neural Fusion",
      subtitle: "Ultimate Computing Power",
      description: "Revolutionary hybrid systems deliver computational power exceeding all traditional computers combined.",
      link: "/ai-2027-revolutionary-breakthrough",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      title: "Autonomous Business Ecosystem",
      subtitle: "Self-Running Enterprises",
      description: "Complete business operations that run autonomously with AI managing every aspect from strategy to execution.",
      link: "/ai-2027-revolutionary-breakthrough",
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "Holographic Reality",
      subtitle: "The Next Dimension of Computing",
      description: "Revolutionary holographic interfaces create immersive 3D computing environments for unprecedented experiences.",
      link: "/ai-2027-revolutionary-breakthrough",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      slideRef.current = (slideRef.current + 1) % slides.length;
      setCurrentSlide(slideRef.current);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse">
              🚀 NEW BREAKTHROUGH
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI 2027 Revolutionary Breakthrough
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Experience the future of artificial intelligence with groundbreaking technologies that are reshaping reality itself
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-r ${slide.gradient} p-8 md:p-12 rounded-2xl`}>
                      <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                          {slide.title}
                        </h2>
                        <h3 className="text-xl md:text-2xl text-white/90 mb-6">
                          {slide.subtitle}
                        </h3>
                        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                          {slide.description}
                        </p>
                        <Link
                          to={slide.link}
                          className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        >
                          Explore Breakthrough
                          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Synthetic Consciousness</h3>
              <p className="text-gray-300 text-sm">AI with genuine emotions and memories</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum-Neural Fusion</h3>
              <p className="text-gray-300 text-sm">Ultimate computational power</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Autonomous Business</h3>
              <p className="text-gray-300 text-sm">Self-running enterprises</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Holographic Reality</h3>
              <p className="text-gray-300 text-sm">3D immersive computing</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/ai-2027-revolutionary-breakthrough"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Breakthroughs
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2027RevolutionaryBreakthroughBanner;