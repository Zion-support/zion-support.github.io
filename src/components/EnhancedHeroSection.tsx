import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  Users,
  TrendingUp,
  Award,
  Globe,
  Brain,
  Cloud,
  Shield,
  Zap
} from 'lucide-react';

interface HeroFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface EnhancedHeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  features?: HeroFeature[];
  showVideo?: boolean;
  videoUrl?: string;
  backgroundType?: 'gradient' | 'particles' | 'video' | 'image';
  backgroundUrl?: string;
}

export const EnhancedHeroSection: React.FC<EnhancedHeroSectionProps> = ({
  title = "Transform Your Business with AI-Powered Solutions",
  subtitle = "Leading the Future of Technology",
  description = "Zion Tech Group delivers cutting-edge AI solutions, quantum computing services, and innovative micro SAAS platforms that drive digital transformation and business growth.",
  primaryCTA = {
    text: "Get Started",
    href: "/contact"
  },
  secondaryCTA = {
    text: "Watch Demo",
    href: "#demo"
  },
  features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered",
      description: "Advanced artificial intelligence solutions"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud-Native",
      description: "Scalable cloud infrastructure"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise-Grade",
      description: "Security and compliance focused"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized for performance"
    }
  ],
  showVideo = false,
  videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  backgroundType = 'gradient',
  backgroundUrl = '/hero-bg.jpg'
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex(prev => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  // Optimized background component
  const BackgroundComponent = useMemo(() => {
    switch (backgroundType) {
      case 'particles':
        return <ParticleBackground />;
      case 'video':
        return <VideoBackground url={backgroundUrl} />;
      case 'image':
        return <ImageBackground url={backgroundUrl} />;
      default:
        return <GradientBackground />;
    }
  }, [backgroundType, backgroundUrl]);

  // Handle video modal
  const handleVideoClick = useCallback(() => {
    setIsVideoModalOpen(true);
  }, []);

  // Close video modal
  const handleCloseVideo = useCallback(() => {
    setIsVideoModalOpen(false);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zion-slate-dark">
      {/* Background */}
      {BackgroundComponent}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/20 mb-8"
          >
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Trusted by 500+ Companies</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-blue-200 mb-8 font-medium"
          >
            {subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              to={primaryCTA.href}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            >
              {primaryCTA.text}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {showVideo && (
              <button
                onClick={handleVideoClick}
                className="group inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                {secondaryCTA.text}
              </button>
            )}
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className={`text-center p-4 rounded-lg transition-all duration-300 ${
                  index === currentFeatureIndex 
                    ? 'bg-white/10 scale-105' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-3 text-blue-400">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={handleCloseVideo}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseVideo}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                aria-label="Close video modal"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                  <p className="text-lg">Video content would be embedded here</p>
                  <p className="text-sm text-gray-400 mt-2">URL: {videoUrl}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Background Components
const ParticleBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 shadow-lg shadow-cyan-400/50"
        animate={{
          x: [0, 200, 0],
          y: [0, -200, 0],
          opacity: [0.4, 1, 0.4],
          scale: [0.5, 1.2, 0.5],
        }}
        transition={{
          duration: 5 + i * 0.3,
          repeat: Infinity,
          delay: i * 0.1,
          ease: "easeInOut"
        }}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </div>
);

const GradientBackground: React.FC = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light"></div>
);

const ImageBackground: React.FC<{ url: string }> = ({ url }) => (
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${url})` }}
  >
    <div className="absolute inset-0 bg-black/50"></div>
  </div>
);

const VideoBackground: React.FC<{ url: string }> = ({ url }) => (
  <div className="absolute inset-0">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    >
      <source src={url} type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black/50"></div>
  </div>
);
