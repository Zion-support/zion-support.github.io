"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

<<<<<<< HEAD
const EnhancedContentShowcase: React.FC = () => {
>>>>>>> cursor/create-and-deploy-new-content-f175
  const contentSlides = [
    {
      id: 1,
      title: "Advanced Quantum Computing 2026",
      description: "Experience exponential processing power with our revolutionary quantum computing platform",
      image: "⚡",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      link: "/pages/AdvancedQuantumComputing2026",
      features: ["1000+ Qubits", "Quantum Supremacy", "Molecular Simulation", "Quantum AI"]
    },
    {
      id: 2,
      title: "Neural Interface Revolution 2026",
      description: "Bridge mind and machine with direct brain-computer communication technology",
      image: "🧬",
      gradient: "from-emerald-500 to-cyan-500",
      bgGradient: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback", "Medical Applications"]
    },
    {
      id: 3,
      title: "Synthetic Intelligence 2026",
      description: "Create and deploy AI agents with synthetic consciousness and autonomous capabilities",
      image: "🤖",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Autonomous Agents", "Synthetic Consciousness", "Collective Intelligence", "Creative Synthesis"]
>>>>>>> cursor/create-and-deploy-new-content-f175
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, showcaseItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
        setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
>>>>>>> cursor/create-and-deploy-new-content-f175
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
>>>>>>> cursor/create-and-deploy-new-content-f175
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Main Showcase Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
        
=======
const EnhancedContentShowcase = () => {
  const [activeTab, setActiveTab] = useState('breakthroughs');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const contentCategories = {
    breakthroughs: {
      title: 'AI 2025 Breakthroughs',
      description: 'Revolutionary AI technologies transforming industries',
      items: [
        {
          title: 'AI 2025 Ultimate Breakthrough Revolution',
          description: '10,000% ROI with quantum-AI fusion technology',
          href: '/ai-2025-ultimate-breakthrough-revolution',
          icon: '🚀',
          featured: true
        },
        {
          title: 'AI 2026 Quantum-Neural Fusion',
          description: '15,000% ROI with next-gen neural interfaces',
          href: '/ai-2026-quantum-neural-fusion-revolutionary-breakthrough',
          icon: '⚛️',
          featured: true
        },
        {
          title: 'AI 2030 Transcendent Intelligence',
          description: 'Beyond human-level AI capabilities',
          href: '/ai-2030-transcendent-intelligence',
          icon: '🧠',
          featured: false
        }
      ]
    },
    caseStudies: {
      title: 'Success Stories',
      description: 'Real-world transformations with proven results',
      items: [
        {
          title: 'Global Manufacturing Transformation',
          description: '$2.4B annual savings with 850% ROI',
          href: '/case-studies/ai-2025-global-manufacturing-transformation-breakthrough',
          icon: '🏭',
          featured: true
        },
        {
          title: 'Fortune 500 Enterprise Success',
          description: '1,500% ROI in 6 months',
          href: '/case-studies/ai-2025-fortune-500-transformation-breakthrough',
          icon: '🏢',
          featured: true
        },
        {
          title: 'Financial Services Revolution',
          description: '99.9% accuracy with AI automation',
          href: '/case-studies/ai-2025-global-finance-transformation-breakthrough',
          icon: '💰',
          featured: false
        }
      ]
    },
    resources: {
      title: 'Implementation Guides',
      description: 'Step-by-step guides for AI transformation',
      items: [
        {
          title: 'AI Implementation Master Guide',
          description: '150+ pages of comprehensive strategies',
          href: '/resources/ai-2025-implementation-master-guide',
          icon: '📚',
          featured: true
        },
        {
          title: 'Synthetic Intelligence Guide',
          description: 'Breakthrough implementation strategies',
          href: '/resources/ai-2025-synthetic-intelligence-implementation-guide',
          icon: '🔬',
          featured: true
        },
        {
          title: 'Revolutionary Implementation Toolkit',
          description: 'Complete toolkit for AI transformation',
          href: '/resources/ai-2025-revolutionary-implementation-guide',
          icon: '🛠️',
          featured: false
        }
      ]
    }
  };

  return (
    <section className={`py-20 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/create-and-deploy-new-content-abae
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ ENHANCED CONTENT SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI breakthroughsuccess storiesand implementation guides designed to transform your business.
          </p>
        </div>

<<<<<<< HEAD
        {/* Carousel Container */}
        <div className="relative z-10">
          <div className="relative h-96 overflow-hidden rounded-xl">
>>>>>>> cursor/create-and-deploy-new-content-f175
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center"
              >
                <div className={`w-full h-full bg-gradient-to-br ${contentSlides[currentSlide].bgGradient} backdrop-blur-sm rounded-xl p-8 border ${contentSlides[currentSlide].borderColor}`}>
                  <div className="flex flex-col lg:flex-row items-center h-full">
                    {/* Content */}
                    <div className="flex-1 text-white">
                      <div className="text-6xl mb-4">{contentSlides[currentSlide].image}</div>
                      <h3 className="text-3xl font-bold mb-4">{contentSlides[currentSlide].title}</h3>
                      <p className="text-lg text-gray-200 mb-6 max-w-2xl">
                        {contentSlides[currentSlide].description}
                      </p>
                      
                      {/* Features */}
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {contentSlides[currentSlide].features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span className="text-sm text-gray-200">{feature}</span>
>>>>>>> cursor/create-and-deploy-new-content-f175
                          </div>
                        ))}
                      </div>
                      
>>>>>>> cursor/create-and-deploy-new-content-f175
                      <a
                        href={contentSlides[currentSlide].link}
                        className={`inline-block bg-gradient-to-r ${contentSlides[currentSlide].gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                      >
                        Explore Technology →
                      </a>
                    </div>
                    
                    {/* Visual Element */}
                    <div className="flex-1 flex justify-center items-center">
                      <div className={`w-64 h-64 bg-gradient-to-br ${contentSlides[currentSlide].gradient} rounded-full flex items-center justify-center text-8xl opacity-20`}>
                        {contentSlides[currentSlide].image}
                      </div>
                    </div>
>>>>>>> cursor/create-and-deploy-new-content-f175
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {contentSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
>>>>>>> cursor/create-and-deploy-new-content-f175
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Access Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="text-4xl mb-3 text-center">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-center text-white">{item.title}</h3>
                <p className="text-white/80 mb-4 text-sm text-center">
                  {item.description.substring(0, 80)}...
                </p>
                <a 
                  href={item.link}
                  className="block w-full bg-white text-gray-900 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center text-sm"
                >
                  Explore →
                </a>
              </motion.div>
            ))}
          </div>
        </div>

            </p>
>>>>>>> cursor/create-and-deploy-new-content-f175
            
            <button
              onClick={nextSlide}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
>>>>>>> cursor/create-and-deploy-new-content-f175
          </div>
        </div>
      </div>

>>>>>>> cursor/create-and-deploy-new-content-f175
      {/* Quick Access Grid */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {contentSlides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-gradient-to-br ${slide.bgGradient} backdrop-blur-sm rounded-xl p-6 border ${slide.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer`}
            onClick={() => goToSlide(index)}
          >
            <div className="text-4xl mb-3 text-center">{slide.image}</div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">{slide.title}</h3>
            <p className="text-gray-200 text-sm text-center mb-4">{slide.description}</p>
            <a
              href={slide.link}
              className={`block w-full bg-gradient-to-r ${slide.gradient} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm`}
            >
              Explore Now →
            </a>
          </motion.div>
        ))}
>>>>>>> cursor/create-and-deploy-new-content-f175
      </div>
>>>>>>> df1ae652825cf0aad03f4f2c81f7b3bd32b53561
    </div>
=======
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {Object.entries(contentCategories).map(([keycategory]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 mx-2 mb-4 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentCategories[activeTab as keyof typeof contentCategories].items.map((itemindex) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{item.icon}</div>
                {item.featured && (
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    FEATURED
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <Link
                href={item.href}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
              >
                Explore Now →
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of companies already achieving unprecedented success with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
>>>>>>> cursor/create-and-deploy-new-content-abae
  );
};

export default EnhancedContentShowcase;