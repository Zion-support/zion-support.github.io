import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Star, Zap, TrendingUp, Users, Award, Sparkles } from 'lucide-react';

interface NewContentItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  isNew?: boolean;
  urgency?: string;
  type: 'blog' | 'service' | 'case-study';
}

const NewContentAdvertisingBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newContentItems: NewContentItem[] = [
    {
      id: 'quantum-consciousness-ai-2026',
      title: 'Quantum Consciousness AI: The Next Frontier',
      excerpt: 'Discover how quantum computing is revolutionizing AI consciousness, creating systems that can process thoughts across multiple dimensions simultaneously.',
      category: 'Quantum AI',
      isNew: true,
      urgency: 'Must Read',
      type: 'blog'
    },
    {
      id: 'neural-reality-interface-2026',
      title: 'Neural Reality Interface: Direct Brain-to-Digital Connection',
      excerpt: 'Experience the future where your thoughts directly control digital environments, enabling seamless interaction between human consciousness and virtual reality.',
      category: 'Neural Technology',
      isNew: true,
      urgency: 'Trending',
      type: 'blog'
    },
    {
      id: 'autonomous-business-ecosystem-2026',
      title: 'Autonomous Business Ecosystems: AI-Driven Companies',
      excerpt: 'Explore how AI-powered autonomous business systems are creating self-managing companies that operate 24/7 without human intervention.',
      category: 'Business AI',
      isNew: true,
      urgency: 'Hot Topic',
      type: 'blog'
    },
    {
      id: 'quantum-ai-consulting',
      title: 'Quantum AI Consulting Services',
      excerpt: 'Revolutionary consulting services leveraging quantum computing principles to solve complex AI challenges and unlock unprecedented computational capabilities.',
      category: 'Quantum AI',
      isNew: true,
      urgency: 'Limited Availability',
      type: 'service'
    },
    {
      id: 'global-enterprise-transformation-2026',
      title: 'Global Enterprise Transformation: 500% ROI with AI',
      excerpt: 'Case study of a major global enterprise that transformed its operations using our AI solutions, achieving unprecedented efficiency and profitability.',
      category: 'Case Study',
      isNew: true,
      urgency: 'Featured',
      type: 'case-study'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % newContentItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [newContentItems.length]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Quantum AI':
        return <Sparkles className="w-4 h-4" />;
      case 'Neural Technology':
        return <Zap className="w-4 h-4" />;
      case 'Business AI':
        return <TrendingUp className="w-4 h-4" />;
      case 'Case Study':
        return <Award className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Must Read':
        return 'bg-red-500';
      case 'Trending':
        return 'bg-orange-500';
      case 'Hot Topic':
        return 'bg-pink-500';
      case 'Limited Availability':
        return 'bg-purple-500';
      case 'Featured':
        return 'bg-blue-500';
      default:
        return 'bg-green-500';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'service':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'case-study':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl shadow-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Latest Breakthroughs 2026</h2>
              <p className="text-white/80 text-sm">Revolutionary AI innovations now available</p>
            </div>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Main Content Carousel */}
        <div className="relative h-64 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                {/* Content Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(newContentItems[currentSlide].type)}`}>
                      {newContentItems[currentSlide].type.toUpperCase()}
                    </span>
                    {newContentItems[currentSlide].isNew && (
                      <span className="px-2 py-1 bg-yellow-500 text-yellow-900 text-xs font-bold rounded-full">
                        NEW
                      </span>
                    )}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getUrgencyColor(newContentItems[currentSlide].urgency!)}`}>
                      {newContentItems[currentSlide].urgency}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {newContentItems[currentSlide].title}
                  </h3>
                  
                  <p className="text-white/90 text-lg leading-relaxed">
                    {newContentItems[currentSlide].excerpt}
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-white/80">
                      {getCategoryIcon(newContentItems[currentSlide].category)}
                      <span className="text-sm">{newContentItems[currentSlide].category}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">12.5K views</span>
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <button className="px-6 py-3 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-white/90 transition-colors flex items-center space-x-2">
                      <span>Explore Now</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl backdrop-blur-sm"></div>
                  <div className="relative p-8 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        {getCategoryIcon(newContentItems[currentSlide].category)}
                      </div>
                      <div className="text-white/60 text-sm">
                        {newContentItems[currentSlide].type === 'blog' && 'Latest Research'}
                        {newContentItems[currentSlide].type === 'service' && 'New Service'}
                        {newContentItems[currentSlide].type === 'case-study' && 'Success Story'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {newContentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white scale-110' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-white/60 text-sm">New Articles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">15+</div>
            <div className="text-white/60 text-sm">New Services</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">25+</div>
            <div className="text-white/60 text-sm">Case Studies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentAdvertisingBanner2026;