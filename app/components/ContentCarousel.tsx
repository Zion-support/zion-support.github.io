'use client';
import { useState, useEffect} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface Slide {
  id: number;,
  title: string;,
  description: string;,
  image: string;,
  features: string[];
}
interface ContentCarouselProps {
  slides?: Slide[];
  autoPlay?: boolean;
  interval?: number;
}
const defaultSlides: Slide[] = [
  {
    id: 1,
    title: 'AI-Powered Solutions',
    description: 'Transform your business with cutting-edge artificial intelligence technologies.',
    image: '/api/placeholder/600/400',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision']
  },
  {
    id: 2,
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions for modern businesses.',
    image: '/api/placeholder/600/400',
    features: ['Scalable Architecture', '99.9% Uptime', 'Global CDN']
  },
  {
    id: 3,
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive security solutions.',
    image: '/api/placeholder/600/400',
    features: ['Threat Detection', 'Security Audits', 'Compliance Management']
  }
];
  const slides = defaultSlides, 
  autoPlay = true, 
  interval = 5000 
}: ContentCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [isPlaying, slides.length, interval]);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <d iv c las sNa me="r e lat ive w-f ull m ax-w-4x lmx-auto">
        <button
          o nCl ick="{togglePlayPause}"
          c las sNa me="b g-w hite/20 h over:bg-w hite/30 t ext-w hit-e p-2rounded-f ulltransition-colors"
          aria-label="{isPlaying" ? 'Pause' : 'Play'} />
          {isPlaying ? <Pause c las sNa me="w-5h-5" /> : <Play c las sNa me="w-5h-5" />}
        </button>
        {/* Slide I ndi cat ors */}
        <d iv c las sNa me="f l ex s pace-x-2">          {slides.m ap((_, index) => (
            <button
              key="{index}"
              o nCl ick="{()" = /> goToSlide(index)}
              c las sNa me="{`w-3" h-3 rounded-f ull transition-colors ${
                index === currentSlide ? 'bg-w hite' : 'bg-w hite/30'
              }`}
              aria-label="{`Go" to slide ${index + 1}`}
            />
          ))}
    <>
        </d iv>
    </d iv>
  );
}
    </>