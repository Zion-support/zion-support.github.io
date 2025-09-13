import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Rocket, 
  Brain, 
  Shield, 
  Cloud, 
  Globe, 
  Code, 
  Database, 
  Cpu,
  TrendingUp,
  Users,
  Award,
  Star,
  ArrowRight,
  Play,
  Download,
  Share2,
  Heart,
  Bookmark,
  Clock,
  Eye,
  MessageCircle,
  X,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  CheckCircle,
  Lightbulb,
  Target,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';

const UltimateContentPromotionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [autoSlide, setAutoSlide] = useState(true);

  const promotionalContent = [
    {
      id: 1,
      title: "🚀 Revolutionary AI Automation Suite",
      subtitle: "Transform Your Business Operations",
      description: "Cut operational costs by 40-60% and boost productivity by 300% with our AI-powered automation platform. ROI guaranteed within 3 months!",
      features: [
        "Intelligent workflow automation",
        "Natural language processing",
        "Predictive analytics",
        "Real-time optimization"
      ],
      cta: "Start Free Trial",
      ctaSecondary: "Watch Demo",
      badge: "Most Popular",
      badgeColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      gradient: "from-blue-600 via-purple-600 to-pink-600",
      icon: Brain,
      stats: { savings: "40-60%", productivity: "300%", roi: "3 months" }
    },
    {
      id: 2,
      title: "🛡️ Advanced Cybersecurity Platform",
      subtitle: "Protect Your Digital Assets",
      description: "Next-generation threat detection that identifies and neutralizes threats 90% faster with 70% fewer false positives. Enterprise-grade security.",
      features: [
        "AI-powered threat hunting",
        "Behavioral analysis",
        "Zero-day detection",
        "Automated response"
      ],
      cta: "Get Security Audit",
      ctaSecondary: "View Features",
      badge: "Enterprise Grade",
      badgeColor: "bg-gradient-to-r from-red-400 to-pink-500",
      gradient: "from-red-600 via-orange-600 to-yellow-600",
      icon: Shield,
      stats: { detection: "90% faster", accuracy: "95%", monitoring: "24/7" }
    },
    {
      id: 3,
      title: "☁️ Cloud Infrastructure Automation",
      subtitle: "Scale Without Limits",
      description: "Complete cloud management solution that reduces infrastructure costs by 40% and enables 10x faster deployments with automated scaling.",
      features: [
        "Infrastructure as Code",
        "Auto-scaling capabilities",
        "Cost optimization",
        "Disaster recovery"
      ],
      cta: "Deploy Now",
      ctaSecondary: "Calculate Savings",
      badge: "Cloud Native",
      badgeColor: "bg-gradient-to-r from-blue-400 to-cyan-500",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      icon: Cloud,
      stats: { savings: "40%", deployment: "10x faster", uptime: "99.9%" }
    },
    {
      id: 4,
      title: "⚛️ Quantum Computing Solutions",
      subtitle: "Future of Computing Today",
      description: "Revolutionary quantum algorithms for solving complex optimization problems with quantum advantage. Access the next generation of computing.",
      features: [
        "Quantum circuit design",
        "Algorithm optimization",
        "Cryptography solutions",
        "Research collaboration"
      ],
      cta: "Explore Quantum",
      ctaSecondary: "Learn More",
      badge: "Next Gen",
      badgeColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: Zap,
      stats: { advantage: "Quantum", problems: "Complex", future: "Proof" }
    }
  ];

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [autoSlide, promotionalContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    setAutoSlide(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promotionalContent.length) % promotionalContent.length);
    setAutoSlide(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoSlide(false);
  };

  if (!isVisible) return null;

  const currentContent = promotionalContent[currentSlide];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%253E%253Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%253E%253Cg%20fill%3D%22%25239C92AC%22%20fill-opacity%3D%220.1%22%253E%253Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-30"></div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 z-20 p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              {/* Content */}
              <div className="flex-1 max-w-4xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2">
                      <span className={`px-3 py-1 ${currentContent.badgeColor} text-white text-sm font-bold rounded-full`}>
                        {currentContent.badge}
                      </span>
                      <div className="flex items-center gap-1">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-blue-200">Limited Time Offer</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                      {currentContent.title}
                    </h2>

                    {/* Subtitle */}
                    <h3 className="text-xl text-blue-200 font-semibold">
                      {currentContent.subtitle}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
                      {currentContent.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-4">
                      {currentContent.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-blue-200">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6">
                      {Object.entries(currentContent.stats).map(([key, value], index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-white">{value}</div>
                          <div className="text-sm text-blue-200 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-8 py-3 bg-gradient-to-r ${currentContent.gradient} text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
                      >
                        {currentContent.cta}
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center gap-2 border border-white/20"
                      >
                        <Play className="w-4 h-4" />
                        {currentContent.ctaSecondary}
                      </motion.button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4 ml-8">
                {/* Previous Button */}
                <button
                  onClick={prevSlide}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {promotionalContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <motion.div
              className="h-full bg-white/30"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 8, ease: "linear" }}
              key={currentSlide}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UltimateContentPromotionBanner;