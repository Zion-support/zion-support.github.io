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
      image: "🤖"
    },
    {
      id: 2,
      title: "Building Self-Healing Applications",
      excerpt: "Learn how to create applications that automatically detect and resolve issues without human intervention.",
      category: "Development",
      date: "2025-01-16",
      readTime: "7 min read",
      image: "🔧"
    },
    {
      id: 3,
      title: "Cloud Automation: From Manual to Autonomous",
      excerpt: "Discover the journey from traditional cloud management to fully automated, intelligent infrastructure.",
      category: "Cloud Computing",
      date: "2025-01-15",
      readTime: "6 min read",
      image: "☁️"
    },
    {
      id: 4,
      title: "AI-Powered Content Generation at Scale",
      excerpt: "How Zion Tech Group generates thousands of pages of content using autonomous AI systems.",
      category: "Content AI",
      date: "2025-01-14",
      readTime: "4 min read",
      image: "📝"
    },
    {
      id: 5,
      title: "The Economics of Autonomous Technology",
      excerpt: "Understanding the cost benefits and ROI of implementing autonomous systems in your business.",
      category: "Business",
      date: "2025-01-13",
      readTime: "8 min read",
      image: "💰"
    },
    {
      id: 6,
      title: "Security in the Age of Autonomous Systems",
      excerpt: "Ensuring your autonomous systems remain secure while operating independently.",
      category: "Security",
      date: "2025-01-12",
      readTime: "6 min read",
      image: "🔒"
    }
  ];

  const categories = ["All", "AI Innovation", "Development", "Cloud Computing", "Content AI", "Business", "Security"];

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
              AI & Technology Blog
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, tutorials, and thought leadership on autonomous AI systems, cloud automation, and the future of technology
            </p>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    category === "All"
                      ? "bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white"
                      : "bg-white/10 hover:bg-white/20 text-white/80 hover:text-white"
                  }`}
                >
                  {category}
                </button>
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