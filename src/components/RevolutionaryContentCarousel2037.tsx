import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2037: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      link: "/pages/UltimateTechBreakthrough2037"
    },
      id: 2,
      link: "/pages/RevolutionaryTechShowcase2037"
      id: 3,
      link: "/pages/NextGenInnovationHub2037"
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);
  return (
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                }`}
              />
            ))}
          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
          >
            ←
          </button>
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            →
        </div>
          {slides.map((slide) => (
            <a
              key={slide.id}
              href={slide.link}
            </a>
          ))}
      </div>
    </div>
  );
};
export default RevolutionaryContentCarousel2037;
