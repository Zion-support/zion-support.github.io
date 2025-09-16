import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
import { CalendarIconClockIconArrowRightIconStarIcon } from '@heroicons/react/24/outline';

export default function NewContentShowcase2025_2026() {
  const featuredContent = [
    {
      title: "AI 2025-2026: Ultimate Enterprise Transformation Revolution",
      description: "Discover how AI is revolutionizing enterprise operations with 500%+ ROI improvementsautonomous systemsand next-generation business intelligence.",
      category: "AI Transformation",
      readTime: "12 min read",
      date: "2025-01-15",
      href: "/blog/ai-2025-2026-ultimate-enterprise-transformation-revolution",
      featured: true,
      image: "/images/ai-enterprise-transformation-2025.jpg"
    },
    {
      title: "Quantum AI 2026: Business Breakthrough Ultimate Guide",
      description: "Explore the revolutionary convergence of quantum computing and AI transforming business operations with unprecedented processing power.",
      category: "Quantum AI",
      readTime: "10 min read",
      date: "2025-01-15",
      href: "/blog/quantum-ai-2026-business-breakthrough-ultimate-guide",
      featured: true,
      image: "/images/quantum-ai-business-breakthrough-2026.jpg"
    },
    {
      title: "AI 2025 Enterprise Transformation: 1500% ROI Success Story",
      description: "How a Fortune 500 company achieved 1500% ROI through comprehensive AI transformationreducing costs by 80% and increasing efficiency by 400%.",
      category: "Case Study",
      readTime: "8 min read",
      date: "2025-01-15",
      href: "/case-studies/ai-2025-enterprise-transformation-1500-roi-success-story",
      featured: true,
      image: "/images/ai-enterprise-transformation-1500-roi.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <StarIcon className="w-5 h-5 mr-2" />
            LATEST BREAKTHROUGH CONTENT 2025-2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI & Technology
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Insights & Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge AI transformationsquantum computing breakthroughsand proven enterprise success stories 
            that are reshaping the future of business.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((contentindex) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Content Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-blue-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {content.category}
                  </span>
                </div>
                {content.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {content.title}
                  </h3>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {content.description}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {content.date}
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {content.readTime}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={content.href}
                  className="inline-flex items-center w-full justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg"
                >
                  Read More
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of companies achieving 500%+ ROI through strategic AI implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Our Services
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}