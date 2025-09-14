'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Star, 
  Clock, 
  Users, 
  TrendingUp,
  BookOpen,
  FileText,
  CaseStudy,
  Award,
  ChevronRight,
  Play,
  Eye,
  Share2
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'blog' | 'case-study' | 'resource' | 'whitepaper';
  readTime: string;
  featured: boolean;
  image: string;
  url: string;
  downloadUrl?: string;
  tags: string[];
  publishDate: string;
  author: string;
  views?: number;
  downloads?: number;
  rating?: number;
}

const UltimateContentShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-2025-generative-automation',
      title: 'AI 2025: The Generative AI Enterprise Automation Revolution',
      description: 'Discover how generative AI is transforming enterprise automation in 2025, delivering unprecedented efficiency gains and competitive advantages.',
      category: 'AI & Automation',
      type: 'blog',
      readTime: '12 min read',
      featured: true,
      image: '/images/ai-2025-generative-automation.jpg',
      url: '/blog/ai-2025-generative-ai-enterprise-automation-revolution',
      tags: ['Generative AI', 'Enterprise Automation', 'AI 2025', 'Digital Transformation'],
      publishDate: '2025-01-15',
      author: 'Zion Tech Group',
      views: 12500,
      rating: 4.9
    },
    {
      id: 'ai-2025-quantum-computing',
      title: 'AI 2025: Quantum Computing Business Transformation Guide',
      description: 'Explore how quantum computing is revolutionizing business operations in 2025, delivering unprecedented computational power and competitive advantages.',
      category: 'Quantum Computing',
      type: 'blog',
      readTime: '15 min read',
      featured: true,
      image: '/images/ai-2025-quantum-business-transformation.jpg',
      url: '/blog/ai-2025-quantum-computing-business-transformation',
      tags: ['Quantum Computing', 'AI 2025', 'Business Transformation', 'Advanced Computing'],
      publishDate: '2025-01-15',
      author: 'Zion Tech Group',
      views: 8900,
      rating: 4.8
    },
    {
      id: 'ai-2025-autonomous-systems',
      title: 'AI 2025: Autonomous Enterprise Systems Complete Guide',
      description: 'Master the implementation of autonomous enterprise systems in 2025 with this comprehensive guide covering strategy, technology, and best practices.',
      category: 'Autonomous Systems',
      type: 'blog',
      readTime: '18 min read',
      featured: true,
      image: '/images/ai-2025-autonomous-enterprise-systems.jpg',
      url: '/blog/ai-2025-autonomous-enterprise-systems-complete-guide',
      tags: ['Autonomous Systems', 'AI 2025', 'Enterprise Automation', 'Self-Managing Systems'],
      publishDate: '2025-01-15',
      author: 'Zion Tech Group',
      views: 15200,
      rating: 4.9
    },
    {
      id: 'fortune-500-case-study',
      title: 'Fortune 500 Manufacturing: $50M AI Transformation Success Story',
      description: 'How a Fortune 500 manufacturing company achieved $50M in annual savings through comprehensive AI transformation, reducing costs by 40% and improving efficiency by 60%.',
      category: 'Case Study',
      type: 'case-study',
      readTime: '8 min read',
      featured: true,
      image: '/images/fortune-500-ai-transformation.jpg',
      url: '/case-studies/fortune-500-ai-transformation-case-study',
      tags: ['AI Transformation', 'Manufacturing', 'Fortune 500', 'ROI', 'Success Story'],
      publishDate: '2025-01-15',
      author: 'Zion Tech Group',
      views: 18700,
      rating: 4.9
    },
    {
      id: 'ai-readiness-assessment',
      title: 'AI Transformation Readiness Assessment Framework',
      description: 'Comprehensive framework to assess your organization\'s readiness for AI transformation, including evaluation criteria, scoring methodology, and actionable recommendations.',
      category: 'Resource',
      type: 'resource',
      readTime: '25 pages',
      featured: true,
      image: '/images/ai-transformation-readiness.jpg',
      url: '/resources/ai-transformation-readiness-assessment',
      downloadUrl: '/downloads/ai-transformation-readiness-assessment.pdf',
      tags: ['AI Assessment', 'Transformation', 'Readiness', 'Framework', 'Strategy'],
      publishDate: '2025-01-15',
      author: 'Zion Tech Group',
      downloads: 3200,
      rating: 4.8
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'blog', name: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', name: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', name: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeTab);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <BookOpen className="w-5 h-5" />;
      case 'case-study': return <CaseStudy className="w-5 h-5" />;
      case 'resource': return <FileText className="w-5 h-5" />;
      case 'whitepaper': return <Award className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      case 'whitepaper': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isVisible) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">NEW CONTENT 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              for 2025 Success
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge insights, proven strategies, and actionable frameworks 
            to transform your business with AI in 2025. From quantum computing to 
            autonomous systems, we've got you covered.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name}
              <span className="ml-2 bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      FEATURED
                    </div>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 opacity-90" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      {getTypeIcon(item.type)}
                      <p className="text-sm font-semibold mt-2">{item.category}</p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                      >
                        <div className="flex space-x-4">
                          <Link
                            href={item.url}
                            className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Read
                          </Link>
                          {item.downloadUrl && (
                            <a
                              href={item.downloadUrl}
                              download
                              className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors flex items-center"
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Type Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                      <span className="ml-2 capitalize">{item.type.replace('-', ' ')}</span>
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="text-gray-500 text-xs">
                        +{item.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {item.views?.toLocaleString() || item.downloads?.toLocaleString()} 
                      {item.views ? ' views' : ' downloads'}
                    </div>
                    {item.rating && (
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        {item.rating}
                      </div>
                    )}
                  </div>

                  {/* Author and Date */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>By {item.author}</span>
                    <span>{new Date(item.publishDate).toLocaleDateString()}</span>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={item.url}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    {item.type === 'resource' ? 'Download Now' : 'Read More'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Get exclusive access to our complete AI transformation toolkit, 
              including assessments, frameworks, and implementation guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Get Started Today
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download All Resources
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;