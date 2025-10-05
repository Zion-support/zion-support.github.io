import React from 'react';
import { Link } from 'react-router-dom';

const LatestArticlesShowcase: React.FC = () => {
  const latestArticles = [
    {
      id: 1,
      title: 'AI Revolution 2026: Complete Enterprise Guide',
      description: 'Comprehensive guide to implementing AI solutions in enterprise environments with proven frameworks and best practices.',
      category: 'AI Solutions',
      readTime: '15 min',
      date: '2026-01-20',
      featured: true,
      link: '/blog/ai-revolution-2026-enterprise-guide'
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs in AI',
      description: 'Explore how quantum computing is revolutionizing AI processing with unprecedented speed and accuracy improvements.',
      category: 'Quantum AI',
      readTime: '18 min',
      date: '2026-01-18',
      featured: true,
      link: '/blog/quantum-computing-ai-breakthroughs'
    },
    {
      id: 3,
      title: 'Autonomous Systems: The Future of Enterprise',
      description: 'Discover how autonomous AI systems are achieving 99.99% uptime and self-healing capabilities in enterprise environments.',
      category: 'Autonomous AI',
      readTime: '12 min',
      date: '2026-01-15',
      featured: true,
      link: '/blog/autonomous-systems-enterprise-future'
    },
    {
      id: 4,
      title: 'Meta-Cognitive AI: Thinking About Thinking',
      description: 'Revolutionary AI systems that think about their own thinking processes and self-optimize for maximum efficiency.',
      category: 'AI Research',
      readTime: '20 min',
      date: '2026-01-12',
      featured: true,
      link: '/blog/meta-cognitive-ai-thinking'
    },
    {
      id: 5,
      title: 'Neural Edge Computing: Distributed AI Processing',
      description: 'Learn how distributed AI processing at the edge is revolutionizing real-time decision making in enterprise applications.',
      category: 'Edge Computing',
      readTime: '14 min',
      date: '2026-01-10',
      featured: true,
      link: '/blog/neural-edge-computing-distributed-ai'
    },
    {
      id: 6,
      title: 'Predictive Analytics: 99.97% Accuracy Achieved',
      description: 'Advanced forecasting techniques achieving unprecedented accuracy in business predictions and decision making.',
      category: 'Analytics',
      readTime: '16 min',
      date: '2026-01-08',
      featured: true,
      link: '/blog/predictive-analytics-99-percent-accuracy'
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
            Explore cutting-edge insights on AI, automation, and emerging technologies
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map(article => (
            <Link
              key={article.id}
              to={article.link}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                  <span className="text-indigo-600 font-semibold group-hover:text-indigo-800 transition-colors">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestArticlesShowcase;