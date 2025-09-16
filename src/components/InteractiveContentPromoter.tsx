import React, { useState, useEffect } from 'react';


const InteractiveContentPromoter: React.FC = () => {
  const [activePromotion, setActivePromotion] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const promotions = [
    {
      id: 1,
      title: "🚀 NEW: Advanced AI Transformation 2026",
      description: "Revolutionary AI platform with quantum-enhanced processing and autonomous decision making",
      cta: "Explore AI Revolution",
      link: "/pages/AdvancedAITransformation2026",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠",
      urgency: "BREAKTHROUGH"
    },
    {
      id: 2,
      title: "⚡ Next-Gen Tech Showcase 2026",
      description: "Interactive showcase of cutting-edge technologies reshaping our world",
      cta: "Discover Technologies",
      link: "/pages/NextGenTechShowcase2026",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚡",
      urgency: "FEATURED"
    },
    {
      id: 3,
      title: "📚 Revolutionary Tech Blog 2026",
      description: "Deep insights into breakthrough innovations and future technology trends",
      cta: "Read Latest Posts",
      link: "/pages/RevolutionaryTechBlog2026",
      gradient: "from-emerald-600 to-teal-600",
      icon: "📚",
      urgency: "EXCLUSIVE"
    },
    {
      id: 4,
      title: "⚛️ Quantum Computing Revolution",
      description: "Breakthrough quantum technology solving impossible problems in seconds",
      cta: "Go Quantum",
      link: "/pages/QuantumComputingRevolution2026",
      gradient: "from-indigo-600 to-purple-600",
      icon: "⚛️",
      urgency: "REVOLUTIONARY"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePromotion((prev) => (prev + 1) % promotions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [promotions.length]);

  if (!isVisible) return null;

  return (
    
      <div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.9 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        className="fixed bottom-6 right-6 z-50 max-w-sm"
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className={`bg-gradient-to-r ${promotions[activePromotion].gradient} p-4 text-white relative`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{promotions[activePromotion].icon}</span>
                <div>
                  <div className="text-xs font-semibold opacity-90">
                    {promotions[activePromotion].urgency}
                  </div>
                  <div className="text-sm font-bold">
                    {promotions[activePromotion].title}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-gray-600 text-sm mb-4">
              {promotions[activePromotion].description}
            </p>
            
            <div className="flex space-x-2">
              <a
                href={promotions[activePromotion].link}
                className={`flex-1 bg-gradient-to-r ${promotions[activePromotion].gradient} text-white px-4 py-2 rounded-lg text-sm font-semibold text-center hover:shadow-lg transition-all duration-300`}
              >
                {promotions[activePromotion].cta} →
              </a>
              <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                Later
              </button>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-1 mt-3">
              {promotions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePromotion(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activePromotion
                      ? 'bg-purple-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default InteractiveContentPromoter;