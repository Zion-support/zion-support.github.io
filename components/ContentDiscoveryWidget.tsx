import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ContentDiscoveryWidget() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const tags = [
    { id: 'breakthrough', name: 'Breakthrough', color: 'from-red-500 to-pink-500' },
    { id: 'roi', name: 'High ROI', color: 'from-green-500 to-emerald-500' },
    { id: 'quantum', name: 'Quantum', color: 'from-indigo-500 to-purple-500' },
    { id: 'automation', name: 'Automation', color: 'from-blue-500 to-cyan-500' },
    { id: 'case-study', name: 'Case Study', color: 'from-orange-500 to-red-500' },
    { id: 'implementation', name: 'Implementation', color: 'from-teal-500 to-green-500' },
    { id: 'predictions', name: 'Predictions', color: 'from-purple-500 to-pink-500' },
    { id: 'revolutionary', name: 'Revolutionary', color: 'from-yellow-500 to-orange-500' }
  ];

  const contentDatabase = [
    {
      id: 1,
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Revolutionary AI breakthrough delivering 10,000% ROI with 99.9% accuracy",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      tags: ['breakthrough', 'roi', 'revolutionary'],
      category: 'breakthrough',
      icon: '🚀',
      metrics: { roi: '10,000%', accuracy: '99.9%' }
    },
    {
      id: 2,
      title: "Global Transformation Success Story",
      description: "Fortune 500 company achieves unprecedented ROI through AI implementation",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      tags: ['case-study', 'roi', 'breakthrough'],
      category: 'case-studies',
      icon: '🏆',
      metrics: { roi: '10,000%', efficiency: '500%' }
    },
    {
      id: 3,
      title: "Quantum-Neural Fusion Breakthrough",
      description: "Revolutionary integration of quantum computing with neural networks",
      link: "/blog/quantum-neural-fusion-2026",
      tags: ['quantum', 'breakthrough', 'revolutionary'],
      category: 'blog',
      icon: '⚛️',
      metrics: { speed: '10,000x', accuracy: '99.9%' }
    },
    {
      id: 4,
      title: "Revolutionary Implementation Guide",
      description: "Complete step-by-step guide for AI 2025 breakthrough implementation",
      link: "/resources/ai-2025-revolutionary-implementation-guide",
      tags: ['implementation', 'roi', 'revolutionary'],
      category: 'resources',
      icon: '📚',
      metrics: { phases: '4', success: '99%' }
    },
    {
      id: 5,
      title: "Autonomous Manufacturing Revolution",
      description: "8,500% ROI achieved through autonomous manufacturing systems",
      link: "/case-studies/ai-2026-autonomous-manufacturing-revolution",
      tags: ['automation', 'roi', 'case-study'],
      category: 'case-studies',
      icon: '🏭',
      metrics: { roi: '8,500%', efficiency: '300%' }
    },
    {
      id: 6,
      title: "Future Technology Predictions",
      description: "Comprehensive analysis of AI trends and future technology developments",
      link: "/blog/ai-2026-future-predictions-breakthrough",
      tags: ['predictions', 'revolutionary', 'breakthrough'],
      category: 'blog',
      icon: '🔮',
      metrics: { probability: '95%', impact: 'Transformative' }
    }
  ];

  useEffect(() => {
    if (searchQuery || selectedTags.length > 0) {
      setIsLoading(true);
      // Simulate search delay
      setTimeout(() => {
        const filtered = contentDatabase.filter(item => {
          const matchesSearch = searchQuery === '' || 
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
          
          const matchesTags = selectedTags.length === 0 || 
            selectedTags.some(tag => item.tags.includes(tag));
          
          return matchesSearch && matchesTags;
        });
        
        setRecommendations(filtered);
        setIsLoading(false);
      }, 500);
    } else {
      setRecommendations([]);
    }
  }, [searchQuery, selectedTags]);

  const toggleTag = (tagId: string) => {
    setSelectedTags(prev => 
      prev.includes(tagId) 
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
    setRecommendations([]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Content Discovery Widget
        </h3>
        <p className="text-gray-600">
          Discover the perfect AI content for your needs using our intelligent search and recommendation system
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for AI content, breakthroughs, case studies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Tags Filter */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Filter by Tags</h4>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => toggleTag(tag.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedTags.includes(tag.id)
                  ? `bg-gradient-to-r ${tag.color} text-white shadow-lg transform scale-105`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag.name}
            </button>
          ))}
        </div>
        {(searchQuery || selectedTags.length > 0) && (
          <button
            onClick={clearFilters}
            className="mt-4 text-blue-600 hover:text-blue-800 font-semibold"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Results */}
      <div className="min-h-[400px]">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-4 text-gray-600">Searching content...</span>
          </div>
        ) : recommendations.length > 0 ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-gray-900">
                Found {recommendations.length} content items
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendations.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <h5 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h5>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          {item.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                            >
                              {tags.find(t => t.id === tag)?.name}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={item.link}
                          className="text-blue-600 hover:text-blue-800 font-semibold"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : searchQuery || selectedTags.length > 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">No content found</h4>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={clearFilters}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Clear filters and start over
            </button>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🌟</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Discover Amazing Content</h4>
            <p className="text-gray-600">
              Use the search bar or tags above to find the perfect AI content for your needs
            </p>
          </div>
        )}
      </div>

      {/* Quick Access */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Access</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/ai-2025-ultimate-breakthrough-revolution"
            className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-2xl mb-2">🚀</div>
            <div className="text-sm font-semibold text-gray-900">Breakthrough</div>
          </Link>
          <Link
            href="/case-studies"
            className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-2xl mb-2">🏆</div>
            <div className="text-sm font-semibold text-gray-900">Case Studies</div>
          </Link>
          <Link
            href="/blog"
            className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-2xl mb-2">📝</div>
            <div className="text-sm font-semibold text-gray-900">Blog Posts</div>
          </Link>
          <Link
            href="/resources"
            className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-2xl mb-2">📚</div>
            <div className="text-sm font-semibold text-gray-900">Resources</div>
          </Link>
        </div>
      </div>
    </div>
  );
}