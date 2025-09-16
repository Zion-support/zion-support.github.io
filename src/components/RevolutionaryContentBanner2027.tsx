import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentSlides = [
    {
      id: 1,
      title: "🚀 Revolutionary Tech Breakthrough 2027",
      description: "Experience the most significant technological advancement in human history",
      link: "/pages/RevolutionaryTechBreakthrough2027",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/90 to-pink-900/90"
    },
    {
      id: 2,
      title: "🌟 Ultimate Tech Revolution 2027",
      description: "Witness the convergence of all breakthrough technologies creating the most powerful revolution",
      link: "/pages/UltimateTechRevolution2027",
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-900/90 to-purple-900/90"
    },
    {
      id: 3,
      title: "🤖 Advanced AI Solutions 2027",
      description: "Discover the next generation of AI solutions with consciousness and unprecedented intelligence",
      link: "/pages/AdvancedAISolutions2027",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/90 to-blue-900/90"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentSlides.length]);

  const currentContent = contentSlides[currentSlide];

  return (
    <div className="relative overflow-hidden mb-12">
      <div className={`bg-gradient-to-r ${currentContent.bgGradient} backdrop-blur-sm transition-all duration-1000`}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold text-white animate-pulse">
                  🚀 NEW CONTENT 2027
                </div>
                <div className="text-white/80 text-sm">
                  Revolutionary Technology Showcase
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {currentContent.title}
              </h2>
              
              <p className="text-white/90 text-lg mb-6 max-w-2xl">
                {currentContent.description}
              </p>
              
              <div className="flex items-center space-x-4">
                <a 
                  href={currentContent.link}
                  className={`bg-gradient-to-r ${currentContent.gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                >
                  Explore Now →
                </a>
                <button className="text-white/80 hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="hidden md:block ml-8">
              <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                <div className="text-6xl">
                  {currentSlide === 0 && "🚀"}
                  {currentSlide === 1 && "🌟"}
                  {currentSlide === 2 && "🤖"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {contentSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % contentSlides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default RevolutionaryContentBanner2027;