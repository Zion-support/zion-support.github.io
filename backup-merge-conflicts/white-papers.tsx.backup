<<<<<<< HEAD

const whitePapers = [;
  {}
    id: 1,
    title: "The Future of AI in Enterprise: A Comprehensive Guide","
    description: "Explore how artificial intelligence is transforming enterprise operations and what businesses need to know to stay competitive.","
    author: "Dr. Sarah Chen","
    date: "2024-01-15","
    category: "Artificial Intelligence","
    readTime: "45 min read","
    downloadCount: "2,341","
    featured: true,
    pdfUrl: "/whitepapers/ai-enterprise-guide.pdf""
  },
  {}
    id: 2,
    title: "Cloud Security Best Practices for Modern Businesses","
    description: "A detailed analysis of cloud security challenges and proven strategies to protect your organization's data and infrastructure.","
    author: "Michael Rodriguez","
    date: "2024-01-10","
    category: "Cybersecurity","
    readTime: "30 min read","
    downloadCount: "1,876","
    featured: false,
    pdfUrl: "/whitepapers/cloud-security-best-practices.pdf""
  },
  {}
    id: 3,
    title: "Quantum Computing: The Next Frontier in Technology","
    description: "Understanding quantum computing's potential impact on various industries and how to prepare for the quantum revolution.","
    author: "Dr. Alex Thompson","
    date: "2024-01-05","
    category: "Quantum Computing","
    readTime: "60 min read","
    downloadCount: "1,234","
    featured: false,
    pdfUrl: "/whitepapers/quantum-computing-frontier.pdf""
  },
  {}
    id: 4,
    title: "Digital Transformation Strategies for Healthcare","
    description: "How healthcare organizations can leverage technology to improve patient outcomes and operational efficiency.","
    author: "Jennifer Lee","
    date: "2023-12-28","
    category: "Healthcare Technology","
    readTime: "40 min read","
    downloadCount: "987","
    featured: false,
    pdfUrl: "/whitepapers/healthcare-digital-transformation.pdf""
  },
  {}
    id: 5,
    title: "The Economics of Micro SaaS: Building Profitable Solutions","
    description: "A comprehensive guide to building, launching, and scaling micro SaaS applications for sustainable business growth.","
    author: "David Kim","
    date: "2023-12-20","
    category: "SaaS","
    readTime: "35 min read","
    downloadCount: "1,567","
    featured: false,
    pdfUrl: "/whitepapers/micro-saas-economics.pdf""
  },
  {}
    id: 6,
    title: "Data Privacy in the Age of AI: Compliance and Best Practices","
    description: "Navigating the complex landscape of data privacy regulations while implementing AI solutions effectively.","
    author: "Emma Wilson","
    date: "2023-12-15","
    category: "Data Privacy","
    readTime: "50 min read","
    downloadCount: "1,123","
    featured: false,
    pdfUrl: "/whitepapers/data-privacy-ai-compliance.pdf""
import { FileText, Download, Calendar, Eye } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
=======
import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Download, 
  FileText, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Clock,
  TrendingUp,
  Award,
  Users,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  BarChart3,
  Target,
  CheckCircle,
  Star,
  MessageSquare,
  BookOpen,
  Building,
  Heart,
  DollarSign,
  Settings,
  Code,
  Network,
  Lock,
  Eye,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Layout from '../components/Layout';

