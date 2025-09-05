import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FileText, 
  Download, 
  Calendar, 
  User, 
  ArrowRight, 
  Star,
  Award,
  Globe,
  Brain,
  Cloud,
  Shield,
  Zap
} from 'lucide-react';

const whitePapers = [
  {
    id: 1,
    title: 'AI-Powered Business Transformation: A Complete Guide',
    description: 'Comprehensive guide on implementing AI solutions to transform your business processes and drive growth.',
    author: 'Dr. Sarah Johnson',
    authorTitle: 'AI Solutions Architect',
    publishDate: '2024-01-15',
    category: 'Artificial Intelligence',
    pages: 45,
    downloadCount: 1250,
    rating: 4.8,
    tags: ['AI', 'Machine Learning', 'Business Transformation', 'Automation'],
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    pdfUrl: '/whitepapers/ai-business-transformation.pdf'
  },
  {
    id: 2,
    title: 'Cloud Migration Strategies: Best Practices and Pitfalls',
    description: 'Learn proven strategies for migrating your infrastructure to the cloud while avoiding common mistakes.',
    author: 'Michael Chen',
    authorTitle: 'Cloud Solutions Engineer',
    publishDate: '2024-01-10',
    category: 'Cloud Computing',
    pages: 32,
    downloadCount: 980,
    rating: 4.6,
    tags: ['Cloud', 'Migration', 'Infrastructure', 'DevOps'],
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    pdfUrl: '/whitepapers/cloud-migration-strategies.pdf'
  },
  {
    id: 3,
    title: 'Cybersecurity in the Digital Age: Threat Landscape 2024',
    description: 'In-depth analysis of current cybersecurity threats and comprehensive defense strategies.',
    author: 'Alex Rodriguez',
    authorTitle: 'Chief Security Officer',
    publishDate: '2024-01-05',
    category: 'Cybersecurity',
    pages: 38,
    downloadCount: 1100,
    rating: 4.9,
    tags: ['Security', 'Threats', 'Defense', 'Compliance'],
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    pdfUrl: '/whitepapers/cybersecurity-threat-landscape.pdf'
  },
  {
    id: 4,
    title: 'Performance Optimization: Advanced Techniques for Modern Applications',
    description: 'Master advanced performance optimization techniques for web and mobile applications.',
    author: 'Emily Watson',
    authorTitle: 'Performance Engineer',
    publishDate: '2023-12-20',
    category: 'Development',
    pages: 28,
    downloadCount: 750,
    rating: 4.7,
    tags: ['Performance', 'Optimization', 'Web Development', 'Mobile'],
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    pdfUrl: '/whitepapers/performance-optimization-techniques.pdf'
  },
  {
    id: 5,
    title: 'Digital Transformation: A Strategic Framework',
    description: 'Strategic framework for successful digital transformation initiatives in enterprise environments.',
    author: 'David Kim',
    authorTitle: 'Digital Transformation Consultant',
    publishDate: '2023-12-15',
    category: 'Digital Transformation',
    pages: 42,
    downloadCount: 890,
    rating: 4.5,
    tags: ['Digital Transformation', 'Strategy', 'Enterprise', 'Innovation'],
    icon: Globe,
    color: 'from-green-500 to-teal-500',
    pdfUrl: '/whitepapers/digital-transformation-framework.pdf'
  },
  {
    id: 6,
    title: 'API Design Patterns: Building Scalable and Maintainable APIs',
    description: 'Comprehensive guide to API design patterns and best practices for building robust APIs.',
    author: 'Lisa Park',
    authorTitle: 'API Architect',
    publishDate: '2023-12-10',
    category: 'API Development',
    pages: 35,
    downloadCount: 650,
    rating: 4.4,
    tags: ['API', 'Design Patterns', 'Scalability', 'Best Practices'],
    icon: FileText,
    color: 'from-indigo-500 to-purple-500',
    pdfUrl: '/whitepapers/api-design-patterns.pdf'
  }
];

const categories = ['All', 'Artificial Intelligence', 'Cloud Computing', 'Cybersecurity', 'Development', 'Digital Transformation', 'API Development'];

export default function WhitePapersPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>White Papers - Zion Tech Group</title>
        <meta name="description" content="Download our comprehensive white papers on technology trends and best practices." />
        <meta name="keywords" content="white papers, research, technology, AI, cloud computing, cybersecurity" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
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

        {/* Filters */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col lg:flex-row gap-6 items-center justify-between"
            >
              {/* Search */}
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search white papers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* White Papers Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredWhitePapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Paper Header */}
                  <div className={`h-32 bg-gradient-to-r ${paper.color} flex items-center justify-center`}>
                    <paper.icon className="w-16 h-16 text-white" />
                  </div>

                  {/* Paper Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {paper.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        {paper.rating}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {paper.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {paper.description}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{paper.author}</p>
                        <p className="text-sm text-gray-600">{paper.authorTitle}</p>
                      </div>
                    </div>

                    {/* Paper Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(paper.publishDate).toLocaleDateString()}
                        </span>
                        <span>{paper.pages} pages</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Download className="w-4 h-4 mr-1" />
                        {paper.downloadCount.toLocaleString()} downloads
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {paper.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {paper.tags.length > 3 && (
                        <span className="text-gray-500 text-xs">
                          +{paper.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Download Button */}
                    <a
                      href={paper.pdfUrl}
                      download
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      Download PDF
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredWhitePapers.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No white papers found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Want to Contribute a White Paper?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Share your expertise with our community by contributing a white paper.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Submit White Paper
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}