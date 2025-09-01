import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Autonomous AI Systems",
      excerpt: "Exploring how self-managing AI agents are revolutionizing technology infrastructure and business operations.",
      category: "AI Innovation",
      date: "2025-01-17",
      readTime: "5 min read",
      image: "🤖",
      author: "Dr. Sarah Chen",
      featured: true
    },
    {
      id: 'digital-transformation-2025',
      title: 'Digital Transformation Trends & Strategies for 2025',
      excerpt: 'Discover the key digital transformation trends and strategies that will shape business success in 2025 and beyond.',
      date: 'January 17, 2025',
      readTime: '8 min read',
      category: 'Digital Transformation',
      featured: false
    },
    {
      id: 'cloud-automation-best-practices',
      title: 'Cloud Automation Best Practices: A Complete Guide',
      excerpt: 'Master cloud automation with our comprehensive guide covering best practices, tools, and strategies for scalable, reliable cloud infrastructure.',
      date: 'January 17, 2025',
      readTime: '10 min read',
      category: 'Cloud & Infrastructure',
      featured: false
    },
    {
      id: 'autonomous-content-generation',
      title: 'Revolutionizing Content Creation with Autonomous AI Systems',
      excerpt: 'How Zion Tech Group is transforming content generation through intelligent automation and machine learning.',
      date: 'January 15, 2025',
      readTime: '6 min read',
      category: 'Content & AI'
    }
  ];

  const categories = ['All', 'AI & Automation', 'Digital Transformation', 'Cloud & Infrastructure', 'Content & AI'];

  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group - AI & Technology Insights</title>
        <meta name="description" content="Explore insights on autonomous AI systems, cloud automation, and the future of technology from Zion Tech Group." />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="AI & Technology Insights" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Our Blog
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, trends, and expert perspectives on AI, automation, and the future of technology
            </p>
          </section>

          {/* Featured Posts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {blogPosts.filter(post => post.featured).slice(0, 4).map((post) => (
                <article key={post.id} className="bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-cyan-500/15 transition-all duration-300 hover:scale-105 border border-cyan-400/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-300 text-sm rounded-full border border-cyan-400/30">
                      {post.category}
                    </span>
                    <span className="text-white/60 text-sm">{post.readTime}</span>
                  </div>
                  <div className="text-6xl mb-4 text-center">{post.image}</div>
                  <h3 className="text-2xl font-bold mb-3 text-white hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/80 mb-4 text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-300 text-sm">By {post.author}</span>
                    <span className="text-white/60 text-sm">{post.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* All Posts */}
          <section className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8 text-fuchsia-400">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="text-6xl mb-4 text-center">{post.image}</div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-300 text-sm rounded-full border border-cyan-400/30">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-300 text-sm">By {post.author}</span>
                    <span className="text-white/60 text-sm">{post.readTime}</span>
                  </div>
                  <a href={post.id === 1 ? "/blog/autonomous-ai-systems-2025" : post.id === 3 ? "/blog/cloud-native-architecture-2025" : "/blog"} className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 text-center block">
                    Read More
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group">
                  <div className="p-6">
                    <div className="text-4xl mb-4">{post.image}</div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-white/50">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/50">{post.date}</span>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:underline"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">About Us</h3>
                  <p className="text-white/80 text-sm">Learn about our mission and vision for autonomous technology</p>
                </a>
                
                <a href="/contact" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Get in Touch</h3>
                  <p className="text-white/80 text-sm">Have questions? We'd love to hear from you</p>
                </a>
                
                <a href="/case-studies" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Case Studies</h3>
                  <p className="text-white/80 text-sm">See real-world results from our autonomous systems</p>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}