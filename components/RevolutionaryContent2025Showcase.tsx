import React from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Showcase = () => {
  const contentItems = [
    {
      title: "AI 2025 Ultimate Business Transformation",
      description: "Complete implementation guide for enterprise AI transformation with proven ROI strategies.",
      category: "Business Transformation",
      readTime: "15 min read",
      featured: true,
      new: true,
      link: "/blog/ai-2025-ultimate-business-transformation-complete-guide"
    },
    {
      title: "Quantum AI 2025 Revolutionary Breakthrough",
      description: "Discover how quantum computing and AI integration is revolutionizing enterprise operations.",
      category: "Quantum Technology",
      readTime: "12 min read",
      featured: true,
      new: true,
      link: "/blog/quantum-ai-2025-revolutionary-breakthrough-enterprise-guide"
    },
    {
      title: "Fortune 500 AI Transformation Success",
      description: "Real case study showing 500% ROI achievement through comprehensive AI implementation.",
      category: "Case Study",
      readTime: "10 min read",
      featured: true,
      new: true,
      link: "/case-studies/fortune-500-ai-transformation-success-story"
    },
    {
      title: "Neural Interface Revolution 2025",
      description: "Next-generation brain-computer interfaces transforming human-machine interaction.",
      category: "Neural Technology",
      readTime: "8 min read",
      featured: false,
      new: false,
      link: "/blog/neural-interface-revolution-2025"
    },
    {
      title: "Autonomous Business Systems Guide",
      description: "Complete guide to implementing self-managing business operations with AI.",
      category: "Automation",
      readTime: "14 min read",
      featured: false,
      new: false,
      link: "/blog/autonomous-business-systems-2025"
    },
    {
      title: "Edge Computing AI Revolution",
      description: "How edge computing is enabling real-time AI processing at the network edge.",
      category: "Edge Computing",
      readTime: "9 min read",
      featured: false,
      new: false,
      link: "/blog/edge-computing-ai-revolution-2025"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6 font-bold text-sm">
            🔥 REVOLUTIONARY CONTENT 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cutting-Edge AI Content Collection
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive library of AI content, featuring the latest breakthroughs, 
            implementation guides, and real-world success stories from industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  <div className="flex space-x-2">
                    {item.new && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                        NEW
                      </span>
                    )}
                    {item.featured && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                  <Link
                    href={item.link}
                    className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get Instant Access to All Content
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of business leaders who are transforming their organizations with our AI content library.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/content"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Browse All Content
              </Link>
              <Link
                href="/newsletter"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Subscribe to Updates
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-sm text-gray-600">Articles & Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-sm text-gray-600">Tools & Calculators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">10K+</div>
              <div className="text-sm text-gray-600">Monthly Readers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025Showcase;