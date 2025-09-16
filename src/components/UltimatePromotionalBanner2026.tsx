import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Shield,
  Star,
  CheckCircle,
  Play,
  ExternalLink
} from 'lucide-react';

const UltimatePromotionalBanner2026 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromo, setCurrentPromo] = useState(0);

  const promotionalOffers = [
    {
      id: 1,
      title: "🚀 AI Consciousness Platform - Early Access",
      subtitle: "Be among the first to experience true AI consciousness",
      description: "Get exclusive access to our revolutionary AI consciousness platform. Limited to 100 early adopters.",
      cta: "Join Waitlist",
      ctaLink: "/ai-consciousness-early-access",
      icon: Brain,
      gradient: "from-purple-600 to-blue-600",
      badge: "Limited Time",
      features: ["Exclusive Access", "Priority Support", "Beta Testing Rights"]
    },
    {
      id: 2,
      title: "⚡ Quantum Neural Networks - Free Trial",
      subtitle: "Experience computing at the speed of thought",
      description: "Try our quantum neural networks for 30 days absolutely free. No credit card required.",
      cta: "Start Free Trial",
      ctaLink: "/quantum-neural-trial",
      icon: Zap,
      gradient: "from-blue-600 to-cyan-600",
      badge: "Free Trial",
      features: ["30-Day Free Trial", "Full Access", "No Credit Card"]
    },
    {
      id: 3,
      title: "🛡️ Climate Restoration AI - Global Initiative",
      subtitle: "Join the fight against climate change with AI",
      description: "Be part of the global initiative using AI to actively reverse climate change and heal our planet.",
      cta: "Join Initiative",
      ctaLink: "/climate-restoration-ai",
      icon: Shield,
      gradient: "from-green-600 to-emerald-600",
      badge: "Global Impact",
      features: ["Environmental Impact", "Global Community", "Real-time Results"]
    },
    {
      id: 4,
      title: "🚀 Space Colonization Tech - Mars Mission",
      subtitle: "Help build the first human settlement on Mars",
      description: "Contribute to humanity's greatest adventure - establishing the first permanent settlement on Mars.",
      cta: "Join Mission",
      ctaLink: "/mars-colonization-mission",
      icon: Rocket,
      gradient: "from-orange-600 to-red-600",
      badge: "Historic Mission",
      features: ["Mars Settlement", "Historic Achievement", "Future Generations"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotionalOffers.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [promotionalOffers.length]);

  if (!isVisible) return null;

  const currentOffer = promotionalOffers[currentPromo];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 flex items-center gap-6">
              <motion.div
                key={currentPromo}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className={`p-3 bg-gradient-to-r ${currentOffer.gradient} rounded-xl`}>
                  <currentOffer.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-white">
                      {currentOffer.title}
                    </h3>
                    <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                      {currentOffer.badge}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mb-2">
                    {currentOffer.subtitle}
                  </p>
                  <p className="text-xs text-gray-400 max-w-md">
                    {currentOffer.description}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {promotionalOffers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPromo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentPromo ? 'bg-white' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex gap-3">
                <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">
                  {currentOffer.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-4 py-2 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Demo
                </button>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="ml-4 p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Features List */}
          <motion.div
            key={`features-${currentPromo}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-4 flex flex-wrap gap-4"
          >
            {currentOffer.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600">
          <motion.div
            key={currentPromo}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 8, ease: "linear" }}
            className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UltimatePromotionalBanner2026;