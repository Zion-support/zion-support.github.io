<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
=======
import Head from 'next/head';
>>>>>>> pr-11913
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
<<<<<<< HEAD
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
=======
  User, 
  Play,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Layout from '../components/Layout';

const tutorials = [
  {
    id: 1,
    title: 'Building a Full-Stack Web Application with Next.js',
    description: 'Learn how to build a complete web application using Next.js, React, and Node.js',
    duration: '2 hours',
    difficulty: 'Intermediate',
    instructor: 'John Doe',
    rating: 4.8,
    students: 1250,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 2,
    title: 'Introduction to Machine Learning with Python',
    description: 'Get started with machine learning using Python and popular libraries like scikit-learn',
    duration: '3 hours',
    difficulty: 'Beginner',
    instructor: 'Jane Smith',
    rating: 4.9,
    students: 2100,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 3,
    title: 'Cloud Architecture Best Practices',
    description: 'Learn how to design scalable and secure cloud architectures',
    duration: '1.5 hours',
    difficulty: 'Advanced',
    instructor: 'Mike Johnson',
    rating: 4.7,
    students: 890,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 4,
    title: 'DevOps with Docker and Kubernetes',
    description: 'Master containerization and orchestration with Docker and Kubernetes',
    duration: '4 hours',
    difficulty: 'Intermediate',
    instructor: 'Sarah Wilson',
    rating: 4.8,
    students: 1650,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 5,
    title: 'React Native Mobile Development',
    description: 'Build cross-platform mobile apps with React Native',
    duration: '3.5 hours',
    difficulty: 'Intermediate',
    instructor: 'David Brown',
    rating: 4.6,
    students: 980,
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 6,
    title: 'Data Science with R and Python',
    description: 'Comprehensive guide to data science using R and Python',
    duration: '5 hours',
    difficulty: 'Advanced',
    instructor: 'Lisa Davis',
    rating: 4.9,
    students: 1450,
    thumbnail: '/api/placeholder/300/200'
  }
];

const categories = [
  'Web Development',
  'Machine Learning',
  'Cloud Computing',
  'DevOps',
  'Mobile Development',
  'Data Science'
];

export default function Tutorials() {
  return (
    <Layout>
      <Head>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn new skills with our comprehensive tutorials and courses." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Tutorials
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn new skills with our comprehensive tutorials and courses.
>>>>>>> pr-11913
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
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
=======
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Browse by Category
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, index) => (
                  <motion.button
                    key={index}
                    className="px-6 py-3 bg-blue-100 text-blue-800 rounded-full font-medium hover:bg-blue-200 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tutorials.map((tutorial, index) => (
                  <motion.div
                    key={tutorial.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="aspect-video bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-16 h-16 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{tutorial.title}</h3>
                      <p className="text-gray-600 mb-4">{tutorial.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {tutorial.duration}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {tutorial.instructor}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {tutorial.difficulty}
                        </span>
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-1">★</span>
                          <span className="text-sm text-gray-600">{tutorial.rating}</span>
                          <span className="text-sm text-gray-500 ml-2">({tutorial.students} students)</span>
                        </div>
                      </div>
                      
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                        Start Tutorial
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </motion.div>
                ))}
>>>>>>> pr-11913
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
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
=======

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of students who are already learning with our tutorials.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                Browse All Tutorials
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
>>>>>>> pr-11913
  );
}