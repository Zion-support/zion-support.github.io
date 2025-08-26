import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, TrendingUp, Users, Globe, Zap } from 'lucide-react';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "Zion Tech Group Launches Next-Generation AI Platform",
      excerpt: "Our revolutionary AI platform is now available, featuring advanced machine learning capabilities and autonomous decision-making systems.",
      date: "2024-12-15",
      category: "Product Launch",
      readTime: "3 min read",
      featured: true
    },
    {
      id: 2,
      title: "Expanding Our Cybersecurity Services Portfolio",
      excerpt: "We're excited to announce the expansion of our cybersecurity offerings, including quantum-resistant encryption and advanced threat detection.",
      date: "2024-12-10",
      category: "Service Update",
      readTime: "2 min read"
    },
    {
      id: 3,
      title: "New Partnership with Global Cloud Infrastructure Provider",
      excerpt: "Strategic partnership announcement that will enhance our cloud platform capabilities and expand our global reach.",
      date: "2024-12-05",
      category: "Partnership",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Zion Tech Group Recognized as Top AI Innovator",
      excerpt: "Industry recognition for our contributions to artificial intelligence and machine learning technologies.",
      date: "2024-11-28",
      category: "Awards",
      readTime: "2 min read"
    },
    {
      id: 5,
      title: "Customer Success Story: 300% ROI Improvement",
      excerpt: "How our AI-powered solution helped a Fortune 500 company achieve remarkable efficiency gains and cost savings.",
      date: "2024-11-20",
      category: "Case Study",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Upcoming Webinar: Future of Quantum Computing",
      excerpt: "Join our experts for an in-depth discussion on quantum computing and its implications for business technology.",
      date: "2024-11-15",
      category: "Event",
      readTime: "1 min read"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Latest <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">News</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest developments, product launches, and insights from Zion Tech Group
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Stories</h2>
          
          {newsItems.filter(item => item.featured).map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Zap className="w-16 h-16 mx-auto mb-4" />
                    <span className="text-sm font-semibold uppercase tracking-wide">{item.category}</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(item.date)}
                    <span className="mx-2">•</span>
                    <span>{item.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.excerpt}</p>
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All News Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All News</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.filter(item => !item.featured).map((item) => (
              <article key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {item.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get the latest news and insights delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/about"
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 text-center"
            >
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">About Us</h3>
              <p className="text-gray-600">Learn more about our company, mission, and values</p>
            </Link>
            
            <Link
              to="/services"
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 text-center"
            >
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Services</h3>
              <p className="text-gray-600">Explore our comprehensive technology solutions</p>
            </Link>
            
            <Link
              to="/contact"
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 text-center"
            >
              <Globe className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get in Touch</h3>
              <p className="text-gray-600">Ready to start your next project? Contact us today</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}