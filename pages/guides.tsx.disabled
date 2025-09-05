import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  User, 
  ArrowRight,
  Search,
  Filter,
  CheckCircle,
  Star,
  Download,
  ExternalLink,
  Code,
  Shield,
  Zap,
  Globe,
  Database,
  Smartphone
} from 'lucide-react';

const guideCategories = [
  { name: "All", count: 20, active: true },
  { name: "Getting Started", count: 5, active: false },
  { name: "Development", count: 6, active: false },
  { name: "Security", count: 4, active: false },
  { name: "Performance", count: 3, active: false },
  { name: "DevOps", count: 2, active: false }
];

const guides = [
  {
    id: 1,
    title: "Complete Guide to Technology Stack Selection",
    description: "Learn how to choose the right technology stack for your project based on requirements, team expertise, and scalability needs.",
    category: "Development",
    author: "Sarah Chen",
    readTime: "15 min read",
    difficulty: "Beginner",
    rating: 4.8,
    downloads: 2500,
    lastUpdated: "2024-01-15",
    featured: true,
    tags: ["Technology", "Architecture", "Decision Making", "Best Practices"],
    sections: [
      "Understanding Your Requirements",
      "Evaluating Technology Options",
      "Team Expertise Assessment",
      "Scalability Considerations",
      "Making the Final Decision"
    ]
  },
  {
    id: 2,
    title: "Security Implementation Guide for Web Applications",
    description: "Comprehensive security practices and implementation strategies to protect your web applications from common vulnerabilities.",
    category: "Security",
    author: "David Kim",
    readTime: "25 min read",
    difficulty: "Intermediate",
    rating: 4.9,
    downloads: 1800,
    lastUpdated: "2024-01-10",
    featured: true,
    tags: ["Security", "Web Development", "OWASP", "Authentication"],
    sections: [
      "Authentication and Authorization",
      "Input Validation and Sanitization",
      "HTTPS and SSL/TLS",
      "Session Management",
      "Security Headers",
      "Regular Security Audits"
    ]
  },
  {
    id: 3,
    title: "Performance Optimization Techniques",
    description: "Proven techniques and strategies to optimize your applications for better performance and user experience.",
    category: "Performance",
    author: "Michael Rodriguez",
    readTime: "20 min read",
    difficulty: "Intermediate",
    rating: 4.7,
    downloads: 2200,
    lastUpdated: "2024-01-08",
    featured: false,
    tags: ["Performance", "Optimization", "Caching", "Database"],
    sections: [
      "Frontend Optimization",
      "Backend Performance",
      "Database Optimization",
      "Caching Strategies",
      "CDN Implementation"
    ]
  },
  {
    id: 4,
    title: "Getting Started with Cloud Infrastructure",
    description: "Step-by-step guide to setting up and managing cloud infrastructure for your applications.",
    category: "Getting Started",
    author: "Emily Johnson",
    readTime: "18 min read",
    difficulty: "Beginner",
    rating: 4.6,
    downloads: 3200,
    lastUpdated: "2024-01-05",
    featured: false,
    tags: ["Cloud", "AWS", "Infrastructure", "DevOps"],
    sections: [
      "Cloud Service Providers",
      "Setting Up Your First Instance",
      "Networking and Security",
      "Monitoring and Logging",
      "Cost Optimization"
    ]
  },
  {
    id: 5,
    title: "API Design and Development Best Practices",
    description: "Learn how to design and develop robust, scalable APIs that follow industry best practices.",
    category: "Development",
    author: "Alex Thompson",
    readTime: "22 min read",
    difficulty: "Intermediate",
    rating: 4.8,
    downloads: 1900,
    lastUpdated: "2024-01-03",
    featured: false,
    tags: ["API", "REST", "GraphQL", "Documentation"],
    sections: [
      "API Design Principles",
      "RESTful API Guidelines",
      "Error Handling",
      "Versioning Strategies",
      "Documentation Best Practices"
    ]
  },
  {
    id: 6,
    title: "Database Design and Optimization",
    description: "Comprehensive guide to designing efficient databases and optimizing performance for your applications.",
    category: "Development",
    author: "Maria Garcia",
    readTime: "30 min read",
    difficulty: "Advanced",
    rating: 4.9,
    downloads: 1600,
    lastUpdated: "2023-12-28",
    featured: false,
    tags: ["Database", "SQL", "NoSQL", "Performance"],
    sections: [
      "Database Design Principles",
      "Normalization and Denormalization",
      "Indexing Strategies",
      "Query Optimization",
      "Scaling Considerations"
    ]
  },
  {
    id: 7,
    title: "Mobile App Development Guide",
    description: "Complete guide to developing mobile applications for iOS and Android platforms.",
    category: "Development",
    author: "John Smith",
    readTime: "35 min read",
    difficulty: "Intermediate",
    rating: 4.7,
    downloads: 2100,
    lastUpdated: "2023-12-25",
    featured: false,
    tags: ["Mobile", "React Native", "iOS", "Android"],
    sections: [
      "Platform Selection",
      "Development Environment Setup",
      "UI/UX Design Principles",
      "Testing Strategies",
      "App Store Deployment"
    ]
  },
  {
    id: 8,
    title: "DevOps Implementation Guide",
    description: "Learn how to implement DevOps practices to improve your development and deployment processes.",
    category: "DevOps",
    author: "Lisa Wang",
    readTime: "28 min read",
    difficulty: "Advanced",
    rating: 4.8,
    downloads: 1400,
    lastUpdated: "2023-12-20",
    featured: false,
    tags: ["DevOps", "CI/CD", "Docker", "Kubernetes"],
    sections: [
      "DevOps Culture and Principles",
      "CI/CD Pipeline Setup",
      "Containerization with Docker",
      "Orchestration with Kubernetes",
      "Monitoring and Logging"
    ]
  }
];

