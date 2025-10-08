import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Database, Cloud, Shield, Brain, Zap, Target } from 'lucide-react';

const GuidesPage: React.FC = () => {
  const guides = [
    {
      id: 'ai-2027-implementation-roadmap',
      title: 'AI 2027 Implementation Roadmap',
      description: 'Complete roadmap for implementing AI solutions in your enterprise with step-by-step guidance.',
      category: 'AI Implementation',
      readTime: '45 min read',
      difficulty: 'Advanced',
      icon: '🚀',
      path: '/guides/ai-2027-implementation-roadmap'
    },
    {
      id: 'ai-2026-implementation-roadmap',
      title: 'AI 2026 Implementation Roadmap',
      description: 'Comprehensive guide to AI implementation strategies for 2026 with proven methodologies.',
      category: 'AI Strategy',
      readTime: '40 min read',
      difficulty: 'Intermediate',
      icon: '📋',
      path: '/guides/ai-2026-implementation-roadmap'
    },
    {
      id: 'autonomous-business-processes-implementation-guide-2026',
      title: 'Autonomous Business Processes Implementation Guide 2026',
      description: 'Complete guide to implementing autonomous business processes with real-world examples.',
      category: 'Process Automation',
      readTime: '60 min read',
      difficulty: 'Advanced',
      icon: '🤖',
      path: '/guides/autonomous-business-processes-implementation-guide-2026'
    }
  ];

  const categories = [
    {
      name: 'AI Implementation',
      icon: Brain,
      description: 'Step-by-step guides for implementing AI solutions',
      count: 2
    },
    {
      name: 'Process Automation',
      icon: Zap,
      description: 'Guides for automating business processes',
      count: 1
    },
    {
      name: 'Cloud Architecture',
      icon: Cloud,
      description: 'Cloud infrastructure and architecture guides',
      count: 0
    },
    {
      name: 'Security Best Practices',
      icon: Shield,
      description: 'Cybersecurity and data protection guides',
      count: 0
    },
    {
      name: 'Data Management',
      icon: Database,
      description: 'Data warehousing and analytics guides',
      count: 0
    },
    {
      name: 'Development',
      icon: Code,
      description: 'Software development and coding guides',
      count: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Technical Guides</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical guides and implementation roadmaps for AI, automation, and enterprise solutions
          </p>
        </header>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.name} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <category.icon className="w-8 h-8 text-indigo-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.count} guides</span>
                  <Link
                    to="/guides"
                    className="text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    View All →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Guides */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🌟 Featured Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <div key={guide.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{guide.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{guide.readTime}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    guide.difficulty === 'Advanced' 
                      ? 'bg-red-100 text-red-800' 
                      : guide.difficulty === 'Intermediate'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {guide.difficulty}
                  </span>
                </div>
                <Link
                  to={guide.path}
                  className="block w-full bg-indigo-600 text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Read Guide
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Custom Implementation Support?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our expert team can provide personalized implementation support and custom solutions 
              tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Get Expert Support
              </Link>
              <Link
                to="/services"
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesPage;