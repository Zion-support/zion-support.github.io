import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Calendar, 
  Clock, 
  Users, 
  Play, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Globe,
  BookOpen,
  Zap
} from 'lucide-react';

const webinars = [
  {
    id: 1,
    title: 'Introduction to AI for Business',
    description: 'Learn how artificial intelligence can transform your business operations and drive growth.',
    date: '2024-02-15',
    time: '2:00 PM EST',
    duration: '60 minutes',
    speaker: 'Dr. Sarah Chen',
    category: 'AI & Machine Learning',
    attendees: 150,
    icon: BookOpen,
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 2,
    title: 'Cloud Migration Best Practices',
    description: 'Discover the best practices for migrating your infrastructure to the cloud safely and efficiently.',
    date: '2024-02-20',
    time: '3:00 PM EST',
    duration: '45 minutes',
    speaker: 'Michael Rodriguez',
    category: 'Cloud Computing',
    attendees: 200,
    icon: Globe,
    color: 'from-green-500 to-blue-500'
  },
  {
    id: 3,
    title: 'Cybersecurity Fundamentals',
    description: 'Essential security measures to protect your business from cyber threats and attacks.',
    date: '2024-02-25',
    time: '1:00 PM EST',
    duration: '90 minutes',
    speaker: 'James Wilson',
    category: 'Cybersecurity',
    attendees: 180,
    icon: Zap,
    color: 'from-red-500 to-pink-500'
  }
];

const upcomingWebinars = [
  {
    title: 'AI-Powered Analytics',
    date: '2024-03-01',
    time: '2:00 PM EST',
    speaker: 'Dr. Sarah Chen'
  },
  {
    title: 'DevOps Automation',
    date: '2024-03-05',
    time: '3:00 PM EST',
    speaker: 'Michael Rodriguez'
  },
  {
    title: 'Data Privacy & Compliance',
    date: '2024-03-10',
    time: '1:00 PM EST',
    speaker: 'James Wilson'
  }
];

export default function Webinars() {
  return (
    <Layout
      title="Webinars - Zion Tech Group"
      description="Join our expert-led webinars to learn about AI, cloud computing, cybersecurity, and other technology topics. Free educational sessions for professionals."
      keywords="webinars, online learning, AI education, cloud computing, cybersecurity, technology training, professional development"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Expert-Led
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}Webinars
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Learn from industry experts through our comprehensive webinar series covering AI, 
                cloud computing, cybersecurity, and more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Webinars */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Webinars
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our most popular webinars and learn from industry leaders.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${webinar.color}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 bg-gradient-to-r ${webinar.color} rounded-lg`}>
                        <webinar.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="ml-3 px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        {webinar.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {webinar.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {webinar.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {webinar.time} ({webinar.duration})
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        {webinar.attendees} attendees
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="h-4 w-4 mr-2" />
                        {webinar.speaker}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Free Registration
                      </span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Register Now
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Upcoming Webinars
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't miss our upcoming educational sessions.
              </p>
            </motion.div>

            <div className="space-y-6">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Play className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {webinar.title}
                        </h3>
                        <p className="text-gray-600">
                          {webinar.speaker} • {webinar.date} at {webinar.time}
                        </p>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Register
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Want to Host a Webinar?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We're always looking for industry experts to share their knowledge. 
                Contact us if you'd like to host a webinar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}