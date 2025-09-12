import React, { useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Search, Filter, Calendar, Clock, User, ArrowRight, BookOpen, BarChart3, Play, Settings, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Content Showcase | Zion Tech Group',
  description: 'Explore our comprehensive collection of AI insights, case studies, webinars, and resources.',
  keywords: 'AI content, AI resources, AI insights, AI case studies, AI webinars, AI blog',
};

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'webinar' | 'service';
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  featured: boolean;
  tags: string[];
}

const ContentShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025: The Generative AI Enterprise Revolution',
      description: 'Discover how generative AI is revolutionizing enterprise operations with 300% ROI and unprecedented efficiency gains.',
      href: '/blog/ai-2025-generative-ai-enterprise-revolution',
      type: 'blog',
      category: 'Enterprise AI',
      readTime: '12 min',
      publishDate: '2025-01-17',
      author: 'Zion Tech Group',
      featured: true,
      tags: ['Generative AI', 'Enterprise', 'ROI', 'Automation']
    },
    {
      id: '2',
      title: 'AI 2025: The Cybersecurity Revolution',
      description: 'Explore how AI is revolutionizing cybersecurity with 99.7% threat detection accuracy and automated response systems.',
      href: '/blog/ai-2025-cybersecurity-revolution',
      type: 'blog',
      category: 'Cybersecurity',
      readTime: '15 min',
      publishDate: '2025-01-17',
      author: 'Zion Tech Group',
      featured: true,
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Automation']
    },
    {
      id: '3',
      title: 'AI Retail Transformation: 400% Revenue Growth',
      description: 'Complete case study: How a major retail chain achieved 400% revenue growth through AI-powered personalization.',
      href: '/case-studies/ai-2025-retail-transformation-breakthrough',
      type: 'case-study',
      category: 'Retail',
      readTime: '18 min',
      publishDate: '2025-01-17',
      author: 'Zion Tech Group',
      featured: true,
      tags: ['Retail', 'Personalization', 'Revenue Growth', 'AI Implementation']
    },
    {
      id: '4',
      title: 'AI 2025 Implementation Masterclass: Advanced Strategies',
      description: 'Join our exclusive 6-hour masterclass on advanced AI implementation strategies with industry experts.',
      href: '/webinars/ai-2025-implementation-masterclass-advanced',
      type: 'webinar',
      category: 'Education',
      readTime: '6 hours',
      publishDate: '2025-02-15',
      author: 'Zion Tech Group',
      featured: true,
      tags: ['Masterclass', 'Implementation', 'Strategy', 'Training']
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-5 h-5" />;
      case 'case-study':
        return <BarChart3 className="w-5 h-5" />;
      case 'webinar':
        return <Play className="w-5 h-5" />;
      case 'service':
        return <Settings className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'webinar':
        return 'bg-orange-100 text-orange-800';
      case 'service':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI Content Showcase
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore our comprehensive collection of AI insights, case studies, webinars, and resources.
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search content, tags, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Types</option>
                    <option value="blog">Blog</option>
                    <option value="case-study">Case Study</option>
                    <option value="webinar">Webinar</option>
                    <option value="service">Service</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {filteredContent.length} Content {filteredContent.length === 1 ? 'Item' : 'Items'} Found
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow duration-300 ${
                item.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-t-xl">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Featured Content</span>
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-2 capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{item.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(item.publishDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <Link
                  href={item.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with AI Insights</h2>
          <p className="text-xl mb-8">
            Get the latest AI trends, case studies, and implementation strategies delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;