import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FileText, Clock, Users, ArrowRight, CheckCircle, BookOpen, Code, Database, Cloud, Shield } from 'lucide-react'
import Layout from '../components/Layout'

const guides = [
  {
    title: 'Complete Guide to Web Development',
    description: 'A comprehensive guide covering HTML, CSS, JavaScript, and modern frameworks',
    category: 'Web Development',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    readTime: '45 min',
    difficulty: 'Beginner',
    sections: 12,
    downloads: 2500
  },
  {
    title: 'Cloud Architecture Best Practices',
    description: 'Learn how to design scalable and secure cloud architectures',
    category: 'Cloud Computing',
    icon: Cloud,
    color: 'from-green-500 to-emerald-500',
    readTime: '60 min',
    difficulty: 'Intermediate',
    sections: 15,
    downloads: 1800
  },
  {
    title: 'AI and Machine Learning Fundamentals',
    description: 'Introduction to AI concepts, algorithms, and practical applications',
    category: 'Artificial Intelligence',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    readTime: '90 min',
    difficulty: 'Intermediate',
    sections: 20,
    downloads: 3200
  }
]

export default function Guides() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Technical Guides</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides to help you master modern technologies and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${guide.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${guide.color} text-white mr-4`}>
                      <guide.icon size={24} />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">{guide.category}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {guide.readTime}
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      {guide.downloads} downloads
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      guide.difficulty === 'Beginner' 
                        ? 'bg-green-100 text-green-800' 
                        : guide.difficulty === 'Intermediate'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {guide.difficulty}
                    </span>
                    <Link href={`/guides/${guide.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <a className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                        Read Guide
                        <ArrowRight size={16} className="ml-1" />
                      </a>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}