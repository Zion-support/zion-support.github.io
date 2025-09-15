<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
ArrowRightClockTagStarSparkles

interface BannerItem {
  title: string;
  description: string;
  href: string;
  icon?: string;
  readTime?: string;
  isNew?: boolean;
  category?: string;
}

interface EnhancedContentBannerProps {
  title: string;
  subtitle: string;
  items: BannerItem[];
  ctaText: string;
  ctaHref: string;
  variant?: 'gradient' | 'solid' | 'outline';
  colorScheme?: 'blue' | 'green' | 'purple' | 'orange' | 'red';
  className?: string;
}

const EnhancedContentBanner: React.FC<EnhancedContentBannerProps> = ({
  title,
  subtitle,
  items,
  ctaText,
  ctaHref,
  variant = 'gradient',
  colorScheme = 'blue',
  className = ', '
}) => {
  const getColorClasses = (scheme: string) => {
    switch (scheme) {
      case 'blue':
        return {
          gradient: 'from-blue-600 to-purple-600',
          solid: 'bg-blue-600',
          outline: 'border-blue-600 text-blue-600',
          accent: 'text-blue-100',
          hover: 'hover:from-blue-700 hover:to-purple-700'
        };
      case 'green':
        return {
          gradient: 'from-green-600 to-emerald-600',
          solid: 'bg-green-600',
          outline: 'border-green-600 text-green-600',
          accent: 'text-green-100',
          hover: 'hover:from-green-700 hover:to-emerald-700'
        };
      case 'purple':
        return {
          gradient: 'from-purple-600 to-pink-600',
          solid: 'bg-purple-600',
          outline: 'border-purple-600 text-purple-600',
          accent: 'text-purple-100',
          hover: 'hover:from-purple-700 hover:to-pink-700'
        };
      case 'orange':
        return {
          gradient: 'from-orange-600 to-red-600',
          solid: 'bg-orange-600',
          outline: 'border-orange-600 text-orange-600',
          accent: 'text-orange-100',
          hover: 'hover:from-orange-700 hover:to-red-700'
        };
      case 'red':
        return {
          gradient: 'from-red-600 to-pink-600',
          solid: 'bg-red-600',
          outline: 'border-red-600 text-red-600',
          accent: 'text-red-100',
          hover: 'hover:from-red-700 hover:to-pink-700'
        };
      default:
        return {
          gradient: 'from-blue-600 to-purple-600',
          solid: 'bg-blue-600',
          outline: 'border-blue-600 text-blue-600',
          accent: 'text-blue-100',
          hover: 'hover:from-blue-700 hover:to-purple-700'
        };
    }
  };

  const colors = getColorClasses(colorScheme);

  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return `bg-gradient-to-r ${colors.gradient} text-white`;
      case 'solid':
        return `${colors.solid} text-white`;
      case 'outline':
        return `border-2 ${colors.outline} bg-white`;
      default:
        return `bg-gradient-to-r ${colors.gradient} text-white`;
    }
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className={`rounded-2xl p-8 md:p-12 ${getVariantClasses()}`}>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6" />
              <span className={`text-sm font-semibold ${colors.accent} opacity-90`}>
                Fresh Content
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Content Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {items.map((itemindex) => (
              <Link
                key={index}
                href={item.href}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                {/* New Badge */}
                {item.isNew && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full mb-4">
                    <Star className="w-3 h-3" />
                    New
                  </div>
                )}

                {/* Icon */}
                {item.icon && (
                  <div className="text-3xl mb-4">
                    {item.icon}
                  </div>
                )}

                {/* Category */}
                {item.category && (
                  <div className="flex items-center gap-1 mb-3">
                    <Tag className="w-4 h-4 opacity-70" />
                    <span className="text-sm opacity-70">{item.category}</span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 group-hover:opacity-90 transition-opacity">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm opacity-80 mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm opacity-70">
                  {item.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1 group-hover:opacity-100 transition-opacity">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href={ctaHref}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                variant === 'outline'
                  ? 'bg-white text-gray-900 hover:bg-gray-100'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
            >
              {ctaText}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 1,
      title: "Next-Gen Tech Trends 2026",
      description: "Discover revolutionary technologies that will reshape our world",
      icon: "🚀",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      link: "/pages/NextGenTechTrends2026",
      badge: "NEW",
      badgeColor: "bg-gradient-to-r from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      title: "AI Transformation Mastery",
      description: "Master the art of AI transformation with our comprehensive framework",
      icon: "🧠",
      gradient: "from-blue-600 via-purple-600 to-indigo-600",
      link: "/pages/AITransformationMastery2026",
      badge: "HOT",
      badgeColor: "bg-gradient-to-r from-red-500 to-pink-500"
    },
    {
      id: 3,
      title: "Quantum-Neural Fusion",
      description: "Revolutionary fusion of quantum computing and neural networks",
      icon: "⚛️",
      gradient: "from-cyan-600 via-blue-600 to-purple-600",
      link: "/pages/QuantumNeuralFusion2026",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-gradient-to-r from-green-400 to-blue-500"
    },
    {
      id: 4,
      title: "Synthetic Intelligence",
      description: "The next evolution of AI with autonomous synthetic beings",
      icon: "🤖",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      link: "/pages/SyntheticIntelligence2026",
      badge: "FUTURE",
      badgeColor: "bg-gradient-to-r from-purple-400 to-pink-500"
    },
    {
      id: 5,
      title: "Consciousness Interface",
      description: "Direct neural interfaces for seamless human-AI communication",
      icon: "🧬",
      gradient: "from-rose-600 via-pink-600 to-purple-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-gradient-to-r from-indigo-400 to-purple-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Main Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-4xl animate-bounce">🚀</span>
              <h3 className="text-3xl font-bold">REVOLUTIONARY CONTENT 2026</h3>
              <span className="text-4xl animate-bounce">🚀</span>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/70 hover:text-white transition-colors text-2xl"
            >
              ×
            </button>
          </div>
          
          <p className="text-xl opacity-95 mb-8 max-w-4xl">
            Experience the future of technology with our groundbreaking new content. 
            From AI transformation to quantum computing, explore innovations that will reshape tomorrow.
          </p>

          {/* Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-3xl">{featuredContent[currentSlide].icon}</span>
                      <h4 className="text-2xl font-bold">{featuredContent[currentSlide].title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${featuredContent[currentSlide].badgeColor}`}>
                        {featuredContent[currentSlide].badge}
                      </span>
                    </div>
                    <p className="text-lg opacity-90 mb-4">{featuredContent[currentSlide].description}</p>
                    <a
                      href={featuredContent[currentSlide].link}
                      className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold"
                    >
                      Explore Now →
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              →
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {featuredContent.map((content, index) => (
          <motion.a
            key={content.id}
            href={content.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-gradient-to-r ${content.gradient} text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center relative overflow-hidden group`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="text-2xl mb-2">{content.icon}</div>
              <div className="text-sm font-bold mb-1">{content.title}</div>
              <div className="text-xs opacity-90">{content.description}</div>
              <span className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold ${content.badgeColor}`}>
                {content.badge}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Interactive Stats */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white mb-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Content Impact Metrics</h3>
          <p className="text-gray-300">Real-time engagement and performance data</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-1">2.5M+</div>
            <div className="text-sm text-gray-300">Page Views</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">98%</div>
            <div className="text-sm text-gray-300">User Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">45K+</div>
            <div className="text-sm text-gray-300">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-1">150+</div>
            <div className="text-sm text-gray-300">New Articles</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h3>
        <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
          Join thousands of professionals who rely on our cutting-edge content to stay informed 
          about the latest technological breakthroughs and industry trends.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Subscribe to Updates
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors">
            Download All Content
          </button>
        </div>
      </div>
    </div>
>>>>>>> cursor/create-and-deploy-new-content-7857
  );
};

export default EnhancedContentBanner;