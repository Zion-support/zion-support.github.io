import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

const AI2026NeuralInterfaceRevolutionBanner: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentSlidesetCurrentSlide] = useState(0);

  const content = [
    {
      title: "AI 2026: The Neural Interface Revolution",
      subtitle: "Ultimate Guide to 850% ROI Through Brain-Computer Integration",
      metrics: "850% ROI • $15.2M Savings • 99.7% Accuracy",
      url: "/blog/ai-2026-neural-interface-revolution-ultimate-guide",
      type: "blog",
      readingTime: "28 min read"
    },
    {
      title: "Fortune 500 Neural Interface Transformation",
      subtitle: "$8.2B Company Achieves 850% ROI in 18 Months",
      metrics: "850% ROI • $69.7M Savings • 98.7% Adoption",
      url: "/case-studies/fortune-500-neural-interface-transformation-850-roi-success",
      type: "case-study",
      readingTime: "22 min read"
    },
    {
      title: "AI 2026: Synthetic Consciousness Breakthrough",
      subtitle: "Ultimate Guide to 1,200% ROI Through Artificial General Intelligence",
      metrics: "1,200% ROI • $45.8M Savings • 99.9% Satisfaction",
      url: "/blog/ai-2026-synthetic-consciousness-breakthrough-ultimate-guide",
      type: "blog",
      readingTime: "32 min read"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }5000);

    return () => clearInterval(timer);
  }[]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2026-neural-interface-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }[]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai2026-neural-interface-banner-dismissed'true');
  };

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-12 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-cyan-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 rounded-full p-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold">🧠 AI 2026 NEURAL INTERFACE REVOLUTION</h2>
              <p className="text-sm opacity-90">Breakthrough Content Now Available</p>
            </div>
          </div>
          
          <button
            onClick={handleDismiss}
            className="text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Dismiss banner"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Content Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {currentContent.type.toUpperCase()}
                </span>
                <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-xs">
                  {currentContent.readingTime}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-lg mb-4 opacity-90">
                {currentContent.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="bg-green-500 bg-opacity-20 px-3 py-1 rounded-full text-sm">
                  🎯 {currentContent.metrics}
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Read Full Guide →
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="space-y-4">
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-green-400 mb-1">850%</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-blue-400 mb-1">$69.7M</div>
              <div className="text-sm opacity-90">Annual Savings</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-purple-400 mb-1">99.7%</div>
              <div className="text-sm opacity-90">Accuracy Rate</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-cyan-400 mb-1">98.7%</div>
              <div className="text-sm opacity-90">Adoption Rate</div>
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {content.map((_index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AI2026NeuralInterfaceRevolutionBanner;