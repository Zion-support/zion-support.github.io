import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, posts } from '../content/posts';
import { InsightArticle, latestInsights } from '../content/insights';

interface FeaturedContentShowcaseProps {
  title?: string;
  subtitle?: string;
  maxItems?: number;
  showInsights?: boolean;
  showBlogPosts?: boolean;
  className?: string;
}

export const FeaturedContentShowcase: React.FC<FeaturedContentShowcaseProps> = ({
  title = "Latest Insights & Trends",
  subtitle = "Stay ahead with our latest research, insights, and industry analysis",
  maxItems = 6,
  showInsights = true,
  showBlogPosts = true,
  className = ""
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'blog' | 'insights'>('all');

  // Get featured blog posts
  const featuredBlogPosts = posts
    .filter(post => post.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  // Get latest insights
  const latestInsightsList = latestInsights
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Combine content for display
  const allContent = [
    ...featuredBlogPosts.map(post => ({ ...post, type: 'blog' as const, date: post.publishedAt })),
    ...latestInsightsList.map(insight => ({ ...insight, type: 'insights' as const }))
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
   .slice(0, maxItems);

  const filteredContent = activeTab === 'all' ? allContent : 
    activeTab === 'blog' ? featuredBlogPosts.map(post => ({ ...post, type: 'blog' as const, date: post.publishedAt })) :
    latestInsightsList.map(insight => ({ ...insight, type: 'insights' as const }));

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI & Automation': 'bg-blue-100 text-blue-800',
      'Quantum Computing': 'bg-purple-100 text-purple-800',
      'Edge Computing': 'bg-green-100 text-green-800',
      'Cybersecurity': 'bg-red-100 text-red-800',
      'Security': 'bg-red-100 text-red-800',
      'Data Analytics': 'bg-indigo-100 text-indigo-800',
      'Technology': 'bg-gray-100 text-gray-800',
      'Platform Engineering': 'bg-yellow-100 text-yellow-800',
      'GenAI': 'bg-pink-100 text-pink-800',
      'AI Engineering': 'bg-teal-100 text-teal-800',
      'Data Engineering': 'bg-cyan-100 text-cyan-800',
      'MLOps': 'bg-orange-100 text-orange-800',
      'Cloud': 'bg-sky-100 text-sky-800',
      'Architecture': 'bg-violet-100 text-violet-800',
      'Product Analytics': 'bg-rose-100 text-rose-800',
      'Cloud FinOps': 'bg-emerald-100 text-emerald-800',
      'Risk & Compliance': 'bg-amber-100 text-amber-800',
      'Strategy': 'bg-lime-100 text-lime-800',
      'Observability': 'bg-fuchsia-100 text-fuchsia-800',
      'Data': 'bg-slate-100 text-slate-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <section className={`py-16 bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Content
            </button>
            {showBlogPosts && (
              <button
                onClick={() => setActiveTab('blog')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === 'blog'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Featured Articles
              </button>
            )}
            {showInsights && (
              <button
                onClick={() => setActiveTab('insights')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === 'insights'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Quick Insights
              </button>
            )}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <div
              key={`${item.type}-${item.slug || item.id}-${index}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                {item.type === 'blog' && (item as BlogPost).image ? (
                  <img
                    src={(item as BlogPost).image}
                    alt={(item as BlogPost).title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white text-4xl font-bold opacity-80">
                      {item.type === 'blog' ? '📝' : '💡'}
                    </div>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    {item.type === 'blog' ? (item as BlogPost).readTime || '5 min read' : `${(item as InsightArticle).readMinutes} min read`}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{formatDate(item.date)}</span>
                  <span className="mx-2">•</span>
                  <span className="font-medium text-blue-600">
                    {item.type === 'blog' ? 'Featured Article' : 'Quick Insight'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.type === 'blog' 
                    ? (item as BlogPost).description 
                    : (item as InsightArticle).summary
                  }
                </p>

                <Link
                  to={item.type === 'blog' 
                    ? `/blog/${(item as BlogPost).slug}` 
                    : `/insights/${(item as InsightArticle).id}`
                  }
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with the Latest Trends
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get exclusive access to our latest research, insights, and industry analysis. 
              Join thousands of professionals who trust Zion Tech Group for cutting-edge technology insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View All Articles
              </Link>
              <Link
                to="/insights"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Browse Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContentShowcase;