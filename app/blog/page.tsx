<<<<<<< HEAD
"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
=======
import React from "react";
import { Helmet } from "react-helmet-async";
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
      excerpt:
        "Explore the latest AI trends shaping enterprise technology and how businesses can leverage these innovations for competitive advantage.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable Cloud Infrastructure: Best Practices",
      excerpt:
        "Learn how to design and implement cloud infrastructure that can scale with your business growth and changing needs.",
      author: "Michael Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Cloud Computing",
      featured: false,
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of AI: Protecting Your Digital Assets",
      excerpt:
        "Discover how AI is both enhancing cybersecurity capabilities and creating new challenges that organizations must address.",
      author: "Alex Thompson",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Cybersecurity",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "AI & Machine Learning",
    "Cloud Computing",
    "Cybersecurity",
    "Development",
    "Business",
  ];
  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Blog - Zion Tech Group | AI & IT Solutions</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends from our expert team."
        />
        <meta
          name="keywords"
          content="blog, AI insights, technology trends, cloud computing, cybersecurity, enterprise solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, cloud computing,
              cybersecurity, and technology trends from our expert team.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    index === 0
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
=======
        <title>Blog - Zion Tech Group</title>
        <meta
          name="description"
          content="Latest insights and updates on AI and IT technology from Zion Tech Group."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends and insights in AI and IT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                The Future of AI in Business
              </h3>
              <p className="text-gray-600 mb-4">
                Exploring how artificial intelligence is transforming modern
                business operations.
              </p>
              <div className="text-sm text-blue-600">Read more →</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Cloud Migration Best Practices
              </h3>
              <p className="text-gray-600 mb-4">
                Essential tips for successfully migrating your infrastructure to
                the cloud.
              </p>
              <div className="text-sm text-blue-600">Read more →</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Digital Transformation Guide
              </h3>
              <p className="text-gray-600 mb-4">
                A comprehensive guide to digital transformation for modern
                enterprises.
              </p>
              <div className="text-sm text-blue-600">Read more →</div>
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 ${
                    post.featured ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-600/20 flex items-center justify-center">
                    <div className="text-6xl text-purple-400">📝</div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                          Featured
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {" "}
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                      {" "}
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Subscribe
              </button>
            </div>{" "}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
