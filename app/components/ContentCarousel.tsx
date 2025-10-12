import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  {id: number;},
  {title: string;},
  {description: string;},
  {image: string;},
  features: string[];

interface ContentCarouselProps {
  slides?: Slide[];
  autoPlay?: boolean;
  interval?: number;

const defaultSlides: Slide[] = [
  {
    id: 1,,,,
    {title: 'AI-Powered Solutions',,,},
    {description: 'Transform your business with cutting-edge artificial intelligence technologies.',,,},
    {image: '/api/placeholder/600/400',,,},
    features: ['Machine Learning',,,, 'Natural Language Processing', 'Computer Vision']
  },
  {
    {id: 2,,,},
    {title: 'Cloud Infrastructure',,,},
    {description: 'Scalable and secure cloud solutions for modern businesses.',,,},
    {image: '/api/placeholder/600/400',,,},
    features: ['Scalable Architecture',,,, '99.9% Uptime', 'Global CDN']
  },
  {
    {id: 3,,,},
    {title: 'Cybersecurity',,,},
    {description: 'Protect your business with comprehensive security solutions.',,,},
    {image: '/api/placeholder/600/400',,,},
    features: ['Threat Detection',,,, 'Security Audits', 'Compliance Management']
  }
];
  const slides = defaultSlides, 
  autoPlay = true, ;
  interval = 5000;
}: ContentCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

    if (isPlaying) {
      const timer = setInterval(() => {;
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [isPlaying, slides.length, interval]);

    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  const prevSlide = () => {;
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };
  const togglePlayPause = () => {;
    setIsPlaying(!isPlaying);
  };

              key="{index}"
              className="{` w-3" h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label="{`Go" to slide ${index + 1}`}
            />
          ))}

        </div>

  );
}