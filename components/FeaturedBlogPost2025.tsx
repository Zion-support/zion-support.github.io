import React from 'react';
import { CalendarIcon, ClockIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const FeaturedBlogPost2025 = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI Content Creation: 2025 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is revolutionizing content creation and what trends will dominate the industry in 2025.",
      author: "Sarah Johnson",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "How to Scale Your Content Marketing with AI Automation",
      excerpt: "Learn practical strategies for using AI to automate your content marketing while maintaining quality and personalization.",
      author: "Michael Chen",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "Content Marketing",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "The Complete Guide to AI-Powered SEO Content Optimization",
      excerpt: "Master the art of creating SEO-optimized content using AI tools and techniques that actually work.",
      author: "Emily Rodriguez",
      date: "January 10, 2025",
      readTime: "10 min read",
      category: "SEO & Optimization",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Building a Content Empire: From Zero to 1M Followers",
      excerpt: "The step-by-step blueprint for building a massive following through strategic content creation and distribution.",
      author: "David Park",
      date: "January 8, 2025",
      readTime: "12 min read",
      category: "Growth Strategy",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold mb-6">
            <CalendarIcon className="w-4 h-4 mr-2" />
            FEATURED BLOG POSTS 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Latest Insights & Trends
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              in Content Creation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with our expert insights on AI-powered content creation, marketing strategies, and industry trends.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Image */}
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold rounded-full">
                      FEATURED
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-lg mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{post.author}</div>
                        <div className="text-gray-500 text-sm">{post.date}</div>
                      </div>
                    </div>

                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center">
                      Read More
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Image */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-gray-700 text-sm font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center text-gray-500 text-sm">
                    <UserIcon className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center">
                    Read More
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
            View All Blog Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogPost2025;