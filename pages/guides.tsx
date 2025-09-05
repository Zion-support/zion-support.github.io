import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  Code,
  Database,
  Cloud
} from 'lucide-react';
import Layout from '../components/Layout';

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
    category: 'Artificial Intelligence',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    readTime: '60 min',
    difficulty: 'Intermediate',
    rating: 4.9,
    downloads: 950
  },
  {
    title: 'Cloud Computing Best Practices',
    description: 'Essential strategies for cloud migration, optimization, and security',
    category: 'Cloud Computing',
    icon: Cloud,
    color: 'from-green-500 to-teal-500',
    readTime: '35 min',
    difficulty: 'Intermediate',
    rating: 4.7,
    downloads: 800
  },
  {
    title: 'Cybersecurity Essentials',
    description: 'Protect your systems with modern security practices and threat prevention',
    category: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    readTime: '50 min',
    difficulty: 'Advanced',
    rating: 4.8,
    downloads: 1100
  },
  {
    title: 'Database Design and Optimization',
    description: 'Master database design principles and performance optimization techniques',
    category: 'Database',
    icon: Database,
    color: 'from-indigo-500 to-blue-500',
    readTime: '40 min',
    difficulty: 'Intermediate',
    rating: 4.6,
    downloads: 700
  },
  {
    title: 'Micro SaaS Development Guide',
    description: 'Build and launch successful micro SaaS products from idea to market',
    category: 'SaaS Development',
    icon: Settings,
    color: 'from-yellow-500 to-orange-500',
    readTime: '55 min',
    difficulty: 'Advanced',
    rating: 4.9,
    downloads: 1600
  }
];

const categories = [
  'All Categories',
  'Web Development',
  'Artificial Intelligence',
  'Cloud Computing',
  'Cybersecurity',
  'Database',
  'SaaS Development'
];

export default function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All Categories');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredGuides = guides.filter(guide => {
    const matchesCategory = selectedCategory === 'All Categories' || guide.category === selectedCategory;
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="Guides & Resources - Zion Tech Group"
      description="Comprehensive guides and resources to help you master modern technology. Learn web development, AI, cloud computing, and more."
      keywords="guides, tutorials, resources, web development, AI, cloud computing, cybersecurity, learning"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <BookOpen className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Guides & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Resources</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Master modern technology with our comprehensive guides and resources. Learn from industry experts and stay ahead of the curve.
              </p>
            </motion.div>
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
                    placeholder="Search guides..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  <Filter className="w-5 h-5 text-gray-400 mt-3" />
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGuides.map((guide, index) => {
                const IconComponent = guide.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                  >
                    <div className={`bg-gradient-to-r ${guide.color} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <IconComponent className="w-8 h-8" />
                        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                          {guide.difficulty}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                      <p className="text-white text-opacity-90 text-sm">{guide.description}</p>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-500">{guide.category}</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm font-semibold">{guide.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {guide.readTime}
                        </div>
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          {guide.downloads} downloads
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Read Guide
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {filteredGuides.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Custom Training?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our team can create custom training programs tailored to your specific needs and technology stack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Request Custom Training
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}