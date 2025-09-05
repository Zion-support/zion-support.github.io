import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FileText, 
  Download, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronUp,
  BookOpen,
  Globe,
  Award,
  Star,
  Eye,
  Clock,
  ExternalLink,
  Share2,
  Bookmark,
  MessageSquare,
  ThumbsUp,
  TrendingUp,
  BarChart3,
  Lightbulb,
  Target,
  Zap
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const whitePapers = [
  {
    id: 1,
    title: "The Future of AI in Business: A Comprehensive Guide",
    description: "Explore how artificial intelligence is transforming business operations and discover practical strategies for implementation.",
    author: "Dr. Sarah Johnson",
    publishDate: "2024-01-15",
    category: "AI & Machine Learning",
    tags: ["AI", "Business", "Strategy", "Innovation"],
    downloadCount: 1250,
    rating: 4.8,
    featured: true,
    image: "/images/whitepapers/ai-future.jpg",
    fileSize: "2.4 MB",
    pages: 45,
    summary: "This comprehensive white paper examines the current state of AI in business and provides actionable insights for organizations looking to leverage artificial intelligence for competitive advantage.",
    keyPoints: [
      "Current AI adoption trends across industries",
      "ROI analysis of AI implementations",
      "Best practices for AI strategy development",
      "Case studies from leading companies",
      "Future predictions and recommendations"
    ]
  },
  {
    id: 2,
    title: "Cloud Migration Strategies: A Step-by-Step Guide",
    description: "Learn the essential strategies and best practices for successful cloud migration with minimal disruption.",
    author: "Michael Chen",
    publishDate: "2024-01-10",
    category: "Cloud Computing",
    tags: ["Cloud", "Migration", "Strategy", "Best Practices"],
    downloadCount: 980,
    rating: 4.6,
    featured: true,
    image: "/images/whitepapers/cloud-migration.jpg",
    fileSize: "1.8 MB",
    pages: 32,
    summary: "A detailed guide covering all aspects of cloud migration, from planning and assessment to execution and optimization.",
    keyPoints: [
      "Pre-migration assessment framework",
      "Choosing the right cloud provider",
      "Data migration strategies",
      "Security considerations",
      "Cost optimization techniques"
    ]
  },
  {
    id: 3,
    title: "Cybersecurity in the Digital Age: Threats and Solutions",
    description: "Comprehensive analysis of modern cybersecurity threats and effective defense strategies for organizations.",
    author: "Alex Rodriguez",
    publishDate: "2024-01-05",
    category: "Cybersecurity",
    tags: ["Security", "Threats", "Defense", "Risk Management"],
    downloadCount: 1100,
    rating: 4.9,
    featured: false,
    image: "/images/whitepapers/cybersecurity.jpg",
    fileSize: "3.1 MB",
    pages: 52,
    summary: "An in-depth analysis of current cybersecurity landscape, emerging threats, and proven defense mechanisms.",
    keyPoints: [
      "Evolution of cyber threats",
      "Zero-trust security model",
      "Incident response planning",
      "Employee training strategies",
      "Compliance and regulations"
    ]
  },
  {
    id: 4,
    title: "Micro SaaS Success: Building Profitable Products",
    description: "Learn how to build and scale successful Micro SaaS products that solve specific business problems.",
    author: "Emily Davis",
    publishDate: "2023-12-28",
    category: "Product Development",
    tags: ["SaaS", "Product", "Entrepreneurship", "Scaling"],
    downloadCount: 750,
    rating: 4.7,
    featured: false,
    image: "/images/whitepapers/micro-saas.jpg",
    fileSize: "2.2 MB",
    pages: 38,
    summary: "A practical guide to building and scaling Micro SaaS products, covering everything from ideation to market success.",
    keyPoints: [
      "Market research and validation",
      "Product development lifecycle",
      "Pricing strategies",
      "Marketing and growth",
      "Scaling and optimization"
    ]
  },
  {
    id: 5,
    title: "Data Analytics for Business Intelligence",
    description: "Transform your data into actionable insights with advanced analytics and business intelligence tools.",
    author: "David Kim",
    publishDate: "2023-12-20",
    category: "Data Analytics",
    tags: ["Analytics", "Data", "Business Intelligence", "Insights"],
    downloadCount: 890,
    rating: 4.5,
    featured: false,
    image: "/images/whitepapers/data-analytics.jpg",
    fileSize: "2.7 MB",
    pages: 41,
    summary: "Comprehensive guide to leveraging data analytics for business intelligence and decision-making.",
    keyPoints: [
      "Data collection and preparation",
      "Analytics tools and platforms",
      "Visualization techniques",
      "Predictive analytics",
      "ROI measurement"
    ]
  },
  {
    id: 6,
    title: "DevOps Best Practices: Accelerating Software Delivery",
    description: "Implement DevOps practices to accelerate software delivery and improve team collaboration.",
    author: "Lisa Wang",
    publishDate: "2023-12-15",
    category: "DevOps",
    tags: ["DevOps", "CI/CD", "Automation", "Collaboration"],
    downloadCount: 650,
    rating: 4.8,
    featured: false,
    image: "/images/whitepapers/devops.jpg",
    fileSize: "1.9 MB",
    pages: 35,
    summary: "A practical guide to implementing DevOps practices and tools for faster, more reliable software delivery.",
    keyPoints: [
      "DevOps culture and principles",
      "CI/CD pipeline implementation",
      "Infrastructure as Code",
      "Monitoring and logging",
      "Team collaboration strategies"
    ]
  },
  {
    id: 7,
    title: "Blockchain Technology: Beyond Cryptocurrency",
    description: "Explore the practical applications of blockchain technology in various industries beyond cryptocurrency.",
    author: "Robert Smith",
    publishDate: "2023-12-10",
    category: "Blockchain",
    tags: ["Blockchain", "Technology", "Innovation", "Applications"],
    downloadCount: 720,
    rating: 4.4,
    featured: false,
    image: "/images/whitepapers/blockchain.jpg",
    fileSize: "2.5 MB",
    pages: 43,
    summary: "Comprehensive analysis of blockchain technology applications across different industries and use cases.",
    keyPoints: [
      "Blockchain fundamentals",
      "Industry applications",
      "Implementation challenges",
      "Future potential",
      "Regulatory considerations"
    ]
  },
  {
    id: 8,
    title: "IoT Implementation: Connecting the Physical and Digital Worlds",
    description: "Learn how to successfully implement IoT solutions to connect and manage physical devices and systems.",
    author: "Jennifer Lee",
    publishDate: "2023-12-05",
    category: "IoT",
    tags: ["IoT", "Connected Devices", "Implementation", "Management"],
    downloadCount: 580,
    rating: 4.6,
    featured: false,
    image: "/images/whitepapers/iot.jpg",
    fileSize: "2.1 MB",
    pages: 39,
    summary: "A detailed guide to implementing IoT solutions, covering technology selection, deployment, and management.",
    keyPoints: [
      "IoT architecture design",
      "Device selection and integration",
      "Data management strategies",
      "Security considerations",
      "Scalability planning"
    ]
  }
];

