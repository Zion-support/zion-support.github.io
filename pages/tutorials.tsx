import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Play, Clock, User, Star, ArrowRight, Search, Filter, BookOpen, Video, FileText } from 'lucide-react';

const tutorials = [
  {
    id: 1,
    title: 'Getting Started with AI: A Complete Beginner\'s Guide',
    description: 'Learn the fundamentals of artificial intelligence and machine learning from scratch. Perfect for beginners with no prior experience.',
    instructor: 'Dr. Sarah Johnson',
    duration: '2 hours 30 minutes',
    level: 'Beginner',
    category: 'Artificial Intelligence',
    rating: 4.8,
    students: 1250,
    type: 'Video',
    thumbnail: '/api/placeholder/400/300',
    featured: true,
    modules: 12,
    price: 'Free'
  },
  {
    id: 2,
    title: 'Cloud Security Best Practices',
    description: 'Master cloud security fundamentals and learn how to protect your infrastructure from common threats.',
    instructor: 'Michael Chen',
    duration: '1 hour 45 minutes',
    level: 'Intermediate',
    category: 'Cybersecurity',
    rating: 4.7,
    students: 890,
    type: 'Video',
    thumbnail: '/api/placeholder/400/300',
    featured: false,
    modules: 8,
    price: 'Free'
  },
  {
    id: 3,
    title: 'Building Scalable Microservices',
    description: 'Learn how to design and implement microservices architecture that can scale with your business.',
    instructor: 'David Rodriguez',
    duration: '3 hours 15 minutes',
    level: 'Advanced',
    category: 'Software Development',
    rating: 4.9,
    students: 1100,
    type: 'Video',
    thumbnail: '/api/placeholder/400/300',
    featured: false,
    modules: 15,
    price: '$99'
  },
  {
    id: 4,
    title: 'Data Analytics with Python',
    description: 'Complete guide to data analysis using Python, pandas, and visualization libraries.',
    instructor: 'Emily Watson',
    duration: '4 hours',
    level: 'Intermediate',
    category: 'Data Science',
    rating: 4.6,
    students: 750,
    type: 'Video',
    thumbnail: '/api/placeholder/400/300',
    featured: false,
    modules: 20,
    price: '$149'
  },
  {
    id: 5,
    title: 'DevOps Fundamentals',
    description: 'Introduction to DevOps practices, tools, and methodologies for modern software development.',
    instructor: 'Alex Thompson',
    duration: '2 hours 20 minutes',
    level: 'Beginner',
    category: 'DevOps',
    rating: 4.5,
    students: 980,
    type: 'Video',
    thumbnail: '/api/placeholder/400/300',
    featured: false,
    modules: 10,
    price: 'Free'
  },
  {
    id: 6,
    title: 'Blockchain Development Basics',
    description: 'Learn the fundamentals of blockchain technology and smart contract development.',
    instructor: 'Lisa Park',
    duration: '3 hours 30 minutes',
    level: 'Intermediate',
    category: 'Blockchain',
    rating: 4.7,
    students: 650,
    type: 'Video',
    thumbnail: '/api/placeholder/400/300',
    featured: false,
    modules: 18,
    price: '$199'
  },
  {
    id: 7,
    title: 'API Design and Documentation',
    description: 'Best practices for designing, building, and documenting RESTful APIs.',
    instructor: 'John Smith',
    duration: '1 hour 30 minutes',
    level: 'Intermediate',
    category: 'Software Development',
    rating: 4.4,
    students: 720,
    type: 'Video',
    thumbnail: '/api/placeholder/400/300',
    featured: false,
    modules: 7,
    price: 'Free'
  },
  {
    id: 8,
    title: 'Machine Learning Model Deployment',
    description: 'Learn how to deploy machine learning models to production environments.',
    instructor: 'Dr. Sarah Johnson',
    duration: '2 hours 45 minutes',
    level: 'Advanced',
    category: 'Artificial Intelligence',
    rating: 4.8,
    students: 540,
    type: 'Video',
    thumbnail: '/api/placeholder/400/300',
    featured: false,
    modules: 14,
    price: '$179'
  }
];

const categories = [
  'All',
  'Artificial Intelligence',
  'Cybersecurity',
  'Software Development',
  'Data Science',
  'DevOps',
  'Blockchain',
  'Cloud Computing'
];

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const featuredTutorial = tutorials.find(tutorial => tutorial.featured);
const regularTutorials = tutorials.filter(tutorial => !tutorial.featured);

export default function TutorialsPage() {
  return (
    <MainLayout
      title="Tutorials - Zion Tech Group"
      description="Learn from our experts with comprehensive video tutorials and hands-on guides on the latest technologies."
      keywords="tutorials, learning, video courses, technology training, AI, cybersecurity, software development"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Learn from Experts
                <span className="block text-yellow-400">Master New Skills</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Access our comprehensive video tutorials and hands-on guides on the latest technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Tutorial */}
        {featuredTutorial && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Tutorial</h2>
                <div className="w-20 h-1 bg-blue-600"></div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="relative">
                      <img
                        src={featuredTutorial.thumbnail}
                        alt={featuredTutorial.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white bg-opacity-90 rounded-full p-4">
                          <Play className="w-8 h-8 text-blue-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredTutorial.category}
                      </span>
                      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                        {featuredTutorial.level}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {featuredTutorial.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {featuredTutorial.description}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {featuredTutorial.instructor}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {featuredTutorial.duration}
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-1" />
                          {featuredTutorial.modules} modules
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-600">{featuredTutorial.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {featuredTutorial.students} students enrolled
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl font-bold text-gray-900">{featuredTutorial.price}</span>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                          <Play className="w-4 h-4 mr-2" />
                          Start Learning
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Filter Section */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Categories</option>
                  {categories.slice(1).map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Levels</option>
                  {levels.slice(1).map((level, index) => (
                    <option key={index} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All Tutorials</h2>
              <div className="w-20 h-1 bg-blue-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularTutorials.map((tutorial, index) => (
                <motion.div
                  key={tutorial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={tutorial.thumbnail}
                      alt={tutorial.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-3">
                        <Play className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-gray-900 text-white px-2 py-1 rounded text-sm">
                        {tutorial.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tutorial.category}
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                        {tutorial.level}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {tutorial.description}
                    </p>
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {tutorial.instructor}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-600">{tutorial.rating}</span>
                        <span className="text-sm text-gray-500 ml-2">({tutorial.students})</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">{tutorial.price}</div>
                        <div className="text-sm text-gray-500">{tutorial.modules} modules</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of professionals who are advancing their careers with our expert-led tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/training"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                View All Training
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}