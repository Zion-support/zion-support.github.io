import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  tags: string[];
  featured: boolean;
  gradient: string;
  icon: string;
}

export default function InteractiveContentDiscoveryWidget() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isExpanded, setIsExpanded] = useState(false);
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-2025-breakthrough',
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthrough with 10,000% ROI and quantum-AI fusion technology',
      href: '/ai-2025-ultimate-breakthrough-revolution',
      category: 'ai-2025',
      tags: ['breakthrough', 'revolution', 'quantum', 'roi'],
      featured: true,
      gradient: 'from-red-500 to-pink-500',
      icon: '🚀'
    },
    {
      id: 'quantum-computing-2030',
      title: 'Quantum Computing Breakthroughs 2030',
      description: 'Revolutionary quantum technologies that will reshape reality itself',
      href: '/quantum-computing-breakthroughs-2030',
      category: 'quantum',
      tags: ['quantum', 'computing', 'breakthrough', '2030'],
      featured: true,
      gradient: 'from-cyan-500 to-purple-500',
      icon: '⚛️'
    },
    {
      id: 'ai-2026-automation',
      title: 'AI 2026 Advanced Automation Mastery',
      description: 'Master the future of automation with 5,000% ROI and autonomous operations',
      href: '/ai-2026-advanced-automation-mastery',
      category: 'ai-2026',
      tags: ['automation', 'mastery', 'ai-2026', 'roi'],
      featured: true,
      gradient: 'from-blue-500 to-purple-500',
      icon: '🤖'
    },
    {
      id: 'ai-2026-quantum-neural',
      title: 'AI 2026 Quantum-Neural Fusion',
      description: 'Revolutionary fusion of quantum computing and neural networks',
      href: '/ai-2026-quantum-neural-fusion-revolutionary-breakthrough',
      category: 'ai-2026',
      tags: ['quantum', 'neural', 'fusion', 'breakthrough'],
      featured: false,
      gradient: 'from-purple-500 to-pink-500',
      icon: '🧠'
    },
    {
      id: 'ai-2027-predictions',
      title: 'AI 2027 Future Predictions',
      description: 'Comprehensive predictions for the future of AI and technology',
      href: '/ai-2027-future-predictions-revolutionary',
      category: 'ai-2027',
      tags: ['predictions', 'future', 'ai-2027', 'technology'],
      featured: false,
      gradient: 'from-green-500 to-teal-500',
      icon: '🔮'
    },
    {
      id: 'ai-2028-breakthrough',
      title: 'AI 2028 Revolutionary Breakthroughs',
      description: 'Next-generation AI technologies and breakthrough innovations',
      href: '/ai-2028-future-predictions-breakthrough',
      category: 'ai-2028',
      tags: ['breakthrough', 'ai-2028', 'revolutionary', 'innovation'],
      featured: false,
      gradient: 'from-orange-500 to-red-500',
      icon: '🌟'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'ai-2025', name: 'AI 2025', icon: '🚀' },
    { id: 'ai-2026', name: 'AI 2026', icon: '🤖' },
    { id: 'ai-2027', name: 'AI 2027', icon: '🔮' },
    { id: 'ai-2028', name: 'AI 2028', icon: '🌟' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' }
  ];

  useEffect(() => {
    let filtered = contentItems;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredContent(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center">
          <span className="mr-2">🔍</span>
          Discover Revolutionary Content
        </h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg 
            className={`w-6 h-6 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-6">
          {/* Search and Filter Controls */}
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
                  }`}
                >
                  <span className="mr-1">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredContent.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group block bg-white rounded-xl p-4 border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-3">
                  <div className={`text-2xl p-2 rounded-lg bg-gradient-to-r ${item.gradient} text-white`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      {item.featured && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                          ⭐ Featured
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredContent.length === 0 && (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">🔍</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">No content found</h4>
              <p className="text-gray-600">Try adjusting your search terms or category filters.</p>
            </div>
          )}

          {/* View All Link */}
          <div className="text-center pt-4 border-t border-gray-200">
            <Link
              href="/content-showcase"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">📚</span>
              View All Content
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}