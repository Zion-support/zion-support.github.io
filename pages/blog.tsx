import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2025",
      excerpt: "Explore the latest AI trends shaping the business landscape and how companies can leverage artificial intelligence for competitive advantage.",
      author: "Zion Tech Group Team",
      date: "2025-01-20",
      category: "AI & Technology",
      readTime: "5 min read",
      image: "/blog/ai-future-2025.jpg"
    },
    {
      id: 2,
      title: "Micro SaaS: Building Profitable Software Solutions",
      excerpt: "Learn how to build and scale micro SaaS applications that solve specific business problems while generating sustainable revenue.",
      author: "Development Team",
      date: "2025-01-15",
      category: "Micro SaaS",
      readTime: "7 min read",
      image: "/blog/micro-saas-guide.jpg"
    },
    {
      id: 3,
      title: "Cloud Migration Best Practices: A Complete Guide",
      excerpt: "Discover the essential steps and best practices for successfully migrating your infrastructure to the cloud.",
      author: "Cloud Solutions Team",
      date: "2025-01-10",
      category: "Cloud Services",
      readTime: "8 min read",
      image: "/blog/cloud-migration.jpg"
    },
    {
      id: 4,
      title: "Cybersecurity in 2025: Protecting Your Digital Assets",
      excerpt: "Stay ahead of emerging cybersecurity threats and learn how to protect your business from sophisticated attacks.",
      author: "Security Team",
      date: "2025-01-05",
      category: "Cybersecurity",
      readTime: "6 min read",
      image: "/blog/cybersecurity-2025.jpg"
    },
    {
      id: 5,
      title: "Building Scalable IT Infrastructure for Growing Businesses",
      excerpt: "Learn how to design and implement IT infrastructure that can scale with your business growth and changing needs.",
      author: "IT Solutions Team",
      date: "2024-12-28",
      category: "IT Services",
      readTime: "9 min read",
      image: "/blog/scalable-infrastructure.jpg"
    },
    {
      id: 6,
      title: "The ROI of Digital Transformation: Measuring Success",
      excerpt: "Understand how to measure and maximize the return on investment from your digital transformation initiatives.",
      author: "Strategy Team",
      date: "2024-12-20",
      category: "Digital Transformation",
      readTime: "6 min read",
      image: "/blog/digital-transformation-roi.jpg"
    }
  ];

  const categories = [
    "All Posts",
    "AI & Technology",
    "Micro SaaS",
    "Cloud Services",
    "Cybersecurity",
    "IT Services",
    "Digital Transformation"
  ];

  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and best practices in technology, AI, cloud services, and digital transformation."
      keywords="technology blog, AI insights, cloud services, cybersecurity, digital transformation, micro SaaS"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Technology Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Best Practices</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Stay ahead of the curve with expert insights on AI, cloud services, cybersecurity, and digital transformation 
              from our team of technology professionals.
            </p>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    category === "All Posts"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">{post.category}</span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
              <p className="text-xl mb-6 text-blue-100">
                Subscribe to our newsletter for the latest technology insights and industry updates.
              </p>
              <div className="max-w-md mx-auto flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="px-6 py-3 bg-white text-blue-600 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Blog;