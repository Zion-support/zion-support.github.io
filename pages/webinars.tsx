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
  Video
} from 'lucide-react';
import Layout from '../components/Layout';

const upcomingWebinars = [
  {
    id: 1,
    title: 'AI in Enterprise: Best Practices',
    date: '2024-02-15',
    time: '2:00 PM EST',
    duration: '60 minutes',
    category: 'AI & Machine Learning',
    description: 'Learn how to successfully implement AI solutions in enterprise environments.',
    speaker: 'Dr. Sarah Johnson',
    attendees: 150,
    featured: true
  },
  {
    id: 2,
    title: 'Cloud Migration Strategies',
    date: '2024-02-20',
    time: '3:00 PM EST',
    duration: '45 minutes',
    category: 'Cloud Computing',
    description: 'Discover the best practices for migrating your infrastructure to the cloud.',
    speaker: 'Michael Chen',
    attendees: 89,
    featured: false
  },
  {
    id: 3,
    title: 'Cybersecurity Fundamentals',
    date: '2024-02-25',
    time: '1:00 PM EST',
    duration: '90 minutes',
    category: 'Security',
    description: 'Essential cybersecurity practices for modern businesses.',
    speaker: 'Emily Rodriguez',
    attendees: 203,
    featured: true
  }
];

const categories = ['all', 'AI & Machine Learning', 'Cloud Computing', 'Security', 'Development'];

export default function WebinarsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWebinars = upcomingWebinars.filter(webinar => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout title="Webinars & Events - Zion Tech Group">
      <Head>
        <title>Webinars & Events - Zion Tech Group</title>
        <meta name="description" content="Join our educational webinars and learn from industry experts. Discover the latest trends in technology and business." />
        <meta name="keywords" content="webinars, events, education, technology, learning, training" />
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
                Webinars & <span className="text-yellow-400">Events</span>
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join our educational webinars and learn from industry experts
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search webinars..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
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
            </div>
          </div>
        </section>

        {/* Webinars Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  {webinar.featured && (
                    <div className="flex items-center mb-4">
                      <Star className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="text-sm font-medium text-yellow-600">Featured</span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  
                  <div className="space-y-2 mb-4">
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
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                      {webinar.category}
                    </span>
                  </div>
                  
                  <div className="text-sm text-gray-500 mb-4">
                    Speaker: {webinar.speaker}
                  </div>
                  
                  <Link href="/contact" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
                    Register Now <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 text-indigo-100">
              Subscribe to our newsletter to get notified about upcoming webinars and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}