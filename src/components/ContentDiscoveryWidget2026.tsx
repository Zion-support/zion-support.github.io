import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'guide' | 'case-study' | 'tool' | 'resource';
  featured: boolean;
  path: string;
  icon: string;
  tags: string[];
}

const ContentDiscoveryWidget2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI Implementation Mastery Guide 2026',
      description: 'Complete roadmap to implementing quantum-AI fusion solutions with 15,000x performance improvements',
      category: 'implementation',
      type: 'guide',
      featured: true,
      path: '/resources/ai-implementation-mastery-2026',
      icon: '📚',
      tags: ['AI Implementation', 'Quantum-AI', 'Performance', 'Guide']
    },
    {
      id: '2',
      title: 'Quantum-AI Breakthrough Case Study',
      description: 'How a Fortune 500 company achieved $2.3B in savings with quantum-AI fusion technology',
      category: 'case-studies',
      type: 'case-study',
      featured: true,
      path: '/case-studies/quantum-ai-breakthrough-enterprise-transformation',
      icon: '💼',
      tags: ['Case Study', 'Fortune 500', 'Quantum-AI', 'ROI']
    },
    {
      id: '3',
      title: 'AI ROI Calculator 2026',
      description: 'Interactive calculator to determine your potential AI investment returns based on proven methodologies',
      category: 'tools',
      type: 'tool',
      featured: true,
      path: '/tools/ai-roi-calculator-2026',
      icon: '📊',
      tags: ['ROI Calculator', 'Investment', 'Interactive', 'Tools']
    },
    {
      id: '4',
      title: 'Quantum Computing Solutions Guide',
      description: 'Comprehensive guide to quantum computing implementation and integration strategies',
      category: 'implementation',
      type: 'guide',
      featured: false,
      path: '/resources/quantum-computing-solutions-guide-2026',
      icon: '⚛️',
      tags: ['Quantum Computing', 'Solutions', 'Implementation']
    },
    {
      id: '5',
      title: 'Enterprise AI Transformation',
      description: 'Real-world case study of enterprise-scale AI transformation and digital modernization',
      category: 'case-studies',
      type: 'case-study',
      featured: false,
      path: '/case-studies/enterprise-ai-transformation-2026',
      icon: '🏢',
      tags: ['Enterprise', 'Transformation', 'AI', 'Case Study']
    },
    {
      id: '6',
      title: 'Neural Network Performance Optimizer',
      description: 'Advanced tool for optimizing neural network performance and efficiency metrics',
      category: 'tools',
      type: 'tool',
      featured: false,
      path: '/tools/neural-network-optimizer',
      icon: '🧠',
      tags: ['Neural Networks', 'Optimization', 'Performance', 'Tools']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'implementation', name: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length },
    { id: 'case-studies', name: 'Case Studies', count: contentItems.filter(item => item.category === 'case-studies').length },
    { id: 'tools', name: 'Tools', count: contentItems.filter(item => item.category === 'tools').length },
    { id: 'resources', name: 'Resources', count: contentItems.filter(item => item.category === 'resources').length }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredContent = contentItems.filter(item => item.featured);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guide': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-green-500 to-emerald-500';
      case 'tool': return 'from-purple-500 to-pink-500';
      case 'resource': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest breakthrough content, tools, and resources designed to transform your AI implementation journey
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search content, guides, case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Content */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Featured Content</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredContent.map(item => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(item.type)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs font-medium text-blue-400 uppercase tracking-wide">
                          {item.type.replace('-', ' ')}
                        </span>
                        <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-sm mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-xs bg-white/10 text-gray-400 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Content Grid */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">
            {selectedCategory === 'all' ? 'All Content' : categories.find(c => c.id === selectedCategory)?.name}
          </h3>
          
          {filteredContent.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map(item => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(item.type)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs font-medium text-blue-400 uppercase tracking-wide">
                          {item.type.replace('-', ' ')}
                        </span>
                        {item.featured && (
                          <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-sm mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-xs bg-white/10 text-gray-400 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                        {item.tags.length > 3 && (
                          <span className="text-xs bg-white/10 text-gray-400 px-2 py-1 rounded">
                            +{item.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No content found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filters</p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-purple-100 mb-6">
              Our experts can create custom content and solutions tailored to your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Custom Content
              </Link>
              <Link 
                to="/resources"
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-white/30"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentDiscoveryWidget2026;