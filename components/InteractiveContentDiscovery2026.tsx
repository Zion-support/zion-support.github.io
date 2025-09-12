import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ContentItem {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  readTime: string;
  tags: string[];
  href: string;
  featured: boolean;
  roi: string;
  lastUpdated: string;
}

const InteractiveContentDiscovery2026: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [sortBy, setSortBy] = useState('relevance');
  const [content, setContent] = useState<ContentItem[]>([]);
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    'All',
    'Neural Networks',
    'Quantum Computing',
    'Machine Learning',
    'Deep Learning',
    'Edge AI',
    'Security',
    'Analytics',
    'Integration',
    'Automation'
  ];

  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

  const sampleContent: ContentItem[] = [
    {
      id: 1,
      title: "🚀 AI 2026 Neural Interface Revolution",
      description: "Breakthrough brain-computer interfaces achieving 95% accuracy with real-time processing",
      category: "Neural Networks",
      difficulty: "Expert",
      readTime: "25 min",
      tags: ["Neural Interfaces", "BCI", "2026", "Revolutionary"],
      href: "/blog/ai-2026-neural-interface-revolution",
      featured: true,
      roi: "15,000%",
      lastUpdated: "2025-01-15"
    },
    {
      id: 2,
      title: "⚛️ Quantum-Neural Fusion Breakthrough",
      description: "Quantum-enhanced neural networks with exponential computational speed improvements",
      category: "Quantum Computing",
      difficulty: "Expert",
      readTime: "30 min",
      tags: ["Quantum AI", "Neural Networks", "Fusion", "2026"],
      href: "/blog/ai-2026-quantum-neural-fusion",
      featured: true,
      roi: "25,000%",
      lastUpdated: "2025-01-14"
    },
    {
      id: 3,
      title: "🧠 Advanced Deep Learning Architectures",
      description: "Next-generation deep learning models with 99.8% accuracy rates",
      category: "Deep Learning",
      difficulty: "Advanced",
      readTime: "20 min",
      tags: ["Deep Learning", "Architecture", "2026", "Advanced"],
      href: "/blog/ai-2026-deep-learning-architectures",
      featured: true,
      roi: "8,500%",
      lastUpdated: "2025-01-13"
    },
    {
      id: 4,
      title: "🌐 Edge AI Optimization Mastery",
      description: "Complete guide to deploying AI on edge devices with maximum efficiency",
      category: "Edge AI",
      difficulty: "Advanced",
      readTime: "18 min",
      tags: ["Edge Computing", "Optimization", "Deployment", "2026"],
      href: "/blog/ai-2026-edge-ai-optimization",
      featured: false,
      roi: "6,200%",
      lastUpdated: "2025-01-12"
    },
    {
      id: 5,
      title: "🔒 AI Security & Privacy Protocols 2026",
      description: "Enterprise-grade security frameworks for next-generation AI systems",
      category: "Security",
      difficulty: "Advanced",
      readTime: "22 min",
      tags: ["Security", "Privacy", "Enterprise", "2026"],
      href: "/blog/ai-2026-security-protocols",
      featured: false,
      roi: "4,800%",
      lastUpdated: "2025-01-11"
    },
    {
      id: 6,
      title: "📊 Predictive Analytics Revolution",
      description: "Advanced predictive analytics with 98.5% accuracy for business forecasting",
      category: "Analytics",
      difficulty: "Intermediate",
      readTime: "16 min",
      tags: ["Analytics", "Forecasting", "Business", "2026"],
      href: "/blog/ai-2026-predictive-analytics",
      featured: false,
      roi: "3,500%",
      lastUpdated: "2025-01-10"
    },
    {
      id: 7,
      title: "🔄 AI Integration Framework 2026",
      description: "Comprehensive framework for integrating multiple AI systems seamlessly",
      category: "Integration",
      difficulty: "Advanced",
      readTime: "24 min",
      tags: ["Integration", "Framework", "Systems", "2026"],
      href: "/blog/ai-2026-integration-framework",
      featured: true,
      roi: "7,200%",
      lastUpdated: "2025-01-09"
    },
    {
      id: 8,
      title: "🤖 Autonomous Systems Mastery",
      description: "Building fully autonomous AI systems with self-learning capabilities",
      category: "Automation",
      difficulty: "Expert",
      readTime: "28 min",
      tags: ["Autonomous", "Self-Learning", "AI Systems", "2026"],
      href: "/blog/ai-2026-autonomous-systems",
      featured: true,
      roi: "12,000%",
      lastUpdated: "2025-01-08"
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setContent(sampleContent);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = content;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'All') {
      filtered = filtered.filter(item => item.difficulty === selectedDifficulty);
    }

    // Sort content
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
        break;
      case 'roi':
        filtered.sort((a, b) => parseFloat(b.roi.replace(/[^\d.]/g, '')) - parseFloat(a.roi.replace(/[^\d.]/g, '')));
        break;
      case 'difficulty':
        const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3, 'Expert': 4 };
        filtered.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
        break;
      default:
        // Sort by featured first, then by relevance
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
    }

    setFilteredContent(filtered);
  }, [content, searchTerm, selectedCategory, selectedDifficulty, sortBy]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading advanced content discovery...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold mb-4">
            <span className="mr-2">🔍</span>
            INTERACTIVE CONTENT DISCOVERY 2026
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Your Perfect AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our advanced discovery engine to find exactly the AI content you need. Filter by category, difficulty, and more.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Content</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                placeholder="Search by title, description, or tags..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
              <select
                value={selectedDifficulty}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
                <option value="roi">Highest ROI</option>
                <option value="difficulty">Difficulty</option>
              </select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing {filteredContent.length} of {content.length} content items
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {selectedDifficulty !== 'All' && ` at ${selectedDifficulty} level`}
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Content Header */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800">
                      {item.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      {item.featured && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-red-500 to-pink-500 text-white animate-pulse">
                          FEATURED
                        </span>
                      )}
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(item.difficulty)}`}>
                        {item.difficulty}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    <Link to={item.href} className="hover:underline">
                      {item.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* ROI and Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-semibold">
                      💰 {item.roi} ROI
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.readTime} read
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Last Updated */}
                  <div className="text-xs text-gray-500 mb-4">
                    Updated: {new Date(item.lastUpdated).toLocaleDateString()}
                  </div>
                </div>

                {/* Action Button */}
                <div className="px-6 pb-6">
                  <Link
                    to={item.href}
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                  >
                    Explore Content
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or browse all available content.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedDifficulty('All');
                setSortBy('relevance');
              }}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our content library is constantly expanding. Request specific content or get personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/content-request"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
              >
                📝 Request Content
              </Link>
              <Link
                to="/personalized-recommendations"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                🎯 Get Recommendations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery2026;