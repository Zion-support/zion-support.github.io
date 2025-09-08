import React from 'react';
import Head from 'next/head';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group - AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, automation, and technology innovation from Zion Tech Group." />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest insights on AI, automation, and technology innovation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Blog
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, updates, and thought leadership on the future of autonomous technology
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                Home
              </a>
              <span className="mx-3 text-white/40">|</span>
              <a href="/resources" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                Resources
              </a>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Zion Tech Group Blog
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Insights, trends, and innovations in AI automation and autonomous technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </section>
            
            {/* Blog Posts Grid */}
            <section>
              <h2 className="text-2xl font-bold mb-8 text-white">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.filter(post => !post.featured).map(post => (
                  <article key={post.id} className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-xs rounded-full border border-fuchsia-400/30">
                        {post.category}
                      </span>
                      <span className="text-white/60 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      <a href={`/blog/${post.id}`}>{post.title}</a>
                    </h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-xs">{post.date}</span>
                      <a 
                        href={`/blog/${post.id}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      >
                        Read More →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
            
            {/* Newsletter Signup */}
            <section className="mt-20 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Stay Updated</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Get the latest insights on AI automation, autonomous systems, and technology innovation 
                  delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
                  />
                  <button className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
                <p className="text-white/60 text-sm mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>
            </section>
            
            {/* Related Resources */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-white">Explore More</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="/about" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🏢</span>
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
            </section>
          </div>
        </main>
      </div>
    </>
  );
}