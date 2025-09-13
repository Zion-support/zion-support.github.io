import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon, RocketLaunchIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const NewContentShowcase2025 = () => {
  const featuredContent = [
    {
      id: 1,
      title: "AI-Powered Business Automation: Complete Guide 2025",
      description: "Discover how to implement AI automation across your entire business ecosystem with our comprehensive guide.",
      category: "AI Automation",
      readTime: "12 min read",
      image: "/api/placeholder/400/250",
      featured: true,
      tags: ["AI", "Automation", "Business", "2025"]
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs: What's Next",
      description: "Explore the latest quantum computing innovations and their potential impact on various industries.",
      category: "Quantum Computing",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      featured: false,
      tags: ["Quantum", "Computing", "Innovation", "Future"]
    },
    {
      id: 3,
      title: "Neural Interface Technology: The Future of Human-Computer Interaction",
      description: "Learn about cutting-edge neural interface technologies and their applications in healthcare and beyond.",
      category: "Neural Interfaces",
      readTime: "15 min read",
      image: "/api/placeholder/400/250",
      featured: false,
      tags: ["Neural", "Interface", "Technology", "Healthcare"]
    },
    {
      id: 4,
      title: "Cloud Infrastructure Optimization: Best Practices 2025",
      description: "Master cloud infrastructure optimization with proven strategies and real-world case studies.",
      category: "Cloud Computing",
      readTime: "10 min read",
      image: "/api/placeholder/400/250",
      featured: false,
      tags: ["Cloud", "Infrastructure", "Optimization", "Best Practices"]
    },
    {
      id: 5,
      title: "Micro SaaS Success Stories: From Idea to $1M ARR",
      description: "Inspiring stories of entrepreneurs who built successful micro SaaS businesses from scratch.",
      category: "Micro SaaS",
      readTime: "14 min read",
      image: "/api/placeholder/400/250",
      featured: false,
      tags: ["Micro SaaS", "Success Stories", "Entrepreneurship", "Revenue"]
    },
    {
      id: 6,
      title: "AI Ethics and Responsible Development: A Comprehensive Framework",
      description: "Navigate the complex landscape of AI ethics with our comprehensive framework for responsible AI development.",
      category: "AI Ethics",
      readTime: "18 min read",
      image: "/api/placeholder/400/250",
      featured: false,
      tags: ["AI Ethics", "Responsible AI", "Framework", "Development"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <SparklesIcon className="w-4 h-4" />
            New Content 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights & Innovations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our cutting-edge content covering AI, quantum computing, neural interfaces, and more.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content) => (
            <div
              key={content.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                content.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {content.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {content.category}
                  </span>
                  <span className="text-gray-500 text-sm">{content.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/content/${content.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group-hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <RocketLaunchIcon className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Explore All Content</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Discover hundreds of articles, case studies, and insights across all technology domains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/content"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Browse All Content
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all"
              >
                <LightBulbIcon className="w-5 h-5" />
                Get Updates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;