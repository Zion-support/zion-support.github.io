'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
}

interface ContentCarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, items.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!items || items.length === 0) {
    return <div>No items to display</div>;
  }

  return (
    <div className="content-carousel">
      <div className="carousel-container">
        {showArrows && (
          <button 
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        
        <div className="carousel-content">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            >
              {item.image && (
                <div className="carousel-image">
                  <img src={item.image} alt={item.title} />
                </div>
              )}
              <div className="carousel-text">
                <h3 className="carousel-title">{item.title}</h3>
                <p className="carousel-description">{item.description}</p>
                {item.link && (
                  <a href={item.link} className="carousel-link">
                    Learn More
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {showArrows && (
          <button 
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
      
      {showDots && (
        <div className="carousel-dots">
          {items.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentCarousel;