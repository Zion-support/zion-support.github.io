import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  Users, 
  ArrowRight, 
  Play, 
  Code, 
  Database, 
  Cloud, 
  Shield 
} from 'lucide-react';

const tutorialCategories = [
  {
<<<<<<< HEAD
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
    id: 2,,
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
    id: 3,,
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
    id: 4,,
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
    id: 5,,
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
    id: 6,,
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
    id: 7,,
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
    id: 8,,
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
=======
    icon: Code,
    title: 'Web Development',
    description: 'Learn modern web development technologies',
    tutorials: 12
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Master database design and optimization',
    tutorials: 8
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Understand cloud platforms and services',
    tutorials: 15
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your applications and data',
    tutorials: 10
>>>>>>> pr-11914
  }
];

export default function TutorialsPage() {
  return (
    <>
      <Head>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn technology skills with our comprehensive tutorials." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Tutorials</h1>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Learn new skills and advance your career with our comprehensive tutorials.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tutorial Categories */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tutorial Categories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our organized collection of tutorials by technology area.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tutorialCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <category.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="text-sm text-green-600 font-medium">
                    {category.tutorials} tutorials
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Tutorials</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Start with these popular tutorials to get up and running quickly.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Play className="w-6 h-6 text-green-600 mr-2" />
                  <span className="text-sm text-gray-500">Video Tutorial</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Getting Started with React</h3>
                <p className="text-gray-600 mb-4">Learn the fundamentals of React development</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  45 minutes
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-500">Written Guide</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Database Design Best Practices</h3>
                <p className="text-gray-600 mb-4">Master the art of database design</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  30 minutes
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Play className="w-6 h-6 text-green-600 mr-2" />
                  <span className="text-sm text-gray-500">Video Tutorial</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cloud Security Fundamentals</h3>
                <p className="text-gray-600 mb-4">Protect your cloud infrastructure</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  60 minutes
                </div>
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
    </MainLayout>
=======

        {/* CTA Section */}
        <section className="py-20 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Browse our complete library of tutorials and start your learning journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/guides"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold"
                >
                  View All Tutorials
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
>>>>>>> pr-11914
  );
}