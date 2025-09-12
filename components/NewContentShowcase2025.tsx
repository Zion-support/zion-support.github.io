import React from 'react';
import Link from 'next/link';

const NewContentShowcase2025: React.FC = () => {
  const newContent = [
    {
      title: "AI Services 2025",
      description: "Comprehensive AI solutions including automation, content generation, analytics, and cybersecurity",
      href: "/ai-services-2025",
      category: "AI Services",
      icon: "🤖",
      badge: "NEW",
      badgeColor: "bg-purple-500"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Revolutionary quantum solutions for finance, healthcare, security, and research",
      href: "/quantum-computing-solutions",
      category: "Quantum Tech",
      icon: "⚛️",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-indigo-500"
    },
    {
      title: "AI Implementation Guide 2025",
      description: "Complete step-by-step guide to successful AI adoption in your organization",
      href: "/ai-implementation-guide-2025",
      category: "Guide",
      icon: "📚",
      badge: "ESSENTIAL",
      badgeColor: "bg-blue-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-b from-blue-100/50 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🔥 MEGA CONTENT DROP - JANUARY 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            🚀 Revolutionary New Content Just Released!
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto">
            Discover our latest groundbreaking content: AI Services 2025, Quantum Computing Solutions, 
            and the ultimate AI Implementation Guide. Everything you need to stay ahead of the technology curve.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {newContent.map((content, index) => (
            <div key={index} className="group">
              <Link href={content.href} className="block">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-slate-200 group-hover:border-blue-300 group-hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{content.icon}</div>
                    <span className={`${content.badgeColor} text-white text-xs px-3 py-1 rounded-full font-medium animate-pulse`}>
                      {content.badge}
                    </span>
                  </div>
                  <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">
                    {content.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {content.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                    Explore Now
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our cutting-edge AI and quantum solutions 
              to drive innovation and achieve unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/content-showcase"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Explore All Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;