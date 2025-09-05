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
  );
}