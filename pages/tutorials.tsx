import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Play, 
  ArrowRight,
  Clock,
  User,
  Star,
  BookOpen,
  Code,
  Video
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const tutorials = [
  {
    title: "Getting Started with Our API",
    description: "Learn the basics of integrating with our REST API",
    duration: "15 min",
    difficulty: "Beginner",
    type: "Video",
    instructor: "Sarah Johnson",
    rating: 4.8,
    students: 1250,
    thumbnail: "🎥",
    category: "API"
  },
  {
    title: "Building Your First AI Application",
    description: "Step-by-step guide to creating an AI-powered application",
    duration: "45 min",
    difficulty: "Intermediate",
    type: "Tutorial",
    instructor: "Michael Chen",
    rating: 4.9,
    students: 890,
    thumbnail: "🤖",
    category: "AI"
  },
  {
    title: "Cloud Infrastructure Setup",
    description: "Complete guide to setting up scalable cloud infrastructure",
    duration: "30 min",
    difficulty: "Advanced",
    type: "Video",
    instructor: "Emily Rodriguez",
    rating: 4.7,
    students: 650,
    thumbnail: "☁️",
    category: "Cloud"
  },
  {
    title: "Microservices Architecture",
    description: "Design and implement microservices for your application",
    duration: "60 min",
    difficulty: "Advanced",
    type: "Tutorial",
    instructor: "David Kim",
    rating: 4.9,
    students: 420,
    thumbnail: "🏗️",
    category: "Architecture"
  },
  {
    title: "Database Optimization",
    description: "Best practices for database performance and optimization",
    duration: "25 min",
    difficulty: "Intermediate",
    type: "Video",
    instructor: "Lisa Wang",
    rating: 4.6,
    students: 780,
    thumbnail: "🗄️",
    category: "Database"
  },
  {
    title: "Security Best Practices",
    description: "Implement security measures in your applications",
    duration: "35 min",
    difficulty: "Intermediate",
    type: "Tutorial",
    instructor: "Alex Thompson",
    rating: 4.8,
    students: 920,
    thumbnail: "🔒",
    category: "Security"
  }
];

const categories = [
  "All Tutorials",
  "API",
  "AI",
  "Cloud",
  "Architecture",
  "Database",
  "Security"
];

const difficultyColors = {
  "Beginner": "bg-green-100 text-green-800",
  "Intermediate": "bg-yellow-100 text-yellow-800",
  "Advanced": "bg-red-100 text-red-800"
};

export default function TutorialsPage() {
  return (
    <MainLayout
      title="Tutorials - Zion Tech Group"
      description="Learn with our comprehensive tutorials and video guides. Master new technologies and improve your skills with expert-led content."
      keywords="tutorials, video guides, learning, education, technology tutorials, programming guides"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Learn &{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Grow
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Master new technologies with our comprehensive tutorials, 
                video guides, and expert-led content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#tutorials" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Browse Tutorials
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Request Tutorial
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    category === "All Tutorials"
                      ? "bg-amber-600 text-white"
                      : "bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section id="tutorials" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                        {tutorial.category}
                      </span>
                      <div className="text-3xl">{tutorial.thumbnail}</div>
                    </div>

                    <div className="flex items-center space-x-2 mb-3">
                      {tutorial.type === "Video" ? (
                        <Video className="w-4 h-4 text-amber-600" />
                      ) : (
                        <BookOpen className="w-4 h-4 text-amber-600" />
                      )}
                      <span className="text-sm text-gray-600">{tutorial.type}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                      {tutorial.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {tutorial.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {tutorial.duration}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {tutorial.instructor}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400" />
                        {tutorial.rating}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded ${difficultyColors[tutorial.difficulty]}`}>
                        {tutorial.difficulty}
                      </span>
                      <span className="text-sm text-gray-500">
                        {tutorial.students} students
                      </span>
                    </div>

                    <Link
                      href="#"
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start Learning
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Join thousands of developers who are already learning with our tutorials
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started
                </Link>
                <Link href="/resources" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Browse Resources
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}