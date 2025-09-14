import React from 'react';
import Link from 'next/link';

const ComprehensiveContentShowcase2026 = () => {
  const contentCategories = [
    {
      title: "AI Implementation Guides",
      description: "Complete guides for implementing AI in your organization",
      icon: "🚀",
      color: "from-purple-500 to-blue-600",
      content: [
        {
          title: "AI 2026 Enterprise Transformation",
          description: "Complete guide to transforming your enterprise with cutting-edge AI technologies",
          href: "/blog/ai-2026-enterprise-transformation-ultimate-guide",
          readTime: "15 min",
          featured: true
        },
        {
          title: "AI Implementation Ultimate Guide 2026",
          description: "The most comprehensive AI implementation guide with complete roadmap to success",
          href: "/resources/ai-implementation-ultimate-guide-2026",
          readTime: "20 min",
          featured: true
        }
      ]
    },
    {
      title: "Quantum AI Revolution",
      description: "Discover the future of quantum-enhanced AI",
      icon: "⚛️",
      color: "from-indigo-500 to-purple-600",
      content: [
        {
          title: "Quantum AI 2026 Business Revolution",
          description: "Complete implementation guide with real-world applications and ROI strategies",
          href: "/blog/quantum-ai-2026-business-revolution-complete-guide",
          readTime: "12 min",
          featured: true
        }
      ]
    },
    {
      title: "Success Stories & Case Studies",
      description: "Real-world examples of AI transformation success",
      icon: "📈",
      color: "from-green-500 to-teal-600",
      content: [
        {
          title: "AI Transformation Success Story: 400% ROI",
          description: "How TechCorp achieved 400% ROI in 12 months through strategic AI implementation",
          href: "/case-studies/ai-transformation-success-story-2026",
          readTime: "8 min",
          featured: true
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-semibold">🌟 COMPREHENSIVE 2026 CONTENT LIBRARY</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            Everything You Need for AI Success
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
            Access our complete library of AI implementation guides, quantum computing breakthroughs, 
            success stories, and proven strategies that deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {contentCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`bg-gradient-to-r ${category.color} p-8 text-white`}>
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{category.title}</h3>
                <p className="text-xl text-white text-opacity-90 leading-relaxed">
                  {category.description}
                </p>
              </div>
              
              <div className="p-8">
                <div className="space-y-6">
                  {category.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="border border-gray-200 rounded-2xl p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {item.title}
                        </h4>
                        {item.featured && (
                          <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 font-medium">
                          {item.readTime} read
                        </span>
                        <Link 
                          href={item.href}
                          className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group-hover:underline"
                        >
                          Read Now →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-16 text-white text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-2xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of organizations already transforming their operations with our proven AI strategies, 
            implementation guides, and real-world success stories. Start your AI transformation journey today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30">
              <div className="text-4xl mb-4">📚</div>
              <h4 className="text-2xl font-bold mb-4">Complete Guides</h4>
              <p className="text-purple-100">
                Step-by-step implementation guides with proven methodologies
              </p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-2xl font-bold mb-4">Proven Results</h4>
              <p className="text-purple-100">
                Real-world case studies with measurable ROI and success metrics
              </p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-2xl font-bold mb-4">Future-Ready</h4>
              <p className="text-purple-100">
                Cutting-edge technologies and strategies for 2026 and beyond
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center text-purple-600 bg-white hover:bg-gray-100 px-10 py-5 rounded-xl font-semibold text-xl transition-all transform hover:scale-105"
            >
              Get Started Today →
            </Link>
            <Link 
              href="/blog"
              className="inline-flex items-center text-white border-2 border-white hover:bg-white hover:text-purple-600 px-10 py-5 rounded-xl font-semibold text-xl transition-all transform hover:scale-105"
            >
              Explore All Content
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveContentShowcase2026;