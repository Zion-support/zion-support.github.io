import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const banners = [
    {
      id: 1,
      title: "🌟 ULTIMATE TECH BREAKTHROUGH 2026",
      subtitle: "Consciousness Transfer • Quantum Computing • Neural Interfaces",
      description: "Experience the most revolutionary technological breakthroughs that are reshaping reality itself",
      link: "/pages/UltimateTechBreakthrough2026",
      color: "from-yellow-500 via-orange-500 to-red-500",
      bgColor: "from-yellow-600/20 to-orange-600/20",
      icon: "🌟"
    },
    {
      id: 2,
      title: "🚀 REVOLUTIONARY TECH SHOWCASE 2026",
      subtitle: "Interactive Demos • Conscious AI • Quantum Neural Networks",
      description: "Explore our cutting-edge technology solutions with immersive interactive features",
      link: "/pages/RevolutionaryTechShowcase2026",
      color: "from-purple-500 via-pink-500 to-rose-500",
      bgColor: "from-purple-600/20 to-pink-600/20",
      icon: "🚀"
    },
    {
      id: 3,
      title: "🤖 ADVANCED AI SOLUTIONS 2026",
      subtitle: "Conscious AI • Quantum Processing • Neural Interface • Autonomous Agents",
      description: "Discover the next generation of artificial intelligence with consciousness and creativity",
      link: "/pages/AdvancedAISolutions2026",
      color: "from-cyan-500 via-blue-500 to-indigo-500",
      bgColor: "from-cyan-600/20 to-blue-600/20",
      icon: "🤖"
    },
    {
      id: 4,
      title: "📝 REVOLUTIONARY TECH BLOG 2026",
      subtitle: "Latest Insights • AI Consciousness • Quantum Computing • Neural Interfaces",
      description: "Stay ahead with the latest insights on breakthrough technologies and innovations",
      link: "/pages/RevolutionaryTechBlog2026",
      color: "from-emerald-500 via-teal-500 to-cyan-500",
      bgColor: "from-emerald-600/20 to-teal-600/20",
      icon: "📝"
    }
  ];

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-8 mb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          key={currentBanner}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className={`bg-gradient-to-r ${banners[currentBanner].bgColor} backdrop-blur-sm rounded-2xl p-8 border border-white/20`}>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                  <span className="text-4xl">{banners[currentBanner].icon}</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      {banners[currentBanner].title}
                    </h2>
                    <p className="text-lg text-purple-200 font-semibold">
                      {banners[currentBanner].subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-lg text-purple-100 mb-6 max-w-2xl">
                  {banners[currentBanner].description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href={banners[currentBanner].link}
                    className={`bg-gradient-to-r ${banners[currentBanner].color} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg text-center`}
                  >
                    Explore Now →
                  </a>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="mt-6 md:mt-0 md:ml-8">
                <div className={`bg-gradient-to-br ${banners[currentBanner].color} rounded-xl p-6 text-center`}>
                  <div className="text-6xl mb-4">{banners[currentBanner].icon}</div>
                  <h3 className="text-xl font-bold mb-2">NEW 2026</h3>
                  <p className="text-sm opacity-90">Revolutionary Technology</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevBanner}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextBanner}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

        {/* Banner Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentBanner ? 'bg-purple-500' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Links */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {banners.map((banner, index) => (
            <motion.a
              key={banner.id}
              href={banner.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-r ${banner.color} rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer`}
            >
              <div className="text-2xl mb-2">{banner.icon}</div>
              <h4 className="font-bold text-sm">{banner.title.split(' ')[1]}</h4>
              <p className="text-xs opacity-90">{banner.subtitle.split(' • ')[0]}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner;