import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { FileText, Download, Calendar, User, ArrowRight, Tag, ExternalLink } from 'lucide-react';

const whitePapers = [
  {
    id: 1,
    title: "The Future of AI in Enterprise: A Comprehensive Guide",
    description: "Explore how artificial intelligence is transforming enterprise operations and what businesses need to know to stay competitive.",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    category: "Artificial Intelligence",
    readTime: "45 min read",
    downloadCount: "2,341",
    downloadUrl: "/downloads/ai-enterprise-guide.pdf",
    featured: true
  },
  {
    id: 2,
    title: "Cloud Migration Strategies for Modern Businesses",
    description: "A detailed guide covering best practices, common pitfalls, and proven strategies for successful cloud migration.",
    author: "Michael Rodriguez",
    date: "2024-01-08",
    category: "Cloud Computing",
    readTime: "35 min read",
    downloadCount: "1,892",
    downloadUrl: "/downloads/cloud-migration-strategies.pdf",
    featured: true
  },
  {
    id: 3,
    title: "Building Scalable SaaS Applications",
    description: "Learn the architectural patterns and development practices needed to build SaaS applications that scale.",
    author: "Emily Johnson",
    date: "2023-12-20",
    category: "Software Development",
    readTime: "40 min read",
    downloadCount: "1,567",
    downloadUrl: "/downloads/scalable-saas-guide.pdf",
    featured: false
  },
  {
    id: 4,
    title: "Cybersecurity in the Digital Age",
    description: "Essential security practices and frameworks for protecting your business in an increasingly connected world.",
    author: "David Kim",
    date: "2023-12-10",
    category: "Cybersecurity",
    readTime: "30 min read",
    downloadCount: "2,103",
    downloadUrl: "/downloads/cybersecurity-guide.pdf",
    featured: false
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
  }
];

const categories = [
<<<<<<< HEAD
  "All Categories",
  "Artificial Intelligence",
  "Cloud Computing", 
  "Software Development",
  "Cybersecurity",
  "Digital Transformation"
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
];

export default function WhitePapersPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All Categories");

  const filteredWhitePapers = whitePapers.filter(paper => 
    selectedCategory === "All Categories" || paper.category === selectedCategory
  );

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>White Papers - Zion Tech Group</title>
        <meta name="description" content="Download our comprehensive white papers on AI, cloud computing, software development, and digital transformation." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-16 h-16 text-indigo-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                  White Papers
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              In-depth insights and research on technology trends and best practices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? "bg-indigo-600 text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Research
              </h2>
              <p className="text-lg text-gray-600">
                Our most popular and comprehensive white papers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {filteredWhitePapers.filter(paper => paper.featured).map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-indigo-100"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">
                        {paper.category}
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                        Featured
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {paper.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-2" />
                        {paper.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(paper.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <FileText className="w-4 h-4 mr-2" />
                        {paper.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {paper.downloadCount} downloads
                      </div>
                      <Link
                        href={paper.downloadUrl}
                        className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* All White Papers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                All White Papers
              </h2>
              <p className="text-lg text-gray-600">
                Explore our complete collection of research and insights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWhitePapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {paper.category}
                      </span>
                      {paper.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {paper.description}
                    </p>
                    
                    <div className="space-y-1 mb-4">
                      <div className="flex items-center text-xs text-gray-500">
                        <User className="w-3 h-3 mr-1" />
                        {paper.author}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(paper.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {paper.downloadCount} downloads
                      </span>
                      <Link
                        href={paper.downloadUrl}
                        className="bg-indigo-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center"
                      >
                        <Download className="w-3 h-3 mr-1" />
                        Download
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Stay Updated with Latest Research
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Get notified when we publish new white papers and research insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Subscribe to Updates
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors inline-flex items-center justify-center"
                >
                  Request Custom Research
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
                </Link>
              </div>
            </motion.div>
          </div>
<<<<<<< HEAD
        </div>
      </section>
    </div>
=======
        </section>
      </div>
    </MainLayout>
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
  );
}