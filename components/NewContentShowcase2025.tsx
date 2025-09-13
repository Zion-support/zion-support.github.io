import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Users, TrendingUp, Zap, Shield, Globe } from 'lucide-react';

const NewContentShowcase2025 = () => {
  const contentItems = [
    {
      id: 1,
      title: "AI-Powered Business Automation Revolution",
      description: "Discover how our cutting-edge AI solutions are transforming businesses worldwide with 300% efficiency gains.",
      category: "AI Solutions",
      readTime: "8 min read",
      featured: true,
      stats: "15,000+ businesses transformed",
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough Guide 2025",
      description: "Comprehensive insights into quantum computing applications and their revolutionary impact on modern technology.",
      category: "Quantum Tech",
      readTime: "12 min read",
      featured: true,
      stats: "50,000+ downloads",
      icon: <Shield className="w-6 h-6 text-purple-500" />
    },
    {
      id: 3,
      title: "Neural Interface Development Masterclass",
      description: "Learn the fundamentals of neural interface technology and its applications in healthcare and communication.",
      category: "Neural Tech",
      readTime: "15 min read",
      featured: false,
      stats: "8,500+ students enrolled",
      icon: <TrendingUp className="w-6 h-6 text-green-500" />
    },
    {
      id: 4,
      title: "Global Enterprise Transformation Case Studies",
      description: "Real-world success stories from Fortune 500 companies implementing our AI solutions with measurable ROI.",
      category: "Case Studies",
      readTime: "10 min read",
      featured: true,
      stats: "25,000+ ROI achieved",
      icon: <Globe className="w-6 h-6 text-orange-500" />
    },
    {
      id: 5,
      title: "Autonomous Systems Implementation Guide",
      description: "Step-by-step guide to implementing autonomous business systems that operate independently 24/7.",
      category: "Automation",
      readTime: "20 min read",
      featured: false,
      stats: "12,000+ implementations",
      icon: <Users className="w-6 h-6 text-red-500" />
    },
    {
      id: 6,
      title: "Future Technology Predictions 2025-2030",
      description: "Expert analysis and predictions about emerging technologies that will shape the next decade.",
      category: "Future Tech",
      readTime: "18 min read",
      featured: true,
      stats: "100,000+ views",
      icon: <Star className="w-6 h-6 text-yellow-500" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            New Content Available
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Content Hub
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              2025 Edition
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest insights, guides, and breakthrough technologies that are reshaping the future of business and technology.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contentItems.map((item) => (
            <div
              key={item.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                item.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
            >
              {item.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500 text-white">
                    Featured
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {item.icon}
                  <span className="ml-2 text-sm font-medium text-gray-500">{item.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                  <span className="text-sm font-medium text-green-600">{item.stats}</span>
                </div>
                
                <Link
                  href={`/content/${item.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Our Latest Content
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get exclusive access to cutting-edge insights, case studies, and breakthrough technologies delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button className="w-full sm:w-auto px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;