const categories = [
  "All",
  "AI & Machine Learning",
  "Cloud Computing",
  "Cybersecurity",
  "Product Development",
  "Data Analytics",
  "DevOps",
  "Blockchain",
  "IoT"
];

export default function WhitePapersPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sortBy, setSortBy] = React.useState("newest");

  const filteredWhitePapers = whitePapers
    .filter(paper => {
      const matchesCategory = selectedCategory === "All" || paper.category === selectedCategory;
      const matchesSearch = searchTerm === "" || 
        paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.author.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
        case "oldest":
          return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
        case "popular":
          return b.downloadCount - a.downloadCount;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <MainLayout
      title="White Papers - Zion Tech Group"
      description="Access our comprehensive collection of white papers covering AI, cloud computing, cybersecurity, and more. Download free resources to stay ahead of technology trends."
      keywords="white papers, research, technology insights, AI, cloud computing, cybersecurity, business intelligence, free resources"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <FileText className="w-16 h-16 text-purple-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  White Papers
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Access our comprehensive collection of research papers and insights 
                from industry experts. Stay ahead of technology trends with our free resources.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search white papers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured White Papers */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Featured White Papers
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Don't miss these popular research papers that have helped thousands of professionals 
                understand complex technology concepts and industry trends.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWhitePapers.filter(p => p.featured).map((paper, index) => (
                <motion.div
                  key={paper.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <FileText className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        FREE
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {paper.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {paper.description}
                    </p>
                    
                    <div className="flex items-center mb-4">
                      <User className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{paper.author}</span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{paper.publishDate}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Download className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{paper.downloadCount} downloads</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-500 mr-1" />
                        <span className="text-sm text-gray-600">{paper.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                      <span>{paper.pages} pages</span>
                      <span>{paper.fileSize}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.tags.map((tag, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center">
                        <Download className="w-4 h-4 inline mr-2" />
                        Download
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All White Papers */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                All White Papers
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Browse our complete library of white papers covering various technology topics 
                and industry insights.
              </p>
            </motion.div>

            <div className="space-y-6">
              {filteredWhitePapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                          {paper.category}
                        </span>
                        {paper.featured && (
                          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {paper.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {paper.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {paper.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {paper.publishDate}
                        </div>
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          {paper.downloadCount} downloads
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-500" />
                          {paper.rating}
                        </div>
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-1" />
                          {paper.pages} pages
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {paper.fileSize}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {paper.tags.map((tag, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <button className="w-full lg:w-auto bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                        <Download className="w-4 h-4 inline mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredWhitePapers.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No white papers found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search criteria or browse all white papers.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSortBy('newest');
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated with Our Research
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to get notified about new white papers 
                and exclusive research content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Subscribe Now
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}