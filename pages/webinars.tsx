import React, { useState } from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar, 
  Clock, 
  Users, 
  Play,
  ArrowRight,
  ExternalLink,
  Filter,
  Search,
  Star,
  Globe,
  BookOpen
} from 'lucide-react';

export default function WebinarsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Webinars' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'development', name: 'Development' },
    { id: 'business', name: 'Business Strategy' }
  ];

  const webinars = [
    {
      id: 1,
      title: "AI Revolution: Transforming Business Operations",
      description: "Learn how AI is revolutionizing business operations and how to implement AI solutions in your organization.",
      presenter: "Dr. Sarah Johnson",
      date: "2024-02-15",
      time: "2:00 PM EST",
      duration: "60 minutes",
      category: "ai",
      attendees: 1250,
      thumbnail: "/images/webinars/ai-revolution.jpg",
      featured: true,
      status: "upcoming"
    },
    {
      id: 2,
      title: "Cloud Migration Best Practices",
      description: "Discover the essential strategies and best practices for successful cloud migration projects.",
      presenter: "Mike Chen",
      date: "2024-02-20",
      time: "3:00 PM EST",
      duration: "45 minutes",
      category: "cloud",
      attendees: 890,
      thumbnail: "/images/webinars/cloud-migration.jpg",
      featured: true,
      status: "upcoming"
    },
    {
      id: 3,
      title: "Cybersecurity in the Digital Age",
      description: "Explore the latest cybersecurity threats and how to protect your organization from cyber attacks.",
      presenter: "Alex Rodriguez",
      date: "2024-01-25",
      time: "1:00 PM EST",
      duration: "75 minutes",
      category: "security",
      attendees: 2100,
      thumbnail: "/images/webinars/cybersecurity.jpg",
      featured: false,
      status: "recorded"
    },
    {
      id: 4,
      title: "Building Scalable Applications",
      description: "Learn how to design and build applications that can scale with your business growth.",
      presenter: "Emily Watson",
      date: "2024-01-18",
      time: "2:30 PM EST",
      duration: "90 minutes",
      category: "development",
      attendees: 1560,
      thumbnail: "/images/webinars/scalable-apps.jpg",
      featured: false,
      status: "recorded"
    },
    {
      id: 5,
      title: "Digital Transformation Strategy",
      description: "Understand how to create and execute a successful digital transformation strategy for your business.",
      presenter: "David Kim",
      date: "2024-02-28",
      time: "4:00 PM EST",
      duration: "60 minutes",
      category: "business",
      attendees: 0,
      thumbnail: "/images/webinars/digital-transformation.jpg",
      featured: true,
      status: "upcoming"
    },
    {
      id: 6,
      title: "Machine Learning Fundamentals",
      description: "Get started with machine learning concepts and practical implementation techniques.",
      presenter: "Dr. Lisa Park",
      date: "2024-01-10",
      time: "11:00 AM EST",
      duration: "120 minutes",
      category: "ai",
      attendees: 3200,
      thumbnail: "/images/webinars/ml-fundamentals.jpg",
      featured: false,
      status: "recorded"
    }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.presenter.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const upcomingWebinars = filteredWebinars.filter(w => w.status === 'upcoming');
  const recordedWebinars = filteredWebinars.filter(w => w.status === 'recorded');

  return (
    <MainLayout
      title="Webinars - Zion Tech Group"
      description="Join our educational webinars on AI, cloud computing, cybersecurity, and technology trends. Learn from industry experts and stay ahead of the curve."
      keywords="webinars, online events, AI education, cloud computing, cybersecurity, technology training"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
                Join our expert-led webinars and stay ahead of the latest technology trends. 
                Learn from industry leaders and expand your knowledge.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
                
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search webinars..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        {upcomingWebinars.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Upcoming Webinars
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Don't miss these upcoming educational sessions with industry experts.
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
                        <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                          <Play className="w-16 h-16 text-white opacity-80" />
                        </div>
                        {webinar.featured && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <div className="flex items-center mb-2">
                          <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-semibold">
                            {categories.find(c => c.id === webinar.category)?.name}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {webinar.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {webinar.description}
                        </p>

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
                            {webinar.time} ({webinar.duration})
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            {webinar.presenter}
                          </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
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

        {/* Recorded Webinars */}
        {recordedWebinars.length > 0 && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Recorded Webinars
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Watch past webinars at your convenience and learn from our expert sessions.
                </p>
              </motion.div>

              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {recordedWebinars.map((webinar, index) => (
                    <motion.div
                      key={webinar.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative">
                        <div className="h-48 bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center">
                          <Play className="w-16 h-16 text-white opacity-80" />
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Recorded
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center mb-2">
                          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-semibold">
                            {categories.find(c => c.id === webinar.category)?.name}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {webinar.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {webinar.description}
                        </p>

                        <div className="space-y-2 mb-6">
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            {new Date(webinar.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            {webinar.duration}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            {webinar.presenter}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            {webinar.attendees.toLocaleString()} attendees
                          </div>
                        </div>

                        <button className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 font-semibold">
                          Watch Recording
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want to Host a Webinar?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Are you an expert in your field? Partner with us to share your knowledge 
                and reach a wider audience through our webinar platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Partner With Us
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}