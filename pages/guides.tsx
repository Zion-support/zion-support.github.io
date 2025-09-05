<<<<<<< HEAD
import Link from 'next/link';
=======
import React from 'react';
import Layout from './components/Layout';
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
import { motion } from 'framer-motion';
import {
  BookOpen,
  Clock,
  User,
<<<<<<< HEAD
  Star,
=======
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  Download,
  ExternalLink,
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  Code,
  Database,
  Cloud,
  Shield,
<<<<<<< HEAD
  Smartphone,
  Server
} from 'lucide-react';

const guides = [
  {
    slug: 'react-best-practices',
    title: 'React Best Practices',
    description: 'Learn the essential patterns and practices for building scalable React applications',
    category: 'Web Development',
    icon: Code,
    color: 'from-blue-500 to-purple-500',
    readTime: '15 min',
    difficulty: 'Intermediate',
    sections: 8,
    downloads: 2500
  },
  {
    slug: 'nodejs-performance',
    title: 'Node.js Performance Optimization',
    description: 'Master techniques to optimize your Node.js applications for maximum performance',
    category: 'Web Development',
    icon: Server,
    color: 'from-green-500 to-teal-500',
    readTime: '25 min',
    difficulty: 'Advanced',
    sections: 12,
    downloads: 1800
  },
  {
    slug: 'aws-architecture',
    title: 'AWS Architecture Patterns',
    description: 'Design scalable and cost-effective solutions using AWS services',
    category: 'Cloud Computing',
    icon: Cloud,
    color: 'from-orange-500 to-red-500',
    readTime: '35 min',
    difficulty: 'Advanced',
    sections: 15,
    downloads: 3200
  },
  {
    slug: 'database-design',
    title: 'Database Design Fundamentals',
    description: 'Learn how to design efficient and normalized databases',
    category: 'Database',
    icon: Database,
    color: 'from-indigo-500 to-blue-500',
    readTime: '20 min',
    difficulty: 'Intermediate',
    sections: 10,
    downloads: 2100
  },
  {
    slug: 'security-basics',
    title: 'Web Security Fundamentals',
    description: 'Essential security practices every developer should know',
    category: 'Security',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    readTime: '30 min',
    difficulty: 'Intermediate',
    sections: 14,
    downloads: 1900
  },
  {
    slug: 'mobile-development',
    title: 'Mobile App Development Guide',
    description: 'Complete guide to building cross-platform mobile applications',
    category: 'Mobile',
    icon: Smartphone,
    color: 'from-purple-500 to-indigo-500',
    readTime: '40 min',
    difficulty: 'Advanced',
    sections: 18,
    downloads: 1600
=======
  Zap,
  Brain,
  Globe,
  Smartphone,
  Monitor,
  Server
} from 'lucide-react';
import Link from 'next/link';

const guides = [
  {
    id: 1,
    title: "Getting Started with AI Development",
    description: "Learn the fundamentals of AI development and how to build your first AI application.",
    category: "AI Development",
    difficulty: "Beginner",
    readTime: "15 min read",
    author: "Zion Tech Team",
    rating: 4.8,
    students: 1250,
    image: "/images/guides/ai-development.jpg",
    icon: Brain,
    tags: ["AI", "Machine Learning", "Python", "TensorFlow"]
  },
  {
    id: 2,
    title: "Cloud Infrastructure Setup",
    description: "Complete guide to setting up scalable cloud infrastructure for your applications.",
    category: "Cloud Computing",
    difficulty: "Intermediate",
    readTime: "25 min read",
    author: "Cloud Experts",
    rating: 4.9,
    students: 980,
    image: "/images/guides/cloud-infrastructure.jpg",
    icon: Cloud,
    tags: ["AWS", "Docker", "Kubernetes", "DevOps"]
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices",
    description: "Essential cybersecurity practices to protect your applications and data.",
    category: "Security",
    difficulty: "Advanced",
    readTime: "30 min read",
    author: "Security Team",
    rating: 4.7,
    students: 750,
    image: "/images/guides/cybersecurity.jpg",
    icon: Shield,
    tags: ["Security", "Encryption", "Authentication", "Compliance"]
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications with modern frameworks.",
    category: "Mobile Development",
    difficulty: "Intermediate",
    readTime: "20 min read",
    author: "Mobile Team",
    rating: 4.6,
    students: 1100,
    image: "/images/guides/mobile-development.jpg",
    icon: Smartphone,
    tags: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    id: 5,
    title: "Database Design & Optimization",
    description: "Learn database design principles and optimization techniques.",
    category: "Database",
    difficulty: "Intermediate",
    readTime: "22 min read",
    author: "Database Team",
    rating: 4.8,
    students: 890,
    image: "/images/guides/database-design.jpg",
    icon: Database,
    tags: ["SQL", "NoSQL", "Performance", "Scaling"]
  },
  {
    id: 6,
    title: "Web Performance Optimization",
    description: "Optimize your web applications for maximum performance and user experience.",
    category: "Performance",
    difficulty: "Advanced",
    readTime: "18 min read",
    author: "Performance Team",
    rating: 4.9,
    students: 650,
    image: "/images/guides/web-performance.jpg",
    icon: Zap,
    tags: ["Performance", "Optimization", "Caching", "CDN"]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  }
];

const categories = [
<<<<<<< HEAD
  { name: 'All', count: 24, active: true },
  { name: 'Web Development', count: 6, active: false },
  { name: 'Cloud Computing', count: 5, active: false },
  { name: 'Database', count: 4, active: false },
  { name: 'Security', count: 3, active: false },
  { name: 'Mobile', count: 3, active: false },
  { name: 'DevOps', count: 3, active: false }
=======
  { name: "All", count: guides.length, icon: Globe },
  { name: "AI Development", count: 1, icon: Brain },
  { name: "Cloud Computing", count: 1, icon: Cloud },
  { name: "Security", count: 1, icon: Shield },
  { name: "Mobile Development", count: 1, icon: Smartphone },
  { name: "Database", count: 1, icon: Database },
  { name: "Performance", count: 1, icon: Zap }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
];

export default function GuidesPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technical Guides
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive guides to help you master modern technologies and best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className={`h-2 bg-gradient-to-r ${guide.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${guide.color} flex items-center justify-center mr-4`}>
                      <guide.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">{guide.category}</span>
                      <h3 className="text-lg font-semibold text-gray-900">{guide.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {guide.readTime}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {guide.difficulty}
                    </span>
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {guide.sections} sections
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{guide.downloads} downloads</span>
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Read Guide
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
=======
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                Expert Guides & Tutorials
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Master the latest technologies with our comprehensive guides, tutorials, and best practices from industry experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#guides"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
                >
                  Browse Guides
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="#categories"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
                >
                  View Categories
                  <BookOpen className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Explore by Category
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find guides tailored to your specific technology interests and skill level.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 hover:border-blue-200 border-2 border-transparent transition-all cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <category.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 text-xs">
                    {category.count} guides
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section id="guides" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Guides
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hand-picked guides to help you master the most in-demand technologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-600">
                        {guide.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' :
                        guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        {guide.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {guide.readTime}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {guide.author}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {guide.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(guide.rating)
                                  ? 'text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                              fill="currentColor"
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          {guide.rating} ({guide.students} students)
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {guide.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Link
                        href="#"
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center inline-flex items-center justify-center"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Start Guide
                      </Link>
                      <Link
                        href="#"
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
                      >
                        <Download className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-xl mb-8 text-green-100">
                Join thousands of developers who are already mastering new technologies with our guides.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#guides"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
                >
                  Browse All Guides
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center"
                >
                  Request Custom Guide
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  );
}