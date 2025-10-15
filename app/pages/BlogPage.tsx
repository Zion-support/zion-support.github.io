import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CalendarIcon,
  UserIcon,
  ArrowRightIcon,
  TagIcon
} from '@heroicons/react/24/outline';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest trends in artificial intelligence and how they're transforming business operations across industries.",
      author: "Zion Tech Group",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small and Medium Businesses",
      excerpt: "Learn essential cybersecurity measures to protect your business from cyber threats and data breaches.",
      author: "Zion Tech Group",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Discover the best practices for migrating your business to the cloud and maximizing the benefits of cloud computing.",
      author: "Zion Tech Group",
      date: "2024-01-05",
      readTime: "8 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 4,
      title: "Micro SaaS: Building Profitable Software Solutions",
      excerpt: "Learn how to build and scale micro SaaS applications that solve specific business problems and generate recurring revenue.",
      author: "Zion Tech Group",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Micro SaaS",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 5,
      title: "5G Technology: Revolutionizing Connectivity and IoT",
      excerpt: "Explore how 5G technology is transforming industries and enabling new possibilities for connected devices and applications.",
      author: "Zion Tech Group",
      date: "2023-12-28",
      readTime: "9 min read",
      category: "5G",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 6,
      title: "Digital Transformation: A Strategic Approach",
      excerpt: "Understand the key components of successful digital transformation and how to implement them in your organization.",
      author: "Zion Tech Group",
      date: "2023-12-25",
      readTime: "10 min read",
      category: "Digital Transformation",
      image: "/api/placeholder/600/400",
      featured: false
    }
  ];

  const categories = ["All", "AI", "Cybersecurity", "Cloud Computing", "Micro SaaS", "5G", "Digital Transformation"];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends from Zion Tech Group." />
        <meta name="keywords" content="tech blog, AI insights, cybersecurity, cloud computing, technology trends, micro SaaS" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, cybersecurity, cloud computing, 
              and technology trends from our expert team.
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    category === "All" 
                      ? "bg-purple-600 text-white" 
                      : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-slate-700 flex items-center justify-center">
                      <span className="text-gray-400">Featured Image</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{post.title}</h3>
                    <p className="text-gray-300 mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <UserIcon className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-2"
                      >
                        Read More <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:bg-slate-700 transition-colors">
                  <div className="h-48 bg-slate-700 flex items-center justify-center">
                    <span className="text-gray-400">Article Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-2"
                      >
                        Read More <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter and get the latest tech insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
