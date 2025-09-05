import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import MainLayout from '../src/components/layout/MainLayout';
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

const liveWebinars = [
  {
    id: 1,
    title: "AI in Business: Practical Applications",
    date: "2024-02-15",
    time: "2:00 PM EST",
    presenter: "Dr. Sarah Johnson",
    description: "Learn how AI is transforming business operations and discover practical applications for your organization.",
    image: "/api/placeholder/400/300",
    registrationLink: "/register/webinar-1"
  },
  {
    id: 2,
    title: "Cloud Security Best Practices",
    date: "2024-02-22",
    time: "1:00 PM EST",
    presenter: "Michael Chen",
    description: "Essential security practices for cloud infrastructure and data protection strategies.",
    image: "/api/placeholder/400/300",
    registrationLink: "/register/webinar-2"
  }
];

const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'ai', name: 'AI & Machine Learning' },
  { id: 'cloud', name: 'Cloud Computing' },
  { id: 'security', name: 'Cybersecurity' },
  { id: 'devops', name: 'DevOps' },
  { id: 'business', name: 'Business Strategy' }
];

export default function WebinarsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  return (
    <>
      <Head>
        <title>Webinars & Events - Zion Tech Group</title>
        <meta name="description" content="Join our educational webinars and learn from industry experts. Discover the latest trends in technology and business." />
        <meta name="keywords" content="webinars, events, education, technology, learning, training" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Educational{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Webinars
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn from industry experts through our comprehensive webinar series. 
                Covering AI, cloud solutions, cybersecurity, and more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Live Webinars */}
        {liveWebinars.length > 0 && (
          <section className="py-16 bg-red-50">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                  Live Now
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Join our live webinars happening right now.
                </p>
              </motion.div>

              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {liveWebinars.map((webinar, index) => (
                    <motion.div
                      key={webinar.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-red-200"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative">
                        <img
                          src={webinar.image}
                          alt={webinar.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          LIVE
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <button className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full transition-colors duration-300">
                            <Play className="w-8 h-8" />
                          </button>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h3>
                        <p className="text-gray-600 mb-4">{webinar.description}</p>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{webinar.attendees} watching</span>
                        </div>
                        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 font-semibold">
                          Join Live
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Search and Filter */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search webinars..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        {upcomingWebinars.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Upcoming Webinars
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Register for our upcoming educational sessions.
                </p>
              </motion.div>

              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {upcomingWebinars.map((webinar, index) => (
                    <motion.div
                      key={webinar.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative">
                        <img
                          src={webinar.image}
                          alt={webinar.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          UPCOMING
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h3>
                        <p className="text-gray-600 mb-4">{webinar.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{new Date(webinar.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{webinar.time} ({webinar.duration})</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Users className="w-4 h-4 mr-2" />
                            <span>{webinar.speaker} - {webinar.speakerTitle}</span>
                          </div>
                        </div>

                        <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 font-semibold">
                          Register Now
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Past Webinars */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Past Webinars
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Watch recordings of our previous educational sessions.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastWebinars.map((webinar, index) => (
                  <motion.div
                    key={webinar.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative">
                      <img
                        src={webinar.image}
                        alt={webinar.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <button className="bg-white hover:bg-gray-100 text-gray-900 p-4 rounded-full transition-colors duration-300">
                          <Play className="w-8 h-8" />
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h3>
                      <p className="text-gray-600 mb-4">{webinar.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(webinar.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{webinar.duration}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{webinar.attendees} attendees</span>
                        </div>
                        {webinar.rating > 0 && (
                          <div className="flex items-center text-sm text-gray-500">
                            <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                            <span>{webinar.rating}/5.0</span>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <button className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 font-semibold">
                          Watch Now
                        </button>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors duration-300">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Webinars & <span className="text-yellow-400">Events</span>
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join our educational webinars and learn from industry experts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Subscribe to Updates
                </Link>
                <Link
                  href="/tutorials"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold"
                >
                  Browse Tutorials
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      </>
    );
  }