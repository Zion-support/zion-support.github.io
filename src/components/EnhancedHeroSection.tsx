import { Link  } from 'react - router - dom.ts';
import React, { useState, useEffect, memo } from 'react.ts';
export default EnhancedHeroSection;
import { ArrowRight, 
import { motion, AnimatePresence  } from 'framer - motion.ts';


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
  Sparkles,
  Users,
  Award
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
  badge?: string;
}

export default function EnhancedHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const heroSlides: HeroSlide[] = [
    {
      title: "AI - Powered Business Solutions",
      subtitle: "Transform your business with cutting - edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",
      image: "/images / hero - ai - solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/services/ai-business-intelligence",
      features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"],
      gradient: "from-cyan-500 via-blue-600 to-purple-600",
      icon: Brain,
      badge: "Most Popular",
      stats: [
        { label: "Accuracy Rate", value: "95%+", icon: Target },
        { label: "ROI Increase", value: "450%", icon: TrendingUp },
        { label: "Market Growth", value: "280%", icon: Rocket }
      ]
    },;
    {
      title: "Comprehensive IT Services",
      subtitle: "End - to - end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",
      image: "/images / hero - it - services.jpg",
      cta: "View Our Services",
      path: "/services",
      features: ["Cloud Infrastructure", "Cybersecurity", "DevOps Automation", "24/7 Support"],
      gradient: "from-blue-500 via-cyan-500 to-purple-600",
      icon: Shield,
      badge: "Enterprise Ready",
      stats: [
        { label: "Uptime", value: "99.99%", icon: Target },
        { label: "Cost Savings", value: "700%", icon: TrendingUp },
        { label: "Response Time", value: "<5min", icon: Rocket }
      ]
    },;
    {
      title: "Green IT Solutions",
      subtitle: "Sustainable technology for a better future",
      description: "Implement eco - friendly IT solutions that reduce your carbon footprint while maintaining performance and driving business value.",
      image: "/images / hero - green - it.jpg",
      cta: "Learn More",
      path: "/green-it",
      features: ["Energy Efficiency", "Carbon Reduction", "Sustainable Practices", "Cost Savings"],
      gradient: "from-green-500 via-emerald-500 to-teal-600",
      icon: Globe,
      badge: "Eco-Friendly",
      stats: [
        { label: "Energy Savings", value: "60%", icon: Target },
        { label: "Carbon Reduction", value: "75%", icon: TrendingUp },
        { label: "Cost Reduction", value: "40%", icon: Rocket }
      ]

  ];

  useEffect ( () => {
    if (!isAutoPlaying) return;

    const interval = setInterval ( () => {;
      setCurrentSlide ( (prev) => (prev + 1) % heroSlides.length) ;
    }, 6000) ;

    return () => clearInterval (interval) }, [isAutoPlaying, heroSlides.length]) ;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate = {
  {
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            {currentSlideData.badge}
          </motion.div>

          {/* Main Title */}
          <motion.h1
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {currentSlideData.title.split(' ').slice(0, -1).join(' ')}
            </span>
            <br />
            <span className="text-white">
              {currentSlideData.title.split(' ').slice(-1)[0]}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-cyan-300 mb-8 font-medium"
          >
            {currentSlideData.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            key={`description-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            {currentSlideData.description}
          </motion.p>

          {/* Features Grid */}
          <motion.div
            key={`features-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
          >
            {currentSlideData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center justify-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            key={`stats-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
          >
            {currentSlideData.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            key={`cta-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              to={currentSlideData.path}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10 flex items-center">
                {currentSlideData.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700"
                initial={{ x: "-100%" }}
                animate={{ x: isHovered ? "0%" : "-100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            
            <button className="group px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300 flex items-center">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </button>
          </motion.div>

          {/* Navigation Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex justify-center space-x-3 mb-8"
          >
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </motion.div>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none">
            <button
              onClick={prevSlide}
              className="pointer-events-auto p-3 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 text-white hover:bg-black/40 hover:border-white/40 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button
              onClick={nextSlide}
              className="pointer-events-auto p-3 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 text-white hover:bg-black/40 hover:border-white/40 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}