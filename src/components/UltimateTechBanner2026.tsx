import React, { useState, useEffect } from 'react';

const UltimateTechBanner2026: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const messages = [
    {
      text: "🌟 NEW: Ultimate Tech Revolution 2026 - Experience the convergence of all revolutionary technologies",
      action: "Explore Now",
      link: "/pages/UltimateTechRevolution2026",
      color: "from-purple-500 to-pink-500"
    },
    {
      text: "🧠 BREAKTHROUGH: Transcendent AI - Witness AI evolution beyond human comprehension",
      action: "Discover",
      link: "/pages/TranscendentAI2026",
      color: "from-cyan-500 to-blue-500"
    },
    {
      text: "📚 FEATURED: Revolutionary Tech Blog - Dive deep into groundbreaking innovations",
      action: "Read More",
      link: "/pages/RevolutionaryTechBlog2026",
      color: "from-emerald-500 to-teal-500"
    },
    {
      text: "⚛️ QUANTUM: Neural-Quantum Fusion - Infinite processing power beyond classical physics",
      action: "Learn More",
      link: "/pages/QuantumNeuralFusion2026",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [messages.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => {
      // Banner stays hidden for 30 seconds
      setTimeout(() => setIsVisible(true), 30000);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">LIVE</span>
              </div>
              <div className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <p className="text-lg font-medium">
                  {messages[currentMessage].text}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href={messages[currentMessage].link}
                className={`bg-gradient-to-r ${messages[currentMessage].color} text-white px-6 py-2 rounded-full text-sm font-bold hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                {messages[currentMessage].action} →
              </a>
              <button
                onClick={handleDismiss}
                className="text-gray-400 hover:text-white transition-colors p-1"
                title="Dismiss for 30 seconds"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
        <div className="absolute top-2 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="absolute top-2 right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-2 left-12 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default UltimateTechBanner2026;