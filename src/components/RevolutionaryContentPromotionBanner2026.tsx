import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  Award, 
  Sparkles, 
  ChevronRight, 
  Star,
  Users,
  Target,
  Rocket,
  Shield,
  Globe
} from 'lucide-react';

interface RevolutionaryContent {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  type: 'guide' | 'case-study' | 'breakthrough' | 'implementation';
  roi?: string;
  views?: string;
  featured: boolean;
  urgency: 'revolutionary' | 'breakthrough' | 'must-have' | 'exclusive';
  icon: React.ReactNode;
  color: string;
}

const RevolutionaryContentPromotionBanner2026: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const revolutionaryContent: RevolutionaryContent[] = [
    {
      id: 'autonomous-ai-systems-guide',
      title: 'Revolutionary Autonomous AI Systems Implementation Guide',
      excerpt: 'Complete roadmap for deploying consciousness-level AI systems that operate 24/7 without human intervention, achieving 1000% ROI.',
      category: 'Autonomous AI',
      type: 'implementation',
      roi: '1000%',
      views: '25.3K',
      featured: true,
      urgency: 'revolutionary',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'consciousness-computing-guide',
      title: 'Consciousness Computing Breakthrough Implementation Guide',
      excerpt: 'The definitive guide to implementing digital consciousness in AI systems, enabling emotional intelligence and creative thinking beyond human capabilities.',
      category: 'Consciousness AI',
      type: 'breakthrough',
      roi: '2000%',
      views: '18.7K',
      featured: true,
      urgency: 'breakthrough',
      icon: <Sparkles className="w-8 h-8" />,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: '1000-percent-roi-case-study',
      title: '1000% ROI Case Study: TechCorp Global AI Transformation',
      excerpt: 'Detailed case study showing how TechCorp Global achieved unprecedented 1000% ROI through comprehensive AI transformation, generating $3.3 billion in returns.',
      category: 'Business Transformation',
      type: 'case-study',
      roi: '1000%',
      views: '32.1K',
      featured: true,
      urgency: 'must-have',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'quantum-ai-implementation',
      title: 'Quantum AI Implementation: Next-Generation Computing',
      excerpt: 'Revolutionary quantum-AI hybrid systems that provide exponential processing power and breakthrough capabilities for enterprise applications.',
      category: 'Quantum AI',
      type: 'breakthrough',
      roi: '5000%',
      views: '15.2K',
      featured: true,
      urgency: 'exclusive',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-orange-600 to-red-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % revolutionaryContent.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [revolutionaryContent.length]);

  const getUrgencyStyles = (urgency: string) => {
    switch (urgency) {
      case 'revolutionary':
        return 'bg-gradient-to-r from-red-500 to-pink-500 text-white';
      case 'breakthrough':
        return 'bg-gradient-to-r from-blue-500 to-purple-500 text-white';
      case 'must-have':
        return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      case 'exclusive':
        return 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
    }
  };

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'implementation':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'breakthrough':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'guide':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl shadow-2xl border border-purple-500/20">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-purple-500/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-purple-400/30">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Revolutionary AI Content 2026
              </h2>
              <p className="text-white/80 text-lg">
                Breakthrough implementations achieving unprecedented ROI
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Main Content Carousel */}
        <div className="relative h-80 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 400 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -400 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                {/* Content Info */}
                <div className="flex flex-col justify-center space-y-6">
                  <div className="flex items-center space-x-3">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${getUrgencyStyles(revolutionaryContent[currentIndex].urgency)}`}>
                      {revolutionaryContent[currentIndex].urgency.toUpperCase()}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeStyles(revolutionaryContent[currentIndex].type)}`}>
                      {revolutionaryContent[currentIndex].type.toUpperCase()}
                    </span>
                    <span className="px-2 py-1 bg-yellow-500 text-yellow-900 text-xs font-bold rounded-full">
                      NEW
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white leading-tight">
                    {revolutionaryContent[currentIndex].title}
                  </h3>
                  
                  <p className="text-white/90 text-lg leading-relaxed">
                    {revolutionaryContent[currentIndex].excerpt}
                  </p>

                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2 text-white/80">
                      <Target className="w-5 h-5" />
                      <span className="text-sm">{revolutionaryContent[currentIndex].category}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Users className="w-5 h-5" />
                      <span className="text-sm">{revolutionaryContent[currentIndex].views} views</span>
                    </div>
                    <div className="flex items-center space-x-1 text-green-400">
                      <TrendingUp className="w-5 h-5" />
                      <span className="text-sm font-bold">{revolutionaryContent[currentIndex].roi} ROI</span>
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Link
                      to={`/resources/${revolutionaryContent[currentIndex].id}`}
                      className="px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-slate-900 font-bold rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
                    >
                      <span>Access Now</span>
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                    <Link
                      to="/case-studies"
                      className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
                    >
                      <Award className="w-5 h-5" />
                      <span>View All</span>
                    </Link>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${revolutionaryContent[currentIndex].color} rounded-3xl opacity-80`}></div>
                  <div className="relative p-8 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                        <div className="text-white">
                          {revolutionaryContent[currentIndex].icon}
                        </div>
                      </div>
                      <div className="text-white/80 text-lg font-semibold mb-2">
                        {revolutionaryContent[currentIndex].type === 'implementation' && 'Complete Implementation Guide'}
                        {revolutionaryContent[currentIndex].type === 'case-study' && 'Real-World Success Story'}
                        {revolutionaryContent[currentIndex].type === 'breakthrough' && 'Revolutionary Technology'}
                        {revolutionaryContent[currentIndex].type === 'guide' && 'Expert Implementation Guide'}
                      </div>
                      <div className="text-white/60 text-sm">
                        {revolutionaryContent[currentIndex].roi} ROI Guaranteed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125 shadow-lg' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">1000%+</div>
            <div className="text-white/70 text-sm">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">25K+</div>
            <div className="text-white/70 text-sm">Monthly Views</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">2026</div>
            <div className="text-white/70 text-sm">Latest Breakthroughs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">4</div>
            <div className="text-white/70 text-sm">Revolutionary Guides</div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center space-x-8 mt-8 pt-6 border-t border-white/20">
          <div className="flex items-center space-x-2 text-white/60">
            <Shield className="w-5 h-5" />
            <span className="text-sm">Enterprise-Grade Security</span>
          </div>
          <div className="flex items-center space-x-2 text-white/60">
            <Globe className="w-5 h-5" />
            <span className="text-sm">Global Implementation Support</span>
          </div>
          <div className="flex items-center space-x-2 text-white/60">
            <Star className="w-5 h-5" />
            <span className="text-sm">5-Star Implementation Success</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentPromotionBanner2026;