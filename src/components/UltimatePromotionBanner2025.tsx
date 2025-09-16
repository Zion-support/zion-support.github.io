import React, { useState, useEffect } from 'react';

const UltimatePromotionBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromo, setCurrentPromo] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "🚀 ULTIMATE TECH REVOLUTION 2025",
      subtitle: "Limited Time: 50% Off All Revolutionary Technologies",
      description: "Experience the most advanced AI, quantum computing, and neural interface technologies at unprecedented prices.",
      cta: "Get 50% Off Now",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 via-indigo-900 to-blue-900",
      icon: "🌟",
      discount: "50%",
      urgency: "Limited Time"
    },
    {
      id: 2,
      title: "⚛️ QUANTUM REALITY ENGINE",
      subtitle: "Exclusive: Free Quantum Computing Trial",
      description: "Be among the first to experience reality manipulation and parallel universe communication technology.",
      cta: "Start Free Trial",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900 via-blue-900 to-indigo-900",
      icon: "⚡",
      discount: "FREE",
      urgency: "Exclusive"
    },
    {
      id: 3,
      title: "🧠 NEURAL INTERFACE REVOLUTION",
      subtitle: "Early Access: Mind Control Technology",
      description: "Control devices with your mind and enhance your cognitive abilities with our revolutionary neural interfaces.",
      cta: "Join Early Access",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 via-teal-900 to-cyan-900",
      icon: "🧬",
      discount: "Early Access",
      urgency: "Exclusive"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [promotions.length]);

  const currentPromoData = promotions[currentPromo];

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`bg-gradient-to-r ${currentPromoData.bgColor} text-white py-6 mb-8 relative overflow-hidden transition-all duration-500`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="20" cy="20" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-3 right-3 text-white/70 hover:text-white transition-colors z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="text-3xl animate-pulse">{currentPromoData.icon}</div>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h2 className="text-2xl font-bold">{currentPromoData.title}</h2>
                <span className={`px-3 py-1 bg-gradient-to-r ${currentPromoData.color} text-white text-sm font-bold rounded-full animate-pulse`}>
                  {currentPromoData.discount}
                </span>
                <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                  {currentPromoData.urgency}
                </span>
              </div>
              <p className="text-lg opacity-90 mb-2">{currentPromoData.subtitle}</p>
              <p className="text-sm opacity-80">{currentPromoData.description}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className={`bg-gradient-to-r ${currentPromoData.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
              {currentPromoData.cta} →
            </button>
            <button className="text-white/80 hover:text-white transition-colors font-semibold text-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-white/20 rounded-full h-1">
            <div 
              className={`bg-gradient-to-r ${currentPromoData.color} h-1 rounded-full transition-all duration-1000`}
              style={{ width: `${((currentPromo + 1) / promotions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Promo Navigation */}
        <div className="flex justify-center space-x-2 mt-4">
          {promotions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPromo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPromo === index
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 left-4 text-xl opacity-20 animate-bounce">
        🚀
      </div>
      <div className="absolute top-4 right-16 text-xl opacity-20 animate-bounce delay-1000">
        ⚛️
      </div>
      <div className="absolute bottom-4 left-16 text-xl opacity-20 animate-bounce delay-2000">
        🧠
      </div>
    </div>
  );
};

export default UltimatePromotionBanner2025;