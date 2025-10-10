'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CalendarIcon, 
  ClockIcon,
  UserIcon,
  ArrowRightIcon,
  TagIcon
} from '@heroicons/react/24/outline';

const BlogPage: React.FC = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "AI 2026: The Future of Autonomous Business Intelligence",
      excerpt: "Explore the revolutionary breakthroughs in AI that will transform how businesses operate in 2026 and beyond.",
      author: "Kleber Santos",
      date: "2024-12-15",
      readTime: "8 min read",
      category: "AI Innovation",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "Micro SAAS: The Future of Business Software",
      excerpt: "Discover how micro SAAS solutions are revolutionizing the way businesses operate and scale.",
      author: "Sarah Johnson",
      date: "2024-12-10",
      readTime: "6 min read",
      category: "Micro SAAS",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 3,
      title: "Enterprise AI Transformation: A Complete Guide",
      excerpt: "Learn how to successfully implement AI solutions in your enterprise organization.",
      author: "Michael Chen",
      date: "2024-12-05",
      readTime: "12 min read",
      category: "Enterprise",
      image: "/api/placeholder/600/400",
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Cybersecurity in the AI Era: Best Practices",
      excerpt: "Essential cybersecurity strategies for businesses adopting AI technologies.",
      author: "Emily Rodriguez",
      date: "2024-12-01",
      readTime: "5 min read",
      category: "Cybersecurity"
    },
    {
      id: 5,
      title: "Cloud Migration: A Step-by-Step Guide",
      excerpt: "Complete guide to migrating your business to the cloud successfully.",
      author: "David Kim",
      date: "2024-11-28",
      readTime: "7 min read",
      category: "Cloud Computing"
    },
    {
      id: 6,
      title: "Data Analytics: Turning Data into Insights",
      excerpt: "How to leverage data analytics to drive business growth and decision-making.",
      author: "Lisa Wang",
      date: "2024-11-25",
      readTime: "6 min read",
      category: "Data Analytics"
    },
    {
      id: 7,
      title: "AI-Powered Customer Support: Implementation Guide",
      excerpt: "Transform your customer support with AI-powered chatbots and automation.",
      author: "Alex Thompson",
      date: "2024-11-20",
      readTime: "9 min read",
      category: "Customer Support"
    },
    {
      id: 8,
      title: "DevOps Best Practices for Modern Businesses",
      excerpt: "Essential DevOps practices to improve your development and deployment processes.",
      author: "Maria Garcia",
      date: "2024-11-15",
      readTime: "8 min read",
      category: "DevOps"
    },
    {
      id: 9,
      title: "The Future of Work: AI and Human Collaboration",
      excerpt: "Exploring how AI will augment human capabilities in the workplace.",
      author: "James Wilson",
      date: "2024-11-10",
      readTime: "10 min read",
      category: "Future of Work"
    }
  ];

  const categories = [
    { name: "AI Innovation", count: 15 },
    { name: "Micro SAAS", count: 12 },
    { name: "Enterprise", count: 18 },
    { name: "Cybersecurity", count: 8 },
    { name: "Cloud Computing", count: 10 },
    { name: "Data Analytics", count: 14 },
    { name: "Customer Support", count: 6 },
    { name: "DevOps", count: 9 },
    { name: "Future of Work", count: 7 }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, micro SAAS, IT solutions, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, micro SAAS, IT solutions, AI trends, business technology" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Stay updated with the latest insights on AI, micro SAAS, IT solutions, and technology trends." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, micro SAAS, IT solutions, 
              and the latest technology trends shaping the future of business.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and insightful articles on AI, technology, and business innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <div className="w-full h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Featured Image</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="ml-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Read More
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts & Sidebar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Recent Posts */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
              
              <div className="space-y-8">
                {recentPosts.map((post, index) => (
                  <article key={post.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-semibold">
                          {post.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      <Link 
                        to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="hover:text-blue-600 transition-colors duration-200"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <UserIcon className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      
                      <Link
                        to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Read More
                        <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md">
                    1
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Categories */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <Link
                        key={index}
                        to={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        <span className="flex items-center">
                          <TagIcon className="h-4 w-4 mr-2" />
                          {category.name}
                        </span>
                        <span className="text-sm text-gray-400">({category.count})</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Updated</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-semibold transition-colors duration-200">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['AI', 'Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Data Analytics', 'DevOps', 'Micro SAAS', 'Enterprise'].map((tag, index) => (
                      <Link
                        key={index}
                        to={`/blog/tag/${tag.toLowerCase()}`}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't just read about the future—be part of it. Let us help you implement 
            these cutting-edge solutions in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200"
            >
              Get Started Today
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-colors duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default BlogPage;