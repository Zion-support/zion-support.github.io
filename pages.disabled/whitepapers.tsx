import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
<<<<<<< HEAD
import { Download, Calendar, User, FileText, ArrowRight, Tag } from 'lucide-react';
=======
import { FileText, Download, Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
>>>>>>> main
import Link from 'next/link';
import { motion } from 'framer-motion';

const Whitepapers: NextPage = () => {
  const whitepapers = [
    {
      id: 1,
<<<<<<< HEAD
      title: 'The Future of Quantum Computing in Enterprise Applications',
      description: 'A comprehensive analysis of quantum computing technologies and their potential impact on enterprise software development, including practical implementation strategies and ROI considerations.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      category: 'Quantum Computing',
      pages: 45,
      downloadCount: 1250,
      fileSize: '2.3 MB',
      image: '/whitepapers/quantum-computing-enterprise.jpg',
      slug: 'quantum-computing-enterprise-applications',
      tags: ['Quantum Computing', 'Enterprise Software', 'Future Technology']
    },
    {
      id: 2,
      title: 'AI-Powered Micro SaaS: Building Profitable Niche Applications',
      description: 'An in-depth guide to developing and scaling micro SaaS applications using artificial intelligence, including market analysis, technical architecture, and monetization strategies.',
      author: 'Michael Rodriguez',
      date: '2025-01-12',
      category: 'Micro SaaS',
      pages: 38,
      downloadCount: 2100,
      fileSize: '1.8 MB',
      image: '/whitepapers/ai-micro-saas.jpg',
      slug: 'ai-powered-micro-saas-guide',
      tags: ['Micro SaaS', 'Artificial Intelligence', 'Business Strategy']
    },
    {
      id: 3,
      title: 'Blockchain Infrastructure for Modern Enterprises',
      description: 'A technical deep-dive into blockchain infrastructure design, implementation best practices, and integration strategies for enterprise environments.',
      author: 'Alex Thompson',
      date: '2025-01-10',
      category: 'Blockchain',
      pages: 52,
      downloadCount: 1800,
      fileSize: '2.7 MB',
      image: '/whitepapers/blockchain-infrastructure.jpg',
      slug: 'blockchain-infrastructure-enterprises',
      tags: ['Blockchain', 'Infrastructure', 'Enterprise Architecture']
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies: A Complete Implementation Guide',
      description: 'Comprehensive guide covering cloud migration planning, execution strategies, cost optimization, and best practices for successful digital transformation.',
      author: 'David Kim',
      date: '2025-01-08',
      category: 'Cloud Computing',
      pages: 41,
      downloadCount: 3200,
      fileSize: '2.1 MB',
      image: '/whitepapers/cloud-migration-strategies.jpg',
      slug: 'cloud-migration-implementation-guide',
      tags: ['Cloud Computing', 'Digital Transformation', 'Migration Strategy']
    },
    {
      id: 5,
      title: 'Cybersecurity in the Age of AI: Threats and Defenses',
      description: 'Analysis of emerging cybersecurity threats in AI-driven environments and comprehensive defense strategies for modern organizations.',
      author: 'Lisa Park',
      date: '2025-01-05',
      category: 'Cybersecurity',
      pages: 36,
      downloadCount: 2800,
      fileSize: '1.9 MB',
      image: '/whitepapers/ai-cybersecurity-threats.jpg',
      slug: 'cybersecurity-age-ai-threats-defenses',
      tags: ['Cybersecurity', 'Artificial Intelligence', 'Threat Analysis']
    },
    {
      id: 6,
      title: 'Edge Computing: Transforming Data Processing at the Source',
      description: 'Exploration of edge computing technologies, use cases, and implementation strategies for reducing latency and improving performance in distributed systems.',
      author: 'Emily Watson',
      date: '2025-01-03',
      category: 'Edge Computing',
      pages: 33,
      downloadCount: 1600,
      fileSize: '1.7 MB',
      image: '/whitepapers/edge-computing-transformation.jpg',
      slug: 'edge-computing-data-processing',
      tags: ['Edge Computing', 'Data Processing', 'Performance Optimization']
=======
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
>>>>>>> main
    }
  ];

  const categories = [
<<<<<<< HEAD
    'All Papers',
    'Quantum Computing',
    'Micro SaaS',
    'Blockchain',
    'Cloud Computing',
    'Cybersecurity',
    'Edge Computing'
  ];
=======
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
>>>>>>> main

  return (
    <MainLayout
      title="Whitepapers - Zion Tech Group"
<<<<<<< HEAD
      description="Access our comprehensive whitepapers covering the latest trends and technologies in AI, quantum computing, blockchain, and more."
      keywords="whitepapers, technology research, AI insights, quantum computing, blockchain, cloud computing, cybersecurity"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Technology Whitepapers & Research
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Access in-depth research and analysis on cutting-edge technologies, 
            industry trends, and implementation strategies from our expert team.
          </motion.p>
        </div>
      </section>

      {/* Whitepapers Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category}>
                        <button className="text-gray-600 hover:text-blue-600 transition-colors text-left w-full">
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Download Stats */}
                <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-lg shadow-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4">Download Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Total Downloads:</span>
                      <span className="font-semibold">12,750+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Active Papers:</span>
                      <span className="font-semibold">6</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg. Rating:</span>
                      <span className="font-semibold">4.8/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Whitepapers Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whitepapers.map((paper, index) => (
                  <motion.article
                    key={paper.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <FileText className="w-12 h-12 mx-auto mb-2" />
                        <div className="text-lg font-bold">{paper.category}</div>
                        <div className="text-sm opacity-80">Whitepaper</div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <Tag className="w-3 h-3 mr-1" />
                          {paper.category}
                        </span>
                        <div className="text-sm text-gray-500">
                          {paper.pages} pages • {paper.fileSize}
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-semibold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                        <Link href={`/whitepapers/${paper.slug}`}>
                          {paper.title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                        {paper.description}
                      </p>
                      
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {paper.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-800">{paper.author}</div>
                            <div className="flex items-center text-xs text-gray-500">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(paper.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-500">
                          {paper.downloadCount.toLocaleString()} downloads
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </button>
                        <Link
                          href={`/whitepapers/${paper.slug}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors px-4 py-2"
                        >
                          Preview
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
=======
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
>>>>>>> main
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Stay Updated with Latest Research
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get notified when we publish new whitepapers and research insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
=======
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
>>>>>>> main
    </MainLayout>
  );
};

export default Whitepapers;