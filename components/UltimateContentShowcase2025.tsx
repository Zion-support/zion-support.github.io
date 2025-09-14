import React from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025: React.FC = () => {
  const contentItems = [
    {
      title: "AI 2025 Enterprise Automation Revolution",
      description: "Complete guide to AI-powered automation transforming enterprise operations",
      category: "Blog Post",
      readingTime: "12 min read",
      href: "/blog/ai-2025-enterprise-automation-revolution-ultimate-guide",
      icon: "🚀",
      featured: true
    },
    {
      title: "Quantum AI 2025 Business Transformation",
      description: "Revolutionary convergence of quantum computing and AI reshaping business",
      category: "Blog Post",
      readingTime: "15 min read",
      href: "/blog/quantum-ai-2025-business-transformation-complete-guide",
      icon: "⚛️",
      featured: true
    },
    {
      title: "Manufacturing AI Success Story",
      description: "How a global manufacturer achieved 85% efficiency gains through AI automation",
      category: "Case Study",
      readingTime: "8 min read",
      href: "/case-studies/ai-automation-manufacturing-success-story",
      icon: "🏭",
      featured: true
    },
    {
      title: "AI Implementation Roadmap 2025",
      description: "Complete step-by-step guide to successful AI implementation",
      category: "Resource Guide",
      readingTime: "20 min read",
      href: "/resources/ai-2025-implementation-roadmap-complete-guide",
      icon: "🗺️",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">📚 ULTIMATE CONTENT COLLECTION 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive collection of cutting-edge AI guides, case studies, and resources that are transforming businesses worldwide in 2025
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl">{item.icon}</div>
                  {item.featured && (
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-purple-600 mb-2">{item.category}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="text-sm text-gray-500 mb-4">{item.readingTime}</div>
                </div>

                <Link 
                  href={item.href}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Content Impact Statistics</h3>
            <p className="text-xl text-gray-600">Our content has helped thousands of organizations transform their operations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">340%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Explore More Resources</h3>
            <p className="text-xl opacity-90">Access our complete library of AI resources and tools</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-bold mb-2">AI ROI Calculator</h4>
              <p className="opacity-90 mb-4">Calculate the potential return on investment for your AI initiatives</p>
              <Link 
                href="/tools/ai-transformation-roi-calculator-2025"
                className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200"
              >
                Try Calculator →
              </Link>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold mb-2">Implementation Services</h4>
              <p className="opacity-90 mb-4">Get expert guidance for your AI transformation journey</p>
              <Link 
                href="/services/ai-implementation"
                className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-xl font-bold mb-2">Training Programs</h4>
              <p className="opacity-90 mb-4">Comprehensive AI training for your team</p>
              <Link 
                href="/services/ai-training"
                className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200"
              >
                View Programs →
              </Link>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse All Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Custom Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;