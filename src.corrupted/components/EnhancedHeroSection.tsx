import React, { useState, useEffect } from "react";
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
  TrendingUp
} from "lucide-react";

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

  const heroSlides: HeroSlide[] = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/services/ai-business-intelligence",
      features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"],
      gradient: "from-blue-500 via-purple-500 to-cyan-500",
      icon: Brain,
      stats: [
        { label: "Accuracy Rate", value: "95%+", icon: Target },
        { label: "ROI Increase", value: "450%", icon: TrendingUp },
        { label: "Market Growth", value: "280%", icon: Rocket }
      ]
    },
    {
      title: "Quantum Computing Revolution",
      subtitle: "Unlock unprecedented computational power",
      description: "Harness the power of quantum computing to solve complex problems that are impossible for classical computers. Transform your industry with quantum algorithms and optimization.",
      image: "/images/hero-quantum-computing.jpg",
      cta: "Discover Quantum Solutions",
      path: "/services/quantum-computing",
      features: ["Quantum Algorithms", "Optimization", "Cryptography", "Simulation"],
      gradient: "from-purple-500 via-pink-500 to-indigo-500",
      icon: Zap,
      stats: [
        { label: "Processing Speed", value: "1Mx Faster", icon: Rocket },
        { label: "Problem Solving", value: "Exponential", icon: Brain },
        { label: "Innovation Rate", value: "300%", icon: TrendingUp }
      ]
    },
    {
      title: "Advanced Cybersecurity",
      subtitle: "Protect your digital assets with enterprise-grade security",
      description: "Comprehensive cybersecurity solutions that protect your organization from evolving threats. Our multi-layered approach ensures maximum protection and compliance.",
      image: "/images/hero-cybersecurity.jpg",
      cta: "Secure Your Business",
      path: "/services/cybersecurity",
      features: ["Threat Detection", "Zero Trust Architecture", "Compliance", "Incident Response"],
      gradient: "from-red-500 via-orange-500 to-yellow-500",
      icon: Shield,
      stats: [
        { label: "Threat Detection", value: "99.9%", icon: Shield },
        { label: "Response Time", value: "< 5min", icon: Zap },
        { label: "Compliance Rate", value: "100%", icon: CheckCircle }
      ]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentHeroData = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentHeroData.gradient} opacity-90`}>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            {currentHeroData.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto"
          >
            {currentHeroData.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-white/80 mb-12 max-w-3xl mx-auto"
          >
            {currentHeroData.description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-16"
          >
            <Link
              to={currentHeroData.path}
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              {currentHeroData.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {currentHeroData.stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <stat.icon className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {currentHeroData.features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-white text-sm font-medium">{feature}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}