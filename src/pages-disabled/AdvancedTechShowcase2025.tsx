import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AdvancedTechShowcase2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const techShowcases = [
    {
      title: "Quantum Consciousness AI",
      description: "Revolutionary AI systems that achieve true consciousness through quantum neural networks",
      image: "🧠",
      features: ["Self-awareness", "Emotional intelligence", "Creative thinking", "Moral reasoning"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-900/50 to-pink-900/50"
    },
      title: "Neural Reality Interface",
      description: "Direct brain-computer interfaces enabling thought-controlled digital environments",
      image: "🔮",
      features: ["Thought control", "Memory enhancement", "Sensory augmentation", "Consciousness transfer"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-900/50 to-cyan-900/50"
      title: "Holographic Universe",
      description: "Advanced holographic technology creating photorealistic 3D projections in mid-air",
      image: "🌟",
      features: ["3D projections", "Interactive displays", "Spatial computing", "Mixed reality"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-900/50 to-emerald-900/50"
      title: "Quantum Internet",
      description: "Ultra-secure quantum communication networks with instant global connectivity",
      image: "⚛️",
      features: ["Quantum encryption", "Instant transmission", "Unhackable security", "Global network"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-900/50 to-red-900/50"
      title: "Space Colonization",
      description: "Advanced technologies enabling human colonization of Mars and beyond",
      image: "🚀",
      features: ["Mars bases", "Space elevators", "Asteroid mining", "Interplanetary travel"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-900/50 to-purple-900/50"
    }
  ];
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % techShowcases.length);
      }, 5000);
      return () => clearInterval(interval);
  }, [isAutoPlaying, techShowcases.length]);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % techShowcases.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + techShowcases.length) % techShowcases.length);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 ADVANCED TECH SHOWCASE 2025
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tech Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the most advanced technology showcase featuring cutting-edge innovations 
              that are revolutionizing industries and transforming the way we live, work, and interact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Explore Showcase
              </button>
              <button className="border-2 border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Watch Demo
          </motion.div>
        </div>
      </div>
      {/* Interactive Tech Carousel */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our revolutionary technologies through an interactive showcase experience
          </p>
        </motion.div>
        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br ${techShowcases[currentSlide].bgColor} backdrop-blur-sm p-12 border border-white/20`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-8xl mb-6">{techShowcases[currentSlide].image}</div>
                  <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {techShowcases[currentSlide].title}
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    {techShowcases[currentSlide].description}
                  </p>
                  <div className="space-y-4">
                    {techShowcases[currentSlide].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                    <div className="text-center">
                      <div className="text-9xl mb-6">{techShowcases[currentSlide].image}</div>
                      <h4 className="text-2xl font-bold mb-4 text-white">
                        {techShowcases[currentSlide].title}
                      </h4>
                      <p className="text-gray-300 mb-6">
                        Experience the future of {techShowcases[currentSlide].title.toLowerCase()}
                      </p>
                      <button className={`bg-gradient-to-r ${techShowcases[currentSlide].color} px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300`}>
                        Try Demo
                      </button>
                    </div>
              </div>
            </motion.div>
          </div>
          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {techShowcases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
              onClick={nextSlide}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-red-500/20 text-red-300 hover:bg-red-500/30' 
                  : 'bg-green-500/20 text-green-300 hover:bg-green-500/30'
              }`}
              {isAutoPlaying ? 'Pause' : 'Play'}
      {/* Technology Grid */}
            All Technologies
            Explore our complete collection of revolutionary technologies
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techShowcases.map((tech, index) => (
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${tech.bgColor} backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group cursor-pointer`}
              onClick={() => setCurrentSlide(index)}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {tech.image}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors duration-300">
                {tech.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {tech.description}
              </p>
              <div className="space-y-2 mb-6">
                {tech.features.slice(0, 3).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                    <span className="text-sm text-gray-400">{feature}</span>
                ))}
              <button className={`w-full bg-gradient-to-r ${tech.color} px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                Explore Technology
          ))}
      {/* Stats Section */}
      <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 py-20">
        <div className="container mx-auto px-4">
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technology Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our technologies are transforming industries and creating new possibilities
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              <div className="text-5xl font-bold text-indigo-400 mb-2">25+</div>
              <div className="text-xl text-gray-300 mb-2">Technologies</div>
              <div className="text-sm text-gray-400">In showcase</div>
              transition={{ duration: 0.6, delay: 0.2 }}
              <div className="text-5xl font-bold text-purple-400 mb-2">1M+</div>
              <div className="text-xl text-gray-300 mb-2">Users</div>
              <div className="text-sm text-gray-400">Worldwide</div>
              transition={{ duration: 0.6, delay: 0.3 }}
              <div className="text-5xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-xl text-gray-300 mb-2">Companies</div>
              <div className="text-sm text-gray-400">Using our tech</div>
              transition={{ duration: 0.6, delay: 0.4 }}
              <div className="text-5xl font-bold text-pink-400 mb-2">99%</div>
              <div className="text-xl text-gray-300 mb-2">Satisfaction</div>
              <div className="text-sm text-gray-400">User rating</div>
      {/* Call to Action */}
          className="text-center bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-sm rounded-3xl p-12 border border-indigo-500/30"
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Experience the Future Today
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies 
            to transform their businesses and create the future.
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            <button className="border-2 border-white/30 px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            <button className="bg-gradient-to-r from-green-600 to-cyan-600 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Download Report
    </div>
  );
};
export default AdvancedTechShowcase2025;
