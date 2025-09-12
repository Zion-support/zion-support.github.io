import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Download, BookOpen, Zap } from 'lucide-react';

const NewContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 New AI Content Just Released!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover our latest AI insights, success stories, and implementation guides. 
            Join 10,000+ professionals transforming their businesses with AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-lg font-semibold mb-2">Enterprise Success Stories</h3>
            <p className="text-blue-100 text-sm mb-4">
              Real Fortune 500 transformations with 300% productivity gains and $50M+ savings
            </p>
            <Link 
              href="/blog/ai-2025-enterprise-automation-success"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold text-sm"
            >
              Read Now <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-lg font-semibold mb-2">Revolutionary Breakthroughs</h3>
            <p className="text-blue-100 text-sm mb-4">
              Explore quantum AI, autonomous systems, and technologies reshaping our world
            </p>
            <Link 
              href="/blog/ai-2025-revolutionary-breakthroughs"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold text-sm"
            >
              Explore <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">🛍️</div>
            <h3 className="text-lg font-semibold mb-2">Retail Transformation</h3>
            <p className="text-blue-100 text-sm mb-4">
              $200M revenue boost case study with 150% customer satisfaction improvement
            </p>
            <Link 
              href="/case-studies/ai-retail-transformation-success-2025"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold text-sm"
            >
              Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-lg font-semibold mb-2">Master Guide 2025</h3>
            <p className="text-blue-100 text-sm mb-4">
              200-page implementation playbook with frameworks, templates, and strategies
            </p>
            <Link 
              href="/resources/ai-implementation-master-guide-2025"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold text-sm"
            >
              Download Free <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View All Content
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 font-semibold text-lg transition-all duration-300"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Expert Consultation
            </Link>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-blue-100">
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="text-sm">10,000+ Downloads</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-300" />
              <span className="text-sm">300% Success Rate</span>
            </div>
            <div className="flex items-center">
              <Download className="w-5 h-5 mr-2 text-blue-300" />
              <span className="text-sm">Free Resources</span>
            </div>
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