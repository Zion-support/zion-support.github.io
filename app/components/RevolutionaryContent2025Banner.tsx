'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  BookOpen, 
  Download, 
  Play,
  Users,
  Award,
  Zap,
  Target,
  Rocket
} from 'lucide-react';

const RevolutionaryContent2025Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "AI 2025: The Generative AI Revolution",
      subtitle: "Transform Your Enterprise with Cutting-Edge AI",
      description: "Discover how generative AI is revolutionizing enterprise automation, delivering 340% ROI and unprecedented efficiency gains.",
      stats: "340% ROI • 67% Faster Decisions • 85% Efficiency Gain",
      cta: "Read the Guide",
      href: "/blog/ai-2025-generative-ai-enterprise-automation-revolution",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Quantum Computing Business Transformation",
      subtitle: "Harness Quantum Power for Competitive Advantage",
      description: "Explore how quantum computing is revolutionizing business operations with exponential speedups and breakthrough capabilities.",
      stats: "10^12 Speedup • $50M+ Savings • Revolutionary Security",
      cta: "Explore Quantum AI",
      href: "/blog/ai-2025-quantum-computing-business-transformation",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Autonomous Enterprise Systems",
      subtitle: "Self-Managing, Self-Optimizing, Self-Healing",
      description: "Master the implementation of autonomous enterprise systems that operate with minimal human intervention while continuously adapting.",
      stats: "85% Automation • 60% Efficiency • 70% Cost Reduction",
      cta: "Learn More",
      href: "/blog/ai-2025-autonomous-enterprise-systems-complete-guide",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600"
    }
  ];

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Comprehensive Guides",
      description: "In-depth analysis and actionable strategies"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Downloadable Resources",
      description: "Frameworks, assessments, and implementation tools"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Case Studies",
      description: "Real-world success stories and ROI examples"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Insights",
      description: "From industry leaders and AI practitioners"
    }
  ];

  if (!isVisible) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-sm font-bold">REVOLUTIONARY CONTENT 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Future of AI is
            <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Here Today
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI insights, proven strategies, and actionable frameworks 
            that are transforming businesses worldwide in 2025.
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 REVOLUTIONARY 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover the Future of AI
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore groundbreaking insights, real-world case studies, and comprehensive resources 
            that will revolutionize your understanding of AI in 2025.
          </p>
        </motion.div>

        {/* Main Content Slider */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-r ${slides[currentSlide].color} p-12 rounded-3xl`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      {slides[currentSlide].icon}
                      <span className="ml-3 text-2xl font-bold">
                        {slides[currentSlide].title}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {slides[currentSlide].subtitle}
                    </h2>
                    
                    <p className="text-xl opacity-90 mb-6 leading-relaxed">
                      {slides[currentSlide].description}
                    </p>
                    
                    <div className="flex items-center mb-8">
                      <TrendingUp className="w-6 h-6 mr-2" />
                      <span className="text-lg font-semibold">
                        {slides[currentSlide].stats}
                      </span>
                    </div>
                    
                    <Link
                      href={slides[currentSlide].href}
                      className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                      {slides[currentSlide].cta}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8">
                      <div className="text-center">
                        <div className="text-6xl font-bold mb-4">
                          {currentSlide === 0 ? "340%" : currentSlide === 1 ? "10^12" : "85%"}
                        </div>
                        <div className="text-xl opacity-90">
                          {currentSlide === 0 ? "Average ROI" : currentSlide === 1 ? "Speedup Factor" : "Automation Rate"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-white scale-125'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-opacity-20 transition-all duration-300">
                <div className="text-yellow-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="opacity-90">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-lg opacity-90">Expert Articles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">25+</div>
              <div className="text-lg opacity-90">Case Studies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-lg opacity-90">Downloadable Resources</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">100K+</div>
              <div className="text-lg opacity-90">Monthly Readers</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-pink-500 rounded-3xl p-8 text-black">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI frameworks 
              to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Your Journey
              </Link>
              <Link
                href="/resources"
                className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-colors flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resources
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Blog Posts */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-lg font-bold mb-3">Generative AI Revolution</h3>
            <p className="text-sm text-gray-300 mb-4">
              How generative AI is transforming enterprise operations with 340% ROI.
            </p>
            <Link 
              href="/blog/ai-2025-generative-ai-enterprise-transformation"
              className="text-white text-sm font-semibold hover:text-gray-300 transition-colors"
            >
              Read More →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="text-lg font-bold mb-3">MLOps Breakthrough</h3>
            <p className="text-sm text-gray-300 mb-4">
              Achieve 99.9% model reliability with advanced MLOps practices.
            </p>
            <Link 
              href="/blog/ai-2025-machine-learning-operations-mlops-breakthrough"
              className="text-white text-sm font-semibold hover:text-gray-300 transition-colors"
            >
              Read More →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-bold mb-3">Autonomous Systems</h3>
            <p className="text-sm text-gray-300 mb-4">
              Next-generation autonomous systems delivering 78% efficiency gains.
            </p>
            <Link 
              href="/blog/ai-2025-next-generation-autonomous-systems-revolution"
              className="text-white text-sm font-semibold hover:text-gray-300 transition-colors"
            >
              Read More →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-bold mb-3">Case Studies</h3>
            <p className="text-sm text-gray-300 mb-4">
              Real-world success stories with $34.7M+ in proven savings.
            </p>
            <Link 
              href="/case-studies"
              className="text-white text-sm font-semibold hover:text-gray-300 transition-colors"
            >
              View All →
            </Link>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">$2.3T</div>
            <div className="text-sm text-gray-300">Generative AI Market</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300 mb-2">99.9%</div>
            <div className="text-sm text-gray-300">Model Reliability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">78%</div>
            <div className="text-sm text-gray-300">Efficiency Gains</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">340%</div>
            <div className="text-sm text-gray-300">Average ROI</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">Get the Complete AI Transformation Guide</h3>
            <p className="text-lg opacity-90 mb-6">
              Download our comprehensive 50-page guide with actionable insights, 
              real-world examples, and step-by-step implementation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/ai-transformation-guide-2025"
                className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Download Free Guide
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Schedule Consultation
              </Link>
    <div className="relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentContent.gradient} opacity-90`} />
      <div className="absolute inset-0 bg-black opacity-20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse" />
        <div className="absolute top-32 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full animate-pulse delay-2000" />
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-white opacity-10 rounded-full animate-pulse delay-3000" />
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="flex items-center space-x-3 mb-6">
                <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold">
                  🚀 REVOLUTIONARY CONTENT 2025
                </span>
                <span className="px-4 py-2 bg-red-500 rounded-full text-sm font-semibold animate-pulse">
                  NEW
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {currentContent.title}
              </h1>

              <div className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-300">
                {currentContent.subtitle}
              </div>

              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics Display */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-1">
                      {value}
                    </div>
                    <div className="text-sm md:text-base opacity-80 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'} →
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
                >
                  Explore All Content
                </Link>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">
                    {currentContent.type === 'blog' ? '📝' : 
                     currentContent.type === 'case-study' ? '📊' : '📚'}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {currentContent.type === 'blog' ? 'Ultimate Guide' : 
                     currentContent.type === 'case-study' ? 'Success Story' : 'Complete Playbook'}
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    {currentContent.type === 'blog' ? 'Comprehensive enterprise guide with proven strategies' : 
                     currentContent.type === 'case-study' ? 'Real-world Fortune 100 transformation results' : 
                     'Step-by-step implementation methodology'}
                  </p>
                  
                  {/* Progress Indicators */}
                  <div className="flex justify-center space-x-2 mb-6">
                    {contentSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'bg-yellow-300' : 'bg-white opacity-50'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Reading Time */}
                  <div className="text-sm opacity-75">
                    {currentContent.type === 'blog' ? '25 min read' : 
                     currentContent.type === 'case-study' ? '22 min read' : '35 min read'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025Banner;