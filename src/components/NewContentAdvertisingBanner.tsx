import React from 'react';

interface FeaturedContent {
  id: number;
  title: string;
  category: string;
  readTime: string;
  rating: number;
  readers: string;
  badge: string;
  gradient: string;
  icon: string;
  link: string;
}

const NewContentAdvertisingBanner: React.FC = () => {
  const featuredContent: FeaturedContent[] = [
    {
      id: 0,
      title: 'Governed Agent Rollbacks',
      category: 'AI Operations',
      readTime: '7 min',
      rating: 4.9,
      readers: '12.5K',
      badge: 'TRENDING',
      gradient: 'from-blue-500 to-cyan-500',
      icon: '🔄',
      link: '/blog/governed-agent-rollbacks'
    },
    {
      id: 1,
      title: 'Edge Inference Patterns',
      description: 'Actually reduce latency with proven frameworks',
      category: 'AI Infrastructure',
      readTime: '8 min',
      rating: 4.8,
      readers: '15.2K',
      badge: 'FEATURED',
      gradient: 'from-purple-500 to-pink-500',
      icon: '⚡',
      link: '/blog/edge-inference-patterns'
    },
    {
      id: 2,
      title: 'North-Star Engineering Metrics',
      description: 'Fewer KPIs, better outcomes',
      category: 'Engineering',
      readTime: '6 min',
      rating: 4.7,
      readers: '9.8K',
      badge: 'NEW',
      gradient: 'from-green-500 to-emerald-500',
      icon: '⭐',
      link: '/blog/north-star-engineering-metrics'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 rounded-full mb-6">
            <span className="text-yellow-300 font-bold text-sm">🔥 NEW CONTENT AVAILABLE</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Latest AI Insights & Breakthroughs
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Discover the most recent advances in AI, quantum computing, and enterprise solutions that are transforming industries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((content) => (
            <div key={content.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${content.gradient} rounded-xl flex items-center justify-center text-2xl`}>
                  {content.icon}
                </div>
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                  {content.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {content.title}
              </h3>

              <p className="text-blue-100 mb-6 leading-relaxed">
                {content.description || 'Discover the latest insights and breakthrough technologies in AI and enterprise solutions.'}
              </p>

              <div className="flex items-center justify-between mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{content.readers}</div>
                  <div className="text-sm text-blue-200">Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400">{content.rating}★</div>
                  <div className="text-sm text-blue-200">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">{content.readTime}</div>
                  <div className="text-sm text-blue-200">Read Time</div>
                </div>
              </div>

              <div className="mb-6">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {content.category}
                </span>
              </div>

              <a
                href={content.link}
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors group-hover:bg-white/30"
              >
                Read Full Article
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blog"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
          >
            Explore All New Content
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewContentAdvertisingBanner;