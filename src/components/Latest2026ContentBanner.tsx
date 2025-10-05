import React from 'react';
import { Link } from 'react-router-dom';

interface Latest2026ContentBannerProps {
  className?: string;
  onClose?: () => void;
  showCloseButton?: boolean;
}

const Latest2026ContentBanner: React.FC<Latest2026ContentBannerProps> = ({
  className = '',
  onClose,
  showCloseButton = true
}) => {
  const latestContent = [
    {
      id: 1,
      title: 'AI 2026: The Future of Autonomous Systems',
      slug: 'ai-2026-autonomous-systems',
      excerpt: 'Discover how autonomous AI systems are revolutionizing industries in 2026 with unprecedented capabilities.',
      category: 'AI & Automation',
      date: '2025-01-30',
      readTime: '12 min',
      trending: true,
      icon: '🤖'
    },
    {
      id: 2,
      title: 'Quantum Computing in AI: 2026 Breakthroughs',
      slug: 'quantum-computing-ai-2026',
      excerpt: 'Explore the latest quantum computing breakthroughs and their impact on AI development in 2026.',
      category: 'Quantum AI',
      date: '2025-01-29',
      readTime: '15 min',
      trending: true,
      icon: '⚛️'
    },
    {
      id: 3,
      title: 'Meta-Cognitive AI: The Next Evolution',
      slug: 'meta-cognitive-ai-2026',
      excerpt: 'Learn about meta-cognitive AI systems that can think about their own thinking processes.',
      category: 'Cognitive AI',
      date: '2025-01-28',
      readTime: '18 min',
      trending: true,
      icon: '🧠'
    }
  ];

  const stats = [
    { label: 'Articles Published', value: '50+' },
    { label: 'Total Views', value: '1M+' },
    { label: 'Subscribers', value: '25K+' },
    { label: 'Countries', value: '100+' }
  ];

  return (
    <div className={`bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 px-4 relative overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-purple-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-500/30 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-2xl">📚</span>
            <span className="font-bold text-sm tracking-wider uppercase">
              Latest 2026 Content
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
            Latest 2026 Content
          </h2>

          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with the latest insights, trends, and breakthroughs in AI and technology for 2026.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {latestContent.map((content, index) => (
            <div key={content.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{content.icon}</div>
                {content.trending && (
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    TRENDING
                  </span>
                )}
              </div>

              <div className="mb-3">
                <span className="inline-block bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {content.category}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-3 line-clamp-2">
                {content.title}
              </h3>

              <p className="text-gray-200 mb-4 line-clamp-3 text-sm">
                {content.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm text-white/80 mb-4">
                <span>{content.readTime}</span>
                <span>{new Date(content.date).toLocaleDateString()}</span>
              </div>

              <Link
                to={`/blog/${content.slug}`}
                className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold transition-colors duration-300"
              >
                Read Article →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Our Latest Content
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Get access to exclusive insights, tutorials, and industry expertise delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore All Content
              </Link>
              <Link
                to="/newsletter"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>

        {/* Close Button */}
        {showCloseButton && onClose && (
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl font-bold transition-colors duration-300 z-10"
            aria-label="Close banner"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default Latest2026ContentBanner;