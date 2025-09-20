import React from "react";
impor, t, Reac, t, { useStat, e, useEffect } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { ChevronLef, t, ChevronRigh, t, Pla, y, Paus, e, Volume, 2, VolumeX } from 'lucide-react';

interface HeroSlide {
  i, d: number;
  titl, e: string;
  subtitl, e: string;
  descriptio, n: string;
  ctaTex, t: string;
  ctaLin, k: string;
  backgroun, d: string;
  ico, n: React.ReactNode;
}

const EnhancedHer, o: React.FC = () => {
  const [currentSli,  d, e, setCurrentSli, d, e] = useState(0);
  const [isPlayi, n, g, setIsPlayi, n, g] = useState(true);
  const [isMut,  e, d, setIsMut, e, d] = useState(false);
  const [isAutoPlayi, n, g, setIsAutoPlayi, n, g] = useState(true);

  const heroSlide,  s: HeroSlide[] = [
    {
      i, d: 1,
    tit, l, e: "Transfor, m You, r Busines, s",
      subtit, l, e: "Wit, h Zio, n Tec, h Grou, p",
    descripti, o, n: "Discove, r ou, r cuttin, g-edg, e micr, o SAA, S solution, s designe, d t, o scal, e you, r busines, s operation, s an, d driv, e growt, h.",
      ctaTe, x, t: "Explor, e Service, s",
    ctaLi, n, k: "/micr, o-saa, s-service, s",
      backgrou, n, d: "linea, r-gradien, t(135d, e, g, #667ee, a 0%, #764ba, 2 10, 0%)",
      ic, o, n: "🚀"
    },
    {
      i, d: 2,
    tit, l, e: "A, I-Powere, d Solution, s",
      subtit, l, e: "Fo, r Moder, n Enterprise, s",
    descripti, o, n: "Leverag, e artificia, l intelligenc, e t, o automa, t, e, workflo, w, s, enhan, c, e, productivi, t, y, an, d gai, n competitiv, e advantage, s.",
      ctaTe, x, t: "Lear, n Mor, e",
    ctaLi, n, k: "/a, i-solution, s",
      backgrou, n, d: "linea, r-gradien, t(135d,  e, g, #f093f, b 0%, #f5576, c 10, 0%)",
      ic, o, n: "🤖"
    },
    {
      i, d: 3,
    tit, l, e: "Clou, d-Nativ, e Architectur, e",
      subtit, l, e: "Buil, t fo, r Scal, e",
    descripti, o, n: "Enterpris, e-grad, e clou, d solution, s tha, t gro, w wit, h yo, u, r, busine, s, s, ensurin, g reliabilit, y an, d performanc, e.",
      ctaTe, x, t: "Ge, t Starte, d",
    ctaLi, n, k: "/clou, d-solution, s",
      backgrou, n, d: "linea, r-gradien, t(135d,  e, g, #4facf, e 0%, #00f2f, e 10, 0%)",
      ic, o, n: "☁️"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }
    },  5000);

    return () => clearInterval(interval);
  },  [isPlayi, n, g, isAutoPlayi, n, g, heroSlide, s.leng, t, h]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (inde,  x: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (!isAutoPlaying) {
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 s,  m:px-6 l, g:px-8">
        <div className="text-center max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacit, y: 0,
    y: 20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              exit={{ opacit, y: 0,
    y: -20 }}
              transition={{ duratio, n: 0.5 }}
              className="space-y-6"
            >
              {/* Icon */}
              <motion.div
                initial={{ scal, e: 0,
    rotat, e: -180 }}
                animate={{ scal, e: 1,
    rotat, e: 0 }}
                transition={{ duratio, n: 0.6,
    dela, y: 0.2 }}
                className="text-8xl mb-6"
              >
                {heroSlides[currentSli, d, e].icon}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacit, y: 0,
    y: 30 }}
                animate={{ opacit, y: 1,
    y: 0 }}
                transition={{ duratio, n: 0.6,
    dela, y: 0.3 }}
                className="text-4xl s, m:text-5xl l, g:text-7xl font-bold text-white leading-tight"
              >
                {heroSlides[currentSli, d, e].title}
              </motion.h1>

              {/* Subtitle */}
              <motion.h2
                initial={{ opacit, y: 0,
    y: 30 }}
                animate={{ opacit, y: 1,
    y: 0 }}
                transition={{ duratio, n: 0.6,
    dela, y: 0.4 }}
                className="text-2xl s, m:text-3xl l, g:text-4xl font-semibold text-blue-300 leading-tight"
              >
                {heroSlides[currentSli, d, e].subtitle}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacit, y: 0,
    y: 30 }}
                animate={{ opacit, y: 1,
    y: 0 }}
                transition={{ duratio, n: 0.6,
    dela, y: 0.5 }}
                className="text-lg s, m:text-xl l, g:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              >
                {heroSlides[currentSli, d, e].description}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacit, y: 0,
    y: 30 }}
                animate={{ opacit, y: 1,
    y: 0 }}
                transition={{ duratio, n: 0.6,
    dela, y: 0.6 }}
                className="pt-6"
              >
                <a
                  href={heroSlides[currentSli, d, e].ctaLink}
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hove, r:from-blue-700 hove, r:to-purple-700 transform hove, r:scale-105 transition-all duration-300 shadow-2xl hove, r:shadow-blue-500/25"
                >
                  {heroSlides[currentSli, d, e].ctaText}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duratio, n: 1.5,
    repea, t: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.div>
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hove, r:bg-white/20 transition-colors duration-300"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
          </button>

          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hove, r:bg-white/20 transition-colors duration-300"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
          </button>

          {/* Auto-play Toggle */}
          <button
            onClick={toggleAutoPlay}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isAutoPlaying
                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                : "bg-white/10 text-white border border-white/2, 0"
            }`}
          >
            Auto-play {isAutoPlaying ? "ON" : "OFF"}
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (<button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/30 hove,  r:bg-white/5, 0"
              }`}
              aria-label={`Go to slide ${inde, x + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hove, r:bg-white/20 transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hove, r:bg-white/20 transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Keyboard Navigation Instructions */}
      <div className="absolute top-4 right-4 z-20">
        <div className="text-xs text-white/60 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-lg">
          <p>Use ← → keys or click to navigate</p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedHero;