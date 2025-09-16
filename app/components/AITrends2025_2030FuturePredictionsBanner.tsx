'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Star, TrendingUp, BookOpen, Download, Play,
  Users, Award, Zap, ArrowUpRight, Brain, Calendar, Clock
} from 'lucide-react';

const AITrends2025_2030FuturePredictionsBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "AI Trends 2025-2030: Future Predictions",
      subtitle: "Comprehensive Future Predictions & Enterprise Impact",
      description: "Discover the revolutionary AI trends that will reshape business, technology, and society. Expert predictions, implementation strategies, and ROI insights.",
      stats: "15.7T Economic Value • 340% ROI • 67% Cost Reduction",
      cta: "Read Predictions",
      href: "/blog/ai-trends-2025-2030-comprehensive-future-predictions",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Quantum-AI Fusion 2025",
      subtitle: "10,000x Processing Speed Breakthrough",
      description: "Quantum neural networks with unprecedented processing power. Real-time risk analysis, drug discovery, and supply chain optimization.",
      stats: "10,000x Speed • 100x Drug Discovery • 99.9% Uptime",
      cta: "Explore Quantum AI",
      href: "/blog/quantum-computing-business-applications-2025",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "AGI Breakthrough 2029",
      subtitle: "Human-Level AI Reasoning Achieved",
      description: "Artificial General Intelligence reaches human-level reasoning across all domains. Creative problem-solving, emotional intelligence, and self-directed learning.",
      stats: "Human-Level Reasoning • Creative AI • Self-Learning",
      cta: "Learn About AGI",
      href: "/blog/ai-2025-autonomous-enterprise-systems-complete-guide",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600"
    }
  ];

  const features = [
    { icon: <Calendar className="w-6 h-6" />, title: "5-Year Timeline", description: "Detailed predictions from 2025-2030" },
    { icon: <ArrowRight className="w-6 h-6" />, title: "Enterprise Focus", description: "Business impact and implementation strategies" },
    { icon: <ArrowUpRight className="w-6 h-6" />, title: "Future Technology", description: "Cutting-edge AI breakthroughs and innovations" },
    { icon: <Award className="w-6 h-6" />, title: "Expert Insights", description: "Professional analysis and recommendations" }
  ];

  if (!isVisible) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">FUTURE AI PREDICTIONS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            AI Trends 2025-2030
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto"
          >
            Comprehensive Future Predictions & Enterprise Impact
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Sliding Content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${slides[currentSlide].color} mr-4`}>
                    {slides[currentSlide].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{slides[currentSlide].title}</h3>
                    <p className="text-lg opacity-90">{slides[currentSlide].subtitle}</p>
                  </div>
                </div>
                
                <p className="text-lg mb-6 opacity-90 leading-relaxed">
                  {slides[currentSlide].description}
                </p>
                
                <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-6">
                  <p className="text-sm font-semibold text-yellow-300">
                    {slides[currentSlide].stats}
                  </p>
                </div>
                
                <Link
                  href={slides[currentSlide].href}
                  className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {slides[currentSlide].cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Features */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6">What You'll Discover</h3>
              
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Key Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-300">$15.7T</div>
                <div className="text-sm opacity-90">Economic Value</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-300">340%</div>
                <div className="text-sm opacity-90">Average ROI</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-300">67%</div>
                <div className="text-sm opacity-90">Cost Reduction</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-300">85%</div>
                <div className="text-sm opacity-90">Productivity Gain</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-trends-2025-2030-comprehensive-future-predictions"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Read Full Predictions
            </Link>
            <Link
              href="/resources/ai-implementation-roadmap-2025"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Roadmap
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AITrends2025_2030FuturePredictionsBanner;