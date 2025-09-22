import React, { useState, useEffect } from 'react';

const EnhancedServiceCard = ({ service, index, isVisible, onHover }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const cardElement = document.getElementById(`service-card-${index}`);
    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => {
      if (cardElement) {
        observer.unobserve(cardElement);
      }
    };
  }, [index]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover?.(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover?.(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      // Handle service selection
      console.log('Selected service:', service.title);
    }
  };

  return (
    <div
      id={`service-card-${index}`}
      className="group relative"
      style={{
        opacity: isVisible && isInView ? 1 : 0,
        transform: isVisible && isInView ? 'translateY(0)' : 'translateY(50px)',
        transition: `all 0.6s ease-out ${index * 0.2}s`
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 hover:scale-105 hover:-translate-y-2"
        tabIndex={0}
        role="button"
        aria-label={`Learn more about ${service.title}`}
        onKeyDown={handleKeyDown}
        onClick={() => console.log('Selected service:', service.title)}
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div 
            className="text-6xl mb-6 text-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
            style={{
              transform: isVisible && isInView ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)',
              transition: `all 0.8s ease-out ${index * 0.2 + 0.3}s`
            }}
          >
            {service.icon}
          </div>

          {/* Title */}
          <h3
            className="text-2xl font-bold mb-4 text-center text-white group-hover:text-cyan-400 transition-colors duration-300"
            style={{
              opacity: isVisible && isInView ? 1 : 0,
              transform: isVisible && isInView ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.6s ease-out ${index * 0.2 + 0.5}s`
            }}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p
            className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors duration-300"
            style={{
              opacity: isVisible && isInView ? 1 : 0,
              transform: isVisible && isInView ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.6s ease-out ${index * 0.2 + 0.5}s`
            }}
          >
            {service.description}
          </p>

          {/* Hover effect indicator */}
          <div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(10px)'
            }}
          >
            <div className="flex items-center space-x-2 text-cyan-400 text-sm font-medium">
              <span>Learn More</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Animated border */}
        <div
          className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            padding: '2px'
          }}
        />

        {/* Loading shimmer effect */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-800"
          style={{
            transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)'
          }}
        />
      </div>
    </div>
  );
};

export default EnhancedServiceCard;