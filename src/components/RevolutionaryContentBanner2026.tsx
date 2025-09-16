import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  X, 
  Brain, 
  Rocket, 
  Zap, 
  Globe,
  Star,
  CheckCircle
} from 'lucide-react';

const RevolutionaryContentBanner2026 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerContent = [
    {
      id: 1,
      title: "Revolutionary AI Services 2026",
      subtitle: "Experience the future of artificial intelligence",
      description: "From synthetic intelligence to holographic reality, discover cutting-edge AI services that transcend traditional limitations.",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      link: "/revolutionary-ai-services-2026",
      features: ["Synthetic Intelligence", "Holographic Reality", "Quantum-Neural Fusion"]
    },
    {
      id: 2,
      title: "Next-Gen Tech Solutions",
      subtitle: "The future is here today",
      description: "Interdimensional computing, omniversal AI consciousness, and space technology solutions reshaping reality itself.",
      icon: Rocket,
      color: "from-blue-600 to-purple-600",
      link: "/next-gen-tech-solutions-2026",
      features: ["Interdimensional Computing", "Omniversal AI", "Space Technology"]
    },
    {
      id: 3,
      title: "Revolutionary Blog Content",
      subtitle: "Latest insights and breakthroughs",
      description: "Stay ahead with our revolutionary blog posts covering the latest in AI consciousness, quantum computing, and future technology.",
      icon: Zap,
      color: "from-green-600 to-blue-600",
      link: "/blog",
      features: ["AI Consciousness", "Quantum Computing", "Future Tech"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const currentContent = bannerContent[currentSlide];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 flex items-center gap-6">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className={`p-3 bg-gradient-to-r ${currentContent.color} rounded-lg`}>
                  <currentContent.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-400 text-sm font-medium">NEW</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{currentContent.title}</h3>
                  <p className="text-gray-300 text-sm">{currentContent.subtitle}</p>
                </div>
              </motion.div>

              <div className="hidden md:block">
                <p className="text-gray-300 text-sm max-w-md">
                  {currentContent.description}
                </p>
              </div>

              <div className="hidden lg:flex items-center gap-2">
                {currentContent.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-1 bg-slate-800/50 px-2 py-1 rounded-full">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={currentContent.link}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2"
              >
                Explore Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {bannerContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-purple-400 w-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-2 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-20 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-2 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-2000"></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RevolutionaryContentBanner2026;
