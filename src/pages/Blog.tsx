
import React from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise Technology",
      excerpt: "Discover how artificial intelligence is transforming business operations and what it means for your organization.",
      category: "AI & Machine Learning",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/images/blog/ai-enterprise.jpg"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for 2024",
      excerpt: "Stay ahead of evolving threats with our comprehensive guide to cybersecurity best practices.",
      category: "Cybersecurity",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: "/images/blog/cybersecurity-2024.jpg"
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Learn the essential steps and best practices for successful cloud migration projects.",
      category: "Cloud & DevOps",
      date: "March 5, 2024",
      readTime: "8 min read",
      image: "/images/blog/cloud-migration.jpg"
    },
    {
      id: 4,
      title: "Digital Transformation: Where to Start",
      excerpt: "Begin your digital transformation journey with our step-by-step roadmap and expert insights.",
      category: "Digital Transformation",
      date: "February 28, 2024",
      readTime: "6 min read",
      image: "/images/blog/digital-transformation.jpg"
    },
    {
      id: 5,
      title: "DevOps Automation: Tools and Techniques",
      excerpt: "Explore the latest DevOps automation tools and techniques to streamline your development process.",
      category: "Cloud & DevOps",
      date: "February 20, 2024",
      readTime: "9 min read",
      image: "/images/blog/devops-automation.jpg"
    },
    {
      id: 6,
      title: "Building a Zero-Trust Security Architecture",
      excerpt: "Implement a robust zero-trust security model to protect your organization's digital assets.",
      category: "Cybersecurity",
      date: "February 15, 2024",
      readTime: "7 min read",
      image: "/images/blog/zero-trust.jpg"
    }
  ];

  const categories = [
    "All Posts",
    "AI & Machine Learning",
    "Cloud & DevOps",
    "Cybersecurity",
    "Digital Transformation",
    "IT Infrastructure"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Insights, updates, and expert perspectives on technology trends and industry best practices
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Read More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest insights and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
