import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Star, 
  TrendingUp, 
  Users, 
  Calculator, 
  FileText, 
  Target,
  DollarSign,
  Zap,
  Award,
  BookOpen,
  BarChart3
} from 'lucide-react';

const ComprehensiveContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const contentItems = [
    {
      id: 'enterprise-automation-breakthrough',
      type: 'blog',
      title: 'AI 2026: Enterprise Automation Breakthrough - 400% ROI in 90 Days',
      excerpt: 'Discover how Fortune 500 companies are achieving unprecedented 400% ROI through next-generation AI automation systems. Real case studies, implementation strategies, and proven frameworks.',
      url: '/blog/ai-2026-enterprise-automation-breakthrough',
      readTime: '18 min read',
      featured: true,
      icon: TrendingUp,
      category: 'Enterprise AI',
      tags: ['AI', 'Enterprise Automation', 'ROI', 'Business Transformation'],
      stats: { roi: '400%', timeframe: '90 days', wordCount: '8,500' },
      publishDate: '2025-01-17'
    },
    {
      id: 'fortune-500-transformation',
      type: 'case-study',
      title: 'Fortune 500 AI Transformation: $50M Annual Savings in 6 Months',
      excerpt: 'How a Fortune 500 manufacturing company achieved $50M in annual savings through comprehensive AI transformation. Detailed implementation timeline, challenges overcome, and lessons learned.',
      url: '/case-studies/fortune-500-ai-transformation-2026',
      readTime: '15 min read',
      featured: true,
      icon: DollarSign,
      category: 'Success Story',
      tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'Cost Savings'],
      stats: { savings: '$50M', timeframe: '6 months', employees: '50,000+' },
      publishDate: '2025-01-17'
    },
    {
      id: 'ai-implementation-master-guide',
      type: 'resource',
      title: 'AI Implementation Master Guide 2026: Complete Framework for Enterprise Success',
      excerpt: 'The definitive guide to implementing AI in enterprise environments. Step-by-step framework, best practices, common pitfalls, and proven strategies for achieving 300%+ ROI.',
      url: '/resources/ai-implementation-master-guide-2026',
      readTime: '45 min read',
      featured: true,
      icon: BookOpen,
      category: 'Implementation Guide',
      tags: ['Implementation Guide', 'AI', 'Enterprise', 'Best Practices'],
      stats: { roi: '300%+', pages: '50+', frameworks: '10+' },
      publishDate: '2025-01-17'
    },
    {
      id: 'autonomous-systems-revolution',
      type: 'blog',
      title: 'AI 2025: The Next Generation Autonomous Systems Revolution',
      excerpt: 'Explore the revolutionary impact of autonomous AI systems on business operations, featuring real-world implementations and ROI analysis.',
      url: '/blog/ai-2025-next-generation-autonomous-systems-revolution',
      readTime: '12 min read',
      featured: false,
      icon: Zap,
      category: 'Autonomous AI',
      tags: ['AI', 'Autonomous Systems', 'Business Transformation'],
      stats: { roi: '340%', efficiency: '300%' },
      publishDate: '2025-01-17'
    },
    {
      id: 'global-enterprise-success',
      type: 'case-study',
      title: 'Global Enterprise AI Transformation: $2.8B Ultimate Success Story',
      excerpt: 'Comprehensive case study of a global enterprise achieving $2.8B in value through strategic AI implementation across all business units.',
      url: '/case-studies/global-enterprise-ai-transformation-2025-ultimate-success',
      readTime: '10 min read',
      featured: false,
      icon: Award,
      category: 'Global Success',
      tags: ['Case Study', 'AI Transformation', 'Enterprise', 'Success Story'],
      stats: { value: '$2.8B', units: '40+ countries' },
      publishDate: '2025-01-17'
    },
    {
      id: 'autonomous-systems-guide',
      type: 'resource',
      title: 'AI 2025 Autonomous Systems Implementation Master Guide',
      excerpt: 'Complete implementation guide for autonomous AI systems, covering strategy, technology selection, and deployment best practices.',
      url: '/resources/ai-2025-autonomous-systems-implementation-master-guide',
      readTime: '25 min read',
      featured: false,
      icon: Target,
      category: 'Implementation Guide',
      tags: ['Implementation Guide', 'AI', 'Best Practices', 'ROI'],
      stats: { steps: '50+', tools: '15+' },
      publishDate: '2025-01-17'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeTab);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study': return 'bg-green-100 text-green-800 border-green-200';
      case 'resource': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Blog Post';
      case 'case-study': return 'Case Study';
      case 'resource': return 'Resource Guide';
      default: return 'Content';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Enterprise AI': return TrendingUp;
      case 'Success Story': return Award;
      case 'Implementation Guide': return BookOpen;
      case 'Autonomous AI': return Zap;
      case 'Global Success': return Users;
      default: return FileText;
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold mb-6 shadow-lg">
            <Calendar className="w-5 h-5 mr-2" />
            January 2026 Content Release
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Comprehensive AI Content Library
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access our complete collection of AI insights, implementation guides, success stories, and tools designed to accelerate your transformation journey.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              {tab.label}
              <span className="ml-2 px-2 py-1 bg-white/20 text-xs rounded-full">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Content
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredContent.filter(item => item.featured).map((item, index) => {
              const IconComponent = item.icon;
              const CategoryIcon = getCategoryIcon(item.category);
              return (
                <div key={item.id} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 group">
                  {/* Content Header */}
                  <div className="p-8 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                      <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border ${getTypeColor(item.type)}`}>
                        {getTypeLabel(item.type)}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <CategoryIcon className="w-6 h-6 text-blue-600 mr-3" />
                      <span className="text-sm font-semibold text-blue-600">{item.category}</span>
                      {item.stats.roi && (
                        <span className="ml-3 px-3 py-1 bg-green-100 text-green-800 text-sm font-bold rounded-full">
                          {item.stats.roi} ROI
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {item.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(item.stats).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-gray-900">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      href={item.url}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group"
                    >
                      {item.type === 'case-study' ? 'View Success Story' : 
                       item.type === 'resource' ? 'Download Guide' : 'Read Article'}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Additional Resources
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.filter(item => !item.featured).map((item, index) => {
              const IconComponent = item.icon;
              const CategoryIcon = getCategoryIcon(item.category);
              return (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <CategoryIcon className="w-5 h-5 text-blue-600 mr-2" />
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(item.type)}`}>
                        {getTypeLabel(item.type)}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {item.readTime}
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  
                  {/* Quick Stats */}
                  {item.stats && (
                    <div className="flex gap-2 mb-4">
                      {Object.entries(item.stats).slice(0, 2).map(([key, value]) => (
                        <span key={key} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {value}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <Link 
                    href={item.url}
                    className="inline-flex items-center text-blue-600 text-sm font-semibold hover:text-blue-700 group"
                  >
                    {item.type === 'tool' ? 'Use Tool' : 
                     item.type === 'resource' ? 'View Guide' : 'Read More'}
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-12 text-white">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already using our proven AI implementation strategies and tools to achieve remarkable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Get Expert Consultation
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
            <div className="text-gray-600">New Articles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">2</div>
            <div className="text-gray-600">Case Studies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">2</div>
            <div className="text-gray-600">Implementation Guides</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">$100B+</div>
            <div className="text-gray-600">Proven ROI</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveContentShowcase2026;