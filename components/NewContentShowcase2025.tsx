import React from 'react';
import Link from 'next/link';

const NewContentShowcase2025 = () => {
  const newContent = [
    {
      title: "AI-Powered Business Automation Revolution",
      description: "Discover how our latest AI solutions are transforming enterprise operations with 500% efficiency gains.",
      image: "🤖",
      category: "AI Solutions",
      readTime: "5 min read",
      featured: true
    },
    {
      title: "Quantum Computing Breakthroughs in 2025",
      description: "Explore the latest quantum computing innovations and their real-world business applications.",
      image: "⚛️",
      category: "Technology",
      readTime: "7 min read",
      featured: true
    },
    {
      title: "Neural Interface Technology: The Future is Now",
      description: "Learn about cutting-edge neural interface developments that are reshaping human-computer interaction.",
      image: "🧠",
      category: "Innovation",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Sustainable AI: Green Technology Solutions",
      description: "How we're building environmentally conscious AI systems for a better tomorrow.",
      image: "🌱",
      category: "Sustainability",
      readTime: "4 min read",
      featured: false
    },
    {
      title: "Enterprise Security in the AI Era",
      description: "Comprehensive security strategies for protecting your business in an AI-driven world.",
      image: "🔒",
      category: "Security",
      readTime: "8 min read",
      featured: false
    },
    {
      title: "Micro SaaS Success Stories",
      description: "Real case studies of how micro SaaS solutions are driving business growth and innovation.",
      image: "💼",
      category: "Case Studies",
      readTime: "6 min read",
      featured: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">✨ NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & Innovations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our cutting-edge content covering AItechnology trendsand business transformation strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newContent.map((itemindex) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-t-xl">
                  FEATURED
                </div>
              )}
              <div className="p-6">
                <div className="text-4xl mb-4">{item.image}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">{item.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <Link
                  href={`/blog/${item.title.toLowerCase().replace(/\s+/g'-')}`}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;