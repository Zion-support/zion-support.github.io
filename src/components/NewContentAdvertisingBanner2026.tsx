import React, { useState, useEffect } from 'react';
const NewContentAdvertisingBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const announcements = [
    {
      id: 1,
      title: "🚀 Revolutionary AI Services 2026",
      description: "Discover our latest autonomous business AI, quantum ML platforms, and conscious AI systems",
      link: "/pages/NewContentShowcase2026",
      color: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "🧠 Neural Interface Technology",
      description: "Direct brain-computer interfaces enabling human-AI symbiosis",
      link: "/pages/NeuralInterfaceTechnology2026",
      color: "from-green-600 to-teal-600"
    },
    {
      id: 3,
      title: "⚡ Edge AI Revolution",
      description: "Bringing intelligence to every device with ultra-low latency processing",
      link: "/pages/EdgeAIandIoT2025",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 4,
      title: "🔮 Quantum-Enhanced ML",
      description: "1000x faster machine learning with quantum computing breakthroughs",
      link: "/pages/QuantumComputingRevolution2026",
      color: "from-purple-600 to-pink-600"
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const currentAnnouncement = announcements[currentSlide];
  return (
    <div className="relative overflow-hidden">
      <div className={`bg-gradient-to-r ${currentAnnouncement.color} text-white py-4 px-6 transform transition-all duration-500 ease-in-out`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-1">
                {currentAnnouncement.title}
              </h3>
              <p className="text-sm opacity-90">
                {currentAnnouncement.description}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={currentAnnouncement.link}
              className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 text-sm"
            >
              Explore Now
            </a>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % announcements.length)}
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Slide indicators */}
      <div className="absolute bottom-2 right-6 flex space-x-2">
        {announcements.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );

};


export default NewContentAdvertisingBanner2026;
