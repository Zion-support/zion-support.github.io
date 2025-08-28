import React, { useState, useEffect, useCallback, useMemo } from 'react';
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
  Pause
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
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const HeroSection: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = heroSlides[page];

  const paginate = useCallback((newDirection: number) => {
    setPage([(page + newDirection + heroSlides.length) % heroSlides.length, newDirection]);
  }, [page]);

  const handlePlayPause = useCallback(() => {
    if (isPaused) {
      setIsPaused(false);
      setIsPlaying(true);
    } else {
      setIsPaused(true);
      setIsPlaying(false);
    }
  }, [isPaused]);

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying || isPaused) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, isPaused, paginate]);

  // Pause on hover
  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  const dragEnd = useCallback((e: any, { offset, velocity }: any) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  }, [paginate]);

  // Preload next image for better performance
  const nextImageIndex = (page + 1) % heroSlides.length;
  const nextImage = heroSlides[nextImageIndex]?.image;

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="banner"
      aria-label="Hero section with rotating slides"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      {/* Preload next image */}
      {nextImage && (
        <link rel="preload" as="image" href={nextImage} />
      )}

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="space-y-6"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 text-zion-cyan text-sm font-medium"
                >
                  <currentSlide.icon className="w-4 h-4 mr-2" />
                  {currentSlide.subtitle}
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  {currentSlide.title.split(' ').map((word, index) => (
                    <span key={index} className="block">
                      {word}
                    </span>
                  ))}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                >
                  {currentSlide.description}
                </motion.p>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-3 justify-center lg:justify-start"
                >
                  {currentSlide.features.map((feature, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm border border-white/20"
                    >
                      <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                      {feature}
                    </span>
                  ))}
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="grid grid-cols-3 gap-4 pt-4"
                >
                  {currentSlide.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-zion-cyan">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="pt-6"
                >
                  <Link
                    to={currentSlide.path}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                    aria-label={`${currentSlide.cta} - ${currentSlide.title}`}
                  >
                    {currentSlide.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="relative"
              >
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    className="w-full h-[500px] object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent`} />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentSlide.gradient} opacity-20`} />
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full opacity-80 blur-xl"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-zion-purple to-zion-pink rounded-full opacity-60 blur-xl"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          {/* Play/Pause Button */}
          <button
            onClick={handlePlayPause}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? (
              <Play className="w-5 h-5 text-white" />
            ) : (
              <Pause className="w-5 h-5 text-white" />
            )}
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setPage([index, index > page ? 1 : -1])}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === page 
                    ? 'bg-zion-cyan w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === page ? "true" : "false"}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 right-8 text-white/60"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};
