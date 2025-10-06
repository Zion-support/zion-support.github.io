import React from 'react';
import { Link } from 'react-router-dom';

const EnterpriseSolutionsShowcase2026: React.FC = () => {
  const enterpriseSolutions = [
    {
      id: 1,
      title: 'AI-Powered Enterprise Automation',
      slug: 'ai-enterprise-automation-2026',
      excerpt: 'Transform your enterprise with comprehensive AI automation, achieving 95% process efficiency. From workflow optimization to intelligent decision-making systems.',
      category: 'AI Automation',
      date: '2026-01-30',
      readTime: '25 min',
      featured: true,
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Cloud-Native Enterprise Architecture',
      slug: 'cloud-native-enterprise-architecture-2026',
      excerpt: 'Build scalable, resilient enterprise systems with cloud-native architecture patterns and microservices design principles.',
      category: 'Cloud Architecture',
      date: '2026-01-25',
      readTime: '20 min',
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Enterprise Data Intelligence Platform',
      slug: 'enterprise-data-intelligence-2026',
      excerpt: 'Unlock the power of your enterprise data with advanced analytics, machine learning, and real-time insights.',
      category: 'Data Intelligence',
      date: '2026-01-20',
      readTime: '18 min',
      featured: true,
      image: '/api/placeholder/400/250'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Automation':
        return 'bg-blue-100 text-blue-800';
      case 'Cloud Architecture':
        return 'bg-green-100 text-green-800';
      case 'Data Intelligence':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">
              🏢 ENTERPRISE SOLUTIONS 2026
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Enterprise Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge enterprise solutions designed to transform your business operations and drive unprecedented growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enterpriseSolutions.map((solution) => (
            <div
              key={solution.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                solution.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-48 object-cover"
                />
                {solution.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(solution.category)}`}>
                    {solution.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{solution.date}</span>
                  <span>{solution.readTime} read</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {solution.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {solution.excerpt}
                </p>

                <Link
                  to={`/solutions/${solution.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/enterprise"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Enterprise Solutions
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSolutionsShowcase2026;