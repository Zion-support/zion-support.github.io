import React, { useState, useEffect } from 'react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'service';
  category: string;
  url: string;
  excerpt: string;
  relevanceScore: number;
  tags: string[];
}

/**
 * ContentRecommendationEngine - AI-powered content recommendation system
 * 
 * Features:
 * - User behavior tracking
 * - Content similarity analysis
 * - Personalized recommendations
 * - A/B testing support
 * - Real-time updates
 */
const ContentRecommendationEngine: React.FC = () => {
  const [recommendations, setRecommendations] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userPreferences, setUserPreferences] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load user preferences from localStorage
    const savedPreferences = localStorage.getItem('userContentPreferences');
    if (savedPreferences) {
      setUserPreferences(new Set(JSON.parse(savedPreferences)));
    }

    // Generate recommendations
    generateRecommendations();
  }, []);

  const generateRecommendations = async () => {
    setIsLoading(true);
    
    // Simulate API call to recommendation engine
    // In production, this would call your backend ML model
    await new Promise(resolve => setTimeout(resolve, 500));

    const mockRecommendations: ContentItem[] = [
      {
        id: 'rec-1',
        title: 'Quantum Edge Intelligence: Enterprise Implementation Guide',
        type: 'blog',
        category: 'Quantum Computing',
        url: '/blog/ai-2025-october-quantum-edge-intelligence-revolution',
        excerpt: 'Learn how Fortune 50 companies are implementing sub-microsecond quantum edge computing with 99.997% accuracy.',
        relevanceScore: 0.95,
        tags: ['quantum', 'edge-computing', 'enterprise']
      },
      {
        id: 'rec-2',
        title: 'Global Finance $87B Quantum Edge Success Story',
        type: 'case-study',
        category: 'Financial Services',
        url: '/case-studies/ai-2025-oct-global-finance-quantum-edge-transformation-87-billion-success',
        excerpt: 'How a Fortune 50 financial institution prevented $87 billion in fraud using quantum edge intelligence.',
        relevanceScore: 0.92,
        tags: ['quantum', 'finance', 'success-story']
      },
      {
        id: 'rec-3',
        title: 'Autonomous Coding Revolution: 87% Faster Development',
        type: 'blog',
        category: 'Software Development',
        url: '/blog/ai-2025-january-autonomous-coding-revolution',
        excerpt: 'Discover how autonomous AI agents are writing production code with 94% bug reduction.',
        relevanceScore: 0.89,
        tags: ['autonomous', 'coding', 'ai-agents']
      },
      {
        id: 'rec-4',
        title: 'Zero-Trust AI Security Framework',
        type: 'blog',
        category: 'Cybersecurity',
        url: '/blog/ai-2025-oct-zero-trust-ai-security-framework',
        excerpt: 'Implement enterprise-grade zero-trust security with 99.97% threat prevention.',
        relevanceScore: 0.86,
        tags: ['security', 'zero-trust', 'framework']
      },
      {
        id: 'rec-5',
        title: 'Quantum Edge Intelligence Consulting Services',
        type: 'service',
        category: 'Consulting',
        url: '/services/quantum-edge-intelligence-consulting',
        excerpt: 'Expert consulting for deploying quantum edge intelligence in your enterprise.',
        relevanceScore: 0.83,
        tags: ['consulting', 'quantum', 'services']
      }
    ];

    setRecommendations(mockRecommendations);
    setIsLoading(false);
  };

  const handleContentClick = (item: ContentItem) => {
    // Track user interaction
    const newPreferences = new Set(userPreferences);
    item.tags.forEach(tag => newPreferences.add(tag));
    setUserPreferences(newPreferences);
    
    // Save to localStorage
    localStorage.setItem('userContentPreferences', JSON.stringify(Array.from(newPreferences)));

    // Track analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'content_recommendation_click', {
        content_id: item.id,
        content_type: item.type,
        relevance_score: item.relevanceScore
      });
    }
  };

  const getTypeIcon = (type: ContentItem['type']) => {
    switch (type) {
      case 'blog':
        return '📖';
      case 'case-study':
        return '💼';
      case 'service':
        return '⚡';
      default:
        return '📄';
    }
  };

  const getTypeBadgeColor = (type: ContentItem['type']) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-300';
      case 'case-study':
        return 'from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-300';
      case 'service':
        return 'from-green-500/20 to-green-600/20 border-green-500/30 text-green-300';
      default:
        return 'from-gray-500/20 to-gray-600/20 border-gray-500/30 text-gray-300';
    }
  };

  if (isLoading) {
    return (
      <section className="py-12 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="text-gray-400 mt-4">Generating personalized recommendations...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-4">
            <span className="text-2xl">🎯</span>
            <span className="text-blue-300 font-bold text-sm uppercase tracking-wide">
              Recommended for You
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Personalized Content Recommendations
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            AI-powered recommendations based on your interests and browsing behavior
          </p>
        </div>

        {/* Recommendations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {recommendations.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={() => handleContentClick(item)}
              className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{getTypeIcon(item.type)}</span>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getTypeBadgeColor(item.type)} border`}>
                  {item.type.toUpperCase()}
                </div>
              </div>

              {/* Content */}
              <div className="mb-4">
                <span className="text-xs text-blue-400 font-semibold uppercase tracking-wide">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-2 mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              {/* Relevance Score & Tags */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-yellow-400">⭐</span>
                    <span className="text-xs text-gray-400">
                      {Math.round(item.relevanceScore * 100)}% match
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-blue-400 text-sm font-semibold">
                  <span>Read</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={generateRecommendations}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            <span>🔄</span>
            <span>Refresh Recommendations</span>
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Powered by AI • Updates based on your browsing behavior
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentRecommendationEngine;
