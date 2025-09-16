import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Zap, Target, TrendingUp, Users } from 'lucide-react';

const EmbodiedAI2026Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('embodied-ai-2026-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate slides every 4 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('embodied-ai-2026-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const slides = [
    {
      title: "🚀 Embodied AI Revolution 2026",
      subtitle: "Physical AI Systems Reshaping Business Operations",
      metrics: "850% ROI • $12M Savings • 95% Quality Improvement",
      bgGradient: "from-purple-600 via-blue-600 to-cyan-600",
      textColor: "text-white",
      link: "/content/blog/ai-2026-embodied-ai-revolution-ultimate-guide"
    },
    {
      title: "🏭 Fortune 500 Success Story",
      subtitle: "Manufacturing Giant's Embodied AI Transformation",
      metrics: "340% Efficiency Gain • 99.2% Uptime • 3.7 Month Payback",
      bgGradient: "from-emerald-600 via-teal-600 to-blue-600",
      textColor: "text-white",
      link: "/content/case-studies/fortune-500-embodied-ai-transformation-850-roi-success"
    },
    {
      title: "📚 Complete Implementation Guide",
      subtitle: "From Strategy to 850% ROI - Master Guide Available",
      metrics: "28 Min Read • Step-by-Step • Proven Methodologies",
      bgGradient: "from-orange-600 via-red-600 to-pink-600",
      textColor: "text-white",
      link: "/content/resources/ai-2026-embodied-ai-implementation-master-guide"
    }
  ];

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative overflow-hidden">
      <div className={`bg-gradient-to-r ${currentSlideData.bgGradient} text-white py-6 px-4 relative`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-white opacity-8 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Main Content */}
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-3">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-semibold">NEW 2026</span>
                </div>
                <div className="flex space-x-1">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-40'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 animate-fade-in">
                    {currentSlideData.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-3 opacity-90 animate-slide-up">
                    {currentSlideData.subtitle}
                  </p>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-3 py-1 rounded-full">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-medium">{currentSlideData.metrics}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={currentSlideData.link}
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <span>Explore Content</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white bg-opacity-20 text-white rounded-lg font-semibold hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30"
                  >
                    <Users className="mr-2 w-4 h-4" />
                    <span>Get Consultation</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="ml-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-300"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 h-1 bg-white bg-opacity-20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-300 ease-linear"
              style={{ 
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
                animation: 'progress 4s linear infinite'
              }}
            />
          </div>
        </div>
      </div>

      {/* Additional Info Cards */}
      <div className="bg-gray-50 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Target className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Proven ROI</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Fortune 500 companies achieving 850% ROI with embodied AI implementations in manufacturing and operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Massive Efficiency</h3>
              </div>
              <p className="text-gray-600 text-sm">
                340% efficiency improvements, 95% quality enhancement, and 99.2% operational uptime with embodied AI systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Zap className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Complete Guide</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Comprehensive implementation master guide with step-by-step methodology for achieving 850% ROI.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
};

export default EmbodiedAI2026Banner;