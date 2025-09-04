import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Company News', 'Product Updates', 'Industry Insights', 'Partnerships', 'Awards'];

  const newsItems = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI-Powered Micro SaaS Platform",
      excerpt: "New platform combines artificial intelligence with micro SaaS architecture to deliver unprecedented business automation capabilities.",
      category: "Product Updates",
      date: "2025-01-26",
      author: "Zion Tech Group",
      readTime: "3 min read",
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 2,
      title: "Partnership with Microsoft Azure Expands Cloud Computing Capabilities",
      excerpt: "Strategic partnership brings advanced cloud solutions and AI services to enterprise clients worldwide.",
      category: "Partnerships",
      date: "2025-01-25",
      author: "Zion Tech Group",
      readTime: "2 min read",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 3,
      title: "Zion Tech Group Recognized as Top AI Innovation Company 2025",
      excerpt: "Industry recognition for groundbreaking work in artificial intelligence and quantum computing solutions.",
      category: "Awards",
      date: "2025-01-24",
      author: "Zion Tech Group",
      readTime: "4 min read",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 4,
      title: "Quantum Computing Breakthrough: New Algorithm Reduces Processing Time by 90%",
      excerpt: "Revolutionary quantum algorithm development opens new possibilities for complex problem-solving and optimization.",
      category: "Industry Insights",
      date: "2025-01-23",
      author: "Zion Tech Group",
      readTime: "5 min read",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 5,
      title: "Company Expands Global Operations with New European Office",
      excerpt: "Strategic expansion into European markets to better serve international clients and partners.",
      category: "Company News",
      date: "2025-01-22",
      author: "Zion Tech Group",
      readTime: "3 min read",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 6,
      title: "Cybersecurity Solutions Enhanced with Advanced Threat Detection",
      excerpt: "Latest security updates provide comprehensive protection against emerging cyber threats and vulnerabilities.",
      category: "Product Updates",
      date: "2025-01-21",
      author: "Zion Tech Group",
      readTime: "4 min read",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 7,
      title: "IoT and Edge Computing Solutions Drive Digital Transformation",
      excerpt: "New IoT platform enables real-time data processing and analytics at the edge for improved business outcomes.",
      category: "Industry Insights",
      date: "2025-01-20",
      author: "Zion Tech Group",
      readTime: "6 min read",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 8,
      title: "Sustainability Initiative: Carbon-Neutral Cloud Computing Solutions",
      excerpt: "Commitment to environmental responsibility through green technology and sustainable computing practices.",
      category: "Company News",
      date: "2025-01-19",
      author: "Zion Tech Group",
      readTime: "3 min read",
      image: "/api/placeholder/600/300",
      featured: false
    }
  ];

  const filteredNews = selectedCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  return (
    <>
      <Head>
        <title>News - Zion Tech Group | Latest Company News & Updates</title>
        <meta name="description" content="Stay updated with the latest news, product updates, partnerships, and industry insights from Zion Tech Group." />
        <meta name="keywords" content="news, updates, company news, product updates, partnerships, awards, industry insights, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="News - Zion Tech Group | Latest Company News & Updates" />
        <meta property="og:description" content="Stay updated with the latest news, product updates, partnerships, and industry insights from Zion Tech Group." />
        <meta property="og:url" content="https://ziontechgroup.com/news" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.svg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="News - Zion Tech Group | Latest Company News & Updates" />
        <meta name="twitter:description" content="Stay updated with the latest news and updates from Zion Tech Group." />
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
                <Link href="/news" className="text-blue-600 font-medium">News</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Latest News & Updates
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Stay informed about our latest developments, partnerships, product updates, and industry insights.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured News */}
        {selectedCategory === 'All' && featuredNews.length > 0 && (
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured News</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredNews.map((item) => (
                  <article key={item.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Featured Image</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-600">{item.category}</span>
                        <span className="text-sm text-gray-500">{item.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-medium text-sm">ZT</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{item.author}</p>
                            <p className="text-sm text-gray-500">{item.date}</p>
                          </div>
                        </div>
                        <Link
                          href={`/news/${item.id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
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
        )}

        {/* Regular News Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {selectedCategory === 'All' ? 'All News' : `${selectedCategory} News`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((item) => (
                <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">News Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-600">{item.category}</span>
                      <span className="text-sm text-gray-500">{item.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-medium text-sm">ZT</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{item.author}</p>
                          <p className="text-sm text-gray-500">{item.date}</p>
                        </div>
                      </div>
                      <Link
                        href={`/news/${item.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {regularNews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No news found in the selected category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-blue-600 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest News
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about our latest developments, product updates, and industry insights.
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
                  <li><Link href="/news" className="hover:text-white">News</Link></li>
                  <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
                  <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
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