const featuredGuides = guides.filter(guide => guide.featured);
const regularGuides = guides.filter(guide => !guide.featured);

export default function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGuides = guides.filter(guide => {
    const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout 
      title="Guides - Zion Tech Group"
      description="Comprehensive implementation guides covering development, security, performance, and DevOps. Expert-written guides for all skill levels."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Implementation{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Guides
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Comprehensive guides written by our experts to help you implement 
                best practices and solve complex technical challenges.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search guides..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {guideCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                        selectedCategory === category.name
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Guides</h2>
              <p className="text-lg text-gray-600">Hand-picked guides from our expert team</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredGuides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 border-blue-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {guide.category}
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                          Featured
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        {guide.rating}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {guide.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {guide.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">What you'll learn:</h4>
                      <ul className="space-y-1">
                        {guide.sections.slice(0, 3).map((section, sectionIndex) => (
                          <li key={sectionIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {section}
                          </li>
                        ))}
                        {guide.sections.length > 3 && (
                          <li className="text-sm text-gray-500 ml-6">
                            +{guide.sections.length - 3} more sections
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {guide.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {guide.readTime}
                        </div>
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          {guide.downloads} downloads
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-6">
                      {guide.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Updated {new Date(guide.lastUpdated).toLocaleDateString()}
                      </div>
                      <Link
                        href={`/guides/${guide.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        <span>Read Guide</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Guides */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All Guides</h2>
              <p className="text-lg text-gray-600">
                {filteredGuides.length} guides found
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGuides.map((guide, index) => (
                <motion.article
                  key={guide.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {guide.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        {guide.rating}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {guide.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {guide.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {guide.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {guide.readTime}
                        </div>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {guide.difficulty}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {guide.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {guide.downloads} downloads
                      </div>
                      <Link
                        href={`/guides/${guide.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-blue-700"
                      >
                        <span>Read Guide</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredGuides.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No guides found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or browse different categories.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Custom Guidance?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Our experts can provide personalized guidance and implementation support 
                for your specific project requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Expert Help
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}