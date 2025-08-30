import React, { useState, useEffect, useCallback, useMemo } from 'react.ts';
import { motion, AnimatePresence             } from 'framer-motion.ts';
import { Link             } from 'react-router-dom.ts';
<<<<<<< HEAD
import { ArrowRight, Play, Star, Zap, Shield, Users, TrendingUp export function HeroSection(...args: any[]): any {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: Zap,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence for your business"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security and compliance standards"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "50+ certified professionals at your service"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "500+ successful projects delivered"

  ];
=======
import { ArrowRight,
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
            } from 'lucide-react.ts';

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
  stats: { label: string; value: string; icon: React.ComponentType<any> 











}[];
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

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
  enter: anyanyanyanyanyanyanyanyanyanyanyany(direction: number)             => ({
    x: anyanyanyanyanyanyanyanyanyanyanyanydirection > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number)             => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: anyanyanyanyanyanyanyanyanyanyanyanynumber, velocity: number)             => {
  return Math.abs(offset) * velocity;
};

export default function HeroSection(...args: any[]): any {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Memoize slides to prevent unnecessary re-renders
  const memoizedSlides = useMemo(() => heroSlides, []);

  // Optimized slide navigation with useCallback
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % memoizedSlides.length);
    setIsAutoPlaying(false);
  }, [memoizedSlides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + memoizedSlides.length) % memoizedSlides.length);
    setIsAutoPlaying(false);
  }, [memoizedSlides.length]);

  const goToSlide = useCallback((index: anyanyanyanyanyanyanyanyanyanyanyanynumber)             => {
    setDirection(index > currentSlide ? 1: anyanyanyanyanyanyanyanyanyanyanyany-1);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  }, [currentSlide]);

  // Auto-play functionality with pause on hover
  useEffect(()             => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % memoizedSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, memoizedSlides.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: anyanyanyanyanyanyanyanyanyanyanyanyKeyboardEvent)             => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlaying(!isAutoPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide, isAutoPlaying]);

  // Handle image loading
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = memoizedSlides.map(slide => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = slide.image;
        });
      });

      await Promise.all(imagePromises);
      setIsLoading(false);
    };

    preloadImages();
  }, [memoizedSlides]);

  const currentSlideData = memoizedSlides[currentSlide];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyan-400 text-lg">Loading amazing experiences...</p>
        </div>
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-20 w-2 h-2 bg-purple-400 rounded-full opacity-60"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm"

            <Star className="w-4 h-4 fill-current" />
            <span>Trusted by 500+ Companies Worldwide</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"

            Zion Tech Group
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"

            Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services that transform businesses
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"

            <Link
              to="/services"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"

              <span className="flex items-center gap-2">
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>

            <Link
              to="/contact"
              className="group px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"

              <span className="flex items-center gap-2">
                Get Started
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>

          {/* Feature Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto"

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-center gap-8 mb-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.5, scale: 0.8 }}
                    animate={{
                      opacity: currentFeature === index ? 1 : 0.5,
                      scale: currentFeature === index ? 1 : 0.8
                    }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center"

                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                      currentFeature === index
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                        : 'bg-white/10 text-gray-400'
                    }`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className={`text-sm font-semibold transition-colors duration-300 ${
                      currentFeature === index ? 'text-white' : 'text-gray-400'
                    }`}>
                      {feature.title}
                    </h3>
                  </motion.div>
                ))}
              </div>

=======
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                transition={{ duration: 0.5 }}
                className="text-center"

                <p className="text-gray-300 text-lg">
                  {features[currentFeature].description}
                </p>
=======
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium"
              >
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                Leading Technology Solutions
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {currentSlideData.title}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-xl text-slate-300 leading-relaxed"
              >
                {currentSlideData.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-lg text-slate-400 leading-relaxed"
              >
                {currentSlideData.description}
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-2 gap-3"
            >
              {currentSlideData.features.map((feature, index) => (
                <div key={feature} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to={currentSlideData.path}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                {currentSlideData.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>

              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="inline-flex items-center justify-center px-6 py-4 border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-medium rounded-lg transition-all duration-300"
                aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {currentSlideData.stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
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
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-8">
              <div className={`w-24 h-24 bg-gradient-to-br ${currentSlideData.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                <currentSlideData.icon className="w-12 h-12 text-white" />
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-white">{currentSlideData.title}</h3>
                <p className="text-slate-300">{currentSlideData.subtitle}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}}</motion.div>}
=======
      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {memoizedSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-cyan-400 scale-125'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/70 text-slate-300 hover:text-white transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/70 text-slate-300 hover:text-white transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}

export { HeroSection };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
