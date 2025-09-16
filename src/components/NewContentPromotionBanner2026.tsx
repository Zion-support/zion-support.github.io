import React, { useState, useEffect } from 'react';

const NewContentPromotionBanner2026: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const promotions = [
    {
      title: "🚀 AI Revolutionary Breakthrough 2026",
      description: "Discover the most advanced AI technologies transforming industries worldwide",
      badge: "NEW",
      color: "from-purple-600 to-blue-600",
      link: "/ai-revolutionary-breakthrough-2026",
      cta: "Explore Now"
    },
    {
      title: "⚡ Quantum Computing Revolution",
      description: "Witness quantum supremacy and unlimited processing power",
      badge: "BREAKTHROUGH",
      color: "from-cyan-600 to-purple-600",
      link: "/quantum-computing-revolution-2026",
      cta: "Learn More"
    },
    {
      title: "🧠 Emotional Intelligence AI",
      description: "Human-level AI understanding with unprecedented capabilities",
      badge: "REVOLUTIONARY",
      color: "from-emerald-600 to-teal-600",
      link: "/emotional-intelligence-ai",
      cta: "Discover"
    },
    {
      title: "🎯 Autonomous Learning Systems",
      description: "Self-improving AI that continuously adapts without intervention",
      badge: "ADVANCED",
      color: "from-orange-600 to-red-600",
      link: "/autonomous-learning-systems",
      cta: "Explore"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [promotions.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 py-12">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-1"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Revolutionary Content 2026
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explore cutting-edge technologies and breakthrough innovations that are reshaping our world
              </p>
            </div>
          </div>

          {/* Promotion Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPromo * 100}%)` }}
              >
                {promotions.map((promo, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-r ${promo.color} p-8 md:p-12 rounded-2xl relative overflow-hidden`}>
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
                      </div>
                      
                      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-2/3 mb-6 md:mb-0">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                              {promo.badge}
                            </span>
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {promo.title}
                          </h3>
                          <p className="text-lg text-white/90 max-w-2xl">
                            {promo.description}
                          </p>
                        </div>
                        
                        <div className="md:w-1/3 text-center md:text-right">
                          <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30">
                            {promo.cta}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {promotions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPromo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPromo ? 'bg-cyan-400 w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-gray-300">New Articles</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-white mb-1">100K+</div>
              <div className="text-sm text-gray-300">Monthly Readers</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-white mb-1">95%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-300">Content Updates</div>
            </div>
          </div>

          {/* Newsletter signup */}
          <div className="mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-lg mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Ahead of the Curve</h3>
              <p className="text-gray-300 mb-6">Get exclusive access to the latest revolutionary content and breakthrough innovations</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-3">No spam, unsubscribe at any time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2026;