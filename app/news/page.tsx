import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CalendarIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function NewsPage() {
  const newsArticles = [
    {
      title: "Zion Tech Group Launches New AI Analytics Platform",
      date: "2024-01-15",
      category: "Product Launch",
      excerpt: "Our latest AI analytics platform helps businesses gain deeper insights from their data with advanced machine learning algorithms.",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Partnership with Microsoft Azure Expands Cloud Capabilities",
      date: "2024-01-10",
      category: "Partnership",
      excerpt: "We're excited to announce our strategic partnership with Microsoft Azure to provide enhanced cloud solutions to our clients.",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Zion Tech Group Wins 'Best AI Solutions Provider' Award",
      date: "2024-01-05",
      category: "Awards",
      excerpt: "We're honored to receive the 'Best AI Solutions Provider' award at the Tech Innovation Summit 2024.",
      image: "/api/placeholder/400/250"
    },
    {
      title: "New Office Opening in San Francisco",
      date: "2023-12-20",
      category: "Company News",
      excerpt: "We're expanding our presence on the West Coast with a new office in San Francisco to better serve our clients.",
      image: "/api/placeholder/400/250"
    },
    {
      title: "AI Ethics and Responsible Development Guidelines",
      date: "2023-12-15",
      category: "Thought Leadership",
      excerpt: "Our commitment to ethical AI development and responsible technology implementation in all our solutions.",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Q4 2023 Growth Report: 150% Increase in Client Base",
      date: "2023-12-10",
      category: "Growth",
      excerpt: "We're thrilled to share our Q4 2023 growth report showing significant expansion in our client base and service offerings.",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = ["All", "Product Launch", "Partnership", "Awards", "Company News", "Thought Leadership", "Growth"];

  return (
    <>
      <Helmet>
        <title>News & Updates - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, announcements, and insights from Zion Tech Group. Read about our product launches, partnerships, and industry insights." />
        <meta name="keywords" content="news, updates, announcements, product launches, partnerships, AI technology news" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stay informed with our latest news and announcements
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Discover the latest developments in AI technology, company updates, 
              and industry insights from the Zion Tech Group team.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-900 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  category === "All" 
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" 
                    : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {newsArticles.map((article, index) => (
              <article key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white text-sm">News Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <button className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group">
                    Read More
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Subscribe to our newsletter for the latest news and insights
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-r-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Want to Be Featured?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Have a story to share or want to collaborate? Get in touch with us
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Us
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a 
                href="/partners" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Partnership Opportunities
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}