import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Star, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight,
  Zap,
  Shield,
  Globe,
  Brain,
  Rocket,
  Target,
  TrendingUp,
  Pause,
  Volume2,
  VolumeX
} from 'lucide-react';

interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  path: string;
  features: string[];
  gradient: string;
  icon: React.ComponentType<any>;
  stats: { label: string; value: string; icon: React.ComponentType<any> }[];
}

export default function EnhancedHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const heroSlides: HeroSlide[] = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/services/ai-business-intelligence",
      features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"],
      gradient: "from-zion-cyan via-zion-purple to-zion-blue",
      icon: Brain,
      stats: [
        { label: "Accuracy Rate", value: "95%+", icon: Target },
        { label: "ROI Increase", value: "450%", icon: TrendingUp },
        { label: "Market Growth", value: "280%", icon: Rocket }
      ]
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",
      image: "/images/hero-it-services.jpg",
      cta: "View Our Services",
      path: "/services",
      features: ["Cloud Infrastructure", "Cybersecurity", "DevOps Automation", "24/7 Support"],
      gradient: "from-zion-blue via-zion-cyan to-zion-purple",
      icon: Shield,
      stats: [
        { label: "Uptime", value: "99.99%", icon: Target },
        { label: "Cost Savings", value: "700%", icon: TrendingUp },
        { label: "Response Time", value: "<5min", icon: Rocket }
      ]
    },
    {
      title: "Green IT Solutions",
      subtitle: "Sustainable technology for a better future",
      description: "Implement eco-friendly IT solutions that reduce your carbon footprint while maintaining performance and driving business value.",
      image: "/images/hero-green-it.jpg",
      cta: "Learn More",
      path: "/green-it",
      features: ["Energy Efficiency", "Carbon Reduction", "Sustainable Practices", "Cost Savings"],
      gradient: "from-zion-cyan via-zion-blue to-zion-purple",
      icon: Globe,
      stats: [
        { label: "Energy Savings", value: "60%", icon: Target },
        { label: "Carbon Reduction", value: "75%", icon: TrendingUp },
        { label: "Cost Reduction", value: "40%", icon: Rocket }
      ]
    }
  ];

  // Memoized slide change function for better performance
  const changeSlide = useCallback((direction: 'next' | 'prev') => {
    setCurrentSlide((prev) => {
      if (direction === 'next') {
        return (prev + 1) % heroSlides.length;
      } else {
        return prev === 0 ? heroSlides.length - 1 : prev - 1;
      }
    });
    setIsAutoPlaying(false);
  }, [heroSlides.length]);

  // Auto-play functionality with better performance
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        changeSlide('prev');
      } else if (e.key === 'ArrowRight') {
        changeSlide('next');
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlaying(!isAutoPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [changeSlide, isAutoPlaying]);

  // Preload next image for better performance
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % heroSlides.length;
    const nextImage = new Image();
    nextImage.src = heroSlides[nextIndex].image;
  }, [currentSlide, heroSlides]);

  const toggleAutoPlay = () => setIsAutoPlaying(!isAutoPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  // Loading state management
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="relative h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin-slow w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full mx-auto mb-4"></div>
          <h2 className="text-zion-cyan text-xl font-rajdhani">Loading Zion Tech Group</h2>
        </div>
      </div>
    );
  }

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(140,21,233,0.1),transparent_50%)]"></div>
      </div>

      {/* Controls */}
      <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
        <button
          onClick={toggleAutoPlay}
          className="p-2 rounded-full bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/20 transition-all duration-300"
          aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <button
          onClick={toggleMute}
          className="p-2 rounded-full bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/20 transition-all duration-300"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-zion-cyan scale-125'
                : 'bg-zion-cyan/30 hover:bg-zion-cyan/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => changeSlide('prev')}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/20 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => changeSlide('next')}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/20 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative h-full flex items-center"
        >
          <div className="container-responsive relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white space-y-6"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${heroSlides[currentSlide].gradient}`}>
                    <heroSlides[currentSlide].icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-zion-cyan font-rajdhani font-medium">
                    {heroSlides[currentSlide].subtitle}
                  </span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-orbitron font-bold leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  {heroSlides[currentSlide].description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 max-w-md">
                  {heroSlides[currentSlide].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link
                    to={heroSlides[currentSlide].path}
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-rajdhani font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-zion-cyan/25"
                  >
                    <span>{heroSlides[currentSlide].cta}</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Stats & Visual */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {heroSlides[currentSlide].stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="text-center p-4 rounded-lg bg-zion-slate/30 backdrop-blur-sm border border-zion-cyan/20"
                    >
                      <div className="flex justify-center mb-2">
                        <stat.icon className="w-6 h-6 text-zion-cyan" />
                      </div>
                      <div className="text-2xl font-orbitron font-bold text-zion-cyan">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400 font-rajdhani">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Hero Image Placeholder */}
                <div className="relative">
                  <div className="w-full h-64 lg:h-80 rounded-2xl bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 flex items-center justify-center">
                    <div className="text-center text-zion-cyan/60">
                      <heroSlides[currentSlide].icon className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-sm font-rajdhani">Hero Visual</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-zion-slate/30">
        <motion.div
          className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </section>
  );
}