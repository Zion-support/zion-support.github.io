import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, 
  ArrowRight,
  Download,
  ExternalLink,
  Clock,
  User,
  Calendar,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Building
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const whitePapers = [
  {
    title: "The Future of AI in Enterprise: A Comprehensive Guide",
    description: "Explore how artificial intelligence is transforming enterprise operations and what it means for your business strategy.",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    readTime: "25 min read",
    category: "AI & Machine Learning",
    downloads: 1250,
    featured: true,
    href: "/white-papers/future-ai-enterprise"
  },
  {
    title: "Cloud Migration Best Practices: A Strategic Approach",
    description: "Learn the essential strategies and considerations for successful cloud migration projects.",
    author: "Michael Chen",
    date: "2024-01-10",
    readTime: "20 min read",
    category: "Cloud Computing",
    downloads: 980,
    featured: true,
    href: "/white-papers/cloud-migration-best-practices"
  },
  {
    title: "Cybersecurity in the Digital Age: Protecting Your Assets",
    description: "Comprehensive guide to modern cybersecurity threats and defense strategies for organizations.",
    author: "Lisa Wang",
    date: "2024-01-05",
    readTime: "30 min read",
    category: "Security",
    downloads: 750,
    featured: false,
    href: "/white-papers/cybersecurity-digital-age"
  },
  {
    title: "Digital Transformation: A Roadmap for Success",
    description: "Step-by-step guide to planning and executing successful digital transformation initiatives.",
    author: "David Kim",
    date: "2023-12-20",
    readTime: "22 min read",
    category: "Digital Transformation",
    downloads: 1100,
    featured: false,
    href: "/white-papers/digital-transformation-roadmap"
  },
  {
    title: "IoT Implementation in Manufacturing: Industry 4.0",
    description: "How Internet of Things is revolutionizing manufacturing and industrial processes.",
    author: "Emily Rodriguez",
    date: "2023-12-15",
    readTime: "18 min read",
    category: "IoT & Manufacturing",
    downloads: 650,
    featured: false,
    href: "/white-papers/iot-manufacturing-industry-4"
  },
  {
    title: "Data Analytics and Business Intelligence: Driving Decisions",
    description: "Leverage data analytics to make informed business decisions and gain competitive advantage.",
    author: "James Wilson",
    date: "2023-12-10",
    readTime: "16 min read",
    category: "Data Analytics",
    downloads: 890,
    featured: false,
    href: "/white-papers/data-analytics-business-intelligence"
  }
];

const categories = [
  { name: "All Papers", count: 25, active: true },
  { name: "AI & Machine Learning", count: 8, active: false },
  { name: "Cloud Computing", count: 6, active: false },
  { name: "Security", count: 5, active: false },
  { name: "Digital Transformation", count: 4, active: false },
  { name: "IoT & Manufacturing", count: 2, active: false }
];

const stats = [
  { number: '25+', label: 'White Papers' },
  { number: '50K+', label: 'Downloads' },
  { number: '15+', label: 'Industry Experts' },
  { number: '95%', label: 'Reader Satisfaction' }
];

export default function WhitePapersPage() {
  return (
    <MainLayout 
      title="White Papers - Zion Tech Group"
      description="Access our comprehensive collection of white papers covering AI, cloud computing, cybersecurity, and digital transformation. Expert insights and industry analysis."
      keywords="white papers, research papers, industry analysis, AI research, cloud computing, cybersecurity, digital transformation, business intelligence"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                White <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Papers</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                In-depth research and analysis on the latest technology trends, 
                industry insights, and best practices from our experts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="#featured-papers"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Browse Papers <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/contact"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Request Custom Research
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-8 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                    category.active
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Papers Section */}
        <section id="featured-papers" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Papers</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and impactful white papers covering the latest 
                technology trends and industry insights.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {whitePapers.filter(paper => paper.featured).map((paper, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-white opacity-50" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                        {paper.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {paper.downloads} downloads
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      {paper.description}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-gray-400 text-sm">
                        <User className="w-4 h-4 mr-2" />
                        {paper.author}
                        <Calendar className="w-4 h-4 ml-4 mr-2" />
                        {new Date(paper.date).toLocaleDateString()}
                        <Clock className="w-4 h-4 ml-4 mr-2" />
                        {paper.readTime}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link 
                        href={paper.href}
                        className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group"
                      >
                        Read Paper <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                      <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All Papers Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                All <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">White Papers</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete collection of our research papers and industry analysis.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitePapers.map((paper, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                      {paper.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {paper.downloads}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {paper.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {paper.description}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-gray-400 text-sm">
                      <User className="w-4 h-4 mr-2" />
                      {paper.author}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {paper.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link 
                      href={paper.href}
                      className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group"
                    >
                      Read More <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      PDF
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need Custom Research?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our research team can create custom white papers and analysis 
                tailored to your specific industry and business needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Request Custom Research <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/resources"
                  className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Browse All Resources
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}