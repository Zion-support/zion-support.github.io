import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { 
  Calendar, 
  Clock, 
  Users, 
  ArrowRight, 
  Play, 
  Download,
=======
import {
  Play,
  Calendar,
  Clock,
  Users,
  ExternalLink,
  ArrowRight,
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
  Filter,
  Search,
  Star,
  BookOpen,
  Video,
<<<<<<< HEAD
  ExternalLink
} from 'lucide-react';

const upcomingWebinars = [
  {
    title: 'AI in Enterprise: Best Practices',
    date: '2024-02-15',
    time: '2:00 PM EST',
    duration: '60 minutes',
    attendees: 150,
    description: 'Learn how to implement AI solutions in your enterprise environment.',
    category: 'AI & Machine Learning',
    speaker: 'Dr. Sarah Johnson',
    price: 'Free'
  },
  {
    title: 'Cloud Migration Strategies',
    date: '2024-02-22',
    time: '3:00 PM EST',
    duration: '45 minutes',
    attendees: 200,
    description: 'Discover the best practices for migrating to the cloud.',
    category: 'Cloud Computing',
    speaker: 'Mike Chen',
    price: 'Free'
  },
  {
    title: 'Cybersecurity Trends 2024',
    date: '2024-03-01',
    time: '1:00 PM EST',
    duration: '90 minutes',
    attendees: 300,
    description: 'Stay ahead of the latest cybersecurity threats and solutions.',
    category: 'Cybersecurity',
    speaker: 'Alex Rodriguez',
    price: 'Free'
  }
];

const pastWebinars = [
  {
    title: 'Digital Transformation Roadmap',
    date: '2024-01-15',
    duration: '75 minutes',
    attendees: 180,
    description: 'Learn how to create a successful digital transformation strategy.',
    category: 'Digital Transformation',
    speaker: 'Jennifer Lee',
    recordingUrl: '#',
    slidesUrl: '#'
  },
  {
    title: 'DevOps Best Practices',
    date: '2024-01-08',
    duration: '60 minutes',
    attendees: 220,
    description: 'Master the art of DevOps implementation and automation.',
    category: 'DevOps',
    speaker: 'David Kim',
    recordingUrl: '#',
    slidesUrl: '#'
  }
];

export default function WebinarsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'AI & Machine Learning',
    'Cloud Computing',
    'Cybersecurity',
    'Digital Transformation',
    'DevOps'
  ];

  const filteredWebinars = upcomingWebinars.filter(webinar => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>Webinars - Zion Tech Group</title>
        <meta name="description" content="Join our educational webinars and learn from industry experts." />
=======
  Download
} from 'lucide-react';

export default function WebinarsPage() {
  return (
    <>
      <Head>
        <title>Webinars & Events - Zion Tech Group</title>
        <meta name="description" content="Join our educational webinars and learn from industry experts. Discover the latest trends in technology and business." />
        <meta name="keywords" content="webinars, events, education, technology, learning, training" />
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
<<<<<<< HEAD
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Educational Webinars
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Learn from industry experts and stay ahead of the latest technology trends
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  View Upcoming Webinars
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  Browse Past Webinars
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search webinars..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <Filter className="text-gray-400 mt-3" size={20} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Upcoming Webinars</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWebinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                        {webinar.category}
                      </span>
                      <span className="text-green-600 font-semibold">{webinar.price}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
                    <p className="text-gray-600 mb-4">{webinar.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-500">
                        <Calendar size={16} className="mr-2" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock size={16} className="mr-2" />
                        <span>{webinar.time} ({webinar.duration})</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Users size={16} className="mr-2" />
                        <span>{webinar.attendees} registered</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <span className="mr-2">👤</span>
                        <span>{webinar.speaker}</span>
                      </div>
                    </div>
                    <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center">
                      <Play size={16} className="mr-2" />
                      Register Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Webinars */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Past Webinars</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastWebinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {webinar.category}
                      </span>
                      <span className="text-gray-500 text-sm">{webinar.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
                    <p className="text-gray-600 mb-4">{webinar.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-500">
                        <Clock size={16} className="mr-2" />
                        <span>{webinar.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Users size={16} className="mr-2" />
                        <span>{webinar.attendees} attended</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <span className="mr-2">👤</span>
                        <span>{webinar.speaker}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center">
                        <Video size={16} className="mr-2" />
                        Watch
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
                        <Download size={16} className="mr-2" />
                        Slides
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get notified about upcoming webinars and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
=======
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Webinars & <span className="text-yellow-400">Events</span>
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join our educational webinars and learn from industry experts
              </p>
            </motion.div>
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
          </div>
        </section>
      </div>
    </>
  );
}