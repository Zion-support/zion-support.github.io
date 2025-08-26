import React from 'react';
import Head from 'next/head';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog & Insights | Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights, trends, and thought leadership content from Zion Tech Group's technology experts and industry leaders." />
        <meta property="og:title" content="Blog & Insights | Zion Tech Group" />
        <meta property="og:description" content="Stay updated with the latest insights, trends, and thought leadership content from Zion Tech Group." />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Blog & Insights
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Explore cutting-edge insights, industry trends, and expert perspectives on technology, innovation, and digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
                Subscribe to Newsletter
              </a>
              <a href="/services" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                Explore Our Services
              </a>
            </div>
          </section>

          {/* Featured Articles */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* AI Revolution Article */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-cyan-400 text-sm font-medium">AI & Machine Learning</span>
                    <span className="text-white/40 text-sm">• 5 min read</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">The AI Revolution: Transforming Industries in 2024</h3>
                  <p className="text-white/70 mb-4">
                    Discover how artificial intelligence is reshaping business models and creating new opportunities across sectors.
                  </p>
                  <a href="/blog/ai-revolution-2024" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                    Read Full Article →
                  </a>
                </div>
              </div>

              {/* Quantum Computing Article */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:border-fuchsia-400/50 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 flex items-center justify-center">
                  <svg className="w-16 h-16 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-fuchsia-400 text-sm font-medium">Quantum Technology</span>
                    <span className="text-white/40 text-sm">• 7 min read</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Quantum Computing: The Next Frontier of Innovation</h3>
                  <p className="text-white/70 mb-4">
                    Explore the potential of quantum computing and how it will revolutionize cryptography, drug discovery, and optimization.
                  </p>
                  <a href="/blog/quantum-computing-frontier" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors font-medium">
                    Read Full Article →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Explore by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* AI & ML */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">AI & Machine Learning</h3>
                <p className="text-white/60 text-sm mb-4">Latest developments in AI and ML</p>
                <a href="/blog/category/ai-ml" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                  View Articles →
                </a>
              </div>

              {/* Cybersecurity */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Cybersecurity</h3>
                <p className="text-white/60 text-sm mb-4">Security insights and best practices</p>
                <a href="/blog/category/cybersecurity" className="text-red-400 hover:text-red-300 transition-colors text-sm">
                  View Articles →
                </a>
              </div>

              {/* Cloud & DevOps */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Cloud & DevOps</h3>
                <p className="text-white/60 text-sm mb-4">Cloud strategies and DevOps practices</p>
                <a href="/blog/category/cloud-devops" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                  View Articles →
                </a>
              </div>

              {/* Digital Transformation */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Digital Transformation</h3>
                <p className="text-white/60 text-sm mb-4">Business transformation strategies</p>
                <a href="/blog/category/digital-transformation" className="text-green-400 hover:text-green-300 transition-colors text-sm">
                  View Articles →
                </a>
              </div>
            </div>
          </section>

          {/* Latest Articles */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Article 1 */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-purple-400 text-sm font-medium">Cybersecurity</span>
                  <span className="text-white/40 text-sm">• 3 days ago</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Zero Trust Security: A Complete Guide</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Learn how to implement zero trust architecture to protect your organization from modern cyber threats.
                </p>
                <a href="/blog/zero-trust-security-guide" className="text-purple-400 hover:text-purple-300 transition-colors text-sm">
                  Read More →
                </a>
              </div>

              {/* Article 2 */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-orange-400 text-sm font-medium">Cloud Computing</span>
                  <span className="text-white/40 text-sm">• 1 week ago</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Multi-Cloud Strategy: Benefits and Challenges</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Explore the advantages and considerations of implementing a multi-cloud approach for your business.
                </p>
                <a href="/blog/multi-cloud-strategy" className="text-orange-400 hover:text-orange-300 transition-colors text-sm">
                  Read More →
                </a>
              </div>

              {/* Article 3 */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-teal-400/50 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-teal-400 text-sm font-medium">Innovation</span>
                  <span className="text-white/40 text-sm">• 2 weeks ago</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">The Future of Work: Remote Collaboration Tools</h3>
                <p className="text-white/70 mb-4 text-sm">
                  Discover the latest tools and technologies that are reshaping how teams collaborate in remote environments.
                </p>
                <a href="/blog/future-of-work-remote-collaboration" className="text-teal-400 hover:text-teal-300 transition-colors text-sm">
                  Read More →
                </a>
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-2xl p-12 border border-cyan-500/30 text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Insights</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Get the latest technology insights, industry trends, and expert perspectives delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-12 border border-purple-500/30">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how our technology solutions can drive innovation and growth for your organization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-200">
                  Get Started Today
                </a>
                <a href="/services" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                  Explore Our Services
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}