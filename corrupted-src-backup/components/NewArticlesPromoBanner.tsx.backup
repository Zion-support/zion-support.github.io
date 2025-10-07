import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { newArticles2025 } from '../content/new-articles-2025';

interface NewArticlesPromoBannerProps {
  variant?: 'default' | 'premium' | 'featured' | 'compact';
  showCount?: number;
  autoRotate?: boolean;
  rotationInterval?: number;
  className?: string;
}

const NewArticlesPromoBanner: React.FC<NewArticlesPromoBannerProps> = ({
  variant = 'default',
  showCount = 3,
  autoRotate = false,
  rotationInterval = 5000,
  className = ''
}) => {
  const [, setCurrentIndex] = useState(0);
  const featuredArticles = newArticles2025.filter(a => a.featured).slice(0, showCount);

  useEffect(() => {
    if (autoRotate && featuredArticles.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) = > (prev + 1) % featuredArticles.length);
      }, rotationInterval);
      return () => clearInterval(interval);
    }
  }, [autoRotate, featuredArticles.length, rotationInterval]);

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-4 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
<<<<<<< HEAD

=======
            <BookOpen className="w-6 h-6 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
            <div>
              <h4 className="text-white font-bold">
                {featuredArticles.length} New Articles Published
              </h4>
              <p className="text-blue-100 text-sm">Latest AI insights and research</p>
            </div>
          </div>
          <Link
            to="/blog"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm"
          >
            Read Now
          </Link>
        </div>
      </div > );
  }

  if (variant === 'premium') {
    return (
      <div className={`bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 rounded-2xl p-8 text-white ${className}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
<<<<<<< HEAD

=======
            <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
            <h2 className="text-3xl font-bold">Breakthrough Articles Just Published</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article) = > (
              <div

key={article.id}

                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all hover:scale-105"
              >
                <div className="flex items-center gap-2 mb-3">
<<<<<<< HEAD

=======
                  <TrendingUp className="w-5 h-5 text-green-300" />
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
                  <span className="text-sm font-semibold text-green-300">{article.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-purple-100 text-sm mb-4 line-clamp-2">{article.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-200">{article.readTime}</span>
                  <Link
                    to={article.link}
                    className="text-yellow-300 font-semibold hover:text-yellow-200 flex items-center gap-1"
                  >
<<<<<<< HEAD
                    Read</Link>
=======
                    Read <ArrowRight className="w-4 h-4" />
                  </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition-all hover:scale-105"
            >
              View All Articles
<<<<<<< HEAD

=======
              <ArrowRight className="w-5 h-5" />
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
            </Link>
          </div>
        </div>
      </div > );
  }

  if (variant === 'featured') {
    return (
      <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden ${className}`}>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
<<<<<<< HEAD

=======
              <BookOpen className="w-8 h-8 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
              <h2 className="text-2xl font-bold text-white">Featured Articles</h2>
            </div>
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
              NEW
            </span>
          </div>
        </div>
        <div className="p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArticles.map((article) = > (
              <Link
                key={article.id}
                to={article.link}
                className="group border border-gray-200 rounded-xl p-5 hover:shadow-xl hover:border-indigo-300 transition-all"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.slice(0, 2).map((tag) = > (
                    <span

key={tag}

                      className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{article.readTime}</span>
<<<<<<< HEAD

=======
                  <ArrowRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-1 transition-transform" />
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div > );
  }

  // Default variant
  return (
    <div className={`bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 md:p-8 text-white ${className}`}>
      <div className="flex items-center gap-3 mb-4">
<<<<<<< HEAD

=======
        <Sparkles className="w-6 h-6 text-yellow-300" />
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
        <h3 className="text-2xl font-bold">New Articles Available</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {featuredArticles.map((article) = > (
          <div key={article.id} className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all">
            <div className="text-sm text-blue-200 mb-2">{article.category}</div>
            <h4 className="font-semibold mb-2">{article.title}</h4>
            <Link to={article.link} className="text-yellow-300 text-sm font-semibold hover:underline">
              Read Article →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArticlesPromoBanner;