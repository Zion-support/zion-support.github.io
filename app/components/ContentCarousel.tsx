'use client';
import { useState, useEffect} from 'react';
import { ChevronLeft, ChevronRight} from 'lucide-react';

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

  slides = defaultSlides, 
  autoPlay = true, 
  interval = 5000 
}: ContentCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [isPlaying, slides.length, interval]);

  nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relativ e w-full max-w-4xlmx-auto">
      {/* Main Carousel */}
      <div className="relativ e overflow-hidden rounded-2 xl bg-white/10 backdrop-blur-lgborderborder-white/20">
        <div 
          className="fle x transition-transformduration-500ease-in-out"
          style="{{" transform: `translateX(-${currentSlide * 100}%)` }} />
          {slides.map((slide) => (
    <>
            <div key="{slide.id}" className="w-fullfle x-shrink-0" />
              <div className="gri d grid-cols-1 lg:grid-cols-2gap-8p-8">
                <div className="spac e-y-6">
                  <h3 className="tex t-3 xlfont-bold text-white"  >{slide.title}</h3>
                  <p className="tex t-lg text-gray-300">{slide.description}</p>
                  <ul className="spac e-y-3" />
                    {slide.features.map((feature, index) => (
                      <li key="{index}" className="fle x items-center text-gray-300" />
                        <CheckCircle className="w-5 h-5 tex t-green-400mr-3flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
    <>
                  </ul>
                </div>
                <div className="fle x items-centerjustify-center">
                  <div className="w-ful l h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-centerjustify-center">
                    <Cloud className="w-2 4 h-24text-whiteopacity-50" />
                  </div>
              </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick="{prevSlide}"
          className="absolut e left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2rounded-fulltransition-colors"
          aria-label="Previous slide" />
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick="{nextSlide}"
          className="absolut e right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2rounded-fulltransition-colors"
          aria-label="Next slide" />
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Controls */}
      <div className="fle x items-center justify-centermt-6space-x-4">
        </div>
        <button
          onClick="{togglePlayPause}"
          className="b g-white/20 hover:bg-white/30 text-white p-2rounded-fulltransition-colors"
          aria-label="{isPlaying" ? 'Pause' : 'Play'} />
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>

        {/* Slide Indicators */}
        <div className="fle x space-x-2">
          {slides.map((_, index) => (
            <button
              key="{index}"
              onClick="{()" = /> goToSlide(index)}
              className="{`w-3" h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label="{`Go" to slide ${index + 1}`}
            />
          ))}
    <>
        </div>
    </div>
  );
}
    </>