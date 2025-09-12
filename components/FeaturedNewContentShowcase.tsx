'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Clock, Eye, Download, TrendingUp, Award, Sparkles } from 'lucide-react';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  category: string;
  readTime: string;
  views?: string;
  downloads?: string;
  rating: number;
  isNew: boolean;
  isFeatured: boolean;
  isTrending: boolean;
  badge: string;
  badgeColor: string;
  gradient: string;
}

const FeaturedNewContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredContent: ContentItem[] = [
    {
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover groundbreaking AI innovations transforming industries worldwide with quantum AI, autonomous systems, and generative AI revolution.",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      icon: "🚀",
      category: "Featured Article",
      readTime: "25 min read",
      views: "2.3k",
      rating: 4.9,
      isNew: true,
      isFeatured: true,
      isTrending: true,
      badge: "HOT",
      badgeColor: "bg-red-500",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Space Exploration Breakthrough",
      description: "$2.1B mission success with 99.9% autonomous operation. Learn how NASA's AI systems revolutionized space exploration.",
      href: "/case-studies/ai-space-exploration-breakthrough-2025",
      icon: "🚀",
      category: "Case Study",
      readTime: "18 min read",
      views: "1.8k",
      rating: 4.8,
      isNew: true,
      isFeatured: true,
      isTrending: false,
      badge: "BREAKTHROUGH",
      badgeColor: "bg-blue-500",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Implementation Master Guide 2026",
      description: "Complete 200+ page resource with proven strategies, templates, and step-by-step frameworks for successful AI transformation.",
      href: "/resources/ai-implementation-master-guide-2026",
      icon: "📚",
      category: "Free Download",
      readTime: "200+ pages",
      downloads: "15k",
      rating: 4.9,
      isNew: true,
      isFeatured: true,
      isTrending: true,
      badge: "POPULAR",
      badgeColor: "bg-green-500",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Generative AI Revolution 2025",
      description: "10x productivity gains in content creation and business automation. Explore how generative AI is transforming business operations.",
      href: "/blog/ai-2025-generative-ai-revolution",
      icon: "🎨",
      category: "Trending",
      readTime: "22 min read",
      views: "3.1k",
      rating: 4.7,
      isNew: true,
      isFeatured: false,
      isTrending: true,
      badge: "TRENDING",
      badgeColor: "bg-orange-500",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredContent.length]);

  const currentItem = featuredContent[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">🔥 FEATURED CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest AI Insights & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our most popular and trending content on AI breakthroughs, implementation guides, 
            and real-world success stories. Fresh content updated weekly.
          </p>
        </div>

        {/* Main Featured Content */}
        <div className="relative mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Info */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${currentItem.badgeColor} text-white`}>
                    {currentItem.badge}
                  </span>
                  <span className="text-sm font-medium text-gray-600">{currentItem.category}</span>
                  {currentItem.isNew && (
                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-green-100 text-green-800">
                      NEW
                    </span>
                  )}
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {currentItem.title}
                </h3>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {currentItem.description}
                </p>

                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{currentItem.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-600">{currentItem.rating}</span>
                  </div>
                  {currentItem.views && (
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{currentItem.views} views</span>
                    </div>
                  )}
                  {currentItem.downloads && (
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{currentItem.downloads} downloads</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentItem.href}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                  >
                    <span>Read Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/content-showcase"
                    className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
                  >
                    View All Content
                  </Link>
                </div>
              </div>

              {/* Visual */}
              <div className={`bg-gradient-to-br ${currentItem.gradient} p-8 lg:p-12 flex items-center justify-center relative overflow-hidden`}>
                <div className="text-8xl lg:text-9xl opacity-80">
                  {currentItem.icon}
                </div>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.slice(0, 3).map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
              >
                <div className={`aspect-video bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}>
                  <div className="text-6xl opacity-80">{item.icon}</div>
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.badgeColor} text-white`}>
                      {item.badge}
                    </span>
                  </div>
                  {item.isNew && (
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-green-500 text-white">
                        NEW
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-medium text-gray-600">{item.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{item.rating}</span>
                      </div>
                      {item.views && (
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{item.views}</span>
                        </div>
                      )}
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link
            href="/content-showcase"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg hover:scale-105"
          >
            <span>Explore All Content</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNewContentShowcase;