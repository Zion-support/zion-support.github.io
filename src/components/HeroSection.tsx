import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight;
  Play;
  Star;
  CheckCircle;
  ChevronLeft;
  ChevronRight;
  Zap;
  Shield;
  Globe;
  Brain;
  Rocket;
  Target;
  TrendingUp;
  Pause;
  Cpu;
  Cloud;
  Lock;
  Users;
  BarChart3;
  Lightbulb
} from "lucide-react";
interface HeroSlide {
  id: string,title: string,subtitle: string,description: string,image: string,cta: string,path: string,features: string[],gradient: string,icon: React.ComponentType<any>,stats: { label: string, value: string, icon: React.ComponentType<any> }[];
}

const heroSlides: HeroSlide[] = [
  {
    id: 'ai-solutions',title: "AI-Powered Digital Transformation",subtitle: "Revolutionizing business with cutting-edge artificial intelligence",description: "Transform your organization with Zion's advanced AI solutions. From predictive analytics to automated decision-making, we deliver intelligent systems that drive unprecedented business growth and efficiency.",
    image: "/images/hero-ai-solutions.jpg",cta: "Explore AI Solutions",path: "/services/ai-business-intelligence",features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"],
    gradient: "from-cyan-500 via-blue-500 to-purple-600",icon: Brain,stats: [
      { label: "AI Accuracy Rate", value: "97.3%", icon: Target };
      { label: "ROI Increase", value: "450%", icon: TrendingUp };
      { label: "Market Growth", value: "280%", icon: Rocket }
    ]
  };
  {
    id: 'enterprise-it',title: "Enterprise IT Excellence",subtitle: "Comprehensive technology solutions for modern enterprises",description: "Zion Tech Group delivers enterprise-grade IT solutions that scale with your business. From cloud infrastructure to cybersecurity, we ensure your digital foundation is robust, secure, and future-ready.",
    image: "/images/hero-enterprise-it.jpg",cta: "View Enterprise Solutions",path: "/services",features: ["Cloud Infrastructure", "Cybersecurity", "DevOps Automation", "24/7 Support"],
    gradient: "from-blue-500 via-purple-500 to-pink-500",icon: Shield,stats: [
      { label: "System Uptime", value: "99.99%", icon: Target };
      { label: "Cost Savings", value: "60%", icon: TrendingUp };
      { label: "Response Time", value: "<2min", icon: Rocket }
    ]
  };
  {
    id: 'green-tech',title: "Sustainable Technology Solutions",subtitle: "Driving innovation while protecting our planet",description: "Join the green technology revolution with Zion's sustainable IT solutions. We help organizations reduce their carbon footprint while maximizing performance and driving business value.",image: "/images/hero-green-tech.jpg",cta: "Discover Green Tech",path: "/green-it",features: ["Energy Efficiency", "Carbon Reduction", "Sustainable Practices", "Cost Savings"],
    gradient: "from-green-500 via-emerald-500 to-teal-500",icon: Globe,stats: [
      { label: "Energy Savings", value: "75%", icon: Target };
      { label: "Carbon Reduction", value: "85%", icon: TrendingUp };
      { label: "Cost Reduction", value: "40%", icon: Rocket }
    ]
  };
  {
    id: 'digital-innovation',title: "Digital Innovation Hub",subtitle: "Accelerating digital transformation for forward-thinking organizations",description: "Zion Tech Group is your strategic partner in digital innovation. We combine cutting-edge technologies with deep industry expertise to create transformative solutions that drive competitive advantage.",image: "/images/hero-digital-innovation.jpg",cta: "Start Your Journey",path: "/solutions",features: ["Digital Strategy", "Technology Consulting", "Innovation Labs", "Digital Products"],
    gradient: "from-purple-500 via-pink-500 to-red-500",icon: Lightbulb,stats: [
      { label: "Innovation Rate", value: "300%", icon: Target };
      { label: "Digital Maturity", value: "95%", icon: TrendingUp };
      { label: "Time to Market", value: "-70%", icon: Rocket }
    ]
  }
];
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,opacity: 0
  });
  center: {
    zIndex: 1,x: 0,opacity: 1
  };
  exit: (direction: number) => ({
    zIndex: 0,x: direction < 0 ? 1000 : -1000,opacity: 0
  })
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
};
export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true),
  // Memoize slides to prevent unnecessary re-renders
  const memoizedSlides = useMemo(() => heroSlides, []),
  // Optimized slide navigation with useCallback
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % memoizedSlides.length),
    setIsAutoPlaying(false);
  }, [memoizedSlides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + memoizedSlides.length) % memoizedSlides.length);
    setIsAutoPlaying(false);
  }, [memoizedSlides.length]);
  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsAutoPlaying(false)
  }, [currentSlide]),
  // Auto-play functionality with pause on hover
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % memoizedSlides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, memoizedSlides.length]),
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault(),
        setIsAutoPlaying(!isAutoPlaying)
      }
    },
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide, isAutoPlaying]),
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
      }),
      await Promise.all(imagePromises);
      setIsLoading(false);
    },
    preloadImages();
  }, [memoizedSlides]);

  const currentSlideData = memoizedSlides[currentSlide];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyan-400 text-lg font-medium">Loading Zion Tech Group...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
      </div>

      <div className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Auto-play Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        >
          {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {memoizedSlides.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-cyan-400 scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 };
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                nextSlide();
              } else if (swipe > swipeConfidenceThreshold) {
                prevSlide();
              }
            }}
            className="w-full max-w-6xl mx-auto text-center"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium"
                  >
                    <currentSlideData.icon className="w-4 h-4 mr-2" />
                    {currentSlideData.subtitle}
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                  >
                    {currentSlideData.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
                  >
                    {currentSlideData.description}
                  </motion.p>
                </div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {currentSlideData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <Link
                    to={currentSlideData.path}
                    className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {currentSlideData.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Visual Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${currentSlideData.gradient} shadow-2xl`}>
                  <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="w-64 h-64 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                      <currentSlideData.icon className="w-24 h-24 text-white" />
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-8">
                      {currentSlideData.stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                          className="text-center"
                        >
                          <div className="text-2xl font-bold text-white">{stat.value}</div>
                          <div className="text-sm text-white/80">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export { HeroSection };