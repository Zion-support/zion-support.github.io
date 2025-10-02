import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Implementation Guides — Zion Tech Group',
  description: 'Comprehensive implementation guides for AI, cloud, and enterprise solutions. Step-by-step roadmaps to transform your business.',
  keywords: 'AI implementation, cloud migration, enterprise transformation, guides, roadmaps',
};

export default function GuidesPage() {
  const guides = [
    {
      title: 'AI 2026 Implementation Roadmap',
      description: 'Complete roadmap for implementing AI solutions in 2026. Includes strategy, technology selection, and deployment phases.',
      link: '/guides/ai-2026-implementation-roadmap',
      category: 'AI Implementation',
      readTime: '25 min read',
      difficulty: 'Intermediate',
      icon: '🚀'
    },
    {
      title: 'AI 2027 Implementation Roadmap',
      description: 'Advanced AI implementation guide for 2027. Covers quantum AI, autonomous systems, and next-generation technologies.',
      link: '/guides/ai-2027-implementation-roadmap',
      category: 'AI Implementation',
      readTime: '30 min read',
      difficulty: 'Advanced',
      icon: '🧠'
    },
    {
      title: 'Autonomous Business Processes Implementation Guide 2026',
      description: 'Step-by-step guide to implementing autonomous business processes. Achieve 95% automation with proven methodologies.',
      link: '/guides/autonomous-business-processes-implementation-guide-2026',
      category: 'Business Automation',
      readTime: '20 min read',
      difficulty: 'Intermediate',
      icon: '🤖'
    }
  ];

  const categories = [
    {
      name: 'AI Implementation',
      description: 'Comprehensive guides for AI strategy, implementation, and optimization',
      count: 15,
      icon: '🧠'
    },
    {
      name: 'Cloud Migration',
      description: 'Step-by-step cloud migration strategies and best practices',
      count: 8,
      icon: '☁️'
    },
    {
      name: 'Business Automation',
      description: 'Automation frameworks and implementation methodologies',
      count: 12,
      icon: '🤖'
    },
    {
      name: 'Cybersecurity',
      description: 'Security implementation guides and compliance frameworks',
      count: 10,
      icon: '🛡️'
    },
    {
      name: 'Data Analytics',
      description: 'Data strategy, analytics implementation, and optimization',
      count: 7,
      icon: '📊'
    },
    {
      name: 'Enterprise Solutions',
      description: 'Enterprise-grade solution implementation and scaling',
      count: 9,
      icon: '🏢'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Implementation Guides
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive, step-by-step guides to transform your business with AI, cloud, and enterprise solutions. 
              From strategy to deployment, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#featured-guides"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Browse Guides
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Custom Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section id="featured-guides" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Implementation Guides</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular and comprehensive guides, trusted by Fortune 500 companies worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Link key={index} href={guide.link} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{guide.icon}</span>
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {guide.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {guide.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {guide.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{guide.readTime}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full">
                      {guide.difficulty}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find guides organized by technology, industry, and implementation focus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.count} guides</span>
                  <Link
                    href={`/guides?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    View All →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Implementation Process</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Every guide follows our proven 5-step implementation methodology.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '1', title: 'Strategy', description: 'Define goals and requirements' },
              { step: '2', title: 'Planning', description: 'Create detailed implementation plan' },
              { step: '3', title: 'Design', description: 'Architecture and solution design' },
              { step: '4', title: 'Implementation', description: 'Deploy and configure solutions' },
              { step: '5', title: 'Optimization', description: 'Monitor, optimize, and scale' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Implementation Guide?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our experts can create a tailored implementation guide specifically for your business needs, 
            industry, and technology stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Custom Guide
            </Link>
            <Link
              href="/services"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}