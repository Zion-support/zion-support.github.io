import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Guide {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  path: string;
  image: string;
  featured: boolean;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export default function GuidesPage() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const guideList: Guide[] = [
    {
      id: 'ai-2026-implementation-roadmap',
      title: 'AI 2026 Implementation Roadmap',
      description: 'Complete step-by-step guide to implementing AI solutions in your enterprise with proven frameworks and best practices.',
      category: 'Implementation',
      readTime: '30 min read',
      date: '2026-01-15',
      path: '/guides/ai-2026-implementation-roadmap',
      image: '🗺️',
      featured: true,
      difficulty: 'Intermediate'
    },
    {
      id: 'ai-2027-implementation-roadmap',
      title: 'AI 2027 Implementation Roadmap',
      description: 'Advanced implementation strategies for next-generation AI systems and autonomous business processes.',
      category: 'Implementation',
      readTime: '45 min read',
      date: '2027-01-15',
      path: '/guides/ai-2027-implementation-roadmap',
      image: '🚀',
      featured: true,
      difficulty: 'Advanced'
    },
    {
      id: 'autonomous-business-processes-implementation-guide-2026',
      title: 'Autonomous Business Processes Implementation Guide 2026',
      description: 'Comprehensive guide to implementing autonomous business processes with AI-driven automation and optimization.',
      category: 'Automation',
      readTime: '60 min read',
      date: '2026-02-01',
      path: '/guides/autonomous-business-processes-implementation-guide-2026',
      image: '⚙️',
      featured: false,
      difficulty: 'Advanced'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setGuides(guideList);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const categories = ['all', ...Array.from(new Set(guideList.map(guide => guide.category)))];
  const filteredGuides = selectedCategory === 'all' 
    ? guides 
    : guides.filter(guide => guide.category === selectedCategory);

  const featuredGuides = guides.filter(guide => guide.featured);
  const regularGuides = guides.filter(guide => !guide.featured);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-64 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(item => (
              <div key={item} className="bg-gray-100 rounded-lg p-6 animate-pulse">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Implementation Guides</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Step-by-step guides to implement AI solutions, automation, and digital transformation in your enterprise
          </p>
        </header>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category === 'all' ? 'All Guides' : category}
            </button>
          ))}
        </div>

        {/* Featured Guides */}
        {selectedCategory === 'all' && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🌟 Featured Guides
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredGuides.map((guide) => (
                <div key={guide.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <div className="text-4xl mb-4">{guide.image}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {guide.difficulty}
                      </span>
                      <span className="text-sm text-gray-500">{guide.readTime}</span>
                    </div>
                    <Link
                      to={guide.path}
                      className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                    >
                      Read Guide
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Guides */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {selectedCategory === 'all' ? 'All Guides' : `${selectedCategory} Guides`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.map((guide) => (
              <div key={guide.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="text-3xl mb-3">{guide.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{guide.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {guide.difficulty}
                    </span>
                    <span className="text-xs text-gray-500">{guide.readTime}</span>
                  </div>
                  <Link
                    to={guide.path}
                    className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-sm"
                  >
                    Read Guide
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Custom Implementation Support?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our expert team can help you implement these solutions in your organization with personalized guidance and support.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Get Implementation Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}