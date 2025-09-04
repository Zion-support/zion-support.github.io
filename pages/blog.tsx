import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Micro SaaS: Trends and Opportunities in 2024",
      excerpt: "Explore the latest trends in micro SaaS development and discover new opportunities for entrepreneurs and businesses.",
      date: "2024-01-15",
      category: "Micro SaaS",
      readTime: "5 min read",
      href: "/blog/micro-saas-trends-2024"
    },
    {
      id: 2,
      title: "AI-Powered Automation: Transforming Business Operations",
      excerpt: "Learn how AI automation is revolutionizing business processes and increasing efficiency across industries.",
      date: "2024-01-10",
      category: "AI Services",
      readTime: "7 min read",
      href: "/blog/ai-automation-business-transformation"
    },
    {
      id: 3,
      title: "Quantum Computing: The Next Frontier in Technology",
      excerpt: "Understanding quantum computing and its potential applications in solving complex business problems.",
      date: "2024-01-05",
      category: "Quantum Computing",
      readTime: "6 min read",
      href: "/blog/quantum-computing-next-frontier"
    },
    {
      id: 4,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Essential cybersecurity strategies to protect your business from evolving digital threats.",
      date: "2024-01-01",
      category: "Cybersecurity",
      readTime: "8 min read",
      href: "/blog/cybersecurity-best-practices-2024"
    },
    {
      id: 5,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Step-by-step guide to successfully migrating your business to the cloud with minimal disruption.",
      date: "2023-12-28",
      category: "Cloud & DevOps",
      readTime: "10 min read",
      href: "/blog/cloud-migration-strategies-guide"
    },
    {
      id: 6,
      title: "Building Scalable IT Infrastructure for Growing Companies",
      excerpt: "How to design and implement IT infrastructure that grows with your business needs.",
      date: "2023-12-25",
      category: "IT Services",
      readTime: "9 min read",
      href: "/blog/scalable-it-infrastructure-growing-companies"
    }
  ];

  const categories = [
    { name: "All", count: blogPosts.length },
    { name: "Micro SaaS", count: blogPosts.filter(post => post.category === "Micro SaaS").length },
    { name: "AI Services", count: blogPosts.filter(post => post.category === "AI Services").length },
    { name: "Quantum Computing", count: blogPosts.filter(post => post.category === "Quantum Computing").length },
    { name: "Cybersecurity", count: blogPosts.filter(post => post.category === "Cybersecurity").length },
    { name: "Cloud & DevOps", count: blogPosts.filter(post => post.category === "Cloud & DevOps").length },
    { name: "IT Services", count: blogPosts.filter(post => post.category === "IT Services").length }
  ];

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on micro SaaS, AI services, quantum computing, cybersecurity, and IT solutions from Zion Tech Group experts." />
        <link rel="canonical" href={`${contact.site}/blog`} />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Insights, trends, and expert knowledge on technology, innovation, and business transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-900/60 rounded-xl p-6 border border-white/10 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-800/50 transition-colors flex justify-between items-center"
                    >
                      <span className="text-slate-300">{category.name}</span>
                      <span className="text-slate-500 text-sm">{category.count}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Get the latest insights delivered to your inbox
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-slate-900/60 rounded-xl p-6 border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs font-semibold rounded">
                        {post.category}
                      </span>
                      <span className="text-slate-500 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 text-white hover:text-blue-400 transition-colors">
                      <Link href={post.href}>{post.title}</Link>
                    </h2>
                    
                    <p className="text-slate-400 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <time className="text-slate-500 text-sm">{post.date}</time>
                      <Link 
                        href={post.href}
                        className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                  Load More Posts
                </button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Our experts are here to help you implement the latest technologies and solutions 
                discussed in our blog posts.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Get Started Today
                </Link>
                <Link 
                  href="/services" 
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}