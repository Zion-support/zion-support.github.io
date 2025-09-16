import React, { useState, useEffect } from 'react';

const DynamicContentCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselItems = [
    {
      id: 1,
      title: "AI Innovation 2025",
      description: "Latest AI breakthroughs and applications",
      image: "🤖",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      id: 2,
      title: "Quantum Computing",
      description: "Revolutionary quantum technologies",
      image: "⚡",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Neural Interfaces",
      description: "Brain-computer interface solutions",
      image: "🧠",
      gradient: "from-pink-500 to-red-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Dynamic Content Carousel</h3>
      <div className="relative overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className={`bg-gradient-to-r ${item.gradient} text-white p-8 rounded-lg text-center`}>
                <div className="text-6xl mb-4">{item.image}</div>
                <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
                <p className="text-lg opacity-90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel;