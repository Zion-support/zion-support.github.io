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
  Pause,
  Sparkles,
  Users,
  Award,
  Clock
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
  badge?: string;
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
    badge: "Trending",
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
    badge: "Popular",
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
    badge: "New",
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

export const HeroSection: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    const newPage = (page + newDirection + heroSlides.length) % heroSlides.length;
    setPage([newPage, newDirection]);
    setCurrentSlide(newPage);
  }, [page]);

  const handleDragEnd = useCallback((e: any, { offset, velocity }: any) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  }, [paginate]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, paginate]);

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-futuristic">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark opacity-90" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-zion-cyan/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-zion-purple/10 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container-responsive relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badge */}
            {currentSlideData.badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-full px-4 py-2 text-zion-cyan text-sm font-medium backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4" />
                {currentSlideData.badge}
              </motion.div>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                {currentSlideData.title}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl lg:text-2xl text-zion-cyan/80 font-medium"
            >
              {currentSlideData.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-lg text-zion-cyan/60 leading-relaxed max-w-2xl"
            >
              {currentSlideData.description}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-2 gap-3 max-w-md"
            >
              {currentSlideData.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-zion-cyan/70"
                >
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span className="text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to={currentSlideData.path}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25"
              >
                <span>{currentSlideData.cta}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-zion-cyan to-zion-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Link>
              
              <button className="group inline-flex items-center gap-3 text-zion-cyan hover:text-zion-cyan/80 font-medium px-6 py-4 rounded-xl border border-zion-cyan/30 hover:border-zion-cyan/50 transition-all duration-300 backdrop-blur-sm">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-zion-cyan/20"
            >
              {currentSlideData.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl border border-zion-cyan/30">
                    <stat.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div className="text-2xl font-bold text-zion-cyan">{stat.value}</div>
                  <div className="text-sm text-zion-cyan/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Carousel Container */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.3 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={handleDragEnd}
                  className="absolute inset-0"
                >
                  <div className="relative w-full h-full">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20 rounded-2xl" />
                    
                    {/* Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-32 h-32 bg-gradient-to-br from-zion-cyan/30 to-zion-purple/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-zion-cyan/50"
                      >
                        <currentSlideData.icon className="w-16 h-16 text-zion-cyan" />
                      </motion.div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                      className="absolute top-10 right-10 w-20 h-20 bg-zion-purple/20 rounded-full blur-lg"
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute bottom-10 left-10 w-16 h-16 bg-zion-blue/20 rounded-full blur-lg"
                      animate={{
                        y: [0, 20, 0],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
              <button
                onClick={() => paginate(-1)}
                className="p-3 bg-zion-cyan/20 hover:bg-zion-cyan/30 border border-zion-cyan/30 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 text-zion-cyan" />
              </button>
              
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 bg-zion-purple/20 hover:bg-zion-purple/30 border border-zion-purple/30 rounded-full transition-all duration-300 hover:scale-110"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-zion-purple" />
                ) : (
                  <Play className="w-5 h-5 text-zion-purple" />
                )}
              </button>
              
              <button
                onClick={() => paginate(1)}
                className="p-3 bg-zion-cyan/20 hover:bg-zion-cyan/30 border border-zion-cyan/30 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 text-zion-cyan" />
              </button>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
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
                      ? 'bg-zion-cyan scale-125'
                      : 'bg-zion-cyan/30 hover:bg-zion-cyan/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-zion-cyan/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
