import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Video, Calendar, Clock, Users, Play, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Webinars: NextPage = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: 'AI-Powered Digital Transformation: Real-World Success Stories',
      description: 'Join industry leaders as they share their experiences implementing AI solutions and the measurable results achieved.',
      speaker: 'Dr. Sarah Chen',
      speakerTitle: 'Chief AI Officer, TechCorp',
      date: '2025-01-25',
      time: '2:00 PM EST',
      duration: '60 minutes',
      attendees: 150,
      category: 'Artificial Intelligence',
      image: '/webinars/ai-digital-transformation.jpg',
      registrationUrl: '/webinars/register/ai-digital-transformation'
    },
    {
      id: 2,
      title: 'Quantum Computing: From Theory to Practical Applications',
      description: 'Explore how quantum computing is moving from research labs to real-world business applications.',
      speaker: 'Michael Rodriguez',
      speakerTitle: 'Quantum Computing Researcher',
      date: '2025-02-01',
      time: '3:00 PM EST',
      duration: '45 minutes',
      attendees: 89,
      category: 'Quantum Computing',
      image: '/webinars/quantum-practical-applications.jpg',
      registrationUrl: '/webinars/register/quantum-practical-applications'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Defense Strategies',
      description: 'Learn about emerging AI-powered cyber threats and how to protect your organization.',
      speaker: 'David Kim',
      speakerTitle: 'Cybersecurity Expert',
      date: '2025-02-08',
      time: '1:00 PM EST',
      duration: '50 minutes',
      attendees: 203,
      category: 'Cybersecurity',
      image: '/webinars/ai-cybersecurity-threats.jpg',
      registrationUrl: '/webinars/register/ai-cybersecurity-threats'
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: 'Building Scalable Micro SaaS Applications',
      description: 'A comprehensive guide to developing and scaling micro SaaS solutions for maximum impact.',
      speaker: 'Emily Watson',
      speakerTitle: 'SaaS Development Expert',
      date: '2025-01-15',
      duration: '55 minutes',
      views: 1250,
      category: 'Micro SaaS',
      image: '/webinars/micro-saas-scalable.jpg',
      recordingUrl: '/webinars/recordings/micro-saas-scalable'
    },
    {
      id: 5,
      title: 'Edge Computing: The Future of Data Processing',
      description: 'Understanding edge computing architecture and its role in modern data processing strategies.',
      speaker: 'James Wilson',
      speakerTitle: 'Edge Computing Specialist',
      date: '2025-01-08',
      duration: '48 minutes',
      views: 980,
      category: 'Edge Computing',
      image: '/webinars/edge-computing-future.jpg',
      recordingUrl: '/webinars/recordings/edge-computing-future'
    },
    {
      id: 6,
      title: 'Digital Transformation: Lessons from Industry Leaders',
      description: 'Real-world case studies and best practices from successful digital transformation initiatives.',
      speaker: 'Lisa Thompson',
      speakerTitle: 'Digital Transformation Consultant',
      date: '2025-01-01',
      duration: '62 minutes',
      views: 1650,
      category: 'Digital Transformation',
      image: '/webinars/digital-transformation-lessons.jpg',
      recordingUrl: '/webinars/recordings/digital-transformation-lessons'
    }
  ];

  const categories = [
    'All Webinars',
    'Artificial Intelligence',
    'Quantum Computing',
    'Cybersecurity',
    'Micro SaaS',
    'Edge Computing',
    'Digital Transformation',
    'Cloud Architecture'
  ];

  return (
    <MainLayout
      title="Webinars - Zion Tech Group"
      description="Join our expert-led webinars on the latest technology trends, innovations, and best practices in AI, quantum computing, and digital transformation."
      keywords="technology webinars, AI webinars, quantum computing, cybersecurity, digital transformation, online learning"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Video className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Technology Webinars
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Join our expert-led webinars and stay ahead of the curve with insights on the latest 
              technology trends, innovations, and best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Webinars Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="text-left w-full px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Webinar Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total Attendees</span>
                      <span className="font-semibold">5,420</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Recordings Available</span>
                      <span className="font-semibold">24</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Upcoming Events</span>
                      <span className="font-semibold">3</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Webinars Content */}
            <div className="lg:col-span-3">
              {/* Upcoming Webinars */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Upcoming Webinars</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {upcomingWebinars.map((webinar, index) => (
                    <motion.article
                      key={webinar.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
                        <Video className="w-16 h-16 text-white" />
                        <div className="absolute top-4 right-4">
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            LIVE
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {webinar.category}
                          </span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Users className="w-4 h-4 mr-1" />
                            {webinar.attendees} registered
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                          {webinar.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {webinar.description}
                        </p>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                              <Users className="w-4 h-4 text-gray-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-800">{webinar.speaker}</p>
                              <p className="text-xs text-gray-500">{webinar.speakerTitle}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {webinar.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {webinar.time}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {webinar.duration}
                          </div>
                        </div>

                        <a
                          href={webinar.registrationUrl}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors text-center inline-flex items-center justify-center"
                        >
                          Register Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>

              {/* Past Webinars */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Past Webinars</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {pastWebinars.map((webinar, index) => (
                    <motion.article
                      key={webinar.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="h-48 bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center relative">
                        <Play className="w-16 h-16 text-white" />
                        <div className="absolute top-4 right-4">
                          <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            RECORDING
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {webinar.category}
                          </span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Users className="w-4 h-4 mr-1" />
                            {webinar.views} views
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                          {webinar.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {webinar.description}
                        </p>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                              <Users className="w-4 h-4 text-gray-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-800">{webinar.speaker}</p>
                              <p className="text-xs text-gray-500">{webinar.speakerTitle}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {webinar.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {webinar.duration}
                          </div>
                        </div>

                        <a
                          href={webinar.recordingUrl}
                          className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors text-center inline-flex items-center justify-center"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Watch Recording
                        </a>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="mt-12 bg-blue-900 text-white rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Never Miss a Webinar
                </h3>
                <p className="text-gray-200 mb-6">
                  Subscribe to our newsletter and get notified about upcoming webinars and exclusive content.
                </p>
                <div className="max-w-md mx-auto flex space-x-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  />
                  <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Webinars;