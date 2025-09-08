import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  BookOpen, 
  ArrowRight,
  FileText,
  Clock,
  User,
  Star,
  CheckCircle,
  Download,
  ExternalLink,
  Search,
  Filter,
  Globe,
  Settings,
  Shield,
  Zap,
  Brain,
  Code,
  Database,
  Cloud
} from 'lucide-react';

const guides = [
  {
    title: 'Complete Guide to Web Development',
    description: 'A comprehensive guide covering HTML, CSS, JavaScript, and modern frameworks',
    category: 'Web Development',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    readTime: '45 min',
    difficulty: 'Beginner',
    rating: 4.8,
    downloads: 1200
  },
  {
    title: 'AI and Machine Learning Fundamentals',
    description: 'Learn the basics of AI, machine learning algorithms, and practical applications',
    category: 'AI & ML',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    readTime: '60 min',
    difficulty: 'Intermediate',
    rating: 4.9,
    downloads: 1800
  },
  {
    title: 'Cloud Architecture Best Practices',
    description: 'Design scalable and secure cloud infrastructure using modern practices',
    category: 'Cloud Computing',
    icon: Cloud,
    color: 'from-green-500 to-teal-500',
    readTime: '50 min',
    difficulty: 'Advanced',
    rating: 4.7,
    downloads: 950
  },
  {
    title: 'Cybersecurity Essentials',
    description: 'Protect your applications and data with essential security practices',
    category: 'Security',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    readTime: '40 min',
    difficulty: 'Intermediate',
    rating: 4.6,
    downloads: 1100
  },
  {
    title: 'Database Design and Optimization',
    description: 'Master database design principles and performance optimization techniques',
    category: 'Database',
    icon: Database,
    color: 'from-indigo-500 to-blue-500',
    readTime: '55 min',
    difficulty: 'Intermediate',
    rating: 4.8,
    downloads: 1300
  },
  {
    title: 'DevOps and CI/CD Pipeline',
    description: 'Streamline your development workflow with modern DevOps practices',
    category: 'DevOps',
    icon: Settings,
    color: 'from-yellow-500 to-orange-500',
    readTime: '35 min',
    difficulty: 'Intermediate',
    rating: 4.5,
    downloads: 800
  }
];

const categories = [
  'All',
  'Web Development',
  'AI & ML',
  'Cloud Computing',
  'Security',
  'Database',
  'DevOps'
];

export default function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGuides = guides.filter(guide => {
    const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="Guides - Zion Tech Group"
      description="Comprehensive guides and tutorials for modern technology and development practices"
      keywords="guides, tutorials, web development, AI, cloud computing, cybersecurity"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technology Guides
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Master modern technology with our comprehensive guides and tutorials
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGuides.map((guide, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className={`h-48 bg-gradient-to-r ${guide.color} flex items-center justify-center`}>
                    <guide.icon className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Clock className="w-4 h-4" />
                      <span>{guide.readTime}</span>
                      <span className="mx-2">•</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        {guide.difficulty}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {guide.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {guide.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{guide.rating}</span>
                        <span className="text-sm text-gray-500">({guide.downloads} downloads)</span>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {guide.category}
                      </span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        href={`/guides/${guide.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Read Guide
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            
            {filteredGuides.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <BookOpen className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No guides found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
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
                Need Custom Guidance?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our experts can create personalized guides and tutorials for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Request Custom Guide
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}