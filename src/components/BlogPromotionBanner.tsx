import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPromotionBannerProps {
  className?: string;
  title?: string;
  description?: string;
  featuredArticles?: Array<{
    title: string;
    slug: string;
    readTime: string;
    category: string;
  }>;
  showFeatured?: boolean;
}

const BlogPromotionBanner: React.FC<BlogPromotionBannerProps> = ({
  className = '',
  title = 'Insights & Innovation',
  description = 'Discover the latest trends, insights, and innovations in AI, technology, and business transformation.',
  featuredArticles = [],
  showFeatured = true
}) => {
  const defaultFeaturedArticles = [
    {
      title: 'AI Revolution in Enterprise: 2025 Trends',
      slug: 'ai-revolution-enterprise-2025-trends',
      readTime: '5 min read',
      category: 'AI & Technology'
    },
    {
      title: 'Machine Learning Best Practices for Business',
      slug: 'machine-learning-best-practices-business',
      readTime: '8 min read',
      category: 'Machine Learning'
    },
    {
      title: 'Cloud Computing Security Guide',
      slug: 'cloud-computing-security-guide',
      readTime: '12 min read',
      category: 'Cloud Security'
    }
  ];

  const articles = featuredArticles.length > 0 ? featuredArticles : defaultFeaturedArticles;

  return (
    <div className={`bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-2xl">📚</span>
            <span className="font-bold text-sm tracking-wider uppercase">
              Blog & Insights
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
            {title}
          </h2>

          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {showFeatured && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Featured Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                  <div className="mb-3">
                    <span className="inline-block bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 line-clamp-2">
                    {article.title}
                  </h4>
                  <div className="flex items-center justify-between text-sm text-white/80 mb-4">
                    <span>{article.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold transition-colors duration-300"
                  >
                    Read Article →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/blog"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore All Articles →
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              Get AI Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPromotionBanner;