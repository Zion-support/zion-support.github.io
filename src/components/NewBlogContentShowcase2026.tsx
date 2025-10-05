import React from 'react';

const NewBlogContentShowcase2026: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Complete Guide to AI Revolution 2026: From Concept to Implementation',
      slug: 'complete-guide-ai-revolution-2026',
      excerpt: 'Comprehensive guide covering all aspects of the AI revolution in 2026. Learn about meta-cognitive AI, quantum-neural networks, and autonomous operations that are transforming enterprises worldwide.',
      category: 'AI Revolution',
      date: '2026-01-20',
      readTime: '25 min',
      author: 'Dr. Sarah Chen',
      views: '125K',
      rating: 4.9,
      trending: true,
      featured: true,
      icon: '🧠',
      gradient: 'from-blue-500 to-purple-500',
      badge: 'FEATURED',
      tags: ['AI', 'Revolution', 'Enterprise', 'Guide']
    },
    {
      id: 2,
      title: 'Quantum Computing Meets AI: The Future of Enterprise Processing',
      slug: 'quantum-computing-ai-enterprise-2026',
      excerpt: 'Explore how quantum computing is revolutionizing AI processing with 10,000x speed improvements and unprecedented accuracy in enterprise applications.',
      category: 'Quantum AI',
      date: '2026-01-18',
      readTime: '18 min',
      author: 'Prof. Michael Rodriguez',
      views: '98K',
      rating: 4.8,
      trending: true,
      featured: false,
      icon: '⚛️',
      gradient: 'from-cyan-500 to-blue-500',
      badge: 'TRENDING',
      tags: ['Quantum', 'AI', 'Computing', 'Enterprise']
    },
    {
      id: 3,
      title: 'Autonomous AI Systems: Self-Managing Enterprise Solutions',
      slug: 'autonomous-ai-systems-enterprise-2026',
      excerpt: 'Discover how autonomous AI systems are achieving 99.99% uptime and self-healing capabilities, revolutionizing enterprise operations.',
      category: 'Autonomous AI',
      date: '2026-01-15',
      readTime: '22 min',
      author: 'Dr. Emily Watson',
      views: '87K',
      rating: 4.7,
      trending: false,
      featured: false,
      icon: '🤖',
      gradient: 'from-green-500 to-emerald-500',
      badge: 'NEW',
      tags: ['Autonomous', 'AI', 'Systems', 'Enterprise']
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 rounded-full mb-6">
            <span className="text-yellow-300 font-bold text-sm">📚 NEW BLOG CONTENT 2026</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            New Blog Content Showcase
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto">
            Discover the latest insights, breakthrough technologies, and revolutionary implementations in AI and enterprise solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${post.gradient} rounded-xl flex items-center justify-center text-2xl`}>
                  {post.icon}
                </div>
                <div className="text-right">
                  <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                    {post.badge}
                  </span>
                  {post.trending && (
                    <div className="text-sm text-yellow-300 mt-1">🔥 TRENDING</div>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-blue-100 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{post.views}</div>
                  <div className="text-sm text-blue-200">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400">{post.rating}★</div>
                  <div className="text-sm text-blue-200">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">{post.readTime}</div>
                  <div className="text-sm text-blue-200">Read Time</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-blue-200">
                  <div>By {post.author}</div>
                  <div>{new Date(post.date).toLocaleDateString()}</div>
                </div>
                <div className="text-sm text-blue-300">
                  {post.category}
                </div>
              </div>

              <a
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors group-hover:bg-white/30"
              >
                Read Full Article
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/blog"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
          >
            Explore All Blog Content
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewBlogContentShowcase2026;