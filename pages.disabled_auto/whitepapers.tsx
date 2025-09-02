import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Download, FileText, Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';

const Whitepapers: NextPage = () => {
  const whitepapers = [
    {
      id: 1,
      title: 'The Future of AI in Business: A Comprehensive Guide',
      description: 'Explore how artificial intelligence is transforming business operations and what it means for your organization.',
      author: 'Dr. Sarah Johnson',
      date: 'January 2025',
      category: 'AI & Machine Learning',
      pages: 24,
      downloadCount: '2.3k',
      featured: true,
      topics: ['Artificial Intelligence', 'Business Transformation', 'Machine Learning', 'Automation']
    },
    {
      id: 2,
      title: 'Cloud Migration Strategies: Best Practices and Pitfalls',
      description: 'Learn the essential strategies for successful cloud migration and how to avoid common mistakes.',
      author: 'Michael Chen',
      date: 'December 2024',
      category: 'Cloud Computing',
      pages: 18,
      downloadCount: '1.8k',
      featured: false,
      topics: ['Cloud Migration', 'AWS', 'Azure', 'Best Practices']
    },
    {
      id: 3,
      title: 'Cybersecurity in the Digital Age: Protecting Your Business',
      description: 'Comprehensive guide to modern cybersecurity threats and how to protect your organization.',
      author: 'Emily Watson',
      date: 'November 2024',
      category: 'Cybersecurity',
      pages: 32,
      downloadCount: '3.1k',
      featured: false,
      topics: ['Cybersecurity', 'Threat Protection', 'Compliance', 'Risk Management']
    },
    {
      id: 4,
      title: 'Microservices Architecture: Design Patterns and Implementation',
      description: 'Deep dive into microservices architecture patterns and practical implementation strategies.',
      author: 'David Rodriguez',
      date: 'October 2024',
      category: 'Software Architecture',
      pages: 28,
      downloadCount: '1.5k',
      featured: false,
      topics: ['Microservices', 'Architecture', 'Scalability', 'Design Patterns']
    },
    {
      id: 5,
      title: 'Data Analytics for Business Intelligence: A Practical Approach',
      description: 'How to leverage data analytics to drive business decisions and improve performance.',
      author: 'Lisa Park',
      date: 'September 2024',
      category: 'Data Analytics',
      pages: 22,
      downloadCount: '2.1k',
      featured: false,
      topics: ['Data Analytics', 'Business Intelligence', 'Data Visualization', 'KPIs']
    },
    {
      id: 6,
      title: 'Digital Transformation: A Roadmap for Success',
      description: 'Step-by-step guide to digital transformation and how to ensure successful implementation.',
      author: 'Alex Thompson',
      date: 'August 2024',
      category: 'Digital Transformation',
      pages: 26,
      downloadCount: '2.7k',
      featured: false,
      topics: ['Digital Transformation', 'Change Management', 'Technology Strategy', 'Innovation']
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Software Architecture', 'Data Analytics', 'Digital Transformation'];

  return (
    <MainLayout
      title="Whitepapers - Zion Tech Group"
      description="Download comprehensive whitepapers and research reports on technology trends and best practices from Zion Tech Group experts."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <FileText className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Whitepapers</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            In-depth research and insights on technology trends, best practices, and industry innovations 
            from our team of experts.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search whitepapers..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Categories</option>
                  {categories.slice(1).map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Whitepaper */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Whitepaper</h2>
            {(() => {
              const featured = whitepapers.find(wp => wp.featured);
              return (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <div className="text-white text-center">
                          <FileText className="w-16 h-16 mx-auto mb-4" />
                          <p className="text-lg font-semibold">Featured Research</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {featured?.category}
                        </span>
                        <span className="text-gray-500 text-sm">{featured?.pages} pages</span>
                        <span className="text-gray-500 text-sm">{featured?.downloadCount} downloads</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{featured?.title}</h3>
                      <p className="text-gray-600 mb-6">{featured?.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {featured?.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{featured?.author}</p>
                            <p className="text-sm text-gray-500">{featured?.date}</p>
                          </div>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                          <Download className="w-4 h-4" />
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">All Whitepapers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitepapers.filter(wp => !wp.featured).map((whitepaper) => (
                <div key={whitepaper.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <FileText className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm">Research Paper</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {whitepaper.category}
                      </span>
                      <span className="text-gray-500 text-xs">{whitepaper.pages} pages</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{whitepaper.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{whitepaper.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Topics:</h4>
                      <div className="flex flex-wrap gap-1">
                        {whitepaper.topics.slice(0, 3).map((topic, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {topic}
                          </span>
                        ))}
                        {whitepaper.topics.length > 3 && (
                          <span className="text-gray-500 text-xs">+{whitepaper.topics.length - 3} more</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-semibold">
                          {whitepaper.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{whitepaper.author}</p>
                          <p className="text-xs text-gray-500">{whitepaper.date}</p>
                        </div>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-1 text-sm">
                        <Download className="w-3 h-3" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter and be the first to receive new whitepapers and research insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Whitepapers;