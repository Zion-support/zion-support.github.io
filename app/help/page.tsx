import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Getting Started', 'Technical Support', 'Billing', 'Account', 'Security'];

  const helpArticles = [
    {
      title: "How to get started with AI services",
      category: "Getting Started",
      content: "Learn how to set up your first AI project with our comprehensive onboarding guide.",
      tags: ["AI", "onboarding", "setup"]
    },
    {
      title: "Cloud infrastructure setup guide",
      category: "Technical Support",
      content: "Step-by-step instructions for configuring your cloud infrastructure.",
      tags: ["cloud", "infrastructure", "setup"]
    },
    {
      title: "Understanding your bill",
      category: "Billing",
      content: "Learn how to read and understand your monthly billing statement.",
      tags: ["billing", "pricing", "invoice"]
    },
    {
      title: "Account security best practices",
      category: "Security",
      content: "Essential security practices to protect your account and data.",
      tags: ["security", "password", "2FA"]
    },
    {
      title: "API documentation and integration",
      category: "Technical Support",
      content: "Complete guide to integrating with our APIs and services.",
      tags: ["API", "integration", "documentation"]
    },
    {
      title: "Managing user permissions",
      category: "Account",
      content: "How to set up and manage user roles and permissions in your account.",
      tags: ["users", "permissions", "roles"]
    }
  ];

  const filteredArticles = helpArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Help Center
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions and get the support you need.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-cyan-500 pr-12"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-cyan-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Help Articles */}
          <div className="space-y-6 mb-12">
            {filteredArticles.map((article, index) => (
              <div key={index} className="cyber-card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-cyan-600 text-white text-sm rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{article.title}</h3>
                    <p className="text-gray-300 mb-3">{article.content}</p>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium ml-4">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Links</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="/contact" className="cyber-card hologram-card text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-lg font-semibold text-white mb-2">Contact Support</h3>
                <p className="text-gray-300">Get in touch with our support team</p>
              </a>
              <a href="/faq" className="cyber-card hologram-card text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">❓</div>
                <h3 className="text-lg font-semibold text-white mb-2">FAQ</h3>
                <p className="text-gray-300">Frequently asked questions</p>
              </a>
              <a href="/documentation" className="cyber-card hologram-card text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
                <p className="text-gray-300">Technical documentation and guides</p>
              </a>
            </div>
          </section>

          {/* Support Options */}
          <section className="mb-12">
            <div className="cyber-card hologram-card">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Get Support</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                  <p className="text-gray-300 text-sm mb-4">Available 24/7</p>
                  <button className="cyber-button">Start Chat</button>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📧</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                  <p className="text-gray-300 text-sm mb-4">support@ziontechgroup.com</p>
                  <a href="mailto:support@ziontechgroup.com" className="cyber-button">Send Email</a>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                  <p className="text-gray-300 text-sm mb-4">Mon-Fri 9AM-6PM PST</p>
                  <a href="tel:+13024640950" className="cyber-button">Call Now</a>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎫</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Ticket System</h3>
                  <p className="text-gray-300 text-sm mb-4">Submit a support ticket</p>
                  <button className="cyber-button">Create Ticket</button>
                </div>
              </div>
            </div>
          </section>

          {/* Status Page */}
          <section className="text-center cyber-card">
            <h2 className="text-2xl font-bold text-white mb-4">System Status</h2>
            <p className="text-gray-300 mb-6">
              Check the current status of our services and any ongoing maintenance.
            </p>
            <a
              href="/status"
              className="cyber-button"
            >
              View Status Page
            </a>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HelpPage;