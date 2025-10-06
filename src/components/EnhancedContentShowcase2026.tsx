import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'guide';
  readTime: string;
  publishDate: string;
  category: string;
  featured?: boolean;
}

const EnhancedContentShowcase2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI-Powered Business Transformation',
      description: 'Discover how AI is revolutionizing business operations and driving unprecedented growth.',
      type: 'case-study',
      readTime: '15 min',
      publishDate: '2026-01-15',
      category: 'AI',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration Best Practices',
      description: 'A comprehensive guide to successful cloud migration strategies.',
      type: 'guide',
      readTime: '20 min',
      publishDate: '2026-01-10',
      category: 'Cloud'
    },
    {
      id: '3',
      title: 'Digital Transformation Success Stories',
      description: 'Real-world examples of successful digital transformation initiatives.',
      type: 'blog',
      readTime: '10 min',
      publishDate: '2026-01-05',
      category: 'Digital'
    }
  ];

  const categories = ['all', 'AI', 'Cloud', 'Digital'];
  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">2026 Content Showcase</h2>
        <p className="text-gray-600 mb-6">Explore our latest insights and solutions</p>
        
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category === 'all' ? 'All' : category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map(item => (
          <div
            key={item.id}
            className={`bg-white rounded-lg shadow-md overflow-hidden ${
              item.featured ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">{item.category}</span>
                {item.featured && (
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    Featured
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{item.readTime} read</span>
                <span>{item.publishDate}</span>
              </div>
              
              <Link
                to={`/content/${item.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2026;