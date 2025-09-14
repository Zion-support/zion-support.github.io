import React from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const contentItems = [
    {
      title: "AI 2025 Ultimate Content Revolution",
      description: "The breakthrough delivering 25,000% ROI and 1500% engagement increases",
      type: "Blog Post",
      readTime: "8 min read",
      featured: true,
      href: "/content/ai-2025-ultimate-content-revolution-breakthrough"
    },
    {
      title: "25,000% ROI Success Story",
      description: "How a Fortune 100 company achieved unprecedented results with AI content",
      type: "Case Study",
      readTime: "12 min read",
      featured: true,
      href: "/case-studies/ai-2025-content-revolution-25000-roi-success-story"
    },
    {
      title: "AI 2025 Enterprise Automation",
      description: "Revolutionary automation solutions transforming business operations",
      type: "Guide",
      readTime: "15 min read",
      featured: false,
      href: "/content/ai-2025-enterprise-automation-revolution"
    },
    {
      title: "Quantum AI Business Transformation",
      description: "How quantum computing is revolutionizing business intelligence",
      type: "Innovation",
      readTime: "10 min read",
      featured: false,
      href: "/content/ai-2025-quantum-ai-business-transformation"
    },
    {
      title: "Neural Interface Revolution",
      description: "The future of human-computer interaction in business",
      type: "Technology",
      readTime: "7 min read",
      featured: false,
      href: "/content/ai-2025-neural-interface-revolution"
    },
    {
      title: "Autonomous Business Systems",
      description: "Self-managing business operations powered by AI",
      type: "Strategy",
      readTime: "11 min read",
      featured: false,
      href: "/content/ai-2025-autonomous-business-systems"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold text-white">🔥 ULTIMATE CONTENT SHOWCASE 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Content That's
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Transforming Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough content and case studies that are delivering unprecedented results 
            for Fortune 500 companies worldwide.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {item.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  FEATURED
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.type === 'Case Study' ? 'bg-green-100 text-green-800' :
                    item.type === 'Blog Post' ? 'bg-blue-100 text-blue-800' :
                    item.type === 'Guide' ? 'bg-purple-100 text-purple-800' :
                    item.type === 'Innovation' ? 'bg-orange-100 text-orange-800' :
                    item.type === 'Technology' ? 'bg-indigo-100 text-indigo-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.type}
                  </span>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <Link
                  href={item.href}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group-hover:translate-x-1 transform duration-200"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join the Fortune 500 companies achieving unprecedented results with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors transform hover:scale-105"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;