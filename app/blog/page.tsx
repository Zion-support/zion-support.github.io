import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest trends in artificial intelligence and how they're transforming businesses across industries.",
      author: "Alex Johnson",
      date: "December 15, 2024",
      category: "AI & Machine Learning",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      slug: "future-ai-business-2024"
    },
    {
      title: "5G Technology: Revolutionizing Connectivity and IoT",
      excerpt: "Discover how 5G networks are enabling new possibilities for IoT devices and smart city solutions.",
      author: "Sarah Chen",
      date: "December 10, 2024",
      category: "5G & Connectivity",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      slug: "5g-technology-iot-revolution"
    },
    {
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Learn essential cybersecurity strategies to protect your business from evolving threats and attacks.",
      author: "Emily Watson",
      date: "December 5, 2024",
      category: "Cybersecurity",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      slug: "cybersecurity-best-practices-2024"
    },
    {
      title: "Cloud Migration: A Complete Guide for Enterprise",
      excerpt: "Everything you need to know about migrating your infrastructure to the cloud successfully.",
      author: "Michael Rodriguez",
      date: "November 28, 2024",
      category: "Cloud Computing",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      slug: "cloud-migration-enterprise-guide"
    },
    {
      title: "Microservices Architecture: Building Scalable Applications",
      excerpt: "Understanding microservices and how they can help you build more maintainable and scalable applications.",
      author: "David Kim",
      date: "November 20, 2024",
      category: "Software Development",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      slug: "microservices-architecture-scalable-apps"
    },
    {
      title: "Data Analytics: Turning Information into Insights",
      excerpt: "How to leverage data analytics to make better business decisions and drive growth.",
      author: "Lisa Thompson",
      date: "November 15, 2024",
      category: "Data & Analytics",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      slug: "data-analytics-business-insights"
    }
  ];

  const categories = [
    "All Posts",
    "AI & Machine Learning",
    "5G & Connectivity",
    "Cybersecurity",
    "Cloud Computing",
    "Software Development",
    "Data & Analytics"
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on AI, technology trends, cybersecurity, and digital transformation from Zion Tech Group experts."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, technology trends, cybersecurity, 
              and digital transformation from our team of experts.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? "bg-cyan-500 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {post.title.split(' ').slice(0, 2).join(' ')}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">•</span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and never miss the latest insights on technology and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}