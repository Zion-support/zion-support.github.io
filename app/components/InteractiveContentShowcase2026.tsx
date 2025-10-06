import React, { useState } from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Content', count: 24 },
    { id: 'ai', name: 'AI & Machine Learning', count: 8 },
    { id: 'tech', name: 'Technology', count: 6 },
    { id: 'business', name: 'Business Strategy', count: 5 },
    { id: 'case-studies', name: 'Case Studies', count: 5 },
  ];

  const contentItems = [
    {
      id: 1,
      title: 'The Future of Autonomous Systems in 2026',
      description: 'Exploring next-generation autonomous technologies and their impact on industries.',
      category: 'ai',
      readTime: '12 min read',
      publishDate: '2024-01-15',
      featured: true,
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs',
      description: 'Latest developments in quantum computing and practical applications.',
      category: 'tech',
      readTime: '18 min read',
      publishDate: '2024-01-12',
      featured: false,
    },
    {
      id: 3,
      title: 'Enterprise AI Transformation Success Story',
      description: 'How a Fortune 500 company achieved 300% ROI with our AI solutions.',
      category: 'case-studies',
      readTime: '10 min read',
      publishDate: '2024-01-10',
      featured: true,
    },
    {
      id: 4,
      title: 'Building Resilient Digital Infrastructure',
      description: 'Best practices for creating robust and scalable digital systems.',
      category: 'tech',
      readTime: '15 min read',
      publishDate: '2024-01-08',
      featured: false,
    },
    {
      id: 5,
      title: 'AI-Driven Business Intelligence Strategies',
      description: 'Leveraging AI for data-driven decision making and competitive advantage.',
      category: 'business',
      readTime: '14 min read',
      publishDate: '2024-01-05',
      featured: false,
    },
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Interactive Content Showcase 2026
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our curated collection of cutting-edge content and insights for the future of technology.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all ${
                item.featured ? 'ring-2 ring-blue-400' : ''
              }`}
            >
              {item.featured && (
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-sm font-medium text-yellow-400">Featured</span>
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-4">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span>{item.readTime}</span>
                <span>{new Date(item.publishDate).toLocaleDateString()}</span>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Read Article
              </button>
            </div>
          ))}
        </div>
        
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No content found for this category.</p>
          </div>
        )}
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:-translate-y-1">
            Explore All Content
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentShowcase2026;