'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Headphones, 
  Camera, 
  FileText, 
  Activity, 
  Zap, 
  TrendingUp, 
  Target,
  ChevronRight,
  Star,
  Award,
  Users,
  Clock
} from 'lucide-react';

const MultimodalIntelligenceShowcase2025: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 1,
      type: 'blog',
      title: 'AI 2025: The Multimodal Intelligence Revolution',
      subtitle: 'Ultimate Guide to 15,000% ROI',
      description: 'Transform your business with AI that processes text, images, audio, video, and sensor data simultaneously for unprecedented efficiency gains.',
      url: '/blog/ai-2025-multimodal-intelligence-revolution-ultimate-guide',
      image: '/images/multimodal-ai-hero.jpg',
      metrics: {
        roi: '15,000%',
        efficiency: '2,400%',
        accuracy: '99.97%',
        timeline: '18 months'
      },
      tags: ['AI Revolution', 'Multimodal AI', 'ROI', 'Business Transformation'],
      readingTime: '25 min read',
      featured: true,
      categories: ['blog', 'featured']
    },
    {
      id: 2,
      type: 'case-study',
      title: 'Fortune 500 Multimodal Intelligence Success',
      subtitle: '$45.2B Annual Savings - 15,000% ROI',
      description: 'Discover how TechGlobal Industries achieved unprecedented success through multimodal AI implementation, delivering massive operational savings and efficiency gains.',
      url: '/case-studies/fortune-500-multimodal-intelligence-15000-roi-success-story',
      image: '/images/fortune-500-success.jpg',
      metrics: {
        savings: '$45.2B',
        roi: '15,000%',
        accuracy: '99.97%',
        efficiency: '2,400%'
      },
      tags: ['Case Study', 'Fortune 500', 'Success Story', 'ROI'],
      readingTime: '22 min read',
      featured: true,
      categories: ['case-study', 'featured']
    },
    {
      id: 3,
      type: 'resource',
      title: 'Multimodal Intelligence Implementation Guide',
      subtitle: 'Complete Roadmap to 15,000% ROI',
      description: 'Step-by-step implementation guide covering everything from initial assessment to full deployment, with proven frameworks for achieving maximum ROI.',
      url: '/resources/multimodal-intelligence-implementation-guide-2025',
      image: '/images/implementation-guide.jpg',
      metrics: {
        success: '94%',
        timeline: '18 months',
        roi: '15,000%',
        guide: 'Complete'
      },
      tags: ['Implementation Guide', 'ROI', 'Strategy', 'Framework'],
      readingTime: '35 min read',
      featured: true,
      categories: ['resource', 'featured']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.categories.includes('blog')).length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.categories.includes('case-study')).length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.categories.includes('resource')).length },
    { id: 'featured', label: 'Featured', count: contentItems.filter(item => item.categories.includes('featured')).length }
  ];

  const filteredItems = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.categories.includes(activeFilter));

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <FileText className="w-5 h-5" />;
      case 'case-study':
        return <TrendingUp className="w-5 h-5" />;
      case 'resource':
        return <Award className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-500';
      case 'case-study':
        return 'bg-green-500';
      case 'resource':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            NEW: Multimodal Intelligence Revolution
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Multimodal AI</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover how leading enterprises are achieving 15,000% ROI through AI systems that simultaneously process text, images, audio, video, and sensor data for unprecedented business transformation.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15,000%</div>
              <div className="text-gray-600 text-sm">Average ROI</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$45.2B</div>
              <div className="text-gray-600 text-sm">Annual Savings</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">99.97%</div>
              <div className="text-gray-600 text-sm">Accuracy Rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">18</div>
              <div className="text-gray-600 text-sm">Months Timeline</div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              {filter.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeFilter === filter.id ? 'bg-white/20' : 'bg-gray-200'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-blue-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className={`p-2 rounded-lg bg-white/20 text-white ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                  </div>
                  {item.featured && (
                    <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Featured
                    </div>
                  )}
                </div>
                
                {/* Multimodal Icons */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Headphones className="w-4 h-4 text-white" />
                  </div>
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                  <div className="p-2 bg-white/20 rounded-lg">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(item.type)}`}>
                    {item.type.replace('-', ' ').toUpperCase()}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readingTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-purple-600 font-semibold mb-3">
                  {item.subtitle}
                </p>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm font-semibold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={item.url}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105 shadow-lg"
                >
                  Explore Content
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with Multimodal AI?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Join leading enterprises achieving 15,000% ROI through multimodal intelligence. Get your comprehensive assessment and implementation roadmap today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
              >
                <Award className="w-5 h-5 mr-2" />
                Get Free Assessment
              </Link>
              <Link
                href="/services/ai-consulting"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300 flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Speak with Experts
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MultimodalIntelligenceShowcase2025;