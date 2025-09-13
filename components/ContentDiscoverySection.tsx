import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource' | 'service';
  category: string;
  readTime?: string;
  featured: boolean;
  icon: string;
  tags: string[];
  date: string;
}

const ContentDiscoverySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI Breakthrough Innovations 2025: Revolutionary Technologies Shaping the Future',
      description: 'Discover the most groundbreaking AI innovations of 2025. From AGI breakthroughs to quantum AI, explore technologies that are reshaping industries.',
      href: '/blog/ai-2025-breakthrough-innovations',
      type: 'blog',
      category: 'AI Innovations',
      readTime: '25 min read',
      featured: true,
      icon: '🚀',
      tags: ['AI', 'Innovation', 'Technology', 'Future'],
      date: 'Jan 30, 2025'
    },
    {
      id: '2',
      title: 'AI Sustainability & Green Tech 2025: Building Eco-Friendly AI Systems',
      description: 'Discover how AI is driving sustainability initiatives and reducing carbon footprints. Learn about smart energy management and climate solutions.',
      href: '/blog/ai-sustainability-green-tech-2025',
      type: 'blog',
      category: 'Sustainability',
      readTime: '20 min read',
      featured: true,
      icon: '🌱',
      tags: ['Sustainability', 'Green Tech', 'Environment', 'AI'],
      date: 'Jan 28, 2025'
    },
    {
      id: '3',
      title: 'AI Sustainability Transformation Success: 60% Energy Reduction & Carbon Neutrality',
      description: 'Fortune 500 manufacturing company achieves 60% energy reduction and carbon neutrality through AI-powered sustainability initiatives.',
      href: '/case-studies/ai-sustainability-transformation-2025',
      type: 'case-study',
      category: 'Case Study',
      featured: true,
      icon: '💰',
      tags: ['Case Study', 'Sustainability', 'Success', 'Manufacturing'],
      date: 'Jan 25, 2025'
    },
    {
      id: '4',
      title: 'AI Implementation Master Guide 2026: Complete 200+ Page Resource',
      description: 'Download our comprehensive AI Implementation Master Guide for 2026. Step-by-step instructions, templates, and best practices.',
      href: '/resources/ai-implementation-master-guide-2026',
      type: 'resource',
      category: 'Master Guide',
      featured: true,
      icon: '📚',
      tags: ['Guide', 'Implementation', 'Resources', 'AI'],
      date: 'Jan 30, 2025'
    },
    {
      id: '5',
      title: 'AI Enterprise Automation Revolution 2025',
      description: 'Discover how AI is transforming enterprise operations with 300% ROI and unprecedented efficiency gains.',
      href: '/blog/ai-2025-enterprise-automation-revolution',
      type: 'blog',
      category: 'Enterprise AI',
      readTime: '18 min read',
      featured: true,
      icon: '🏢',
      tags: ['Enterprise', 'Automation', 'ROI', 'AI'],
      date: 'Jan 27, 2025'
    },
    {
      id: '6',
      title: 'AI Healthcare Diagnosis Breakthrough 2025',
      description: 'Revolutionary AI innovations achieving 98.7% accuracy in medical diagnosis, saving lives and reducing costs.',
      href: '/blog/ai-healthcare-diagnosis-breakthrough-2025',
      type: 'blog',
      category: 'Healthcare AI',
      readTime: '22 min read',
      featured: true,
      icon: '🏥',
      tags: ['Healthcare', 'Diagnosis', 'Medical AI', 'Innovation'],
      date: 'Jan 26, 2025'
    },
    {
      id: '7',
      title: 'AI Financial Services Transformation: $50M Savings Case Study',
      description: 'Complete case study: How a major bank achieved 300% ROI through strategic AI implementation.',
      href: '/case-studies/ai-financial-services-transformation-2025',
      type: 'case-study',
      category: 'Case Study',
      featured: true,
      icon: '🏦',
      tags: ['Finance', 'Case Study', 'ROI', 'Transformation'],
      date: 'Jan 24, 2025'
    },
    {
      id: '8',
      title: 'AI Cybersecurity Checklist 2025: Essential Security Measures',
      description: 'Comprehensive security checklist covering 12 key areas and 80+ essential security measures for AI systems.',
      href: '/resources/ai-cybersecurity-checklist-2025',
      type: 'resource',
      category: 'Security',
      featured: true,
      icon: '🛡️',
      tags: ['Security', 'Checklist', 'Cybersecurity', 'AI'],
      date: 'Jan 23, 2025'
    }
  ];

  const categories = ['all', 'AI Innovations', 'Sustainability', 'Enterprise AI', 'Healthcare AI', 'Case Study', 'Master Guide', 'Security'];
  const types = ['all', 'blog', 'case-study', 'resource', 'service'];

  const filteredContent = contentItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const typeMatch = selectedType === 'all' || item.type === selectedType;
    return categoryMatch && typeMatch;
  });

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'Article';
      case 'case-study':
        return 'Case Study';
      case 'resource':
        return 'Resource';
      case 'service':
        return 'Service';
      default:
        return 'Content';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      case 'service':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🔍 CONTENT DISCOVERY</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Latest Content
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive collection of AI insights, case studies, and resources. 
            Filter by category or type to find exactly what you're looking for.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-700 mr-2">Categories:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-700 mr-2">Types:</span>
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedType === type
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {type === 'all' ? 'All Types' : getTypeLabel(type)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                  <div className="text-6xl">{item.icon}</div>
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                      NEW
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                    {item.readTime && (
                      <span className="text-gray-500 text-xs">{item.readTime}</span>
                    )}
                    <span className="text-gray-500 text-xs">•</span>
                    <span className="text-gray-500 text-xs">{item.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xs">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline text-sm">
                      {item.type === 'resource' ? 'Download →' : 'Read More →'}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters to see more content.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedType('all');
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/content-showcase"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            View All Content
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContentDiscoverySection;