import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
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
  Sparkles,
  Lightbulb,
  Cpu,
  Loader2
} from 'lucide-react';

interface HeroSlide {
  id: string;
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
  accentColor: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 'ai-solutions',
    title: "AI-Powered Business Solutions",
    subtitle: "Transform your business with cutting-edge artificial intelligence",
    description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",
    image: "/images/hero-ai-solutions.jpg",
    cta: "Explore AI Solutions",
    path: "/services/ai-business-intelligence",
    features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"],
    gradient: "from-zion-cyan via-zion-purple to-zion-blue",
    accentColor: "text-cyan-400",
    icon: Brain,
    stats: [
      { label: "Accuracy Rate", value: "95%+", icon: Target },
      { label: "ROI Increase", value: "450%", icon: TrendingUp },
      { label: "Market Growth", value: "280%", icon: Rocket }
    ]
  },
  {
    id: 'it-services',
    title: "Comprehensive IT Services",
    subtitle: "End-to-end technology solutions for modern businesses",
    description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",
    image: "/images/hero-it-services.jpg",
    cta: "View Our Services",
    path: "/services",
    features: ["Cloud Infrastructure", "Cybersecurity", "DevOps Automation", "24/7 Support"],
    gradient: "from-zion-blue via-zion-cyan to-zion-purple",
    accentColor: "text-blue-400",
    icon: Shield,
    stats: [
      { label: "Uptime", value: "99.99%", icon: Target },
      { label: "Cost Savings", value: "700%", icon: TrendingUp },
      { label: "Response Time", value: "<5min", icon: Rocket }
    ]
  },
  {
    id: 'green-it',
    title: "Green IT Solutions",
    subtitle: "Sustainable technology for a better future",
    description: "Implement eco-friendly IT solutions that reduce your carbon footprint while maintaining performance and driving business value.",
    image: "/images/hero-green-it.jpg",
    cta: "Learn More",
    path: "/green-it",
    features: ["Energy Efficiency", "Carbon Reduction", "Sustainable Practices", "Cost Savings"],
    gradient: "from-zion-cyan via-zion-blue to-zion-purple",
    accentColor: "text-green-400",
    icon: Globe,
    stats: [
      { label: "Energy Savings", value: "60%", icon: Target },
      { label: "Carbon Reduction", value: "75%", icon: TrendingUp },
      { label: "Cost Reduction", value: "40%", icon: Rocket }
    ]
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export function EnhancedHeroSection() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Performance optimization: Memoize current slide data
  const currentSlideData = useMemo(() => heroSlides[currentSlide], [currentSlide]);

  const paginate = useCallback((newDirection: number) => {
    const newPage = (currentSlide + newDirection + heroSlides.length) % heroSlides.length;
    setPage([newPage, newDirection]);
    setCurrentSlide(newPage);
  }, [currentSlide]);

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPlaying, paginate]);

  // Preload images for better performance
  useEffect(() => {
    const imagePromises = heroSlides.map(slide => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = resolve;
        img.src = slide.image;
      });
    });

    Promise.all(imagePromises).then(() => {
      setIsLoading(false);
    });
  }, []);

  const handleDragEnd = useCallback((e: any, { offset, velocity }: any) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  }, [paginate]);

  // Accessibility: Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        paginate(-1);
      } else if (e.key === 'ArrowRight') {
        paginate(1);
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate, isPlaying]);

  if (isLoading) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-cyan-400" />
          <p className="text-xl font-medium">Loading amazing content...</p>
          <p className="text-sm text-gray-400 mt-2">Powered by Zion Tech Group</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-sm font-medium text-cyan-300">
                    {currentSlideData.subtitle}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  <span className="text-white">{currentSlideData.title.split(' ').slice(0, -1).join(' ')}</span>
                  <span className={`${currentSlideData.accentColor} bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`}>
                    {' ' + currentSlideData.title.split(' ').slice(-1).join(' ')}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
                >
                  {currentSlideData.description}
                </motion.p>
              </div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-2 gap-3"
              >
                {currentSlideData.features.map((feature, index) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to={currentSlideData.path}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  {currentSlideData.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/5"
                  aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                {currentSlideData.stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Visual Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={currentSlideData.image}
                    alt={currentSlideData.title}
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <currentSlideData.icon className="w-10 h-10 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Zap className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const direction = index > currentSlide ? 1 : -1;
                setPage([index, direction]);
                setCurrentSlide(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-cyan-400 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}