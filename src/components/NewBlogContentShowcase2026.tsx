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
      icon: '🚀',
      gradient: 'from-blue-500 to-purple-500',
      badge: 'FEATURED',
      tags: ['AI', 'Revolution', 'Enterprise', 'Guide']
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs: The Future of AI Processing',
      slug: 'quantum-computing-breakthroughs-ai-processing',
      excerpt: 'Explore the latest quantum computing breakthroughs that are revolutionizing AI processing. Discover how quantum-enhanced neural networks achieve 10,000x processing speed improvements.',
      category: 'Quantum Computing',
      date: '2026-01-19',
      readTime: '18 min',
      author: 'Prof. Michael Rodriguez',
      views: '98K',
      rating: 4.8,
      trending: true,
      featured: false,
      icon: '🚀',
      gradient: 'from-cyan-500 to-blue-500',
      badge: 'TRENDING',
      tags: ['Quantum', 'Computing', 'AI', 'Breakthrough']
    },
    {
      id: 3,
      title: 'Enterprise AI Implementation: A Step-by-Step Success Guide',
      slug: 'enterprise-ai-implementation-success-guide',
      excerpt: 'Learn how to successfully implement AI in your enterprise. This comprehensive guide covers strategy, planning, execution, and optimization for maximum ROI.',
      category: 'Enterprise AI',
      date: '2026-01-18',
      readTime: '22 min',
      author: 'Jennifer Liu',
      views: '87K',
      rating: 4.9,
      trending: true,
      featured: true,
      icon: '🚀',
      gradient: 'from-green-500 to-emerald-500',
      badge: 'POPULAR',
      tags: ['Enterprise', 'Implementation', 'AI', 'Success']
    },
    {
      id: 4,
      title: 'Self-Evolving AI Systems: The Next Frontier of Artificial Intelligence',
      slug: 'self-evolving-ai-systems-next-frontier',
      excerpt: 'Discover how self-evolving AI systems are reshaping the landscape of artificial intelligence. Learn about autonomous learning, self-modification, and continuous improvement.',
      category: 'AI Innovation',
      date: '2026-01-17',
      readTime: '20 min',
      author: 'Dr. Alex Thompson',
      views: '76K',
      rating: 4.7,
      trending: false,
      featured: false,
      icon: '🚀',
      gradient: 'from-purple-500 to-pink-500',
      badge: 'INNOVATION',
      tags: ['Self-Evolving', 'AI', 'Innovation', 'Future']
    },
    {
      id: 5,
      title: 'Predictive Analytics Revolution: Forecasting the Future with 99.9% Accuracy',
      slug: 'predictive-analytics-revolution-forecasting-future',
      excerpt: 'Explore the revolutionary advances in predictive analytics. Learn how AI-powered forecasting achieves 99.9% accuracy in predicting business trends and market dynamics.',
      category: 'Predictive Analytics',
      date: '2026-01-16',
      readTime: '16 min',
      author: 'Dr. Maria Santos',
      views: '92K',
      rating: 4.8,
      trending: true,
      featured: false,
      icon: '🚀',
      gradient: 'from-orange-500 to-red-500',
      badge: 'ANALYTICS',
      tags: ['Predictive', 'Analytics', 'Forecasting', 'AI']
    },
    {
      id: 6,
      title: 'AI Ethics and Governance: Building Responsible AI Systems',
      slug: 'ai-ethics-governance-responsible-ai-systems',
      excerpt: 'Learn about the critical importance of AI ethics and governance in building responsible AI systems. Discover frameworks for ethical AI deployment and compliance.',
      category: 'AI Ethics',
      date: '2026-01-15',
      readTime: '19 min',
      author: 'Prof. David Kim',
      views: '68K',
      rating: 4.9,
      trending: false,
      featured: true,
      icon: '🚀',
      gradient: 'from-indigo-500 to-purple-500',
      badge: 'ETHICS',
      tags: ['AI Ethics', 'Governance', 'Responsible AI', 'Compliance']
    }
  ];

  const blogStats = [
    { value: '500+', label: 'Published Articles', icon: '🚀' },
    { value: '2M+', label: 'Monthly Readers', icon: '🚀' },
    { value: '4.8', label: 'Average Rating', icon: '🚀' },
    { value: '150+', label: 'Expert Authors', icon: '🚀' }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-fade-in">

            <span className="text-blue-400 font-bold text-sm tracking-wider uppercase">
              📚 NEW BLOG CONTENT • January 2026
            </span>

          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
            New Blog Content Showcase 2026
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover our latest insights, breakthrough research, and expert analysis on the most important topics in AI and technology. 
            Stay ahead of the curve with content from industry-leading experts.
          </p>

          {/* Blog Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {blogStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Blog Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (

            <div
key={post.id}

              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              <div className="relative p-8">
                {/* Badge & Featured */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-2 text-blue-400">
                    {post.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    {post.trending && (
                      <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold shadow-lg">

                      </div>
                    )}
                    <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${post.gradient} text-white text-xs font-bold border border-white/30`}>
                      {post.badge}
                    </div>
                  </div>
                </div>

                {/* Category */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 text-xs font-semibold border border-blue-500/30">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 rounded bg-white/10 text-gray-300 text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-white/10">
                  <span className="flex items-center gap-2">

                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4 text-blue-400" />
                    {post.views}
                  </span>
                </div>

                {/* Author & Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-gray-400 text-sm">
                    By {post.author}
                  </div>
                  <div className="flex items-center gap-1">

                    <span className="text-yellow-400 font-bold text-sm">{post.rating}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={`/blog/${post.slug}`}
                  className={`group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r ${post.gradient} hover:opacity-90 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1`}
                >
                  <span>Read Article</span>

                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 md:p-12 border border-blue-500/20 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 mb-6">

              <span className="text-yellow-400 font-bold text-sm tracking-wider uppercase">
                PREMIUM CONTENT
              </span>
            </div>
            
            <h3 className="text-4xl font-extrabold text-white mb-4">
              Get Exclusive Blog Updates
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get early access to new articles, exclusive insights, 
              and premium content from industry experts. Join 100K+ subscribers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all duration-300"
/>

<button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2">

              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              No spam, unsubscribe anytime. Get premium content delivered weekly.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
            <div className="bg-slate-900 rounded-xl px-12 py-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Explore Our Complete Blog Library
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Discover 500+ articles covering AI, machine learning, quantum computing, and enterprise technology. 
                Find insights that matter to your business and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/blog"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2"
                >

                  <span>Browse All Articles</span>
                </a>
                <a
                  href="/contact"
                  className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Request Custom Content</span>

                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBlogContentShowcase2026;