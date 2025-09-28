import React, { useEffect, useState, useCallback } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
  canonical?: string;
  structuredData?: Record<string, unknown>[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  siteName?: string;
}

interface SEOOptimizerProps {
  seoData: SEOData;
  onClose?: () => void;
  onOptimize?: (optimization: { type: string; message: string; score: number }) => void;
}

export const useSEOData = (pathname: string): SEOData => {
  const defaultSEO: SEOData = {
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI-powered technology solutions, cloud services, and digital transformation consulting.',
    keywords: 'AI, artificial intelligence, technology solutions, cloud services, digital transformation',
    ogTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
    ogDescription: 'Leading provider of AI-powered technology solutions, cloud services, and digital transformation consulting.',
    ogImage: '/og-image.png',
    ogUrl: `https://ziontechgroup.com${pathname}`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    canonicalUrl: `https://ziontechgroup.com${pathname}`,
    canonical: `https://ziontechgroup.com${pathname}`,
    siteName: 'Zion Tech Group'
  };

  // Customize SEO data based on pathname
  switch (pathname) {
    case '/about':
      return {
        ...defaultSEO,
        title: 'About Us - Zion Tech Group',
        description: 'Learn about Zion Tech Group\'s mission, values, and commitment to delivering cutting-edge AI and technology solutions.',
        ogTitle: 'About Us - Zion Tech Group',
        keywords: 'about us, company, mission, values, AI technology, innovation'
      };
    case '/services':
      return {
        ...defaultSEO,
        title: 'Our Services - AI & Technology Solutions',
        description: 'Comprehensive AI and technology services including cloud solutions, digital transformation, and custom software development.',
        ogTitle: 'Our Services - AI & Technology Solutions',
        keywords: 'services, AI solutions, cloud computing, digital transformation, software development'
      };
    case '/contact':
      return {
        ...defaultSEO,
        title: 'Contact Us - Zion Tech Group',
        description: 'Get in touch with our team of AI and technology experts. We\'re here to help with your digital transformation needs.',
        ogTitle: 'Contact Us - Zion Tech Group',
        keywords: 'contact, get in touch, support, consultation, AI experts'
      };
    case '/blog':
      return {
        ...defaultSEO,
        title: 'Blog - AI & Technology Insights',
        description: 'Stay updated with the latest insights on AI, technology trends, and digital transformation strategies.',
        ogTitle: 'Blog - AI & Technology Insights',
        ogType: 'website',
        keywords: 'blog, AI insights, technology trends, digital transformation, articles'
      };
    default:
      return defaultSEO;
  }
};

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ seoData, onClose, onOptimize }) => {
  const [seoScore, setSeoScore] = useState(0);
  const [recommendations, setRecommendations] = useState<Array<{
    type: 'error' | 'warning' | 'info';
    message: string;
    score: number;
  }>>([]);

  const calculateSEOScore = useCallback(() => {
    let score = 0;
    const newRecommendations: Array<{
      type: 'error' | 'warning' | 'info';
      message: string;
      score: number;
    }> = [];

    // Title optimization
    if (seoData.title) {
      if (seoData.title.length >= 30 && seoData.title.length <= 60) {
        score += 20;
      } else if (seoData.title.length < 30) {
        newRecommendations.push({
          type: 'warning',
          message: 'Title is too short. Aim for 30-60 characters.',
          score: 5
        });
      } else {
        newRecommendations.push({
          type: 'warning',
          message: 'Title is too long. Aim for 30-60 characters.',
          score: 5
        });
      }
    } else {
      newRecommendations.push({
        type: 'error',
        message: 'Title is missing.',
        score: 0
      });
    }

    // Description optimization
    if (seoData.description) {
      if (seoData.description.length >= 120 && seoData.description.length <= 160) {
        score += 20;
      } else if (seoData.description.length < 120) {
        newRecommendations.push({
          type: 'warning',
          message: 'Description is too short. Aim for 120-160 characters.',
          score: 5
        });
      } else {
        newRecommendations.push({
          type: 'warning',
          message: 'Description is too long. Aim for 120-160 characters.',
          score: 5
        });
      }
    } else {
      newRecommendations.push({
        type: 'error',
        message: 'Description is missing.',
        score: 0
      });
    }

    // Keywords optimization
    if (seoData.keywords) {
      const keywordCount = seoData.keywords.split(',').length;
      if (keywordCount >= 3 && keywordCount <= 10) {
        score += 15;
      } else {
        newRecommendations.push({
          type: 'info',
          message: 'Consider using 3-10 relevant keywords.',
          score: 10
        });
      }
    } else {
      newRecommendations.push({
        type: 'warning',
        message: 'Keywords are missing.',
        score: 5
      });
    }

    // Open Graph optimization
    if (seoData.ogTitle && seoData.ogDescription && seoData.ogImage) {
      score += 15;
    } else {
      newRecommendations.push({
        type: 'warning',
        message: 'Open Graph tags are incomplete.',
        score: 10
      });
    }

    // Canonical URL
    if (seoData.canonicalUrl || seoData.canonical) {
      score += 10;
    } else {
      newRecommendations.push({
        type: 'warning',
        message: 'Canonical URL is missing.',
        score: 5
      });
    }

    // Structured data
    if (seoData.structuredData && seoData.structuredData.length > 0) {
      score += 10;
    } else {
      newRecommendations.push({
        type: 'info',
        message: 'Consider adding structured data for better search visibility.',
        score: 5
      });
    }

    // Twitter Card
    if (seoData.twitterCard) {
      score += 5;
    } else {
      newRecommendations.push({
        type: 'info',
        message: 'Consider adding Twitter Card meta tags.',
        score: 3
      });
    }

    // Author and timestamps for articles
    if (seoData.ogType === 'article') {
      if (seoData.author && seoData.publishedTime) {
        score += 5;
      } else {
        newRecommendations.push({
          type: 'info',
          message: 'Article meta tags (author, published time) are recommended.',
          score: 3
        });
      }
    }

    setSeoScore(score);
    setRecommendations(newRecommendations);
  }, [seoData]);

  useEffect(() => {
    calculateSEOScore();
  }, [calculateSEOScore]);

  const applyOptimizations = useCallback(() => {
    // Apply meta tags to document
    if (typeof document !== 'undefined') {
      // Title
      if (seoData.title) {
        document.title = seoData.title;
      }

      // Meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', seoData.description || '');

      // Meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', seoData.keywords || '');

      // Open Graph tags
      const ogTags = [
        { property: 'og:title', content: seoData.ogTitle || seoData.title },
        { property: 'og:description', content: seoData.ogDescription || seoData.description },
        { property: 'og:image', content: seoData.ogImage },
        { property: 'og:url', content: seoData.ogUrl || seoData.canonicalUrl || seoData.canonical },
        { property: 'og:type', content: seoData.ogType || 'website' },
        { property: 'og:site_name', content: seoData.siteName || 'Zion Tech Group' }
      ];

      ogTags.forEach(({ property, content }) => {
        if (content) {
          let ogTag = document.querySelector(`meta[property="${property}"]`);
          if (!ogTag) {
            ogTag = document.createElement('meta');
            ogTag.setAttribute('property', property);
            document.head.appendChild(ogTag);
          }
          ogTag.setAttribute('content', content);
        }
      });

      // Twitter Card tags
      if (seoData.twitterCard) {
        let twitterCard = document.querySelector('meta[name="twitter:card"]');
        if (!twitterCard) {
          twitterCard = document.createElement('meta');
          twitterCard.setAttribute('name', 'twitter:card');
          document.head.appendChild(twitterCard);
        }
        twitterCard.setAttribute('content', seoData.twitterCard);
      }

      // Canonical URL
      if (seoData.canonicalUrl || seoData.canonical) {
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
          canonical = document.createElement('link');
          canonical.setAttribute('rel', 'canonical');
          document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', seoData.canonicalUrl || seoData.canonical || '');
      }

      // Structured data
      if (seoData.structuredData && seoData.structuredData.length > 0) {
        // Remove existing structured data
        const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
        existingScripts.forEach(script => script.remove());

        // Add new structured data
        seoData.structuredData.forEach(data => {
          const script = document.createElement('script');
          script.type = 'application/ld+json';
          script.textContent = JSON.stringify(data);
          document.head.appendChild(script);
        });
      }
    }

    onOptimize?.({
      type: 'seo_optimization',
      message: 'SEO meta tags have been applied successfully',
      score: seoScore
    });
  }, [seoData, seoScore, onOptimize]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            SEO Optimizer
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* SEO Score */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">SEO Score</h3>
              <div className={`text-2xl font-bold ${
                seoScore >= 80 ? 'text-green-600' : 
                seoScore >= 60 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {seoScore}/100
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all duration-500 ${
                  seoScore >= 80 ? 'bg-green-600' : 
                  seoScore >= 60 ? 'bg-yellow-600' : 'bg-red-600'
                }`}
                style={{ width: `${seoScore}%` }}
              />
            </div>
          </div>

          {/* Current SEO Data */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Current SEO Data</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
                <p className="text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
                  {seoData.title || 'Not set'}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                <p className="text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
                  {seoData.description || 'Not set'}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Keywords</label>
                <p className="text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
                  {seoData.keywords || 'Not set'}
                </p>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recommendations</h3>
              <div className="space-y-2">
                {recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg flex items-start ${
                      rec.type === 'error' 
                        ? 'bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-800' 
                        : rec.type === 'warning'
                        ? 'bg-yellow-50 border border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800'
                        : 'bg-blue-50 border border-blue-200 dark:bg-blue-900/20 dark:border-blue-800'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full mr-3 mt-2 ${
                      rec.type === 'error' ? 'bg-red-500' : 
                      rec.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`} />
                    <div>
                      <p className={`text-sm font-medium ${
                        rec.type === 'error' 
                          ? 'text-red-800 dark:text-red-200' 
                          : rec.type === 'warning'
                          ? 'text-yellow-800 dark:text-yellow-200'
                          : 'text-blue-800 dark:text-blue-200'
                      }`}>
                        {rec.message}
                      </p>
                      <p className={`text-xs ${
                        rec.type === 'error' 
                          ? 'text-red-600 dark:text-red-400' 
                          : rec.type === 'warning'
                          ? 'text-yellow-600 dark:text-yellow-400'
                          : 'text-blue-600 dark:text-blue-400'
                      }`}>
                        Potential score improvement: +{rec.score} points
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex space-x-3">
            <button
              onClick={applyOptimizations}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Apply Optimizations
            </button>
            <button
              onClick={calculateSEOScore}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Recalculate Score
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOOptimizer;