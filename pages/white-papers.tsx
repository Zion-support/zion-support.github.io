import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FileText,
  Download,
  Calendar,
  Eye,
  Search,
  Filter,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';

const whitePapers = [
  {
    id: 1,
    title: "The Future of AI in Business: A Comprehensive Guide",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    category: "AI & Machine Learning",
    description: "Explore how artificial intelligence is transforming business operations and what it means for your organization.",
    downloadCount: 1250,
    pages: 45,
    fileSize: "2.3 MB",
    image: "/images/whitepaper-ai-business.jpg"
  },
  {
    id: 2,
    title: "Cloud Migration Best Practices",
    author: "Mike Chen",
    date: "2024-01-10",
    category: "Cloud Solutions",
    description: "A detailed guide to successfully migrating your infrastructure to the cloud with minimal disruption.",
    downloadCount: 980,
    pages: 32,
    fileSize: "1.8 MB",
    image: "/images/whitepaper-cloud-migration.jpg"
  },
  {
    id: 3,
    title: "Cybersecurity in the Digital Age",
    author: "Alex Rodriguez",
    date: "2024-01-05",
    category: "Security",
    description: "Essential cybersecurity strategies to protect your business from evolving threats.",
    downloadCount: 1500,
    pages: 38,
    fileSize: "2.1 MB",
    image: "/images/whitepaper-cybersecurity.jpg"
  },
  {
    id: 4,
    title: "Data Analytics for Business Growth",
    author: "Dr. Emily Watson",
    date: "2023-12-20",
    category: "Data Analytics",
    description: "Discover how to leverage data analytics to drive business decisions and growth.",
    downloadCount: 750,
    pages: 28,
    fileSize: "1.5 MB",
    image: "/images/whitepaper-data-analytics.jpg"
  }
];

const categories = [
  { id: 'all', name: 'All White Papers' },
  { id: 'ai', name: 'AI & Machine Learning' },
  { id: 'cloud', name: 'Cloud Solutions' },
  { id: 'security', name: 'Security' },
  { id: 'analytics', name: 'Data Analytics' }
];

export default function WhitePapersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPapers = whitePapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           paper.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>White Papers - Zion Tech Group | Technical Research & Insights</title>
        <meta name="description" content="Access our comprehensive collection of technical white papers and research documents covering AI, cloud solutions, cybersecurity, and more." />
        <meta name="keywords" content="white papers, technical research, AI insights, cloud solutions, cybersecurity, data analytics, business intelligence" />
        <meta property="og:title" content="White Papers - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive technical research and insights from industry experts." />
        <meta property="og:url" content="https://ziontechgroup.com/white-papers" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                White{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Papers
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Access our comprehensive collection of technical white papers and research documents.
                Free downloads covering AI, cloud solutions, cybersecurity, and more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Bar */}
        <section className="bg-blue-900 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="flex items-center space-x-6 mb-2 md:mb-0">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-blue-300">+1 302 464 0950</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">kleber@ziontechgroup.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-200">Expert Research & Insights</span>
                <div className="flex space-x-2">
                  <a href="#" className="hover:text-blue-300"><FileText className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-blue-300"><Download className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search white papers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex gap-2">
                  <Filter className="w-5 h-5 text-gray-400 mt-3" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* White Papers List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Research & Insights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In-depth analysis and expert insights on the latest technology trends and business strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {paper.category}
                      </span>
                      <span className="text-sm text-gray-500">{paper.pages} pages</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{paper.title}</h3>
                    <p className="text-gray-600 mb-4">{paper.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="font-medium">By {paper.author}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {paper.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Eye className="w-4 h-4 mr-2" />
                        {paper.downloadCount} downloads
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{paper.fileSize}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Preview
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Custom Research?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our research team can create custom white papers and technical documentation tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Request Custom Research
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}