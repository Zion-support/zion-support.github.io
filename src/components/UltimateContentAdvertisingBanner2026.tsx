import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  X, 
  Play, 
  Star, 
  TrendingUp,
  Zap,
  Brain,
  Cpu,
  Shield
} from 'lucide-react';

const UltimateContentAdvertisingBanner2026 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentAd, setCurrentAd] = useState(0);

  const advertisements = [
    {
      id: 1,
      title: "🚀 Revolutionary AI Healthcare Breakthroughs 2026",
      subtitle: "Discover how AI is transforming healthcare with personalized medicine and real-time diagnostics",
      cta: "Read Now",
      link: "/blog/revolutionary-ai-powered-healthcare-breakthroughs-2026",
      icon: Brain,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20"
    },
    {
      id: 2,
      title: "⚡ Quantum Computing Revolution for Business",
      subtitle: "Harness quantum power to solve complex problems in seconds, not years",
      cta: "Explore",
      link: "/blog/quantum-computing-revolution-what-means-business",
      icon: Cpu,
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20"
    },
    {
      id: 3,
      title: "🛡️ Next-Gen AI Cybersecurity Solutions",
      subtitle: "Protect your business with AI-powered security that adapts to new threats",
      cta: "Learn More",
      link: "/blog/cybersecurity-ai-era-protecting-next-gen-threats",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      id: 4,
      title: "🌟 Ultimate AI Services Showcase 2026",
      subtitle: "Discover our comprehensive suite of cutting-edge AI solutions",
      cta: "View Services",
      link: "/ultimate-ai-services-showcase-2026",
      icon: Sparkles,
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [advertisements.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleClick = (link) => {
    window.location.href = link;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentAd}
          initial={{ opacity: 0, y: -100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="max-w-6xl mx-auto"
        >
          <div className={`relative overflow-hidden rounded-2xl border-2 ${advertisements[currentAd].borderColor} ${advertisements[currentAd].bgColor} backdrop-blur-sm`}>
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-r ${advertisements[currentAd].color} opacity-20`}></div>
            
            {/* Content */}
            <div className="relative p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  {/* Icon */}
                  <div className={`p-3 rounded-full bg-gradient-to-r ${advertisements[currentAd].color} text-white`}>
                    <advertisements[currentAd].icon className="w-6 h-6" />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {advertisements[currentAd].title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {advertisements[currentAd].subtitle}
                    </p>
                  </div>
                  
                  {/* CTA Button */}
                  <button
                    onClick={() => handleClick(advertisements[currentAd].link)}
                    className={`px-6 py-3 bg-gradient-to-r ${advertisements[currentAd].color} text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center gap-2 group`}
                  >
                    {advertisements[currentAd].cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="ml-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
              <motion.div
                className={`h-full bg-gradient-to-r ${advertisements[currentAd].color}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {advertisements.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentAd(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentAd ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default UltimateContentAdvertisingBanner2026;