import React from 'react';
import { Link } from 'react-router-dom';

const LatestArticlesShowcase: React.FC = () => {
  // Mock data for articles since the import is corrupted
  const latestArticles = [
    {
      id: '1',
      title: 'AI Autonomous Enterprise Operations: Complete 2025 Guide',
      description: 'Master autonomous AI operations with proven frameworks achieving 95% automation rates, $2M+ annual savings, and 99.99% uptime.',
      category: 'AI Innovation',
      readTime: '45 min read',
      featured: true,
      tags: ['AI', 'Automation', 'Enterprise'],
      link: '/blog/ai-autonomous-enterprise-operations-2025'
    },
    {
      id: '2',
      title: 'AI Enterprise Transformation: $50M Annual Savings Blueprint',
      description: 'Discover how Fortune 500 companies achieve $50M annual savings, 95% process automation, and 300% ROI through comprehensive AI transformation strategies.',
      category: 'Success Story',
      readTime: '50 min read',
      featured: true,
      tags: ['AI', 'Transformation', 'ROI'],
      link: '/blog/ai-enterprise-transformation-2025'
    },
    {
      id: '3',
      title: 'AI Innovation Labs: Product Development Revolution',
      description: 'Revolutionize product development with AI Innovation Labs achieving 10x faster time-to-market, 85% cost reduction, and 300% innovation acceleration.',
      category: 'Innovation Lab',
      readTime: '40 min read',
      featured: true,
      tags: ['AI', 'Innovation', 'Product Development'],
      link: '/blog/ai-innovation-labs-product-development-2025'
    },
    {
      id: '4',
      title: 'Quantum AI Computing: Next-Generation Processing Power',
      description: 'Explore the revolutionary potential of quantum AI computing and its applications in enterprise environments.',
      category: 'Quantum Computing',
      readTime: '35 min read',
      featured: false,
      tags: ['Quantum', 'AI', 'Computing'],
      link: '/blog/quantum-ai-computing-2025'
    },
    {
      id: '5',
      title: 'AI Ethics and Governance: Building Responsible AI Systems',
      description: 'Learn how to implement ethical AI practices and governance frameworks in your organization.',
      category: 'AI Ethics',
      readTime: '30 min read',
      featured: false,
      tags: ['AI', 'Ethics', 'Governance'],
      link: '/blog/ai-ethics-governance-2025'
    },
    {
      id: '6',
      title: 'Edge AI Computing: Real-Time Decision Making at Scale',
      description: 'Discover how edge AI computing enables real-time decision making and processing at the network edge.',
      category: 'Edge Computing',
      readTime: '25 min read',
      featured: false,
      tags: ['Edge AI', 'Real-time', 'Computing'],
      link: '/blog/edge-ai-computing-2025'
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
            <Link
              key={article.id}
              to={article.link}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-300"
            >
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
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {article.readTime}
                  </div>
                  <div className="text-indigo-600 font-semibold group-hover:gap-2 flex items-center transition-all">
                    Read More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg"
          >
            View All Articles
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestArticlesShowcase;