import React, { useState, useEffect } from 'react';

interface ContentItem {
  id: string;
  title: string;
  type: 'page' | 'component' | 'service' | 'blog';
  status: 'published' | 'draft' | 'archived';
  lastModified: string;
  views: number;
  category: string;
}

const ContentManagementSystem: React.FC = () => {
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate content data
    const mockContent: ContentItem[] = [
      // Revolutionary Tech Pages
      { id: '1', title: 'Revolutionary Tech Breakthrough 2030', type: 'page', status: 'published', lastModified: '2024-01-15', views: 15420, category: 'revolutionary-tech' },
      { id: '2', title: 'Ultimate AI Consciousness 2032', type: 'page', status: 'published', lastModified: '2024-01-14', views: 12850, category: 'ai-consciousness' },
      { id: '3', title: 'Quantum Reality Engine 2035', type: 'page', status: 'published', lastModified: '2024-01-13', views: 11200, category: 'quantum-computing' },
      { id: '4', title: 'Neural Interface Revolution 2025', type: 'page', status: 'published', lastModified: '2024-01-12', views: 9800, category: 'neural-interfaces' },
      { id: '5', title: 'Consciousness Computing Revolution 2026', type: 'page', status: 'published', lastModified: '2024-01-11', views: 8750, category: 'consciousness-computing' },
      
      // AI Services
      { id: '6', title: 'AI Autonomous Business Manager', type: 'service', status: 'published', lastModified: '2024-01-10', views: 15600, category: 'ai-services' },
      { id: '7', title: 'AI Healthcare Platform', type: 'service', status: 'published', lastModified: '2024-01-09', views: 13200, category: 'ai-services' },
      { id: '8', title: 'AI Cybersecurity Solutions', type: 'service', status: 'published', lastModified: '2024-01-08', views: 11800, category: 'ai-services' },
      
      // Components
      { id: '9', title: 'Interactive Tech Showcase 2025', type: 'component', status: 'published', lastModified: '2024-01-07', views: 8900, category: 'interactive-components' },
      { id: '10', title: 'Revolutionary Content Banner 2025', type: 'component', status: 'published', lastModified: '2024-01-06', views: 7200, category: 'content-banners' },
      { id: '11', title: 'Ultimate Content Carousel 2030', type: 'component', status: 'published', lastModified: '2024-01-05', views: 6800, category: 'content-carousels' },
      
      // Blog Posts
      { id: '12', title: 'Revolutionary Tech Blog 2027', type: 'blog', status: 'published', lastModified: '2024-01-04', views: 5600, category: 'tech-blogs' },
      { id: '13', title: 'Future AI Consciousness Predictions', type: 'blog', status: 'draft', lastModified: '2024-01-03', views: 0, category: 'tech-blogs' },
      { id: '14', title: 'Quantum Computing Breakthroughs 2035', type: 'blog', status: 'published', lastModified: '2024-01-02', views: 4200, category: 'tech-blogs' }
    ];

    setContentItems(mockContent);
  }, []);

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'revolutionary-tech', name: 'Revolutionary Tech', count: contentItems.filter(item => item.category === 'revolutionary-tech').length },
    { id: 'ai-consciousness', name: 'AI Consciousness', count: contentItems.filter(item => item.category === 'ai-consciousness').length },
    { id: 'quantum-computing', name: 'Quantum Computing', count: contentItems.filter(item => item.category === 'quantum-computing').length },
    { id: 'neural-interfaces', name: 'Neural Interfaces', count: contentItems.filter(item => item.category === 'neural-interfaces').length },
    { id: 'consciousness-computing', name: 'Consciousness Computing', count: contentItems.filter(item => item.category === 'consciousness-computing').length },
    { id: 'ai-services', name: 'AI Services', count: contentItems.filter(item => item.category === 'ai-services').length },
    { id: 'interactive-components', name: 'Interactive Components', count: contentItems.filter(item => item.category === 'interactive-components').length },
    { id: 'content-banners', name: 'Content Banners', count: contentItems.filter(item => item.category === 'content-banners').length },
    { id: 'content-carousels', name: 'Content Carousels', count: contentItems.filter(item => item.category === 'content-carousels').length },
    { id: 'tech-blogs', name: 'Tech Blogs', count: contentItems.filter(item => item.category === 'tech-blogs').length }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'page': return '📄';
      case 'component': return '🧩';
      case 'service': return '⚙️';
      case 'blog': return '📝';
      default: return '📄';
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-200 flex items-center space-x-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span>Content Manager</span>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      </button>

      {isVisible && (
        <div className="absolute top-12 right-0 w-96 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 p-6 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Content Management</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search */}
          <div className="mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search content..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Categories */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-indigo-100 text-indigo-800'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Content List */}
          <div className="space-y-3">
            {filteredContent.map((item) => (
              <div
                key={item.id}
                className="p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-lg">{getTypeIcon(item.type)}</span>
                      <h4 className="text-sm font-semibold text-gray-900 truncate">
                        {item.title}
                      </h4>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span className={`px-2 py-1 rounded-full ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                      <span>{item.type}</span>
                      <span>•</span>
                      <span>{formatNumber(item.views)} views</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Modified: {item.lastModified}
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <button className="p-1 text-gray-400 hover:text-indigo-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button className="p-1 text-gray-400 hover:text-red-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-500">Total Content</div>
                <div className="font-semibold text-gray-900">{contentItems.length}</div>
              </div>
              <div>
                <div className="text-gray-500">Published</div>
                <div className="font-semibold text-green-600">
                  {contentItems.filter(item => item.status === 'published').length}
                </div>
              </div>
              <div>
                <div className="text-gray-500">Drafts</div>
                <div className="font-semibold text-yellow-600">
                  {contentItems.filter(item => item.status === 'draft').length}
                </div>
              </div>
              <div>
                <div className="text-gray-500">Total Views</div>
                <div className="font-semibold text-gray-900">
                  {formatNumber(contentItems.reduce((sum, item) => sum + item.views, 0))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentManagementSystem;