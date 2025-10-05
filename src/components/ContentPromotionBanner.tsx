import React from 'react';
import { Link } from 'react-router-dom';

interface ContentPromotionBannerProps {
  className?: string;
  title?: string;
  description?: string;
  featuredContent?: Array<{
    title: string;
    description: string;
    slug: string;
    category: string;
    readTime: string;
    image?: string;
  }>;
  showFeatured?: boolean;
  maxFeatured?: number;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  className = '',
  title = 'Discover Our Content',
  description = 'Explore our latest insights, tutorials, and industry expertise to stay ahead of the curve.',
  featuredContent = [],
  showFeatured = true,
  maxFeatured = 3
}) => {
  const defaultFeaturedContent = [
    {
      title: 'AI Revolution in Enterprise: 2025 Trends',
      description: 'Discover how artificial intelligence is transforming enterprise operations and what to expect in 2025.',
      slug: 'ai-revolution-enterprise-2025-trends',
      category: 'AI & Technology',
      readTime: '5 min read',
      image: '/images/ai-enterprise-trends.jpg'
    },
    {
      title: 'Machine Learning Best Practices for Business',
      description: 'Learn the essential best practices for implementing machine learning in your organization.',
      slug: 'machine-learning-best-practices-business',
      category: 'Machine Learning',
      readTime: '8 min read',
      image: '/images/ml-best-practices.jpg'
    },
    {
      title: 'Cloud Computing Security Guide',
      description: 'A comprehensive guide to securing your cloud infrastructure and protecting sensitive data.',
      slug: 'cloud-computing-security-guide',
      category: 'Cloud Security',
      readTime: '12 min read',
      image: '/images/cloud-security.jpg'
    }
  ];

  const displayContent = featuredContent.length > 0 ? featuredContent.slice(0, maxFeatured) : defaultFeaturedContent.slice(0, maxFeatured);

  return (
    <div className={`bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-2xl">📖</span>
            <span className="font-bold text-sm tracking-wider uppercase">
              Content & Insights
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
            <h3 className="text-2xl font-bold text-center mb-8">Featured Content</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {displayContent.map((content, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  {content.image && (
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={content.image}
                        alt={content.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full">
                        {content.category}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-yellow-200 transition-colors duration-300">
                      {content.title}
                    </h4>

                    <p className="text-gray-200 mb-4 line-clamp-3">
                      {content.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-white/80 mb-4">
                      <span>{content.readTime}</span>
                    </div>

                    <Link
                      to={`/blog/${content.slug}`}
                      className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold transition-colors duration-300 group-hover:translate-x-1 transform"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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
      </div>
    </div>
  );
};

export default ContentPromotionBanner;