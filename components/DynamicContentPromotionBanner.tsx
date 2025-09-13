import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  BookOpen, 
  Users, 
  TrendingUp,
  Star,
  Zap,
  Brain,
  Atom,
  Bot,
  Rocket,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

interface PromotionalContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  image: string;
  link: string;
  ctaText: string;
  isNew: boolean;
  isFeatured: boolean;
  priority: number;
  badge: string;
  stats: {
    label: string;
    value: string;
  }[];
}

const promotionalContent: PromotionalContent[] = [
  {
    id: 'ai-2026-breakthrough',
    title: 'AI 2026 Ultimate Breakthroughs',
    subtitle: 'Revolutionary AI Solutions',
    description: 'Discover the most advanced AI breakthroughs that will transform your business with quantum-powered intelligence and autonomous systems.',
    category: 'AI Breakthroughs',
    image: '/images/ai-2026-breakthrough.jpg',
    link: '/ai-2026-breakthroughs',
    ctaText: 'Explore Breakthroughs',
    isNew: true,
    isFeatured: true,
    priority: 1,
    badge: 'NEW',
    stats: [
      { label: 'Solutions', value: '50+' },
      { label: 'Success Rate', value: '99.9%' },
      { label: 'ROI', value: '300%' }
    ]
  },
  {
    id: 'quantum-computing-revolution',
    title: 'Quantum Computing Revolution',
    subtitle: 'Next-Gen Processing Power',
    description: 'Experience unprecedented computational power with our quantum computing solutions that solve impossible problems in seconds.',
    category: 'Quantum Computing',
    image: '/images/quantum-revolution.jpg',
    link: '/quantum-computing',
    ctaText: 'Explore Quantum',
    isNew: true,
    isFeatured: true,
    priority: 2,
    badge: 'BREAKTHROUGH',
    stats: [
      { label: 'Qubits', value: '8192' },
      { label: 'Speed', value: '1000x' },
      { label: 'Accuracy', value: '99.9%' }
    ]
  },
  {
    id: 'ai-automation-suite',
    title: 'AI Automation Suite',
    subtitle: 'Intelligent Business Automation',
    description: 'Transform your business with AI-powered automation that learns, adapts, and delivers 95% efficiency improvements.',
    category: 'Automation',
    image: '/images/ai-automation.jpg',
    link: '/ai-automation',
    ctaText: 'Start Automating',
    isNew: false,
    isFeatured: true,
    priority: 3,
    badge: 'FEATURED',
    stats: [
      { label: 'Efficiency', value: '95%' },
      { label: 'Cost Savings', value: '80%' },
      { label: 'ROI', value: '400%' }
    ]
  },
  {
    id: 'neural-interface-future',
    title: 'Neural Interface Future',
    subtitle: 'Direct Brain-Computer Integration',
    description: 'Revolutionary neural interfaces that enable seamless human-AI collaboration for enhanced productivity and creativity.',
    category: 'Neural Interfaces',
    image: '/images/neural-interface.jpg',
    link: '/neural-interfaces',
    ctaText: 'Explore Future',
    isNew: true,
    isFeatured: false,
    priority: 4,
    badge: 'FUTURE',
    stats: [
      { label: 'Speed', value: '10x' },
      { label: 'Accuracy', value: '98%' },
      { label: 'Safety', value: '100%' }
    ]
  },
  {
    id: 'predictive-analytics-ai',
    title: 'Predictive Analytics AI',
    subtitle: 'Future-Ready Business Intelligence',
    description: 'Advanced AI that predicts business trends with 95% accuracy, giving you the competitive edge you need.',
    category: 'Analytics',
    image: '/images/predictive-analytics.jpg',
    link: '/predictive-analytics',
    ctaText: 'Get Insights',
    isNew: false,
    isFeatured: false,
    priority: 5,
    badge: 'INSIGHTS',
    stats: [
      { label: 'Accuracy', value: '95%' },
      { label: 'Speed', value: 'Real-time' },
      { label: 'Coverage', value: '100%' }
    ]
  }
];

const DynamicContentPromotionBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  // Sort content by priority and filter featured/new content
  const sortedContent = promotionalContent
    .filter(content => content.isFeatured || content.isNew)
    .sort((a, b) => a.priority - b.priority);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === sortedContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, sortedContent.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === sortedContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sortedContent.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible || sortedContent.length === 0) {
    return null;
  }

  const currentContent = sortedContent[currentIndex];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentContent.id}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-blue-600/90" />
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
        
        {/* Close Button */}
        <button
          onClick={closeBanner}
          className="absolute top-4 right-4 z-20 text-white/80 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  currentContent.badge === 'NEW' ? 'bg-green-600' :
                  currentContent.badge === 'BREAKTHROUGH' ? 'bg-red-600' :
                  currentContent.badge === 'FEATURED' ? 'bg-yellow-600' :
                  currentContent.badge === 'FUTURE' ? 'bg-purple-600' :
                  'bg-blue-600'
                }`}>
                  {currentContent.badge}
                </span>
                <span className="text-sm text-white/80">{currentContent.category}</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {currentContent.title}
              </h2>
              
              {/* Subtitle */}
              <h3 className="text-xl md:text-2xl text-white/90 mb-4">
                {currentContent.subtitle}
              </h3>

              {/* Description */}
              <p className="text-lg text-white/80 mb-6 max-w-2xl">
                {currentContent.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-6">
                {currentContent.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={currentContent.link}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 group"
                >
                  <span>{currentContent.ctaText}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <Play className="w-5 h-5" />
                  {isAutoPlay ? 'Pause' : 'Play'} Demo
                </button>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative w-full h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 overflow-hidden">
                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    {currentContent.category === 'AI Breakthroughs' && <Brain className="w-16 h-16 text-white" />}
                    {currentContent.category === 'Quantum Computing' && <Atom className="w-16 h-16 text-white" />}
                    {currentContent.category === 'Automation' && <Bot className="w-16 h-16 text-white" />}
                    {currentContent.category === 'Neural Interfaces' && <Zap className="w-16 h-16 text-white" />}
                    {currentContent.category === 'Analytics' && <TrendingUp className="w-16 h-16 text-white" />}
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-pulse" />
                <div className="absolute top-8 right-8 w-6 h-6 bg-white/20 rounded-full animate-pulse delay-1000" />
                <div className="absolute bottom-8 left-8 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-2000" />
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 rounded-full animate-pulse delay-500" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="p-2 text-white/80 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {sortedContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="p-2 text-white/80 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DynamicContentPromotionBanner;