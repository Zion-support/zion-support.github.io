import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Download, Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import Link from 'next/link';

const Whitepapers: NextPage = () => {
  const whitepapers = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in Enterprise",
      description: "A comprehensive analysis of AI trends, implementation strategies, and ROI considerations for enterprise organizations.",
      author: "Dr. Sarah Chen",
      date: "January 2025",
      category: "Artificial Intelligence",
      pages: 24,
      downloadCount: "2.3K",
      featured: true,
      topics: ["Machine Learning", "Enterprise AI", "ROI Analysis", "Implementation"]
    },
    {
      id: 2,
      title: "Cloud Migration Best Practices: A Strategic Guide",
      description: "Essential strategies and considerations for successful cloud migration, including cost optimization and security.",
      author: "Michael Rodriguez",
      date: "December 2024",
      category: "Cloud Computing",
      pages: 18,
      downloadCount: "1.8K",
      featured: false,
      topics: ["Cloud Migration", "AWS", "Azure", "Cost Optimization"]
    },
    {
      id: 3,
      title: "Cybersecurity in the Digital Age: Zero Trust Architecture",
      description: "Implementing zero trust security models to protect modern digital infrastructure and remote work environments.",
      author: "Alex Thompson",
      date: "November 2024",
      category: "Cybersecurity",
      pages: 22,
      downloadCount: "1.5K",
      featured: false,
      topics: ["Zero Trust", "Security Architecture", "Remote Work", "Threat Protection"]
    },
    {
      id: 4,
      title: "Microservices Architecture: Design Patterns and Implementation",
      description: "Comprehensive guide to designing, implementing, and maintaining microservices-based applications at scale.",
      author: "Jennifer Liu",
      date: "October 2024",
      category: "Software Architecture",
      pages: 28,
      downloadCount: "1.2K",
      featured: false,
      topics: ["Microservices", "API Design", "Scalability", "DevOps"]
    },
    {
      id: 5,
      title: "Quantum Computing: Applications and Business Impact",
      description: "Exploring the potential of quantum computing and its implications for various industries and business processes.",
      author: "Dr. Robert Kim",
      date: "September 2024",
      category: "Emerging Technologies",
      pages: 20,
      downloadCount: "950",
      featured: false,
      topics: ["Quantum Computing", "Business Applications", "Future Technology", "Innovation"]
    },
    {
      id: 6,
      title: "Data Analytics and Business Intelligence: Modern Approaches",
      description: "Leveraging big data analytics and modern BI tools to drive data-driven decision making and business growth.",
      author: "Maria Garcia",
      date: "August 2024",
      category: "Data Analytics",
      pages: 16,
      downloadCount: "1.1K",
      featured: false,
      topics: ["Big Data", "Business Intelligence", "Analytics", "Data Visualization"]
    }
  ];

  const categories = [
    "All Papers",
    "Artificial Intelligence",
    "Cloud Computing",
    "Cybersecurity",
    "Software Architecture",
    "Emerging Technologies",
    "Data Analytics"
  ];

  const featuredPaper = whitepapers.find(paper => paper.featured);
  const regularPapers = whitepapers.filter(paper => !paper.featured);

  return (
    <MainLayout
      title="Whitepapers - Zion Tech Group"
      description="Download our comprehensive whitepapers on technology trends, best practices, and industry insights. Expert analysis from Zion Tech Group specialists."
      keywords="whitepapers, technology research, AI insights, cloud computing, cybersecurity, software architecture"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white bg-opacity-20 rounded-full">
                  <FileText className="w-16 h-16 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Whitepapers</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
                In-depth research and analysis on the latest technology trends, 
                best practices, and industry insights from our expert team.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search whitepapers..."
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="lg:w-2/3">
              
              {/* Featured Whitepaper */}
              {featuredPaper && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Whitepaper</h2>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">Featured Whitepaper Cover</span>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          {featuredPaper.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPaper.title}</h3>
                      <p className="text-gray-600 mb-6 text-lg">{featuredPaper.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredPaper.topics.map((topic, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {topic}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            {featuredPaper.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {featuredPaper.date}
                          </div>
                          <div className="flex items-center">
                            <FileText className="w-4 h-4 mr-2" />
                            {featuredPaper.pages} pages
                          </div>
                          <div className="flex items-center">
                            <Download className="w-4 h-4 mr-2" />
                            {featuredPaper.downloadCount} downloads
                          </div>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center">
                          <Download className="mr-2 w-5 h-5" />
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* All Whitepapers */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">All Whitepapers</h2>
                <div className="space-y-6">
                  {regularPapers.map((paper) => (
                    <div key={paper.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/4">
                          <div className="h-32 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-semibold">PDF</span>
                          </div>
                        </div>
                        <div className="md:w-3/4">
                          <div className="flex items-center mb-3">
                            <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                              {paper.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{paper.title}</h3>
                          <p className="text-gray-600 mb-4">{paper.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {paper.topics.map((topic, index) => (
                              <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                {topic}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <User className="w-4 h-4 mr-1" />
                                {paper.author}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {paper.date}
                              </div>
                              <div className="flex items-center">
                                <FileText className="w-4 h-4 mr-1" />
                                {paper.pages} pages
                              </div>
                              <div className="flex items-center">
                                <Download className="w-4 h-4 mr-1" />
                                {paper.downloadCount}
                              </div>
                            </div>
                            <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                              <Download className="mr-1 w-4 h-4" />
                              Download
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-8 space-y-8">
                
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Tag className="w-5 h-5 mr-2" />
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className={`block py-2 px-3 rounded-lg transition-colors ${
                            index === 0 
                              ? 'bg-blue-100 text-blue-800 font-medium' 
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Stay Informed</h3>
                  <p className="mb-4 text-blue-100">
                    Get notified when we publish new whitepapers and research.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Download Stats */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Download Statistics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Downloads</span>
                      <span className="font-semibold">8.9K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Papers Published</span>
                      <span className="font-semibold">6</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average Rating</span>
                      <span className="font-semibold">4.8/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Whitepapers;