import React, { useState } from 'react';
import { 
  ArrowRight, 
  Clock, 
  Users, 
  TrendingUp, 
  BookOpen, 
  FileText, 
  BarChart3,
  Zap,
  Target,
  Award,
  Download,
  ExternalLink
} from 'lucide-react';

const EmbodiedAIContentShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'embodied-ai-guide',
      type: 'blog',
      category: 'guide',
      title: 'AI 2026: The Embodied AI Revolution - Ultimate Enterprise Guide',
      description: 'Complete guide to embodied AI implementation, covering strategy, technology selection, and achieving 850% ROI in manufacturing and operations.',
      metrics: {
        roi: '850%',
        savings: '$12M',
        efficiency: '340%',
        quality: '95%'
      },
      readingTime: '22 min read',
      publishDate: 'January 20, 2025',
      tags: ['Embodied AI', 'Manufacturing', 'ROI', 'Implementation'],
      url: '/content/blog/ai-2026-embodied-ai-revolution-ultimate-guide',
      featured: true,
      icon: BookOpen
    },
    {
      id: 'fortune-500-case-study',
      type: 'case-study',
      category: 'case-study',
      title: 'Fortune 500 Embodied AI Transformation: $12M Annual Savings with 850% ROI',
      description: 'Real-world success story of a global manufacturing leader achieving unprecedented results with embodied AI implementation across 47 facilities.',
      metrics: {
        roi: '850%',
        savings: '$12M',
        efficiency: '340%',
        uptime: '99.2%'
      },
      readingTime: '15 min read',
      publishDate: 'January 20, 2025',
      tags: ['Case Study', 'Fortune 500', 'Manufacturing', 'Success Story'],
      url: '/content/case-studies/fortune-500-embodied-ai-transformation-850-roi-success',
      featured: true,
      icon: BarChart3
    },
    {
      id: 'implementation-guide',
      type: 'resource',
      category: 'guide',
      title: 'AI 2026: Embodied AI Implementation Master Guide - From Strategy to 850% ROI',
      description: 'Comprehensive implementation methodology covering readiness assessment, business case development, technology selection, and change management.',
      metrics: {
        roi: '850%',
        timeline: '12 months',
        success: '96%',
        payback: '3.7 months'
      },
      readingTime: '28 min read',
      publishDate: 'January 20, 2025',
      tags: ['Implementation', 'Strategy', 'ROI', 'Methodology'],
      url: '/content/resources/ai-2026-embodied-ai-implementation-master-guide',
      featured: true,
      icon: FileText
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'guide', label: 'Implementation Guides', count: contentItems.filter(item => item.category === 'guide').length },
    { id: 'case-study', label: 'Success Stories', count: contentItems.filter(item => item.category === 'case-study').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'guide': return BookOpen;
      case 'case-study': return BarChart3;
      default: return FileText;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'guide': return 'purple';
      case 'case-study': return 'emerald';
      default: return 'blue';
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-semibold mb-4">
            🚀 NEW 2026 CONTENT
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Embodied AI Revolution: Complete Content Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how embodied AI is transforming business operations with proven methodologies, 
            real-world success stories, and comprehensive implementation guides.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 px-2 py-1 bg-white bg-opacity-20 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => {
            const IconComponent = item.icon;
            const categoryColor = getCategoryColor(item.category);
            
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
              >
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${
                  categoryColor === 'purple' ? 'from-purple-600 to-purple-700' :
                  categoryColor === 'emerald' ? 'from-emerald-600 to-emerald-700' :
                  'from-blue-600 to-blue-700'
                } text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-semibold uppercase tracking-wide">
                        {item.category === 'guide' ? 'Implementation Guide' : 
                         item.category === 'case-study' ? 'Success Story' : 'Resource'}
                      </span>
                    </div>
                    {item.featured && (
                      <div className="px-2 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold">
                        FEATURED
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wide">ROI</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{item.metrics.savings}</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wide">Savings</div>
                    </div>
                    {item.metrics.efficiency && (
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">{item.metrics.efficiency}</div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide">Efficiency</div>
                      </div>
                    )}
                    {item.metrics.quality && (
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-emerald-600">{item.metrics.quality}</div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide">Quality</div>
                      </div>
                    )}
                    {item.metrics.uptime && (
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-cyan-600">{item.metrics.uptime}</div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide">Uptime</div>
                      </div>
                    )}
                    {item.metrics.success && (
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">{item.metrics.success}</div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide">Success Rate</div>
                      </div>
                    )}
                  </div>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.readingTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.publishDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <a
                      href={item.url}
                      className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Read {item.type === 'case-study' ? 'Case Study' : 'Guide'}</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                    <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Download className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Metrics Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Proven Results Across Industries
            </h3>
            <p className="text-lg text-gray-600">
              Embodied AI implementations delivering extraordinary ROI and operational improvements
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">850%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Average ROI</div>
              <div className="text-xs text-gray-500 mt-1">Within 12 months</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$12M</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Annual Savings</div>
              <div className="text-xs text-gray-500 mt-1">Fortune 500 companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">340%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Efficiency Gain</div>
              <div className="text-xs text-gray-500 mt-1">Production throughput</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">95%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Quality Improvement</div>
              <div className="text-xs text-gray-500 mt-1">Defect reduction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Operations with Embodied AI?
            </h3>
            <p className="text-xl opacity-90 mb-8">
              Join industry leaders achieving 850% ROI with proven embodied AI implementations. 
              Get your personalized assessment and implementation roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Users className="mr-2 w-5 h-5" />
                <span>Get Free Consultation</span>
              </a>
              <a
                href="/content/resources/ai-2026-embodied-ai-implementation-master-guide"
                className="inline-flex items-center justify-center px-8 py-4 bg-white bg-opacity-20 text-white rounded-lg font-semibold hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30"
              >
                <Download className="mr-2 w-5 h-5" />
                <span>Download Master Guide</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbodiedAIContentShowcase;