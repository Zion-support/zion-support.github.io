import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

<<<<<<< HEAD
export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "Zion Launches Autonomous Cloud Automation Platform",
      excerpt: "Revolutionary new platform enables truly autonomous cloud management with zero human intervention.",
      date: "2025-01-17",
      category: "Product Launch",
      image: "/api/placeholder/400/250",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "AI-Powered Content Generation Reaches New Heights",
      excerpt: "Our autonomous content systems now generate high-quality, SEO-optimized content at scale.",
      date: "2025-01-16",
      category: "Technology",
      image: "/api/placeholder/400/250",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Zion Achieves 99.9% Uptime Milestone",
      excerpt: "Continuous operation excellence demonstrates the reliability of autonomous systems.",
      date: "2025-01-15",
      category: "Achievement",
      image: "/api/placeholder/400/250",
      readTime: "2 min read"
    },
    {
      id: 4,
      title: "Partnership with Leading Cloud Providers Announced",
      excerpt: "Strategic partnerships expand Zion's reach across major cloud platforms.",
      date: "2025-01-14",
      category: "Partnership",
      image: "/api/placeholder/400/250",
      readTime: "3 min read"
    }
  ];

  const categories = ["All", "Product Launch", "Technology", "Achievement", "Partnership", "Industry News"];

  return (
    <>
      <Head>
        <title>News | Zion - Latest Updates & Announcements</title>
        <meta name="description" content="Stay updated with the latest news, product launches, and announcements from Zion." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Zion News
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Latest updates, product launches, and insights from the world of autonomous cloud automation
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
=======
export default function News() {
  const newsItems = [
    {
      id: 1,
      title: 'Zion App Achieves 99.99% Uptime Milestone',
      excerpt: 'Our autonomous cloud infrastructure has maintained exceptional reliability, setting new industry standards for automated operations.',
      date: '2025-01-17',
      category: 'Company News',
      image: '🚀',
      readTime: '3 min read'
    },
    {
      id: 2,
      title: 'New AI-Powered Content Generation Features Released',
      excerpt: 'Introducing advanced content creation tools that automatically generate high-quality documentation and marketing materials.',
      date: '2025-01-16',
      category: 'Product Update',
      image: '🤖',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Partnership with CloudTech Solutions Announced',
      excerpt: 'Strategic collaboration to expand our automation capabilities and reach new markets across the cloud infrastructure sector.',
      date: '2025-01-15',
      category: 'Partnerships',
      image: '🤝',
      readTime: '2 min read'
    },
    {
      id: 4,
      title: 'Security Enhancement: Advanced Threat Detection',
      excerpt: 'Latest security updates include AI-driven threat detection and automated response systems for enhanced protection.',
      date: '2025-01-14',
      category: 'Security',
      image: '🔒',
      readTime: '5 min read'
    },
    {
      id: 5,
      title: 'Customer Success Story: Enterprise Automation',
      excerpt: 'How a Fortune 500 company achieved 40% cost reduction using our autonomous cloud automation platform.',
      date: '2025-01-13',
      category: 'Customer Success',
      image: '📈',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Developer Community Growth: 10,000+ Members',
      excerpt: 'Our developer community continues to expand, fostering innovation and collaboration in cloud automation.',
      date: '2025-01-12',
      category: 'Community',
      image: '👥',
      readTime: '2 min read'
    }
  ];

  const categories = ['All', 'Company News', 'Product Update', 'Partnerships', 'Security', 'Customer Success', 'Community'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>News - Zion App</title>
        <meta name="description" content="Latest news, updates, and announcements from Zion App" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay informed about the latest developments, product updates, and company news
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  category === 'All'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
>>>>>>> origin/cursor/update-content-and-fix-links-7079
                }`}
              >
                {category}
              </button>
            ))}
          </div>
<<<<<<< HEAD
        </div>

        {/* News Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Image Placeholder</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
=======

          {/* Featured News */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20">
              <div className="md:flex">
                <div className="md:w-1/3 p-8 flex items-center justify-center text-8xl">
                  {newsItems[0].image}
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                      {newsItems[0].category}
                    </span>
                    <span className="text-gray-400 text-sm">{newsItems[0].readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {newsItems[0].title}
                  </h2>
                  <p className="text-gray-300 text-lg mb-6">
                    {newsItems[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{newsItems[0].date}</span>
                    <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors">
                      Read Full Article
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(1).map((item) => (
              <article key={item.id} className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="p-6">
                  <div className="text-4xl mb-4 text-center">{item.image}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-sm">{item.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
>>>>>>> origin/cursor/update-content-and-fix-links-7079
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
<<<<<<< HEAD
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <Link 
                      href={`/news/${item.id}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
                    >
                      Read More →
                    </Link>
=======
                    <span className="text-gray-400 text-sm">{item.date}</span>
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                      Read More →
                    </button>
>>>>>>> origin/cursor/update-content-and-fix-links-7079
                  </div>
                </div>
              </article>
            ))}
          </div>

<<<<<<< HEAD
          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Load More News
            </button>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Never Miss an Update
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new features, product launches, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
=======
          {/* Newsletter Signup */}
          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Never Miss an Update
              </h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest news and insights
              </p>
              <div className="flex max-w-md mx-auto gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
>>>>>>> origin/cursor/update-content-and-fix-links-7079
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </>
=======
    </div>
>>>>>>> origin/cursor/update-content-and-fix-links-7079
  );
}