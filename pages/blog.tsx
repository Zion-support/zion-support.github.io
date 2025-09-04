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
      title: "The Future of Micro SaaS: Trends and Opportunities in 2025",
      excerpt: "Explore the latest trends in micro SaaS development and how businesses can leverage these innovative solutions for growth.",
      date: "2025-01-26",
      category: "Micro SaaS",
      readTime: "5 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "AI-Powered Automation: Transforming Business Operations",
      excerpt: "Discover how AI automation is revolutionizing business processes and driving efficiency across industries.",
      date: "2025-01-25",
      category: "AI Services",
      readTime: "7 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Modern Enterprises",
      excerpt: "Learn essential cybersecurity strategies to protect your business from evolving threats and vulnerabilities.",
      date: "2025-01-24",
      category: "Cybersecurity",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Cloud Computing Optimization: Reducing Costs and Improving Performance",
      excerpt: "Strategies for optimizing cloud infrastructure to maximize ROI while maintaining high performance standards.",
      date: "2025-01-23",
      category: "Cloud & DevOps",
      readTime: "8 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Quantum Computing: The Next Frontier in Technology",
      excerpt: "Understanding quantum computing capabilities and their potential impact on various industries.",
      date: "2025-01-22",
      category: "Quantum Computing",
      readTime: "10 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Digital Transformation: A Complete Guide for Businesses",
      excerpt: "Comprehensive guide to digital transformation strategies that drive business growth and innovation.",
      date: "2025-01-21",
      category: "Digital Transformation",
      readTime: "12 min read",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = ["All", "Micro SaaS", "AI Services", "Cybersecurity", "Cloud & DevOps", "Quantum Computing", "Digital Transformation"];

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group | Technology Insights & Industry News</title>
        <meta name="description" content="Stay updated with the latest technology insights, industry trends, and expert analysis from Zion Tech Group's blog." />
        <meta name="keywords" content="technology blog, micro SaaS, AI services, cybersecurity, cloud computing, quantum computing, digital transformation" />
        <link rel="canonical" href={`${contact.site}/blog`} />
        <meta property="og: title" content="Blog - Zion Tech Group | Technology Insights & Industry News" />
        <meta property="og:description" content="Stay updated with the latest technology insights, industry trends, and expert analysis from Zion Tech Group's blog." />
        <meta property="og: url" content={`${contact.site}/blog`} />
        <meta property="og: type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Zion Tech Group | Technology Insights & Industry News" />
        <meta name="twitter:description" content="Stay updated with the latest technology insights, industry trends, and expert analysis from Zion Tech Group's blog." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert analysis, industry trends, and cutting-edge technology insights from our team of specialists.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel: ${contact.phone.replace(/[^\d+]/g,'')}`} className="px-6 py-3 bg-blue-600 hover: bg-blue-700 rounded-lg font-semibold transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto: ${contact.email}`} className="px-6 py-3 bg-purple-600 hover: bg-purple-700 rounded-lg font-semibold transition-colors">
                Email {contact.email}
              </a>
              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover: bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border border-white/20 text-white hover: bg-white/10 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover: bg-white/10 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4"></div>
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full">{post.category}</span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 hover: text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.id}`} className="text-blue-400 hover:text-blue-300 font-semibold">
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-slate-300 mb-8">
              Subscribe to our newsletter for the latest technology insights and industry updates.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-slate-300 mb-8">
              Let our experts help you implement the latest technology solutions for your business needs.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all">
                Get Started Today
              </Link>
              <Link href="/services" className="px-8 py-3 border border-white/20 text-white hover:bg-white/10 rounded-lg font-semibold transition-colors">
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )}