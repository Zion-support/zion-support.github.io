import React from 'react';
import { Link } from 'react-router-dom';

const LatestArticlesShowcase: React.FC = () => {
  // Mock data since we don't have the actual import
  const latestArticles = [
    {
      id: 1,
      title: 'AI Autonomous Operations: Complete 2025 Guide',
      description: 'Master autonomous AI operations with proven frameworks achieving 95% automation rates, $2M+ annual savings, and 99.99% uptime.',
      category: 'AI Innovation',
      readTime: '45 min',
      link: '/blog/ai-autonomous-operations-2025',
      featured: true,
      tags: ['AI', 'Automation', 'Enterprise']
    },
    {
      id: 2,
      title: 'Enterprise AI Transformation: $50M Annual Savings Blueprint',
      description: 'Discover how Fortune 500 companies achieve $50M annual savings, 95% process automation, and 300% ROI.',
      category: 'Success Story',
      readTime: '50 min',
      link: '/blog/ai-enterprise-transformation-2025',
      featured: true,
      tags: ['Enterprise', 'ROI', 'Transformation']
    },
    {
      id: 3,
      title: 'AI Innovation Labs: Product Development Revolution',
      description: 'Revolutionize product development with AI Innovation Labs achieving 10x faster time-to-market and 85% cost reduction.',
      category: 'Innovation Lab',
      readTime: '40 min',
      link: '/blog/ai-innovation-labs-product-development-2025',
      featured: true,
      tags: ['Innovation', 'Product Development', 'AI Labs']
    },
    {
      id: 4,
      title: 'Quantum Computing Breakthroughs: The Future of AI Processing',
      description: 'Explore the latest quantum computing breakthroughs that are revolutionizing AI processing with 10,000x speed improvements.',
      category: 'Quantum Computing',
      readTime: '35 min',
      link: '/blog/quantum-computing-breakthroughs-ai-processing',
      featured: false,
      tags: ['Quantum', 'Computing', 'AI', 'Breakthrough']
    },
    {
      id: 5,
      title: 'Self-Evolving AI Systems: The Next Frontier',
      description: 'Discover how self-evolving AI systems are reshaping artificial intelligence with autonomous learning and continuous improvement.',
      category: 'AI Innovation',
      readTime: '30 min',
      link: '/blog/self-evolving-ai-systems-next-frontier',
      featured: true,
      tags: ['Self-Evolving', 'AI', 'Innovation', 'Future']
    },
    {
      id: 6,
      title: 'Predictive Analytics Revolution: 99.9% Accuracy Forecasting',
      description: 'Learn how AI-powered forecasting achieves 99.9% accuracy in predicting business trends and market dynamics.',
      category: 'Predictive Analytics',
      readTime: '25 min',
      link: '/blog/predictive-analytics-revolution-forecasting-future',
      featured: false,
      tags: ['Predictive', 'Analytics', 'Forecasting', 'AI']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Articles & Research
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge insights on AI automation and emerging technologies
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map(article => (
            <Link key={article.id} to={article.link} className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                    {article.category}
                  </span>
                  {article.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-500">
                    <span className="w-4 h-4 mr-1">🕒</span>
                    {article.readTime}
                  </div>
                  <div className="text-indigo-600 font-semibold group-hover:gap-2 flex items-center transition-all">
                    Read More
                    <span className="w-4 h-4 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {article.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/blog"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg"
          >
            View All Articles
            <span className="w-6 h-6">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestArticlesShowcase;