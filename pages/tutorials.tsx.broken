<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import { Code, Database, Cloud, Shield, Clock, Users, Star, ArrowRight } from 'lucide-react';

const tutorials = [
  {
    title: 'Building a Full-Stack Web Application with Next.js',
    description: 'Learn how to build a complete web application using Next.js, React, and Node.js',
    duration: '2 hours',
    difficulty: 'Intermediate',
    category: 'Web Development',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    lessons: 12,
    students: 1250
  },
  {
    title: 'AI Integration with Python and Machine Learning',
    description: 'Master AI integration techniques using Python, TensorFlow, and scikit-learn',
    duration: '3 hours',
    difficulty: 'Advanced',
    category: 'AI/ML',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    lessons: 18,
    students: 980
  },
  {
    title: 'Cloud Infrastructure with AWS',
    description: 'Learn to design and deploy scalable cloud solutions using Amazon Web Services',
    duration: '4 hours',
    difficulty: 'Intermediate',
    category: 'Cloud Computing',
    icon: Cloud,
    color: 'from-purple-500 to-pink-500',
    lessons: 15,
    students: 1100
  },
  {
    title: 'Cybersecurity Fundamentals',
    description: 'Essential cybersecurity concepts and best practices for protecting your systems',
    duration: '2.5 hours',
    difficulty: 'Beginner',
    category: 'Security',
    icon: Shield,
    color: 'from-orange-500 to-red-500',
    lessons: 10,
    students: 850
  }
];

export default function Tutorials() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn from our comprehensive technology tutorials and guides" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tutorials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from our comprehensive technology tutorials and guides designed for all skill levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${tutorial.color} mr-4`}>
                  <tutorial.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{tutorial.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{tutorial.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Duration:</span>
                  <span className="ml-2">{tutorial.duration}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Users className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Students:</span>
                  <span className="ml-2">{tutorial.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Star className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Lessons:</span>
                  <span className="ml-2">{tutorial.lessons}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {tutorial.category}
                </span>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-2">
                  {tutorial.difficulty}
                </span>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                Start Learning
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
=======
<<<<<<< HEAD

const tutorials = [;
  {}
    title: 'Building a Full-Stack Web Application with Next.js,',
    description: 'Learn how to build a complete web application using Next.js, _React, and Node.js',',
    duration: '2 hours,',
    difficulty: 'Intermediate,',
    category: 'Web Development,',
=======
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
>>>>>>> main
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

        {/* CTA Section */}
        <section className="py-20 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
=======
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
>>>>>>> main
>>>>>>> main
  );
}