import React from 'react';

const LatestBlogContent2026: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "AI 2026: The Autonomous Enterprise Revolution",
      excerpt: "Discover how autonomous AI systems are transforming enterprise operations, from decision-making to process optimization.",
      category: "AI & Automation",
      date: "January 25, 2026",
      readTime: "12 min read",
      image: "🤖",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs: What's Next in 2026",
      excerpt: "Exploring the latest quantum computing advancements and their practical applications in business and research.",
      category: "Quantum Computing",
      date: "January 24, 2026",
      readTime: "8 min read",
      image: "⚡",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Technology: The Future of Human-AI Interaction",
      excerpt: "How brain-computer interfaces are revolutionizing the way we interact with AI systems and digital environments.",
      category: "Emerging Tech",
      date: "January 23, 2026",
      readTime: "10 min read",
      image: "🧠",
      featured: false
    },
    {
      id: 4,
      title: "Synthetic Intelligence: Beyond Traditional AI",
      excerpt: "Understanding the next generation of AI that combines multiple intelligence types for unprecedented capabilities.",
      category: "AI Research",
      date: "January 22, 2026",
      readTime: "15 min read",
      image: "🌟",
      featured: false
    },
    {
      id: 5,
      title: "Sustainable AI: Building Environmentally Conscious Systems",
      excerpt: "Creating AI systems that minimize environmental impact while maximizing performance and efficiency.",
      category: "Sustainability",
      date: "January 21, 2026",
      readTime: "9 min read",
      image: "🌱",
      featured: false
    },
    {
      id: 6,
      title: "Autonomous Vehicles: The Road to Level 5 Autonomy",
      excerpt: "Latest developments in autonomous vehicle technology and the challenges of achieving full autonomy.",
      category: "Transportation",
      date: "January 20, 2026",
      readTime: "11 min read",
      image: "🚗",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">📰 LATEST BLOG CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technology Insights & Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with expert analysis, breakthrough insights, and practical guides from industry leaders.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {blogPosts.filter(post => post.featured).map((post) => (
            <article key={post.id} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-6xl">{post.image}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <a 
                      href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                      className="text-purple-600 font-semibold hover:text-purple-700"
                    >
                      Read Article →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* All Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
              <div className="text-4xl mb-4">{post.image}</div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{post.date}</span>
                <a 
                  href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                  className="text-purple-600 font-semibold hover:text-purple-700 text-sm"
                >
                  Read →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Get the latest technology insights, breakthrough announcements, and expert analysis delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 10,000+ technology professionals
          </p>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogContent2026;