import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Clock, User, Tag } from 'lucide-react';

const GuidesPage: React.FC = () => {
  const guides = [
    {
      id: 'ai-2026-implementation-roadmap',
      title: 'AI 2026 Implementation Roadmap',
      description: 'Comprehensive guide to implementing AI solutions in 2026 with cutting-edge strategies and best practices.',
      readTime: '15 min read',
      author: 'Zion Tech Group',
      tags: ['AI', 'Implementation', '2026', 'Strategy'],
      href: '/guides/ai-2026-implementation-roadmap',
      featured: true
    },
    {
      id: 'ai-2027-implementation-roadmap',
      title: 'AI 2027 Implementation Roadmap',
      description: 'Advanced AI implementation strategies for 2027, including quantum computing integration and autonomous systems.',
      readTime: '20 min read',
      author: 'Zion Tech Group',
      tags: ['AI', 'Quantum Computing', '2027', 'Advanced'],
      href: '/guides/ai-2027-implementation-roadmap',
      featured: true
    },
    {
      id: 'autonomous-business-processes',
      title: 'Autonomous Business Processes Implementation Guide 2026',
      description: 'Step-by-step guide to implementing autonomous business processes for maximum efficiency and cost savings.',
      readTime: '25 min read',
      author: 'Zion Tech Group',
      tags: ['Automation', 'Business Processes', '2026', 'Implementation'],
      href: '/guides/autonomous-business-processes-implementation-guide-2026',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technical Guides
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides and implementation roadmaps for AI, automation, and cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Guides */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Implementation Guides
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {guides.filter(guide => guide.featured).map((guide) => (
              <div key={guide.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-6 h-6 text-indigo-600 mr-2" />
                    <span className="text-sm font-medium text-indigo-600">Implementation Guide</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {guide.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {guide.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {guide.readTime}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {guide.author}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {guide.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={guide.href}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
                  >
                    Read Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Guides */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            All Technical Guides
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <div key={guide.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <BookOpen className="w-5 h-5 text-indigo-600 mr-2" />
                    <span className="text-sm font-medium text-indigo-600">Guide</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {guide.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {guide.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {guide.readTime}
                      </div>
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {guide.author}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {guide.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={guide.href}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors"
                  >
                    Read Guide
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Custom Implementation Support?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Our expert team can help you implement these strategies with personalized guidance and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Expert Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/enterprise"
              className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:scale-105"
            >
              Enterprise Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesPage;