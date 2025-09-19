import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const EnhancedContentShowcase: React.FC = () => {,
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const showcaseItems = [,
    {,
      id: 1;
      title: "Synthetic Intelligence 2026";
      description: "Experience the future with AI agents that possess synthetic consciousness and autonomous capabilities";
      icon: "🤖";
      gradient: "from-purple-600 to-pink-600";
      link: "/pages/SyntheticIntelligence2026";
      features: ["Autonomous AI agents", "Synthetic consciousness", "Collective intelligence", "Creative synthesis"],
    };
      id: 2;
      title: "Advanced Quantum Computing 2026";
      description: "Breakthrough quantum processors with 1000+ logical qubits and quantum supremacy capabilities";
      icon: "⚡";
      gradient: "from-cyan-600 to-blue-600";
      link: "/pages/AdvancedQuantumComputing2026";
      features: ["1000+ logical qubits", "Quantum supremacy", "Molecular simulation", "Quantum AI integration"],
      id: 3;
      title: "Neural Interface Revolution 2026";
      description: "Direct brain-computer communication with non-invasive neural interfaces and thought control";
      icon: "🧬";
      gradient: "from-emerald-600 to-teal-600";
      link: "/pages/NeuralInterfaceRevolution2026";
      features: ["Non-invasive BCI", "Thought control", "Neural feedback", "Medical applications"],
      id: 4;
      title: "Quantum-Neural Fusion 2026";
      description: "Revolutionary fusion of quantum computing and neural interfaces for unprecedented capabilities";
      icon: "⚛️";
      gradient: "from-violet-600 to-purple-600";
      link: "/pages/QuantumNeuralFusion2026";
      features: ["Quantum-neural networks", "Enhanced cognition", "Parallel processing", "Synaptic acceleration"],
      title: "Advanced AI Transformation 2026";
      description: "Experience the next evolution of artificial intelligence with autonomous reasoning, quantum-enhanced processing, and self-evolving neural architectures.";
      image: "🧠";
      link: "/pages/AdvancedAITransformation2026";
      features: ["Autonomous Reasoning", "Quantum Processing", "Self-Evolving Networks", "Industry Transformation"];
      category: "AI & Machine Learning";
      year: "2026",
      description: "Revolutionary fusion of quantum computing and neural networks, creating unprecedented processing power for complex problem solving.";
      image: "⚛️";
      features: ["Quantum Processing", "Neural Networks", "Fusion Technology", "Exponential Power"];
      category: "Quantum Computing";
      title: "Next-Gen Tech Showcase 2026";
      description: "Discover the most advanced technologies of 2026, featuring revolutionary innovations in AI, quantum computing, and neural interfaces.";
      image: "🌟";
      gradient: "from-violet-600 to-fuchsia-600";
      link: "/pages/NextGenTechShowcase2026";
      features: ["Synthetic Intelligence", "Advanced Quantum", "Neural Interfaces", "Global AI Network"];
      category: "Technology Showcase";
      description: "Create and deploy AI agents with synthetic consciousness and autonomous capabilities that think, create, and evolve independently.";
      image: "🤖";
      features: ["Synthetic Consciousness", "Autonomous Agents", "Creative AI", "Collective Intelligence"];
      category: "Synthetic Intelligence";
      id: 5;
      description: "Experience exponential processing power with 1000+ qubit quantum processors and quantum supremacy capabilities.";
      image: "⚡";
      gradient: "from-indigo-600 to-purple-600";
      features: ["1000+ Qubits", "Quantum Supremacy", "Molecular Simulation", "Quantum AI"];
      id: 6;
      description: "Bridge mind and machine with direct brain-computer communication and thought control technology.";
      image: "🧬";
      gradient: "from-rose-600 to-pink-600";
      features: ["Non-invasive BCI", "Thought Control", "Neural Feedback", "Medical Applications"];
      category: "Neural Interfaces";
  const contentSlides = [,
      title: "Next-Gen AI Solutions";
      description: "Revolutionary AI technologies transforming industries with autonomous agents and predictive analytics";
      gradient: "from-slate-600 to-gray-600";
      link: "/pages/NextGenAISolutions2025";
      features: ["Autonomous AI Agents", "Real-time Processing", "Predictive Analytics"],
      title: "Quantum Computing Revolution";
      description: "Experience exponential computing power with quantum technology solving impossible problems";
      gradient: "from-blue-600 to-indigo-600";
      link: "/pages/QuantumComputingRevolution2025";
      features: ["Exponential Speed", "Quantum Cryptography", "Molecular Simulation"],
      description: "Create and deploy AI agents with synthetic consciousness and autonomous capabilities";
      gradient: "from-purple-500 to-pink-500";
      bgGradient: "from-purple-600/30 to-pink-600/30";
      borderColor: "border-purple-400/30";
      features: ["Autonomous Agents", "Synthetic Consciousness", "Collective Intelligence", "Creative Synthesis"],
      title: "Blockchain Innovation";
      description: "Decentralized solutions enabling trust, transparency, and new economic opportunities";
      image: "🔗";
      link: "/pages/BlockchainInnovation2025";
      features: ["Layer 2 Solutions", "Zero-Knowledge Proofs", "Cross-Chain Interoperability"],
      title: "Enterprise Solutions";
      description: "Comprehensive enterprise-grade solutions driving digital transformation and business growth";
      image: "🏢";
      link: "/pages/EnterpriseSolutions2025";
      features: ["AI-Powered Automation", "Cloud Infrastructure", "Cybersecurity Suite"],
    }
  ];
  useEffect(() => {,
    if (isAutoPlaying) {,
      const interval = setInterval(() => {,
        setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
      }, 5000);
      }, 6000);
      return () => clearInterval(interval);
  }, [isAutoPlaying, showcaseItems.length]);
  const nextSlide = () => {,
    setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
  };
  const prevSlide = () => {,
    setCurrentSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  return (,
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 min-h-screen">,
      {/* Hero Section */}
      <div className="relative overflow-hidden">,
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>,
        <div className="relative z-10 container mx-auto px-4 py-20">,
          <motion.div,
            initial={{ opacity: 0, y: 50 ,}}
            animate={{ opacity: 1, y: 0 ,}}
            transition={{ duration: 0.8 ,}}
            className="text-center text-white",
          >,
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">,
              🌟 ENHANCED CONTENT SHOWCASE • 2026,
            </div>,
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">,
              Enhanced Content Showcase,
            </h1>,
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">,
              Experience our most advanced and revolutionary content featuring cutting-edge technologies that are reshaping the future,
            </p>,
          </motion.div>,
        </div>,
      </div>,
      {/* Interactive Showcase Carousel */}
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center mb-16">,
          <h2 className="text-4xl font-bold text-white mb-4">🚀 Revolutionary Technology Showcase</h2>,
          <p className="text-xl text-purple-200">Interactive exploration of breakthrough technologies</p>,
        <div className="relative max-w-7xl mx-auto">,
          {/* Main Showcase Display */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">,
        setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
  }, [isAutoPlaying, contentItems.length]);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contentItems.length) % contentItems.length);
  const goToSlide = (index: number) => {,
    setCurrentIndex(index);
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">,
      <div className="container mx-auto px-4">,
        <div className="text-center mb-12">,
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">,
            🚀 ENHANCED CONTENT SHOWCASE • 2026,
          </div>,
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">,
            Revolutionary Technology Content,
          </h2>,
          <p className="text-xl opacity-90 max-w-4xl mx-auto">,
            Explore our comprehensive collection of cutting-edge technology content featuring,
            AI transformation, quantum computing, neural interfaces, and synthetic intelligence.,
          </p>,
        {/* Main Showcase Carousel */}
          <div className="relative overflow-hidden rounded-2xl">,
    <div className="relative w-full max-w-7xl mx-auto">,
      {/* Main Showcase Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8">,
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm"></div>,
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>,
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 text-white overflow-hidden">,
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">,
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>,
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>,
      <div className="relative z-10">,
        {/* Header */}
        <div className="text-center mb-8">,
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-4 animate-pulse">,
            ✨ FEATURED CONTENT • 2025,
          <h2 className="text-4xl font-bold mb-4">Revolutionary Technology Showcase</h2>,
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
            Discover our latest breakthrough content covering cutting-edge technologies that are reshaping the future,
        {/* Carousel Container */}
        <div className="relative z-10">,
          <div className="relative h-96 overflow-hidden rounded-xl">,
            <AnimatePresence mode="wait">,
              <motion.div,
                key={currentSlide}
                initial={{ opacity: 0, x: 300 ,}}
                animate={{ opacity: 1, x: 0 ,}}
                exit={{ opacity: 0, x: -300 ,}}
                transition={{ duration: 0.5 ,}}
                className={`absolute inset-0 bg-gradient-to-br ${showcaseItems[currentSlide].gradient} p-12 flex items-center justify-between`}
              >,
                <div className="flex-1 text-white">,
                  <div className="text-8xl mb-6">{showcaseItems[currentSlide].icon}</div>,
                  <h3 className="text-5xl font-bold mb-4">{showcaseItems[currentSlide].title}</h3>,
                  <p className="text-xl opacity-90 mb-6 max-w-2xl">,
                    {showcaseItems[currentSlide].description}
                  </p>,
                  <div className="grid grid-cols-2 gap-4 mb-8">,
                    {showcaseItems[currentSlide].features.map((feature, index) => (,
                      <div key={index} className="flex items-center space-x-2">,
                        <span className="w-2 h-2 bg-white rounded-full"></span>,
                        <span className="text-sm opacity-90">{feature}</span>,
                      </div>,
                    ))}
                  </div>,
                  <a,
                    href={showcaseItems[currentSlide].link}
                    className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover: bg-gray-100 transition-colors font-semibold",
                  >,
                    Explore {showcaseItems[currentSlide].title,} →,
                  </a>,
                </div>,
                <div className="flex-1 flex justify-center">,
                  <div className="w-80 h-80 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">,
                    <div className="text-9xl">{showcaseItems[currentSlide].icon}</div>,
                className="relative",
                <div className={`bg-gradient-to-br ${showcaseItems[currentSlide].gradient} p-12 rounded-2xl`}>,
                  <div className="grid md: grid-cols-2 gap-12 items-center">,
                    <div>,
                      <div className="flex items-center space-x-3 mb-4">,
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">,
                          {showcaseItems[currentSlide].category,}
                        </span>,
                          {showcaseItems[currentSlide].year}
                      <div className="text-8xl mb-6">{showcaseItems[currentSlide].image}</div>,
                      <h3 className="text-4xl font-bold mb-6">{showcaseItems[currentSlide].title}</h3>,
                      <p className="text-xl opacity-90 mb-8">{showcaseItems[currentSlide].description}</p>,
                      <div className="grid grid-cols-2 gap-4 mb-8">,
                        {showcaseItems[currentSlide].features.map((feature, index) => (,
                          <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">,
                            <span className="text-sm font-semibold">{feature}</span>,
                transition={{ duration: 0.5, ease: "easeInOut" ,}}
                className="absolute inset-0 flex items-center",
                <div className={`w-full h-full bg-gradient-to-br ${contentSlides[currentSlide].bgGradient} backdrop-blur-sm rounded-xl p-8 border ${contentSlides[currentSlide].borderColor}`}>,
                  <div className="flex flex-col lg: flex-row items-center h-full">,
                    {/* Content */,}
                    <div className="flex-1 text-white">,
                      <div className="text-6xl mb-4">{contentSlides[currentSlide].image}</div>,
                      <h3 className="text-3xl font-bold mb-4">{contentSlides[currentSlide].title}</h3>,
                      <p className="text-lg text-gray-200 mb-6 max-w-2xl">,
                        {contentSlides[currentSlide].description}
                      </p>,
                      {/* Features */}
                      <div className="grid grid-cols-2 gap-2 mb-6">,
                        {contentSlides[currentSlide].features.map((feature, index) => (,
                          <div key={index} className="flex items-center space-x-2">,
                            <span className="w-2 h-2 bg-white rounded-full"></span>,
                            <span className="text-sm text-gray-200">{feature}</span>,
                          </div>,
                        ))}
                      <div className="flex gap-4">,
                        <a,
                          href={showcaseItems[currentSlide].link}
                          className="bg-white text-gray-900 px-8 py-4 rounded-lg hover: bg-gray-100 transition-all duration-300 font-semibold",
                        >,
                          Explore Now →,
                        </a>,
                        <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">,
                          Learn More,
                        </button>,
                    </div>,
                    <div className="relative">,
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">,
                        <h4 className="text-2xl font-bold mb-4">Key Highlights</h4>,
                        <ul className="space-y-3">,
                          <li className="flex items-center space-x-3">,
                            <span>Revolutionary breakthrough technology</span>,
                          </li>,
                            <span>Industry-leading performance</span>,
                            <span>Proven real-world applications</span>,
                            <span>Expert-backed research</span>,
                        </ul>,
                      <a,
                        href={contentSlides[currentSlide].link,}
                        className={`inline-block bg-gradient-to-r ${contentSlides[currentSlide].gradient} text-white px-8 py-3 rounded-lg hover: shadow-lg transition-all duration-300 font-semibold`,}
                      >,
                        Explore Technology →,
                      </a>,
                    {/* Visual Element */}
                    <div className="flex-1 flex justify-center items-center">,
                      <div className={`w-64 h-64 bg-gradient-to-br ${contentSlides[currentSlide].gradient} rounded-full flex items-center justify-center text-8xl opacity-20`}>,
                        {contentSlides[currentSlide].image}
        {/* Main Content Carousel */}
        <div className="relative">,
          <AnimatePresence mode="wait">,
            <motion.div,
              key={currentIndex}
              initial={{ opacity: 0, x: 100 ,}}
              animate={{ opacity: 1, x: 0 ,}}
              exit={{ opacity: 0, x: -100 ,}}
              transition={{ duration: 0.5 ,}}
              className="grid md: grid-cols-2 gap-8 items-center",
            >,
              {/* Content */,}
              <div>,
                <div className="text-6xl mb-4">{contentItems[currentIndex].image}</div>,
                <h3 className="text-3xl font-bold mb-4">{contentItems[currentIndex].title}</h3>,
                <p className="text-lg text-gray-300 mb-6">{contentItems[currentIndex].description}</p>,
                <div className="space-y-2 mb-8">,
                  {contentItems[currentIndex].features.map((feature, index) => (,
                    <div key={index} className="flex items-center text-blue-300">,
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>,
                      {feature}
                  ))}
          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mb-8">,
            <button,
              onClick={prevSlide}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover: bg-white/30 transition-colors",
              ←,
            </button>,
            <div className="flex space-x-2">,
              {showcaseItems.map((_, index) => (,
                <button,
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${,
          <div className="flex justify-center items-center mt-6 space-x-4">,
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover: bg-white/30 transition-all duration-300",
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2,} d="M15 19l-7-7 7-7" />,
              </svg>,
            {/* Dots Indicator */}
              {contentSlides.map((_, index) => (,
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${,
                    index === currentSlide ? 'bg-white' : 'bg-white/30',
                  }`}
                />,
              ))}
              onClick={nextSlide}
              →,
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover: bg-white/30 transition-colors text-sm",
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play',}
          <button,
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover: bg-white/30 transition-all duration-300",
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2,} d="M15 19l-7-7 7-7" />,
            </svg>,
          </button>,
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover: bg-white/30 transition-all duration-300",
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2,} d="M9 5l7 7-7 7" />,
          {/* Play/Pause Button */}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover: bg-white/30 transition-all duration-300",
            {isAutoPlaying ? (,
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">,
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>,
            ) : (,
                <path d="M8 5v14l11-7z"/>,
            ),}
        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8">,
          {showcaseItems.map((_, index) => (,
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${,
                index === currentSlide ? 'bg-white' : 'bg-white/30',
              }`}
            />,
          ))}
        {/* Content Categories */}
        <div className="mt-16">,
          <h3 className="text-3xl font-bold text-center mb-8">Content Categories</h3>,
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-6">,
            {['AI & Machine LearningQuantum Computing', 'Neural InterfacesSynthetic Intelligence', 'Technology ShowcaseRevolutionary Tech'].map((category, index) => (,
                key={category}
                initial={{ opacity: 0, y: 50 ,}}
                whileInView={{ opacity: 1, y: 0 ,}}
                transition={{ duration: 0.6, delay: index * 0.1 ,}}
                className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 hover: scale-105 transition-all duration-300 cursor-pointer",
                <div className="text-4xl mb-4 text-center">🚀</div>,
                <h4 className="text-xl font-bold mb-3 text-center">{category,}</h4>,
                <p className="text-sm opacity-90 text-center mb-4">Explore cutting-edge content in this category</p>,
                <div className="text-center">,
                  <span className="text-purple-300 font-semibold">Explore Category →</span>,
              </motion.div>,
            ))}
          {/* Quick Access Grid */}
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-6">,
            {showcaseItems.map((item, index) => (,
                key={item.id}
                animate={{ opacity: 1, y: 0 ,}}
                className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: scale-105 transition-all duration-300 cursor-pointer`,}
                onClick={() => setCurrentSlide(index)}
                <div className="text-4xl mb-3 text-center">{item.icon}</div>,
                <h3 className="text-lg font-bold mb-2 text-center text-white">{item.title}</h3>,
                <p className="text-white/80 mb-4 text-sm text-center">,
                  {item.description.substring(0, 80)}...,
                </p>,
                <a,
                  href={item.link}
                  className="block w-full bg-white text-gray-900 py-2 rounded-lg hover: bg-gray-100 transition-colors font-semibold text-center text-sm",
                >,
                  Explore →,
                </a>,
      {/* Features Section */,}
          <h2 className="text-4xl font-bold text-white mb-4">✨ Enhanced Features</h2>,
          <p className="text-xl text-purple-200">Experience interactive technology exploration</p>,
        <div className="grid md: grid-cols-3 gap-8">,
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">,
            <div className="text-5xl mb-4 text-center">🎮</div>,
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Interactive Experience</h3>,
            <p className="text-purple-200 text-center">,
              Navigate through revolutionary technologies with intuitive controls and smooth animations,
            <div className="text-5xl mb-4 text-center">🚀</div>,
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Real-time Updates</h3>,
              Stay current with the latest breakthroughs and technology advancements as they happen,
            <div className="text-5xl mb-4 text-center">🌟</div>,
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Immersive Design</h3>,
              Experience stunning visual design with gradient backgrounds and smooth transitions,
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2,} d="M9 5l7 7-7 7" />,
          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">,
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${,
                isAutoPlaying,
                  ? 'bg-green-500/20 text-green-400 border border-green-400/30',
                  : 'bg-gray-500/20 text-gray-400 border border-gray-400/30',
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 text-center">,
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Explore the Future?</h2>,
        <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">,
          Dive deeper into our revolutionary technologies and discover how they can transform your business,
        </p>,
        <div className="flex justify-center space-x-4">,
          <a href="/contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover: shadow-lg transition-all duration-300 font-semibold">,
            Start Your Journey →,
          </a>,
          <a href="/pages/InnovationLanding2025" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors">,
            View All Innovations,
        {/* Quick Access Grid */,}
          <h3 className="text-3xl font-bold text-center mb-8">Quick Access to All Content</h3>,
                className={`bg-gradient-to-br ${item.gradient} p-6 rounded-xl hover: scale-105 transition-all duration-300 cursor-pointer`,}
                onClick={() => goToSlide(index)}
                <div className="flex items-center space-x-3 mb-4">,
                  <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-semibold">,
                    {item.category}
                  </span>,
                    {item.year}
                <div className="text-4xl mb-4 text-center">{item.image}</div>,
                <h4 className="text-xl font-bold mb-3 text-center">{item.title}</h4>,
                <p className="text-sm opacity-90 text-center mb-4">{item.description}</p>,
                <a,
                  className="block w-full bg-white/20 text-white text-center py-2 rounded-lg hover: bg-white/30 transition-all duration-300 font-semibold",
      {/* Quick Access Grid */,}
      <div className="mt-12 grid md: grid-cols-3 gap-6">,
        {contentSlides.map((slide, index) => (,
            key={slide.id}
            initial={{ opacity: 0, y: 30 ,}}
            whileInView={{ opacity: 1, y: 0 ,}}
            transition={{ duration: 0.6, delay: index * 0.1 ,}}
            className={`bg-gradient-to-br ${slide.bgGradient} backdrop-blur-sm rounded-xl p-6 border ${slide.borderColor} hover: scale-105 transition-all duration-300 cursor-pointer`,}
            onClick={() => goToSlide(index)}
            <div className="text-4xl mb-3 text-center">{slide.image}</div>,
            <h3 className="text-xl font-bold text-white mb-2 text-center">{slide.title}</h3>,
            <p className="text-gray-200 text-sm text-center mb-4">{slide.description}</p>,
            <a,
              href={slide.link}
              className={`block w-full bg-gradient-to-r ${slide.gradient} text-white py-2 rounded-lg hover: shadow-lg transition-all duration-300 font-semibold text-center text-sm`,}
              Explore Now →,
            </a>,
        ))}
                  href={contentItems[currentIndex].link}
                  className={`inline-block bg-gradient-to-r ${contentItems[currentIndex].gradient} text-white px-8 py-4 rounded-lg hover: shadow-lg transition-all duration-300 font-semibold`,}
                  Explore {contentItems[currentIndex].title} →,
              </div>,
              {/* Visual Element */}
              <div className="relative">,
                <div className={`bg-gradient-to-br ${contentItems[currentIndex].gradient} rounded-2xl p-8 text-center`}>,
                  <div className="text-8xl mb-4">{contentItems[currentIndex].image}</div>,
                  <div className="text-2xl font-bold mb-2">{contentItems[currentIndex].title}</div>,
                  <div className="text-lg opacity-90">2025 Innovation</div>,
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>,
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>,
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>,
            </motion.div>,
          </AnimatePresence>,
          {/* Navigation Arrows */}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover: bg-white/30 transition-colors",
            onMouseEnter={() => setIsAutoPlaying(false),}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover: bg-white/30 transition-colors",
        {/* Dots Indicator */,}
        <div className="flex justify-center space-x-2 mt-8">,
          {contentItems.map((_, index) => (,
              className={`w-3 h-3 rounded-full transition-colors ${,
                index === currentIndex ? 'bg-white' : 'bg-white/30',
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-4">,
            className="flex items-center space-x-2 text-sm text-gray-300 hover: text-white transition-colors",
            <div className={`w-3 h-3 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-gray-400',}`}></div>,
            <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>,
    </div>,
  );
};
export default EnhancedContentShowcase;
}}}}}}}}}}))))))]