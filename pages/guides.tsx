import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  BookOpen, 
  ArrowRight,
  FileText,
  Clock,
  User,
  Star,
  Download,
  Eye,
  Calendar,
  Tag,
  CheckCircle
} from 'lucide-react';

const guides = [
  {
    id: 1,
    title: 'Complete Guide to AI Implementation',
    description: 'A comprehensive guide to implementing AI solutions in your business, from planning to deployment.',
    author: 'Dr. Kleber Santos',
    readTime: '45 min',
    difficulty: 'Intermediate',
    category: 'AI & Machine Learning',
    rating: 4.8,
    downloads: 2500,
    publishedDate: '2024-01-15',
    image: '/images/guides/ai-implementation.jpg',
    tags: ['AI', 'Machine Learning', 'Implementation', 'Business Strategy']
  },
  {
    id: 2,
    title: 'Cloud Migration Best Practices',
    description: 'Learn the essential steps and best practices for migrating your infrastructure to the cloud.',
    author: 'Sarah Johnson',
    readTime: '30 min',
    difficulty: 'Advanced',
    category: 'Cloud Computing',
    rating: 4.9,
    downloads: 1800,
    publishedDate: '2024-01-10',
    image: '/images/guides/cloud-migration.jpg',
    tags: ['Cloud', 'Migration', 'AWS', 'DevOps']
  },
  {
    id: 3,
    title: 'Cybersecurity Fundamentals',
    description: 'Essential cybersecurity practices to protect your business from modern threats.',
    author: 'Emily Rodriguez',
    readTime: '25 min',
    difficulty: 'Beginner',
    category: 'Cybersecurity',
    rating: 4.7,
    downloads: 3200,
    publishedDate: '2024-01-05',
    image: '/images/guides/cybersecurity.jpg',
    tags: ['Security', 'Best Practices', 'Threats', 'Protection']
  },
  {
    id: 4,
    title: 'Data Analytics for Business',
    description: 'Transform your data into actionable insights with our comprehensive analytics guide.',
    author: 'Michael Chen',
    readTime: '35 min',
    difficulty: 'Intermediate',
    category: 'Data Analytics',
    rating: 4.6,
    downloads: 2100,
    publishedDate: '2024-01-01',
    image: '/images/guides/data-analytics.jpg',
    tags: ['Analytics', 'Data Science', 'Business Intelligence', 'Insights']
  },
  {
    id: 5,
    title: 'Web Development Modern Practices',
    description: 'Modern web development techniques and best practices for building scalable applications.',
    author: 'Alex Thompson',
    readTime: '40 min',
    difficulty: 'Intermediate',
    category: 'Web Development',
    rating: 4.8,
    downloads: 1900,
    publishedDate: '2023-12-28',
    image: '/images/guides/web-development.jpg',
    tags: ['Web Development', 'React', 'Node.js', 'Best Practices']
  },
  {
    id: 6,
    title: 'Mobile App Development Guide',
    description: 'Complete guide to building cross-platform mobile applications with modern frameworks.',
    author: 'Lisa Wang',
    readTime: '50 min',
    difficulty: 'Advanced',
    category: 'Mobile Development',
    rating: 4.9,
    downloads: 1600,
    publishedDate: '2023-12-25',
    image: '/images/guides/mobile-development.jpg',
    tags: ['Mobile', 'React Native', 'Flutter', 'Cross-platform']
  }
];

const categories = [
  'All Categories',
  'AI & Machine Learning',
  'Cloud Computing',
  'Cybersecurity',
  'Data Analytics',
  'Web Development',
  'Mobile Development',
  'DevOps'
];

export default function GuidesPage() {
  return (
    <>
      <Head>
        <title>Guides & Resources - Zion Tech Group | Technical Documentation</title>
        <meta name="description" content="Access comprehensive guides, tutorials, and resources for AI, cloud computing, cybersecurity, and modern technology solutions." />
        <meta name="keywords" content="guides, tutorials, documentation, AI guides, cloud computing, cybersecurity, technical resources" />
        <meta property="og:title" content="Guides & Resources - Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive collection of technical guides and resources." />
        <meta property="og:url" content="https://ziontechgroup.com/guides" />
        <meta property="og:type" content="website" />
      </Head>
      
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Guides &{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Resources
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive guides, tutorials, and resources to help you master modern technology and implement solutions effectively.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Featured Guides</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our collection of expert-written guides covering the latest in technology and best practices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <BookOpen className="w-16 h-16 mx-auto mb-4" />
                      <h3 className="text-lg font-bold">{guide.category}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {guide.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm text-gray-600">{guide.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{guide.description}</p>
                    
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{guide.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{guide.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {guide.difficulty}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Download className="w-4 h-4 mr-1" />
                        <span>{guide.downloads.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {guide.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        href={`/guides/${guide.id}`}
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-center"
                      >
                        Read Guide
                      </Link>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                Our experts can provide personalized guidance and consultation for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Expert Consultation
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
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