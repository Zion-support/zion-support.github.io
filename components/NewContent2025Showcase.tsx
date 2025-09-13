import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon, RocketLaunchIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const NewContent2025Showcase = () => {
  const newContent = [
    {
      id: 1,
      title: "AI-Powered Business Automation Revolution",
      description: "Discover how our latest AI solutions are transforming business operations with unprecedented efficiency and intelligence.",
      category: "AI Automation",
      readTime: "8 min read",
      featured: true,
      image: "/api/placeholder/600/400",
      href: "/ai-automation-solutions-2025"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs in 2025",
      description: "Explore the latest quantum computing innovations that are reshaping the future of computational power.",
      category: "Quantum Computing",
      readTime: "12 min read",
      featured: true,
      image: "/api/placeholder/600/400",
      href: "/quantum-computing-2025"
    },
    {
      id: 3,
      title: "Neural Interface Technology: The Next Frontier",
      description: "Learn about cutting-edge neural interface developments that are bridging the gap between human and machine.",
      category: "Neural Interfaces",
      readTime: "10 min read",
      featured: false,
      image: "/api/placeholder/600/400",
      href: "/neural-interface-2025"
    },
    {
      id: 4,
      title: "Enterprise AI Transformation Success Stories",
      description: "Real-world case studies of companies that achieved 300% ROI through strategic AI implementation.",
      category: "Case Studies",
      readTime: "15 min read",
      featured: false,
      image: "/api/placeholder/600/400",
      href: "/enterprise-ai-success-2025"
    },
    {
      id: 5,
      title: "Future of Work: AI-Human Collaboration",
      description: "Understanding how AI is enhancing human capabilities rather than replacing them in the modern workplace.",
      category: "Future of Work",
      readTime: "7 min read",
      featured: false,
      image: "/api/placeholder/600/400",
      href: "/future-work-ai-2025"
    },
    {
      id: 6,
      title: "Sustainable AI: Green Technology Solutions",
      description: "How we're developing environmentally conscious AI solutions for a sustainable future.",
      category: "Sustainability",
      readTime: "9 min read",
      featured: false,
      image: "/api/placeholder/600/400",
      href: "/sustainable-ai-2025"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            <SparklesIcon className="w-4 h-4 mr-2" />
            New Content 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights & Innovations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our cutting-edge content covering the latest developments in AI, 
            quantum computing, and emerging technologies.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newContent.map((content) => (
            <div
              key={content.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                content.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {content.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-medium">
                    <RocketLaunchIcon className="w-3 h-3 mr-1" />
                    Featured
                  </span>
                </div>
              )}
              
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {content.category}
                  </span>
                  <span className="text-sm text-gray-500">{content.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <Link
                  href={content.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Read More
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <LightBulbIcon className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want More Cutting-Edge Content?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive access to the latest insights, 
            case studies, and technology breakthroughs delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/newsletter"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Subscribe Now
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/content-library"
              className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Browse All Content
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025Showcase;