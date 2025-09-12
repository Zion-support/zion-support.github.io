import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  readTime: string;
  isNew: boolean;
  featured: boolean;
  image?: string;
  tags: string[];
  author?: string;
  publishDate: string;
}

const EnhancedContentShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const contentItems: ContentItem[] = [
    {
      id: 'enterprise-ai-transformation',
      title: 'Enterprise AI Transformation 2025: Complete Implementation Guide',
      description: 'Discover how enterprises are leveraging AI for digital transformation, automation, and competitive advantage. Real-world case studies and implementation strategies.',
      href: '/blog/ai-2025-enterprise-ai-transformation',
      category: 'Enterprise AI',
      readTime: '12 min read',
      isNew: true,
      featured: true,
      tags: ['Enterprise', 'AI Strategy', 'Digital Transformation', 'Case Studies'],
      author: 'Zion Tech Group',
      publishDate: '2025-01-15'
    },
    {
      id: 'healthcare-diagnosis-revolution',
      title: 'AI Healthcare Diagnosis Revolution 2025: Transforming Medical Practice',
      description: 'Explore how AI is revolutionizing healthcare diagnosis, improving accuracy, reducing costs, and saving lives. Real-world case studies and implementation insights.',
      href: '/blog/ai-healthcare-diagnosis-revolution-2025',
      category: 'Healthcare AI',
      readTime: '15 min read',
      isNew: true,
      featured: true,
      tags: ['Healthcare', 'Medical AI', 'Diagnosis', 'Medical Innovation'],
      author: 'Zion Tech Group',
      publishDate: '2025-01-14'
    },
    {
      id: 'ai-automation-guide',
      title: 'AI Automation Enterprise Guide 2025: Complete Implementation Playbook',
      description: 'Master enterprise AI automation with our comprehensive guide. Learn strategies, tools, and best practices for successful AI implementation in 2025.',
      href: '/resources/ai-automation-enterprise-guide-2025',
      category: 'Automation',
      readTime: 'Comprehensive Guide',
      isNew: true,
      featured: true,
      tags: ['Automation', 'Enterprise', 'Implementation', 'Best Practices'],
      author: 'Zion Tech Group',
      publishDate: '2025-01-13'
    },
    {
      id: 'multimodal-ai-revolution',
      title: 'Multimodal AI Revolution 2025: The Future of Intelligent Systems',
      description: 'Explore the breakthrough in multimodal AI that processes text, images, audio, and video simultaneously, revolutionizing how we interact with technology.',
      href: '/blog/ai-2025-multimodal-revolution',
      category: 'AI Innovation',
      readTime: '10 min read',
      isNew: false,
      featured: true,
      tags: ['Multimodal AI', 'Innovation', 'Future Tech', 'AI Systems'],
      author: 'Zion Tech Group',
      publishDate: '2025-01-10'
    },
    {
      id: 'robotics-automation',
      title: 'Advanced Robotics & AI Integration: Manufacturing Revolution',
      description: 'The future of manufacturing with intelligent robotic systems, autonomous operations, and human-robot collaboration in industrial settings.',
      href: '/blog/ai-2025-advanced-robotics',
      category: 'Robotics',
      readTime: '8 min read',
      isNew: false,
      featured: true,
      tags: ['Robotics', 'Manufacturing', 'Automation', 'Industrial AI'],
      author: 'Zion Tech Group',
      publishDate: '2025-01-08'
    },
    {
      id: 'sustainability-green-tech',
      title: 'AI for Sustainability & Green Tech: Environmental Solutions',
      description: 'How AI is driving environmental sustainability through smart energy management, carbon reduction, and green technology innovations.',
      href: '/blog/ai-2025-sustainability-green-tech',
      category: 'Sustainability',
      readTime: '9 min read',
      isNew: false,
      featured: false,
      tags: ['Sustainability', 'Green Tech', 'Environment', 'Climate'],
      author: 'Zion Tech Group',
      publishDate: '2025-01-05'
    },
    {
      id: 'cybersecurity-ai',
      title: 'AI-Powered Cybersecurity: Advanced Threat Detection',
      description: 'Next-generation cybersecurity solutions powered by AI for real-time threat detection, automated response, and proactive security measures.',
      href: '/blog/ai-2025-cybersecurity-advanced',
      category: 'Cybersecurity',
      readTime: '11 min read',
      isNew: false,
      featured: false,
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Protection'],
      author: 'Zion Tech Group',
      publishDate: '2025-01-03'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing & AI: The Next Frontier',
      description: 'Exploring the intersection of quantum computing and artificial intelligence, and how it will revolutionize computational capabilities.',
      href: '/blog/ai-quantum-computing-breakthrough-2025',
      category: 'Quantum Computing',
      readTime: '13 min read',
      isNew: false,
      featured: false,
      tags: ['Quantum Computing', 'AI', 'Future Tech', 'Computing'],
      author: 'Zion Tech Group',
      publishDate: '2025-01-01'
    }
  ];

  const categories = ['All', ...Array.from(new Set(contentItems.map(item => item.category)))];

  const filteredContent = contentItems.filter(item => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  const sortedContent = [...filteredContent].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    } else if (sortBy === 'oldest') {
      return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
    } else if (sortBy === 'featured') {
      return b.featured ? 1 : -1;
    }
    return 0;
  });

  const featuredContent = contentItems.filter(item => item.featured);
  const newContent = contentItems.filter(item => item.isNew);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest AI Insights & Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our comprehensive collection of AI research, implementation guides, 
            and real-world case studies from industry experts.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600">{contentItems.length}</div>
            <div className="text-gray-600">Total Articles</div>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-green-600">{newContent.length}</div>
            <div className="text-gray-600">New This Month</div>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-purple-600">{featuredContent.length}</div>
            <div className="text-gray-600">Featured Content</div>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-orange-600">{categories.length - 1}</div>
            <div className="text-gray-600">Categories</div>
          </div>
        </div>

        {/* Featured Content Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🌟 Featured Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContent.slice(0, 3).map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                    {item.isNew && (
                      <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{item.readTime}</span>
                    <span className="group-hover:text-blue-600 transition-colors">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="featured">Featured First</option>
          </select>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-blue-200 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    {item.isNew && (
                      <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        NEW
                      </span>
                    )}
                    {item.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        ⭐
                      </span>
                    )}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h4>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="text-gray-500 text-xs px-2 py-1">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{item.readTime}</span>
                  <span className="group-hover:text-blue-600 transition-colors">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest AI Insights</h3>
            <p className="text-lg mb-6 opacity-90">
              Get exclusive access to our latest research, case studies, and implementation guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/newsletter"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe to Newsletter
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;