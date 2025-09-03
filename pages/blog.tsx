import Link from 'next/link';
import Head from 'next/head';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Micro SaaS: Trends and Opportunities in 2025",
      excerpt: "Explore the latest trends in micro SaaS development and how businesses can leverage these opportunities for growth.",
      date: "2025-01-15",
      category: "Micro SaaS",
      readTime: "5 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "AI Automation: Transforming Business Operations",
      excerpt: "Discover how AI automation is revolutionizing business processes and increasing operational efficiency.",
      date: "2025-01-10",
      category: "AI Services",
      readTime: "7 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Cloud Cost Optimization Strategies for Enterprise",
      excerpt: "Learn proven strategies to reduce cloud costs while maintaining performance and scalability.",
      date: "2025-01-05",
      category: "Cloud & DevOps",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Essential cybersecurity measures every business should implement to protect their digital assets.",
      date: "2024-12-28",
      category: "Cybersecurity",
      readTime: "8 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Quantum Computing: The Next Frontier in Technology",
      excerpt: "Understanding quantum computing and its potential impact on various industries and applications.",
      date: "2024-12-20",
      category: "Quantum Computing",
      readTime: "10 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Digital Transformation: A Complete Guide",
      excerpt: "A comprehensive guide to digital transformation and how to successfully implement it in your organization.",
      date: "2024-12-15",
      category: "IT Services",
      readTime: "12 min read",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = ["All", "Micro SaaS", "AI Services", "Cloud & DevOps", "Cybersecurity", "Quantum Computing", "IT Services"];

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group | Technology Insights & Industry News</title>
        <meta name="description" content="Stay updated with the latest technology insights, industry trends, and expert analysis from Zion Tech Group's blog." />
        <meta name="keywords" content="technology blog, AI insights, micro SaaS trends, cloud computing, cybersecurity, quantum computing" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Technology Blog
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Insights, trends, and expert analysis from the world of technology
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest articles on micro SaaS, AI services, 
              cloud computing, cybersecurity, and emerging technologies.
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
                  className="px-6 py-2 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-medium transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-slate-900/60 rounded-lg border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 group">
                  <div className="aspect-video bg-slate-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                      <span className="text-4xl opacity-50">📝</span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-slate-400 mb-3">
                      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-slate-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      Read More
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-900/60 rounded-lg border border-white/10 p-8">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-slate-300 mb-6">
                Subscribe to our newsletter for the latest technology insights and industry updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}