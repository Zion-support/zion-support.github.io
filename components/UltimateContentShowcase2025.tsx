import React from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const featuredContent = [
    {
      title: "AI 2025 Enterprise Transformation",
      description: "Complete guide to AI implementation with proven ROI strategies and real-world case studies.",
      image: "🤖",
      link: "/blog/ai-2025-enterprise-transformation-complete-guide",
      category: "AI & Automation",
      readTime: "15 min read"
    },
    {
      title: "Quantum Computing Breakthrough",
      description: "Revolutionary quantum-AI applications transforming industries with unprecedented computational power.",
      image: "⚛️",
      link: "/blog/ai-2025-quantum-computing-breakthrough",
      category: "Quantum Computing",
      readTime: "12 min read"
    },
    {
      title: "Autonomous Business Systems",
      description: "Self-managing organizations and automated operations for the future of business.",
      image: "🔄",
      link: "/blog/ai-2025-autonomous-business-systems",
      category: "Autonomous Systems",
      readTime: "18 min read"
    },
    {
      title: "Global Manufacturing Success",
      description: "How a Fortune 500 company achieved 340% ROI through comprehensive AI transformation.",
      image: "🏭",
      link: "/case-studies/global-manufacturing-ai-transformation",
      category: "Case Study",
      readTime: "10 min read"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ FEATURED CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI, technology, and business transformation content. 
            Expert insights, proven strategies, and real-world success stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-6">
                <div className="text-4xl mb-4">{content.image}</div>
                <div className="text-sm text-purple-600 font-semibold mb-2">{content.category}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{content.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{content.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{content.readTime}</span>
                  <Link
                    href={content.link}
                    className="text-purple-600 font-semibold text-sm hover:text-purple-800 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of leaders who are already implementing these breakthrough solutions. 
              Get expert guidance and accelerate your transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;