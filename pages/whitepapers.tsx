import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Download, FileText, Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';
import Link from 'next/link';

const Whitepapers: NextPage = () => {
  const whitepapers = [
    {
      id: 1,
      title: 'The Future of Artificial Intelligence in Business Operations',
      description: 'A comprehensive analysis of AI trends, implementation strategies, and ROI considerations for modern businesses.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      category: 'Artificial Intelligence',
      pages: 24,
      downloadCount: '2.5K',
      image: '/whitepapers/ai-business-operations.jpg',
      href: '/whitepapers/ai-business-operations-future'
    },
    {
      id: 2,
      title: 'Cloud Migration Strategies: A Complete Guide for Enterprise',
      description: 'Best practices, common pitfalls, and step-by-step guidance for successful cloud migration projects.',
      author: 'Michael Chen',
      date: '2024-01-10',
      category: 'Cloud Computing',
      pages: 32,
      downloadCount: '1.8K',
      image: '/whitepapers/cloud-migration-strategies.jpg',
      href: '/whitepapers/cloud-migration-enterprise-guide'
    },
    {
      id: 3,
      title: 'Cybersecurity Framework for Modern Organizations',
      description: 'Essential security measures, compliance requirements, and threat mitigation strategies for 2024.',
      author: 'Alex Rodriguez',
      date: '2024-01-05',
      category: 'Cybersecurity',
      pages: 28,
      downloadCount: '3.2K',
      image: '/whitepapers/cybersecurity-framework.jpg',
      href: '/whitepapers/cybersecurity-framework-2024'
    },
    {
      id: 4,
      title: 'Micro SaaS Development: Building Profitable Niche Solutions',
      description: 'Market analysis, development strategies, and monetization models for successful micro SaaS products.',
      author: 'Emily Davis',
      date: '2023-12-28',
      category: 'SaaS Development',
      pages: 20,
      downloadCount: '1.5K',
      image: '/whitepapers/micro-saas-development.jpg',
      href: '/whitepapers/micro-saas-development-guide'
    },
    {
      id: 5,
      title: 'Data Analytics and Business Intelligence Trends 2024',
      description: 'Emerging technologies, implementation challenges, and success factors in modern data analytics.',
      author: 'David Kim',
      date: '2023-12-20',
      category: 'Data Analytics',
      pages: 26,
      downloadCount: '2.1K',
      image: '/whitepapers/data-analytics-trends.jpg',
      href: '/whitepapers/data-analytics-trends-2024'
    },
    {
      id: 6,
      title: 'DevOps Automation: Accelerating Software Delivery',
      description: 'CI/CD best practices, tool selection, and organizational transformation strategies for DevOps success.',
      author: 'Lisa Wang',
      date: '2023-12-15',
      category: 'DevOps',
      pages: 22,
      downloadCount: '1.7K',
      image: '/whitepapers/devops-automation.jpg',
      href: '/whitepapers/devops-automation-guide'
    }
  ];

  const categories = [
    'All Categories',
    'Artificial Intelligence',
    'Cloud Computing',
    'Cybersecurity',
    'SaaS Development',
    'Data Analytics',
    'DevOps'
  ];

  return (
    <MainLayout
      title="Whitepapers - Zion Tech Group"
      description="Access our comprehensive whitepapers and research reports on the latest technology trends, best practices, and industry insights."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Reports</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Access our comprehensive whitepapers and research reports on the latest technology trends, 
            best practices, and industry insights from our expert team.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search whitepapers..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Whitepaper */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Research</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {whitepapers[0].category}
                    </span>
                    <span className="text-gray-500 text-sm">{whitepapers[0].pages} pages</span>
                    <span className="text-gray-500 text-sm">{whitepapers[0].downloadCount} downloads</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{whitepapers[0].title}</h3>
                  <p className="text-gray-600 mb-6">{whitepapers[0].description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{whitepapers[0].author}</span>
                      <Calendar className="w-4 h-4 ml-4" />
                      <span>{new Date(whitepapers[0].date).toLocaleDateString()}</span>
                    </div>
                    <Link
                      href={whitepapers[0].href}
                      className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Research Reports</h2>
            <p className="text-gray-600">Comprehensive insights and analysis on technology trends and best practices</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepapers.slice(1).map((paper) => (
              <div key={paper.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-200 h-48"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {paper.category}
                    </span>
                    <span className="text-gray-500 text-xs">{paper.pages} pages</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {paper.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {paper.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{paper.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(paper.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {paper.downloadCount} downloads
                    </span>
                    <Link
                      href={paper.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Download
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Informed
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to receive notifications about new whitepapers, research reports, and industry insights.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Whitepapers;