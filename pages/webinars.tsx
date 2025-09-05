import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Play,
  Calendar,
  Clock,
  Users,
  ArrowRight,
  Star,
  Award,
  Globe,
  Zap,
  Shield,
  Brain,
  Cloud
} from 'lucide-react';

const upcomingWebinars = [
  {
    id: 1,
    title: 'AI-Powered Business Transformation',
    description: 'Learn how artificial intelligence can revolutionize your business processes and drive growth.',
    date: '2024-02-15',
    time: '2:00 PM EST',
    duration: '60 minutes',
    speaker: 'Dr. Sarah Johnson',
    speakerTitle: 'AI Solutions Architect',
    category: 'AI & Machine Learning',
    level: 'Intermediate',
    attendees: 245,
    maxAttendees: 500,
    image: '/images/webinar-ai.jpg',
    icon: Brain,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Cloud Migration Best Practices',
    description: 'Discover proven strategies for migrating your infrastructure to the cloud successfully.',
    date: '2024-02-22',
    time: '3:00 PM EST',
    duration: '45 minutes',
    speaker: 'Michael Chen',
    speakerTitle: 'Cloud Solutions Engineer',
    category: 'Cloud Computing',
    level: 'Beginner',
    attendees: 189,
    maxAttendees: 300,
    image: '/images/webinar-cloud.jpg',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'Cybersecurity in 2024',
    description: 'Stay ahead of emerging threats with the latest cybersecurity strategies and tools.',
    date: '2024-03-01',
    time: '1:00 PM EST',
    duration: '75 minutes',
    speaker: 'Alex Rodriguez',
    speakerTitle: 'Chief Security Officer',
    category: 'Security',
    level: 'Advanced',
    attendees: 156,
    maxAttendees: 200,
    image: '/images/webinar-security.jpg',
    icon: Shield,
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 4,
    title: 'Performance Optimization Techniques',
    description: 'Learn advanced techniques to optimize your applications for maximum performance.',
    date: '2024-03-08',
    time: '2:30 PM EST',
    duration: '50 minutes',
    speaker: 'Emily Watson',
    speakerTitle: 'Performance Engineer',
    category: 'Development',
    level: 'Intermediate',
    attendees: 98,
    maxAttendees: 250,
    image: '/images/webinar-performance.jpg',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500'
  }
];

const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Security', 'Development'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function WebinarsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWebinars = upcomingWebinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'All' || webinar.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || webinar.level === selectedLevel;
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>Webinars - Zion Tech Group</title>
        <meta name="description" content="Join our educational webinars on AI, cloud computing, security, and more." />
        <meta name="keywords" content="webinars, education, AI, cloud computing, security, technology" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Educational{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Webinars
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Join our expert-led webinars to learn about the latest technologies, 
                best practices, and industry trends.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col lg:flex-row gap-6 items-center justify-between"
            >
              {/* Search */}
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search webinars..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Level Filter */}
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedLevel === level
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Webinars Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Webinar Image */}
                  <div className={`h-48 bg-gradient-to-r ${webinar.color} flex items-center justify-center`}>
                    <webinar.icon className="w-16 h-16 text-white" />
                  </div>

                  {/* Webinar Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                        {webinar.category}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {webinar.level}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {webinar.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {webinar.description}
                    </p>

                    {/* Speaker Info */}
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <Users className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{webinar.speaker}</p>
                        <p className="text-sm text-gray-600">{webinar.speakerTitle}</p>
                      </div>
                    </div>

                    {/* Webinar Details */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(webinar.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {webinar.time} • {webinar.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {webinar.attendees} / {webinar.maxAttendees} registered
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Registration</span>
                        <span>{Math.round((webinar.attendees / webinar.maxAttendees) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(webinar.attendees / webinar.maxAttendees) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Register Button */}
                    <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center">
                      Register Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredWebinars.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No webinars found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-indigo-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Want to Host a Webinar?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Share your expertise with our community by hosting your own webinar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Become a Speaker
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}