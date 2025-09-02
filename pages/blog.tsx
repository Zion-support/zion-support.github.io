import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
import Link from 'next/link';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2025",
      excerpt: "Explore how artificial intelligence is transforming business operations and what to expect in the coming year.",
      author: "Zion Tech Team",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "/images/blog/ai-future.jpg",
      slug: "future-ai-business-2025"
    },
    {
      id: 2,
      title: "Cloud Migration Best Practices: A Complete Guide",
      excerpt: "Learn the essential steps and strategies for successful cloud migration in enterprise environments.",
      author: "Sarah Johnson",
      date: "2025-01-12",
      readTime: "8 min read",
      category: "Cloud Computing",
      image: "/images/blog/cloud-migration.jpg",
      slug: "cloud-migration-best-practices"
    },
    {
      id: 3,
      title: "Cybersecurity in 2025: Emerging Threats and Defense Strategies",
      excerpt: "Stay ahead of cyber threats with our comprehensive analysis of emerging security challenges.",
      author: "Mike Chen",
      date: "2025-01-10",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "/images/blog/cybersecurity-2025.jpg",
      slug: "cybersecurity-emerging-threats-2025"
    },
    {
      id: 4,
      title: "Micro SaaS: Building Profitable Small-Scale Software Solutions",
      excerpt: "Discover how to build and scale micro SaaS products that generate sustainable revenue.",
      author: "Alex Rodriguez",
      date: "2025-01-08",
      readTime: "7 min read",
      category: "SaaS Development",
      image: "/images/blog/micro-saas.jpg",
      slug: "micro-saas-building-profitable-solutions"
    },
    {
      id: 5,
      title: "DevOps Automation: Streamlining Your Development Pipeline",
      excerpt: "Learn how to implement effective DevOps practices to accelerate your development cycles.",
      author: "Emily Watson",
      date: "2025-01-05",
      readTime: "9 min read",
      category: "DevOps",
      image: "/images/blog/devops-automation.jpg",
      slug: "devops-automation-streamlining-pipeline"
    },
    {
      id: 6,
      title: "Data Analytics: Turning Information into Business Intelligence",
      excerpt: "Transform your raw data into actionable insights that drive business growth and decision-making.",
      author: "David Kim",
      date: "2025-01-03",
      readTime: "6 min read",
      category: "Data Analytics",
      image: "/images/blog/data-analytics.jpg",
      slug: "data-analytics-business-intelligence"
    }
  ];

  const categories = ["All", "AI & Technology", "Cloud Computing", "Cybersecurity", "SaaS Development", "DevOps", "Data Analytics"];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & Industry News</title>
        <meta name="description" content="Stay updated with the latest technology trends, industry insights, and expert analysis from Zion Tech Group's blog." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing, cybersecurity, SaaS development, DevOps, data analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technology Insights & Industry News
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Stay ahead of the curve with expert analysis, trends, and best practices from our technology experts.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    category === "All"
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">{post.category.split(' ')[0]}</div>
                    <div className="text-sm opacity-90">{post.category}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                      <Calendar className="w-4 h-4 ml-2" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest technology insights, industry trends, and expert analysis.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;