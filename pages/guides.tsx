import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Clock, User, ArrowRight, Star, CheckCircle } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const guides = [
  {
    title: "Complete Guide to API Integration",
    description: "Comprehensive guide covering everything you need to know about integrating with our APIs effectively.",
    duration: "2 hours",
    difficulty: "Intermediate",
    author: "Sarah Johnson",
    category: "API Integration",
    rating: 4.8,
    reviews: 156,
    featured: true,
    href: "/guides/api-integration-complete",
    image: "🔌"
  },
  {
    title: "Security Best Practices for Web Applications",
    description: "Learn essential security practices to protect your web applications from common vulnerabilities.",
    duration: "1.5 hours",
    difficulty: "Advanced",
    author: "Michael Chen",
    category: "Security",
    rating: 4.9,
    reviews: 89,
    featured: true,
    href: "/guides/web-security-best-practices",
    image: "🔒"
  },
  {
    title: "Performance Optimization Techniques",
    description: "Master techniques to optimize your applications for maximum performance and user experience.",
    duration: "3 hours",
    difficulty: "Advanced",
    author: "Emily Rodriguez",
    category: "Performance",
    rating: 4.7,
    reviews: 124,
    featured: false,
    href: "/guides/performance-optimization",
    image: "⚡"
  },
  {
    title: "Database Design Fundamentals",
    description: "Learn the fundamentals of database design and optimization for scalable applications.",
    duration: "2.5 hours",
    difficulty: "Intermediate",
    author: "David Kim",
    category: "Database",
    rating: 4.6,
    reviews: 98,
    featured: false,
    href: "/guides/database-design-fundamentals",
    image: "🗄️"
  },
  {
    title: "Microservices Architecture Patterns",
    description: "Explore common microservices patterns and learn how to implement them effectively.",
    duration: "4 hours",
    difficulty: "Advanced",
    author: "Lisa Wang",
    category: "Architecture",
    rating: 4.8,
    reviews: 67,
    featured: true,
    href: "/guides/microservices-architecture-patterns",
    image: "🏗️"
  },
  {
    title: "CI/CD Pipeline Setup and Management",
    description: "Complete guide to setting up and managing continuous integration and deployment pipelines.",
    duration: "2 hours",
    difficulty: "Intermediate",
    author: "James Wilson",
    category: "DevOps",
    rating: 4.5,
    reviews: 112,
    featured: false,
    href: "/guides/cicd-pipeline-setup",
    image: "🚀"
  }
];

const categories = [
  { name: "All", count: 18, active: true },
  { name: "API Integration", count: 4, active: false },
  { name: "Security", count: 3, active: false },
  { name: "Performance", count: 3, active: false },
  { name: "Database", count: 2, active: false },
  { name: "Architecture", count: 2, active: false },
  { name: "DevOps", count: 2, active: false },
  { name: "Frontend", count: 1, active: false },
  { name: "Backend", count: 1, active: false }
];

const featuredGuides = guides.filter(guide => guide.featured);

export default function GuidesPage() {
  return (
    <MainLayout
      title="Guides - Zion Tech Group"
      description="Comprehensive guides covering advanced topics and best practices for developers and technical teams."
      keywords="guides, best practices, advanced topics, technical guides, development guides"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technical{' '}
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Guides
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Deep-dive guides covering advanced topics, best practices, and expert techniques 
                for building robust, scalable applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/guides/api-integration-complete" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Reading
                </Link>
                <Link href="/tutorials" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Tutorials
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured Guides
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our most popular and highly-rated guides covering essential topics for developers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredGuides.map((guide, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-4xl mb-4">{guide.image}</div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {guide.difficulty}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {guide.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {guide.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {guide.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {guide.duration}
                      </div>
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {guide.author}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium text-gray-700">{guide.rating}</span>
                        <span className="text-xs text-gray-500 ml-1">({guide.reviews} reviews)</span>
                      </div>
                    </div>
                    
                    <Link
                      href={guide.href}
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-sm group-hover:text-indigo-600 transition-colors"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category.active
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* All Guides */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                All Guides
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Browse our complete collection of technical guides and best practices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6">
                    <div className="text-4xl mb-4">{guide.image}</div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {guide.difficulty}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {guide.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {guide.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {guide.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {guide.duration}
                      </div>
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {guide.author}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium text-gray-700">{guide.rating}</span>
                        <span className="text-xs text-gray-500 ml-1">({guide.reviews})</span>
                      </div>
                    </div>
                    
                    <Link
                      href={guide.href}
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-sm group-hover:text-indigo-600 transition-colors"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                Load More Guides
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Need Help with a Specific Topic?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Can't find what you're looking for? Our team can create custom guides for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Request Custom Guide
                </Link>
                <Link href="/support" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  Get Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}