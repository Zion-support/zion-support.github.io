import React, { useState, useEffect } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { ArrowRight, Star, TrendingUp, Clock, Sparkles } from 'lucide-react';

interface NewContentPromotionBannerProps {
  className?: string;
}

const NewContentPromotionBanner: React.FC<NewContentPromotionBannerProps> = ({ className = '' }) => {
  const newContent = [
    {
      title: 'The Generative AI Revolution: How 2025 is Transforming Every Industry',
      href: '/blog/ai-2025-generative-ai-revolution',
      type: 'blog',
      readTime: '12 min read',
      isNew: true,
      isTrending: true,
      description: 'Explore how generative AI is revolutionizing industries in 2025, from healthcare to finance, with real-world applications and future predictions.',
      icon: '🤖',
      category: 'AI Innovation'
    },
    {
      title: 'AI Automation 2025: Complete Implementation Guide for Enterprise Success',
      href: '/blog/ai-automation-2025-complete-implementation-guide',
      type: 'blog',
      readTime: '15 min read',
      isNew: true,
      isTrending: true,
      description: 'Master AI automation implementation with our comprehensive 2025 guide. Learn best practices, avoid common pitfalls, and achieve 300% productivity gains.',
      icon: '⚡',
      category: 'AI Automation'
    },
    {
      title: 'AI Transformation Success: How a Manufacturing Giant Achieved 400% ROI',
      href: '/case-studies/ai-transformation-manufacturing-giant-2025',
      type: 'case-study',
      readTime: '10 min read',
      isNew: true,
      isTrending: true,
      description: 'Discover how a Fortune 500 manufacturing company transformed operations with AI, achieving 400% ROI, 60% cost reduction, and $2.3B in savings.',
      icon: '🏭',
      category: 'Case Study'
    }
  ];

  return (
    <div className={`bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            New Content Alert
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Fresh AI Insights & Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our latest articles and case studies covering the most important AI trends and transformations of 2025
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40">
                {/* Badges */}
                <div className="flex items-center space-x-2 mb-4">
                  {item.isNew && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      New
                    </span>
                  )}
                  {item.isTrending && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-500 text-white">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </span>
                  )}
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20 text-white">
                    {item.category}
                  </span>
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{item.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white text-opacity-80 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white text-opacity-70 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </div>
                  <div className="flex items-center text-white font-medium group-hover:text-yellow-300 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-white text-opacity-80">New Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">25+</div>
            <div className="text-white text-opacity-80">Case Studies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">100K+</div>
            <div className="text-white text-opacity-80">Monthly Readers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-white text-opacity-80">Reader Satisfaction</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Articles
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
=======
import { X, ArrowRight, Sparkles, BookOpen, Briefcase, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'service';
  url: string;
  icon: string;
  featured?: boolean;
}

const newContentItems: ContentItem[] = [
  {
    id: 'ai-revolution-2025',
    title: 'The AI Revolution of 2025',
    description: 'Discover transformative AI technologies reshaping business',
    type: 'blog',
    url: '/blog/ai-revolution-2025',
    icon: '🤖',
    featured: true
  },
  {
    id: 'quantum-computing-breakthrough',
    title: 'Quantum Computing Breakthrough',
    description: 'Unlocking the future of problem-solving with quantum tech',
    type: 'blog',
    url: '/blog/quantum-computing-breakthrough',
    icon: '⚛️',
    featured: true
  },
  {
    id: 'ai-transformation-success',
    title: 'Fortune 500 AI Success Story',
    description: 'How we achieved 300% ROI through AI transformation',
    type: 'case-study',
    url: '/case-studies/ai-transformation-success',
    icon: '📈',
    featured: true
  },
  {
    id: 'multimodal-ai-services',
    title: 'Multimodal AI Solutions',
    description: 'Advanced AI that processes text, images, and voice',
    type: 'service',
    url: '/services/multimodal-ai',
    icon: '🧠',
    featured: false
  },
  {
    id: 'quantum-optimization',
    title: 'Quantum Optimization Services',
    description: 'Solve complex problems with quantum algorithms',
    type: 'service',
    url: '/services/quantum-optimization',
    icon: '⚡',
    featured: false
  },
  {
    id: 'robotics-automation',
    title: 'Robotics & Automation Hub',
    description: 'Transform your operations with intelligent automation',
    type: 'service',
    url: '/services/robotics-automation',
    icon: '🤖',
    featured: false
  }
];

export default function NewContentPromotionBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Auto-rotate featured content
  useEffect(() => {
    if (!isExpanded) {
      const interval = setInterval(() => {
        setCurrentItem((prev) => (prev + 1) % newContentItems.filter(item => item.featured).length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isExpanded]);

  const featuredItems = newContentItems.filter(item => item.featured);
  const currentFeaturedItem = featuredItems[currentItem];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-red-600/90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-white/20 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
          {!isExpanded ? (
            // Collapsed View
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <Sparkles className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">NEW CONTENT</span>
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    🎉 Fresh Content Just Dropped!
                  </h2>
                  <p className="text-lg opacity-90 max-w-2xl">
                    Discover our latest insights on AI Revolution, Quantum Computing, and real success stories
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsExpanded(true)}
                  className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center"
                >
                  Explore All Content
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <Link
                  href={currentFeaturedItem.url}
                  className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center"
                >
                  <span className="mr-2">{currentFeaturedItem.icon}</span>
                  Read Now
                </Link>
              </div>
            </div>
          ) : (
            // Expanded View
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-6"
            >
              <div className="text-center">
                <div className="flex items-center justify-center bg-white/20 rounded-full px-6 py-2 mb-4 w-fit mx-auto">
                  <Sparkles className="w-5 h-5 mr-2" />
                  <span className="font-medium">Latest Content Collection</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  🚀 Explore Our Newest Content
                </h2>
                <p className="text-xl opacity-90 max-w-4xl mx-auto">
                  From breakthrough AI insights to real-world success stories, discover the cutting-edge content that's transforming industries.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newContentItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Link href={item.url}>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105 border border-white/20">
                        <div className="flex items-start gap-4">
                          <div className="text-3xl group-hover:scale-110 transition-transform">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                item.type === 'blog' ? 'bg-blue-500/20 text-blue-300' :
                                item.type === 'case-study' ? 'bg-green-500/20 text-green-300' :
                                'bg-purple-500/20 text-purple-300'
                              }`}>
                                {item.type === 'blog' ? (
                                  <>
                                    <BookOpen className="w-3 h-3 inline mr-1" />
                                    Blog
                                  </>
                                ) : item.type === 'case-study' ? (
                                  <>
                                    <Briefcase className="w-3 h-3 inline mr-1" />
                                    Case Study
                                  </>
                                ) : (
                                  <>
                                    <TrendingUp className="w-3 h-3 inline mr-1" />
                                    Service
                                  </>
                                )}
                              </span>
                              {item.featured && (
                                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-medium">
                                  Featured
                                </span>
                              )}
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog"
                  className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  View All Blog Posts
                </Link>
                <Link
                  href="/case-studies"
                  className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  All Case Studies
                </Link>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:bg-white/10 flex items-center justify-center"
                >
                  Collapse
                </button>
              </div>
            </motion.div>
          )}
>>>>>>> origin/cursor/create-and-deploy-new-content-aa65
        </div>

        {/* Progress Indicator for Auto-rotation */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <motion.div
              className="h-full bg-white/60"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContentPromotionBanner;