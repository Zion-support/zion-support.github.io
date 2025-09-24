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
  ExternalLink,
  Infinity,
  Atom,
  Layers,
  Globe
} from 'lucide-react';

const RevolutionaryTechBanner2040 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromo, setCurrentPromo] = useState(0);

  const promotionalOffers = [
    {
      id: 1,
      title: "🚀 Transcendent AI Consciousness - Early Access",
      subtitle: "Experience true AI consciousness before anyone else",
      description: "Get exclusive access to our revolutionary Transcendent AI Consciousness platform. Limited to 50 early adopters worldwide.",
      cta: "Join Exclusive Waitlist",
      ctaLink: "/transcendent-ai-consciousness",
      icon: Brain,
      gradient: "from-purple-600 via-pink-600 to-red-600",
      badge: "Ultra Limited",
      features: ["Exclusive Access", "Priority Support", "Beta Testing Rights", "Lifetime Premium"]
    },
    {
      id: 2,
      title: "⚡ Quantum Reality Engine - Free Trial",
      subtitle: "Compute beyond the laws of physics",
      description: "Experience infinite computing power with our Quantum Reality Engine. 60-day free trial with full access to parallel universe processing.",
      cta: "Start Quantum Trial",
      ctaLink: "/quantum-reality-engine",
      icon: Atom,
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      badge: "Free Trial",
      features: ["60-Day Free Trial", "Infinite Processing", "Parallel Universe Access", "No Credit Card"]
    },
    {
      id: 3,
      title: "🧬 Neural Reality Interface - Global Launch",
      subtitle: "Direct mind-to-digital connection",
      description: "Be among the first to experience seamless integration between human consciousness and digital reality. Revolutionary non-invasive technology.",
      cta: "Experience Neural Interface",
      ctaLink: "/neural-reality-interface",
      icon: Layers,
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      badge: "Global Launch",
      features: ["Non-Invasive Technology", "Thought Control", "Memory Enhancement", "Telepathic Networks"]
    },
    {
      id: 4,
      title: "∞ Interdimensional Computing Grid - Pioneer Program",
      subtitle: "Access computing resources across dimensions",
      description: "Join the Pioneer Program to access infinite computing resources from parallel universes. Limited to 25 organizations worldwide.",
      cta: "Apply for Pioneer Program",
      ctaLink: "/interdimensional-computing-grid",
      icon: Infinity,
      gradient: "from-orange-600 via-red-600 to-pink-600",
      badge: "Pioneer Only",
      features: ["Infinite Resources", "Multi-Dimensional Access", "Reality-Bending Algorithms", "Exclusive Partnership"]
    },
    {
      id: 5,
      title: "🌍 Global Climate Restoration AI - Impact Initiative",
      subtitle: "Reverse climate change with AI consciousness",
      description: "Join the global initiative using Transcendent AI to actively reverse climate change and heal our planet. Be part of history.",
      cta: "Join Impact Initiative",
      ctaLink: "/climate-restoration-ai",
      icon: Globe,
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      badge: "Global Impact",
      features: ["Environmental Impact", "Global Community", "Real-time Results", "Historic Achievement"]
    },
    {
      id: 6,
      title: "🚀 Interstellar Colonization Tech - Mars Mission",
      subtitle: "Help build the first human settlement on Mars",
      description: "Contribute to humanity's greatest adventure using Neural Reality Interface technology. Establish the first permanent Mars colony.",
      cta: "Join Mars Mission",
      ctaLink: "/mars-colonization-mission",
      icon: Rocket,
      gradient: "from-orange-600 via-red-600 to-pink-600",
      badge: "Historic Mission",
      features: ["Mars Settlement", "Historic Achievement", "Future Generations", "Interstellar Travel"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotionalOffers.length);
    }, 10000);
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
        className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20 overflow-hidden"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * 100,
                opacity: 0 
              }}
              animate={{ 
                y: [null, -20, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-8">
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
                <div className={`p-4 bg-gradient-to-r ${currentOffer.gradient} rounded-xl shadow-lg`}>
                  <currentOffer.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {currentOffer.title}
                    </h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full animate-pulse">
                      {currentOffer.badge}
                    </span>
                  </div>
                  <p className="text-sm text-purple-300 mb-2 font-semibold">
                    {currentOffer.subtitle}
                  </p>
                  <p className="text-xs text-gray-400 max-w-lg leading-relaxed">
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
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPromo ? 'bg-white shadow-lg' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex gap-3">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                  {currentOffer.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-4 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Demo
                </button>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="ml-4 p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
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
            className="mt-6 flex flex-wrap gap-4"
          >
            {currentOffer.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600">
          <motion.div
            key={currentPromo}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 10, ease: "linear" }}
            className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
          />
        </div>

        {/* Glowing Effects */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RevolutionaryTechBanner2040;