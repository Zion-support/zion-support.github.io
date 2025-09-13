import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  roi?: string;
  accuracy?: string;
  href: string;
  featured?: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'quantum-neural-breakthrough',
    title: 'AI 2026 Quantum-Neural Breakthrough',
    description: 'Revolutionary quantum-neural fusion technology achieving 15,000% ROI',
    category: 'Breakthrough Technology',
    roi: '15,000%',
    accuracy: '99.8%',
    href: '/ai-2026-quantum-neural-breakthrough',
    featured: true
  },
  {
    id: 'ultimate-content-revolution',
    title: 'AI 2025 Ultimate Content Revolution',
    description: 'Comprehensive collection of breakthrough AI content and implementation guides',
    category: 'Content Collection',
    roi: '10,000%',
    href: '/ai-2025-ultimate-content-revolution',
    featured: true
  },
  {
    id: 'neural-interface-revolution',
    title: 'AI 2026 Neural Interface Revolution',
    description: 'Advanced neural interfaces with 95% accuracy in healthcare applications',
    category: 'Healthcare AI',
    accuracy: '95%',
    href: '/blog/ai-2026-neural-interface-revolution'
  },
  {
    id: 'enterprise-automation-mastery',
    title: 'Enterprise Automation Mastery 2025',
    description: 'Complete automation solutions delivering 800% ROI for Fortune 500 companies',
    category: 'Enterprise Solutions',
    roi: '800%',
    href: '/blog/ai-2025-enterprise-automation-mastery'
  },
  {
    id: 'future-predictions-2026',
    title: 'AI 2026 Future Predictions',
    description: 'Expert insights and predictions about the future of AI technology',
    category: 'Future Insights',
    href: '/ai-2026-2030-future-predictions-showcase'
  },
  {
    id: 'quantum-computing-solutions',
    title: 'Advanced Quantum Computing Solutions',
    description: 'Next-generation quantum computing implementations for enterprise use',
    category: 'Quantum Computing',
    roi: '5,000%',
    href: '/quantum-computing-solutions-advanced'
  }
];

export default function AI2026ContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState<ContentItem[]>(contentItems);
  const [isVisible, setIsVisible] = useState(false);

  const categories = ['All', 'Breakthrough Technology', 'Content Collection', 'Healthcare AI', 'Enterprise Solutions', 'Future Insights', 'Quantum Computing'];

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredItems(contentItems);
    } else {
      setFilteredItems(contentItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  useEffect(() => {
    // Show widget after page load
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-sm">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">🚀 AI Content Discovery</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close widget"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-purple-100 mt-1">
            Discover breakthrough AI content tailored for you
          </p>
        </div>

        {/* Category Filter */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Content Items */}
        <div className="max-h-96 overflow-y-auto">
          {filteredItems.map((item) => (
            <div key={item.id} className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  {item.featured ? (
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">⭐</span>
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🚀</span>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <Link
                    href={item.href}
                    className="block hover:text-purple-600 transition-colors"
                  >
                    <h4 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">{item.category}</span>
                      {item.roi && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                          {item.roi} ROI
                        </span>
                      )}
                      {item.accuracy && (
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                          {item.accuracy} Accuracy
                        </span>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50">
          <Link
            href="/content-showcase"
            className="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Content
          </Link>
        </div>
      </div>
    </div>
  );
}