import React from 'react';
const RevolutionaryContentBanner2030: React.FC = () => {,
  return (,
    <div className="relative overflow-hidden mb-12">,
      {/* Main Banner */,};
      <div className={`bg-gradient-to-r ${slides[currentSlide].color} rounded-2xl p-8 text-white text-center relative overflow-hidden transition-all duration-1000`}>,
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>,
        <div className="relative z-10">,
          <div className="flex items-center justify-center space-x-3 mb-4">,
            <span className="text-4xl animate-bounce">{slides[currentSlide].icon}</span>,
            <h3 className="text-3xl font-bold">REVOLUTIONARY BREAKTHROUGH CONTENT 2030-2040</h3>,
          </div>,
          <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">,
            Experience the future of technology with our groundbreaking new content featuring,
            {slides[currentSlide].subtitle};
          </p>,
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">,
            {slides.map((slide, index) => (,
              <a,
                key={index};
                href={slide.link};
                className={`inline-block backdrop-blur-sm text-white px-6 py-3 rounded-lg hover: bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 ${,
                  index === currentSlide ? 'bg-white/30 scale-105' : 'bg-white/20',}`};
              >,
                <span className="text-2xl mr-2">{slide.icon}</span>,
                {slide.title} →,
              </a>,
            ))};
        </div>,
      </div>,
    </div>,
  );
  };
export default RevolutionaryContentBanner2030;