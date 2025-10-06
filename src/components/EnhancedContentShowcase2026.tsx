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
      title: 'AI-Powered Business Transformation: A Complete Guide',
      description: 'Learn how to leverage AI for comprehensive business transformation with real-world case studies and implementation strategies.',
      type: 'guide',
      readTime: '15 min',
      publishDate: '2026-01-15',
      category: 'AI',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration Success Story: Enterprise Case Study',
      description: 'Discover how a Fortune 500 company successfully migrated to the cloud, reducing costs by 40% and improving scalability.',
      type: 'case-study',
      readTime: '12 min',
      publishDate: '2026-01-10',
      category: 'Cloud'
    },
    {
      id: '3',
      title: 'Digital Transformation Best Practices for 2026',
      description: 'Essential strategies and frameworks for successful digital transformation in the modern business landscape.',
      type: 'blog',
      readTime: '8 min',
      publishDate: '2026-01-05',
      category: 'Digital'
    }
  ];

  const categories = ['all', 'AI', 'Cloud', 'Digital', 'Security'];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const getTypeIcon = (type: ContentItem['type']) => {
    switch (type) {
      case 'guide':
        return '📚';
      case 'case-study':
        return '📊';
      case 'blog':
        return '📝';
      default:
        return '📄';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Enhanced Content Showcase 2026
        </h2>
        <p className="text-lg text-gray-600">
          Discover our latest insights, guides, and case studies
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${
              item.featured ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{getTypeIcon(item.type)}</span>
                {item.featured && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{item.readTime} read</span>
                <span>{item.publishDate}</span>
              </div>
              
              <Link
                to={`/content/${item.id}`}
                className="inline-block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
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