const whitePaperCategories = [
  { name: 'AI & Machine Learning', count: 8, color: 'bg-blue-100 text-blue-800' },
  { name: 'Cybersecurity', count: 6, color: 'bg-red-100 text-red-800' },
  { name: 'Cloud Computing', count: 5, color: 'bg-green-100 text-green-800' },
  { name: 'Data Analytics', count: 7, color: 'bg-purple-100 text-purple-800' },
  { name: 'Digital Transformation', count: 4, color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Industry Insights', count: 9, color: 'bg-indigo-100 text-indigo-800' }
];

const featuredPapers = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise: A Comprehensive Guide to Implementation',
    excerpt: 'Explore how artificial intelligence is transforming enterprise operations and learn best practices for successful AI implementation.',
    category: 'AI & Machine Learning',
    author: 'Dr. Sarah Chen',
    date: '2025-01-15',
    readTime: '25 min read',
    pages: 45,
    downloads: 1250,
    featured: true,
    tags: ['AI', 'Enterprise', 'Implementation', 'Future Tech'],
    downloadUrl: '/whitepapers/ai-enterprise-guide.pdf'
  },
  {
    id: 2,
    title: 'Cybersecurity in the Age of Quantum Computing: Preparing for the Future',
    excerpt: 'Understand the implications of quantum computing on cybersecurity and learn how to prepare your organization for the quantum era.',
    category: 'Cybersecurity',
    author: 'Michael Rodriguez',
    date: '2025-01-10',
    readTime: '30 min read',
    pages: 52,
    downloads: 980,
    featured: true,
    tags: ['Cybersecurity', 'Quantum Computing', 'Future Security'],
    downloadUrl: '/whitepapers/quantum-cybersecurity.pdf'
  },
  {
    id: 3,
    title: 'Cloud Migration Strategies: A Step-by-Step Guide for Enterprise',
    excerpt: 'Comprehensive guide to planning and executing successful cloud migration projects with real-world case studies.',
    category: 'Cloud Computing',
    author: 'Lisa Wang',
    date: '2025-01-05',
    readTime: '35 min read',
    pages: 60,
    downloads: 2100,
    featured: true,
    tags: ['Cloud Migration', 'Enterprise', 'Strategy'],
    downloadUrl: '/whitepapers/cloud-migration-guide.pdf'
  }
];

const recentPapers = [
  {
    id: 4,
    title: 'Data Analytics for Healthcare: Improving Patient Outcomes',
    excerpt: 'How healthcare organizations can leverage data analytics to improve patient care and operational efficiency.',
    category: 'Data Analytics',
    author: 'Dr. James Wilson',
    date: '2025-01-03',
    readTime: '20 min read',
    pages: 32,
    downloads: 750,
    tags: ['Healthcare', 'Data Analytics', 'Patient Care']
  },
  {
    id: 5,
    title: 'Digital Transformation in Manufacturing: Industry 4.0 Implementation',
    excerpt: 'A comprehensive look at how manufacturers can embrace Industry 4.0 technologies for competitive advantage.',
    category: 'Digital Transformation',
    author: 'Maria Garcia',
    date: '2024-12-28',
    readTime: '28 min read',
    pages: 48,
    downloads: 890,
    tags: ['Manufacturing', 'Industry 4.0', 'Digital Transformation']
  },
  {
    id: 6,
    title: 'The State of FinTech: Trends and Opportunities in 2025',
    excerpt: 'Analysis of current FinTech trends and emerging opportunities in the financial technology sector.',
    category: 'Industry Insights',
    author: 'David Kim',
    date: '2024-12-20',
    readTime: '22 min read',
    pages: 38,
    downloads: 1100,
    tags: ['FinTech', 'Trends', 'Financial Technology']
  },
  {
    id: 7,
    title: 'IoT Security Best Practices: Protecting Connected Devices',
    excerpt: 'Essential security measures for protecting Internet of Things devices and networks.',
    category: 'Cybersecurity',
    author: 'Emily Johnson',
    date: '2024-12-15',
    readTime: '18 min read',
    pages: 28,
    downloads: 650,
    tags: ['IoT', 'Security', 'Connected Devices']
  }
];

const stats = [
  { number: '25+', label: 'White Papers' },
  { number: '10K+', label: 'Downloads' },
  { number: '15+', label: 'Industry Experts' },
  { number: '95%', label: 'Reader Satisfaction' }
=======
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Calendar, 
  User, 
  ArrowRight, 
  Tag, 
  ExternalLink 
} from 'lucide-react';
>>>>>>> main

const whitePapers = [
  {
    id: 1,
    title: "The Future of AI in Enterprise: A Comprehensive Guide",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    category: "Artificial Intelligence",
    description: "Explore how artificial intelligence is transforming enterprise operations and what it means for your business.",
    downloadCount: 1250
  },
  {
    id: 2,
    title: "Cloud Migration Strategies: Best Practices and Pitfalls",
    author: "Michael Rodriguez",
    date: "2024-01-10",
    category: "Cloud Computing",
    description: "Learn the essential strategies for successful cloud migration and avoid common mistakes.",
    downloadCount: 980
  },
  {
<<<<<<< HEAD
    title: 'Cybersecurity Best Practices 2024',
    description: 'Latest cybersecurity trends and protection strategies for modern businesses.',
    category: 'Cybersecurity',
    downloadCount: 1500,
    publishDate: '2024-01-05',
    downloadLink: '/downloads/cybersecurity-best-practices.pdf'
  }
;];

