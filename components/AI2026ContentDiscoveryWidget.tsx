import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from './ui/Card';

export default function AI2026ContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🔥' },
    { id: 'breakthroughs', name: 'Breakthroughs', icon: '🚀' },
    { id: 'case-studies', name: 'Case Studies', icon: '🏢' },
    { id: 'resources', name: 'Resources', icon: '🛠️' },
    { id: 'tools', name: 'Tools', icon: '⚡' }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI 2026 Breakthrough Innovations",
      description: "Revolutionary AI technologies transforming industries",
      href: "/blog/ai-2026-breakthrough-innovations",
      category: "breakthroughs",
      type: "Blog Post",
      readTime: "15 min",
      difficulty: "Advanced",
      roi: "5000%",
      icon: "🚀",
      featured: true
    },
    {
      id: 2,
      title: "Global Tech Transformation Case Study",
      description: "How a Fortune 500 company achieved 5000% ROI",
      href: "/case-studies/ai-2026-global-tech-transformation-breakthrough",
      category: "case-studies",
      type: "Case Study",
      readTime: "12 min",
      difficulty: "Intermediate",
      roi: "5000%",
      icon: "🏢",
      featured: true
    },
    {
      id: 3,
      title: "AI 2026 Ultimate Implementation Toolkit",
      description: "Complete guide for implementing breakthrough technologies",
      href: "/resources/ai-2026-ultimate-implementation-toolkit",
      category: "resources",
      type: "Resource Guide",
      readTime: "25 min",
      difficulty: "Expert",
      roi: "Complete",
      icon: "🛠️",
      featured: true
    },
    {
      id: 4,
      title: "Quantum AI ROI Calculator",
      description: "Calculate your potential return on quantum AI investments",
      href: "/tools/ai-roi-calculator-2026",
      category: "tools",
      type: "Interactive Tool",
      readTime: "5 min",
      difficulty: "Beginner",
      roi: "Calculator",
      icon: "⚡",
      featured: false
    },
    {
      id: 5,
      title: "Neural Interface Implementation Guide",
      description: "Step-by-step guide to neural interface technology",
      href: "/resources/neural-interface-implementation-guide-2026",
      category: "resources",
      type: "Implementation Guide",
      readTime: "20 min",
      difficulty: "Advanced",
      roi: "300%",
      icon: "🧠",
      featured: false
    },
    {
      id: 6,
      title: "Autonomous Agent Deployment Case Study",
      description: "Real-world success with self-organizing AI systems",
      href: "/case-studies/autonomous-agent-deployment-success-2026",
      category: "case-studies",
      type: "Case Study",
      readTime: "10 min",
      difficulty: "Intermediate",
      roi: "2000%",
      icon: "🤖",
      featured: false
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🔍 Discover AI 2026 Content
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI 2026 breakthrough content. 
            Find exactly what you need to transform your business and achieve unprecedented success.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <Card className={`p-6 group-hover:shadow-xl transition-all duration-300 ${
                item.featured ? 'ring-2 ring-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50' : 'bg-white'
              }`}>
                {item.featured && (
                  <div className="inline-flex items-center bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full mb-4">
                    ⭐ Featured
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-indigo-600">{item.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{item.type}</span>
                  <span>{item.readTime} read</span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                    {item.difficulty}
                  </span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center bg-white">
            <div className="text-3xl font-bold text-indigo-600 mb-2">25+</div>
            <div className="text-sm text-gray-600">Breakthrough Articles</div>
          </Card>
          <Card className="p-6 text-center bg-white">
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-sm text-gray-600">Success Case Studies</div>
          </Card>
          <Card className="p-6 text-center bg-white">
            <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
            <div className="text-sm text-gray-600">Implementation Guides</div>
          </Card>
          <Card className="p-6 text-center bg-white">
            <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
            <div className="text-sm text-gray-600">Interactive Tools</div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-lg opacity-90 mb-6">
              Our expert team can create custom content and solutions tailored to your specific needs. 
              Get personalized recommendations and implementation support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get Custom Recommendations
              </Link>
              <Link
                href="/webinars"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Join Expert Webinar
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}