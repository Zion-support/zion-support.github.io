import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Micro SaaS: Trends and Opportunities in 2025',
      excerpt: 'Explore the latest trends in micro SaaS development and discover emerging opportunities for entrepreneurs and businesses.',
      date: '2025-01-26',
      category: 'Micro SaaS',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'AI-Powered Business Automation: Transforming Operations',
      excerpt: 'Learn how AI automation is revolutionizing business operations and increasing efficiency across industries.',
      date: '2025-01-25',
      category: 'AI Services',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Cloud Cost Optimization: Best Practices for 2025',
      excerpt: 'Discover proven strategies to reduce cloud costs and optimize your infrastructure spending.',
      date: '2025-01-24',
      category: 'IT Services',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Building Scalable IT Infrastructure: A Complete Guide',
      excerpt: 'Comprehensive guide to building and maintaining scalable IT infrastructure for growing businesses.',
      date: '2025-01-23',
      category: 'IT Services',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Machine Learning in Healthcare: Current Applications',
      excerpt: 'Explore how machine learning is transforming healthcare diagnostics and patient care.',
      date: '2025-01-22',
      category: 'AI Services',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Essential cybersecurity measures every small business should implement to protect their data and operations.',
      date: '2025-01-21',
      category: 'IT Services',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    }
  ];

  const categories = ['All', 'Micro SaaS', 'AI Services', 'IT Services'];

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group | Technology Insights & Industry News</title>
        <meta name="description" content="Stay updated with the latest technology insights, industry trends, and expert analysis from Zion Tech Group. Covering micro SaaS, AI services, and IT solutions." />
        <meta name="keywords" content="technology blog, micro SaaS insights, AI trends, IT solutions, business automation, cloud computing" />
        <link rel="canonical" href={`${contact.site}/blog`} />
        <meta property="og:title" content="Blog - Zion Tech Group | Technology Insights & Industry News" />
        <meta property="og:description" content="Stay updated with the latest technology insights, industry trends, and expert analysis from Zion Tech Group." />
        <meta property="og:url" content={`${contact.site}/blog`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Zion Tech Group | Technology Insights & Industry News" />
        <meta name="twitter:description" content="Stay updated with the latest technology insights, industry trends, and expert analysis from Zion Tech Group." />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Technology Blog
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Insights, Trends & Expert Analysis
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest insights on micro SaaS development, 
              AI innovation, and IT solutions. Expert analysis and industry trends to help 
              your business thrive in the digital age.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border border-white/20 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 overflow-hidden group">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-4xl opacity-50">📝</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                        {post.category}
                      </span>
                      <span className="text-slate-400 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Stay Updated
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Subscribe to our newsletter for the latest technology insights, 
              industry trends, and exclusive content delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Let our experts help you implement the latest technology solutions 
              and stay ahead of the competition.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Get Started
              </Link>
              <Link href="/services" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}