import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, User, Tag } from 'lucide-react';

const GuidesPage: React.FC = () => {
  const guides = [
    {
      id: 'ai-2026-implementation-roadmap',
      title: 'AI 2026 Implementation Roadmap: Complete Guide to Enterprise AI Transformation',
      description: 'Master the art of AI implementation with our comprehensive 2026 roadmap. From strategy development to full-scale deployment, learn how to successfully transform your enterprise.',
      category: 'Implementation',
      readTime: '25 min read',
      date: '2026-01-22',
      path: '/guides/ai-2026-implementation-roadmap',
      image: '🚀',
      featured: true,
      stats: { views: 12500, engagement: 94 }
    },
    {
      id: 'ai-2027-implementation-roadmap',
      title: 'AI 2027 Implementation Roadmap: Next-Generation Enterprise AI Strategy',
      description: 'Advanced AI implementation strategies for 2027, including quantum computing integration, autonomous systems, and next-generation AI capabilities.',
      category: 'Strategy',
      readTime: '30 min read',
      date: '2027-01-15',
      path: '/guides/ai-2027-implementation-roadmap',
      image: '⚡',
      featured: true,
      stats: { views: 8900, engagement: 91 }
    },
    {
      id: 'autonomous-business-processes-implementation-guide-2026',
      title: 'Autonomous Business Processes Implementation Guide 2026',
      description: 'Complete guide to implementing autonomous business processes using AI and automation technologies for maximum efficiency and cost savings.',
      category: 'Automation',
      readTime: '35 min read',
      date: '2026-02-01',
      path: '/guides/autonomous-business-processes-implementation-guide-2026',
      image: '🤖',
      featured: false,
      stats: { views: 7200, engagement: 88 }
    }
  ];

  const categories = [...new Set(guides.map(guide => guide.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Implementation Guides
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Implementation Guides
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Comprehensive guides to help you successfully implement AI in your organization
            </p>
            
            <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto">
              Our expert-authored guides provide step-by-step instructions, best practices, and real-world examples 
              to help you navigate the complexities of AI implementation and achieve measurable business results.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementation Guides
            </h2>
            <p className="text-xl text-gray-600">
              Step-by-step guides to help you implement AI successfully
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <article
                key={guide.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image/Visual Header */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">{guide.image}</div>
                    <div className="text-sm font-medium opacity-90">{guide.category}</div>
                  </div>
                  
                  {/* Featured Badge */}
                  {guide.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                        ⭐ Featured
                      </span>
                    </div>
                  )}

                  {/* Stats Overlay */}
                  {guide.stats && (
                    <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">
                          {guide.stats.views.toLocaleString()}
                        </div>
                        <div className="text-xs text-white opacity-90">views</div>
                      </div>
                    </div>
                  )}

                  {/* Read Time Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {guide.readTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {guide.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {guide.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {guide.description}
                  </p>

                  {/* Stats Row */}
                  {guide.stats && (
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span className="text-gray-600">{guide.stats.views.toLocaleString()} views</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-green-600 font-medium">{guide.stats.engagement}% engagement</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Date and CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{guide.date}</span>
                    <Link
                      to={guide.path}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                    >
                      Read Guide
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Implementing AI?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our expert team can help you implement AI solutions based on these proven methodologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
            >
              Get Expert Help
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link 
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuidesPage;