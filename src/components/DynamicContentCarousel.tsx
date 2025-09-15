import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DynamicContentCarousel: React.FC = () => {

>>>>>>> cursor/create-and-deploy-new-content-c963
    }
  ];

  useEffect(() => {


    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, contentItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 text-white overflow-hidden">
      {/* Background Effects */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      
      <div className="relative z-10">
        {/* Header */}
    <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 DYNAMIC CONTENT • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">Revolutionary Technology Showcase</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced technologies that are reshaping our world with immersive interactive features
          </p>
        </div>

        {/* Main Carousel */}
    <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content */}
    <div className="space-y-8">
                <div className={`bg-gradient-to-br ${contentItems[currentIndex].gradient} p-8 rounded-2xl`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-6xl">{contentItems[currentIndex].icon}</div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        {contentItems[currentIndex].isNew && (
                          <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full font-semibold">NEW</span>
                        )}
                        {contentItems[currentIndex].isLive && (
                          <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full font-semibold animate-pulse">LIVE</span>
                        )}
                      </div>
                      <h3 className="text-4xl font-bold mb-2">{contentItems[currentIndex].title}</h3>
                      <p className="text-xl opacity-90 mb-4">{contentItems[currentIndex].description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(contentItems[currentIndex].stats).map(([key, value], index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                        <div className="text-sm font-semibold">{value}</div>
                        <div className="text-xs opacity-80 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={contentItems[currentIndex].link}
                      className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg"
                    >
                      Explore Technology →
                    </a>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 text-lg">
                      Watch Demo
                    </button>
                  </div>
                </div>
              </div>


        </div>
      </div>
    </div>
  );
};


export default DynamicContentCarousel;
