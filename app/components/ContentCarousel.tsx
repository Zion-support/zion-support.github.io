'use client';
import { useState, useEffect} from 'react';
import { ChevronLeft, ChevronRight} from 'lucide-react';
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
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
    <div className="relative w-full max-w-4xlmx-auto">
<<<<<<< HEAD
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2 xl bg-white/10 backdrop-blur-lgborderborder-white/20">
=======
        </div>
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2 xl bg-white/10 backdrop-blur-lgborderborder-white/20">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        <div 
          className="flex transition-transformduration-500ease-in-out"
          style="{{" transform: `translateX(-${currentSlide * 100}%)` }} />
          {slides.map((slide) => (
    <>
            <div key="{slide.id}" className="w-fullflex-shrink-0" />
              <div className="grid grid-cols-1 lg:grid-cols-2gap-8p-8">
<<<<<<< HEAD
                <div className="space-y-6">
                  <h3 className="text-3 xlfont-bold text-white"  >{slide.title}</h3>
                  <p className="text-lg text-gray-300">{slide.description}</p>
                  <ul className="space-y-3" />
                    {slide.features.map((feature, index) => (
                      <li key="{index}" className="flex items-center text-gray-300" />
                        <CheckCircle className="w-5 h-5 text-green-400mr-3flex-shrink-0" />
=======
        </div>
                <div className="space-y-6">
        </div>
                  <h3 className="text-3 xlfont-boldtext-white">{slide.title}</h3>
                  <p className="text-lgtext-gray-300">{slide.description}</p>
                  <ul className="space-y-3" />
                    {slide.features.map((feature, index) => (
    <>
                      <li key="{index}" className="flexitems-centertext-gray-300" />
                        <CheckCircle className="w-5 h-5 text-green-400mr-3flex-shrink-0" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                        {feature}
                      </li>
                    ))}
    <>
                  </ul>
                </div>
<<<<<<< HEAD
                <div className="flex items-centerjustify-center">
                  <div className="w-full h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-centerjustify-center">
                    <Cloud className="w-24 h-24text-whiteopacity-50" />
=======
                <div className="flexitems-centerjustify-center" />
                  <div className="w-full h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flexitems-centerjustify-center">
        </div>
                    <Cloud className="w-24 h-24text-whiteopacity-50" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                  </div>
              </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick="{prevSlide}"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2rounded-fulltransition-colors"
          aria-label="Previous slide" />
<<<<<<< HEAD
          <ChevronLeft className="w-6h-6" />
=======
    <>
          <ChevronLeft className="w-6h-6" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        </button>
        <button
          onClick="{nextSlide}"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2rounded-fulltransition-colors"
          aria-label="Next slide" />
<<<<<<< HEAD
          <ChevronRight className="w-6h-6" />
=======
    <>
          <ChevronRight className="w-6h-6" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        </button>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-centermt-6space-x-4">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        <button
          onClick="{togglePlayPause}"
          className="bg-white/20 hover:bg-white/30 text-white p-2rounded-fulltransition-colors"
          aria-label="{isPlaying" ? 'Pause' : 'Play'} />
<<<<<<< HEAD
          {isPlaying ? <Pause className="w-5h-5" /> : <Play className="w-5h-5" />}
        </button>

        {/* Slide Indicators */}
        <div className="flex space-x-2">
=======
    <>
          {isPlaying ? <Pause className="w-5h-5" / /> : <Play className="w-5h-5" / />}
        </button>

        {/* Slide Indicators */}
        <div className="flexspace-x-2">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
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