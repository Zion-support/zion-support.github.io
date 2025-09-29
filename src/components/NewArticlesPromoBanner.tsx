import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Clock, Star } from 'lucide-react';
import { newArticles2025, homepageFeaturedArticles } from '../content/new-articles-2025';

interface NewArticlesPromoBannerProps {
  className?: string;
  variant?: 'default' | 'premium' | 'featured';
  showCount?: number;
  autoRotate?: boolean;
}

export default function NewArticlesPromoBanner({
  className = '',
  variant = 'default',
  showCount = 3,
  autoRotate = false
}: NewArticlesPromoBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const articles = homepageFeaturedArticles.slice(0, showCount);
  const currentArticle = autoRotate ? articles[currentIndex] : articles[0];

  // Auto-rotate functionality
  React.useEffect(() => {
    if (autoRotate && articles.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % articles.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoRotate, articles.length]);

  if (!isVisible || articles.length === 0) {
    return null;
  }

  const getVariantStyles = () => {
    switch (variant) {
      case 'premium':
        return {
          container: 'bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 border-purple-400/30',
          text: 'text-white',
          accent: 'text-purple-200',
          button: 'bg-white text-purple-600 hover:bg-purple-50',
          buttonSecondary: 'border-white text-white hover:bg-white hover:text-purple-600'
        };
      case 'featured':
        return {
          container: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 border-emerald-400/30',
          text: 'text-white',
          accent: 'text-emerald-200',
          button: 'bg-white text-emerald-600 hover:bg-emerald-50',
          buttonSecondary: 'border-white text-white hover:bg-white hover:text-emerald-600'
        };
      default:
        return {
          container: 'bg-gradient-to-r from-blue-500 to-indigo-600 border-blue-400/30',
          text: 'text-white',
          accent: 'text-blue-200',
          button: 'bg-white text-blue-600 hover:bg-blue-50',
          buttonSecondary: 'border-white text-white hover:bg-white hover:text-blue-600'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={`${styles.container} ${className} border rounded-xl p-6 mb-8 relative overflow-hidden`}>
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-shimmer"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 animate-pulse" />
            <span className={`text-lg font-bold ${styles.text}`}>
              🚀 FRESH CONTENT ALERT
            </span>
            <TrendingUp className="w-5 h-5 animate-bounce" />
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className={`${styles.accent} hover:${styles.text} transition-colors`}
            aria-label="Dismiss banner"
          >
            ✕
          </button>
        </div>

        {/* Main Content */}
        <div className="mb-4">
          <h3 className={`text-xl font-bold ${styles.text} mb-2`}>
            🎯 Just Published: Revolutionary AI Articles That Will Transform Your Business
          </h3>
          <p className={`${styles.accent} text-sm mb-4`}>
            Discover cutting-edge insights on AI Autonomous Infrastructure, Quantum-AI Hybrid Computing, 
            Next-Gen Cybersecurity, and Enterprise AI Implementation strategies.
          </p>
        </div>

        {/* Featured Article */}
        {currentArticle && (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                    {currentArticle.category}
                  </span>
                  <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    NEW
                  </span>
                </div>
                <h4 className={`font-semibold ${styles.text} mb-1`}>
                  {currentArticle.title}
                </h4>
                <p className={`${styles.accent} text-sm mb-2`}>
                  {currentArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {currentArticle.readTime}
                  </span>
                  <span>{new Date(currentArticle.date).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="ml-4">
                <Link
                  to={`/blog/${currentArticle.slug}`}
                  className={`${styles.button} px-4 py-2 rounded-lg font-semibold text-sm inline-flex items-center gap-2 transition-all duration-300 hover:scale-105`}
                >
                  Read Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {articles.slice(0, 3).map((article, index) => (
            <div key={article.id} className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium">
                  {article.category}
                </span>
                {article.trending && (
                  <TrendingUp className="w-3 h-3 text-yellow-400" />
                )}
              </div>
              <h5 className={`font-medium ${styles.text} text-sm mb-1 line-clamp-2`}>
                {article.title}
              </h5>
              <div className="flex items-center justify-between text-xs">
                <span className={styles.accent}>{article.readTime}</span>
                <Link
                  to={`/blog/${article.slug}`}
                  className={`${styles.accent} hover:${styles.text} transition-colors`}
                >
                  Read →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/blog"
            className={`${styles.button} px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:scale-105`}
          >
            <Sparkles className="w-4 h-4" />
            Explore All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/insights"
            className={`${styles.buttonSecondary} border px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105`}
          >
            View Insights
          </Link>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {['AI Autonomous Ops', 'Quantum Computing', 'AI Security', 'Edge AI', 'Content AI', 'GenAI Evals'].map((tag) => (
            <span key={tag} className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}