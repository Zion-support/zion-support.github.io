import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Brain, Rocket, Star } from 'lucide-react';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const revolutionaryContent = [
    {
      id: 1,
      title: "AI-Powered Business Revolution 2025",
      subtitle: "Transform Your Enterprise with Next-Gen AI Solutions",
      description: "Discover how our cutting-edge AI technologies are revolutionizing business operations, from automated decision-making to predictive analytics that drive unprecedented growth.",
      icon: Brain,
      gradient: "from-purple-600 to-pink-600",
      features: ["Automated Decision Making", "Predictive Analytics", "Real-time Insights", "Cost Reduction"]
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      subtitle: "Unlock the Power of Quantum Processing",
      description: "Experience the future of computing with our quantum solutions that solve complex problems in seconds, not years. Revolutionize your data processing capabilities.",
      icon: Zap,
      gradient: "from-blue-600 to-cyan-600",
      features: ["Quantum Processing", "Complex Problem Solving", "Lightning Speed", "Future-Ready"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentContent = revolutionaryContent[currentSlide];

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Revolutionary Technology 2025
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The Future is
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Now</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the most advanced AI and technology solutions that are reshaping industries and transforming the way we work, live, and innovate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentContent.gradient} text-white`}>
                <currentContent.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">{currentContent.title}</h3>
                <p className="text-purple-300 text-lg">{currentContent.subtitle}</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              {currentContent.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {currentContent.features.map((feature, index) => (
                <div key={feature} className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
              Explore Technology
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className={`relative w-full h-96 bg-gradient-to-br ${currentContent.gradient} rounded-3xl p-8 flex items-center justify-center`}>
              <div className="absolute inset-0 bg-black/20 rounded-3xl" />
              <div className="relative z-10 text-center text-white">
                <currentContent.icon className="w-24 h-24 mx-auto mb-6 opacity-80" />
                <div className="space-y-2">
                  <div className="w-32 h-2 bg-white/30 rounded-full mx-auto" />
                  <div className="w-24 h-2 bg-white/20 rounded-full mx-auto" />
                  <div className="w-28 h-2 bg-white/25 rounded-full mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentBanner2025;