=======
    id: 3,
    title: "Cybersecurity in the Digital Age: Protecting Your Assets",
    author: "Emily Johnson",
    date: "2024-01-05",
    category: "Cybersecurity",
    description: "Comprehensive guide to modern cybersecurity threats and how to protect your organization.",
    downloadCount: 1500
  },
  {
    id: 4,
    title: "Data Analytics: Turning Information into Insights",
    author: "David Kim",
    date: "2023-12-20",
    category: "Data Analytics",
    description: "Discover how to leverage data analytics to drive business decisions and growth.",
    downloadCount: 750
  }
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
>>>>>>> main
];

export default function WhitePapersPage() {
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <Layout
      title="White Papers - Zion Tech Group"
      description="Access our comprehensive collection of white papers covering AI, cybersecurity, cloud computing, and digital transformation topics."
      keywords="white papers, research, AI, cybersecurity, cloud computing, digital transformation, industry insights, technology reports"
      canonical="https://ziontechgroup.com/white-papers"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                White Papers
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                In-depth research and insights on the latest technology trends and industry developments
=======
    <>
      <Head>
        <title>White Papers - Zion Tech Group</title>
        <meta name="description" content="Download our comprehensive white papers on technology trends and best practices." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">White Papers</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Download our comprehensive white papers on technology trends and best practices.
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
>>>>>>> main
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
=======
        {/* White Papers List */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & Insights</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access our latest research and insights on technology trends.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whitePapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-500">{paper.category}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Download className="w-4 h-4 mr-1" />
                      {paper.downloadCount}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                  <p className="text-gray-600 mb-4">{paper.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {paper.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {paper.date}
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </button>
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
<<<<<<< HEAD
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Categories</h2>
              <p className="text-lg text-gray-600">Browse white papers by topic</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {whitePaperCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${category.color}`}>
                    {category.name}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{category.count}</div>
                  <div className="text-sm text-gray-500">papers</div>
=======
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find white papers by technology area.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Artificial Intelligence', 'Cloud Computing', 'Cybersecurity', 'Data Analytics'].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <Tag className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-sm font-medium">{category}</span>
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
>>>>>>> main
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
              </Link>
=======
<<<<<<< HEAD
        {/* Featured White Papers */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured White Papers</h2>
              <p className="text-xl text-gray-600">Our most popular and comprehensive research</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredPapers.map((paper, index) => (
                <motion.article
                  key={paper.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        {paper.category}
                      </span>
                      <span className="text-sm text-gray-500">{paper.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {paper.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.tags.map((tag, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {paper.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(paper.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        {paper.pages} pages
                      </div>
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        {paper.downloads.toLocaleString()} downloads
                      </div>
                    </div>
                    
                    <a
                      href={paper.downloadUrl}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent White Papers */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent White Papers</h2>
              <p className="text-xl text-gray-600">Latest research and insights</p>
            </div>
            
            <div className="space-y-6">
              {recentPapers.map((paper, index) => (
                <motion.article
                  key={paper.id}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full mr-3">
                          {paper.category}
                        </span>
                        <span className="text-sm text-gray-500">{paper.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {paper.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-3">
                        {paper.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {paper.tags.map((tag, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        <span className="mr-4">{paper.author}</span>
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="mr-4">{new Date(paper.date).toLocaleDateString()}</span>
                        <FileText className="w-4 h-4 mr-1" />
                        <span className="mr-4">{paper.pages} pages</span>
                        <Download className="w-4 h-4 mr-1" />
                        <span>{paper.downloads.toLocaleString()} downloads</span>
                      </div>
                    </div>
                    
                    <a
                      href={paper.downloadUrl}
                      className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a
                href="/white-papers/archive"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                View All White Papers <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Informed</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Get notified when we publish new white papers and research insights
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
=======
        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Custom Research?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact us for custom research and analysis tailored to your specific needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/research"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View All Research
                </Link>
              </div>
>>>>>>> main
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
=======
    </>
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
>>>>>>> main
  );
}