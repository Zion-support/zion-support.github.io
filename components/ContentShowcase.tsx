import React from 'react';
import Link from 'next/link';

const ContentShowcase = () => {
  const featuredContent = [
    {
      id: 'ai-autonomous-enterprise-transformation-2026',
      title: 'AI Autonomous Enterprise Transformation 2026: Complete Self-Managing Operations Guide',
      excerpt: 'Master autonomous AI enterprise operations with zero-touch business management, predictive analytics, and self-optimizing systems. Achieve 99.9% uptime and 90% cost reduction.',
      type: 'article',
      readTime: '30 min read',
      category: 'Enterprise AI',
      featured: true,
      publishedDate: '2026-01-20',
      metrics: [
        { value: '99.9%', label: 'Uptime' },
        { value: '90%', label: 'Cost Reduction' }
      ]
    },
    {
      id: 'ai-quantum-hybrid-computing-2026',
      title: 'AI Quantum Hybrid Computing 2026: Next-Generation Intelligence Revolution',
      excerpt: 'Harness quantum computing for AI breakthroughs with 1000x faster optimization, revolutionary capabilities, and 95% accuracy. Explore the future of hybrid quantum-classical AI.',
      type: 'article',
      readTime: '25 min read',
      category: 'Quantum AI',
      featured: true,
      publishedDate: '2026-01-20',
      metrics: [
        { value: '1000x', label: 'Faster Optimization' },
        { value: '95%', label: 'Accuracy Improvement' }
      ]
    },
    {
      id: 'ai-transformation-mega-success-2026',
      title: 'AI Transformation Mega Success 2026: $25M ROI Case Study',
      excerpt: 'See how a Fortune 500 company achieved $25M ROI with comprehensive AI transformation. 99% automation, 90% cost reduction, and complete business revolution.',
      type: 'case-study',
      readTime: '30 min read',
      category: 'Case Study',
      featured: true,
      publishedDate: '2026-01-20',
      metrics: [
        { value: '$25M', label: 'Annual ROI' },
        { value: '99%', label: 'Automation' }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Enterprise AI": "bg-purple-100 text-purple-800",
      "Quantum AI": "bg-indigo-100 text-indigo-800",
      "Case Study": "bg-green-100 text-green-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured AI Content 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest insights on autonomous enterprises, quantum computing, and real-world AI success stories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredContent.map((item) => (
            <Link
              key={item.id}
              href={`/${item.type === 'case-study' ? 'case-studies' : 'blog'}/${item.id}`}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:scale-105"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(item.category)}`}>
                  {item.category}
                </span>
                <span className="text-sm text-gray-500">{item.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {item.excerpt}
              </p>
              
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-4">
                  {item.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-blue-600">{metric.value}</div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  {item.type === 'case-study' ? 'View Case Study' : 'Read Article'} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;