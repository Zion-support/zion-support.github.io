import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'Content Showcase - AI 2025 Revolutionary Breakthroughs',
  description: 'Discover the most comprehensive collection of AI 2025 insights, revolutionary breakthroughs, and real-world success stories.',
  keywords: ['AI 2025', 'Content Showcase', 'Revolutionary Breakthroughs', 'AI Insights', 'Success Stories'],
};

export default function ContentShowcasePage() {
  const contentItems = [
    {
      title: "AI 2025 Revolutionary Breakthrough: Ultimate Content Showcase",
      description: "Discover the most comprehensive AI 2025 revolutionary breakthrough content showcase featuring cutting-edge technologies, implementation strategies, and real-world success stories.",
      link: "/blog/ai-2025-revolutionary-breakthrough-ultimate-content-showcase",
      category: "AI Revolution",
      readTime: "15 min read",
      featured: true,
      image: "/images/ai-2025-revolutionary-breakthrough.jpg"
    },
    {
      title: "Quantum AI 2026: Business Transformation Ultimate Guide",
      description: "The definitive guide to Quantum AI business transformation in 2026. Discover how quantum computing is revolutionizing business operations, decision-making, and competitive advantage.",
      link: "/blog/quantum-ai-2026-business-transformation-ultimate-guide",
      category: "Quantum Computing",
      readTime: "20 min read",
      featured: true,
      image: "/images/quantum-ai-2026-guide.jpg"
    },
    {
      title: "Fortune 500 AI Transformation: $2.3B Success Story",
      description: "How a Fortune 500 company achieved $2.3 billion in cost savings through comprehensive AI transformation, revolutionizing their operations and competitive position.",
      link: "/case-studies/fortune-500-ai-transformation-success",
      category: "Case Study",
      readTime: "10 min read",
      featured: true,
      image: "/images/fortune-500-success.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - AI 2025 Revolutionary Breakthroughs"
        description="Discover the most comprehensive collection of AI 2025 insights, revolutionary breakthroughs, and real-world success stories."
        keywords="AI 2025, Content Showcase, Revolutionary Breakthroughs, AI Insights, Success Stories"
        url="/content-showcase"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🚀 CONTENT SHOWCASE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI 2025 Revolutionary Breakthroughs
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the most comprehensive collection of AI 2025 insights, revolutionary breakthroughs, 
              and real-world success stories that are transforming businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Content</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most popular and impactful content pieces that are driving the AI revolution forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentItems.map((item, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  item.featured ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {item.featured && (
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-t-xl">
                    <span className="text-sm font-bold">⭐ FEATURED</span>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-sm">{item.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {item.description}
                  </p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of companies already leveraging our AI solutions for unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}