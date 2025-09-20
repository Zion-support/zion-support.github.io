import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import OptimizedImage from "./OptimizedImage";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const slides = [
    {
      title: "AI-Powered Development",
      description: "Build applications faster with our cutting-edge AI tools",
      image: "/images/ai-development.jpg",
      cta: "Get Started"
    },
    {
      title: "Scalable Infrastructure",
      description: "Deploy and scale your applications with confidence",
      image: "/images/infrastructure.jpg",
      cta: "Learn More"
    },
    {
      title: "Team Collaboration",
      description: "Work seamlessly with your team using our collaborative tools",
      image: "/images/collaboration.jpg",
      cta: "Try Now"
    }
  ];

  const features = [
    {
      icon: "🚀",
      title: "Fast Deployment",
      description: "Deploy your applications in minutes, not hours"
    },
    {
      icon: "🔒",
      title: "Secure by Default",
      description: "Built-in security features protect your applications"
    },
    {
      icon: "📈",
      title: "Auto Scaling",
      description: "Automatically scale based on demand"
    },
    {
      icon: "🎯",
      title: "AI Optimization",
      description: "AI-powered optimization for better performance"
    }
  ];

  const stats = [
    { number: "10M+", label: "Applications Built" },
    { number: "50K+", label: "Active Developers" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
        />
        
        {/* Slideshow */}
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, x: index === 0 ? 0 : 100 }}
              animate={{ 
                opacity: currentSlide === index ? 1 : 0,
                x: currentSlide === index ? 0 : currentSlide > index ? -100 : 100
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-6xl mx-auto text-center px-4">
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
                  variants={itemVariants}
                  initial="hidden"
                  animate={currentSlide === index ? "visible" : "hidden"}
                >
                  {slide.title}
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
                  variants={itemVariants}
                  initial="hidden"
                  animate={currentSlide === index ? "visible" : "hidden"}
                >
                  {slide.description}
                </motion.p>
                <motion.button
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  variants={itemVariants}
                  initial="hidden"
                  animate={currentSlide === index ? "visible" : "hidden"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {slide.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold mb-4"
            >
              Why Choose Our Platform?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              We combine cutting-edge technology with intuitive design to deliver exceptional results.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8"
            >
              Join thousands of developers who are already building amazing applications with our platform.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Start Building
              </button>
              <button className="bg-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;