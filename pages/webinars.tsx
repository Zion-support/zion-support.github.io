import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  Play,
  ArrowRight,
  Tag,
  ExternalLink
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const webinars = [
  {
    id: 1,
    title: 'AI Revolution: Transforming Business Operations',
    description: 'Learn how AI is revolutionizing business operations and how to implement AI solutions in your organization.',
    presenter: 'Dr. Sarah Johnson',
    date: '2024-02-15',
    time: '2:00 PM EST',
    duration: '60 minutes',
    category: 'AI & Technology',
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: 2,
    title: 'Cloud Migration Strategies for Enterprise',
    description: 'Best practices for migrating your infrastructure to the cloud with minimal downtime and maximum efficiency.',
    presenter: 'Michael Chen',
    date: '2024-02-20',
    time: '3:00 PM EST',
    duration: '45 minutes',
    category: 'IT Services',
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 3,
    title: 'Building Scalable Micro SaaS Solutions',
    description: 'Discover how to build and scale micro SaaS products that generate recurring revenue.',
    presenter: 'Emily Rodriguez',
    date: '2024-02-25',
    time: '1:00 PM EST',
    duration: '90 minutes',
    category: 'Micro SaaS',
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: 4,
    title: 'Cybersecurity in the Digital Age',
    description: 'Protect your business from evolving cyber threats with modern security strategies.',
    presenter: 'David Kim',
    date: '2024-03-01',
    time: '2:30 PM EST',
    duration: '75 minutes',
    category: 'Security',
    image: '/api/placeholder/600/400',
    featured: false
  }
];

const categories = [
  { name: 'All', count: 12 },
  { name: 'AI & Technology', count: 4 },
  { name: 'IT Services', count: 3 },
  { name: 'Micro SaaS', count: 3 },
  { name: 'Security', count: 2 }
];

export default function WebinarsPage() {
  return (
    <MainLayout
      title="Webinars - Zion Tech Group"
      description="Join our expert-led webinars to learn about the latest trends in AI, IT services, and technology solutions."
      keywords="webinars, online training, AI, IT services, technology, education"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Expert Webinars
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Learn from industry experts in live and recorded webinars
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Webinar */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Webinar</h2>
              <p className="text-lg text-gray-600">
                Don't miss our upcoming expert-led sessions
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {webinars.filter(webinar => webinar.featured).map((webinar) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={webinar.image}
                        alt={webinar.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8 text-white">
                      <div className="flex items-center space-x-2 mb-4">
                        <Tag className="w-4 h-4" />
                        <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                          {webinar.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{webinar.title}</h3>
                      <p className="text-gray-200 mb-6">{webinar.description}</p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{webinar.presenter}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{webinar.date} at {webinar.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{webinar.duration}</span>
                        </div>
                      </div>
                      <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center space-x-2">
                        <Play className="w-4 h-4" />
                        <span>Register Now</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Webinars */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Webinars List */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {webinars.map((webinar, index) => (
                    <motion.div
                      key={webinar.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={webinar.image}
                          alt={webinar.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                            {webinar.category}
                          </span>
                          {webinar.featured && (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                          {webinar.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {webinar.description}
                        </p>
                        <div className="space-y-2 text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{webinar.presenter}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{webinar.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{webinar.duration}</span>
                          </div>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                          <Play className="w-4 h-4" />
                          <span>Register</span>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-8">
                Subscribe to our newsletter to get notified about upcoming webinars and events
              </p>
              <div className="max-w-md mx-auto flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-6 py-3 bg-white text-blue-600 rounded-r-lg hover:bg-gray-100 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}