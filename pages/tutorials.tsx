import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Clock, User, ArrowRight, Play, CheckCircle } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const tutorials = [
  {
    title: "Getting Started with AI Services",
    description: "Learn how to integrate our AI services into your applications with this comprehensive tutorial.",
    duration: "45 min",
    difficulty: "Beginner",
    author: "Sarah Johnson",
    category: "AI Services",
    lessons: 8,
    completed: false,
    href: "/tutorials/ai-services-getting-started",
    image: "🤖"
  },
  {
    title: "Building a REST API with Node.js",
    description: "Step-by-step guide to building a robust REST API using Node.js and our best practices.",
    duration: "2 hours",
    difficulty: "Intermediate",
    author: "Michael Chen",
    category: "Backend Development",
    lessons: 12,
    completed: true,
    href: "/tutorials/nodejs-rest-api",
    image: "⚡"
  },
  {
    title: "React Frontend Integration",
    description: "Learn how to build modern React applications that integrate seamlessly with our APIs.",
    duration: "1.5 hours",
    difficulty: "Intermediate",
    author: "Emily Rodriguez",
    category: "Frontend Development",
    lessons: 10,
    completed: false,
    href: "/tutorials/react-frontend-integration",
    image: "⚛️"
  },
  {
    title: "Database Design and Optimization",
    description: "Master database design principles and learn optimization techniques for better performance.",
    duration: "3 hours",
    difficulty: "Advanced",
    author: "David Kim",
    category: "Database",
    lessons: 15,
    completed: false,
    href: "/tutorials/database-design-optimization",
    image: "🗄️"
  },
  {
    title: "Microservices Architecture",
    description: "Comprehensive guide to building scalable microservices applications.",
    duration: "4 hours",
    difficulty: "Advanced",
    author: "Lisa Wang",
    category: "Architecture",
    lessons: 20,
    completed: false,
    href: "/tutorials/microservices-architecture",
    image: "🏗️"
  },
  {
    title: "DevOps and Deployment",
    description: "Learn modern DevOps practices and deployment strategies for production applications.",
    duration: "2.5 hours",
    difficulty: "Intermediate",
    author: "James Wilson",
    category: "DevOps",
    lessons: 14,
    completed: false,
    href: "/tutorials/devops-deployment",
    image: "🚀"
  }
];

const categories = [
  { name: "All", count: 24, active: true },
  { name: "AI Services", count: 6, active: false },
  { name: "Frontend Development", count: 5, active: false },
  { name: "Backend Development", count: 4, active: false },
  { name: "Database", count: 3, active: false },
  { name: "DevOps", count: 3, active: false },
  { name: "Architecture", count: 2, active: false },
  { name: "Security", count: 1, active: false }
];

const difficultyLevels = [
  { name: "Beginner", color: "green", count: 8 },
  { name: "Intermediate", color: "yellow", count: 10 },
  { name: "Advanced", color: "red", count: 6 }
];

export default function TutorialsPage() {
  return (
    <MainLayout
      title="Tutorials - Zion Tech Group"
      description="Step-by-step tutorials to help you master our technologies and build amazing applications."
      keywords="tutorials, guides, learning, programming, development, step-by-step"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Tutorials &{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Learning
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Master our technologies with comprehensive, step-by-step tutorials 
                designed for developers of all skill levels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/tutorials/ai-services-getting-started" className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Learning
                </Link>
                <Link href="/docs" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category.active
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
            
            {/* Difficulty Levels */}
            <div className="flex flex-wrap gap-2 justify-center">
              {difficultyLevels.map((level, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    level.color === 'green' ? 'bg-green-100 text-green-800 hover:bg-green-200' :
                    level.color === 'yellow' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' :
                    'bg-red-100 text-red-800 hover:bg-red-200'
                  }`}
                >
                  {level.name} ({level.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
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
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{tutorial.image}</div>
                      {tutorial.completed && (
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {tutorial.difficulty}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {tutorial.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                      {tutorial.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-3 h-3 mr-1" />
                        {tutorial.lessons} lessons
                      </div>
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {tutorial.author}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Link
                        href={tutorial.href}
                        className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm group-hover:text-blue-600 transition-colors"
                      >
                        {tutorial.completed ? 'Review' : 'Start Tutorial'}
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      
                      {tutorial.completed ? (
                        <div className="flex items-center text-green-600 text-sm font-medium">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Completed
                        </div>
                      ) : (
                        <div className="flex items-center text-gray-400 text-sm">
                          <Play className="w-4 h-4 mr-1" />
                          Not Started
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                Load More Tutorials
              </button>
            </div>
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join thousands of developers who are already mastering our technologies with our comprehensive tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/tutorials/ai-services-getting-started" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your First Tutorial
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                  Get Help
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}