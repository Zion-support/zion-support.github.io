import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Help() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All' 'Getting Started' 'Account & Billing' 'Technical Support' 'API Documentation' 'Troubleshooting'];

  const helpArticles = [
    {
      id: 1,
      title: "Getting Started with Zion Tech Group Services"
      category: "Getting Started"
      description: "Learn how to set up your account and start using our services effectively."
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Understanding Your Billing and Subscription"
      category: "Account & Billing"
      description: "Everything you need to know about billing, subscriptions, and payment methods."
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "API Integration Guide"
      category: "API Documentation"
      description: "Step-by-step guide to integrating our APIs into your applications."
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Troubleshooting Common Issues"
      category: "Troubleshooting"
      description: "Solutions to the most common problems users encounter."
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Security Best Practices"
      category: "Technical Support"
      description: "Essential security practices to keep your data and systems secure."
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Performance Optimization Tips"
      category: "Technical Support"
      description: "How to optimize your applications for better performance."
      readTime: "6 min read"
    }
  ];

  const filteredArticles = helpArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>Help Center - Zion Tech Group | Support & Documentation</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find documentation, troubleshooting guides, and contact our support team." />
        <meta name="keywords" content="help, support, documentation, troubleshooting, FAQ, customer service, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/help" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Help Center - Zion Tech Group | Support & Documentation" />
        <meta property="og:description" content="Get help and support for Zion Tech Group services." />
        <meta property="og:url" content="https://ziontechgroup.com/help" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.svg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Help Center - Zion Tech Group | Support & Documentation" />
        <meta name="twitter:description" content="Get help and support for Zion Tech Group services." />
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
                <Link href="/help" className="text-blue-600 font-medium">Help</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Help Center
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Find answers, get support, and learn how to make the most of our services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
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

        {/* Help Articles */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600">{article.category}</span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <Link
                    href={`/help/${article.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read Article →
                  </Link>
                </div>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
              >
                Contact Support
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Live Chat
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
                  <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
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