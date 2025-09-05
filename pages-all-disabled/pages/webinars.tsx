import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Play,
  Calendar,
  Clock,
  Users,
  ExternalLink,
  ArrowRight,
  Filter,
  Search,
  Star,
  BookOpen,
  Video,
  Download
} from 'lucide-react';

export default function WebinarsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const webinars = [
    {
      id: 1,
      title: 'AI and Machine Learning in Business',
      description: 'Learn how to implement AI solutions in your business processes',
      date: '2024-02-15',
      time: '2:00 PM EST',
      duration: '60 minutes',
      attendees: 150,
      category: 'AI',
      featured: true,
      thumbnail: '/images/webinar-ai.jpg'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      description: 'Expert tips for successful cloud migration projects',
      date: '2024-02-20',
      time: '3:00 PM EST',
      duration: '45 minutes',
      attendees: 89,
      category: 'Cloud',
      featured: false,
      thumbnail: '/images/webinar-cloud.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity practices for modern businesses',
      date: '2024-02-25',
      time: '1:00 PM EST',
      duration: '90 minutes',
      attendees: 203,
      category: 'Security',
      featured: true,
      thumbnail: '/images/webinar-security.jpg'
    }
  ];

  const categories = ['all', 'AI', 'Cloud', 'Security', 'Development'];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>Webinars & Events - Zion Tech Group</title>
        <meta name="description" content="Join our expert-led webinars and events to learn about the latest in technology and innovation." />
        <meta name="keywords" content="webinars, events, technology, learning, AI, cloud, security" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Webinars & Events
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
                Join our expert-led webinars and events to learn about the latest in technology and innovation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search webinars..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'All' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Webinars Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                    {webinar.featured && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium">
                        {webinar.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {webinar.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {webinar.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {webinar.time} ({webinar.duration})
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        {webinar.attendees} attendees
                      </div>
                    </div>
                    
                    <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
                      <Play className="w-4 h-4 mr-2" />
                      Register Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredWebinars.length === 0 && (
              <div className="text-center py-12">
                <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No webinars found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}