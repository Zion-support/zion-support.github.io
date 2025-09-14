import React from 'react';
import Link from 'next/link';

const NewContentShowcase2025 = () => {
  const contentItems = [
    {
      title: "AI 2025: The Enterprise Transformation Revolution",
      category: "AI Innovation",
      excerpt: "Discover how AI is revolutionizing enterprise operations in 2025 with unprecedented automation, efficiency, and ROI gains.",
      link: "/blog/ai-2025-enterprise-transformation",
      featured: true,
      stats: "340% ROI"
    },
    {
      title: "Quantum Computing Business Applications: The 2025 Breakthrough",
      category: "Quantum Computing",
      excerpt: "Explore how quantum computing is revolutionizing business applications in 2025, delivering solutions to previously impossible problems.",
      link: "/blog/quantum-computing-business-applications-2025",
      featured: true,
      stats: "10^15x Speed"
    },
    {
      title: "AI Automation in Manufacturing: 340% Efficiency Increase",
      category: "Case Study",
      excerpt: "How a global manufacturing company achieved 340% efficiency increase using AI automation solutions.",
      link: "/case-studies/ai-automation-manufacturing-success",
      featured: true,
      stats: "94.7% Defect Reduction"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with our comprehensive collection of AI insights, case studies, 
            and breakthrough technologies that are shaping the future of business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contentItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  {item.featured && (
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold text-purple-600">{item.stats}</span>
                  </div>
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of forward-thinking leaders who are already implementing 
              these breakthrough technologies and achieving remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore All Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;