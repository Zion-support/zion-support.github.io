import React from 'react'"
import { Helmet } from 'react-helmet-async'"
import { Link } from 'react-router-dom'"
import { 
  CalendarIcon,
  UserIcon,
  ArrowRightIcon,
  TagIcon
} from '@heroicons/react/24/outline'"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.",
      author: "Kleber",
      date: "2024-01-15",
      category: "AI & Machine Learning",
      readTime: "5 min read",
      image: "/images/blog/ai-trends-2024.jpg"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small and Medium Businesses",
      excerpt: "Essential cybersecurity strategies to protect your business from evolving digital threats and data breaches.",
      author: "Security Team",
      date: "2024-01-10",
      category: "Cybersecurity",
      readTime: "7 min read",
      image: "/images/blog/cybersecurity-smb.jpg"
    },
    {
      id: 3,
      title: "Cloud Migration: A Step-by-Step Guide for Enterprises",
      excerpt: "Learn how to successfully migrate your infrastructure to the cloud while minimizing risks and maximizing benefits.",
      author: "Cloud Team",
      date: "2024-01-05",
      category: "Cloud Computing",
      readTime: "10 min read",
      image: "/images/blog/cloud-migration.jpg"
    },
    {
      id: 4,
      title: "Digital Transformation: Where to Start and How to Succeed",
      excerpt: "A comprehensive guide to digital transformation, from strategy development to successful implementation.",
      author: "Strategy Team",
      date: "2023-12-28",
      category: "Digital Transformation",
      readTime: "8 min read",
      image: "/images/blog/digital-transformation.jpg"
    },
    {
      id: 5,
      title: "Building Micro SaaS Applications: Lessons from Real Projects",
      excerpt: "Insights and best practices from our experience building successful micro SaaS solutions for various industries.",
      author: "Development Team",
      date: "2023-12-20",
      category: "Micro SaaS",
      readTime: "6 min read",
      image: "/images/blog/micro-saas.jpg"
    },
    {
      id: 6,
      title: "5G Technology: Opportunities and Challenges for Businesses",
      excerpt: "Understanding how 5G technology can transform your business operations and what challenges to expect.",
      author: "5G Team",
      date: "2023-12-15",
      category: "5G Solutions",
      readTime: "9 min read",
      image: "/images/blog/5g-business.jpg"
    }
  ]"

  const categories = [
    "All Posts",
    "AI & Machine Learning",
    "Cybersecurity",
    "Cloud Computing",
    "Digital Transformation",
    "Micro SaaS",
    "5G Solutions"
  ]"

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and digital transformation from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, cybersecurity insights, cloud computing, digital transformation, technology trends" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Insights, trends, and expert knowledge from the world of AI and technology
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest articles on artificial intelligence, 
              cybersecurity, cloud computing, and digital transformation strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-900 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-slate-600 text-gray-300 hover:border-purple-500 hover:text-purple-300 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <UserIcon className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TagIcon className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all"
                  >
                    Read More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Subscribe to our newsletter and never miss the latest insights on AI and technology trends
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )"
}