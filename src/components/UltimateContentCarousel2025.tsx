import React, { useState, useEffect } from 'react';
    {
      id: 1,
      title: "Ultimate Tech Revolution 2025",
      description: "Experience the most revolutionary technological breakthroughs that will reshape our world",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      link: "/pages/UltimateTechRevolution2025",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Breakthrough",
      description: "Witness groundbreaking technological breakthroughs that will revolutionize every aspect of human life",
      image: "⚡",
      gradient: "from-indigo-600/30 to-purple-600/30",
      border: "border-indigo-400/30",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      features: ["Neural Interface Revolution", "Quantum Wave Computing", "Predictive Intelligence"]
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      image: "🌟",
      gradient: "from-emerald-600/30 to-teal-600/30",
      border: "border-emerald-400/30",
      link: "/pages/NextGenInnovationHub2025",
      features: ["50+ Active Innovations", "99.9% Success Rate", "Infinite Possibilities"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  return (
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

          </div>
        </div>
      </div>
  );
};

export default UltimateContentCarousel2025;