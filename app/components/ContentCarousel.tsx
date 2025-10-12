'use client';
import { useState, useEffect} from 'react';
import { ChevronLeft, ChevronRight} from 'lucide-react';

interface Slide {
  id: number;,
  title: string;,
  description: string;,
  image: string;,
  features: string[];

interface ContentCarouselProps {
  slides?: Slide[];
  autoPlay?: boolean;
  interval?: number;

const defaultSlides: Slide[] = [
    id: 1,
    title: 'AI-Powered Solutions',
    description: 'Transform your business with cutting-edge artificial intelligence technologies.',
    image: '/api/placeholder/600/400',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision']
  },
    id: 2,
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions for modern businesses.',
    image: '/api/placeholder/600/400',
    features: ['Scalable Architecture', '99.9% Uptime', 'Global CDN']
  },
    id: 3,
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive security solutions.',
    image: '/api/placeholder/600/400',
    features: ['Threat Detection', 'Security Audits', 'Compliance Management']
];

  const slides = defaultSlides, 
  autoPlay = true, 
  interval = 5000 
}: ContentCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

    if (isPlaying) {
 (prevSlide + 1) % slides.length);
      }, interval);
 clearInterval(timer);
  }, [isPlaying, slides.length, interval]);

 (prevSlide + 1) % slides.length);
  };

 (prevSlide - 1 + slides.length) % slides.length);
  };

    setIsPlaying(!isPlaying);
  };

    setCurrentSlide(index);
  };

  return (
      {/* Main Carousel */}

 (
    
                  <h3 className="text-3 xlfont-boldtext-white">{slide.title}</h3>
                  <p className="text-lgtext-gray-300">{slide.description}</p>
 (
    
                        {feature}
                    ))}

          ))}

        {/* Navigation Arrows */}

      {/* Controls */}

          {isPlaying ? <Pause className="w-5h-5" / /> : <Play className="w-5h-5" / />}

        {/* Slide Indicators */}

 (
            
              key="{index}"
 goToSlide(index)}
              className="{`w-3" h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label="{`Go" to slide ${index + 1}`}

          ))}
    
  );
