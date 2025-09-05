import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, 
  ArrowRight,
  Download,
  Calendar,
  User,
  Tag,
  ExternalLink,
  Star,
  Clock,
  Eye,
  Share2,
  BookOpen,
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Settings,
  Code,
  Database,
  Network,
  Globe,
  Target,
  Zap,
  Award,
  CheckCircle,
  TrendingUp,
  Users,
  Building
} from 'lucide-react';

const whitePapers = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence in Business",
    description: "A comprehensive analysis of how AI is transforming business operations and what companies need to know to stay competitive.",
    author: "Dr. Sarah Johnson",
    publishDate: "2024-01-15",
    readTime: "15 min",
    category: "AI & Machine Learning",
    downloadCount: "3,247",
    rating: 4.8,
    featured: true,
    image: "/images/whitepaper-1.jpg",
    topics: [
      "AI implementation strategies",
      "ROI measurement frameworks",
      "Ethical considerations",
      "Future trends and predictions"
    ],
    downloadUrl: "/downloads/ai-future-business.pdf"
  },
  {
    id: 2,
    title: "Cloud Security Best Practices for Enterprise",
    description: "Essential security guidelines and best practices for organizations migrating to or operating in cloud environments.",
    author: "Michael Chen",
    publishDate: "2024-01-08",
    readTime: "12 min",
    category: "Cybersecurity",
    downloadCount: "2,891",
    rating: 4.9,
    featured: true,
    image: "/images/whitepaper-2.jpg",
    topics: [
      "Cloud security frameworks",
      "Data protection strategies",
      "Compliance requirements",
      "Incident response planning"
    ],
    downloadUrl: "/downloads/cloud-security-enterprise.pdf"
  },
  {
    id: 3,
    title: "Digital Transformation: A Strategic Guide",
    description: "A step-by-step guide to digital transformation, covering strategy, implementation, and measuring success.",
    author: "Emily Rodriguez",
    publishDate: "2023-12-20",
    readTime: "18 min",
    category: "Digital Transformation",
    downloadCount: "2,103",
    rating: 4.7,
    featured: false,
    image: "/images/whitepaper-3.jpg",
    topics: [
      "Transformation strategy development",
      "Technology selection criteria",
      "Change management approaches",
      "Success metrics and KPIs"
    ],
    downloadUrl: "/downloads/digital-transformation-guide.pdf"
  },
  {
    id: 4,
    title: "Micro SaaS: Building Scalable Software Solutions",
    description: "Complete guide to developing, launching, and scaling micro SaaS applications for maximum impact.",
    author: "David Kim",
    publishDate: "2023-12-10",
    readTime: "14 min",
    category: "Software Development",
    downloadCount: "1,856",
    rating: 4.6,
    featured: false,
    image: "/images/whitepaper-4.jpg",
    topics: [
      "Market research and validation",
      "Technical architecture decisions",
      "Go-to-market strategies",
      "Scaling and growth tactics"
    ],
    downloadUrl: "/downloads/micro-saas-guide.pdf"
  },
  {
    id: 5,
    title: "Data Analytics for Competitive Advantage",
    description: "How to leverage data analytics to gain competitive advantage and drive business growth.",
    author: "Lisa Wang",
    publishDate: "2023-11-28",
    readTime: "16 min",
    category: "Data Analytics",
    downloadCount: "1,742",
    rating: 4.5,
    featured: false,
    image: "/images/whitepaper-5.jpg",
    topics: [
      "Data strategy development",
      "Analytics tools and platforms",
      "Creating actionable insights",
      "Building data-driven culture"
    ],
    downloadUrl: "/downloads/data-analytics-advantage.pdf"
  },
  {
    id: 6,
    title: "IoT Security: Protecting Connected Devices",
    description: "Comprehensive security framework for Internet of Things implementations in enterprise environments.",
    author: "Robert Martinez",
    publishDate: "2023-11-15",
    readTime: "13 min",
    category: "Cybersecurity",
    downloadCount: "1,634",
    rating: 4.4,
    featured: false,
    image: "/images/whitepaper-6.jpg",
    topics: [
      "IoT threat landscape",
      "Security architecture design",
      "Device management strategies",
      "Monitoring and response"
    ],
    downloadUrl: "/downloads/iot-security-guide.pdf"
  }
];

const categories = [
  { name: "AI & Machine Learning", count: 8, icon: Brain },
  { name: "Cybersecurity", count: 6, icon: Shield },
  { name: "Cloud Computing", count: 5, icon: Cloud },
  { name: "Data Analytics", count: 4, icon: BarChart3 },
  { name: "Software Development", count: 7, icon: Code },
  { name: "Digital Transformation", count: 3, icon: Target }
];

const featuredPapers = whitePapers.filter(paper => paper.featured);
const regularPapers = whitePapers.filter(paper => !paper.featured);

export default function WhitePapersPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                White Papers & Research
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Access our comprehensive collection of white papers, research reports, 
                and industry insights to stay ahead of the curve.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Browse by Category
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find white papers and research that match your interests and expertise level.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{category.name}</h3>
                    <p className="text-xs text-gray-600">{category.count} papers</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured White Papers */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured White Papers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our most popular and highly-rated white papers that provide valuable insights 
                and actionable strategies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <FileText className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                    <div className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {paper.readTime}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {paper.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{paper.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{paper.description}</p>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span>{paper.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{paper.publishDate}</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        <span>{paper.downloadCount} downloads</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-2 text-yellow-500" />
                        <span>{paper.rating}/5 rating</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Topics:</h4>
                      <ul className="space-y-1">
                        {paper.topics.slice(0, 3).map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center text-xs text-gray-700">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="flex-1 flex items-center justify-center py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                      <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All White Papers */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                All White Papers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our complete collection of white papers and research reports.
              </p>
            </motion.div>

            <div className="space-y-6">
              {regularPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold mr-3">
                          {paper.category}
                        </span>
                        <span className="text-sm text-gray-600">{paper.readTime} read</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{paper.title}</h3>
                      <p className="text-gray-600 mb-4">{paper.description}</p>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>{paper.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{paper.publishDate}</span>
                        </div>
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          <span>{paper.downloadCount} downloads</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-500" />
                          <span>{paper.rating}/5</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 mt-4 lg:mt-0">
                      <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                      <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </button>
                      <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Stay Informed
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to get notified about new white papers, 
                research reports, and industry insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                />
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}