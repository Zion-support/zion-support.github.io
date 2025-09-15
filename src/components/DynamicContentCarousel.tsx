import React, { useState, useEffect } from 'react';

const DynamicContentCarousel: React.FC = () => {
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
      
      {/* Header */}
      <div className="relative z-10 text-center mb-8">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-4 animate-pulse">
          🚀 REVOLUTIONARY 2026 TECHNOLOGIES
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">Cutting-Edge Technology Showcase</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover the most advanced technologies ever created - from consciousness AI to quantum internet
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-br ${slide.bgGradient} backdrop-blur-sm rounded-xl p-12 border border-white/20`}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="text-8xl mb-6">{slide.image}</div>
                      <h3 className="text-4xl font-bold text-white mb-6">{slide.title}</h3>
                      <p className="text-xl text-gray-200 mb-8">{slide.description}</p>
                      <div className="flex space-x-4">
                        <a 
                          href={slide.link}
                          className={`bg-gradient-to-r ${slide.gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                        >
                          Explore Technology →
                        </a>
                        <button className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                        <div className="text-6xl mb-4">{slide.image}</div>
                        <h4 className="text-2xl font-bold text-white mb-4">Key Features</h4>
                        <ul className="text-left space-y-2 text-gray-200">
                          <li>• Revolutionary breakthrough technology</li>
                          <li>• Industry-transforming capabilities</li>
                          <li>• Cutting-edge implementation</li>
                          <li>• Future-ready solutions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
=======
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, contentItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-96 overflow-hidden rounded-xl">
        {/* Main Content */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {contentItems.map((item, index) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 h-full relative"
            >
              <div className={`bg-gradient-to-br ${item.gradient} h-full rounded-xl flex items-center justify-center text-white relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
                  <div className="text-8xl mb-6 animate-bounce">{item.icon}</div>
                  <h3 className="text-4xl font-bold mb-6">{item.title}</h3>
                  <p className="text-xl opacity-90 mb-8">{item.description}</p>
                  <a
                    href={item.link}
                    className="inline-block bg-white text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
                  >
                    Explore {item.title.split(' ')[0]} →
                  </a>
                </div>
              </div>
            </div>
>>>>>>> cursor/create-and-deploy-new-content-f977
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel;