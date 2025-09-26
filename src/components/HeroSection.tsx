import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
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
  Cpu,
  Cloud,
  Lock,
  Users,
  BarChart3,
  Lightbulb
} from "lucide-react";

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
    title: "AI-Powered Digital Transformation",
    subtitle: "Revolutionizing business with cutting-edge artificial intelligence",
    description: "Transform your organization with Zion's advanced AI solutions. From predictive analytics to automated decision-making, we deliver intelligent systems that drive unprecedented business growth and efficiency.",
    image: "/images/hero-ai-solutions.jpg",
    cta: "Explore AI Solutions",
    path: "/services/ai-business-intelligence",
    features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"],
    gradient: "from-purple-600 via-blue-600 to-cyan-500",
    icon: Brain,
    stats: [
      { label: "AI Models Deployed", value: "500+", icon: Cpu },
      { label: "Accuracy Rate", value: "99.2%", icon: Target },
      { label: "Cost Reduction", value: "45%", icon: TrendingUp }
    ]
  },
  {
    id: 'cloud-infrastructure',
    title: "Scalable Cloud Infrastructure",
    subtitle: "Building resilient, high-performance cloud solutions",
    description: "Deploy and scale your applications with confidence. Our cloud infrastructure solutions ensure maximum uptime, security, and performance while reducing operational costs.",
    image: "/images/hero-cloud-infrastructure.jpg",
    cta: "View Cloud Services",
    path: "/services/cloud-infrastructure",
    features: ["Auto-scaling", "99.9% Uptime", "Global CDN", "Security First"],
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    icon: Cloud,
    stats: [
      { label: "Uptime Guarantee", value: "99.9%", icon: Shield },
      { label: "Global Regions", value: "25+", icon: Globe },
      { label: "Response Time", value: "<50ms", icon: Zap }
    ]
  },
  {
    id: 'cybersecurity',
    title: "Advanced Cybersecurity",
    subtitle: "Protecting your digital assets with enterprise-grade security",
    description: "Safeguard your organization against evolving cyber threats. Our comprehensive security solutions provide multi-layered protection and real-time threat detection.",
    image: "/images/hero-cybersecurity.jpg",
    cta: "Secure Your Business",
    path: "/services/cybersecurity",
    features: ["Threat Detection", "Zero Trust", "Compliance", "24/7 Monitoring"],
    gradient: "from-red-600 via-orange-600 to-yellow-500",
    icon: Shield,
    stats: [
      { label: "Threats Blocked", value: "1M+", icon: Lock },
      { label: "Security Score", value: "A+", icon: Star },
      { label: "Response Time", value: "<5min", icon: Zap }
    ]
  }
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const currentSlideData = useMemo(() => heroSlides[currentSlide], [currentSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white" />
              )}
            </button>
            
            <button
              onClick={prevSlide}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-6xl mx-auto"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-8 shadow-2xl"
            >
              <currentSlideData.icon className="w-10 h-10 text-white" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {currentSlideData.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto"
            >
              {currentSlideData.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              {currentSlideData.description}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {currentSlideData.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              {currentSlideData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to={currentSlideData.path}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <span>{currentSlideData.cta}</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;