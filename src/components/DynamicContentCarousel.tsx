import React, { useState, useEffect } from 'react';

const DynamicContentCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const contentItems = [
    {
      title: "AI-Powered Automation",
      description: "Revolutionary AI systems that automate complex business processes",
      icon: "🤖",
      link: "/pages/AdvancedAITransformation2025"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum computing for complex problem solving",
      icon: "⚡",
      link: "/pages/QuantumComputingRevolution2025"
    },
    {
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces for enhanced capabilities",
      icon: "🧬",
      link: "/pages/NeuralInterfaceRevolution2025"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center">
        <div className="text-6xl mb-4">{contentItems[currentIndex].icon}</div>
        <h3 className="text-3xl font-bold mb-4">{contentItems[currentIndex].title}</h3>
        <p className="text-xl mb-6 max-w-2xl mx-auto">{contentItems[currentIndex].description}</p>
        <a 
          href={contentItems[currentIndex].link}
          className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
        >
          Explore Now →
        </a>
      </div>
      
      <div className="flex justify-center space-x-2 mt-6">
        {contentItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default DynamicContentCarousel;