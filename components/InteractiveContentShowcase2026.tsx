import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: 'blog' | 'case-study' | 'tool' | 'guide';
  readTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  featured: boolean;
  url: string;
  metrics?: {
    views?: number;
    rating?: number;
    roi?: string;
  };
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2026-enterprise-autonomous-systems',
    title: 'AI 2026: Enterprise Autonomous Systems Revolution',
    description: 'Discover how autonomous AI systems are transforming enterprise operations with 95% automation and $15M+ savings.',
    category: 'blog',
    readTime: '15 min',
    difficulty: 'advanced',
    tags: ['autonomous systems', 'enterprise AI', 'automation', '2026 trends'],
    featured: true,
    url: '/blog/ai-2026-enterprise-autonomous-systems',
    metrics: { views: 12500, rating: 4.9 }
  },
  {
    id: 'ai-quantum-computing-breakthrough-2026',
    title: 'AI Quantum Computing Breakthrough 2026',
    description: 'Explore revolutionary quantum-AI hybrid systems delivering 10,000x performance improvements in optimization.',
    category: 'blog',
    readTime: '18 min',
    difficulty: 'advanced',
    tags: ['quantum computing', 'AI breakthrough', 'optimization', 'hybrid systems'],
    featured: true,
    url: '/blog/ai-quantum-computing-breakthrough-2026',
    metrics: { views: 8900, rating: 4.8 }
  },
  {
    id: 'ai-sustainability-green-tech-2026',
    title: 'AI Sustainability & Green Tech 2026',
    description: 'Learn how AI is driving carbon-neutral solutions and 90% energy efficiency improvements.',
    category: 'blog',
    readTime: '16 min',
    difficulty: 'intermediate',
    tags: ['sustainability', 'green tech', 'carbon neutral', 'environmental AI'],
    featured: true,
    url: '/blog/ai-sustainability-green-tech-2026',
    metrics: { views: 10200, rating: 4.7 }
  },
  {
    id: 'ai-2026-mega-transformation-success',
    title: 'AI 2026 Mega Transformation: $50M ROI Success',
    description: 'Fortune 500 case study showing how comprehensive AI transformation delivered $50M annual ROI.',
    category: 'case-study',
    readTime: '12 min',
    difficulty: 'intermediate',
    tags: ['case study', 'Fortune 500', 'ROI', 'transformation'],
    featured: true,
    url: '/case-studies/ai-2026-mega-transformation-success',
    metrics: { views: 15600, rating: 4.9, roi: '$50M' }
  },
  {
    id: 'ai-quantum-optimization-breakthrough-2026',
    title: 'Quantum Optimization Breakthrough: $25M Success',
    description: 'Global logistics company achieved $25M savings through quantum-AI hybrid optimization systems.',
    category: 'case-study',
    readTime: '14 min',
    difficulty: 'advanced',
    tags: ['quantum', 'optimization', 'logistics', 'breakthrough'],
    featured: true,
    url: '/case-studies/ai-quantum-optimization-breakthrough-2026',
    metrics: { views: 7800, rating: 4.8, roi: '$25M' }
  },
  {
    id: 'ai-roi-calculator-2026',
    title: 'AI ROI Calculator 2026',
    description: 'Interactive tool to calculate potential return on investment for your AI transformation project.',
    category: 'tool',
    readTime: '5 min',
    difficulty: 'beginner',
    tags: ['calculator', 'ROI', 'planning', 'interactive'],
    featured: false,
    url: '#calculator',
    metrics: { views: 25000, rating: 4.6 }
  }
];

export default function InteractiveContentShowcase2026() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || item.difficulty === selectedDifficulty;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'tool': return '🛠️';
      case 'guide': return '📖';
      default: return '📄';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Interactive Content Hub 2026</h2>
        <p className="text-xl text-gray-600">Discover cutting-edge AI insights, success stories, and interactive tools</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Content</label>
            <input
              type="text"
              placeholder="Search articles, case studies, tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              <option value="blog">Blog Posts</option>
              <option value="case-study">Case Studies</option>
              <option value="tool">Interactive Tools</option>
              <option value="guide">Guides</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-600">Popular tags:</span>
          {['AI 2026', 'quantum computing', 'sustainability', 'ROI', 'automation', 'enterprise'].map(tag => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            {item.featured && (
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 text-xs font-semibold">
                ⭐ FEATURED
              </div>
            )}
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{getCategoryIcon(item.category)}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(item.difficulty)}`}>
                  {item.difficulty}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {item.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    {tag}
                  </span>
                ))}
                {item.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    +{item.tags.length - 3} more
                  </span>
                )}
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{item.readTime} read</span>
                {item.metrics && (
                  <div className="flex items-center space-x-3">
                    {item.metrics.views && (
                      <span>👁️ {item.metrics.views.toLocaleString()}</span>
                    )}
                    {item.metrics.rating && (
                      <span>⭐ {item.metrics.rating}</span>
                    )}
                  </div>
                )}
              </div>
              
              {item.metrics?.roi && (
                <div className="bg-green-50 text-green-800 px-3 py-1 rounded text-sm font-semibold mb-4 text-center">
                  💰 {item.metrics.roi} ROI
                </div>
              )}
              
              <div className="flex space-x-2">
                {item.url === '#calculator' ? (
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold">
                    Use Tool
                  </button>
                ) : (
                  <Link 
                    href={item.url}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold text-center"
                  >
                    Read More
                  </Link>
                )}
                <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  💾
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No content found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or browse all content</p>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
        <p className="text-lg mb-6 opacity-90">
          Join thousands of companies already achieving breakthrough results with our AI solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </Link>
          <Link href="/case-studies" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            View All Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
}