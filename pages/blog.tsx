import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2025",
      excerpt: "Explore the latest AI trends shaping the business landscape and how companies can leverage these technologies for competitive advantage.",
      author: "Zion Tech Group",
      date: "2025-01-26",
      category: "AI & Machine Learning",
      readTime: "5 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 2,
      title: "Quantum Computing: Breaking Down the Barriers to Mainstream Adoption",
      excerpt: "Understanding quantum computing's potential and the challenges that need to be overcome for widespread business implementation.",
      author: "Zion Tech Group",
      date: "2025-01-25",
      category: "Quantum Computing",
      readTime: "7 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "Micro SaaS: The New Frontier of Software Development",
      excerpt: "How micro SaaS solutions are revolutionizing the software industry and creating new opportunities for developers and businesses.",
      author: "Zion Tech Group",
      date: "2025-01-24",
      category: "Micro SaaS",
      readTime: "6 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 4,
      title: "Cybersecurity Best Practices for Modern Enterprises",
      excerpt: "Essential cybersecurity strategies and practices that every modern enterprise should implement to protect their digital assets.",
      author: "Zion Tech Group",
      date: "2025-01-23",
      category: "Cybersecurity",
      readTime: "8 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 5,
      title: "Cloud DevOps: Streamlining Development and Operations",
      excerpt: "How cloud DevOps practices are transforming software development and deployment processes for better efficiency and reliability.",
      author: "Zion Tech Group",
      date: "2025-01-22",
      category: "Cloud & DevOps",
      readTime: "6 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 6,
      title: "IoT and Edge Computing: The Perfect Partnership",
      excerpt: "Exploring how IoT and edge computing work together to create more efficient and responsive systems for modern businesses.",
      author: "Zion Tech Group",
      date: "2025-01-21",
      category: "IoT & Edge Computing",
      readTime: "5 min read",
      image: "/api/placeholder/600/300"
    }
  ];

  const categories = [
    "All",
    "AI & Machine Learning",
    "Quantum Computing",
    "Micro SaaS",
    "Cybersecurity",
    "Cloud & DevOps",
    "IoT & Edge Computing",
    "Blockchain",
    "Digital Transformation"
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group | Latest Technology Insights & News</title>
        <meta name="description" content="Stay updated with the latest technology insights, trends, and news from Zion Tech Group. Expert analysis on AI, quantum computing, micro SaaS, and more." />
        <meta name="keywords" content="technology blog, AI insights, quantum computing, micro SaaS, cybersecurity, cloud DevOps, IoT, blockchain, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog - Zion Tech Group | Latest Technology Insights & News" />
        <meta property="og:description" content="Stay updated with the latest technology insights, trends, and news from Zion Tech Group." />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.svg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Zion Tech Group | Latest Technology Insights & News" />
        <meta name="twitter:description" content="Stay updated with the latest technology insights, trends, and news from Zion Tech Group." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.svg" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                  Zion Tech Group
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                <Link href="/blog" className="text-blue-600 font-medium">Blog</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology Insights & News
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert analysis on the latest trends in AI, quantum computing, micro SaaS, and emerging technologies.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Featured Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-600">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-medium text-sm">ZT</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <p className="text-sm text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-blue-600 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest technology insights, trends, and updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
                <p className="text-gray-400">
                  Leading provider of innovative technology solutions and services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/services" className="hover:text-white">All Services</Link></li>
                  <li><Link href="/ai-services" className="hover:text-white">AI Services</Link></li>
                  <li><Link href="/micro-saas" className="hover:text-white">Micro SaaS</Link></li>
                  <li><Link href="/it-services" className="hover:text-white">IT Services</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                  <li><Link href="/team" className="hover:text-white">Team</Link></li>
                  <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                  <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
                  <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                  <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}