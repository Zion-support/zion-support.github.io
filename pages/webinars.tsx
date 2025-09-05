import React, { useState } from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
  Download,
  Share2,
  Bookmark
} from 'lucide-react';

export default function WebinarsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Security', 'Data Analytics', 'DevOps'];

  const webinars = [
    {
      id: 1,
      title: 'AI in Business: Practical Applications',
      description: 'Learn how to implement AI solutions in your business',
      date: '2024-02-15',
      time: '2:00 PM EST',
      duration: '60 min',
      attendees: 150,
      speaker: 'Dr. Sarah Johnson',
      category: 'AI & Machine Learning',
      level: 'Intermediate',
      image: '/images/webinar-ai.jpg',
      price: 'Free'
    },
    {
      id: 2,
      title: 'Cloud Migration Strategies',
      description: 'Best practices for migrating to the cloud',
      date: '2024-02-20',
      time: '3:00 PM EST',
      duration: '45 min',
      attendees: 200,
      speaker: 'Mike Chen',
      category: 'Cloud Computing',
      level: 'Beginner',
      image: '/images/webinar-cloud.jpg',
      price: 'Free'
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential security practices for modern businesses',
      date: '2024-02-25',
      time: '1:00 PM EST',
      duration: '90 min',
      attendees: 300,
      speaker: 'Alex Rodriguez',
      category: 'Security',
      level: 'All Levels',
      image: '/images/webinar-security.jpg',
      price: 'Free'
    }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'All' || webinar.category === selectedCategory;
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout
      title="Webinars & Events - Zion Tech Group"
      description="Join our expert-led webinars and learn about the latest in technology and innovation"
      keywords="webinars, events, technology, learning, AI, cloud, security"
      canonical="https://ziontechgroup.com/webinars"
    >
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
                Join our expert-led webinars and learn about the latest in technology and innovation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search webinars..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Webinars List */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={webinar.image}
                      alt={webinar.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {webinar.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
                        {webinar.level}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {webinar.price}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {webinar.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {webinar.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {webinar.time}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {webinar.attendees} attendees
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Speaker:</p>
                        <p className="font-semibold text-gray-900">{webinar.speaker}</p>
                      </div>
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors duration-300 flex items-center">
                        <Play className="w-4 h-4 mr-2" />
                        Register
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}