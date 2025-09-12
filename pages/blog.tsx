import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Blog: NextPage = () => {
  const featuredPosts = [
    {
      title: "The Future of AI in Enterprise Software",
      excerpt: "Exploring how artificial intelligence is revolutionizing enterprise software development and business operations.",
      category: "AI & Machine Learning",
      readTime: "8 min read",
      date: "January 15, 2024",
      href: "/blog/machine-learning-applications-in-enterprise-software-chat",
      image: "🤖"
    },
    {
      title: "Cloud-Native Architecture Best Practices",
      excerpt: "Learn the essential principles and patterns for building scalable, resilient cloud-native applications.",
      category: "Cloud Computing",
      readTime: "12 min read",
      date: "January 12, 2024",
      href: "/blog/cloud-native-architecture-best-practices-chat",
      image: "☁️"
    },
    {
      title: "Cybersecurity Trends for 2024 and Beyond",
      excerpt: "Stay ahead of emerging threats with our comprehensive analysis of cybersecurity trends and best practices.",
      category: "Cybersecurity",
      readTime: "10 min read",
      date: "January 10, 2024",
      href: "/blog/cybersecurity-trends-for-2024-and-beyond-chat",
      image: "🔒"
    }
  ];

  const categories = [
    { name: "AI & Machine Learning", count: 4, href: "/blog?category=ai" },
    { name: "Cloud Computing", count: 3, href: "/blog?category=cloud" },
    { name: "Cybersecurity", count: 2, href: "/blog?category=security" },
    { name: "Blockchain", count: 2, href: "/blog?category=blockchain" },
    { name: "DevOps", count: 3, href: "/blog?category=devops" },
    { name: "Data Analytics", count: 2, href: "/blog?category=data" }
  ];

  const recentPosts = [
    {
      title: "5G Technology and Its Impact on IoT",
      category: "Technology",
      date: "January 8, 2024",
      href: "/blog/5g-technology-and-its-impact-on-iot-chat"
    },
    {
      title: "API-First Development: Building Scalable Systems",
      category: "Development",
      date: "January 5, 2024",
      href: "/blog/api-first-development-building-scalable-systems-chat"
    },
    {
      title: "Augmented Reality in Enterprise Applications",
      category: "Technology",
      date: "January 3, 2024",
      href: "/blog/augmented-reality-in-enterprise-applications-chat"
    },
    {
      title: "Blockchain Technology in Modern Business Solutions",
      category: "Blockchain",
      date: "December 28, 2023",
      href: "/blog/blockchain-technology-in-modern-business-solutions-chat"
    },
    {
      title: "Data Analytics in Digital Transformation",
      category: "Data Analytics",
      date: "December 25, 2023",
      href: "/blog/data-analytics-in-digital-transformation-chat"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Blog - Zion Tech Solutions</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, blockchain, and technology trends from our expert team." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing, cybersecurity, blockchain, tech trends" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Technology Insights & Trends
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Stay ahead of the curve with expert insights, industry trends, and technical deep-dives 
            from our team of technology professionals.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Subscribe to Newsletter
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Our Services
            </Link>
          </div>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group">
                <div className="text-4xl mb-4">{post.image}</div>
                <div className="mb-3">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">{post.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-200 mb-4 text-sm">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <Link 
                  href={post.href}
                  className="inline-flex items-center text-blue-300 hover:text-blue-200 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
            <div className="space-y-6">
              {recentPosts.map((post, index) => (
                <article key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">{post.category}</span>
                        <span className="text-gray-400 text-sm">{post.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {post.title}
                      </h3>
                    </div>
                    <Link 
                      href={post.href}
                      className="text-blue-300 hover:text-blue-200 ml-4 group-hover:translate-x-1 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <Link 
                    key={index}
                    href={category.href}
                    className="flex items-center justify-between text-gray-300 hover:text-white transition-colors group"
                  >
                    <span>{category.name}</span>
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full group-hover:bg-blue-500 transition-colors">
                      {category.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Stay Updated</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Get the latest technology insights and industry trends delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center text-white mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our expert team help you implement the latest technologies and best practices.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Free Consultation
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;