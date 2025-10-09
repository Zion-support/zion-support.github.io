import React from 'react';

const AITrendsInsightsBanner2026: React.FC = () => {
  const featuredPost = {
    id: 6,
    title: 'AI Ethics and Governance',
    category: 'AI Governance',
    slug: 'ai-ethics-governance-2026',
    excerpt:
      'Comprehensive guide to AI ethics, governance frameworks, and responsible AI implementation.',
    date: '2026-02-15',
    readTime: '25 min',
    trending: true,
  };

  return (
    <div className="bg-gradient-to-r from-green-900 to-teal-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">AI Trends 2026</h2>
          <p className="text-green-200">Stay ahead with the latest AI insights and trends</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {featuredPost.category}
            </span>
            <span className="text-green-200 text-sm">{featuredPost.date}</span>
          </div>

          <h3 className="text-xl font-semibold mb-3">{featuredPost.title}</h3>
          <p className="text-gray-200 mb-4">{featuredPost.excerpt}</p>

          <div className="flex items-center justify-between">
            <span className="text-green-200 text-sm">{featuredPost.readTime} read</span>
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITrendsInsightsBanner2026;
