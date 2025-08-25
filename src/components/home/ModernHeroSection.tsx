import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight,
  Star,
  CheckCircle,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  path: string;
  features: string[];
  icon: React.ComponentType<any>;
  gradient: string;
}

const ModernHeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const heroSlides: HeroSlide[] = [
    {
      id: 1,
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/ai-solutions",
      features: ["Machine Learning", "Predictive Analytics", "Process Automation"],
      icon: Brain,
      gradient: "from-blue-600 via-purple-600 to-cyan-600"
    },
    {
      id: 2,
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed.",
      image: "/images/hero-it-services.jpg",
      cta: "View Our Services",
      path: "/services",
      features: ["Cloud Infrastructure", "Cybersecurity", "Digital Transformation"],
      icon: Shield,
      gradient: "from-green-600 via-emerald-600 to-teal-600"
    },
    {
      id: 3,
      title: "Micro-SaaS Solutions",
      subtitle: "Scalable software solutions for growing businesses",
      description: "Custom SaaS applications designed to streamline operations and boost productivity.",
      image: "/images/hero-saas.jpg",
      cta: "Learn More",
      path: "/services/micro-saas-solutions",
      features: ["Custom Development", "Scalable Architecture", "24/7 Support"],
      icon: Cloud,
      gradient: "from-orange-600 via-red-600 to-pink-600"
    }
  ];

  const stats = [
    { icon: Star, value: "500+", label: "Happy Clients", color: "text-yellow-500" },
    { icon: CheckCircle, value: "95%", label: "Success Rate", color: "text-green-500" },
    { icon: Zap, value: "10+", label: "Years Experience", color: "text-blue-500" },
    { icon: Rocket, value: "25+", label: "Countries Served", color: "text-purple-500" }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isPaused && !isHovered) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isPaused, isHovered, heroSlides.length]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById('hero-section');
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    setIsPaused(false);
  };

  const pauseAutoPlay = () => {
    setIsPaused(true);
  };

  const resumeAutoPlay = () => {
    setIsPaused(false);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section 
      id="hero-section"
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-10" />
        
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm"
            >
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Trusted by 500+ Companies Worldwide
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {currentSlideData.title}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl lg:text-2xl text-gray-300 font-medium"
            >
              {currentSlideData.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gray-400 leading-relaxed max-w-2xl"
            >
              {currentSlideData.description}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap gap-3"
            >
              {currentSlideData.features.map((feature, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white text-sm backdrop-blur-sm"
                >
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  {feature}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to={currentSlideData.path}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                {currentSlideData.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={currentSlideData.image}
                    alt={currentSlideData.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Icon Badge */}
                <div className={`absolute top-6 right-6 p-4 bg-gradient-to-r ${currentSlideData.gradient} rounded-full shadow-2xl`}>
                  <currentSlideData.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute -bottom-8 left-0 right-0"
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center"
                    >
                      <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Slide Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex items-center justify-center mt-16 space-x-6"
        >
          {/* Previous/Next Buttons */}
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={toggleAutoPlay}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300 hover:scale-110"
          >
            {isAutoPlaying && !isPaused ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>

        {/* Slide Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="flex justify-center mt-8 space-x-3"
        >
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModernHeroSection;