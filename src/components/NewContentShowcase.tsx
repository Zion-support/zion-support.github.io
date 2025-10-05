import React from 'react';
import { Link } from 'react-router-dom';

const NewContentShowcase: React.FC = () => {
  const featuredArticles = [
    {
      title: 'The Future of AI in 2025',
      excerpt: 'Exploring revolutionary AI technologies that will transform industries.',
      link: '/blog/future-ai-2025',
      category: 'Artificial Intelligence',
      readTime: '5 min read',
      image: '/images/ai-future.jpg'
    },
    {
      title: 'Quantum Computing Breakthroughs',
      excerpt: 'Latest developments in quantum computing and their practical applications.',
      link: '/blog/quantum-computing-2025',
      category: 'Quantum Computing',
      readTime: '7 min read',
      image: '/images/quantum-computing.jpg'
    },
    {
      title: 'Autonomous Systems Revolution',
      excerpt: 'How self-managing systems are reshaping enterprise operations.',
      link: '/blog/autonomous-systems-2025',
      category: 'Automation',
      readTime: '6 min read',
      image: '/images/autonomous-systems.jpg'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & Innovations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our expert analysis of the latest trends in AI, 
            quantum computing, and autonomous systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-6xl text-white opacity-80">
                  {index === 0 && '🤖'}
                  {index === 1 && '⚛️'}
                  {index === 2 && '🔄'}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <Link
                  to={article.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Read Article
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Articles
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase;